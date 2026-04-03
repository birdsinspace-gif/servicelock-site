import { Anton, Inter } from "next/font/google";

const headingFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
    glow: "rgba(245,165,3,0.18)",
  };

  const wrap: React.CSSProperties = {
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    paddingLeft: 24,
    paddingRight: 24,
    boxSizing: "border-box",
  };

  const card: React.CSSProperties = {
    background: `linear-gradient(180deg, ${c.card}, ${c.secondary})`,
    border: `1px solid ${c.border}`,
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 18px 60px rgba(0,0,0,0.24)",
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: "clamp(34px, 4.8vw, 58px)",
    lineHeight: 0.95,
    letterSpacing: "-0.03em",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0 0 16px",
  };

  const sectionText: React.CSSProperties = {
    maxWidth: 760,
    margin: "0 auto",
    textAlign: "center",
    color: c.muted,
    fontSize: 18,
    lineHeight: 1.75,
  };

  return (
    <main
      className={bodyFont.className}
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(245,165,3,0.08), transparent 28%),
          linear-gradient(180deg, #0f1318 0%, #0f1318 100%)
        `,
        color: c.fg,
      }}
    >
      <header
        style={{
          ...wrap,
          paddingTop: 24,
          paddingBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 14,
              background: c.primary,
              color: c.primaryFg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 20,
              boxShadow: `0 14px 34px ${c.glow}`,
              flexShrink: 0,
            }}
          >
            S
          </div>
          <div>
            <div
              className={headingFont.className}
              style={{
                fontSize: 28,
                lineHeight: 1,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              ServiceLock
            </div>
            <div style={{ color: c.muted, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Missed Call Recovery
            </div>
          </div>
        </div>

        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: c.fg,
            border: `1px solid ${c.border}`,
            background: "rgba(255,255,255,0.03)",
            padding: "13px 18px",
            borderRadius: 16,
            fontWeight: 800,
            whiteSpace: "nowrap",
          }}
        >
          See Pricing
        </a>
      </header>

      <section
        style={{
          ...wrap,
          paddingTop: 52,
          paddingBottom: 46,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "10px 16px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${c.border}`,
            color: c.muted,
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          Built for roofers, HVAC, plumbing, electrical, and home service teams
        </div>

        <h1
          className={headingFont.className}
          style={{
            fontSize: "clamp(56px, 10vw, 112px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            margin: "0 auto 20px",
            maxWidth: 1080,
            textShadow: "0 8px 30px rgba(0,0,0,0.24)",
          }}
        >
          We Recover Your Missed Calls
          <br />
          And Turn Them Into Booked Jobs
        </h1>

        <div
          style={{
            maxWidth: 820,
            margin: "0 auto 30px",
            color: c.muted,
            fontSize: 22,
            lineHeight: 1.7,
          }}
        >
          <div>They call once.</div>
          <div>You’re on a job, in traffic, under a house, or up on a roof.</div>
          <div>They hang up and call the next company.</div>
          <div style={{ color: c.fg, fontWeight: 800, marginTop: 10 }}>
            We stop that from happening.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <a
            href="tel:9142668127"
            style={{
              background: c.primary,
              color: c.primaryFg,
              textDecoration: "none",
              padding: "16px 24px",
              borderRadius: 18,
              fontWeight: 900,
              boxShadow: `0 18px 40px ${c.glow}`,
            }}
          >
            Call the Live Demo: (914) 266-8127
          </a>

          <a
            href="#pricing"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: c.fg,
              textDecoration: "none",
              padding: "16px 24px",
              borderRadius: 18,
              fontWeight: 800,
              border: `1px solid ${c.border}`,
            }}
          >
            Get Started
          </a>
        </div>

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            color: c.muted,
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          They do not leave voicemails. They call the next company.
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 10, paddingBottom: 28 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              title: "YOU ARE ALREADY PAYING FOR THE PHONE TO RING",
              text: "If you spend money on ads, referrals, trucks, dispatch, techs, or office staff, losing inbound calls is pure waste.",
            },
            {
              title: "MISSED CALLS BECOME MISSED REVENUE",
              text: "One missed emergency call or quote request can be worth far more than the monthly fee.",
            },
            {
              title: "THE FASTEST RESPONSE USUALLY WINS",
              text: "The company that responds first usually gets the callback. ServiceLock helps make sure that company is you.",
            },
          ].map((item) => (
            <div key={item.title} style={card}>
              <div
                className={headingFont.className}
                style={{
                  fontSize: 30,
                  lineHeight: 0.95,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                  textAlign: "center",
                }}
              >
                {item.title}
              </div>
              <div style={{ color: c.muted, lineHeight: 1.75, textAlign: "center", fontSize: 16 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 34, paddingBottom: 22 }}>
        <h2 className={headingFont.className} style={sectionTitle}>
          How ServiceLock Works
        </h2>
        <p style={{ ...sectionText, marginBottom: 28 }}>
          You simply forward your business number to us, or we set it up in minutes.
          When you miss a call, ServiceLock steps in immediately.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              n: "1",
              title: "Professional Text Reply",
              text: "We respond instantly so the customer hears from you while they are still looking for help.",
            },
            {
              n: "2",
              title: "Lead Qualification",
              text: "We ask smart questions, capture job details, and identify urgency so you know who is ready to buy.",
            },
            {
              n: "3",
              title: "Ready-To-Close Lead Summary",
              text: "You get the key details by text or email. You just follow up and book the job.",
            },
          ].map((item) => (
            <div key={item.n} style={card}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  margin: "0 auto 14px",
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  background: "rgba(245,165,3,0.14)",
                  color: c.primary,
                  border: "1px solid rgba(245,165,3,0.25)",
                }}
              >
                {item.n}
              </div>
              <div
                className={headingFont.className}
                style={{
                  fontSize: 32,
                  lineHeight: 0.95,
                  letterSpacing: "0.015em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  textAlign: "center",
                }}
              >
                {item.title}
              </div>
              <div style={{ color: c.muted, lineHeight: 1.75, textAlign: "center", fontSize: 16 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          We handle the busywork. You close the job.
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 36, paddingBottom: 22 }}>
        <div
          style={{
            ...card,
            background: `
              linear-gradient(180deg, rgba(245,165,3,0.08), rgba(245,165,3,0.02)),
              linear-gradient(180deg, ${c.card}, ${c.secondary})
            `,
            border: "1px solid rgba(245,165,3,0.22)",
          }}
        >
          <div
            className={headingFont.className}
            style={{
              fontSize: 34,
              lineHeight: 0.95,
              textAlign: "center",
              textTransform: "uppercase",
              color: c.primary,
              letterSpacing: "0.02em",
              marginBottom: 12,
            }}
          >
            Real Results
          </div>

          <div
            style={{
              maxWidth: 840,
              margin: "0 auto 14px",
              textAlign: "center",
              fontSize: 34,
              lineHeight: 1.2,
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            One to two recovered jobs usually covers the entire cost.
          </div>

          <div
            style={{
              maxWidth: 840,
              margin: "0 auto",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Three or more recovered jobs is pure profit. Most service businesses should see the value fast.
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 36, paddingBottom: 22 }}>
        <div
          style={{
            ...card,
            background: "rgba(245,165,3,0.08)",
            border: "1px solid rgba(245,165,3,0.24)",
          }}
        >
          <div
            className={headingFont.className}
            style={{
              fontSize: 34,
              lineHeight: 0.95,
              textAlign: "center",
              textTransform: "uppercase",
              color: c.primary,
              letterSpacing: "0.02em",
              marginBottom: 12,
            }}
          >
            Why This Matters
          </div>

          <div
            style={{
              maxWidth: 900,
              margin: "0 auto 12px",
              textAlign: "center",
              fontSize: 36,
              lineHeight: 1.18,
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            One missed emergency or quote call can cost $500 to $8,000+.
          </div>

          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              color: c.fg,
              opacity: 0.9,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Miss just a few calls each week and you are quietly losing thousands every month.
          </div>
        </div>
      </section>

      <section id="pricing" style={{ ...wrap, paddingTop: 50, paddingBottom: 96 }}>
        <div
          style={{
            ...card,
            padding: 36,
          }}
        >
          <div
            className={headingFont.className}
            style={{
              ...sectionTitle,
              color: c.primary,
              fontSize: "clamp(30px, 4vw, 46px)",
              marginBottom: 10,
            }}
          >
            Simple Pricing
          </div>

          <div
            className={headingFont.className}
            style={{
              fontSize: "clamp(52px, 8vw, 92px)",
              lineHeight: 0.92,
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              marginBottom: 10,
            }}
          >
            Only $349 Per Month
          </div>

          <p
            style={{
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.75,
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 24px",
            }}
          >
            Flat rate. Unlimited leads and texts. No setup fee. No contract. Cancel anytime.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {["Unlimited leads & texts", "No setup fee", "No contract", "Cancel anytime"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "11px 15px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${c.border}`,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: 780,
              margin: "0 auto 28px",
              textAlign: "center",
            }}
          >
            <div
              className={headingFont.className}
              style={{
                fontSize: 36,
                lineHeight: 0.95,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Ready to stop losing jobs to missed calls?
            </div>
            <div style={{ color: c.muted, fontSize: 18, lineHeight: 1.75 }}>
              Call the live demo or book your 15-minute setup call.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:9142668127"
              style={{
                background: c.primary,
                color: c.primaryFg,
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: 18,
                fontWeight: 900,
                boxShadow: `0 18px 40px ${c.glow}`,
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>

            <a
              href="mailto:hello@servicelock.com?subject=ServiceLock%20Setup%20Call"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: c.fg,
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: 18,
                fontWeight: 800,
                border: `1px solid ${c.border}`,
              }}
            >
              Book Your 15-Minute Setup Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
