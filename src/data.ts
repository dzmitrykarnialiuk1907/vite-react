// src/data.ts

export type Term = {
  de: string;          // медицинский термин (Fachbegriff)
  deUmgang?: string;   // обычный вариант (Umgangssprache)
  ru: string;          // русский перевод/объяснение
  system?: string;     // система: Kopf, Abdomen, Lunge и т.п.
  tag?: string;        // если хочешь ещё что-то помечать
};


  | {
      // НОВОЕ: тренажёр Fachbegriffe
      kind: "trainer";
      title: string;
      terms: Term[];
    };

export type Lecture = {
  id: string;
  nr: number;
  title: string;
  summary?: string;
  sections: Section[];
};

export type Lecture = {
  id: string;
  nr: number;
  title: string;
  summary?: string;
  sections: Section[];
};
// Общий список Fachbegriffe для тренинга и словарей
export const FACHBEGRIFFE: Term[] = [
  {
    de: "die Empathie",
    deUmgang: "das Mitgefühl",
    ru: "сочувствие, Mitgefühl",
    system: "Allgemein"
  },
  {
    de: "die akute Appendizitis",
    deUmgang: "die Blinddarmentzündung",
    ru: "острый аппендицит",
    system: "Abdomen"
  },
  {
    de: "die Schmerzempfindlichkeit",
    ru: "болевая чувствительность",
    system: "Allgemein"
  },
  {
    de: "die COPD",
    ru: "хроническая обструктивная болезнь лёгких",
    system: "Lunge"
  },
  {
    de: "die Leitlinie",
    ru: "клиническая рекомендация / протокол",
    system: "Allgemein"
  }
  // 👉 сюда потом добавишь остальные ~400 терминов в том же формате
];

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
        
        "<b>Arzt–Patienten–Gespräch (20–25 Minuten)</b>: größter und wichtigster Teil; Aufgaben: Vorstellung, strukturierte Anamnese, Empathie*, Symptome einordnen/zuordnen, Verdachtsdiagnose stellen, je nach Bundesland weiteres Vorgehen oder Aufklärungsgespräch führen.",

        "<b>Arzt–Arzt–Gespräch (5–10 Minuten)</b>: kurze, strukturierte Übergabe; eigentlich leicht, aber viele Kandidaten machen Fehler, weil sie zu kompliziert sprechen.",

        "<b>Schriftlicher Teil – der Arztbrief (30–40 Minuten)</b>: relativ leicht und wenig variabel; wichtig ist das sichere Anwenden fester Strukturen und Formulierungen."
      ]
    },

    {
      kind: "summary",
      title: "Prüfungsprinzipien",
      items: [
        "<b>Sprache</b>: Die FSP ist eine Sprachprüfung; entscheidend sind klare, verständliche und strukturierte Aussagen.",
        "<b>Medizinische Orientierung</b>: Basiswissen reicht aus; Ziel ist es, grobe Fehler zu vermeiden. Beispiel: Bei Fieber + Husten eher an Pneumonie denken, nicht an akute Appendizitis*.",
        "<b>Empathie</b>: Mitgefühl zeigen und angemessen reagieren; Beispiel: Bei Schmerzen 10/10 nicht mechanisch weiterfragen, sondern zuerst Hilfe anbieten („Möchten Sie ein Schmerzmittel?“).",
        "<b>Automatisierung</b>: Die Zeit ist knapp; wichtige Formulierungen sollten automatisiert abrufbar sein."
      ]
    },

    {
      kind: "summary",
      title: "Leitlinien (kurz erklärt)",
      items: [
        "<b>S1-Leitlinie*</b>: Expertenkonsens ohne systematische Literaturrecherche (мнение группы экспертов).",
        "<b>S2-Leitlinie*</b>: strukturierte Entwicklung mit definierter Methodik (более строгая методика разработки).",
        "<b>S3-Leitlinie*</b>: höchste Stufe – systematische Reviews und klare Algorithmen (самый высокий уровень доказательности)."
      ]
    },

    {
      kind: "summary",
      title: "Wortschatz dieser Lektion",
      items: [
        "<b>die Empathie*</b> – сочувствие, Mitgefühl; не путать mit Mitleid (жалость) und Beileid (соболезнование).",
        "<b>der Passant</b> – прохожий.",
        "<b>an sich</b> – по сути, по существу.",
        "<b>überschlau</b> – слишком заумно.",

        "<b>einordnen / zuordnen</b> – относить, соотносить жалобы к диагнозу. Beispiel: „Die Beschwerden einer Krankheit richtig zuordnen.“",

        "<b>aufweisen</b> – проявлять, демонстрировать; формальный аналог „haben“. Beispiel: „Der Patient weist eine erhöhte Schmerzempfindlichkeit auf.“",

        "<b>besitzen</b> – владеть, обладать; формальное слово вместо „haben“.",

        "<b>die akute Appendizitis*</b> / <b>die Blinddarmentzündung*</b> – острый аппендицит.",
        "<b>die Schmerzempfindlichkeit*</b> – болевая чувствительность.",

        "<b>exazerbiert*</b> – обострённый, вышедший из-под контроля.",

        "<b>die COPD*</b> – Englisch: chronic obstructive pulmonary disease; Deutsch: chronisch obstruktive Lungenerkrankung; umgangssprachlich: хроническое заболевание лёгких с ограничением выдоха.",

        "<b>die Leitlinie*</b> – клиническая рекомендация / протокол.",

        "<b>kompakt</b> – кратко и по делу.",
        "<b>auswendig lernen</b> – учить наизусть.",

        "<b>der Hospitant</b> – человек, который приходит в клинику, чтобы познакомиться с отделением und dem Team."
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
  title: "Training – Fachbegriffe",
  summary:
    "Übersicht über die wichtigsten Fachbegriffe: alphabetisch, nach Systemen und als Training.",
  sections: [
    {
      kind: "vocab",
      title: "Fachbegriffe – alphabetisch",
      terms: FACHBEGRIFFE.slice().sort((a, b) =>
        a.de.localeCompare(b.de)
      )
    },
    {
      kind: "vocab",
      title: "Fachbegriffe – nach Systemen",
      terms: FACHBEGRIFFE.slice().sort((a, b) => {
        const sa = a.system || "";
        const sb = b.system || "";
        if (sa === sb) {
          return a.de.localeCompare(b.de);
        }
        return sa.localeCompare(sb);
      })
    },
    {
      kind: "trainer",
      title: "Training – Fachbegriffe (Ru → De, Fach + Alltag)",
      terms: FACHBEGRIFFE
    }
  ]
}
