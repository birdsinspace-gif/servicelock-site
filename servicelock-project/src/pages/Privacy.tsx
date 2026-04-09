import { Zap } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav id="top" className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3 transition-opacity hover:opacity-85">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500">
              <Zap className="h-5 w-5 text-zinc-950" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">ServiceLock</span>
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-8 text-4xl font-bold">Privacy</h1>

        <p className="mb-6">
          We built ServiceLock to help businesses respond faster when they miss a call, and to help you get what you need quickly.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">What we collect</h2>
        <p className="mb-6">
          When you call a business using ServiceLock, we may collect your phone number and any details you share about your request.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">How we use it</h2>
        <p className="mb-6">
          We use this information to follow up after missed calls and help the business respond quickly.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">Messaging</h2>
        <p className="mb-6">
          If you call and the business misses you, you may receive a text to help get things moving. You can reply STOP to opt out or HELP for assistance.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">No selling data</h2>
        <p className="mb-6">
          We don’t sell your information. It’s only used to help connect you with the business you contacted.
        </p>

      </div>
    </div>
  );
}
