import { Inter, Oswald } from "next/font/google";

const heading = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const c = {
    bg: "#0f1318",
    fg: "#f5f3ef",
    primary: "#f5a503",
    muted: "#828a94",
    border: "#272e38",
  };

  const wrap = {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "0 20px",
  };

  return (
    <main
      className={body.className}
      style={{
        background: c.bg,
        color: c.fg,
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          ...wrap,
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: c.primary,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#000",
            }}
          >
            S
          </div>
          <div className={heading.className} style={{ fontSize: 22 }}>
            ServiceLock
          </div>
        </div>

        <a
          href="#pricing"
          style={{
            border: `1px solid ${c.border}`,
            padding: "10px 14px",
            borderRadius: 10,
            textDecoration: "none",
            color: c.fg,
            fontWeight: 600,
          }}
        >
          Pricing
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          ...wrap,
          textAlign: "center",
          padding: "80px 0 60px",
        }}
      >
        <h1
          className={heading.className}
          style={{
            fontSize: "clamp(42px, 6vw, 64px)",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Turn Missed Calls
          <br />
          Into Booked Jobs
        </h1>

        <p
          style={{
            fontSize: 20,
            color: c.muted,
            marginBottom: 24,
          }}
        >
          They call. You’re busy. They call someone else.
        </p>

        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          We stop that.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <a
            href="tel:9142668127"
            style={{
              background: c.primary,
              color: "#000",
              padding: "14px 20px",
              borderRadius: 12,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Call Demo
          </a>

          <a
            href="#pricing"
            style={{
              border: `1px solid ${c.border}`,
              padding: "14px 20px",
              borderRadius: 12,
              fontWeight: 600,
              textDecoration: "none",
              color: c.fg,
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ ...wrap, textAlign: "center", paddingBottom: 60 }}>
        <h2 className={heading.className} style={{ fontSize: 32 }}>
          You’re already paying for the phone to ring
        </h2>

        <p style={{ color: c.muted, marginTop: 10 }}>
          Ads. Trucks. Labor. Time.
        </p>

        <p style={{ marginTop: 16, fontWeight: 700 }}>
          Missed calls = lost revenue
        </p>
      </section>

      {/* HOW */}
      <section style={{ ...wrap, textAlign: "center", paddingBottom: 60 }}>
        <h2 className={heading.className} style={{ fontSize: 32 }}>
          How it works
        </h2>

        <div style={{ marginTop: 20, lineHeight: 2 }}>
          <div>We text them immediately</div>
          <div>We qualify the job</div>
          <div>We send you the lead</div>
        </div>

        <p style={{ marginTop: 20, fontWeight: 700 }}>
          You call back. You close it.
        </p>
      </section>

      {/* ROI */}
      <section style={{ ...wrap, textAlign: "center", paddingBottom: 60 }}>
        <h2 className={heading.className} style={{ fontSize: 32 }}>
          One job can cover the cost
        </h2>

        <p style={{ marginTop: 10, color: c.muted }}>
          Everything after that is profit
        </p>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{
          ...wrap,
          textAlign: "center",
          paddingBottom: 100,
        }}
      >
        <h2 className={heading.className} style={{ fontSize: 32 }}>
          Pricing
        </h2>

        <div
          className={heading.className}
          style={{
            fontSize: 48,
            marginTop: 10,
          }}
        >
          $497/month
        </div>

        <p style={{ color: c.muted, marginTop: 10 }}>
          No setup fee. No contract.
        </p>

        <a
          href="tel:9142668127"
          style={{
            display: "inline-block",
            marginTop: 24,
            background: c.primary,
            color: "#000",
            padding: "14px 20px",
            borderRadius: 12,
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Call the Demo
        </a>
      </section>
    </main>
  );
}
