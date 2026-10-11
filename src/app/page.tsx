import "./portrait-annotations.css";
import { Arrow, JoyIcon, Envelope } from "@/components/illustrations";
import { FlowerCutoutDefinitions, FlowerInk, QuynhFlower } from "@/components/quynh-flower";
import { FallingFlower } from "@/components/falling-flower";
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
              <svg
                className="portrait-image"
                viewBox="0 0 1232 1277"
                preserveAspectRatio="xMinYMid meet"
                role="group"
                aria-label="Portrait details: nón lá, áo dài, and hoa quỳnh"
              >
                <defs>
                  <FlowerCutoutDefinitions />
                  <filter id="portrait-thin-strokes" filterUnits="userSpaceOnUse" x="0" y="0" width="1232" height="1277">
                    <feMorphology in="SourceAlpha" operator="erode" radius="1.35" result="thin" />
                    <feComponentTransfer in="SourceAlpha" result="fine">
                      <feFuncA type="linear" slope="0.12" />
                    </feComponentTransfer>
                    <feMerge><feMergeNode in="fine" /><feMergeNode in="thin" /></feMerge>
                  </filter>
                  <mask id="portrait-ink" maskUnits="userSpaceOnUse" x="0" y="0" width="1232" height="1277" style={{ maskType: "alpha" }}>
                    <image href="/images/portrait-proportions-v14.png" width="1232" height="1277" filter="url(#portrait-thin-strokes)" />
                  </mask>
                </defs>
                <g mask="url(#portrait-without-blossom)" role="img" aria-label="A blue ink doodle of An wearing an áo dài and a conical hat, holding epiphyllum flowers.">
                  <rect width="1232" height="1277" fill="var(--ink)" mask="url(#portrait-ink)" />
                </g>
                <g className="portrait-attached-flower" aria-hidden="true"><FlowerInk /></g>
                {/* All hit areas, labels, and arrow tips share the artwork's coordinates. */}
                <g className="portrait-detail" tabIndex={0} role="img" aria-label="Nón lá — conical hat">
                  <path className="portrait-hotspot" d="M420 20 850 150Q860 180 785 220L320 420Q265 445 270 400Z" />
                  <g className="portrait-callout" aria-hidden="true">
                    <text x="105" y="115">nón lá</text>
                    <path className="portrait-callout-arrow" d="M235 135Q298 145 334 232m-20-9 20 9 2-22" />
                  </g>
                </g>
                <g className="portrait-detail" tabIndex={0} role="img" aria-label="Áo dài — dress">
                  <path className="portrait-hotspot" d="M535 430Q590 465 655 475Q785 490 755 665L725 710 680 805 785 970 770 1248 260 1248 370 920Q245 920 260 810L285 700Q395 780 480 728L515 575Z" />
                  <g className="portrait-callout" aria-hidden="true">
                    <text x="70" y="975">áo dài</text>
                    <path className="portrait-callout-arrow" d="M205 995Q260 1030 336 1012m-19-11 19 11-12 18" />
                  </g>
                </g>
                <g className="portrait-detail" tabIndex={0} role="img" aria-label="Hoa quỳnh — epiphyllum flowers">
                  <path className="portrait-hotspot" d="M855 470 910 545 958 620 1020 550 1110 620 1198 720 1150 790 1215 865 1190 1005 1060 1065 955 1025 900 975 795 935 670 845 670 720 750 635 810 670Z" />
                  <g className="portrait-callout" aria-hidden="true">
                    <text className="portrait-callout-flower-label" x="1030" y="1190" textAnchor="middle">hoa quỳnh</text>
                    <path className="portrait-callout-arrow" d="M1030 1135Q1135 1110 1107 1054m-6 22 6-22 21 10" />
                  </g>
                </g>
              </svg>
            </figure>
            <div className="hero-copy"><p className="eyebrow">A personal notebook on the internet</p><h1 id="intro-title">A little corner<br />of my world.</h1><p className="intro-text">Hello, I’m An. This is a home for the things I make, the ideas I’m exploring, and the small details worth keeping.</p><a className="text-link" href="#work">Take a look around <Arrow /></a></div>
          </div>
          <div className="hero-footer"><p className="handwritten">A few things made, a few things noticed.</p><a href="#about" className="eyebrow wander-link">Keep wandering <Arrow down /></a></div>
        </section>
        <section id="about" className="about section" aria-labelledby="about-title">
          <div className="section-aside"><p className="eyebrow">01 — A little about me</p><div className="flower-landing" aria-hidden="true"><QuynhFlower /></div></div>
          <div className="about-content"><h2 id="about-title">More than a name<br />at the top of a page.</h2><div className="about-columns"><p>{portfolio.about}</p><p>Here, I’m gathering work, unfinished thoughts, and little discoveries along the way. Think of it as an open notebook — a place to share what feels meaningful.</p></div><p className="handwritten about-signoff">Thanks for stopping by, An</p></div>
        </section>
        <section id="work" className="work section" aria-labelledby="work-title"><p className="eyebrow">02 — Things I’ve been making</p><div className="section-heading"><h2 id="work-title">Selected work.</h2><p>A few pages from my notebook.<br />Each one with a story of its own.</p></div><ProjectGallery /><p className="handwritten work-note">Always a work in progress. That’s the lovely part.</p></section>
        <section id="joys" className="joys section" aria-labelledby="joys-title"><p className="eyebrow">03 — Outside the work</p><h2 id="joys-title">Life’s little joys.</h2><div className="joy-grid">{portfolio.joys.map(joy => <article className="joy" key={joy.title}><JoyIcon kind={joy.icon} /><h3>{joy.title}</h3><p>{joy.description}</p></article>)}</div></section>
        <section id="contact" className="contact section" aria-labelledby="contact-title"><div className="contact-copy"><p className="eyebrow">04 — A note to say hello</p><h2 id="contact-title">Good things start<br />with a hello.</h2><p>Have an idea to share, a question to ask, or a story to tell? I’d love to hear from you.</p><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email}<Arrow /></a></div><figure className="envelope-figure"><Envelope /><figcaption className="handwritten">My inbox is a good place to begin.</figcaption></figure></section>
      </main>
      <FallingFlower />
      <footer className="site-footer"><div><a className="signature" href="#top">{portfolio.name}</a><p>A personal notebook. Made with care.</p></div><a className="text-link" href="#top">Back to top <Arrow /></a></footer>
    </div>
  );
}
