/* ==================================================================
 * LEAD CAPTURE — single source of truth for every submission.
 *
 * The quiz/configurator and the contact form both emit a `LeadPayload`
 * and call `submitLead()`. Today that POSTs to a form endpoint (or falls
 * back to a mailto). This is deliberately the ONLY place submission is
 * wired, so Phase 2 (Cal.com booking -> dashboard) is a one-line change.
 *
 * -------------------------------------------------------------------
 * PHASE 2 — CALENDAR -> DASHBOARD WEBHOOK CONTRACT
 * When Cal.com is added, configure a webhook on the BOOKING_CREATED
 * trigger pointing at your automation endpoint (n8n or a serverless
 * function). Map the Cal.com booking + these fields into your datastore
 * (the custom dashboard is currently on mock data — back it with a real
 * store first: Supabase/Postgres, a Google Sheet, or a new /api/leads
 * route on the Next.js dashboard). The lead record should be:
 *
 *   {
 *     name, phone, email, parish,
 *     space_type, feature_type, size_band, budget_band, timeline,
 *     recommended_service,          // from recommendService()
 *     source: "website",
 *     status: "New",
 *     cal_booking_id,               // add in Phase 2
 *     created_at
 *   }
 *
 * Then swap SUBMIT_ENDPOINT below (or point Cal.com's confirmation flow
 * at the same endpoint) so bookings and web leads land in one pipeline.
 * ================================================================== */

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  parish: string;
  space_type: string;
  feature_type: string;
  size_band: string;
  budget_band: string;
  timeline: string;
  recommended_service?: string;
  message?: string;
  source: "website";
  status: "New";
  created_at: string;
};

export type LeadInput = Partial<Omit<LeadPayload, "source" | "status" | "created_at">>;

// TODO: paste your Formspree/webhook endpoint here to go live.
// e.g. "https://formspree.io/f/xxxxxxx"  — leave empty to use the mailto fallback.
const SUBMIT_ENDPOINT = "";
const FALLBACK_EMAIL = "hello@exoticaquascape.com"; // TODO: confirm real inbox

export function buildLead(input: LeadInput): LeadPayload {
  return {
    name: input.name ?? "",
    phone: input.phone ?? "",
    email: input.email ?? "",
    parish: input.parish ?? "",
    space_type: input.space_type ?? "",
    feature_type: input.feature_type ?? "",
    size_band: input.size_band ?? "",
    budget_band: input.budget_band ?? "",
    timeline: input.timeline ?? "",
    recommended_service: input.recommended_service,
    message: input.message,
    source: "website",
    status: "New",
    created_at: new Date().toISOString(),
  };
}

export type SubmitResult = { ok: boolean; via: "endpoint" | "mailto" };

export async function submitLead(input: LeadInput): Promise<SubmitResult> {
  const lead = buildLead(input);

  // Always log in dev so the payload shape is verifiable end-to-end.
  if (import.meta.env.DEV) console.info("[lead] captured", lead);

  if (SUBMIT_ENDPOINT) {
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(lead),
      });
      if (res.ok) return { ok: true, via: "endpoint" };
    } catch {
      /* fall through to mailto */
    }
  }

  // Fallback: open the user's mail client with a prefilled enquiry.
  const subject = encodeURIComponent(`New enquiry — ${lead.name || "Website lead"}`);
  const body = encodeURIComponent(
    [
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email}`,
      `Parish: ${lead.parish}`,
      `Space: ${lead.space_type}`,
      `Interested in: ${lead.feature_type}`,
      `Size: ${lead.size_band}`,
      `Budget: ${lead.budget_band}`,
      `Timeline: ${lead.timeline}`,
      lead.recommended_service ? `Recommended: ${lead.recommended_service}` : "",
      lead.message ? `\nMessage:\n${lead.message}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
  if (typeof window !== "undefined") {
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
  }
  return { ok: true, via: "mailto" };
}
