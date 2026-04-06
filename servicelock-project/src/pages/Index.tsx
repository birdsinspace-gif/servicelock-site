import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import servicelockLogo from "@/assets/servicelock-logo.png";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.2 } as const,
  transition: { delay, duration: 0.5 },
});

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const workflowSteps = [
  {
    icon: PhoneCall,
    title: "Missed call detected",
    text: "A customer calls while your team is on another job, after hours, or tied up in dispatch.",
  },
  {
    icon: Clock3,
    title: "Instant response goes out",
    text: "ServiceLock texts back fast, while the customer is still deciding who to hire.",
  },
  {
    icon: CheckCircle2,
    title: "Lead details get captured",
    text: "We collect the important details, like name, job type, urgency, and callback information.",
  },
  {
    icon: ArrowRight,
    title: "Your team gets the handoff",
    text: "You receive a warm lead with context, so your callback feels informed and fast.",
  },
];

const fitCards = [
  {
    title: "HVAC",
    text: "After-hours breakdowns, no-cool calls, emergency heat, weekend overflow.",
  },
  {
    title: "Plumbing",
    text: "Leaks, backups, urgent service calls, missed calls during dispatch spikes.",
  },
  {
    title: "Electrical",
    text: "Power issues, urgent troubleshooting, estimate requests, packed field schedules.",
  },
  {
    title: "Roofing",
    text: "Storm follow-up, inspection leads, quote requests, inbound calls after ad spend.",
  },
];

const scenarioCards = [
  {
    title: "After-hours emergency",
    text: "A homeowner calls at 7:18 PM. You miss it. Instead of going cold, they get a fast response and your team gets the lead details.",
  },
  {
    title: "Busy dispatch window",
    text: "Your office is slammed and calls pile up. ServiceLock helps keep inbound opportunities from leaking away.",
  },
  {
    title: "Weekend ad traffic",
    text: "You paid for the click. The call comes in on Saturday. ServiceLock helps you protect that spend.",
  },
];

const faqItems = [
  {
    question: "Does ServiceLock replace my receptionist or CSR?",
    answer:
      "No. ServiceLock is built to help recover missed opportunities when your team cannot answer right away. It supports your front desk, not replaces it.",
  },
  {
    question: "Can I keep my current business number?",
    answer:
      "Yes. The offer is designed around your existing inbound flow, so customers still call your business the way they already do.",
  },
  {
    question: "How fast does the customer get a response?",
    answer:
      "The goal is a near-immediate follow-up, because speed matters when someone is comparing multiple companies.",
  },
  {
    question: "What information gets captured?",
    answer:
      "Typically the basics your team needs to call back with context, such as name, issue type, urgency, and callback details.",
  },
  {
    question: "Who is this best for?",
    answer:
      "It is strongest for service businesses where every missed inbound call can turn into lost revenue, especially HVAC, plumbing, electrical, roofing, and similar trades.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contract. The page keeps the offer simple: monthly pricing, no setup fee, cancel anytime.",
  },
];

const integrations = [
  "Phone number workflow",
  "Text-based follow-up",
  "Dispatch callback process",
  "Calendar booking flow",
  "CRM or notes handoff",
  "Existing team workflow",
];

const trustPills = [
  "Built for busy service businesses",
  "Faster follow-up",
  "Warmer callbacks",
  "Less wasted ad spend",
];

