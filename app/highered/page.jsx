import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Higher Education",
  description:
    "Empower your students to turn polarization into innovation. Free curriculum resources and institutional programs for transforming campus discourse.",
};

const packageContents = [
  "Suggested timelines and syllabi for four course formats (semester, quarter, one week, workshop)",
  "Discussion questions, worksheets, and assignments",
  "Pedagogy teaching tips from pilot faculty",
  "Slide decks",
  "Annotated bibliography",
  "Booklet of exercises from the Breaking Through Gridlock book",
  "Live-response (PollEverywhere) implementation guidance",
  "Student and faculty reflections and testimonials",
  "Supporting resources: books, articles, videos, and media",
];

const institutions = [
  "MIT Sloan", "Yale University", "Cornell University", "University of Michigan",
  "Cambridge University", "University of Pennsylvania", "Indiana University",
  "DePaul University", "Butler University", "University at Buffalo",
  "Fairleigh Dickinson University", "University of South Florida",
  "Fordham University", "UC Davis", "DHBW", "Byron Fellowship",
];

export default function HigherEd() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#e8a381" }}>Higher Education</span>
          <h1>Empower your students to turn polarization into innovation.</h1>
          <p className="lede">
            This semester, will you send your students out into the world to
            have powerful conversations?
          </p>
          <div className="actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0VqfE1hancZNCNoqMC3w2ggjkngF388EucpsOQnBusQLPgQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply for the Free Curriculum
            </a>
            <a href="#connect" className="btn btn-outline-light">Talk With Us</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">Institutional Programs</span>
              <h2>Transform campus discourse</h2>
              <p style={{ marginTop: "18px" }}>
                Our culture has become increasingly polarized around issues
                like climate change, diversity, and immigration. We design and
                implement institution-wide programs and interventions to
                transform campus discourse around polarizing issues.
              </p>
              <p style={{ marginTop: "14px" }}>
                We develop higher education programming for emerging leaders
                to create change while supporting personal and community
                flourishing.
              </p>
            </div>
            <div>
              <span className="eyebrow">Curriculum Resources</span>
              <h2>Free curriculum for educators</h2>
              <p style={{ marginTop: "18px" }}>
                We offer free higher education curriculum that empowers
                students to make progress in their relationships,
                organizations, and communities. Faculty at pilot programs
                including Cornell, the University of Michigan, MIT, and DePaul
                guide students through challenging conversations with
                structured reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <div className="quote">
            <blockquote>
              &ldquo;As an instructor, I am continually impressed by the
              boldness of students willing to engage in conversations on what
              are frequently uncomfortable or deeply personal issues with
              friends and loved ones.&rdquo;
            </blockquote>
            <cite>Dr. Jess Vogt, Assistant Professor, DePaul University</cite>
          </div>
          <p style={{ marginTop: "34px", color: "var(--muted)" }}>
            &ldquo;While I teach Breaking Through Gridlock, I encourage my
            students to take on any avoided, stalled, or frustrating
            conversation in their lives around something that&rsquo;s most
            meaningful to them. The topics of these conversations range
            greatly, from talking with a roommate about keeping a clean
            apartment, to discussing politics or the Black Lives Matter
            movement with family, even tackling disagreements about how to
            best raise their own child.&rdquo;
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">For Educators</span>
              <h2>What you receive</h2>
              <p style={{ marginTop: "18px" }}>
                Qualified educators and community organizers receive our
                Curriculum Resources Package, a free coaching conversation
                for classroom integration, and a free exam copy of the
                Breaking Through Gridlock book via publisher Berrett-Koehler.
              </p>
              <div style={{ marginTop: "26px" }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0VqfE1hancZNCNoqMC3w2ggjkngF388EucpsOQnBusQLPgQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Apply Here
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "6px" }}>Curriculum Resource Package includes:</h3>
              <ul className="checklist">
                {packageContents.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">In Use At</span>
            <h2>Taught and piloted at leading institutions</h2>
          </div>
          <div className="logo-strip">
            {institutions.map((i) => <span key={i}>{i}</span>)}
          </div>
        </div>
      </section>

      <section className="section anchor-offset" id="connect">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Get in Touch</span>
            <h2>Bring Breaking Through Gridlock to your campus</h2>
          </div>
          <ContactForm defaultInterest="Teach this at my higher education institution" />
        </div>
      </section>
    </>
  );
}
