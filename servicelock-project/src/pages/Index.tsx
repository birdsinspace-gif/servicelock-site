"use client";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
} from "lucide-react";
import serviceLockLogo from "@/assets/servicelock-logo.png";

const DEMO_NUMBER = "+14704085618";
const DISPLAY_NUMBER = "(470) 408-5618";
const DEMO_SMS_LINK = "sms:+14704085618";
const BOOKING_URL = "https://calendly.com/kyledchristopher/demo";
const TRIAL_SUCCESS_ROUTE = "/trial-started";

type FormState = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  website: string;
  bestTimeToReachYou: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  phoneNumber: "",
  website: "",
  bestTimeToReachYou: "",
};

const nextStepCards = [
  {
    eyebrow: "Primary Path",
    title: "Start Free 14-Day Trial",
    description:
      "Get started immediately. No credit card required. Simple setup. Start capturing missed-call leads right away.",
    ctaLabel: "Start My Free Trial",
    href: "#trial",
    featured: true,
    microcopy: "No credit card required • Simple setup • Be live fast",
  },
  {
    eyebrow: "Live Demo",
    title: "Try the Live Demo",
    description:
      "Call or text 470-408-5618 to experience the missed-call flow for yourself and see exactly how it works. By calling, you agree to receive a demonstration SMS. Reply STOP to opt out.",
    ctaLabel: "Call the Demo Line",
    href: `tel:${DEMO_NUMBER}`,
    secondaryLabel: "Text the Demo Line",
    secondaryHref: DEMO_SMS_LINK,
  },
  {
    eyebrow: "Talk-First Path",
    title: "Prefer to Talk First?",
    description:
      "Book a quick walkthrough and we’ll answer your questions, show you how it works, and help you decide if it’s the right fit.",
    ctaLabel: "Book a Demo",
    href: BOOKING_URL,
    external: true,
  },
];

const faqItems = [
  [
    "Does ServiceLock replace my receptionist or CSR?",
    "No. It activates when you miss a call so follow-up starts immediately while your team stays focused on live jobs.",
  ],
  [
    "How fast can we get live?",
    "Fast. The trial is designed to be simple, guided, and easy to launch without a complicated rollout.",
  ],
  [
    "Do I need a credit card to start?",
    "No credit card is required for the 14-day trial.",
  ],
  [
    "Can I try it before booking a sales call?",
    "Yes. Start the free trial right away, try the live demo line, or book a demo if you prefer a walkthrough first.",
  ],
  [
    "Who is this built for?",
    "ServiceLock is built for service businesses where missed inbound calls can quickly turn into lost jobs and lost revenue.",
  ],
];

function ParallaxWord({
  text,
  y,
  opacity,
  className = "",
}: {
  text: string;
  y: MotionValue<string | number>;
  opacity: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y, opacity }}
      className={`pointer-events-none absolute inset-x-0 text-center font-black uppercase tracking-[0.32em] ${className}`}
      aria-hidden="true"
    >
      {text}
    </motion.div>
  );
}

function BrandLock({ className = "" }: { className?: string }) {
  return (
    <img
      src={serviceLockLogo}
      alt="ServiceLock"
      className={className}
      width={1536}
      height={1024}
    />
  );
}

