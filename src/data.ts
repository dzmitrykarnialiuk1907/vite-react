// src/data.ts

export type Term = { de: string; ru: string; tag?: string };

export type Section =
  | { kind: "video"; title: string; url: string }
  | { kind: "text"; title: string; body: string }
  | { kind: "vocab"; title: string; terms: Term[] }
  | { kind: "summary"; title: string; items: string[] };

export type Lecture = {
  id: string;
  nr: number;
  title: string;
  summary?: string;
  sections: Section[];
};

// ЛЕКЦИЯ 0 — VORSTELLUNG
export const LECTURES: Lecture[] = [
  {
    id: "lektion-0",
    nr: 0,
    title: "Lektion 0 – Vorstellung",
    summary:
      "Vorstellung, wer ich bin, mein Weg zur FSP und ein erster Wortschatzblock.",
    sections: [
      {
        kind: "video",
        title: "Vorstellung – Wer bin ich?",
        url: "https://www.youtube.com/embed/1iilwEcwvxM"
      },
      {
        kind: "text",
        title: "Einführung",
        body: [
          "Liebe Teilnehmerinnen und Teilnehmer,",
          "",
          "mein Name ist Dzmitry Karnialiuk. Ich komme aus Belarus (Weißrussland) und arbeite seit 2022 als Arzt in Deutschland. Seit 2024 besitze ich die deutsche Approbation.",
          "",
          "Die Fachsprachprüfung (FSP) habe ich im Jahr 2023 erfolgreich und ohne große Schwierigkeiten bestanden. Im Vergleich zu anderen Prüfungen fiel sie mir überraschend leicht – vor allem, weil ich mich sehr strukturiert und intensiv vorbereitet habe.",
          "",
          "Genau diese Erfahrung, meine Strategien und praktische Tipps möchte ich jetzt mit Ihnen teilen.",
          "",
          "Ich weiß sehr gut, wie anstrengend und belastend diese Prüfung für viele ist. Meine Erinnerungen sind noch frisch, und ich kann mir gut vorstellen, in welcher Situation Sie sich gerade befinden.",
          "",
          "Mein Ziel ist, dass Sie sich nach diesem Kurs sicher fühlen und am Ende mit einem Lächeln die Worte hören:",
          "„Sie haben bestanden!“",
          "",
          "Ich wünsche Ihnen viel Freude beim Lernen und ganz viel Erfolg!",
          "",
          "Ihr Dzmitry Karnialiuk"
        ].join("\n")
      },
      {
        kind: "vocab",
        title: "Wortschatz der Lektion 0",
        terms: [
          { de: "anstrengend", ru: "напряжённый, утомительный" },
          { de: "angemessen", ru: "уместный, подходящий" },
          { de: "bundesweit", ru: "по всей стране" },
          { de: "anwenden", ru: "применять практически" },
          { de: "benutzen", ru: "использовать (в широком смысле)" },
          {
            de: "anerkennen lassen",
            ru: "признать (например, диплом), как правило в форме „sich etwas anerkennen lassen“"
          },
          {
            de: "Ausweichung",
            ru: "отслоение от темы, уход в сторону в разговоре"
          },
          { de: "erklären", ru: "объяснять, разъяснять" },
          { de: "sich Mühe geben", ru: "стараться, прилагать усилия" },
          {
            de: "loslegen / auf geht's / los geht's",
            ru: "«поехали», «погнали», начать активно"
          },
          {
            de: "der Supervisor",
            ru: "супервизор, наблюдатель, наставник"
          },
          { de: "unbedingt", ru: "обязательно, непременно" }
        ]
      },
      {
        kind: "summary",
        title: "Take-home-Botschaften",
        items: [
          "Die FSP ist mit guter, strukturierter Vorbereitung gut machbar.",
          "Klarheit, Struktur und angemessene Sprache sind wichtiger als perfektes Deutsch.",
          "Sie sind mit Ihren Sorgen nicht allein – der Kurs soll Sie Schritt für Schritt begleiten."
        ]
      }
    ]
  },

  // Заглушки для будущих лекций
  {
    id: "lektion-1",
    nr: 1,
    title: "Lektion 1 – Arzt–Patient: Schmerzen (Bauchschmerzen)",
    summary: "In Vorbereitung.",
    sections: [
      {
        kind: "summary",
        title: "In Vorbereitung",
        items: ["Diese Lektion wird bald hinzugefügt."]
      }
    ]
  },
  {
    id: "lektion-2",
    nr: 2,
    title: "Lektion 2 – Arzt–Arzt-Gespräch",
    summary: "In Vorbereitung.",
    sections: [
      {
        kind: "summary",
        title: "In Vorbereitung",
        items: ["Diese Lektion wird bald hinzugefügt."]
      }
    ]
  },
  {
    id: "lektion-3",
    nr: 3,
    title: "Lektion 3 – Schriftlicher Teil",
    summary: "In Vorbereitung.",
    sections: [
      {
        kind: "summary",
        title: "In Vorbereitung",
        items: ["Diese Lektion wird bald hinzugefügt."]
      }
    ]
  },
  {
    id: "lektion-4",
    nr: 4,
    title: "Lektion 4 – Wiederholung & Prüfungssimulation",
    summary: "In Vorbereitung.",
    sections: [
      {
        kind: "summary",
        title: "In Vorbereitung",
        items: ["Diese Lektion wird bald hinzugefügt."]
      }
    ]
  }
];
