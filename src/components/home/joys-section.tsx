import { JoyGallery } from "@/components/home/joy-gallery";
import { currently } from "@/content/joys";

export function JoysSection() {
  return (
    <section id="joys" className="joys section" aria-labelledby="joys-title">
      <p className="eyebrow">03 — Outside the work</p>
      <div className="joys-heading">
        <h2 id="joys-title">Things I’ve been up to</h2>
        <p className="handwritten">A few small things worth keeping.</p>
      </div>
      <div className="joys-layout">
        <JoyGallery />
        <aside className="joy-notes" aria-label="A few things I’m into">
          <article className="joy-note coffee-note">
            <div className="joy-note-art" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none"><path d="M8 12q24-5 48 0l-3 27q-2 16-21 16T11 39Z"/><path d="M27 23c-18-10-11 17 7 23 0-10 19-29 7-27-9 0-12 12-7 20"/></svg>
            </div>
            <div>
              <p className="eyebrow">Coffee, lately</p>
              <h3>A little latte practice.</h3>
              <p>I learned to make lattes, pull espresso, and find my way around a coffee machine at Carta.</p>
            </div>
          </article>
          <article className="joy-note watch-note">
            <div className="joy-note-art" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none"><path d="m32 5 8 19 20 2-16 13 5 20-17-11-18 11 5-20L3 26l21-2Z" /></svg>
            </div>
            <div>
              <p className="eyebrow">On my watchlist</p>
              <h3>{currently.show}</h3>
              <p>A little escape to another world.</p>
            </div>
          </article>
          <article className="joy-note music-note">
            <div className="joy-note-art record-doodle" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="26" /><circle cx="32" cy="32" r="18" /><circle cx="32" cy="32" r="8" /><circle cx="32" cy="32" r="2" /><path d="M15 25a19 19 0 0 1 10-10m14 34a19 19 0 0 0 10-10" /></svg>
            </div>
            <div>
              <p className="eyebrow">Last played on Spotify</p>
              {currently.lastPlayed ? <><h3><a href={currently.lastPlayed.url} target="_blank" rel="noreferrer">{currently.lastPlayed.title} ↗</a></h3><p>{currently.lastPlayed.artist}</p></> : <><h3>A song for this corner.</h3><p className="spotify-pending">Listening history coming soon.</p></>}
            </div>
          </article>
        </aside>
      </div>
      <p className="joys-signoff handwritten">
        <svg viewBox="0 0 76 62" fill="none" aria-hidden="true"><path d="m5 24 61-9 6 37-64 7ZM5 24l35 20 26-29M8 59l24-21m17-4 23 18M49 13c-17-4-6-15 0-5 8-15 14-4 0 5Z" /></svg>
        Thanks for stopping by!
      </p>
    </section>
  );
}
