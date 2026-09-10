import type { Lang } from "./site";

type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export type ExperienceCase = {
  slug: string;
  period: T;
  organization: T;
  role: T;
  summary: T;
  context: T;
  objective: T;
  approach: L;
  results: L;
  technologies: L;
  logos: { src: string; alt: string; className: string }[];
};

export const experiences: ExperienceCase[] = [
  {
    slug: "edf-nlp-technical-reports",
    period: { en: "May 2025 — September 2025", fr: "Mai 2025 — Septembre 2025" },
    organization: { en: "EDF", fr: "EDF" },
    role: {
      en: "Final-year internship · Machine Learning / NLP",
      fr: "PFE · Machine Learning / NLP"
    },
    summary: {
      en: "An NLP prototype built from 17,000 French technical reports, with one path for importance prediction and another for historical-case retrieval.",
      fr: "Prototype NLP fondé sur 17 000 constats techniques en français, avec une chaîne de prédiction de l'importance et une autre de recherche historique."
    },
    context: {
      en: "EDF teams write a technical report after an event at a nuclear power plant. Titles, descriptions, immediate actions and issuer proposals later receive one of four importance levels. My final-year internship worked from 17,000 such documents, full of specialist French vocabulary and uneven class frequencies.",
      fr: "Après un événement en centrale nucléaire, les équipes EDF rédigent un constat technique. Titre, description, actions immédiates et proposition de l'émetteur reçoivent ensuite l'un des quatre niveaux d'importance. Mon PFE s'appuyait sur 17 000 de ces documents, avec un vocabulaire français très métier et des classes inégalement réparties."
    },
    objective: {
      en: "Give writers an early importance estimate with a confidence score, then surface earlier reports that may help them complete the new entry.",
      fr: "Donner aux rédacteurs une première estimation de l'importance avec un score de confiance, puis faire remonter d'anciens constats susceptibles de les aider pendant la saisie."
    },
    approach: {
      en: [
        "Discarded contradictory duplicates and very short entries before making a stratified 80/20 train-test split.",
        "Cleaned four free-text fields without erasing domain abbreviations; TF-IDF and Word2Vec then supplied competing representations.",
        "A Transformer-based model was also fine-tuned, but its performance on this domain-specific corpus was not sufficient to retain it.",
        "Applied SMOTE to the training data and compared a dense network with a dual-input LSTM.",
        "Tried K-means and HDBSCAN for suggestions, found their themes too mixed to help a writer, and switched to BM25 ranking."
      ],
      fr: [
        "Retrait des doublons contradictoires et des entrées trop courtes avant une séparation train-test stratifiée 80/20.",
        "Nettoyage des quatre champs libres sans effacer les abréviations métier, puis mise en concurrence de TF-IDF et Word2Vec.",
        "Un modèle Transformer a également été adapté par fine-tuning, mais ses performances sur ce corpus métier n'étaient pas suffisantes pour qu'il soit retenu.",
        "Application de SMOTE aux données d'entraînement et comparaison d'un réseau dense avec un LSTM à deux entrées.",
        "Essais de K-means et HDBSCAN pour les suggestions, constat de thèmes trop mélangés, puis passage à un classement BM25."
      ]
    },
    results: {
      en: [
        "With early stopping, the TF-IDF dense network reached 62% validation accuracy; Word2Vec with LSTM stopped at 54%.",
        "The interface prototype displayed a proposed importance level alongside model confidence.",
        "For similar reports, BM25 gave writers a readable ranked list where clustering had produced muddled groups."
      ],
      fr: [
        "Avec early stopping, le réseau dense sur TF-IDF a atteint 62 % d'accuracy de validation ; Word2Vec avec LSTM s'est arrêté à 54 %.",
        "La maquette affichait un niveau d'importance proposé avec la confiance du modèle.",
        "Pour retrouver des constats proches, BM25 donnait une liste classée lisible là où le clustering formait des groupes confus."
      ]
    },
    technologies: { en: ["Python", "NLP", "TF-IDF", "Word2Vec", "LSTM", "SMOTE", "BM25", "K-means", "HDBSCAN"], fr: ["Python", "NLP", "TF-IDF", "Word2Vec", "LSTM", "SMOTE", "BM25", "K-means", "HDBSCAN"] },
    logos: [{ src: "logos/edf.png", alt: "EDF", className: "brand-edf" }]
  },
  {
    slug: "gmi-computer-vision-internship",
    period: { en: "June 2024 — August 2024", fr: "Juin 2024 — Août 2024" },
    organization: {
      en: "GMI · Mines Saint-Étienne",
      fr: "GMI · Mines Saint-Étienne"
    },
    role: {
      en: "Assistant Engineer Internship · Computer Vision",
      fr: "Stage assistant ingénieur · Vision par ordinateur"
    },
    summary: {
      en: "A computer-vision investigation into ellipse recovery from broken, noisy contours for pot-filling quality control.",
      fr: "Étude en vision par ordinateur sur la reconstruction d'ellipses à partir de contours cassés et bruités pour le contrôle du remplissage."
    },
    context: {
      en: "The Mathematical and Industrial Engineering (GMI) department at Mines Saint-Étienne focuses on applied mathematics, optimization, modelling and data analysis for industrial problems. The IT'm Factory reproduces a manufacturing line where pots move through filling, sealing and packing. During my internship, I studied a transparent vision-based check for the container opening and the fill boundary—two shapes needed to estimate quantity and spot foreign material.",
      fr: "Le département Génie mathématique et industriel (GMI) de Mines Saint-Étienne travaille notamment sur les mathématiques appliquées, l'optimisation, la modélisation et l'analyse de données pour des problématiques industrielles. L'IT'm Factory reproduit une ligne de fabrication où les pots passent par le remplissage, la fermeture et l'emballage. Pendant mon stage, j'ai étudié un contrôle visuel interprétable de l'ouverture du contenant et de la limite du produit, deux formes nécessaires pour estimer la quantité et repérer un corps étranger."
    },
    objective: {
      en: "Find out how far traditional vision and numerical fitting could recover fill-level geometry when the available arcs remain incomplete and noisy.",
      fr: "Mesurer jusqu'où la vision classique et l'ajustement numérique peuvent retrouver la géométrie du remplissage lorsque les arcs restent incomplets et bruités."
    },
    approach: {
      en: [
        "Converted full-resolution images to grayscale, softened noise with a Gaussian filter and extracted edges with Canny.",
        "Adapted Teaching-Learning-Based Optimization so populations of edge pixels could propose ellipse candidates.",
        "Split contours around changes in curvature, then tested which fragments formed coherent arcs.",
        "Compared geometric, algebraic and numerically stable fitting under partial coverage and pixel noise."
      ],
      fr: [
        "Passage des images en pleine résolution aux niveaux de gris, réduction du bruit par filtre gaussien et extraction des contours avec Canny.",
        "Adaptation de Teaching-Learning-Based Optimization afin que des populations de pixels proposent des ellipses candidates.",
        "Découpage des contours aux changements de courbure, puis test des fragments susceptibles de former des arcs cohérents.",
        "Comparaison des ajustements géométrique, algébrique et algébrique numériquement stable face à une couverture partielle et au bruit pixel."
      ]
    },
    results: {
      en: [
        "A numerically stable algebraic formulation fitted partially observed ellipses quickly when noise stayed low.",
        "Broken arcs combined with pixel-level noise still defeated reliable recovery, so the prototype never claimed production readiness."
      ],
      fr: [
        "Une formulation algébrique numériquement stable ajustait rapidement les ellipses partielles tant que le bruit restait faible.",
        "L'association d'arcs cassés et de bruit pixel empêchait encore une reconstruction fiable ; le prototype ne prétendait donc pas être prêt pour la production."
      ]
    },
    technologies: { en: ["Python", "OpenCV", "Computer Vision", "Canny", "Ellipse Fitting", "TLBO", "SVD", "Numerical Optimization"], fr: ["Python", "OpenCV", "Vision par ordinateur", "Canny", "Ajustement d'ellipses", "TLBO", "SVD", "Optimisation numérique"] },
    logos: [
      { src: "logos/gmi.png", alt: "GMI - Mines Saint-Étienne", className: "brand-gmi" },
      { src: "logos/mines.png", alt: "Mines Saint-Étienne", className: "brand-mines-secondary" }
    ]
  }
];