export default function ServiceLock() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const heroRef = useRef<HTMLElement | null>(null);
  const roiRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: roiProgress } = useScroll({
    target: roiRef,
    offset: ["start end", "end start"],
  });

  const heroWordY = useTransform(heroProgress, [0, 1], ["0%", "28%"]);
  const heroWordOpacity = useTransform(
    heroProgress,
    [0, 0.45, 1],
    [0.16, 0.08, 0]
  );
  const roiWordY = useTransform(roiProgress, [0, 1], ["8%", "-15%"]);
  const roiWordOpacity = useTransform(roiProgress, [0, 0.5, 1], [0, 0.08, 0]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setFormData(initialFormState);
      navigate(data?.next || TRIAL_SUCCESS_ROUTE);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <nav
        id="top"
        className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/88 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <BrandLock className="h-10 w-10 rounded-2xl object-cover shadow-[0_0_30px_rgba(234,179,8,0.28)]" />
            <span className="text-2xl font-semibold tracking-tight">
              ServiceLock
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#how" className="transition-colors hover:text-yellow-400">
              How it works
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-yellow-400"
            >
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-yellow-400">
              FAQ
            </a>
            <a
              href={`tel:${DEMO_NUMBER}`}
              className="flex items-center gap-2 rounded-2xl border border-yellow-500/40 px-5 py-2.5 font-medium text-white transition-all hover:border-yellow-400 hover:text-yellow-300"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              Try Live Demo <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 px-6 pb-24 pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_36%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

        <ParallaxWord
          text="Recovered Revenue"
          y={heroWordY}
          opacity={heroWordOpacity}
          className="top-28 text-[11vw] text-white/[0.05]"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-yellow-300">
              Missed calls = lost revenue
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mx-auto max-w-4xl text-5xl font-bold leading-[0.94] tracking-tighter md:text-7xl"
          >
            Stop Losing Jobs From{" "}
            <span className="text-yellow-400">Missed Calls</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl"
          >
            ServiceLock follows up instantly when you miss a call so the lead
            stays warm, the details get captured, and your team can convert the
            opportunity faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#trial"
              className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-yellow-500 px-9 py-4 text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
            >
              Start Free 14-Day Trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${DEMO_NUMBER}`}
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-medium transition-all hover:border-zinc-500"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="h-5 w-5" />
              Try the Live Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 text-sm text-zinc-400"
          >
            Prefer to talk first?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-yellow-300 underline-offset-4 transition hover:text-yellow-200 hover:underline"
            >
              Book a demo
            </a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mx-auto mt-8 max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/60 px-6 py-5 text-sm text-zinc-300 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
          >
            <p className="font-medium text-white">Try the Live Demo</p>
            <p className="mt-2 leading-relaxed text-zinc-400">
              Call or text {DISPLAY_NUMBER} to experience the missed-call flow
              for yourself and see exactly how it works.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${DEMO_NUMBER}`}
                className="rounded-full border border-yellow-500/30 px-4 py-2 font-medium text-yellow-300 transition hover:border-yellow-400 hover:text-yellow-200"
              >
                Call the Demo Line
              </a>
              <a
                href={DEMO_SMS_LINK}
                className="rounded-full border border-zinc-700 px-4 py-2 font-medium text-zinc-200 transition hover:border-zinc-500"
              >
                Text the Demo Line
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mt-8 text-sm text-zinc-500"
          >
            No credit card required • Simple setup • Be live fast
          </motion.p>
        </div>
      </section>

      <section className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold tracking-tight">
              Choose Your Next Step
            </h2>
            <p className="mt-5 text-xl text-zinc-400">
              Start immediately, try the live flow yourself, or book a quick
              walkthrough if you want a talk-first path.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {nextStepCards.map((card) => (
              <div
                key={card.title}
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  card.featured
                    ? "border-yellow-500 bg-zinc-950 shadow-[0_24px_80px_rgba(234,179,8,0.08)]"
                    : "border-zinc-800 bg-zinc-950/80"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
                  {card.eyebrow}
                </p>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-400">
                  {card.description}
                </p>

                <div className="mt-8">
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold transition-all ${
                      card.featured
                        ? "bg-yellow-500 text-zinc-950 hover:bg-yellow-400"
                        : "border border-zinc-700 text-white hover:border-zinc-500"
                    }`}
                  >
                    {card.ctaLabel}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                {card.secondaryLabel && card.secondaryHref ? (
                  <a
                    href={card.secondaryHref}
                    className="mt-3 inline-flex items-center justify-center text-sm font-medium text-zinc-400 transition hover:text-white"
                  >
                    {card.secondaryLabel}
                  </a>
                ) : null}

                {card.microcopy ? (
                  <p className="mt-4 text-sm text-zinc-500">{card.microcopy}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={roiRef}
        className="relative overflow-hidden bg-zinc-950 px-6 py-24"
      >
        <ParallaxWord
          text="Lost Revenue"
          y={roiWordY}
          opacity={roiWordOpacity}
          className="top-10 text-[10vw] text-yellow-400/[0.08]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-5xl font-bold tracking-tight">
              You’re Losing Real Money Every Time You Miss a Call
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Every missed inbound call already cost you attention, trust, and
              acquisition dollars. ServiceLock helps you recover that
              opportunity before the customer moves on.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  amount: "$500",
                  label: "Small repair or service call",
                },
                {
                  amount: "$1,500",
                  label: "Urgent or mid-sized job",
                },
                {
                  amount: "$5,000+",
                  label: "High-value replacement or project",
                },
              ].map((item) => (
                <div
                  key={item.amount}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6"
                >
                  <div className="font-mono text-3xl text-yellow-400">
                    {item.amount}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/90 p-10 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Why teams start now
            </p>
            <p className="mt-5 text-2xl font-semibold leading-tight">
              Close one recovered job and the math already looks attractive.
            </p>
            <div className="mt-8 space-y-4 text-base text-zinc-400">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-yellow-400" />
                Fast setup keeps the first step light and easy.
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="mt-1 h-5 w-5 text-yellow-400" />
                Instant response protects the lead while intent is high.
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-5 w-5 text-yellow-400" />
                If you want a walkthrough first, the talk-first path is there.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-tight">
              How ServiceLock Works
            </h2>
            <p className="text-xl text-zinc-400">
              From missed call to warm handoff in seconds
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Missed call detected",
                desc: "A customer calls while your team is on a job, after hours, or during dispatch.",
              },
              {
                num: "02",
                title: "Instant response goes out",
                desc: "A fast, professional SMS is sent while the customer is still deciding who to hire.",
              },
              {
                num: "03",
                title: "Lead details get captured",
                desc: "We collect the basics quickly so your callback starts warm, not cold.",
              },
              {
                num: "04",
                title: "Your team gets the handoff",
                desc: "You get the lead context fast, follow up with confidence, and recover more jobs.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all hover:border-yellow-500/50"
              >
                <div className="mb-6 text-7xl font-bold text-yellow-500/20 transition group-hover:text-yellow-500/40">
                  {step.num}
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Built for Service Businesses That Need Faster Follow-Up
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-zinc-400">
            HVAC, plumbing, electrical, roofing, and similar teams where a
            missed inbound call can quickly turn into a lost job.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["HVAC", "Plumbing", "Electrical", "Roofing"].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-left transition hover:border-yellow-500/30"
              >
                <h3 className="mb-4 text-2xl font-semibold">{industry}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  After-hours calls, dispatch spikes, paid traffic, and weekend
                  demand are exactly where ServiceLock helps keep leads alive.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight">
              Simple Pricing for Real Results
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-zinc-400">
              Start with the free trial. Get live quickly. Decide with real
              usage, not guesswork.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-yellow-500 bg-zinc-900 p-10 shadow-2xl shadow-yellow-500/10">
            <div className="mb-6 inline-flex rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-bold tracking-wider text-zinc-950">
              FREE 14-DAY TRIAL • NO CREDIT CARD REQUIRED
            </div>

            <div className="mb-3">
              <span className="text-6xl font-bold tracking-tighter">$447</span>
              <span className="ml-2 text-zinc-400">/mo after trial</span>
            </div>

            <p className="text-sm text-zinc-400">
              Simple setup • Cancel anytime • Demo available • Talk-first option
              available
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Instant SMS response on every missed call",
                "Lead details captured while intent is still high",
                "Warm handoff so your callback starts with context",
                "Fast onboarding designed to get you live quickly",
                "No card needed to start the 14-day trial",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#trial"
                className="flex-1 rounded-2xl bg-yellow-500 py-4 text-center text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
              >
                Start My Free Trial
              </a>
              <a
                href={`tel:${DEMO_NUMBER}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-zinc-700 px-6 py-4 text-lg font-semibold transition-all hover:border-zinc-500"
              >
                <Phone className="h-5 w-5" />
                Try the Live Demo
              </a>
            </div>

            <p className="mt-5 text-center text-sm text-zinc-400">
              Prefer to talk first?{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-yellow-300 underline-offset-4 transition hover:underline"
              >
                Book a demo
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id="trial"
        className="border-t border-zinc-800 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-400">
                Start Free 14-Day Trial
              </p>
              <h2 className="mt-5 text-5xl font-bold tracking-tight">
                Get live quickly without payment friction
              </h2>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-zinc-400">
                Get started immediately. No credit card required. Simple setup.
                Start capturing missed-call leads right away.
              </p>

              <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
                <p className="font-medium text-white">What happens next</p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                  {[
                    "Check your email for setup instructions and next steps",
                    "Follow the quick setup to get live fast",
                    "Forward your number or connect your workflow",
                    "Start recovering missed opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="businessName"
                  className="mb-2 block text-sm font-medium"
                >
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-medium"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    required
                    value={formData.website}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bestTimeToReachYou"
                    className="mb-2 block text-sm font-medium"
                  >
                    Best Time to Reach You
                  </label>
                  <input
                    id="bestTimeToReachYou"
                    name="bestTimeToReachYou"
                    type="text"
                    value={formData.bestTimeToReachYou}
                    onChange={updateField}
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-400">
                No credit card required • Simple setup • We’ll help you get live
                quickly
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Starting Trial..." : "Start My Free Trial"}
              </button>

              <p className="text-center text-sm text-zinc-400">
                Prefer to evaluate first?{" "}
                <a
                  href={`tel:${DEMO_NUMBER}`}
                  className="font-medium text-yellow-300 underline-offset-4 transition hover:underline"
                >
                  Try the live demo
                </a>{" "}
                or{" "}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-yellow-300 underline-offset-4 transition hover:underline"
                >
                  book a demo
                </a>
                .
              </p>

              {submitError ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
                  {submitError}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 text-center text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-lg">
            {faqItems.map(([question, answer]) => (
              <div
                key={question}
                className="border-b border-zinc-800 pb-8 last:border-0"
              >
                <h3 className="mb-3 font-semibold">{question}</h3>
                <p className="text-zinc-400">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-black px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight">
            Pick the next step that fits how you buy
          </h2>
          <p className="mb-10 text-2xl text-zinc-400">
            Start the free trial now, experience the live demo line, or book a
            quick walkthrough if you want a talk-first path.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#trial"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-yellow-500 px-12 py-5 text-xl font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
            >
              Start My Free Trial
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="inline-flex min-h-14 items-center gap-2 rounded-2xl border border-zinc-700 px-10 py-5 text-xl font-semibold transition-all hover:border-zinc-500"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="h-5 w-5" />
              Try Live Demo
            </a>
          </div>

          <p className="mt-5 text-sm text-zinc-400">
            Prefer to talk first?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-yellow-300 underline-offset-4 transition hover:underline"
            >
              Book a demo
            </a>
          </p>

          <p className="mt-8 text-sm text-zinc-500">
            No credit card required • Simple setup • Be live fast
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center text-sm text-zinc-500">
          <div className="mb-4 flex items-center justify-center gap-3">
            <BrandLock className="h-10 w-10 rounded-2xl object-cover shadow-[0_0_30px_rgba(234,179,8,0.24)]" />
            <span className="text-xl font-semibold tracking-tight text-white">
              ServiceLock
            </span>
          </div>

          © {new Date().getFullYear()} ServiceLock. All rights reserved.
          <br />
          Built for service businesses that refuse to lose revenue to missed
          calls.
          <br />
          <a
            href={`tel:${DEMO_NUMBER}`}
            className="transition-colors hover:text-yellow-400"
          >
            {DISPLAY_NUMBER}
          </a>

          <div className="mt-6 flex justify-center gap-6 text-sm text-zinc-400">
            <a href="/terms" className="transition hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
