export type ProjectFrameStyle = "stamp" | "record" | "note" | "photo";

type Experience = {
  company: string;
  position: string;
  logo: string;
  technologies: readonly string[];
};

type IntroSegment = {
  text: string;
  italic?: boolean;
};

type Project = {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  alt: string;
  frame: {
    style: ProjectFrameStyle;
    caption: string;
  };
};

export const portfolio = {
  name: "An Tran",
  email: "an.tran@waterloo.ca",
  experienceIntro: [
    { text: "I’ve spent my internships working mostly on " },
    { text: "backend systems", italic: true },
    { text: ". I’m interested in " },
    { text: "distributed systems", italic: true },
    { text: " and want to get deeper into how they work. " },
    { text: "AI and machine learning", italic: true },
    { text: " are also areas I’d love to learn more about." },
  ],
  experiences: [
    {
      company: "Verkada",
      position: "Inc. Software Engineer Intern @ Core Command team",
      logo: "/images/companies/verkada.svg",
      technologies: [],
    },
    {
      company: "Carta",
      position: "Software Engineer Intern",
      logo: "/images/companies/carta.svg",
      technologies: ["backend", "data pipelines", "distributed systems"],
    },
    {
      company: "Propel Holdings",
      position: "Software Engineer Intern",
      logo: "/images/companies/propel.svg",
      technologies: ["backend", "API development", "query optimization", "testing"],
    },
  ],
  projects: [
    {
      id: "we-do-wonder",
      image: "/images/projects/wedowonder.png",
      category: "Community / Education",
      title: "We Do Wonder",
      description: "Inspiring change in Vietnam through education and community.",
      alt: "We Do Wonder website with photos from its community initiatives",
      frame: { style: "stamp", caption: "a little wonder" },
    },
    {
      id: "motion-wave",
      image: "/images/projects/motionWave.png",
      category: "Music / Machine learning",
      title: "Motion Wave",
      description:
        "Control the rhythm with your hands. Real-time harmony powered by machine learning.",
      alt: "Motion Wave interface with a vinyl record and hand controls",
      frame: { style: "record", caption: "follow the rhythm" },
    },
    {
      id: "notation",
      image: "/images/projects/notation.png",
      category: "Tools / Mathematics",
      title: "Notation",
      description: "Turning handwritten mathematics into formal markup.",
      alt: "Notation interface showing handwritten notes alongside formatted mathematics",
      frame: { style: "note", caption: "ideas, made clearer" },
    },
    {
      id: "tedx-uw",
      image: "/images/projects/tedx.png",
      category: "Community / Events",
      title: "TEDx UW",
      description: "Ideas and conversations at the University of Waterloo.",
      alt: "Speakers on stage at a TEDx UW event",
      frame: { style: "photo", caption: "ideas worth sharing" },
    },
    {
      id: "estimathon",
      image: "/images/projects/estimathon.png",
      category: "UW DSC / Events",
      title: "Estimathon v0",
      description:
        "A place for teams to submit their estimates and follow the leaderboard.",
      alt: "UW DSC Estimathon submission form",
      frame: { style: "stamp", caption: "a good guess" },
    },
    {
      id: "speedfriending",
      image: "/images/projects/speedfriending.png",
      category: "UW DSC / Events",
      title: "Speedfriending v3",
      description:
        "Helping Waterloo students meet through a speed-friending social.",
      alt: "UW DSC Speedfriending social with survey and matching options",
      frame: { style: "note", caption: "new faces, new friends" },
    },
  ],
} as const satisfies {
  name: string;
  email: string;
  experienceIntro: readonly IntroSegment[];
  experiences: readonly Experience[];
  projects: readonly Project[];
};

export type PortfolioProject = (typeof portfolio.projects)[number];
