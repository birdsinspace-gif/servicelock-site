import serviceLockLogo from "@/assets/servicelock-logo.png";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/#top" className="flex items-center gap-3 transition-opacity hover:opacity-85">
            <img
              src={serviceLockLogo}
              alt="ServiceLock"
              className="h-10 w-10 rounded-2xl object-cover shadow-[0_0_30px_rgba(234,179,8,0.28)]"
              width={1536}
              height={1024}
            />
            <span className="text-2xl font-semibold tracking-tight">ServiceLock</span>
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-8 text-4xl font-bold">Terms</h1>

        <p className="mb-6">
          ServiceLock helps businesses respond quickly when they miss a call.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">How it works</h2>
        <p className="mb-6">
          If you call a business and they miss your call, you may receive a follow-up text to help you get what you need faster.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">Messaging</h2>
        <p className="mb-6">
          Messages are only sent in response to your interaction. No marketing messages.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-semibold">Opt out</h2>
        <p className="mb-6">
          You can opt out anytime by replying STOP. For help, reply HELP.
        </p>

        <p className="mt-10 text-sm text-zinc-400">
          We aim to make this helpful and reliable, but like any service, it may not be perfect 100% of the time.
        </p>
      </div>
    </div>
  );
}
