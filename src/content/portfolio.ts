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

type ProjectLink = {
  name: string;
  href: string;
};

type Project = {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  popupDescription: string;
  alt: string;
  links: readonly [ProjectLink, ProjectLink];
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
    { text: " and have been digging deeper into how they work. " },
    { text: " I'm also spending some time learning more about " },
    { text: "AI and machine learning!", italic: true },
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
      popupDescription:
        "This isn’t a technical project, but it’s one I wanted to give a spotlight here. * In 2021, I co-founded We Do Wonder, a nonprofit focused on education and community in Vietnam. With a team of 20, we launched English classes for 40 students with 12 volunteers, then went on to organize fundraisers, community visits, and online workshops connecting young people from around the world. What I remember most are the late-night lessons filled with laughter, delivering bake sale orders on my teammate’s motorcycle, and playing childhood games with the kids at the center—I’m forever grateful to everyone who made it possible. * I made a website with photos from our events. Take a look!",
      alt: "We Do Wonder website with photos from its community initiatives",
      links: [
        { name: "Website", href: "https://wedowonder.vercel.app/" },
        { name: "Facebook", href: "https://www.facebook.com/wedowonder/" },
      ],
      frame: { style: "stamp", caption: "a little wonder" },
    },
    {
      id: "motion-wave",
      image: "/images/projects/motionWave.png",
      category: "Music / Machine learning",
      title: "Motion Wave",
      description:
        "Control the rhythm with your hands. Real-time harmony powered by machine learning.",
      popupDescription:
        "[Daniel](https://www.danielquzhao.com/) and I built MotionWave in five hours at TechTO. It lets you compose music with hand gestures, using MediaPipe to track both hands in real time and a neural network to generate four-part harmonies. We ran the model in the browser with WebAssembly so the music and interface could keep up with your movements. We were selected as one of the top five projects!",
      alt: "Motion Wave interface with a vinyl record and hand controls",
      links: [
        { name: "Github", href: "https://github.com/quynhan-tr/MotionWave" },
        { name: "Website", href: "https://techto25.vercel.app/" },
      ],
      frame: { style: "record", caption: "follow the rhythm" },
    },
    {
      id: "notation",
      image: "/images/projects/notation.png",
      category: "Tools / Mathematics",
      title: "Notation",
      description: "Turning handwritten mathematics into formal markup.",
      popupDescription: "[Daniel](https://www.danielquzhao.com/) and I built Notation to turn scanned notes, PDFs, and images into editable LaTeX. It uses Gemini to extract the content, with a Ruby on Rails backend handling formatting and PDF compilation. The React interface lets you switch between the LaTeX source and the rendered document, so you can check the output and make edits. We deployed it on Google Cloud Run with automated builds and deployments.",
      alt: "Notation interface showing handwritten notes alongside formatted mathematics",
      links: [
        { name: "Github", href: "https://github.com/quynhan-tr/notation" },
        { name: "Website", href: "https://mathtolatex.com/" },
      ],
      frame: { style: "note", caption: "ideas, made clearer" },
    },
    {
      id: "tedx-uw",
      image: "/images/projects/tedx.png",
      category: "Community / Events",
      title: "TEDx UW",
      description: "Ideas and conversations at the University of Waterloo.",
      popupDescription:
        "I spent a couple of months building the TEDxUW event portal with our software team. We worked on everything from ticket registration to QR-code check-in for 300+ attendees. Having attended TEDxUW before, I was super excited to contribute through code this time and help bring another event to campus!",
      alt: "Speakers on stage at a TEDx UW event",
      links: [
        { name: "Github", href: "https://github.com/quynhan-tr" },
        { name: "Website", href: "https://www.tedxuw.ca/" },
      ],
      frame: { style: "photo", caption: "ideas worth sharing" },
    },
    {
      id: "estimathon",
      image: "/images/projects/estimathon.png",
      category: "UW DSC / Events",
      title: "Estimathon v0",
      description:
        "A place for teams to submit their estimates and follow the leaderboard.",
      popupDescription:
        "I built the first version of this platform for the Waterloo Data Science Club’s Estimathon, where teams tackle estimation questions against the clock. Teams could submit their guesses and follow the leaderboard as results came in. It handled 450+ submissions during the event! As both an organizer and developer, it was exciting to see something I built become part of the event.",
      alt: "UW DSC Estimathon submission form",
      links: [
        { name: "Github", href: "https://github.com/quynhan-tr/estimathon" },
        { name: "Website", href: "https://uw-estimathon.vercel.app/" },
      ],
      frame: { style: "stamp", caption: "a good guess" },
    },
    {
      id: "speedfriending",
      image: "/images/projects/speedfriending.png",
      category: "UW DSC / Events",
      title: "Speedfriending v3",
      description:
        "Helping Waterloo students meet through a speed-friending social.",
      popupDescription:
        "This is one I keep coming back to. I started building it for the Waterloo Data Science Club’s first-ever Speed-[DATA]ing event in 2024, to help students meet without leaving all the pairing to us organizers. Many iterations later, this is version three: students fill out a survey, get matched based on shared interests, and meet someone new each round. We now use AI embeddings to compare survey responses and avoid repeat pairings. It’s been fun to keep improving it each term and see people meet through something we built.",
      alt: "UW DSC Speedfriending social with survey and matching options",
      links: [
        {
          name: "Github", href: "https://github.com/quynhan-tr/dsc-speed-dataing",
        },
        { name: "Website", href: "https://dsc-speed-dataing.vercel.app/" },
      ],
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
