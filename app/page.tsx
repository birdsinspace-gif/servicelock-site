import { Inter, Sora } from "next/font/google";

const heading = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
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
    glow: "rgba(245,165,3,0.16)",
  };

  const wrap: React.CSSProperties = {
    width: "100%",
    maxWidth: 1120,
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
    boxShadow: "0 12px 40px rgba(0,0,0,0.20)",
  };

  const sectionHeading: React.CSSProperties = {
    fontSize: "clamp(30px, 4vw, 44px)",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    textAlign: "center",
    margin: "0 0 14px",
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
      className={body.className}
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(245,165,3,0.06), transparent 24%),
          linear-gradient(180deg, ${c.bg} 0%, ${c.bg} 100%)
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              background: c.primary,
              color: c.primaryFg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              boxShadow: `0 10px 28px ${c.glow}`,
              flexShrink: 0,
            }}
          >
            S
          </div>
          <div>
            <div
              className={heading.className}
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              ServiceLock
            </div>
            <div
              style={{
                color: c.muted,
                fontSize: 12,
                marginTop: 3,
              }}
            >
              Missed call recovery for service businesses
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
            padding: "12px 16px",
            borderRadius: 14,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          See Pricing
        </a>
      </header>

      <section
        style={{
          ...wrap,
          paddingTop: 64,
          paddingBottom: 64,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "9px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${c.border}`,
            color: c.muted,
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Built for busy service teams
        </div>

        <h1
          className={heading.className}
          style={{
            fontSize: "clamp(42px, 7vw, 68px)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            margin: "0 auto 22px",
            maxWidth: 920,
            fontWeight: 800,
          }}
        >
          We Recover Your Missed Calls
          <br />
          and Turn Them Into Booked Jobs
        </h1>

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 28px",
            color: c.muted,
            fontSize: 20,
            lineHeight: 1.75,
          }}
        >
          <div>They call once.</div>
          <div>You’re on a job, driving, under a house, or up on a roof.</div>
          <div>They hang up and call the next company.</div>
          <div style={{ color: c.fg, fontWeight: 700, marginTop: 8 }}>
            We stop that from happening.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 16,
          }}
        >
          <a
            href="tel:9142668127"
            style={{
              background: c.primary,
              color: c.primaryFg,
              textDecoration: "none",
              padding: "15px 22px",
              borderRadius: 16,
              fontWeight: 800,
              boxShadow: `0 14px 34px ${c.glow}`,
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
              padding: "15px 22px",
              borderRadius: 16,
              fontWeight: 700,
              border: `1px solid ${c.border}`,
            }}
          >
            Get Started
          </a>
        </div>

        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            color: c.muted,
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          They do not leave voicemails. They call the next company.
        </div>
      </section>

      <section style={{ ...wrap, paddingBottom: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              title: "You are already paying for the phone to ring",
              text: "If you spend money on ads, referrals, trucks, dispatch, techs, or office staff, losing inbound calls is pure waste.",
            },
            {
              title: "Missed calls become missed revenue",
              text: "One missed emergency call or quote request can be worth far more than the monthly fee.",
            },
            {
              title: "The fastest response usually wins",
              text: "The company that responds first usually gets the callback. ServiceLock helps make sure that company is you.",
            },
          ].map((item) => (
            <div key={item.title} style={card}>
              <div
                className={heading.className}
                style={{
                  fontSize: 22,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: c.muted,
                  lineHeight: 1.75,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 56, paddingBottom: 20 }}>
        <h2 className={heading.className} style={sectionHeading}>
          How ServiceLock Works
        </h2>
        <p style={{ ...sectionText, marginBottom: 28 }}>
          You simply forward your business number to us, or we set it up in
          minutes. When you miss a call, ServiceLock steps in immediately.
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
              title: "Clean Lead Summary",
              text: "You get the key details by text or email. You just follow up and book the job.",
            },
          ].map((item) => (
            <div key={item.n} style={card}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  margin: "0 auto 14px",
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  background: "rgba(245,165,3,0.14)",
                  color: c.primary,
                  border: "1px solid rgba(245,165,3,0.25)",
                }}
              >
                {item.n}
              </div>
              <div
                className={heading.className}
                style={{
                  fontSize: 22,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: c.muted,
                  lineHeight: 1.75,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 19,
            fontWeight: 700,
          }}
        >
          We handle the busywork. You close the job.
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 56, paddingBottom: 20 }}>
        <div
          style={{
            ...card,
            background: `
              linear-gradient(180deg, rgba(245,165,3,0.07), rgba(245,165,3,0.02)),
              linear-gradient(180deg, ${c.card}, ${c.secondary})
            `,
            border: "1px solid rgba(245,165,3,0.22)",
          }}
        >
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              textAlign: "center",
              letterSpacing: "0.02em",
              marginBottom: 10,
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Real Results
          </div>

          <div
            className={heading.className}
            style={{
              maxWidth: 820,
              margin: "0 auto 12px",
              textAlign: "center",
              fontSize: "clamp(30px, 4vw, 42px)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              fontWeight: 800,
            }}
          >
            One to two recovered jobs usually covers the entire cost.
          </div>

          <div
            style={{
              maxWidth: 780,
              margin: "0 auto",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Three or more recovered jobs is pure profit. Most service businesses
            should see value quickly.
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 24, paddingBottom: 20 }}>
        <div
          style={{
            ...card,
            background: "rgba(245,165,3,0.08)",
            border: "1px solid rgba(245,165,3,0.24)",
          }}
        >
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              textAlign: "center",
              letterSpacing: "0.02em",
              marginBottom: 10,
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Why This Matters
          </div>

          <div
            className={heading.className}
            style={{
              maxWidth: 860,
              margin: "0 auto 12px",
              textAlign: "center",
              fontSize: "clamp(30px, 4vw, 42px)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              fontWeight: 800,
            }}
          >
            One missed emergency or quote call can cost $500 to $8,000+.
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              color: c.fg,
              opacity: 0.9,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Miss just a few calls each week and you are quietly losing thousands
            every month.
          </div>
        </div>
      </section>

      <section id="pricing" style={{ ...wrap, paddingTop: 56, paddingBottom: 96 }}>
        <div style={{ ...card, padding: 34 }}>
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              textAlign: "center",
              letterSpacing: "0.02em",
              marginBottom: 10,
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Simple Pricing
          </div>

          <h2
            className={heading.className}
            style={{
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              textAlign: "center",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            Only $349 per month
          </h2>

          <p
            style={{
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 24px",
            }}
          >
            Flat rate. Unlimited leads and texts. No setup fee. No contract.
            Cancel anytime.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 26,
            }}
          >
            {["Unlimited leads & texts", "No setup fee", "No contract", "Cancel anytime"].map(
              (item) => (
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
              )
            )}
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto 28px",
              textAlign: "center",
            }}
          >
            <div
              className={heading.className}
              style={{
                fontSize: "clamp(28px, 3.5vw, 38px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 10,
                fontWeight: 800,
              }}
            >
              Ready to stop losing jobs to missed calls?
            </div>
            <div
              style={{
                color: c.muted,
                fontSize: 18,
                lineHeight: 1.75,
              }}
            >
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
                borderRadius: 16,
                fontWeight: 800,
                boxShadow: `0 14px 34px ${c.glow}`,
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
                borderRadius: 16,
                fontWeight: 700,
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
