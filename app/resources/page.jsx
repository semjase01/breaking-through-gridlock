import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Resources",
  description:
    "The Breaking Through Gridlock book, videos, and resources for #BreakingGridlock.",
};

const endorsements = [
  {
    quote:
      "Our country's future depends on our ability to reach beyond our echo chambers. Jay and Grant guide us through starting the conversations so crucial to our democracy.",
    cite: "Van Jones, CNN Cohost, Author, and Activist",
  },
  {
    quote:
      "A field manual for change agents on how to build bridges across differences and move from talk to action.",
    cite: "Adam Grant, New York Times bestselling author of Originals and Give and Take",
  },
  {
    quote:
      "This book is not for the faint-hearted, but if you truly want to change the world, it gives us the tools and the inspiration to do so.",
    cite: "Gwen Ruta, Senior Vice President, Climate and Energy, Environmental Defense Fund",
  },
  {
    quote:
      "Whether you're hoping to shift your company, your community, or even yourself, Jay and Grant have produced an accessible and practical guide that will make you chuckle with recognition, then motivate you to get to work.",
    cite: "Christine Bader, Author of The Evolution of a Corporate Idealist",
  },
  {
    quote:
      "In this savvy and highly practical book, Gabriel Grant and Jason Jay offer a way forward for groups that get stuck in seemingly hopeless, zero-sum conflicts. It should be required reading not only for corporate offices but also for congregations who preach unity and peace, but don't always know how best to achieve them. And in a period of real polarization and deep division in our national culture, this is a book for our time.",
    cite: "The Most Rev. Michael B. Curry, XXVII, Presiding Bishop of The Episcopal Church",
  },
  {
    quote:
      "Conversations are the most important leverage point for leaders and change makers. Jason Jay and Gabriel Grant offer critical insights and tools that will help you craft better conversations and thus a better world.",
    cite: "Otto Scharmer, Founder, Presencing Institute, Author of Theory U",
  },
];

export default function Resources() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#e8a381" }}>Resources</span>
          <h1>Tools and stories for #BreakingGridlock</h1>
          <p className="lede">
            The book, videos, and tools for transforming stuck conversations.
          </p>
          <div className="actions">
            <a href="#book" className="btn btn-primary">The Book</a>
            <a href="#video" className="btn btn-outline-light">Videos</a>
          </div>
        </div>
      </section>

      <section className="section anchor-offset" id="book">
        <div className="container">
          <div className="book-layout">
            <div className="book-cover">
              <Image
                src="/images/book-cover.png"
                alt="Breaking Through Gridlock book cover"
                width={300}
                height={405}
              />
              <div className="buy-row" style={{ flexDirection: "column", gap: "10px" }}>
                <a
                  href="https://www.amazon.com/Breaking-Through-Gridlock-Conversation-Polarized/dp/1626568952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ textAlign: "center" }}
                >
                  Purchase on Amazon
                </a>
                <a
                  href="https://www.barnesandnoble.com/w/breaking-through-gridlock-jason-jay/1125060811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "center" }}
                >
                  Barnes &amp; Noble
                </a>
                <a
                  href="https://www.indiebound.org/search/book?keys=breaking+through+gridlock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ textAlign: "center" }}
                >
                  IndieBound
                </a>
                <Link href="/chapter-one" className="btn btn-outline" style={{ textAlign: "center" }}>
                  Get the Free Chapter
                </Link>
              </div>
            </div>
            <div>
              <span className="eyebrow">The Book</span>
              <h2>Breaking Through Gridlock</h2>
              <p style={{ marginTop: "6px", color: "var(--muted)", fontWeight: 600 }}>
                The Power of Conversation in a Polarized World
              </p>
              <p style={{ marginTop: "10px", color: "var(--terracotta-dark)", fontWeight: 700, letterSpacing: "0.04em" }}>
                Over 150,000 copies sold
              </p>
              <p style={{ marginTop: "18px" }}>
                In <em>Breaking Through Gridlock</em>, authors Jason Jay and
                Gabriel Grant share clear-cut and actionable pathways for
                having difficult conversations about the things that matter.
                The well-tested methods advocated in this book can be applied
                to any conversation where change is needed. With proven
                exercises and rich examples, this interactive &lsquo;field
                guide&rsquo; walks readers through a process of transforming
                paralysis and effecting positive change.
              </p>
              <div className="testimonial-grid" style={{ marginTop: "30px", gridTemplateColumns: "1fr" }}>
                {endorsements.map((e) => (
                  <div key={e.cite} className="testimonial">
                    <p>&ldquo;{e.quote}&rdquo;</p>
                    <cite>{e.cite}</cite>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section anchor-offset" id="video">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Videos</span>
            <h2>Watch the ideas in action</h2>
          </div>
          <div className="video-grid">
            <div>
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/giBLRbVC0p4"
                  title="How to keep conversation alive in a polarized world — TEDxBocaRaton"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="video-caption">
                <strong>How to keep conversation alive in a polarized world</strong>
                Jason Jay at TEDxBocaRaton, October 2018
              </p>
            </div>
            <div>
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/IK33gLsE1cE"
                  title="Breaking Through Gridlock — MIT Sloan School of Management"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="video-caption">
                <strong>Breaking Through Gridlock: The Power of Conversation in a Polarized World</strong>
                Jason Jay at the MIT Sloan School of Management
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight section-alt">
        <div className="container">
          <div className="logo-strip" style={{ marginTop: 0 }}>
            <span>In use at: University of Michigan</span>
            <span>MIT Sloan School of Management</span>
            <span>Cornell University</span>
            <span>Cambridge University</span>
            <span>Yale Center for Business and the Environment</span>
            <span>As seen at: Sustainable Brands</span>
            <span>CECP</span>
            <span>GreenBiz</span>
            <span>Academy of Management</span>
          </div>
        </div>
      </section>

      <section className="section anchor-offset" id="connect">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Get in Touch</span>
            <h2>Connect with us</h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
