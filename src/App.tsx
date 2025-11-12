// src/App.tsx
import { useState } from "react";
import { LECTURES, Lecture, Section } from "./data";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function SectionView({ s }: { s: Section }) {
  if (s.kind === "video") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>{s.title}</div>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={s.url}
            title={s.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: 12
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Card>
    );
  }

  if (s.kind === "text") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>{s.title}</div>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            margin: 0,
            fontFamily: "inherit",
            lineHeight: 1.6
          }}
        >
          {s.body}
        </pre>
      </Card>
    );
  }

  if (s.kind === "vocab") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>{s.title}</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {s.terms.map((t, i) => (
            <li key={i} style={{ margin: "4px 0" }}>
              <strong>{t.de}</strong>
              {t.tag && (
                <span className="badge" style={{ marginLeft: 8 }}>
                  {t.tag}
                </span>
              )}
              {" — "}
              {t.ru}
            </li>
          ))}
        </ul>
      </Card>
    );
  }

  if (s.kind === "summary") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>{s.title}</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {s.items.map((x, i) => (
            <li key={i} style={{ margin: "4px 0" }}>
              {x}
            </li>
          ))}
        </ul>
      </Card>
    );
  }

  return null;
}

export default function App() {
  const [current, setCurrent] = useState<Lecture>(LECTURES[0]);

  return (
    <div className="container">
      <h1 className="h1">FSP Med-Deutsch – Kurs</h1>

      {/* Шапка с лекциями 0–4 */}
      <div className="tabs" role="tablist" aria-label="Lektionen">
        {LECTURES.map(l => (
          <button
            key={l.id}
            className="tab"
            aria-selected={current.id === l.id}
            onClick={() => setCurrent(l)}
          >
            Lektion {l.nr}
          </button>
        ))}
      </div>

      {/* Краткое описание выбранной лекции */}
      {current.summary && (
        <div className="badge" style={{ marginBottom: 12 }}>
          {current.title}: {current.summary}
        </div>
      )}

      {/* Секции выбранной лекции */}
      {current.sections.map((s, i) => (
        <SectionView key={i} s={s} />
      ))}
    </div>
  );
}
