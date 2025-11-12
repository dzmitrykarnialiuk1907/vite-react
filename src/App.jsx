// src/App.jsx
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const terms = [
    { de: "Der Magen", ru: "желудок" },
    { de: "Die Leber", ru: "печень" },
    { de: "Der Dickdarm", ru: "толстый кишечник" },
    { de: "Der Dünndarm", ru: "тонкий кишечник" },
    { de: "Der Ulcus", ru: "язва" },
    { de: "Die Gallenblase", ru: "желчный пузырь" },
    { de: "Die Milz", ru: "селезёнка" },
  ];

  const filtered = terms.filter(t =>
    t.de.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>Fachbegriffe Medizin 🇩🇪</h1>
      <input
        type="text"
        placeholder="Begriff suchen..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 20,
        }}
      />
      {filtered.map((t, i) => (
        <div
          key={i}
          style={{
            background: "#f8f8f8",
            borderRadius: 10,
            padding: 12,
            marginBottom: 8,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <strong>{t.de}</strong> — {t.ru}
        </div>
      ))}
    </div>
  );
}

export default App;
