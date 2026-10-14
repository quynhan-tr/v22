import Image from "next/image";

import { JoyVideo } from "@/components/home/joy-video";
import { joys } from "@/content/joys";
import { getLastPlayedTrack } from "@/lib/spotify";

export async function JoysSection() {
  const lastPlayed = await getLastPlayedTrack();

  return (
    <section id="joys" className="joys section" aria-labelledby="joys-title">
      <p className="eyebrow" data-reveal>
        {joys.eyebrow}
      </p>
      <div className="joys-heading" data-reveal>
        <h2 id="joys-title">{joys.title}</h2>
      </div>

      <div className="joys-layout">
        <JoyVideo />
        <aside className="joy-notes" aria-label="A few things I’m into">
          <article
            className="joy-note coffee-note"
            data-reveal
            style={{ "--reveal-index": 1 } as React.CSSProperties}
          >
            <div className="joy-note-art" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path pathLength={1} d="M8 12q24-5 48 0l-3 27q-2 16-21 16T11 39Z" />
                <path pathLength={1} d="M27 23c-18-10-11 17 7 23 0-10 19-29 7-27-9 0-12 12-7 20" />
              </svg>
            </div>
            <div>
              <p className="eyebrow">{joys.coffee.eyebrow}</p>
              <h3>{joys.coffee.title}</h3>
              <p>{joys.coffee.description}</p>
            </div>
          </article>

          <article
            className="joy-note watch-note"
            data-reveal
            style={{ "--reveal-index": 2 } as React.CSSProperties}
          >
            <div className="joy-note-art" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path pathLength={1} d="m32 5 8 19 20 2-16 13 5 20-17-11-18 11 5-20L3 26l21-2Z" />
              </svg>
            </div>
            <div>
              <p className="eyebrow">{joys.watch.eyebrow}</p>
              <h3>{joys.watch.title}</h3>
              <p>{joys.watch.description}</p>
            </div>
          </article>

          <article
            className="joy-note music-note"
            data-reveal
            style={{ "--reveal-index": 3 } as React.CSSProperties}
          >
            <div className="joy-note-art record-doodle" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <circle pathLength={1} cx="32" cy="32" r="26" />
                <circle pathLength={1} cx="32" cy="32" r="18" />
                <circle pathLength={1} cx="32" cy="32" r="8" />
                <circle pathLength={1} cx="32" cy="32" r="2" />
                <path pathLength={1} d="M15 25a19 19 0 0 1 10-10" />
                <path pathLength={1} d="M39 49a19 19 0 0 0 10-10" />
              </svg>
            </div>
            <div>
              <p className="eyebrow">{joys.music.eyebrow}</p>
              {lastPlayed ? (
                <div className="spotify-track">
                  {lastPlayed.imageUrl && (
                    <a
                      href={lastPlayed.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${lastPlayed.title} on Spotify`}
                    >
                      <Image
                        className="spotify-album-art"
                        src={lastPlayed.imageUrl}
                        alt={`${lastPlayed.title} album cover`}
                        width={64}
                        height={64}
                      />
                    </a>
                  )}
                  <div>
                    <h3>
                      <a
                        href={lastPlayed.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {lastPlayed.title}
                      </a>
                    </h3>
                    <p>{lastPlayed.artist}</p>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{joys.music.fallbackTitle}</h3>
                  <p className="spotify-pending">
                    {joys.music.fallbackDescription}
                  </p>
                </>
              )}
            </div>
          </article>
        </aside>
      </div>

      <p className="joys-signoff handwritten" data-reveal>
        <span>{joys.signoff}</span>
        <a className="joys-old-website" href="https://prev.antran.dev">
          checkout my old website here
        </a>
      </p>
    </section>
  );
}
