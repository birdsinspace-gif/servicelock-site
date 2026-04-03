export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B] text-base font-bold text-[#0B1020]">
              S
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">ServiceLock</p>
              <p className="text-sm text-white/60">
                Missed call recovery for service businesses
              </p>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Built for busy service teams
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Turn Missed Calls Into
                <span className="block text-[#F59E0B]">Thousands in Recovered Jobs</span>
              </h1>

              <div className="mt-8 space-y-3 text-xl text-white/80 sm:text-2xl">
                <p>They call once.</p>
                <p>You&apos;re busy.</p>
                <p>They call the next company.</p>
                <p className="font-semibold text-white">That job is gone.</p>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                ServiceLock recovers those jobs automatically. We text them instantly,
                qualify the lead, and send you a ready-to-book opportunity before your
                competitor gets it.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:9142668127"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:bg-[#fbbf24]"
                >
                  Call the Live Demo: (914) 266-8127
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
              <p className="text-sm uppercase tracking-[0.2em] text-[#F59E0B]">
                Why this works
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                The first company to respond usually wins
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75">
                  Missed callers rarely leave voicemails.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75">
                  Emergency and quote calls move to the next company fast.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75">
                  Speed wins, especially after hours and on busy days.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75">
                  One recovered job can easily pay for the service.
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#F59E0B]">
                  Simple offer
                </p>
                <p className="mt-2 text-3xl font-semibold">$497/month</p>
                <p className="mt-2 text-white/70">
                  No setup fee. No contract. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              ROI
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              You&apos;re Losing Real Money Every Time You Miss a Call
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Miss just a few calls per week and you&apos;re losing thousands every month.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Missed value</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight">$500</p>
              <p className="mt-4 text-white/65">Small repair or service call</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Missed value</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight">$1,500</p>
              <p className="mt-4 text-white/65">Mid-sized job or urgent issue</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Missed value</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight">$5,000+</p>
              <p className="mt-4 text-white/65">High-value project or replacement</p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 p-8">
            <p className="text-2xl font-semibold">
              Right now, when you miss the call, your competitor gets the chance to win it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              ServiceLock Flips That
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/40">01</p>
              <h3 className="mt-6 text-2xl font-semibold">We Respond Instantly</h3>
              <p className="mt-4 leading-8 text-white/70">
                The moment you miss the call, we step in and text back while they&apos;re still looking.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/40">02</p>
              <h3 className="mt-6 text-2xl font-semibold">We Capture the Job</h3>
              <p className="mt-4 leading-8 text-white/70">
                We qualify the lead, gather the important details, and keep them from moving on.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/40">03</p>
              <h3 className="mt-6 text-2xl font-semibold">We Send You the Lead</h3>
              <p className="mt-4 leading-8 text-white/70">
                You get the lead, call back fast, and close with context instead of starting cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="rounded-[32px] border border-[#F59E0B]/20 bg-[#11182c] p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                Pricing
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                $497 Per Month
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Flat monthly pricing for missed call recovery, lead qualification, and lead delivery.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  No setup fee
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  No contract
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Cancel anytime
                </span>
              </div>

              <div className="mt-10 space-y-3 text-lg text-white/85">
                <p>One recovered job can cover the entire cost.</p>
                <p>Two or more recovered jobs = profit.</p>
                <p>Everything after that is upside.</p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:9142668127"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:bg-[#fbbf24]"
                >
                  Call the Live Demo
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Book Your 15-Minute Setup Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              Close
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Stop Losing Jobs To Missed Calls
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Call the demo or book your 15-minute setup call and see how ServiceLock
              helps you recover more of the calls you&apos;re already paying for.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:9142668127"
                className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:bg-[#fbbf24]"
              >
                Call the Live Demo: (914) 266-8127
              </a>
              <a
                href="mailto:hello@getservicelock.com?subject=ServiceLock%20Setup%20Call"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Book Your 15-Minute Setup Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
