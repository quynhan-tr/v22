// Personal details and selected work.
export const portfolio = {
  name: "An Tran",
  email: "an.tran@waterloo.ca",
  about: "I’m An, and this is my little space to collect the things I’m making and the ideas I’m exploring. A notebook for work, curiosity, and the stories in between.",
  joys: [
    { icon: "book", title: "Between the pages", description: "A favourite book, a line to return to, or whatever is on the reading pile." },
    { icon: "camera", title: "Out in the world", description: "Places to wander, and the details you notice along the way." },
    { icon: "cup", title: "Ordinary rituals", description: "The slow, everyday moments that make a day feel like your own." },
    { icon: "plant", title: "Growing things", description: "Something you’re learning, tending to, or simply curious about." },
  ],
} as const;

// Draft introduction: personalize the focus and interests when ready.
export const experienceIntro = "I’m a computer science student at Waterloo, exploring where I’d like to take my work in software engineering. Internships are one way I’m learning along the way.";

// Add verified technologies here; empty lists stay hidden on the page.
export const experiences: {
  company: string;
  position: string;
  logo: string;
  technologies: string[];
}[] = [
  { company: "Verkada", position: "Incoming Software Engineer Intern", logo: "/images/companies/verkada.svg", technologies: [] },
  { company: "Carta", position: "Software Engineer Intern", logo: "/images/companies/carta.svg", technologies: [] },
  { company: "Propel Holdings", position: "Software Engineer Intern", logo: "/images/companies/propel.svg", technologies: [] },
];

export const projects = [
  { id: "we-do-wonder", image: "/images/projects/wedowonder.png", category: "Community / Education", title: "We Do Wonder", description: "Inspiring change in Vietnam through education and community.", alt: "We Do Wonder website with photos from its community initiatives" },
  { id: "motion-wave", image: "/images/projects/motionWave.png", category: "Music / Machine learning", title: "Motion Wave", description: "Control the rhythm with your hands. Real-time harmony powered by machine learning.", alt: "Motion Wave interface with a vinyl record and hand controls" },
  { id: "notation", image: "/images/projects/notation.png", category: "Tools / Mathematics", title: "Notation", description: "Turning handwritten mathematics into formal markup.", alt: "Notation interface showing handwritten notes alongside formatted mathematics" },
  { id: "tedx-uw", image: "/images/projects/tedx.png", category: "Community / Events", title: "TEDx UW", description: "Ideas and conversations at the University of Waterloo.", alt: "Speakers on stage at a TEDx UW event" },
  { id: "estimathon", image: "/images/projects/estimathon.png", category: "UW DSC / Events", title: "Estimathon v0", description: "A place for teams to submit their estimates and follow the leaderboard.", alt: "UW DSC Estimathon submission form" },
  { id: "speedfriending", image: "/images/projects/speedfriending.png", category: "UW DSC / Events", title: "Speedfriending v3", description: "Helping Waterloo students meet through a speed-friending social.", alt: "UW DSC Speedfriending social with survey and matching options" },
] as const;
