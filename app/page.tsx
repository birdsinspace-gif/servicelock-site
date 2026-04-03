// app/page.tsx

import { PhoneCall, DollarSign, Zap, ClipboardList, Send, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B] text-[#0B1020] shadow-lg shadow-[#F59E0B]/20">
              <span className="text-lg font-bold">S</span>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">ServiceLock</p>
              <p className="text-sm text-white/60">Missed call recovery for service businesses</p>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                Built for busy service teams
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Turn Missed Calls Into
                <span className="block text-[#F59E0B]">Booked Jobs</span>
              </h1>

              <div className="mt-8 space-y-3 text-xl text-white/80 sm:text-2xl">
                <p>They call once.</p>
                <p>You’re busy.</p>
                <p>They call the next company.</p>
                <p className="font-semibold text-white">That job is gone.</p>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                ServiceLock texts them instantly, qualifies the lead, and sends you a ready-to-book job before your competitor gets it.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:9142668127"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:scale-[1.01] hover:bg-[#fbbf24]"
                >
                  Call the Live Demo: (914) 266-8127
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  See Pricing
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-[#F59E0B]/15 p-3 text-[#F59E0B]">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">Why it works</p>
                  <p className="text-xl font-semibold">The first company to respond usually wins</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Missed callers rarely leave voicemails",
                  "Emergency and quote calls go to the next company fast",
                  "Speed wins, especially after hours and on busy days",
                  "One recovered job can pay for the service",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F59E0B]" />
                    <p className="text-white/75">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#F59E0B]">Simple offer</p>
                <p className="mt-2 text-3xl font-semibold">$497/month</p>
                <p className="mt-2 text-white/70">No setup fee. No contract. Cancel anytime.</p>
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
              You’re Losing Real Money Every Time You Miss a Call
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Miss just a few calls per week and you’re quietly losing thousands every month.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { amount: "$500", label: "Small repair or service call" },
              { amount: "$1,500", label: "Mid-sized job or urgent issue" },
              { amount: "$5,000+", label: "High-value project or replacement" },
            ].map((item) => (
              <div
                key={item.amount}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#F59E0B]/15 p-3 text-[#F59E0B]">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">Missed value</p>
                </div>
                <p className="mt-6 text-5xl font-semibold tracking-tight">{item.amount}</p>
                <p className="mt-4 text-white/65">{item.label}</p>
              </div>
            ))}
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
              ServiceLock Fixes It Automatically
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                step: "01",
                title: "Instant Response",
                description:
                  "The moment you miss the call, we text back while they’re still looking for help.",
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                step: "02",
                title: "Lead Qualification",
                description:
                  "We capture the job details, urgency, and contact info so you know who is worth calling first.",
              },
              {
                icon: <Send className="h-6 w-6" />,
                step: "03",
                title: "Ready-To-Book Lead",
                description:
                  "You get a clean lead summary and call back with context, speed, and a better chance to close.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-[#F59E0B]/15 p-3 text-[#F59E0B]">{item.icon}</div>
                  <span className="text-sm font-semibold tracking-[0.2em] text-white/40">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="rounded-[2rem] border border-[#F59E0B]/20 bg-gradient-to-b from-[#F59E0B]/10 to-white/[0.03] p-8 sm:p-12">
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
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">No setup fee</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">No contract</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Cancel anytime</span>
              </div>

              <div className="mt-10 space-y-3 text-lg text-white/85">
                <p>One recovered job can cover the entire cost.</p>
                <p>Two or more recovered jobs = profit.</p>
                <p>Everything after that is upside.</p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:9142668127"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:scale-[1.01] hover:bg-[#fbbf24]"
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
              Call the demo or book your 15-minute setup call and see how ServiceLock helps you win more of the calls you’re already paying for.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:9142668127"
                className="inline-flex items-center justify-center rounded-2xl bg-[#F59E0B] px-6 py-4 text-base font-semibold text-[#0B1020] transition hover:scale-[1.01] hover:bg-[#fbbf24]"
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
