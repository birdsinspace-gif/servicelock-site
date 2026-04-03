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
    "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif";

  const cardStyle: React.CSSProperties = {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: 24,
  };

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
        {/* HERO */}
        <section style={{ paddingTop: 24, paddingBottom: 64, textAlign: "center" }}>
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
              <div style={{ fontWeight: 600 }}>ServiceLock</div>
              <div style={{ fontSize: 12, color: colors.muted }}>
                Missed call recovery for service businesses
              </div>
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1,
              fontWeight: 600,
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
              fontWeight: 600,
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
            <span>You're busy</span>
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
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>
            <a
              href="#pricing"
              style={{
                border: `1px solid ${colors.border}`,
                padding: "14px 24px",
                borderRadius: 12,
                textDecoration: "none",
                color: colors.fg,
              }}
            >
              Pricing
            </a>
          </div>
        </section>

        {/* ROI */}
        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600 }}>
            You’re Losing Real Money Every Time You Miss a Call
          </h2>
          <p style={{ marginTop: 16, color: colors.muted }}>
            Miss just a few calls per week and you’re losing thousands every month.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              ["$500", "Small repair or service call"],
              ["$1,500", "Mid-sized job or urgent issue"],
              ["$5,000+", "High-value project or replacement"],
            ].map(([value, label]) => (
              <div key={value} style={cardStyle}>
                <p style={{ fontSize: 12, color: colors.muted }}>Missed value</p>
                <p style={{ fontSize: 32, color: colors.primary, fontWeight: 600 }}>
                  {value}
                </p>
                <p style={{ fontSize: 14 }}>{label}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 32 }}>
            Right now, when you miss the call, your competitor gets the job.
          </p>
        </section>

        {/* HARD TRUTH */}
        <section style={{ padding: "80px 0" }}>
          <div
            style={{
              ...cardStyle,
              borderRadius: 24,
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: 12, color: colors.muted }}>Hard truth</p>
            <h2 style={{ fontSize: 32, fontWeight: 600 }}>
              If you miss 10 calls this week, how many jobs did you just give away?
            </h2>
          </div>
        </section>

        {/* CLOSE */}
        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 600 }}>
            Stop Losing Jobs
          </h2>

          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+19142668127"
              style={{
                background: colors.primary,
                color: colors.primaryFg,
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
