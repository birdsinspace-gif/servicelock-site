export default function Home() {
  const c = {
    bg: "hsl(220 20% 7%)",
    fg: "hsl(40 20% 95%)",
    primary: "hsl(38 92% 50%)",
    primaryFg: "hsl(220 20% 7%)",
    card: "hsl(220 18% 10%)",
    secondary: "hsl(220 15% 15%)",
    muted: "hsl(220 10% 55%)",
    border: "hsl(220 15% 18%)",
  };

  return (
    <main style={{ background: c.bg, color: c.fg, minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      
      {/* NAV */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>ServiceLock</div>
        <a href="#pricing" style={{
          border: `1px solid ${c.border}`,
          padding: "10px 16px",
          borderRadius: 12,
          textDecoration: "none",
          color: c.fg
        }}>
          Pricing
        </a>
      </div>

      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{
          fontSize: 64,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          marginBottom: 20
        }}>
          Turn Missed Calls Into Booked Jobs Automatically
        </h1>

        <p style={{
          fontSize: 20,
          color: c.muted,
          maxWidth: 700,
          marginBottom: 30
        }}>
          ServiceLock captures missed calls and turns them into real booked jobs. When your team is on a job or it’s after hours, we make sure customers don’t move on to the next company.
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          <a href="tel:9142668127" style={{
            background: c.primary,
            color: c.primaryFg,
            padding: "14px 20px",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 700
          }}>
            Try Demo: (914) 266-8127
          </a>

          <a href="#pricing" style={{
            border: `1px solid ${c.border}`,
            padding: "14px 20px",
            borderRadius: 12,
            textDecoration: "none",
            color: c.fg
          }}>
            Get Started
          </a>
        </div>

        <p style={{ marginTop: 20, color: c.muted }}>
          They don’t leave voicemails. They call the next company.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>How ServiceLock Works</h2>

        <div style={{ display: "grid", gap: 16 }}>
          {[
            ["Instant Text Response", "Texts back missed callers within seconds"],
            ["Captures Lead Details", "Name, contact info, job details"],
            ["Books or Routes the Job", "Gets you the job before competitors"]
          ].map(([title, desc]) => (
            <div key={title} style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              padding: 20,
              borderRadius: 16
            }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
              <div style={{ color: c.muted }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{
          background: c.card,
          border: `1px solid ${c.border}`,
          padding: 24,
          borderRadius: 20
        }}>
          One missed emergency or quote call can cost $500–$8,000+.
          Miss just a few per week and you’re losing thousands every month.
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Simple Pricing</h2>

        <div style={{
          background: c.card,
          border: `1px solid ${c.border}`,
          padding: 30,
          borderRadius: 20
        }}>
          <div style={{ fontSize: 48, fontWeight: 800 }}>
            $349<span style={{ fontSize: 20, color: c.muted }}>/month</span>
          </div>

          <p style={{ color: c.muted, marginTop: 10 }}>
            No setup fee. Cancel anytime.
          </p>

          <a href="tel:9142668127" style={{
            display: "inline-block",
            marginTop: 20,
            background: c.primary,
            color: c.primaryFg,
            padding: "14px 20px",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 700
          }}>
            Call the Demo
          </a>
        </div>
      </section>

    </main>
  );
}
