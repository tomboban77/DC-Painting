"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "services", string>>;

const timelines = ["As soon as possible", "Within 2–4 weeks", "In 1–3 months", "Just planning"];
const propertyTypes = ["House", "Condo / Apartment", "Townhouse", "Commercial"];

export function QuoteForm() {
  const params = useSearchParams();
  const initial = params.get("service");
  const [selected, setSelected] = useState<string[]>(initial && services.some((s) => s.slug === initial) ? [initial] : []);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const toggle = (slug: string) => setSelected((v) => (v.includes(slug) ? v.filter((x) => x !== slug) : [...v, slug]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const email = String(data.get("email") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (phone.length < 10) next.phone = "Please enter a valid phone number.";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "That email doesn’t look right.";
    if (selected.length === 0) next.services = "Choose at least one service.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }

    // TODO: connect to a backend / email service. For now we simulate a successful submission.
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[32rem] flex-col items-center justify-center text-center"
          role="status"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-navy text-gold-soft">
            <Check className="h-9 w-9" strokeWidth={2} />
          </span>
          <h3 className="display mt-8 text-5xl text-navy">Thank you!</h3>
          <p className="mt-4 max-w-md text-muted">
            Your request is in. We’ll be in touch within one business day to talk through your project. Need us sooner? Call{" "}
            <a href={site.phone.href} className="font-semibold text-navy underline decoration-gold underline-offset-4">
              {site.phone.display}
            </a>
            .
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-ghost mt-10">
            Send another request
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0, y: -12 }} className="grid gap-8">
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.2em] text-navy">
              What can we help with? <span className="text-gold">*</span>
            </legend>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-describedby={errors.services ? "services-error" : undefined}>
              {services.map((s) => {
                const on = selected.includes(s.slug);
                return (
                  <button
                    key={s.slug}
                    type="button"
                    name="services"
                    aria-pressed={on}
                    onClick={() => toggle(s.slug)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all ${
                      on ? "border-navy bg-navy text-paper" : "border-line bg-paper text-ink/80 hover:border-navy/50"
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: s.chip.color }} />
                    {s.name}
                  </button>
                );
              })}
            </div>
            {errors.services && <p id="services-error" className="mt-3 text-sm text-red-700">{errors.services}</p>}
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" name="name" required autoComplete="name" error={errors.name} />
            <Field label="Phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" error={errors.phone} />
            <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
            <Select label="City" name="city" options={[...site.serviceAreas, "Other GTA area"]} />
            <Select label="Property type" name="property" options={propertyTypes} />
            <Select label="Timeline" name="timeline" options={timelines} />
          </div>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy">Tell us about your project</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Rooms, approximate size, colours you’re considering, anything we should know…"
              className="mt-3 w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-gold"
            />
          </label>

          <div className="flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-stone">
              We’ll only use your details to respond to this request. No spam, ever.
            </p>
            <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Request my free quote <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  required,
  ...props
}: { label: string; name: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `f-${props.name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.2em] text-navy">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-3 h-12 w-full border-b bg-transparent text-base text-ink outline-none transition-colors focus:border-gold ${
          error ? "border-red-700" : "border-line"
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.2em] text-navy">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-3 h-12 w-full appearance-none border-b border-line bg-transparent bg-[length:12px] bg-[right_4px_center] bg-no-repeat text-base text-ink outline-none transition-colors focus:border-gold"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23a9823f' stroke-width='1.5'/></svg>\")",
        }}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
