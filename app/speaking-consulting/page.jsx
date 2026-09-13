import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Speaking & Workshops",
  description:
    "Breaking Through Gridlock workshops and speaking for leaders, activists, and community-builders. Sessions from 90 minutes to multi-day engagements, 10 to 500 participants.",
};

const testimonials = [
  {
    quote:
      "I had gotten stuck with a VP of my company, as I repeatedly proposed a change of course for a major project. In the workshop, I saw that I had been arrogant and overbearing in these conversations, and decided to try out something new. Literally the next day, a bargain was struck.",
    cite: "Brent Segal, R&D Executive, Lockheed Martin",
  },
  {
    quote:
      "It turns out that the best way to improve conversations about sustainability (or anything else) is to go deeper. Not deeper into the subject matter, but deeper into yourself so that you better understand how to overcome your own personal barriers to better communication. These insights are already helping me at work and at home.",
    cite: "Scot Case",
  },
  {
    quote:
      "This workshop provides key tools to address difficult conversations in work as well as life.",
    cite: "Jason Metnick, Senior Vice President, Sustainable Forestry Initiative",
  },
  {
    quote:
      "I learned the importance and power of planting a seed in each and every conversation.",
    cite: "Roman Smith, Director, Sustainability Operations, AT&T",
  },
  {
    quote:
      "The reality is that sustainability is all about change, and making change creates difficult conversations. This work provides a positive, open and honest way to have these difficult conversations that both maximizes effectiveness and strengthens relationships.",
    cite: "Ali Ahmed, Senior Manager, Global Energy Management and Sustainability, Cisco Systems",
  },
  {
    quote:
      "This was a stellar workshop for our constituents who are professionals in retail and consumer products companies. Participants powerfully reflected on how they think and talk about sustainability, and found ways to be more effective in their roles.",
    cite: "Adam Siegel, VP, Sustainability & Retail Operations, Retail Industry Leaders Association",
  },
];

export default function SpeakingConsulting() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--orange-tint)" }}>Speaking &amp; Workshops</span>
          <h1>Communicate powerfully with anyone about what you value.</h1>
          <p className="lede">
            Our introductory Breaking Through Gridlock workshop is designed
            for leaders, activists, and community-builders who want to develop
            the capacity to communicate powerfully with anyone about what they
            value.
          </p>
          <div className="actions">
            <a href="#connect" className="btn btn-primary">Book a Workshop</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">The Workshop</span>
          <h2>An inquiry into your own conversations</h2>
          <p style={{ marginTop: "18px" }}>
            This workshop invites participants into an inquiry about their own
            conversations, their own moments of inauthenticity, and the common
            pitfalls we all encounter in pursuit of a better world. During the
            session, participants develop the capacity to transform the
            conversations that matter to them, and explore the possibility of
            advancing this approach in their organizations, and as part of
            larger movements.
          </p>
          <p style={{ marginTop: "14px" }}>
            Through changing the conversations closest to us, we create a
            better world right now: strengthening our immediate relationships
            within our families, communities, and organizations, while
            experiencing our own sense of purpose and accomplishment. If we
            all develop the capacity to have productive conversations about
            the things that matter to us, the possibility exists to solve big
            problems, and to create a better future together.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card-grid" style={{ marginTop: 0 }}>
            <div className="card">
              <span className="kicker">Format</span>
              <h3>90 minutes to multiple days</h3>
              <p>
                The workshop works well as a three-hour session. The minimum
                time for an impactful workshop is 90 minutes; multi-day
                engagements create a structure for several iterations of
                action and reflection.
              </p>
            </div>
            <div className="card">
              <span className="kicker">Audience</span>
              <h3>10 to 500 participants</h3>
              <p>
                Using live-response technology, workshops of all sizes feel
                like small, intimate discussions. Shorter talks offer people
                insights into what could be possible.
              </p>
            </div>
            <div className="card">
              <span className="kicker">Consulting</span>
              <h3>Custom engagements</h3>
              <p>
                We run workshops and consult for companies, organizations,
                communities, and investor groups interested in changing
                conversations to effect positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Participant Experiences</span>
            <h2>What participants say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div key={t.cite} className="testimonial">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <cite>{t.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt anchor-offset" id="connect">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Get in Touch</span>
            <h2>Book the authors for speaking or consulting</h2>
          </div>
          <ContactForm defaultInterest="Book the authors for speaking or consulting" />
        </div>
      </section>
    </>
  );
}
