// src/App.tsx
import { useMemo, useState } from "react";
import { LECTURES, Lecture, Section, Term } from "./data";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function VocabList({ terms }: { terms: Term[] }) {
  const [q, setQ] = useState("");
  const [showRu, setShowRu] = useState(true);
  const filtered = useMemo(
    () =>
      terms.filter(t =>
        (t.de + " " + t.ru + " " + (t.tag || "")).toLowerCase().includes(q.toLowerCase())
      ),
    [q, terms]
  );
  return (
    <>
      <div className="row" style={{ marginBottom: 12 }}>
        <input className="input" placeholder="Begriff suchen…" value={q} onChange={e => setQ(e.target.value)} />
        <label className="row" style={{ gap: 8 }}>
          <input type="checkbox" className="toggle" checked={showRu} onChange={e => setShowRu(e.target.checked)} />
          <span className="badge">{showRu ? "RU an" : "RU aus"}</span>
        </label>
      </div>
      {filtered.map((t, i) => (
        <Card key={i}>
          <div className="row">
            <div>
              <strong>{t.de}</strong>
              {t.tag && <span className="badge" style={{ marginLeft: 8 }}>{t.tag}</span>}
              {showRu && <div style={{ color: "var(--muted)" }}>— {t.ru}</div>}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

function SectionView({ s }: { s: Section }) {
  if (s.kind === "video") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 10 }}>Video</div>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={s.url}
            title={s.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Card>
    );
  }
  if (s.kind === "phrases") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 10 }}>{s.title}</div>
        {s.items.map((p, i) => <div key={i} style={{ padding: "6px 0" }}>{p}</div>)}
      </Card>
    );
  }
  if (s.kind === "vocab") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 10 }}>{s.title}</div>
        <VocabList terms={s.terms} />
      </Card>
    );
  }
  if (s.kind === "writing") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 10 }}>{s.title}</div>
        <div>{s.prompt}</div>
      </Card>
    );
  }
  if (s.kind === "summary") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 10 }}>{s.title}</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {s.items.map((x, i) => <li key={i} style={{ margin: "6px 0" }}>{x}</li>)}
        </ul>
      </Card>
    );
  }
  return null;
}

export default function App() {
  const [tab, setTab] = useState<"lectures" | "vocab">("lectures");
  const [current, setCurrent] = useState<Lecture | null>(LECTURES[0]);

  // Сводная вкладка «вся лексика» (по желанию)
  const allTerms = useMemo(
    () =>
      LECTURES.flatMap(l =>
        l.sections.flatMap(s => (s.kind === "vocab" ? s.terms : []))
      ),
    []
  );

  return (
    <div className="container">
      <h1 className="h1">FSP-Plattform 🇩🇪</h1>

      <div className="tabs" role="tablist">
        <button className="tab" aria-selected={tab === "lectures"} onClick={() => setTab("lectures")}>
          Lektionen
        </button>
        <button className="tab" aria-selected={tab === "vocab"} onClick={() => setTab("vocab")}>
          Gesamte Vokabeln
        </button>
      </div>

      {tab === "lectures" && (
        <>
          {/* список лекций */}
          <div className="row" style={{ gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            {LECTURES.map(l => (
              <button
                key={l.id}
                className="tab"
                aria-selected={current?.id === l.id}
                onClick={() => setCurrent(l)}
              >
                {l.title}
              </button>
            ))}
          </div>

          {/* текущая лекция */}
          {current && (
            <>
              {current.summary && <div className="badge" style={{ marginBottom: 10 }}>{current.summary}</div>}
              {current.sections.map((s, i) => <SectionView key={i} s={s} />)}
            </>
          )}
        </>
      )}

      {tab === "vocab" && <VocabList terms={allTerms} />}
    </div>
  );
}
