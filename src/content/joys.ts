type Track = {
  title: string;
  artist: string;
  url: string;
};

type JoyContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  gallery: {
    src: string;
    caption: string;
    poster: string;
  };
  coffee: {
    eyebrow: string;
    title: string;
    description: string;
  };
  watch: {
    eyebrow: string;
    title: string;
    description: string;
  };
  music: {
    eyebrow: string;
    lastPlayed: Track | null;
    fallbackTitle: string;
    fallbackDescription: string;
  };
  signoff: string;
};

export const joys: JoyContent = {
  eyebrow: "03 — Outside the work",
  title: "Things I’ve been up to",
  subtitle: "A few small things worth keeping.",
  gallery: {
    src: "/gallery/beach.mp4",
    caption: "Da Nang, Vietnam",
    poster: "/gallery/beach-poster.jpg",
  },
  coffee: {
    eyebrow: "Coffee, lately",
    title: "A little latte practice.",
    description:
      "I learned to make lattes, pull espresso, and find my way around a coffee machine at Carta.",
  },
  watch: {
    eyebrow: "On my watchlist",
    title: "Avatar: Seven Havens",
    description: "A little escape to another world.",
  },
  music: {
    eyebrow: "Last played on Spotify",
    // Replace with a track when Spotify listening history is connected.
    lastPlayed: null,
    fallbackTitle: "A song for this corner.",
    fallbackDescription: "Listening history coming soon.",
  },
  signoff: "Thanks for stopping by!",
};
