export default function ServiceLockLandingPage() {
  const colors = {
    bg: "hsl(220 20% 7%)",
    fg: "hsl(40 20% 95%)",
    primary: "hsl(38 92% 50%)",
    primaryFg: "hsl(220 20% 7%)",
    card: "hsl(220 18% 10%)",
    muted: "hsl(220 10% 55%)",
    border: "hsl(220 15% 18%)",
  };

  const fontStack =
    "'Archivo Black', 'Russo One', 'Teko', 'Bebas Neue', system-ui, sans-serif";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.fg,
        fontFamily: fontStack,
      }}
    >
      <main
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px 40px",
        }}
      >
        <section
          style={{
            paddingTop: 24,
            paddingBottom: 64,
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: colors.card,
                border: `1px solid ${colors.border}`,
                color: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              S
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>ServiceLock</div>
              <div style={{ fontSize: 12, color: colors.muted }}>
                Missed call recovery for service businesses
              </div>
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Turned Missed Calls into
            <span style={{ display: "block", color: colors.primary }}>
              Recovered Jobs
            </span>
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: "clamp(18px, 2vw, 24px)",
              color: colors.primary,
              fontWeight: 700,
            }}
          >
            Miss a call → Lose a job
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              fontSize: 14,
              color: colors.muted,
            }}
          >
            <span>They call once</span>
            <span>•</span>
            <span>You&apos;re busy</span>
            <span>•</span>
            <span>They call the next company</span>
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+19142668127"
              style={{
                background: colors.primary,
                color: colors.primaryFg,
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>
            <a
              href="#pricing"
              style={{
                border: `1px solid ${colors.border}`,
                color: colors.fg,
                padding: "14px 24px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Pricing
            </a>
          </div>
        </section>

        <section
          style={{
            padding: "80px 0",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            You’re Losing Real Money Every Time You Miss a Call
          </h2>
          <p
            style={{
              marginTop: 16,
              color: colors.muted,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Miss just a few calls per week and you’re losing thousands every month.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {[
              ["$500", "Small repair or service call"],
              ["$1,500", "Mid-sized job or urgent issue"],
              ["$5,000+", "High-value project or replacement"],
            ].map(([value, label]) => (
              <div
                key={value}
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <p style={{ fontSize: 12, color: colors.muted, margin: 0 }}>
                  Missed value
                </p>
                <p
                  style={{
                    fontSize: 32,
                    color: colors.primary,
                    fontWeight: 700,
                    margin: "8px 0 0",
                  }}
                >
                  {value}
                </p>
                <p style={{ fontSize: 14, marginTop: 8 }}>{label}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 32, fontSize: 18 }}>
            Right now, when you miss the call, your competitor gets the job.
          </p>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 24,
              padding: 40,
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: 12, color: colors.muted, margin: 0 }}>
              Hard truth
            </p>
            <h2
              style={{
                marginTop: 16,
                fontSize: 36,
                fontWeight: 700,
              }}
            >
              If you miss 10 calls this week, how many jobs did you just give away?
            </h2>
          </div>
        </section>

        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            ServiceLock Flips That
          </h2>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gap: 24,
              maxWidth: 760,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {[
              [
                "01",
                "We Respond Instantly",
                "The moment you miss the call, we step in and text back while they’re still looking.",
              ],
              [
                "02",
                "We Capture the Job",
                "We qualify the lead, gather the important details, and keep them from moving on.",
              ],
              [
                "03",
                "We Send You the Lead",
                "You get the lead, call back fast, and close with context instead of starting cold.",
              ],
            ].map(([n, title, text]) => (
              <div key={n}>
                <p style={{ color: colors.primary, margin: 0 }}>{n}</p>
                <p style={{ fontWeight: 700, margin: "8px 0 0" }}>{title}</p>
                <p style={{ color: colors.muted, marginTop: 8 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" style={{ padding: "80px 0", textAlign: "center" }}>
          <div
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 24,
              padding: 40,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: 56,
                color: colors.primary,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              $497/month
            </h2>
            <div style={{ marginTop: 24, fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>No setup fee</p>
              <p style={{ margin: 0 }}>No contract</p>
              <p style={{ margin: 0 }}>Cancel anytime</p>
            </div>
            <p style={{ marginTop: 24, color: colors.muted, fontSize: 14 }}>
              One job covers the cost. Everything else is profit.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Stop Losing Jobs
          </h2>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+19142668127"
              style={{
                background: colors.primary,
                color: colors.primaryFg,
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>
            <a
              href="#"
              style={{
                border: `1px solid ${colors.border}`,
                color: colors.fg,
                padding: "14px 24px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book Setup Call
            </a>
          </div>
        </section>

        <footer
          style={{
            borderTop: `1px solid ${colors.border}`,
            marginTop: 80,
            paddingTop: 32,
            paddingBottom: 24,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: colors.card,
                border: `1px solid ${colors.border}`,
                color: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              S
            </div>
            <div style={{ fontWeight: 700 }}>ServiceLock</div>
            <div style={{ fontSize: 12, color: colors.muted }}>
              Missed call recovery for service businesses
            </div>
          </div>

          <div style={{ marginTop: 24, fontSize: 12, color: colors.muted }}>
            © {new Date().getFullYear()} ServiceLock. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
