export const languages = ["en", "fr"] as const;
export type Lang = typeof languages[number];

export const profile = {
  name: "Mohammed Aharrar Soulali",
  email: "mohamedaharrar7@gmail.com",
  location: "Palaiseau, France",
  linkedin: "https://www.linkedin.com/in/mohammed-aharrar"
};

export const ui = {
  en: {
    nav: { home: "Home", projects: "Projects", about: "About", cv: "CV", contact: "Contact" },
    switch: "FR",
    role: "Machine Learning Engineer",
    hero: "I build machine-learning systems for text, images, sensor signals and industrial data.",
    intro:
      "I recently graduated from Mines Saint-Étienne in Data Science and Computer Science. My work starts with messy, domain-specific data and ends with a model, pipeline or prototype that someone can actually test.",
    selected: "Selected projects",
    selectedText:
      "Three pieces of work shaped by different constraints: an acoustic research study, an industrial video problem and a cloud data pipeline.",
    all: "See all projects",
    experience: "Experience",
    technical: "What I want to build next",
    education: "Education",
    projectsTitle: "Projects",
    projectsIntro:
      "Professional, academic and engineering work. Each case study presents the problem, method and result.",
    about: "About",
    aboutTitle: "I like the point where data work becomes an engineering problem.",
    aboutText:
      "My training at École des Mines de Saint-Étienne combined statistics, computing and engineering. I feel most engaged when a promising model still needs careful data work, software decisions and honest testing before anyone can rely on it.",
    contact: "Contact",
    contactText:
      "You can reach me by email or LinkedIn for a role, a project or a technical conversation.",
    cvTitle: "Curriculum Vitae",
    openPdf: "Open PDF",
    downloadPdf: "Download PDF",
    pdfFallback: "Your browser cannot display the embedded PDF.",
    labels: {
      context: "Context",
      objective: "Objective",
      approach: "Approach",
      results: "Results",
      tech: "Technologies",
      back: "Back to projects"
    }
  },
  fr: {
    nav: { home: "Accueil", projects: "Projets", about: "À propos", cv: "CV", contact: "Contact" },
    switch: "EN",
    role: "Ingénieur Machine Learning",
    hero: "Je construis des systèmes de machine learning pour le texte, l'image, les signaux capteurs et les données industrielles.",
    intro:
      "Récemment diplômé de Mines Saint-Étienne en Data Science et Informatique, je pars de données métier souvent imparfaites pour aboutir à un modèle, un pipeline ou un prototype que l'on peut réellement tester.",
    selected: "Projets sélectionnés",
    selectedText:
      "Trois réalisations soumises à des contraintes différentes : recherche acoustique, analyse vidéo industrielle et traitement de données dans le cloud.",
    all: "Voir tous les projets",
    experience: "Expérience",
    technical: "La suite que je vise",
    education: "Formation",
    projectsTitle: "Projets",
    projectsIntro:
      "Projets professionnels, académiques et d'ingénierie. Chaque étude de cas présente le problème, la méthode et le résultat.",
    about: "À propos",
    aboutTitle: "J'aime le moment où la donnée devient un problème d'ingénierie.",
    aboutText:
      "Ma formation à l'École des Mines de Saint-Étienne associe statistiques, informatique et ingénierie. Ce qui m'attire le plus : reprendre un modèle prometteur, travailler la donnée, faire les bons choix logiciels et le tester sans masquer ses limites.",
    contact: "Contact",
    contactText:
      "Vous pouvez me joindre par email ou LinkedIn pour un poste, un projet ou une discussion technique.",
    cvTitle: "Curriculum Vitae",
    openPdf: "Ouvrir le PDF",
    downloadPdf: "Télécharger le PDF",
    pdfFallback: "Votre navigateur ne peut pas afficher le PDF intégré.",
    labels: {
      context: "Contexte",
      objective: "Objectif",
      approach: "Approche",
      results: "Résultats",
      tech: "Technologies",
      back: "Retour aux projets"
    }
  }
} as const;
