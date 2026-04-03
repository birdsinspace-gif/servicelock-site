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

  const wrap = {
    maxWidth: 1160,
    margin: "0 auto",
    paddingLeft: 24,
    paddingRight: 24,
  } as const;

  const card = {
    background: c.card,
    border: `1px solid ${c.border}`,
    borderRadius: 22,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
  } as const;

  const sectionTitle = {
    fontSize: "clamp(30px, 4vw, 48px)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    margin: "0 0 14px",
    textAlign: "center" as const,
  };

  const sectionText = {
    color: c.muted,
    fontSize: 18,
    lineHeight: 1.7,
    textAlign: "center" as const,
    maxWidth: 760,
    margin: "0 auto",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: c.bg,
        color: c.fg,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          ...wrap,
          paddingTop: 22,
          paddingBottom: 22,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
              boxShadow: "0 10px 26px rgba(245,165,3,0.24)",
              flexShrink: 0,
            }}
          >
            S
          </div>
          <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
            ServiceLock
          </div>
        </div>

        <a
          href="#pricing"
          style={{
            textDecoration: "none",
            color: c.fg,
            background: c.secondary,
            border: `1px solid ${c.border}`,
            borderRadius: 14,
            padding: "12px 16px",
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
          paddingTop: 54,
          paddingBottom: 52,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 999,
            background: c.secondary,
            border: `1px solid ${c.border}`,
            color: c.muted,
            fontSize: 14,
            marginBottom: 24,
          }}
        >
          Missed calls, recovered automatically
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 82px)",
            lineHeight: 0.96,
            letterSpacing: "-0.055em",
            margin: "0 auto 22px",
            maxWidth: 980,
          }}
        >
          We Recover Your Missed Calls
          <br />
          and Turn Them Into Booked Jobs
        </h1>

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 30px",
            color: c.muted,
            fontSize: 22,
            lineHeight: 1.7,
          }}
        >
          <div>They call once.</div>
          <div>You’re on a job, under a house, on a roof, or driving.</div>
          <div>They hang up and call the next company.</div>
          <div style={{ color: c.fg, fontWeight: 700, marginTop: 8 }}>
            We fix that, automatically.
          </div>
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
          <a
            href="tel:9142668127"
            style={{
              background: c.primary,
              color: c.primaryFg,
              padding: "15px 22px",
              borderRadius: 16,
              textDecoration: "none",
              fontWeight: 800,
              boxShadow: "0 14px 34px rgba(245,165,3,0.22)",
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
              borderRadius: 16,
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
            color: c.muted,
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          They do not leave voicemails. They call the next company.
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 12, paddingBottom: 28 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          <div style={card}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              You are already paying for the phone to ring
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              If you spend money on ads, referrals, trucks, techs, or office staff,
              losing inbound calls is pure waste.
            </div>
          </div>

          <div style={card}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Missed calls become missed revenue
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              One missed emergency call or quote request can be worth far more than
              the monthly fee.
            </div>
          </div>

          <div style={card}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Speed wins the job
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              The company that responds first usually gets the callback. ServiceLock
              helps make sure that company is you.
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 34, paddingBottom: 20 }}>
        <h2 style={sectionTitle}>How ServiceLock Works</h2>
        <p style={{ ...sectionText, marginBottom: 26 }}>
          You simply forward your business phone number to us, or we set it up in
          minutes. When you miss a call, ServiceLock steps in immediately.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 18,
          }}
        >
          <div style={card}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                background: "rgba(245,165,3,0.14)",
                border: "1px solid rgba(245,165,3,0.25)",
                color: c.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                margin: "0 auto 14px",
              }}
            >
              1
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Professional Text Reply
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              We respond instantly so the customer hears from you while they are
              still looking for help.
            </div>
          </div>

          <div style={card}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                background: "rgba(245,165,3,0.14)",
                border: "1px solid rgba(245,165,3,0.25)",
                color: c.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                margin: "0 auto 14px",
              }}
            >
              2
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Lead Qualification
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              We ask smart questions, capture job details, and identify urgency so
              you know who is ready to buy.
            </div>
          </div>

          <div style={card}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                background: "rgba(245,165,3,0.14)",
                border: "1px solid rgba(245,165,3,0.25)",
                color: c.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                margin: "0 auto 14px",
              }}
            >
              3
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Clean Lead Summary
            </div>
            <div
              style={{
                color: c.muted,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              You get a ready to close lead summary by text or email. You just
              follow up and book the job.
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            textAlign: "center",
            fontWeight: 700,
            color: c.fg,
            fontSize: 18,
          }}
        >
          We handle everything else.
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 34, paddingBottom: 20 }}>
        <div
          style={{
            ...card,
            background: `linear-gradient(180deg, ${c.card}, ${c.secondary})`,
            padding: 30,
          }}
        >
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              letterSpacing: "0.02em",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            REAL RESULTS
          </div>

          <div
            style={{
              maxWidth: 800,
              margin: "0 auto 18px",
              textAlign: "center",
              fontSize: 32,
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            One to two recovered jobs usually covers the entire cost.
          </div>

          <div
            style={{
              maxWidth: 820,
              margin: "0 auto",
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            Three or more recovered jobs is pure profit. Most users see payback in
            the first 10 to 14 days.
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 34, paddingBottom: 20 }}>
        <div
          style={{
            ...card,
            background: "rgba(245,165,3,0.08)",
            border: "1px solid rgba(245,165,3,0.24)",
            padding: 30,
          }}
        >
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              letterSpacing: "0.02em",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            WHY THIS MATTERS
          </div>

          <div
            style={{
              maxWidth: 860,
              margin: "0 auto 12px",
              textAlign: "center",
              fontSize: 32,
              lineHeight: 1.2,
              fontWeight: 800,
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
              opacity: 0.88,
              fontSize: 18,
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            Miss just a few calls each week and you are quietly losing thousands
            every month.
          </div>
        </div>
      </section>

      <section id="pricing" style={{ ...wrap, paddingTop: 50, paddingBottom: 96 }}>
        <div
          style={{
            ...card,
            background: `linear-gradient(180deg, ${c.card}, ${c.secondary})`,
            padding: 34,
          }}
        >
          <div
            style={{
              color: c.primary,
              fontWeight: 800,
              letterSpacing: "0.02em",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            SIMPLE PRICING
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 14px",
              textAlign: "center",
            }}
          >
            Only $349 per month
          </h2>

          <p
            style={{
              color: c.muted,
              fontSize: 18,
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 26px",
            }}
          >
            Flat rate. Unlimited leads and texts. No setup fee. No contract, cancel
            anytime.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[
              "Unlimited leads & texts",
              "No setup fee",
              "No contract",
              "Cancel anytime",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${c.border}`,
                  borderRadius: 999,
                  padding: "10px 14px",
                  color: c.fg,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto 28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: c.primary,
                fontWeight: 800,
                letterSpacing: "0.02em",
                marginBottom: 10,
              }}
            >
              FINAL CTA
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.25,
                fontWeight: 800,
                marginBottom: 10,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to stop losing jobs to missed calls?
            </div>
            <div style={{ color: c.muted, fontSize: 18, lineHeight: 1.7 }}>
              Call the live demo or book your 15 minute setup call.
            </div>
          </div>

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
                padding: "15px 22px",
                borderRadius: 16,
                fontWeight: 800,
                boxShadow: "0 14px 34px rgba(245,165,3,0.22)",
              }}
            >
              Call the Live Demo: (914) 266-8127
            </a>

            <a
              href="mailto:hello@servicelock.com?subject=ServiceLock%20Setup%20Call"
              style={{
                background: c.secondary,
                color: c.fg,
                textDecoration: "none",
                padding: "15px 22px",
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
