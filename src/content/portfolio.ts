export type JoyIconKind = "book" | "camera" | "cup" | "plant";
export type ProjectFrameStyle = "stamp" | "record" | "note" | "photo";

type Experience = {
  company: string;
  position: string;
  logo: string;
  technologies: readonly string[];
};

type Joy = {
  icon: JoyIconKind;
  title: string;
  description: string;
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
  experienceIntro:
    "I’m a computer science student at Waterloo, exploring where I’d like to take my work in software engineering. Internships are one way I’m learning along the way.",
  experiences: [
    {
      company: "Verkada",
      position: "Incoming Software Engineer Intern",
      logo: "/images/companies/verkada.svg",
      technologies: [],
    },
    {
      company: "Carta",
      position: "Software Engineer Intern",
      logo: "/images/companies/carta.svg",
      technologies: [],
    },
    {
      company: "Propel Holdings",
      position: "Software Engineer Intern",
      logo: "/images/companies/propel.svg",
      technologies: [],
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
  joys: [
    {
      icon: "book",
      title: "Between the pages",
      description:
        "A favourite book, a line to return to, or whatever is on the reading pile.",
    },
    {
      icon: "camera",
      title: "Out in the world",
      description: "Places to wander, and the details you notice along the way.",
    },
    {
      icon: "cup",
      title: "Ordinary rituals",
      description:
        "The slow, everyday moments that make a day feel like your own.",
    },
    {
      icon: "plant",
      title: "Growing things",
      description:
        "Something you’re learning, tending to, or simply curious about.",
    },
  ],
} as const satisfies {
  name: string;
  email: string;
  experienceIntro: string;
  experiences: readonly Experience[];
  projects: readonly Project[];
  joys: readonly Joy[];
};

export type PortfolioProject = (typeof portfolio.projects)[number];
