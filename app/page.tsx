export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "80px 24px"
    }}>
      
      <section style={{ maxWidth: 600, textAlign: "center" }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          Turn Missed Calls Into Booked Jobs
        </h1>

        <p style={{ color: "#aaa", marginBottom: 30 }}>
          When you miss a call, they call the next company. 
          We text them instantly and turn that missed call into a job.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{
            background: "#fff",
            color: "#000",
            padding: "12px 20px",
            borderRadius: 10,
            border: "none"
          }}>
            Try Demo
          </button>

          <button style={{
            border: "1px solid #555",
            padding: "12px 20px",
            borderRadius: 10,
            background: "transparent",
            color: "#fff"
          }}>
            Book Setup Call
          </button>
        </div>
      </section>

    </main>
  );
}
