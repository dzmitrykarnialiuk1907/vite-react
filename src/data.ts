// src/data.ts

export type Term = { de: string; ru: string; tag?: string };

export type Section =
  | {
      kind: "video";
      title: string;
      url: string;
    }
  | {
      kind: "text";
      title: string;
      body: string;
    }
  | {
      kind: "vocab";
      title: string;
      terms: Term[];
    }
  | {
      kind: "summary";
      title: string;
      items: string[];
    };

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
      ru: "уход от темы разговора"
    },
    {
      de: "Ablenkung",
      ru: "отвлечение, переключение внимания"
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
  title: "Lektion 1 – Was ist die Fachsprachprüfung?",
  summary: "Überblick über Aufbau, Teile und Prüfungsprinzipien der FSP.",
  sections: [
    {
      kind: "video",
      title: "Video zur Lektion",
      url: "https://www.youtube.com/embed/Rvb_WGsUbKU?si=JhOErChQSR9eeHJ6"
    },

    {
      kind: "summary",
      title: "Aufbau der Fachsprachprüfung",
      items: [
        "Die Fachsprachprüfung (FSP) ist eine Sprachprüfung, bei der Ihre Fähigkeit überprüft wird, sicher mit Patientinnen/Patienten und Kolleginnen/Kollegen zu kommunizieren.",
        "Die Prüfung besteht aus drei Teilen:",

        "1. Arzt–Patienten–Gespräch (20–25 Minuten): größter und wichtigster Teil; Aufgaben: Vorstellung, strukturierte Anamnese, Empathie*, Symptome einordnen/zuordnen, Verdachtsdiagnose stellen, je nach Bundesland weiteres Vorgehen oder Aufklärungsgespräch führen.",

        "2. Arzt–Arzt–Gespräch (5–10 Minuten): kurze, strukturierte Übergabe; eigentlich leicht, aber viele Kandidaten machen Fehler, weil sie zu kompliziert sprechen.",

        "3. Schriftlicher Teil – der Arztbrief (30–40 Minuten): relativ leicht und wenig variabel; wichtig ist das sichere Anwenden fester Strukturen und Formulierungen."
      ]
    },

    {
      kind: "summary",
      title: "Prüfungsprinzipien",
      items: [
        "1. Sprache: Die FSP ist eine Sprachprüfung; entscheidend sind klare, verständliche und strukturierte Aussagen.",
        "2. Medizinische Orientierung: Basiswissen reicht aus; Ziel ist es, grobe Fehler zu vermeiden. Beispiel: Bei Fieber + Husten eher an Pneumonie denken, nicht an akute Appendizitis*.",
        "3. Empathie: Mitgefühl zeigen und angemessen reagieren; Beispiel: Bei Schmerzen 10/10 nicht mechanisch weiterfragen, sondern zuerst Hilfe anbieten („Möchten Sie ein Schmerzmittel?“).",
        "4. Automatisierung: Die Zeit ist knapp; wichtige Formulierungen sollten automatisiert abrufbar sein."
      ]
    },

    {
      kind: "summary",
      title: "Leitlinien (kurz erklärt)",
      items: [
        "S1-Leitlinie*: Expertenkonsens ohne systematische Literaturrecherche (мнение группы экспертов).",
        "S2-Leitlinie*: strukturierte Entwicklung mit definierter Methodik (более строгая методика разработки).",
        "S3-Leitlinie*: höchste Stufe – systematische Reviews und klare Algorithmen (самый высокий уровень доказательности)."
      ]
    },

    {
      kind: "summary",
      title: "Wortschatz dieser Lektion",
      items: [
        "**die Empathie*** – сочувствие, Mitgefühl; не путать с Mitleid (жалость) и Beileid (соболезнование).",
        "**der Passant** – прохожий.",
        "**an sich** – по сути, по существу.",
        "**überschlau** – слишком заумно.",
        
        "**einordnen / zuordnen** – относить, соотносить жалобы к диагнозу. Beispiel: „Die Beschwerden einer Krankheit richtig zuordnen.“",

        "**aufweisen** – проявлять, демонстрировать; формальный аналог „haben“. Beispiel: „Der Patient weist eine erhöhte Schmerzempfindlichkeit auf.“",

        "**besitzen** – владеть, обладать; формальное слово вместо „haben“.",

        "**die akute Appendizitis*** / **die Blinddarmentzündung*** – острый аппендицит.",
        "**die Schmerzempfindlichkeit*** – болевая чувствительность.",

        "**exazerbiert*** – обострённый, вышедший из-под контроля.",

        "**die COPD*** – Englisch: chronic obstructive pulmonary disease; Deutsch: chronisch obstruktive Lungenerkrankung; umgangssprachlich: „хроническое заболевание лёгких, при котором сужены дыхательные пути“.",

        "**die Leitlinie*** – клиническая рекомендация / протокол.",

        "**kompakt** – кратко и по делу.",
        "**auswendig lernen** – учить наизусть.",

        "**der Hospitant** – человек, который приходит в клинику, чтобы познакомиться с отделением und dem Team; часто используется для адаптации и улучшения языка.",

        "* = medizinischer Fachbegriff"
      ]
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
