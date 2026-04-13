import { Link } from "react-router-dom";
import { CheckCircle2, Mail, Settings2, Sparkles } from "lucide-react";
import serviceLockLogo from "@/assets/servicelock-logo.png";

const setupCards = [
  {
    title: "Check your inbox",
    body: "Your onboarding email has your setup link, quick-start steps, and everything you need to get live fast.",
    Icon: Mail,
  },
  {
    title: "Go live fast",
    body: "No complicated setup. No heavy lift. Just follow the steps and turn missed calls into live leads.",
    Icon: Settings2,
  },
];

const nextSteps = [
  {
    title: "Step 1, Check your email",
    body: "We sent your setup guide and onboarding link to your inbox.",
  },
  {
    title: "Step 2, Connect your number",
    body: "Forward missed calls or connect your workflow in a few clicks.",
  },
  {
    title: "Step 3, Test your flow",
    body: "Call your number, miss the call, and watch ServiceLock respond instantly.",
  },
  {
    title: "Step 4, Start recovering jobs",
    body: "Once you’re live, missed calls start turning into real opportunities.",
  },
];

export default function TrialStarted() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-3">
          <img
            src={serviceLockLogo}
            alt="ServiceLock"
            className="h-10 w-10 rounded-2xl object-cover shadow-[0_0_30px_rgba(234,179,8,0.28)]"
            width={1536}
            height={1024}
          />
          <span className="text-2xl font-semibold tracking-tight">
            ServiceLock
          </span>
        </Link>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
              You’re In
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight">
              Your 14-day trial is live.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Complete the setup below. Most businesses are live in under 10
              minutes.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {setupCards.map(({ title, body, Icon }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6"
                >
                  <Icon className="h-6 w-6 text-yellow-400" />
                  <p className="mt-4 text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#how"
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-zinc-950 transition hover:bg-yellow-400"
              >
                View Setup Guide
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-semibold transition hover:border-zinc-500"
              >
                Return Home
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
              What Happens Next
            </p>
            <div className="mt-6 space-y-4">
              {nextSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <p className="font-semibold text-white">
                  Every missed call costs you money
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Get live today so your next missed call has a better chance of
                becoming your next booked job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
