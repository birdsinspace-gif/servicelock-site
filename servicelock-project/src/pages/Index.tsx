import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import servicelockLogo from "@/assets/servicelock-logo.png";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay, duration: 0.5 },
});

const Hero = () => (
  <section className="py-12 md:py-24 text-center">
    <div className="container max-w-4xl">
      <motion.div {...anim()} className="flex flex-col items-center gap-2 mb-8">
        <img src={servicelockLogo} alt="ServiceLock" className="h-14 md:h-20 w-auto" />
        <div className="text-xs text-muted-foreground">Missed call recovery for service businesses</div>
      </motion.div>

      <motion.h1
        {...anim(0.1)}
        className="text-[clamp(42px,7vw,72px)] leading-none font-bold tracking-tight"
      >
        Turned Missed Calls into
        <span className="block text-primary">Recovered Jobs</span>
      </motion.h1>

      <motion.p {...anim(0.2)} className="mt-6 text-lg md:text-2xl text-primary font-bold">
        Miss a call → Lose a job
      </motion.p>

      <motion.div {...anim(0.25)} className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
        <span>They call once</span>
        <span>•</span>
        <span>You're busy</span>
        <span>•</span>
        <span>They call the next company</span>
      </motion.div>

      <motion.div {...anim(0.3)} className="mt-10 flex justify-center gap-4 flex-wrap">
        <Button variant="hero" size="lg" className="text-base px-6 py-6" asChild>
          <a href="tel:+19142668127">Call the Live Demo: (914) 266-8127</a>
        </Button>
        <Button variant="heroOutline" size="lg" className="text-base px-6 py-6" asChild>
          <a href="#pricing">Pricing</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

const HardTruth = () => (
  <section className="py-20">
    <div className="container max-w-3xl">
      <motion.div
        {...anim()}
        className="bg-card border border-border rounded-3xl p-10 text-center"
      >
        <p className="text-xs text-muted-foreground mb-4">Hard truth</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          If you miss 10 calls this week, how many jobs did you just give away?
        </h2>
      </motion.div>
    </div>
  </section>
);


const LosingMoney = () => (
  <section className="py-20 text-center">
    <div className="container max-w-4xl">
      <motion.h2 {...anim()} className="text-2xl md:text-4xl font-bold tracking-tight">
        You're Losing Real Money Every Time You Miss a Call
      </motion.h2>
      <motion.p {...anim(0.1)} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Miss just a few calls per week and you're losing thousands every month.
      </motion.p>

      <div className="grid sm:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
        {[
          ["$500", "Small repair or service call"],
          ["$1,500", "Mid-sized job or urgent issue"],
          ["$5,000+", "High-value project or replacement"],
        ].map(([value, label], i) => (
          <motion.div
            key={value}
            {...anim(i * 0.1)}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <p className="text-xs text-muted-foreground">Missed value</p>
            <p className="text-3xl font-bold text-primary mt-2">{value}</p>
            <p className="text-sm mt-2">{label}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...anim(0.3)} className="mt-8 text-lg">
        Right now, when you miss the call, your competitor gets the job.
      </motion.p>
    </div>
  </section>
);

const ServiceLockFlips = () => (
  <section className="py-20 text-center">
    <div className="container max-w-3xl">
      <motion.h2 {...anim()} className="text-2xl md:text-4xl font-bold tracking-tight">
        ServiceLock Flips That
      </motion.h2>
      <div className="mt-8 space-y-8">
        {[
          ["01", "We Respond Instantly", "The moment you miss the call, we step in and text back while they're still looking."],
          ["02", "We Capture the Job", "We qualify the lead, gather the important details, and keep them from moving on."],
          ["03", "We Send You the Lead", "You get the lead, call back fast, and close with context instead of starting cold."],
        ].map(([num, title, text], i) => (
          <motion.div key={num} {...anim(i * 0.1)}>
            <p className="text-primary font-bold">{num}</p>
            <p className="font-bold mt-2">{title}</p>
            <p className="text-muted-foreground mt-2">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 text-center">
    <div className="container max-w-xl">
      <motion.div
        {...anim()}
        className="bg-card border border-border rounded-3xl p-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">$497/month</h2>
        <div className="mt-6 text-sm leading-relaxed space-y-1">
          <p>No setup fee</p>
          <p>No contract</p>
          <p>Cancel anytime</p>
        </div>
        <p className="mt-6 text-muted-foreground text-sm">
          One job covers the cost. Everything else is profit.
        </p>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 text-center">
    <div className="container">
      <motion.h2 {...anim()} className="text-2xl md:text-4xl font-bold">Stop Losing Jobs</motion.h2>
      <motion.div {...anim(0.1)} className="mt-8 flex justify-center gap-4 flex-wrap">
        <Button variant="hero" size="lg" className="text-base px-6 py-6" asChild>
          <a href="tel:+19142668127">Call the Live Demo: (914) 266-8127</a>
        </Button>
        <Button variant="heroOutline" size="lg" className="text-base px-6 py-6" asChild>
          <a href="https://GetServiceLock.com">Book Setup Call</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border mt-20 pt-8 pb-6">
    <div className="container text-center">
      <div className="flex flex-col items-center gap-3">
        <img src={servicelockLogo} alt="ServiceLock" className="h-10 w-auto" />
        <div className="text-xs text-muted-foreground">Missed call recovery for service businesses</div>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} ServiceLock. All rights reserved.
      </p>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Hero />
    <LosingMoney />
    <HardTruth />
    <ServiceLockFlips />
    <Pricing />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
