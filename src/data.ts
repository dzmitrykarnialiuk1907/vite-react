// src/data.ts

export type Term = { de: string; ru: string; tag?: string };

export type Section = {
  kind: "summary" | "video";
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
        items: [
          "https://www.youtube.com/embed/Rvb_WGsUbKU?si=JhOErChQSR9eeHJ6"
        ]
      },
      {
        kind: "summary",
        title: "Aufbau der Fachsprachprüfung",
        items: [
          "1. Arzt-Patienten-Gespräch – größter Teil der Prüfungszeit: Vorstellung, Anamnese, Empathie und Erklärung des weiteren Vorgehens.",
          "2. Arzt-Arzt-Gespräch (Übergabe) – kurze, strukturierte Übergabe; viele Kandidaten machen es unnötig kompliziert.",
          "3. Schriftlicher Teil (Arztbrief) – eher routiniert: immer ähnliche Struktur."
        ]
      },
      {
        kind: "summary",
        title: "Prüfungsprinzipien",
        items: [
          "1. Sprache: klare, verständliche und gut strukturierte Kommunikation.",
          "2. Medizinische Orientierungskenntnisse: Basiswissen, um grobe fachliche Fehler zu vermeiden.",
          "3. Empathie: Mitgefühl zeigen, ohne in Mitleid oder Beileid abzurutschen.",
          "4. Automatisierung: Die Zeit ist knapp, wichtige Formulierungen müssen automatisch abrufbar sein."
        ]
      },
      {
        kind: "summary",
        title: "Leitlinien (kurz erklärt)",
        items: [
          "Leitlinien sind evidenzbasierte Empfehlungen zur Diagnostik und Therapie. (Клинические рекомендации.)",
          "S1-Leitlinie: Expertenkonsens ohne systematische Literaturrecherche. (Мнение экспертов.)",
          "S2-Leitlinie: strukturierte Entwicklung mit festgelegter Methodik. (Более строгая методика.)",
          "S3-Leitlinie: systematische Reviews und Studien mit klar definierten Algorithmen. (Самый высокий уровень доказательности.)"
        ]
      },
      {
        kind: "summary",
        title: "Wortschatz dieser Lektion",
        items: [
          "* Empathie – сочувствие, Mitgefühl (nicht Mitleid, nicht Beileid).",
          "der Passant – прохожий.",
          "an sich – по сути, по существу.",
          "überschlau – übertrieben clever, zu kompliziert, заумно.",
          "aufweisen – проявлять, демонстрировать (z.B. Der Patient weist eine erhöhte Schmerzempfindlichkeit auf.).",
          "besitzen – владеть, обладать (формальнее als „haben“).",
          "* akute Appendizitis / Blinddarmentzündung – острый аппендицит.",
          "Schmerzempfindlichkeit – болевая чувствительность.",
          "* exazerbiert – обострённый (z.B. exazerbierte COPD).",
          "* COPD – chronic obstructive pulmonary disease; chronisch obstruktive Lungenerkrankung; хроническая обструктивная болезнь лёгких (ХОБЛ).",
          "* Leitlinien – клинические рекомендации / протоколы (S1–S3).",
          "kompakt – kurz, knapp und auf den Punkt.",
          "auswendig lernen – учить наизусть.",
          "* = Fachbegriff (medizinischer Fachausdruck)."
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
