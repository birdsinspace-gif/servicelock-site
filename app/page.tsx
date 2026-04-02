export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "88px 24px 72px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 999,
            color: "#d4d4d4",
            fontSize: 14,
            marginBottom: 24,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          AI missed-call recovery for service businesses
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 78px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: "0 0 22px",
            maxWidth: 900,
          }}
        >
          Turn missed calls into booked jobs, automatically.
        </h1>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            color: "#b0b0b0",
            maxWidth: 760,
            margin: "0 0 34px",
          }}
        >
          When your team is on a job, after hours, or too busy to answer, ServiceLock
          texts the caller instantly, qualifies the lead, and sends you a clean
          ready-to-book job before they call the next company.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 26,
          }}
        >
          <a
            href="#demo"
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Try the Demo
          </a>
          <a
            href="#pricing"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#ffffff",
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            See Pricing
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            color: "#8f8f8f",
            fontSize: 15,
          }}
        >
          <span>Missed calls answered in seconds</span>
          <span>Qualified lead capture</span>
          <span>No setup fee</span>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {[
            ["Why this matters", "They do not leave voicemails. They call the next company."],
            ["What it does", "Instant response, lead qualification, and clean handoff."],
            ["Who it is for", "Roofers, HVAC, plumbing, electrical, and other service businesses."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 22,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ color: "#afafaf", lineHeight: 1.65 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "44px 24px",
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 26 }}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            How ServiceLock works
          </h2>
          <p style={{ color: "#acacac", fontSize: 18, lineHeight: 1.6, margin: 0 }}>
            Simple, fast, and built for busy operators who cannot answer every call.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            [
              "1. Caller reaches out",
              "A prospect calls when your team is busy, on-site, or after hours.",
            ],
            [
              "2. ServiceLock responds",
              "We text back immediately, keep the lead warm, and ask the right questions.",
            ],
            [
              "3. You get the job",
              "You receive a clean lead summary so you can call back fast and close it.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 22,
                padding: 26,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: "#ffffff",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  marginBottom: 16,
                }}
              >
                {title.charAt(0)}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ color: "#afafaf", lineHeight: 1.65 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "44px 24px",
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 26 }}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            What you get
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
            "Instant text response to missed callers",
            "Lead qualification and job details captured",
            "Fast handoff to you by text or email",
            "More revenue from calls you would have lost",
            "Simple setup, no complicated software rollout",
            "A cleaner customer experience from first contact",
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 22,
                color: "#d7d7d7",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "44px 24px 90px",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            padding: 32,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
          }}
        >
          <div style={{ maxWidth: 740, marginBottom: 24 }}>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              Simple pricing
            </h2>
            <p style={{ color: "#adadad", fontSize: 18, lineHeight: 1.6, margin: 0 }}>
              One clear offer. No setup fee. No bloated plans.
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
              <div style={{ color: "#909090", marginBottom: 8 }}>Monthly price</div>
              <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.04em" }}>
                $349<span style={{ fontSize: 22, color: "#a9a9a9" }}>/month</span>
              </div>
              <div style={{ color: "#b0b0b0", marginTop: 10 }}>
                Cancel anytime. Built to pay for itself quickly.
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="#demo"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  padding: "14px 22px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Start Now
              </a>
              <a
                href="tel:9142668127"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Call the Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
