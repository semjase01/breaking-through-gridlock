import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Organizations",
  description:
    "We help leaders harness the tensions in purpose-driven work. Consulting, workshops, and speaking for impact investors, purpose-driven businesses, and NGOs.",
};

const audiences = [
  {
    kicker: "Impact Investors",
    body: "Family offices and investment managers wrestle with the tension between social and financial return. We help diverse voices identify and achieve a common purpose.",
  },
  {
    kicker: "Purpose-Driven Businesses",
    body: "Higher purpose can be inspiring, and it can lead to frustration and burnout. We help people and organizations flourish within the pursuit of a flourishing world.",
  },
  {
    kicker: "NGOs & Advocacy Groups",
    body: "Social change requires massive engagement, yet advocates find themselves preaching to the choir. We help people and organizations effect change across divides.",
  },
];

const testimonials = [
  {
    quote:
      "We need the creativity that can be harnessed from competing perspectives to craft a thriving organization and a thriving society.",
    cite: "John Mackey, CEO, Whole Foods Market",
  },
  {
    quote:
      "For our program's community of sustainability and CSR leaders, this is an invaluable and actionable communication skills-building training.",
    cite: "Scott Wood, Senior Manager, EDF Climate Corps",
  },
  {
    quote:
      "If we want our investments to be a force for good, we have to make our way through a set of debates that too often get stuck: impact vs return, short vs long term, business vs. government as the solution. This book gives people tools to transform these conversations and build alignment.",
    cite: "James Gifford, Senior Impact Investing Strategist, UBS",
  },
  {
    quote:
      "This exceeded my highest expectations. The work gave me profound insights around my professional goals and challenged my personal beliefs.",
    cite: "Froylan Hernandez-Ruiz, Senior Attorney, The Nature Conservancy",
  },
];

const partners = [
  "Whole Foods Market", "Bose", "PwC", "Sustainable Brands", "GreenBiz",
  "Retail Industry Leaders Association", "SGP Partnership", "Grantham Foundation",
];

export default function Organizations() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#e8a381" }}>Organizations</span>
          <h1>Harness the tensions in purpose-driven work.</h1>
          <p className="lede">
            We combine years of consulting experience with the latest research
            to unlock employee flourishing, engagement, creativity, and
            innovation.
          </p>
          <div className="actions">
            <Link href="#connect" className="btn btn-primary">Start a Conversation</Link>
            <Link href="/speaking-consulting" className="btn btn-outline-light">Workshops &amp; Speaking</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ marginTop: 0 }}>
            {audiences.map((a) => (
              <div key={a.kicker} className="card">
                <span className="kicker">{a.kicker}</span>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <span className="eyebrow">Sound Familiar?</span>
          <h2>The pursuit of purpose should energize your organization. Does it?</h2>
          <p style={{ marginTop: "18px" }}>
            It is often said that the pursuit of purpose can generate
            tremendous benefits for the organization, yet our experience is
            often the contrary.
          </p>
          <ul className="checklist" style={{ marginTop: "24px" }}>
            <li>
              Do you find that the pursuit of purpose appears relegated to a
              smaller number of sometimes frustrated individuals, clamoring for
              change and bumping up against others who seem indifferent or
              opposed?
            </li>
            <li>
              Do you find your company oscillating between commitments to
              social responsibility and reaffirming the bottom line?
            </li>
            <li>
              Are you noticing other companies developing more creative
              innovations for achieving environmental performance than you or
              your peers believe is possible in your organization or your
              industry?
            </li>
            <li>
              Do you find yourself making positive claims about your
              organization to which others, or even yourself, respond with
              skepticism or cynicism?
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">Organizational Consulting</span>
              <h2>Custom engagements, from workshops to transformation</h2>
              <p style={{ marginTop: "18px" }}>
                We help people create authentic alignment between personal,
                organizational, and societal ambitions that give rise to
                powerful stakeholder communications, a high-involvement
                culture, and enduring mission-driven organizations.
              </p>
              <p style={{ marginTop: "14px" }}>
                Organizational engagements are custom tailored to your needs
                and range from a half-day workshop to a several-day
                transformational strategic planning, culture, and stakeholder
                communication design session.
              </p>
            </div>
            <div>
              <span className="eyebrow">Workshops &amp; Speaking</span>
              <h2>From 10 to 500 participants</h2>
              <p style={{ marginTop: "18px" }}>
                Our introductory Breaking Through Gridlock workshop works well
                as a three-hour session, with anywhere from 10 to 500
                participants. The minimum time required for an impactful
                workshop is 90 minutes, and engagements over multiple days
                create a structure for several iterations of action and
                reflection.
              </p>
              <p style={{ marginTop: "14px" }}>
                Using live-response technology, workshops of all sizes feel
                like small, intimate discussions.{" "}
                <Link href="/speaking-consulting">Learn more →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">What Leaders Say</span>
            <h2>Trusted by purpose-driven leaders</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div key={t.cite} className="testimonial">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <cite>{t.cite}</cite>
              </div>
            ))}
          </div>
          <div className="logo-strip">
            {partners.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
      </section>

      <section className="section anchor-offset" id="connect">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Get in Touch</span>
            <h2>Explore how we can contribute to the flourishing of your organization</h2>
          </div>
          <ContactForm defaultInterest="Use this in my company or organization" />
        </div>
      </section>
    </>
  );
}
