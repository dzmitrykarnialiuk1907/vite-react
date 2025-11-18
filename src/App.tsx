// src/App.tsx
import { useState, useEffect } from "react";
import { LECTURES, Lecture, Section, Term } from "./data";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function SectionView({ s }: { s: Section }) {
  // Состояние для тренажёра (будет использоваться только если kind === "trainer")
  const [order, setOrder] = useState<number[]>([]);
  const [position, setPosition] = useState(0);
  const [answerFach, setAnswerFach] = useState("");
  const [answerUmgang, setAnswerUmgang] = useState("");
  const [statusFach, setStatusFach] = useState<"idle" | "ok" | "fail">("idle");
  const [statusUmgang, setStatusUmgang] =
    useState<"idle" | "ok" | "fail">("idle");
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (s.kind !== "trainer") return;
    if (!s.terms.length) return;

    const indices = s.terms.map((_, i) => i);
    // Перемешиваем порядок
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    setOrder(indices);
    setPosition(0);
    setAnswerFach("");
    setAnswerUmgang("");
    setStatusFach("idle");
    setStatusUmgang("idle");
    setShowSolution(false);
  }, [s]);

  const normalize = (str: string) =>
    str.trim().toLowerCase().replace(/\s+/g, " ");

  const borderColor = (status: "idle" | "ok" | "fail") => {
    if (status === "ok") return "2px solid #2e7d32"; // зелёный
    if (status === "fail") return "2px solid #c62828"; // красный
    return "1px solid #ccc";
  };

  const bgColor = (status: "idle" | "ok" | "fail") => {
    if (status === "ok") return "#e8f5e9"; // светло-зелёный
    if (status === "fail") return "#ffebee"; // светло-красный
    return "#fff";
  };

  const handleCheck = () => {
    if (s.kind !== "trainer") return;
    if (!order.length) return;

    const currentIndex = order[position] ?? 0;
    const term = s.terms[currentIndex];

    let stF: "idle" | "ok" | "fail" = "idle";
    let stU: "idle" | "ok" | "fail" = "idle";

    if (term.de) {
      stF =
        normalize(answerFach) === normalize(term.de) ? "ok" : "fail";
    }
    if (term.deUmgang) {
      stU =
        normalize(answerUmgang) === normalize(term.deUmgang)
          ? "ok"
          : "fail";
    }

    setStatusFach(stF);
    setStatusUmgang(stU);
    setShowSolution(true);
  };

  const resetAnswers = () => {
    setAnswerFach("");
    setAnswerUmgang("");
    setStatusFach("idle");
    setStatusUmgang("idle");
    setShowSolution(false);
  };

  const handleNext = () => {
    if (s.kind !== "trainer") return;
    if (!order.length) return;

    setPosition(prev => (prev + 1) % order.length);
    resetAnswers();
  };

  const handlePrev = () => {
    if (s.kind !== "trainer") return;
    if (!order.length) return;

    setPosition(prev =>
      prev === 0 ? order.length - 1 : prev - 1
    );
    resetAnswers();
  };

  const handleSkip = () => {
    if (s.kind !== "trainer") return;
    if (!order.length) return;

    setPosition(prev => {
      if (order.length === 1) return prev;
      let next = Math.floor(Math.random() * order.length);
      if (next === prev) {
        next = (prev + 1) % order.length;
      }
      return next;
    });
    resetAnswers();
  };

  // 🔹 Видео
  if (s.kind === "video") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>
          {s.title}
        </div>
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

  // 🔹 Текстовый блок
  if (s.kind === "text") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>
          {s.title}
        </div>
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

  // 🔹 Словарик
  if (s.kind === "vocab") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>
          {s.title}
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {s.terms.map((t: Term, i: number) => (
            <li key={i} style={{ margin: "4px 0" }}>
              <strong>{t.de}</strong>
              {t.deUmgang && (
                <span style={{ marginLeft: 6 }}>
                  {" ("}
                  {t.deUmgang}
                  {")"}
                </span>
              )}
              {t.system && (
                <span className="badge" style={{ marginLeft: 8 }}>
                  {t.system}
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

  // 🔹 Summary (списки, где мы уже используем HTML, <b>...)
  if (s.kind === "summary") {
    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>
          {s.title}
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {s.items.map((x, i) => (
            <li
              key={i}
              style={{ margin: "4px 0" }}
              dangerouslySetInnerHTML={{ __html: x }}
            />
          ))}
        </ul>
      </Card>
    );
  }

  // 🔹 ТРЕНАЖЁР FACHBEGRIFFE
  if (s.kind === "trainer") {
    if (!s.terms.length || !order.length) {
      return (
        <Card>
          <div className="badge" style={{ marginBottom: 8 }}>
            {s.title}
          </div>
          <p>Keine Begriffe zum Trainieren vorhanden.</p>
        </Card>
      );
    }

    const currentIndex = order[position] ?? 0;
    const term = s.terms[currentIndex];

    return (
      <Card>
        <div className="badge" style={{ marginBottom: 8 }}>
          {s.title}
        </div>

        <div style={{ marginBottom: 8 }}>
          <div style={{ marginBottom: 4 }}>Русский термин:</div>
          <div
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #ddd",
              display: "inline-block",
              background: "#fafafa"
            }}
          >
            {term.ru}
          </div>
        </div>

        {/* Поле для Fachbegriff */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", marginBottom: 4 }}>
            Медицинский термин (Fachbegriff) на немецком:
          </label>
          <input
            value={answerFach}
            onChange={e => setAnswerFach(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleCheck();
              }
            }}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 8,
              border: borderColor(statusFach),
              backgroundColor: bgColor(statusFach),
              fontSize: 16
            }}
          />
        </div>

        {/* Поле для обычного варианта (Umgangssprache), если он есть */}
        {term.deUmgang && (
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: "block", marginBottom: 4 }}>
              Обычный вариант (Umgangssprache) на немецком:
            </label>
            <input
              value={answerUmgang}
              onChange={e => setAnswerUmgang(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleCheck();
                }
              }}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 8,
                border: borderColor(statusUmgang),
                backgroundColor: bgColor(statusUmgang),
                fontSize: 16
              }}
            />
          </div>
        )}

        {/* Фидбэк и решение */}
        {showSolution && (
          <div style={{ marginBottom: 8, fontSize: 14 }}>
            <div>
              Правильный Fachbegriff: <strong>{term.de}</strong>
            </div>
            {term.deUmgang && (
              <div>
                Обычный вариант: <strong>{term.deUmgang}</strong>
              </div>
            )}
          </div>
        )}

        {/* Кнопки управления */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 8
          }}
        >
          <button
            type="button"
            onClick={handleCheck}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #1976d2",
              background: "#1976d2",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Проверить
          </button>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: "#f5f5f5",
              cursor: "pointer"
            }}
          >
            Назад
          </button>
          <button
            type="button"
            onClick={handleNext}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: "#f5f5f5",
              cursor: "pointer"
            }}
          >
            Вперёд
          </button>
          <button
            type="button"
            onClick={handleSkip}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: "#f5f5f5",
              cursor: "pointer"
            }}
          >
            Пропустить (случайный)
          </button>
          <button
            type="button"
            onClick={() => setShowSolution(true)}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px dashed #999",
              background: "#fff",
              cursor: "pointer"
            }}
          >
            Показать ответ
          </button>
        </div>
      </Card>
    );
  }

  return null;
}
type Category = {
  id: string;
  label: string;
  lectureIds: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "ein",
    label: "Einführung",
    lectureIds: ["lektion-0", "lektion-1", "lektion-wegweiser"]
  },
  {
    id: "arzt-patient",
    label: "Arzt–Patienten–Gespräch",
    lectureIds: [] // später füllen wir das
  },
  {
    id: "arzt-arzt",
    label: "Arzt–Arzt-Gespräch",
    lectureIds: ["lektion-2"]
  },
  {
    id: "schriftlich",
    label: "Schriftlicher Teil",
    lectureIds: ["lektion-3"]
  },
  {
    id: "fachbegriffe",
    label: "Fachbegriffe",
    lectureIds: ["lektion-4"]
  }
];

