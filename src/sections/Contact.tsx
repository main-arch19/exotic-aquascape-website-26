import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND } from "../data";
import { submitLead } from "../lib/leads";
import { TextField, TextArea, SelectField } from "../components/ui/Field";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    parish: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      parish: formData.parish,
      space_type: formData.interest,
      message: formData.message,
    });
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", parish: "", interest: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl text-deep-water sm:text-5xl">Get in touch</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <TextField
                id="name"
                label="Name"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                placeholder="Your name"
                required
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  placeholder="hello@example.com"
                  required
                />
                <TextField
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  placeholder="+1 (876) 123-4567"
                />
              </div>
              <SelectField
                id="parish"
                label="Your parish"
                value={formData.parish}
                onChange={(v) => setFormData({ ...formData, parish: v })}
                options={[
                  { value: "kingston", label: "Kingston" },
                  { value: "st-andrew", label: "St. Andrew" },
                  { value: "st-catherine", label: "St. Catherine" },
                  { value: "clarendon", label: "Clarendon" },
                  { value: "manchester", label: "Manchester" },
                  { value: "st-elizabeth", label: "St. Elizabeth" },
                  { value: "westmoreland", label: "Westmoreland" },
                  { value: "hanover", label: "Hanover" },
                  { value: "st-james", label: "St. James" },
                  { value: "trelawny", label: "Trelawny" },
                  { value: "st-ann", label: "St. Ann" },
                  { value: "st-mary", label: "St. Mary" },
                  { value: "portland", label: "Portland" },
                  { value: "st-thomas", label: "St. Thomas" },
                ]}
                placeholder="Select your parish"
              />
              <SelectField
                id="interest"
                label="What interests you?"
                value={formData.interest}
                onChange={(v) => setFormData({ ...formData, interest: v })}
                options={[
                  { value: "koi-ponds", label: "Koi Ponds" },
                  { value: "fountains", label: "Fountains" },
                  { value: "water-gardens", label: "Water Gardens" },
                  { value: "aquariums", label: "Planted Aquariums" },
                  { value: "maintenance", label: "Maintenance plans" },
                  { value: "other", label: "Something else" },
                ]}
                placeholder="Tell us what you're interested in"
              />
              <TextArea
                id="message"
                label="Message"
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
                placeholder="Anything else we should know?"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading || !formData.name || !formData.email}
              >
                {loading ? "Sending..." : submitted ? "Message sent!" : "Send message"}
              </Button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.15} className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-2xl text-deep-water">Direct contact</h3>
              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="flex items-start gap-4 rounded-xl border border-deep-water/10 bg-white/60 p-4 transition-all hover:border-emerald hover:bg-white"
                >
                  <Phone className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
                  <div>
                    <p className="font-medium text-deep-water">Phone</p>
                    <p className="text-sm text-ink-600">{BRAND.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-4 rounded-xl border border-deep-water/10 bg-white/60 p-4 transition-all hover:border-emerald hover:bg-white"
                >
                  <Mail className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
                  <div>
                    <p className="font-medium text-deep-water">Email</p>
                    <p className="text-sm text-ink-600">{BRAND.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-xl border border-deep-water/10 bg-white/60 p-4">
                  <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
                  <div>
                    <p className="font-medium text-deep-water">Location</p>
                    <p className="text-sm text-ink-600">{BRAND.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-deep-water/10 bg-white/60 p-4">
                  <Clock className="mt-0.5 h-6 w-6 shrink-0 text-emerald" />
                  <div>
                    <p className="font-medium text-deep-water">Hours</p>
                    <p className="text-sm text-ink-600">{BRAND.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-deep-water">Prefer to chat?</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Message us on Instagram or WhatsApp and we'll get back to you within an hour during business hours.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-emerald px-4 py-2 text-sm font-medium text-emerald transition-colors hover:bg-emerald hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-[#25D366] px-4 py-2 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
