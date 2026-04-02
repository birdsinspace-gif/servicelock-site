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

  const sectionStyle: React.CSSProperties = {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
  };

  const cardStyle: React.CSSProperties = {
    background: c.card,
    border: `1px solid ${c.border}`,
    borderRadius: 20,
    padding: 24,
  };

  return (
    <main
      style={{
        background: c.bg,
        color: c.fg,
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          ...sectionStyle,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          paddingBottom: 24,
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
            }}
          >
            S
          </div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>ServiceLock</div>
        </div>

        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: c.fg,
            border: `1px solid ${c.border}`,
            background: c.secondary,
            padding: "12px 16px",
            borderRadius: 12,
            fontWeight: 600,
          }}
        >
          See Pricing
        </a>
      </header>

      <section
        style={{
          ...sectionStyle,
          paddingTop: 48,
          paddingBottom: 64,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "8px 12px",
            borderRadius: 999,
            background: c.secondary,
            border: `1px solid ${c.border}`,
            color: c.muted,
            fontSize: 14,
            marginBottom: 22,
          }}
        >
          Missed calls, recovered automatically
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 76px)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            margin: "0 0 22px",
            maxWidth: 820,
          }}
        >
          Turn Missed Calls Into Booked Jobs Automatically
        </h1>

        <p
          style={{
            fontSize: 21,
            lineHeight: 1.6,
            color: c.muted,
            maxWidth: 760,
            margin: "0 0 18px",
          }}
        >
          ServiceLock captures missed calls and turns them into real booked jobs.
          When your team is on a job, under a house, on a roof, driving, or it is
          after hours, we make sure customers do not move on to the next company.
        </p>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: c.fg,
            maxWidth: 720,
            margin: "0 0 30px",
            fontWeight: 600,
          }}
        >
          They do not leave voicemails. They call the next company.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <a
            href="tel:9142668127"
            style={{
              background: c.primary,
              color: c.primaryFg,
              padding: "15px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Try Demo: (914) 266-8127
          </a>

          <a
            href="#pricing"
            style={{
              background: c.secondary,
              color: c.fg,
              padding: "15px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 700,
              border: `1px solid ${c.border}`,
            }}
          >
            Get Started
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            color: c.muted,
            fontSize: 15,
          }}
        >
          <span>Instant response</span>
          <span>Lead qualification</span>
          <span>No setup fee</span>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              You are already paying for the phone to ring
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              If you are spending money on ads, SEO, referrals, trucks, techs, or
              office staff, losing inbound calls is pure waste.
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              Missed calls become missed revenue
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              One missed emergency call or quote request can be worth far more than
              the monthly fee.
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              Speed wins the job
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              The company that responds first usually gets the call back. ServiceLock
              helps make sure that company is you.
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          paddingTop: 36,
          paddingBottom: 24,
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 22 }}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
            }}
          >
            What ServiceLock Does
          </h2>
          <p style={{ color: c.muted, fontSize: 18, lineHeight: 1.65, margin: 0 }}>
            No more chasing voicemails. No more losing hot leads because your team
            was busy.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              Instant Text Response
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              Texts missed callers within seconds, while they are still looking for
              help.
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              Captures Lead Details
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              Collects name, contact info, job details, and urgency automatically.
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
              Sends You a Clean Lead
            </div>
            <div style={{ color: c.muted, lineHeight: 1.65 }}>
              You get the summary fast, so you can call back, quote faster, and book
              the job before your competitor does.
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          paddingTop: 36,
          paddingBottom: 24,
        }}
      >
        <div style={cardStyle}>
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              marginBottom: 10,
              letterSpacing: "0.02em",
            }}
          >
            WHY THIS MATTERS
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.2,
              fontWeight: 700,
              marginBottom: 14,
              maxWidth: 850,
            }}
          >
            One missed emergency or quote call can cost $500 to $8,000+.
          </div>
          <div
            style={{
              color: c.muted,
              lineHeight: 1.7,
              fontSize: 18,
              maxWidth: 860,
            }}
          >
            Miss just a few calls each week and you are quietly losing thousands
            every month. ServiceLock is built to recover that revenue before it
            disappears.
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          paddingTop: 36,
          paddingBottom: 24,
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 22 }}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
            }}
          >
            How It Works
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              title: "1. You miss the call",
              text: "You are on a job, driving, after hours, or helping another customer.",
            },
            {
              title: "2. ServiceLock responds immediately",
              text: "The caller gets a fast professional text instead of silence.",
            },
            {
              title: "3. You get the lead back fast",
              text: "You receive the details and can close the job before they move on.",
            },
          ].map((item) => (
            <div key={item.title} style={cardStyle}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ color: c.muted, lineHeight: 1.65 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        style={{
          ...sectionStyle,
          paddingTop: 52,
          paddingBottom: 90,
        }}
      >
        <div
          style={{
            ...cardStyle,
            padding: 32,
            background: `linear-gradient(180deg, ${c.card}, ${c.secondary})`,
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: 22 }}>
            <div
              style={{
                color: c.primary,
                fontWeight: 800,
                marginBottom: 10,
                letterSpacing: "0.02em",
              }}
            >
              SIMPLE PRICING
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                margin: "0 0 12px",
              }}
            >
              One clear offer.
            </h2>

            <p
              style={{
                color: c.muted,
                fontSize: 18,
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 740,
              }}
            >
              No setup fee. No confusing tiers. Just a straightforward way to stop
              losing jobs from missed calls.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 24,
              alignItems: "flex-end",
            }}
          >
            <div>
              <div style={{ color: c.muted, fontSize: 15, marginBottom: 8 }}>
                Monthly price
              </div>
              <div
                style={{
                  fontSize: 62,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
              >
                $349
                <span
                  style={{
                    fontSize: 22,
                    color: c.muted,
                    fontWeight: 600,
                  }}
                >
                  /month
                </span>
              </div>
              <div style={{ marginTop: 12, fontWeight: 700 }}>No setup fee.</div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="tel:9142668127"
                style={{
                  background: c.primary,
                  color: c.primaryFg,
                  textDecoration: "none",
                  padding: "15px 22px",
                  borderRadius: 14,
                  fontWeight: 800,
                }}
              >
                Call the Demo
              </a>

              <a
                href="mailto:hello@servicelock.com"
                style={{
                  background: c.secondary,
                  color: c.fg,
                  textDecoration: "none",
                  padding: "15px 22px",
                  borderRadius: 14,
                  fontWeight: 700,
                  border: `1px solid ${c.border}`,
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
