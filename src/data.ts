// src/data.ts
export type Term = { de: string; ru: string; tag?: string };
export type Section =
  | { kind: "video"; title: string; url: string }
  | { kind: "phrases"; title: string; items: string[] }
  | { kind: "vocab"; title: string; terms: Term[] }
  | { kind: "writing"; title: string; prompt: string }
  | { kind: "summary"; title: string; items: string[] };

export type Lecture = {
  id: string;
  title: string;
  summary?: string;
  sections: Section[];
};

export const LECTURES: Lecture[] = [
  {
    id: "lektion-1",
    title: "Lektion 1 — Einführung & Bauchschmerzen",
    summary:
      "Kurz über FSP, Begrüßung/Auftreten, Anamnese bei Bauchschmerzen, kurzer Arzt–Arzt-Bericht, schriftliche Aufgabe.",
    sections: [
      // 1) Видео-вступление (замени URL на своё YouTube)
      {
        kind: "video",
        title: "Einführung: Was ist die FSP? Ablauf & Tipps",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      // 2) Arzt–Patient: Begrüßung/Auftreten
      {
        kind: "phrases",
        title: "Arzt–Patient: Begrüßung & Auftreten",
        items: [
          "Guten Tag, ich bin Dr. …, Assistenzarzt in der Chirurgie. Wie darf ich Sie ansprechen?",
          "Ich schaue mir erst Ihre Unterlagen an, dann sprechen wir über Ihre Beschwerden.",
          "Ich versuche, einfach und verständlich zu erklären. Sagen Sie bitte Bescheid, falls etwas unklar ist.",
        ]
      },
      // 3) Arzt–Patient: Anamnese — Bauchschmerzen
      {
        kind: "phrases",
        title: "Arzt–Patient: Anamnese — Bauchschmerzen",
        items: [
          "Seit wann bestehen die Bauchschmerzen? Sind sie plötzlich oder allmählich aufgetreten?",
          "Wo genau tut es weh? (bitte zeigen) Strahlen die Schmerzen aus (z. B. rechte Schulter)?",
          "Wie stark sind die Schmerzen von 0 bis 10?",
          "Charakter: stechend, drückend, kolikartig, brennend?",
          "Begleitend: Übelkeit, Erbrechen, Fieber, Stuhlveränderungen, Wasserlassen?",
          "Schlechter/Besser: beim Essen, in Ruhe, nach Analgetika?",
          "Vorerkrankungen/OPs, Medikamente (inkl. ASS/NSAR), Allergien?"
        ]
      },
      // 4) Мини-лексика по теме
      {
        kind: "vocab",
        title: "Fachbegriffe — Abdomen & Galle",
        terms: [
          { de: "Der Magen", ru: "желудок", tag: "Abdomen" },
          { de: "Die Leber", ru: "печень", tag: "Abdomen" },
          { de: "Die Gallenblase", ru: "желчный пузырь", tag: "Abdomen" },
          { de: "Der Dickdarm", ru: "толстый кишечник", tag: "Abdomen" },
          { de: "Der Dünndarm", ru: "тонкий кишечник", tag: "Abdomen" },
          { de: "Ulcus ventriculi", ru: "язва желудка", tag: "Gastro" },
          { de: "Ulcus duodeni", ru: "язва ДПК", tag: "Gastro" },
          { de: "Schmerzskala (VAS)", ru: "шкала боли (ВАШ)", tag: "Allg." },
          { de: "Ausstrahlung", ru: "иррадиация", tag: "Allg." },
        ]
      },
      // 5) Arzt–Arzt: Kurzbericht
      {
        kind: "phrases",
        title: "Arzt–Arzt: Kurzvorstellung",
        items: [
          "Pat. (m/35) mit seit 2 Tagen kolikartigen Oberbauchschmerzen, VAS 7, zeitweise Ausstrahlung in die rechte Schulter.",
          "DD: Cholezystolithiasis/-itis, Ulkus, Pankreatitis. Labor & Sonographie veranlasst.",
          "Therapie: Analgesie i.v., Nüchternheit, Flüssigkeit, engmaschige Kontrolle."
        ]
      },
      // 6) Письменная часть (Arztbrief/Anamnese)
      {
        kind: "writing",
        title: "Schriftliche Aufgabe",
        prompt:
          "Formulieren Sie einen kurzen Anamnesetext (8–10 Sätze) oder eine strukturierte Arzt-zu-Arzt-Notiz zum Bauchschmerzfall: Beginn, Lokalisation, Charakter, Ausstrahlung, Intensität, Begleitsymptome, Vorerkrankungen, Medikation, Verdachtsdiagnosen, geplantes Vorgehen."
      },
      // 7) Резюме
      {
        kind: "summary",
        title: "Take-home",
        items: [
          "Empathische, klare Begrüßung + verständliche Sprache.",
          "Bei Bauchschmerz immer Lokalisation, Charakter, Intensität, Ausstrahlung, Begleitsymptome.",
          "Kurz, fachlich und strukturiert berichten (DD, Diagnostik, Maßnahmen)."
        ]
      }
    ]
  }
];

