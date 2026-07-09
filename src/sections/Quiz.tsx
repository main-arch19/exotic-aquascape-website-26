import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { QUIZ_STEPS, recommendService } from "../data";
import { submitLead } from "../lib/leads";
import SectionHeading from "../components/ui/SectionHeading";
import { TextField, SelectField } from "../components/ui/Field";
import Button from "../components/ui/Button";
import Progress from "../components/ui/Progress";
import Reveal from "../components/motion/Reveal";

type Answers = Record<string, string>;

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentStep = QUIZ_STEPS[step];
  const isLastStep = step === QUIZ_STEPS.length - 1;
  const allAnswered = QUIZ_STEPS.every((s) => answers[s.key]);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep.key]: value });
  };

  const goNext = () => {
    if (step < QUIZ_STEPS.length - 1) setStep(step + 1);
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  // Auto-advance to next step when answer is selected, or submit on last step
  useEffect(() => {
    if (!answers[currentStep.key]) return; // Only proceed if answer was just set

    if (isLastStep) {
      // On last step, auto-submit after brief delay
      const timer = setTimeout(() => handleSubmit(), 600);
      return () => clearTimeout(timer);
    } else {
      // On other steps, auto-advance after brief delay
      const timer = setTimeout(() => goNext(), 500);
      return () => clearTimeout(timer);
    }
  }, [answers[currentStep.key]]);

  const handleSubmit = async () => {
    if (!allAnswered) return;
    const rec = recommendService(answers);
    setLoading(true);
    await submitLead({
      space_type: answers.space_type,
      feature_type: answers.feature_type,
      size_band: answers.size_band,
      budget_band: answers.budget_band,
      timeline: answers.timeline,
      recommended_service: rec.serviceId,
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    const rec = recommendService(answers);
    return (
      <section id="quiz" className="bg-sand py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10 text-emerald">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h2 className="font-display text-4xl text-deep-water sm:text-5xl">{rec.headline}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{rec.body}</p>
            <p className="mt-8 text-sm text-ink-400">
              Your answers have been recorded. Let's talk specifics in a free on-site consultation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button href="#contact" variant="primary" size="lg">
                Book a consultation
              </Button>
              <Button href="#portfolio" variant="outlineDark" size="lg">
                See more work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="bg-emerald/5 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Find your perfect fit"
          title="Take our free 2-minute quiz"
          subtitle="Answer just a few questions and we'll recommend the water feature that matches your space, style and budget."
        />

        <div className="mt-14 space-y-10">
          {/* Progress */}
          <Reveal>
            <Progress value={(step + 1) / QUIZ_STEPS.length} />
          </Reveal>

          {/* Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-2xl text-deep-water">{currentStep.question}</h3>
              {currentStep.helper && (
                <p className="mt-2 text-sm text-ink-400">{currentStep.helper}</p>
              )}

              <fieldset className="mt-6 space-y-3">
                {currentStep.choices.map((choice) => (
                  <label
                    key={choice.value}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-deep-water/10 bg-white p-4 transition-all duration-200 hover:border-emerald has-[:checked]:border-emerald has-[:checked]:bg-emerald/5"
                  >
                    <input
                      type="radio"
                      name={currentStep.key}
                      value={choice.value}
                      checked={answers[currentStep.key] === choice.value}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="h-5 w-5 accent-emerald"
                    />
                    <div>
                      <span className="font-medium text-deep-water">{choice.label}</span>
                      {choice.hint && (
                        <span className="block text-xs text-ink-400">{choice.hint}</span>
                      )}
                    </div>
                  </label>
                ))}
              </fieldset>
            </motion.div>
          </AnimatePresence>

          {/* Contact capture on last step */}
          {isLastStep && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="border-t border-deep-water/10 pt-8"
            >
              <p className="mb-5 font-display text-lg text-deep-water">Where should we send your recommendation?</p>
              <div className="space-y-4">
                <TextField
                  id="name"
                  label="Name"
                  value={answers.name || ""}
                  onChange={(v) => setAnswers({ ...answers, name: v })}
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={answers.email || ""}
                    onChange={(v) => setAnswers({ ...answers, email: v })}
                    required
                  />
                  <TextField
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={answers.phone || ""}
                    onChange={(v) => setAnswers({ ...answers, phone: v })}
                    required
                  />
                </div>
                <SelectField
                  id="parish"
                  label="Your parish"
                  value={answers.parish || ""}
                  onChange={(v) => setAnswers({ ...answers, parish: v })}
                  required
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
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={goPrev}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full border border-deep-water/20 px-4 py-2.5 text-sm font-medium text-deep-water transition-colors hover:border-deep-water disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <span className="text-xs text-ink-400">
              {step + 1} / {QUIZ_STEPS.length}
            </span>
            {loading && (
              <span className="text-sm font-medium text-koi">Sending...</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
