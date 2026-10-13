type Track = {
  title: string;
  artist: string;
  url: string;
};

type JoyContent = {
  eyebrow: string;
  title: string;
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
  eyebrow: "03 — Outside of work",
  title: "Things I’ve been up to",
  gallery: {
    src: "/gallery/beach.mp4",
    caption: "Da Nang, Vietnam",
    poster: "/gallery/beach-poster.jpg",
  },
  coffee: {
    eyebrow: "Coffee, lately",
    title: "Barista!?",
    description:
      "Recently I learned to pull espresso shots and make latte “art” with friends @ Carta.",
  },
  watch: {
    eyebrow: "On my watchlist",
    title: "Avatar: Seven Havens",
    description: "Patiently waiting for the next episode :)",
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
