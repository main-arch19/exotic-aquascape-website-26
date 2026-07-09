import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

/* ==================================================================
 * WEB VITALS — real-user performance monitoring.
 *
 * Logs Core Web Vitals to the console in dev. To pipe into an
 * analytics tool (GA4, Clarity custom events, a serverless endpoint),
 * fill in `sendToAnalytics` below — this is the single place metrics
 * flow through.
 * ================================================================== */

function sendToAnalytics(metric: Metric) {
  if (import.meta.env.DEV) {
    console.info(`[web-vitals] ${metric.name}`, {
      value: Math.round(metric.value),
      rating: metric.rating,
    });
  }

  // TODO: forward to GA4 / Clarity / a serverless endpoint, e.g.:
  // window.gtag?.("event", metric.name, {
  //   value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
  //   metric_rating: metric.rating,
  // });
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
