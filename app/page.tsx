import { Inter, Oswald } from "next/font/google";

const heading = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const c = {
    bg: "#0f1318",
    fg: "#f5f3ef",
    primary: "#f5a503",
    primaryFg: "#0f1318",
    muted: "#828a94",
    border: "#272e38",
    card: "#151a21",
    secondary: "#212730",
    glow: "rgba(245,165,3,0.14)",
  };

  const wrap: React.CSSProperties = {
    width: "100%",
    maxWidth: 1040,
    margin: "0 auto",
    paddingLeft: 24,
    paddingRight: 24,
    boxSizing: "border-box",
  };

  const card: React.CSSProperties = {
    background: `linear-gradient(180deg, ${c.card}, ${c.secondary})`,
    border: `1px solid ${c.border}`,
    borderRadius: 22,
    padding: 28,
    boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
  };

  return (
    <main
      className={body.className}
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(245,165,3,0.05), transparent 24%),
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
              width: 40,
              height: 40,
              borderRadius: 12,
              background: c.primary,
              color: c.primaryFg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              boxShadow: `0 10px 26px ${c.glow}`,
              flexShrink: 0,
            }}
          >
            S
          </div>

          <div>
            <div
              className={heading.className}
              style={{
                fontSize: 24,
                lineHeight: 1,
                letterSpacing: "0.01em",
              }}
            >
              ServiceLock
            </div>
            <div
              style={{
                color: c.muted,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              Recovered revenue from missed calls
            </div>
          </div>
        </div>

        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: c.fg,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${c.border}`,
            padding: "12px 16px",
            borderRadius: 14,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          Pricing
        </a>
      </header>

      <section
        style={{
          ...wrap,
          textAlign: "center",
          paddingTop: 72,
          paddingBottom: 72,
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
            fontSize: "clamp(46px, 7vw, 74px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            margin: "0 auto 18px",
            maxWidth: 880,
          }}
        >
          Turn Missed Calls Into
          <br />
          Thousands in Recovered Jobs
        </h1>

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto 18px",
            color: c.muted,
            fontSize: 22,
            lineHeight: 1.7,
          }}
        >
          <div>They call once.</div>
          <div>You’re busy.</div>
          <div>They call the next company.</div>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: 28,
          }}
        >
          That job is gone.
        </div>

        <p
          style={{
            maxWidth: 720,
            margin: "0 auto 30px",
            fontSize: 19,
            lineHeight: 1.75,
            color: c.fg,
            opacity: 0.92,
          }}
        >
          ServiceLock recovers those jobs automatically.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 14,
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
            href="#pricing"
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
            Get Started
          </a>
        </div>
      </section>

      <section style={{ ...wrap, paddingBottom: 28 }}>
        <div style={card}>
          <div
            className={heading.className}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You’re Losing Real Money
            <br />
            Every Time You Miss a Call
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 14,
              marginBottom: 18,
            }}
          >
            {["$500", "$1,500", "$5,000+"].map((item) => (
              <div
                key={item}
                className={heading.className}
                style={{
                  fontSize: 32,
                  lineHeight: 1,
                  padding: "14px 18px",
                  borderRadius: 16,
                  background: "rgba(245,165,3,0.08)",
                  border: "1px solid rgba(245,165,3,0.20)",
                  color: c.primary,
                  minWidth: 120,
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            Miss just a few calls per week and you’re losing thousands every month.
          </p>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 28, paddingBottom: 28 }}>
        <h2
          className={heading.className}
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            textAlign: "center",
            margin: "0 0 22px",
          }}
        >
          ServiceLock Flips That
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              n: "1",
              title: "We Respond Instantly",
              text: "The moment you miss the call, we step in.",
            },
            {
              n: "2",
              title: "We Capture the Job",
              text: "We qualify the lead and keep them from moving on.",
            },
            {
              n: "3",
              title: "We Send You the Lead",
              text: "You call back and close it.",
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
                  border: "1px solid rgba(245,165,3,0.24)",
                }}
              >
                {item.n}
              </div>

              <div
                className={heading.className}
                style={{
                  fontSize: 24,
                  lineHeight: 1.05,
                  textAlign: "center",
                  marginBottom: 10,
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

      <section style={{ ...wrap, paddingTop: 28, paddingBottom: 28 }}>
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
            className={heading.className}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              textAlign: "center",
              color: c.primary,
              marginBottom: 12,
            }}
          >
            $497 Per Month
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              fontSize: 20,
              lineHeight: 1.8,
              color: c.fg,
            }}
          >
            One recovered job can cover the entire cost.
            <br />
            <strong>Two or more recovered jobs = profit.</strong>
            <br />
            Everything after that is upside.
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 28, paddingBottom: 28 }}>
        <div style={card}>
          <div
            className={heading.className}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            The First Company To Respond
            <br />
            Usually Wins
          </div>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            ServiceLock makes sure you’re not the one losing.
          </p>
        </div>
      </section>

      <section id="pricing" style={{ ...wrap, paddingTop: 28, paddingBottom: 96 }}>
        <div style={card}>
          <div
            className={heading.className}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Stop Losing Jobs To Missed Calls
          </div>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto 28px",
              textAlign: "center",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            Call the demo or book your 15-minute setup call.
          </p>

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
