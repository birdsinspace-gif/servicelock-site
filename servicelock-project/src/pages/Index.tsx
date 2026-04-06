import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Turn Missed Calls Into
              <span className="block text-blue-500">Recovered Jobs</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              When customers can’t reach you, they call the next company.
              ServiceLock helps you respond faster and capture the opportunity.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:+19142668127"
                className="bg-blue-600 px-6 py-3 rounded-lg font-semibold"
              >
                Call Demo
              </a>
              <a
                href="#pricing"
                className="border border-gray-600 px-6 py-3 rounded-lg"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div {...anim(0.2)}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              {/* HEADER FIXED */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase text-gray-500">
                    Example workflow
                  </p>
                  <h2 className="text-2xl font-bold">What you get</h2>
                </div>
                <ShieldCheck className="text-blue-500" />
              </div>

              {/* CARDS */}
              <div className="space-y-4">
                <div className="border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500">Incoming</p>
                  <p className="font-semibold mt-1">
                    Missed call from new customer
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    "Need help with an urgent plumbing leak."
                  </p>
                </div>

                <div className="border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500">Immediate follow-up</p>
                  <p className="font-semibold mt-1">
                    Fast response sent
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Keeps the lead warm while they’re still deciding.
                  </p>
                </div>

                <div className="border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500">Handoff</p>
                  <p className="font-semibold mt-1">
                    Lead details captured
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Name, issue, urgency, callback info.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Faster follow-up = higher chance of winning the job.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 text-center">
        <div className="container max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Simple Pricing
          </h2>

          <p className="mt-4 text-gray-400">
            One job can cover the entire month.
          </p>

          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-10">
            <p className="text-gray-500 text-sm">Monthly</p>
            <p className="text-6xl font-bold text-blue-500 mt-2">$497</p>

            <ul className="mt-6 space-y-2 text-gray-400 text-sm">
              <li>No setup fee</li>
              <li>No contract</li>
              <li>Cancel anytime</li>
            </ul>

            <a
              href="tel:+19142668127"
              className="block mt-8 bg-blue-600 py-4 rounded-lg font-semibold"
            >
              Call the Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ServiceLock
      </footer>

    </main>
  );
};

export default Index;