const findLectureById = (id: string): Lecture | undefined =>
  LECTURES.find(l => l.id === id);
export default function App() {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    CATEGORIES[0]
  );

  const [currentLecture, setCurrentLecture] = useState<Lecture | null>(() => {
    const firstId = CATEGORIES[0].lectureIds[0];
    return firstId ? findLectureById(firstId) ?? null : null;
  });

  const lecturesOfCategory: Lecture[] = currentCategory.lectureIds
    .map(id => findLectureById(id))
    .filter((l): l is Lecture => !!l);

  const handleCategoryClick = (cat: Category) => {
    setCurrentCategory(cat);
    const firstId = cat.lectureIds[0];
    const lecture = firstId ? findLectureById(firstId) ?? null : null;
    setCurrentLecture(lecture);
  };

  const handleLectureClick = (lec: Lecture) => {
    setCurrentLecture(lec);
  };

  return (
    <div className="container">
      <h1 className="h1">FSP Med-Deutsch – Kurs</h1>

      {/* ВЕРХНЯЯ СТРОКА: 5 больших разделов */}
      <div className="tabs" role="tablist" aria-label="Hauptsektionen">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className="tab"
            aria-selected={currentCategory.id === cat.id}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* НИЖНЯЯ СТРОКА: подпункты (конкретные лекции в разделе) */}
      {lecturesOfCategory.length > 0 && (
        <div
          className="tabs"
          role="tablist"
          aria-label="Unterthemen"
          style={{ marginTop: 8 }}
        >
          {lecturesOfCategory.map(lec => (
            <button
              key={lec.id}
              className="tab"
              aria-selected={currentLecture?.id === lec.id}
              onClick={() => handleLectureClick(lec)}
            >
              {lec.title}
            </button>
          ))}
        </div>
      )}

      {/* Краткое описание выбранной лекции */}
      {currentLecture?.summary && (
        <div className="badge" style={{ marginTop: 12, marginBottom: 12 }}>
          {currentLecture.summary}
        </div>
      )}

      {/* Секции выбранной лекции */}
      {currentLecture &&
        currentLecture.sections.map((sec, i) => (
          <SectionView key={i} s={sec} />
        ))}
    </div>
  );
}