const StickyNav = () => (
  <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <img src={servicelockLogo} alt="ServiceLock" className="h-9 w-auto" />
        <div className="leading-tight">
          <div className="text-sm font-semibold">ServiceLock</div>
          <div className="text-[11px] text-muted-foreground">
            Missed call recovery
          </div>
        </div>
      </a>

      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition-colors hover:text-foreground">
            {item.label}
          </a>
        ))}
      </nav>

      <Button variant="hero" size="sm" asChild>
        <a href="tel:+19142668127">Call Demo</a>
      </Button>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden py-16 md:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
    <div className="container relative max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div {...anim()} className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Built for service businesses where missed calls mean lost revenue
          </motion.div>

          <motion.h1
            {...anim(0.05)}
            className="mt-6 text-[clamp(42px,7vw,78px)] leading-[0.95] font-bold tracking-tight"
          >
            Turn Missed Calls Into
            <span className="block text-primary">Recovered Jobs</span>
          </motion.h1>

          <motion.p
            {...anim(0.1)}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
          >
            When customers cannot reach you, they usually call the next company.
            ServiceLock helps you respond faster, capture key details, and call
            back with context instead of starting cold.
          </motion.p>

          <motion.div
            {...anim(0.15)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" className="px-6 py-6 text-base" asChild>
              <a href="tel:+19142668127">Call the Live Demo: (914) 266-8127</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="px-6 py-6 text-base" asChild>
              <a href="#pricing">See Pricing</a>
            </Button>
          </motion.div>

          <motion.div
            {...anim(0.2)}
            className="mt-8 flex flex-wrap gap-3"
          >
            {trustPills.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div {...anim(0.15)}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Example workflow
                </p>
                <h2 className="mt-2 text-2xl font-bold">What the buyer sees</h2>
              </div>
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs text-muted-foreground">Incoming</p>
                <p className="mt-1 font-semibold">Missed call from new customer</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  "Need help with an urgent plumbing leak."
                </p>
              </div>

              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs text-muted-foreground">Immediate follow-up</p>
                <p className="mt-1 font-semibold">Fast text response sent</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Confirms the inquiry, keeps the lead warm, and starts collecting the basics.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs text-muted-foreground">Handoff to your team</p>
                <p className="mt-1 font-semibold">Name, issue, urgency, callback info</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your team calls back with context, not guesswork.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              The point is simple: faster follow-up gives you a better shot at winning the job.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <section className="py-6">
    <div className="container">
      <motion.div
        {...anim()}
        className="rounded-3xl border border-border bg-card px-6 py-5"
      >
        <div className="grid gap-4 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Why this matters
            </p>
            <p className="mt-2 text-lg font-semibold">
              Great service businesses lose good leads for boring reasons, like timing.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            Missed calls, packed dispatch windows, after-hours inquiries, and slow callbacks all create leakage.
          </div>

          <div className="text-sm text-muted-foreground">
            ServiceLock is built to help tighten that gap and make your follow-up feel faster and more professional.
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const LosingMoney = () => (
  <section className="py-20 text-center">
    <div className="container max-w-5xl">
      <motion.h2 {...anim()} className="text-3xl md:text-5xl font-bold tracking-tight">
        You're Losing Real Money Every Time You Miss a Call
      </motion.h2>
      <motion.p {...anim(0.1)} className="mt-4 max-w-2xl mx-auto text-muted-foreground">
        A few missed calls each week can quietly turn into thousands in lost revenue each month.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          ["$500", "Small repair or service call"],
          ["$1,500", "Mid-sized job or urgent issue"],
          ["$5,000+", "High-value project or replacement"],
        ].map(([value, label], i) => (
          <motion.div
            key={value}
            {...anim(i * 0.1)}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Missed value
            </p>
            <p className="mt-3 text-4xl font-bold text-primary">{value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...anim(0.25)}
        className="mt-10 rounded-3xl border border-border bg-card p-8 max-w-3xl mx-auto"
      >
        <p className="text-sm text-muted-foreground">
          You already paid to earn the call, with referrals, ad spend, SEO, Google Business Profile visibility, or reputation.
          The real question is whether your process is strong enough to keep the opportunity.
        </p>
      </motion.div>
    </div>
  </section>
);

const HardTruth = () => (
  <section className="py-4">
    <div className="container max-w-4xl">
      <motion.div
        {...anim()}
        className="rounded-3xl border border-border bg-card p-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Hard truth
        </p>
        <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight">
          If you miss 10 calls this week, how many jobs did you just hand to a competitor?
        </h2>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20">
    <div className="container max-w-6xl">
      <motion.div {...anim()} className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          How it works
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          A clearer workflow builds buyer confidence
        </h2>
        <p className="mt-4 text-muted-foreground">
          Instead of a missed call going cold, ServiceLock helps create a faster, more organized follow-up path.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              {...anim(index * 0.08)}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const FitSection = () => (
  <section id="industries" className="py-20">
    <div className="container max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div {...anim()}>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Who it's for
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Built for teams where every inbound call matters
          </h2>
          <p className="mt-4 text-muted-foreground">
            This works best when a missed call often equals lost revenue, especially in businesses where speed, urgency, and trust affect who wins the job.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Packed field schedules",
              "After-hours calls",
              "Dispatch bottlenecks",
              "Paid traffic that needs fast follow-up",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {fitCards.map((card, index) => (
            <motion.div
              key={card.title}
              {...anim(index * 0.08)}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ScenarioSection = () => (
  <section className="py-20">
    <div className="container max-w-6xl">
      <motion.div {...anim()} className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Real-world use cases
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          Where ServiceLock earns its keep
        </h2>
        <p className="mt-4 text-muted-foreground">
          You do not need a complicated story. You just need fewer good opportunities slipping away.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {scenarioCards.map((card, index) => (
          <motion.div
            key={card.title}
            {...anim(index * 0.08)}
            className="rounded-3xl border border-border bg-card p-7"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IntegrationsSection = () => (
  <section className="py-20">
    <div className="container max-w-6xl">
      <div className="rounded-[32px] border border-border bg-card p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...anim()}>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Workflow fit
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Meant to work alongside the systems your team already uses
            </h2>
            <p className="mt-4 text-muted-foreground">
              The value is not in adding complexity. The value is helping your follow-up process feel tighter, faster, and more organized.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {integrations.map((item, index) => (
              <motion.div
                key={item}
                {...anim(index * 0.05)}
                className="rounded-2xl border border-border bg-background px-4 py-4 text-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20">
    <div className="container max-w-5xl">
      <motion.div {...anim()} className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          Simple pricing, clear offer
        </h2>
        <p className="mt-4 text-muted-foreground">
          Keep the buying decision easy. If one recovered job covers the month, the math is already attractive.
        </p>
      </motion.div>

      <motion.div
        {...anim(0.08)}
        className="mt-10 rounded-[36px] border border-border bg-card p-8 md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Core plan
            </p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-5xl md:text-7xl font-bold text-primary">$497</span>
              <span className="pb-2 text-muted-foreground">/ month</span>
            </div>

            <p className="mt-5 max-w-xl text-muted-foreground">
              A clean monthly offer for service businesses that want faster missed-call follow-up without bloating the process.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "No setup fee",
                "No contract",
                "Cancel anytime",
                "Built for inbound lead recovery",
                "Fast follow-up workflow",
                "Warm lead handoff",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-semibold">Why the offer is easy to understand</p>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <Calendar className="mt-0.5 h-4 w-4 text-primary" />
                <p>Monthly structure keeps the decision lightweight.</p>
              </div>
              <div className="flex gap-3">
                <PhoneCall className="mt-0.5 h-4 w-4 text-primary" />
                <p>Missed-call recovery is directly tied to inbound revenue protection.</p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                <p>One booked job can often justify the cost.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="tel:+19142668127">Call the Live Demo</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full" asChild>
                <a href="#faq">Read FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="container max-w-4xl">
      <motion.div {...anim()} className="text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          Questions buyers will ask anyway
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A stronger page answers the practical questions that sit between curiosity and conversion.
        </p>
      </motion.div>

      <motion.div
        {...anim(0.08)}
        className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20">
    <div className="container max-w-5xl">
      <motion.div
        {...anim()}
        className="rounded-[36px] border border-border bg-card px-8 py-10 md:px-12 md:py-14 text-center"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Final step
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          Stop letting good calls disappear for preventable reasons
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
          You already did the hard part, earning the attention. ServiceLock helps you protect it.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="px-6 py-6 text-base" asChild>
            <a href="tel:+19142668127">Call the Live Demo: (914) 266-8127</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="px-6 py-6 text-base" asChild>
            <a href="#pricing">Review Pricing</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border mt-8">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <img src={servicelockLogo} alt="ServiceLock" className="h-10 w-auto" />
            <div>
              <div className="font-semibold">ServiceLock</div>
              <div className="text-xs text-muted-foreground">
                Missed call recovery for service businesses
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            A cleaner missed-call follow-up workflow for teams that depend on inbound calls to grow.
          </p>
        </div>

        <div className="text-sm text-muted-foreground md:text-right">
          <div>Live Demo: (914) 266-8127</div>
          <div className="mt-1">Simple monthly pricing, no contract</div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} ServiceLock. All rights reserved.
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <StickyNav />
    <Hero />
    <TrustStrip />
    <LosingMoney />
    <HardTruth />
    <HowItWorks />
    <FitSection />
    <ScenarioSection />
    <IntegrationsSection />
    <Pricing />
    <FAQ />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
