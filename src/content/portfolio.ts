// Personal details and sample notebook projects. Replace projects with your own work.
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
  { company: "Verkada", position: "Incoming Software Engineer Intern", logo: "/images/companies/verkada.png", technologies: [] },
  { company: "Carta", position: "Software Engineer Intern", logo: "/images/companies/carta.svg", technologies: [] },
  { company: "Propel Holdings", position: "Software Engineer Intern", logo: "/images/companies/propel.png", technologies: [] },
];

export const projects = [
  { id: "small-things", art: "botanical", category: "Personal project / A collection", title: "A collection of small things", description: "An appreciation for the overlooked, the everyday, and the quietly beautiful.", note: "A space for a collection of things you’ve made, found, or wanted to keep. Add your story, your process, and the little details that made this project yours." },
  { id: "taking-shape", art: "orbit", category: "Exploration / In progress", title: "An idea, taking shape", description: "Following a thread of curiosity, and seeing where it might lead.", note: "Every idea starts somewhere. Use this page to share the question that began it all, the experiments along the way, and what you’re discovering." },
  { id: "somewhere", art: "journal", category: "Visual journal / Observations", title: "Notes from somewhere", description: "Fragments of a place, a feeling, and the things worth remembering.", note: "A page for the places and experiences that stay with you. Add your photographs, sketches, or words here when you’re ready to tell the story." },
] as const;
