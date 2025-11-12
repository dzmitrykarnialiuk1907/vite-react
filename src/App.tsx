import { useMemo, useState } from "react";

type Term = { de: string; ru: string; note?: string; tag?: string };

const VOCAB: Term[] = [
  { de: "Der Magen", ru: "желудок", tag: "Abdomen" },
  { de: "Die Leber", ru: "печень", tag: "Abdomen" },
  { de: "Die Gallenblase", ru: "желчный пузырь", tag: "Abdomen" },
  { de: "Der Dickdarm", ru: "толстый кишечник", tag: "Abdomen" },
  { de: "Der Dünndarm", ru: "тонкий кишечник", tag: "Abdomen" },
  { de: "Ulcus ventriculi", ru: "язва желудка", tag: "Gastro" },
  { de: "Ulcus duodeni", ru: "язва ДПК", tag: "Gastro" },
  { de: "Schlaganfall", ru: "инсульт (общ.)", tag: "Neuro" },
  { de: "ischämischer Insult", ru: "ишемический инсульт", tag: "Neuro" },
  { de: "intrazerebrale Blutung", ru: "внутримозговое кровоизлияние", tag: "Neuro" },
];

const AP_PHRASES = [
  "Seit wann bestehen die Beschwerden?",
  "Wie stark sind die Schmerzen auf einer Skala von 0 bis 10?",
  "Strahlen die Schmerzen aus (z. B. in die rechte Schulter)?",
  "Haben Sie Fieber, Übelkeit, Erbrechen?",
  "Nehmen Sie Medikamente? Bestehen Allergien?"
];

const AA_PHRASES = [
  "Patient*in mit Oberbauchschmerz, VAS 6–7, seit 2 Tagen.",
  "DD: Cholezystitis, Ulkus, Pankreatitis. Labor und Sonographie veranlasst.",
  "Analgesie iv., Nüchternheit, Flüssigkeit, engmaschige Kontrolle.",
  "Bei Befundkonstellation: Chirurgiekonsil / Aufnahme."
];

const GRAMMAR = [
  { de: "warten auf (+Akk.)", ru: "ждать чего-то" },
  { de: "abwarten (ohne Präp.)", ru: "выжидать, дождаться результатов" },
  { de: "erwarten (+Akk.)", ru: "ожидать/предполагать (когнитивно)" },
  { de: "aufklären über (+Akk.)", ru: "разъяснять (информированное согласие)" },
  { de: "abklären", ru: "выяснить диагностически (доопределить)" },
];

export default function App() {
  const [tab, setTab] = useState<"V"|"AP"|"AA"|"G">("V");
  const [q, setQ] = useState("");
  const [showRu, setShowRu] = useState(true);

  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return VOCAB.filter(t => (t.de + " " + t.ru + " " + (t.tag||"")).toLowerCase().includes(s));
  }, [q]);

  return (
    <div className="container">
      <h1 className="h1">Fachbegriffe Medizin 🇩🇪</h1>

      <div className="tabs" role="tablist" aria-label="Навигация">
        <button className="tab" aria-selected={tab==="V"} onClick={()=>setTab("V")}>Fachbegriffe</button>
        <button className="tab" aria-selected={tab==="AP"} onClick={()=>setTab("AP")}>Arzt–Patient</button>
        <button className="tab" aria-selected={tab==="AA"} onClick={()=>setTab("AA")}>Arzt–Arzt</button>
        <button className="tab" aria-selected={tab==="G"} onClick={()=>setTab("G")}>Grammatik</button>
      </div>

      {tab==="V" && (
        <>
          <div className="row" style={{marginBottom:12}}>
            <input className="input" placeholder="Begriff suchen…" value={q} onChange={e=>setQ(e.target.value)} />
            <label className="row" style={{gap:8}}>
              <input type="checkbox" className="toggle" checked={showRu} onChange={e=>setShowRu(e.target.checked)} />
              <span className="badge">{showRu ? "RU an" : "RU aus"}</span>
            </label>
          </div>

          {filtered.map((t, i)=>(
            <div className="card" key={i}>
              <div className="row">
                <div>
                  <strong>{t.de}</strong>{t.tag ? <span className="badge" style={{marginLeft:8}}>{t.tag}</span> : null}
                  {showRu && <div style={{color:"var(--muted)"}}>— {t.ru}</div>}
                  {t.note && <div className="badge" style={{marginTop:6}}>{t.note}</div>}
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {tab==="AP" && (
        <div>
          <div className="badge" style={{marginBottom:10}}>Basisfragen in der Anamnese</div>
          {AP_PHRASES.map((s,i)=>(<div className="card" key={i}>{s}</div>))}
        </div>
      )}

      {tab==="AA" && (
        <div>
          <div className="badge" style={{marginBottom:10}}>Kurz und fachlich</div>
          {AA_PHRASES.map((s,i)=>(<div className="card" key={i}>{s}</div>))}
        </div>
      )}

      {tab==="G" && (
        <div>
          <div className="badge" style={{marginBottom:10}}>Typische Verben/Unterschiede</div>
          {GRAMMAR.map((g,i)=>(<div className="card" key={i}><strong>{g.de}</strong> — {g.ru}</div>))}
        </div>
      )}
    </div>
  );
}
