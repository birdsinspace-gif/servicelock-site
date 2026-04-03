export default function ServiceLockLandingPage() {
  return (
    <div
      className="min-h-screen bg-[hsl(220_20%_7%)] text-[hsl(40_20%_95%)]"
      style={{
        fontFamily:
          "'Archivo Black', 'Russo One', 'Teko', 'Bebas Neue', system-ui, sans-serif",
      }}
    >
      <main className="mx-auto max-w-6xl px-6 pt-6 pb-10">
        {/* HERO */}
        <section className="pt-10 pb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] text-[hsl(38_92%_50%)] font-semibold">
              S
            </div>
            <div>
              <div className="font-semibold">ServiceLock</div>
              <div className="text-xs text-[hsl(220_10%_55%)]">
                Missed call recovery for service businesses
              </div>
            </div>
          </div>

          <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Turned Missed Calls into
            <span className="block text-[hsl(38_92%_50%)]">
              Recovered Jobs
            </span>
          </h1>

          <p className="mt-6 text-lg font-semibold text-[hsl(38_92%_50%)] sm:text-xl">
            Miss a call → Lose a job
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[hsl(220_10%_55%)]">
            <span>They call once</span>
            <span>•</span>
            <span>You're busy</span>
            <span>•</span>
            <span>They call the next company</span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+19142668127"
              className="rounded-xl bg-[hsl(38_92%_50%)] px-6 py-3 font-semibold text-[hsl(220_20%_7%)]"
            >
              Call the Live Demo: (914) 266-8127
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-[hsl(220_15%_18%)] px-6 py-3"
            >
              Pricing
            </a>
          </div>
        </section>

        {/* ROI */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            You’re Losing Real Money Every Time You Miss a Call
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[hsl(220_10%_55%)]">
            Miss just a few calls per week and you’re losing thousands every
            month.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="mt-2 text-3xl font-semibold text-[hsl(38_92%_50%)]">
                $500
              </p>
              <p className="mt-2 text-sm">Small repair or service call</p>
            </div>

            <div className="rounded-xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="mt-2 text-3xl font-semibold text-[hsl(38_92%_50%)]">
                $1,500
              </p>
              <p className="mt-2 text-sm">Mid-sized job or urgent issue</p>
            </div>

            <div className="rounded-xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] p-6">
              <p className="text-xs text-[hsl(220_10%_55%)]">Missed value</p>
              <p className="mt-2 text-3xl font-semibold text-[hsl(38_92%_50%)]">
                $5,000+
              </p>
              <p className="mt-2 text-sm">High-value project or replacement</p>
            </div>
          </div>

          <p className="mt-8 text-lg">
            Right now, when you miss the call, your competitor gets the job.
          </p>
        </section>

        {/* HARD TRUTH */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] p-10 text-center">
            <p className="text-xs text-[hsl(220_10%_55%)]">Hard truth</p>
            <h2 className="mt-4 text-3xl font-semibold">
              If you miss 10 calls this week, how many jobs did you just give
              away?
            </h2>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            ServiceLock Flips That
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-6">
            <div>
              <p className="text-[hsl(38_92%_50%)]">01</p>
              <p className="font-semibold">We Respond Instantly</p>
              <p className="text-[hsl(220_10%_55%)]">
                The moment you miss the call, we step in and text back while
                they’re still looking.
              </p>
            </div>

            <div>
              <p className="text-[hsl(38_92%_50%)]">02</p>
              <p className="font-semibold">We Capture the Job</p>
              <p className="text-[hsl(220_10%_55%)]">
                We qualify the lead, gather the important details, and keep them
                from moving on.
              </p>
            </div>

            <div>
              <p className="text-[hsl(38_92%_50%)]">03</p>
              <p className="font-semibold">We Send You the Lead</p>
              <p className="text-[hsl(220_10%_55%)]">
                You get the lead, call back fast, and close with context instead
                of starting cold.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 text-center">
          <div className="mx-auto max-w-xl rounded-2xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] p-10">
            <h2 className="text-5xl font-bold tracking-tight text-[hsl(38_92%_50%)]">
              $497/month
            </h2>

            <div className="mt-6 space-y-1 text-sm">
              <p>No setup fee</p>
              <p>No contract</p>
              <p>Cancel anytime</p>
            </div>

            <p className="mt-6 text-sm text-[hsl(220_10%_55%)]">
              One job covers the cost. Everything else is profit.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Stop Losing Jobs
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+19142668127"
              className="rounded-xl bg-[hsl(38_92%_50%)] px-6 py-3 font-semibold text-[hsl(220_20%_7%)]"
            >
              Call the Live Demo: (914) 266-8127
            </a>
            <a
              href="#"
              className="rounded-xl border border-[hsl(220_15%_18%)] px-6 py-3"
            >
              Book Setup Call
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-[hsl(220_15%_18%)] pt-8 pb-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(220_15%_18%)] bg-[hsl(220_18%_10%)] font-semibold text-[hsl(38_92%_50%)]">
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
