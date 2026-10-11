import Image from "next/image";
import { Arrow, Sprig, JoyIcon, Envelope } from "@/components/illustrations";
import { ProjectGallery } from "@/components/project-gallery";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  return (
    <div className="notebook" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="signature" href="#top" aria-label="An Tran — back to top">{portfolio.name}</a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#joys">Little joys</a><a href="#contact" className="nav-contact">Say hello <Arrow /></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-main">
            <figure className="portrait">
              <Image src="/images/portrait-line-sketch.png" alt="A delicate blue ink sketch of a woman in an áo dài and conical hat, holding a bouquet of lilies." width={1234} height={1274} sizes="(max-width: 700px) 330px, (max-width: 1260px) 45vw, 580px" priority className="portrait-image" />
              <figcaption><svg viewBox="0 0 68 38" aria-hidden="true"><path d="M65 3C48 30 24 32 6 21m0 0 5 12M6 21l14 1" /></svg><span>A moment, in blue</span></figcaption>
            </figure>
            <div className="hero-copy"><p className="eyebrow">A personal notebook on the internet</p><h1 id="intro-title">A little corner<br />of my world.</h1><p className="intro-text">Hello, I’m An. This is a home for the things I make, the ideas I’m exploring, and the small details worth keeping.</p><a className="text-link" href="#work">Take a look around <Arrow /></a></div>
          </div>
          <div className="hero-footer"><p className="handwritten">A few things made, a few things noticed.</p><a href="#about" className="eyebrow wander-link">Keep wandering <Arrow down /></a></div>
        </section>
        <section id="about" className="about section" aria-labelledby="about-title">
          <div className="section-aside"><p className="eyebrow">01 — A little about me</p><Sprig className="about-sprig" /></div>
          <div className="about-content"><h2 id="about-title">More than a name<br />at the top of a page.</h2><div className="about-columns"><p>{portfolio.about}</p><p>Here, I’m gathering work, unfinished thoughts, and little discoveries along the way. Think of it as an open notebook — a place to share what feels meaningful.</p></div><p className="handwritten about-signoff">Thanks for stopping by, An</p></div>
        </section>
        <section id="work" className="work section" aria-labelledby="work-title"><p className="eyebrow">02 — Things I’ve been making</p><div className="section-heading"><h2 id="work-title">Selected work.</h2><p>A few pages from my notebook.<br />Each one with a story of its own.</p></div><ProjectGallery /><p className="handwritten work-note">Always a work in progress. That’s the lovely part.</p></section>
        <section id="joys" className="joys section" aria-labelledby="joys-title"><p className="eyebrow">03 — Outside the work</p><h2 id="joys-title">Life’s little joys.</h2><div className="joy-grid">{portfolio.joys.map(joy => <article className="joy" key={joy.title}><JoyIcon kind={joy.icon} /><h3>{joy.title}</h3><p>{joy.description}</p></article>)}</div></section>
        <section id="contact" className="contact section" aria-labelledby="contact-title"><div className="contact-copy"><p className="eyebrow">04 — A note to say hello</p><h2 id="contact-title">Good things start<br />with a hello.</h2><p>Have an idea to share, a question to ask, or a story to tell? I’d love to hear from you.</p><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email}<Arrow /></a></div><figure className="envelope-figure"><Envelope /><figcaption className="handwritten">My inbox is a good place to begin.</figcaption></figure></section>
      </main>
      <footer className="site-footer"><div><a className="signature" href="#top">{portfolio.name}</a><p>A personal notebook. Made with care.</p></div><a className="text-link" href="#top">Back to top <Arrow /></a></footer>
    </div>
  );
}
