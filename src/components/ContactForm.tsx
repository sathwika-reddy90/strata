import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

const productOptions = ["Granite", "Tiles", "Porcelain", "Quartz", "Not Sure"];
const projectTypeOptions = ["Residential", "Commercial", "Hospitality", "Renovation", "New Build"];

const inputClasses =
  "w-full border border-stone-300 bg-warm-white px-4 py-3.5 text-sm text-ink placeholder:text-taupe outline-none transition-colors focus:border-ink";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center border border-stone-200 bg-warm-white p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-clay text-clay">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl text-ink">Enquiry Received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-light">
          Thank you for reaching out. Our surface specialists will get back to you within one
          business day to discuss your project.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-semibold uppercase tracking-[0.12em] text-clay underline underline-offset-4"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <input required name="name" placeholder="Full Name" className={inputClasses} />
          <input required name="phone" type="tel" placeholder="Phone Number" className={inputClasses} />
        </div>
        <input required name="email" type="email" placeholder="Email Address" className={inputClasses} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <select required name="projectType" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Project Type
            </option>
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select required name="productInterest" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Product Interest
            </option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your project"
          className={inputClasses}
        />

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-warm-white transition-colors duration-300 hover:bg-clay disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>
      </motion.form>
    </AnimatePresence>
  );
}
