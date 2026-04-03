export default function ServiceLockLandingPage() {
  return (
    <div className="min-h-screen bg-[hsl(220_20%_7%)] text-[hsl(40_20%_95%)]" style={{ fontFamily: "'Archivo Black', 'Russo One', 'Teko', 'Bebas Neue', system-ui, sans-serif" }}>
      <main className="mx-auto max-w-6xl px-6 pt-6 pb-10">

        {/* HERO - SIMPLIFIED + ROI PUNCH */}
        <section className="pt-10 pb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] text-[hsl(38_92%_50%)] font-semibold">S</div>
            <div>
              <div className="font-semibold">ServiceLock</div>
              <div className="text-xs text-[hsl(220_10%_55%)]">Missed call recovery for service businesses</div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
            Turned Missed Calls into
            <span className="block text-[hsl(38_92%_50%)]">Recovered Jobs</span>
          </h1>

          {/* ROI PUNCH */}
          <p className="mt-6 text-lg sm:text-xl text-[hsl(38_92%_50%)] font-semibold">
            Miss a call → Lose a job
          </p>

          {/* Minimal narrative */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-[hsl(220_10%_55%)]">
            <span>They call once</span>
            <span>•</span>
            <span>You're busy</span>
            <span>•</span>
            <span>They call the next company</span>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <a href="tel:+19142668127" className="bg-[hsl(38_92%_50%)] text-[hsl(220_20%_7%)] px-6 py-3 rounded-xl font-semibold">
              Call the Live Demo: (914) 266-8127
            </a>
            <a href="#pricing" className="border border-[hsl(272_15%_18%)] px-6 py-3 rounded-xl">
              Pricing
            </a>
          </div>
        </section>

        {/* ROI */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">You’re Losing Real Money Every Time You Miss a Call</h2>
          <p className="mt-4 text-[hsl(220_10%_55%)] max-w-2xl mx-auto">
            Miss just a few calls per week and you’re losing thousands every month.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] rounded-xl p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="text-3xl text-[hsl(38_92%_50%)] font-semibold mt-2">$500</p>
              <p className="text-sm mt-2">Small repair or service call</p>
            </div>
            <div className="bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] rounded-xl p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="text-3xl text-[hsl(38_92%_50%)] font-semibold mt-2">$1,500</p>
              <p className="text-sm mt-2">Mid-sized job or urgent issue</p>
            </div>
            <div className="bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] rounded-xl p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="text-3xl text-[hsl(38_92%_50%)] font-semibold mt-2">$5,000+</p>
              <p className="text-sm mt-2">High-value project or replacement</p>
            </div>
          </div>

          <p className="mt-8 text-lg">
            Right now, when you miss the call, your competitor gets the job.
          </p>
        </section>

        {/* HARD TRUTH */}
        <section className="py-20">
          <div className="bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] rounded-2xl p-10 text-center max-w-3xl mx-auto">
            <p className="text-xs text-[hsl(220_10%_55%)]">Hard truth</p>
            <h2 className="mt-4 text-3xl font-semibold">
              If you miss 10 calls this week, how many jobs did you just give away?
            </h2>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight">ServiceLock Flips That</h2>

          <div className="mt-8 space-y-6 max-w-2xl mx-auto">
            <div>
              <p className="text-[hsl(38_92%_50%)]">01</p>
              <p className="font-semibold">We Respond Instantly</p>
              <p className="text-[hsl(220_10%_55%)]">The moment you miss the call, we step in and text back while they’re still looking.</p>
            </div>
            <div>
              <p className="text-[hsl(38_92%_50%)]">02</p>
              <p className="font-semibold">We Capture the Job</p>
              <p className="text-[hsl(220_10%_55%)]">We qualify the lead, gather the important details, and keep them from moving on.</p>
            </div>
            <div>
              <p className="text-[hsl(38_92%_50%)]">03</p>
              <p className="font-semibold">We Send You the Lead</p>
              <p className="text-[hsl(220_10%_55%)]">You get the lead, call back fast, and close with context instead of starting cold.</p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 text-center">
          <div className="bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] rounded-2xl p-10 max-w-xl mx-auto">
            <h2 className="text-5xl text-[hsl(38_92%_50%)] font-bold tracking-tight">$497/month</h2>
            <div className="mt-6 space-y-1 text-sm">
              <p>No setup fee</p>
              <p>No contract</p>
              <p>Cancel anytime</p>
            </div>
            <p className="mt-6 text-[hsl(220_10%_55%)] text-sm">
              One job covers the cost. Everything else is profit.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Stop Losing Jobs</h2>

          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:+19142668127" className="bg-[hsl(38_92%_50%)] text-[hsl(220_20%_7%)] px-6 py-3 rounded-xl font-semibold">
              Call the Live Demo: (914) 266-8127
            </a>
            <a href="#" className="border border-[hsl(272_15%_18%)] px-6 py-3 rounded-xl">
              Book Setup Call
            </a>
          </div>
        </section>

              {/* FOOTER */}
        <footer className="border-t border-[hsl(272_15%_18%)] mt-20 pt-8 pb-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(220_18%_10%)] border border-[hsl(272_15%_18%)] text-[hsl(38_92%_50%)] font-semibold">
              S
            </div>
            <div className="font-semibold">ServiceLock</div>
            <div className="text-xs text-[hsl(220_10%_55%)]">
              Missed call recovery for service businesses
            </div>
          </div>

          <div className="mt-6 text-xs text-[hsl(220_10%_55%)]">
            © {new Date().getFullYear()} ServiceLock. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}
