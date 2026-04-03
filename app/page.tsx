export default function HomePage() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#0B1020",
      color: "#FFFFFF",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      margin: 0,
    } as const,
    container: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "0 24px",
    } as const,
    section: {
      padding: "96px 0",
      borderBottom: "1px solid rgba(255,255,255,0.10)",
    } as const,
    topBar: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "48px",
    } as const,
    logoBox: {
      width: "42px",
      height: "42px",
      borderRadius: "12px",
      backgroundColor: "#F59E0B",
      color: "#0B1020",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "18px",
      flexShrink: 0,
    } as const,
    brandName: {
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
    } as const,
    brandSub: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.60)",
      margin: "4px 0 0 0",
    } as const,
    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "56px",
      alignItems: "center",
    } as const,
    badge: {
      display: "inline-block",
      padding: "10px 16px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.10)",
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.78)",
      fontSize: "14px",
      marginBottom: "24px",
    } as const,
    h1: {
      fontSize: "64px",
      lineHeight: 1.02,
      letterSpacing: "-0.04em",
      fontWeight: 800,
      margin: 0,
      maxWidth: "780px",
    } as const,
    highlight: {
      display: "block",
      color: "#F59E0B",
    } as const,
    heroLines: {
      marginTop: "32px",
      fontSize: "28px",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.84)",
    } as const,
    heroLine: {
      margin: "0 0 6px 0",
    } as const,
    heroLineStrong: {
      margin: "0",
      fontWeight: 700,
      color: "#FFFFFF",
    } as const,
    body: {
      marginTop: "32px",
      maxWidth: "720px",
      fontSize: "21px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.72)",
    } as const,
    ctaRow: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      marginTop: "36px",
    } as const,
    primaryBtn: {
      display: "inline-block",
      padding: "16px 24px",
      borderRadius: "16px",
      backgroundColor: "#F59E0B",
      color: "#0B1020",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "16px",
    } as const,
    secondaryBtn: {
      display: "inline-block",
      padding: "16px 24px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.14)",
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "16px",
    } as const,
    card: {
      border: "1px solid rgba(255,255,255,0.10)",
      backgroundColor: "rgba(255,255,255,0.04)",
      borderRadius: "28px",
      padding: "32px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
    } as const,
    cardEyebrow: {
      fontSize: "12px",
      textTransform: "uppercase" as const,
      letterSpacing: "0.20em",
      color: "#F59E0B",
      margin: 0,
    } as const,
    cardTitle: {
      fontSize: "32px",
      lineHeight: 1.15,
      fontWeight: 700,
      margin: "14px 0 0 0",
    } as const,
    bulletWrap: {
      marginTop: "28px",
      display: "grid",
      gap: "14px",
    } as const,
    bullet: {
      border: "1px solid rgba(255,255,255,0.10)",
      backgroundColor: "rgba(0,0,0,0.18)",
      borderRadius: "18px",
      padding: "16px 18px",
      color: "rgba(255,255,255,0.76)",
      lineHeight: 1.6,
      fontSize: "16px",
    } as const,
    priceBox: {
      marginTop: "28px",
      border: "1px solid rgba(245,158,11,0.24)",
      backgroundColor: "rgba(245,158,11,0.10)",
      borderRadius: "18px",
      padding: "20px",
    } as const,
    priceSmall: {
      fontSize: "12px",
      textTransform: "uppercase" as const,
      letterSpacing: "0.20em",
      color: "#F59E0B",
      margin: 0,
    } as const,
    priceBig: {
      fontSize: "40px",
      fontWeight: 800,
      margin: "10px 0 0 0",
    } as const,
    priceCopy: {
      fontSize: "16px",
      color: "rgba(255,255,255,0.72)",
      margin: "10px 0 0 0",
      lineHeight: 1.6,
    } as const,
    sectionEyebrow: {
      fontSize: "12px",
      textTransform: "uppercase" as const,
      letterSpacing: "0.20em",
      color: "#F59E0B",
      margin: 0,
      fontWeight: 700,
    } as const,
    sectionTitle: {
      fontSize: "50px",
      lineHeight: 1.08,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      margin: "18px 0 0 0",
      maxWidth: "860px",
    } as const,
    sectionText: {
      fontSize: "20px",
      lineHeight: 1.75,
      color: "rgba(255,255,255,0.72)",
      margin: "24px 0 0 0",
      maxWidth: "760px",
    } as const,
    threeGrid: {
      marginTop: "56px",
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "22px",
    } as const,
    tile: {
      border: "1px solid rgba(255,255,255,0.10)",
      backgroundColor: "rgba(255,255,255,0.04)",
      borderRadius: "28px",
      padding: "32px",
    } as const,
    tileSmall: {
      fontSize: "12px",
      textTransform: "uppercase" as const,
      letterSpacing: "0.20em",
      color: "rgba(255,255,255,0.48)",
      margin: 0,
      fontWeight: 700,
    } as const,
    tileBig: {
      fontSize: "54px",
      lineHeight: 1,
      fontWeight: 800,
      margin: "28px 0 0 0",
      letterSpacing: "-0.04em",
    } as const,
    tileLabel: {
      margin: "18px 0 0 0",
      color: "rgba(255,255,255,0.68)",
      fontSize: "17px",
      lineHeight: 1.6,
    } as const,
    statementBox: {
      marginTop: "32px",
      border: "1px solid rgba(245,158,11,0.24)",
      backgroundColor: "rgba(245,158,11,0.10)",
      borderRadius: "28px",
      padding: "28px",
    } as const,
    statementText: {
      margin: 0,
      fontSize: "30px",
      lineHeight: 1.35,
      fontWeight: 700,
    } as const,
    stepNum: {
      fontSize: "13px",
      fontWeight: 700,
      color: "rgba(255,255,255,0.45)",
      letterSpacing: "0.20em",
      margin: 0,
    } as const,
    stepTitle: {
      margin: "24px 0 0 0",
      fontSize: "30px",
      lineHeight: 1.2,
      fontWeight: 700,
    } as const,
    stepText: {
      margin: "16px 0 0 0",
      color: "rgba(255,255,255,0.70)",
      fontSize: "18px",
      lineHeight: 1.75,
    } as const,
    pricingBox: {
      border: "1px solid rgba(245,158,11,0.22)",
      background:
        "linear-gradient(180deg, rgba(245,158,11,0.10) 0%, rgba(255,255,255,0.03) 100%)",
      borderRadius: "34px",
      padding: "56px 36px",
      textAlign: "center" as const,
    } as const,
    chips: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap" as const,
    } as const,
    chip: {
      padding: "10px 16px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.10)",
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.78)",
      fontSize: "14px",
    } as const,
    profitLines: {
      marginTop: "32px",
      display: "grid",
      gap: "10px",
      fontSize: "22px",
      color: "rgba(255,255,255,0.88)",
      lineHeight: 1.5,
    } as const,
    closeWrap: {
      textAlign: "center" as const,
      maxWidth: "860px",
      margin: "0 auto",
    } as const,
    closeText: {
      margin: "24px auto 0 auto",
      maxWidth: "760px",
      fontSize: "21px",
      lineHeight: 1.75,
      color: "rgba(255,255,255,0.72)",
    } as const,
  };

  return (
    <main style={styles.page}>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.topBar}>
            <div style={styles.logoBox}>S</div>
            <div>
              <p style={styles.brandName}>ServiceLock</p>
              <p style={styles.brandSub}>Missed call recovery for service businesses</p>
            </div>
          </div>

          <div style={styles.heroGrid}>
            <div>
              <div style={styles.badge}>Built for busy service teams</div>

              <h1 style={styles.h1}>
                Turn Missed Calls Into
                <span style={styles.highlight}>Thousands in Recovered Jobs</span>
              </h1>

              <div style={styles.heroLines}>
                <p style={styles.heroLine}>They call once.</p>
                <p style={styles.heroLine}>You&apos;re busy.</p>
                <p style={styles.heroLine}>They call the next company.</p>
                <p style={styles.heroLineStrong}>That job is gone.</p>
              </div>

              <p style={styles.body}>
                ServiceLock recovers those jobs automatically. We text them instantly,
                qualify the lead, and send you a ready-to-book opportunity before your
                competitor gets it.
              </p>

              <div style={styles.ctaRow}>
                <a href="tel:9142668127" style={styles.primaryBtn}>
                  Call the Live Demo: (914) 266-8127
                </a>
                <a href="#pricing" style={styles.secondaryBtn}>
                  Pricing
                </a>
              </div>
            </div>

            <div style={styles.card}>
              <p style={styles.cardEyebrow}>Why this works</p>
              <h2 style={styles.cardTitle}>
                The first company to respond usually wins
              </h2>

              <div style={styles.bulletWrap}>
                <div style={styles.bullet}>Missed callers rarely leave voicemails.</div>
                <div style={styles.bullet}>
                  Emergency and quote calls move to the next company fast.
                </div>
                <div style={styles.bullet}>
                  Speed wins, especially after hours and on busy days.
                </div>
                <div style={styles.bullet}>
                  One recovered job can easily pay for the service.
                </div>
              </div>

              <div style={styles.priceBox}>
                <p style={styles.priceSmall}>Simple offer</p>
                <p style={styles.priceBig}>$497/month</p>
                <p style={styles.priceCopy}>
                  No setup fee. No contract. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrow}>ROI</p>
          <h2 style={styles.sectionTitle}>
            You&apos;re Losing Real Money Every Time You Miss a Call
          </h2>
          <p style={styles.sectionText}>
            Miss just a few calls per week and you&apos;re losing thousands every month.
          </p>

          <div style={styles.threeGrid}>
            <div style={styles.tile}>
              <p style={styles.tileSmall}>Missed value</p>
              <p style={styles.tileBig}>$500</p>
              <p style={styles.tileLabel}>Small repair or service call</p>
            </div>

            <div style={styles.tile}>
              <p style={styles.tileSmall}>Missed value</p>
              <p style={styles.tileBig}>$1,500</p>
              <p style={styles.tileLabel}>Mid-sized job or urgent issue</p>
            </div>

            <div style={styles.tile}>
              <p style={styles.tileSmall}>Missed value</p>
              <p style={styles.tileBig}>$5,000+</p>
              <p style={styles.tileLabel}>High-value project or replacement</p>
            </div>
          </div>

          <div style={styles.statementBox}>
            <p style={styles.statementText}>
              Right now, when you miss the call, your competitor gets the chance to win it.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrow}>How it works</p>
          <h2 style={styles.sectionTitle}>ServiceLock Flips That</h2>

          <div style={styles.threeGrid}>
            <div style={styles.tile}>
              <p style={styles.stepNum}>01</p>
              <h3 style={styles.stepTitle}>We Respond Instantly</h3>
              <p style={styles.stepText}>
                The moment you miss the call, we step in and text back while they&apos;re
                still looking.
              </p>
            </div>

            <div style={styles.tile}>
              <p style={styles.stepNum}>02</p>
              <h3 style={styles.stepTitle}>We Capture the Job</h3>
              <p style={styles.stepText}>
                We qualify the lead, gather the important details, and keep them from
                moving on.
              </p>
            </div>

            <div style={styles.tile}>
              <p style={styles.stepNum}>03</p>
              <h3 style={styles.stepTitle}>We Send You the Lead</h3>
              <p style={styles.stepText}>
                You get the lead, call back fast, and close with context instead of
                starting cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={styles.section}>
        <div style={{ ...styles.container, maxWidth: "980px" }}>
          <div style={styles.pricingBox}>
            <p style={styles.sectionEyebrow}>Pricing</p>
            <h2 style={{ ...styles.sectionTitle, margin: "18px auto 0 auto", maxWidth: "none" }}>
              $497 Per Month
            </h2>
            <p style={{ ...styles.sectionText, margin: "20px auto 0 auto", maxWidth: "680px" }}>
              Flat monthly pricing for missed call recovery, lead qualification, and lead
              delivery.
            </p>

            <div style={styles.chips}>
              <span style={styles.chip}>No setup fee</span>
              <span style={styles.chip}>No contract</span>
              <span style={styles.chip}>Cancel anytime</span>
            </div>

            <div style={styles.profitLines}>
              <div>One recovered job can cover the entire cost.</div>
              <div>Two or more recovered jobs = profit.</div>
              <div>Everything after that is upside.</div>
            </div>

            <div style={{ ...styles.ctaRow, justifyContent: "center", marginTop: "34px" }}>
              <a href="tel:9142668127" style={styles.primaryBtn}>
                Call the Live Demo
              </a>
              <a
                href="mailto:hello@getservicelock.com?subject=ServiceLock%20Setup%20Call"
                style={styles.secondaryBtn}
              >
                Book Your 15-Minute Setup Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, borderBottom: "none" }} id="cta">
        <div style={styles.container}>
          <div style={styles.closeWrap}>
            <p style={styles.sectionEyebrow}>Close</p>
            <h2 style={{ ...styles.sectionTitle, margin: "18px auto 0 auto" }}>
              Stop Losing Jobs To Missed Calls
            </h2>
            <p style={styles.closeText}>
              Call the demo or book your 15-minute setup call and see how ServiceLock
              helps you recover more of the calls you&apos;re already paying for.
            </p>

            <div style={{ ...styles.ctaRow, justifyContent: "center", marginTop: "36px" }}>
              <a href="tel:9142668127" style={styles.primaryBtn}>
                Call the Live Demo: (914) 266-8127
              </a>
              <a
                href="mailto:hello@getservicelock.com?subject=ServiceLock%20Setup%20Call"
                style={styles.secondaryBtn}
              >
                Book Your 15-Minute Setup Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
