export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial", background: "#0b0f19", minHeight: "100vh", color: "white" }}>
      
      <header style={{ marginBottom: 24 }}>
       <h1 style={{ fontSize: 40 }}>🎳 4 the 10 Pin</h1>
        <p style={{ opacity: 0.7 }}>
          League Dashboard • Matchups • Scores • Standings
        </p>
      </header>

      {/* Quick Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
        <div style={cardStyle}>
          <h3>League Matches</h3>
          <p>Track weekly 3-game series</p>
        </div>

        <div style={cardStyle}>
          <h3>Handicap System</h3>
          <p>100% of 200 pins</p>
        </div>

        <div style={cardStyle}>
          <h3>Standings</h3>
          <p>Last 36 league games avg</p>
        </div>
      </section>

      {/* Main Actions */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        
        <div style={cardStyle}>
          <h2>🎯 Enter Scores</h2>
          <p>Record league match results (3-game series)</p>
          <button style={buttonStyle}>Open Score Entry</button>
        </div>

        <div style={cardStyle}>
          <h2>📊 Standings</h2>
          <p>View rankings and averages</p>
          <button style={buttonStyle}>View Standings</button>
        </div>

        <div style={cardStyle}>
          <h2>🔀 Matchups</h2>
          <p>Random weekly pairings</p>
          <button style={buttonStyle}>Generate Matchups</button>
        </div>

        <div style={cardStyle}>
          <h2>🏆 Tournament</h2>
          <p>Qualifying + bracket system</p>
          <button style={buttonStyle}>View Tournament</button>
        </div>

      </section>

    </main>
  );
}

const cardStyle = {
  background: "#111827",
  padding: 16,
  borderRadius: 12,
  border: "1px solid #1f2937"
};

const buttonStyle = {
  marginTop: 10,
  padding: "8px 12px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer"
};