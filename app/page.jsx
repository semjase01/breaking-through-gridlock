import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const pillars = [
  {
    href: "/organizations",
    kicker: "Transforming Organizations",
    title: "Turn viewpoint diversity into creativity",
    body: "Viewpoint diversity can be a source of polarization or creativity. We help leaders harness tensions inherent in purpose-driven work to grow people and organizations.",
  },
  {
    href: "/highered",
    kicker: "Higher Education",
    title: "Empower students to advocate across divides",
    body: "Today's campus is a volatile melting pot of contentious issues. We help faculty and administrators empower students to advocate across divides.",
  },
  {
    href: "/resources",
    kicker: "Beyond the Book",
    title: "Tools and stories for #BreakingGridlock",
    body: "Struggling to make progress on the issues you care about? Get inspired and build your skills using our tools and stories about #BreakingGridlock in action.",
  },
];

const team = [
  {
    img: "/images/jason-jay.png",
    role: "Author",
    name: "Jason Jay",
    short:
      "Senior lecturer and director of the Sustainability Initiative at the MIT Sloan School of Management.",
    bio: `Jason grew up in Boulder, Colorado, where he lived in awe of snowy mountains and watched his parents build a business that improved people's lives. He moved to Boston and fell in love with his wife, Alaka, and life in a coastal city. Alaka's family in India made him their own and helped him see the world as fundamentally interconnected. He grew to understand how all these places he loves are fragile and committed himself to seeing them flourish for his children, Vikram and Uma, to enjoy with their children.

Today, Jason is a senior lecturer and the director of the Sustainability Initiative at the MIT Sloan School of Management. He teaches courses on strategy and innovation for sustainable business to hundreds of leaders every year. Through his writing, teaching, and community building, he empowers business leaders to help their organizations thrive while tackling the tough social and environmental challenges of our time. Before he began teaching, he ran an Internet start-up, traveled around the world, taught kindergarten, received a bachelor's degree in psychology and a master's in education from Harvard University, worked as a consultant with Dialogos International, and earned a doctorate in organization studies from MIT.`,
  },
  {
    img: "/images/gabriel-grant.png",
    role: "Author",
    name: "Gabriel Grant",
    short:
      "Founder of Human Partners and cofounder of Byron Fellowship Educational Foundation. PhD in Leadership and Sustainability from Yale.",
    bio: `Gabriel is the founder of Human Partners, where he helps senior level executives craft cultures of purpose, trust, and engagement. He is also a cofounder of Byron Fellowship Educational Foundation. His consulting, research, and coaching focuses on how people and organizations flourish within the pursuit of societal and planetary flourishing. Gabriel holds a PhD in Leadership and Sustainability from Yale University, an MS in Ecological Systems Engineering and a BS in Physics from Purdue University.

His professional clients represent a diversity of sectors including social entrepreneurship, transportation, energy, information and communication technology, healthcare, commercial and residential development, municipalities, and cultural institutions. In his volunteer time, he has mentored over one hundred social entrepreneurs from around the globe. Gabriel's pedagogy for activating and supporting purpose-driven leaders developed at Yale is also used in universities like MIT, Cornell, and Cambridge. He lives in Seattle with his wife, Sarah, and daughters, Ariana and Madeleine.`,
  },
  {
    img: "/images/laura-yates.png",
    role: "Project Manager",
    name: "Laura Yates",
    short:
      "Implements the BTG methodology in higher education classrooms and community groups.",
    bio: `Laura Yates serves as Project Manager for the Breaking Through Gridlock initiative, focusing on implementing the BTG methodology in higher education classrooms and community groups. Laura delivers Breaking Through Gridlock workshops, develops curriculum resources to support educators in incorporating the BTG methodology in their classes, and interfaces with faculty partners.

Laura graduated from Indiana University's School of Public and Environmental Affairs with a Master of Science in Environmental Sciences and a Master of Public Affairs, concentrating in Sustainable Development and Policy Analysis. She holds a BS in Economics and a secondary major in Earth, Environment and Global Sustainability from Bentley University.`,
  },
];

const news = [
  {
    href: "http://mitsloan.mit.edu/ideas-made-to-matter/use-transformative-contrasting-to-guide-your-ideas-through-gridlock",
    outlet: "MIT Sloan",
    title: "Use 'transformative contrasting' to guide your ideas through gridlock",
    quote: "Competing interests are not always intractable. Here's a four-step plan to breaking the gridlock in your work.",
  },
  {
    href: "https://www.fastcompany.com/90242368/this-is-how-you-can-disagree-with-senior-management-and-keep-your-job",
    outlet: "Fast Company",
    title: "This is how you can disagree with senior management and keep your job",
    quote: "When it comes to presenting your arguments the right way, you first need to decide if you're disagreeing for the right reasons.",
  },
  {
    href: "https://www.technologyreview.com/s/612313/beyond-polarization/",
    outlet: "MIT Technology Review",
    title: "Beyond polarization",
    quote: "Moving past gridlock in a polarized world.",
  },
  {
    href: "https://www.psychologytoday.com/blog/breaking-gridlock/201711/holiday-conversations-in-polarized-world",
    outlet: "Psychology Today",
    title: "Holiday conversations in a polarized world",
    quote: "How to keep the conversation alive when the family gathers.",
  },
  {
    href: "https://www.psychologytoday.com/blog/breaking-gridlock/201710/how-wield-the-power-vulnerability",
    outlet: "Psychology Today",
    title: "How to wield the power of vulnerability",
    quote: "Vulnerability as a doorway to more productive conversations.",
  },
  {
    href: "http://mitsloan.mit.edu/newsroom/articles/a-toolset-for-getting-stuck-conversations-back-on-track/",
    outlet: "MIT Sloan",
    title: "A toolset for getting stuck conversations back on track",
    quote: "Practical methods for conversations that have stalled.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow" style={{ color: "var(--orange-tint)" }}>
              The Power of Conversation in a Polarized World · Over 150,000 copies sold
            </span>
            <h1>Break through your most challenging conversations.</h1>
            <p className="lede">
              Well-meaning attempts to effect change too often get stuck in the
              noisy traffic jam of competing ideas, priorities, and ideologies.
              We help people, organizations, and campuses transform paralysis
              into positive change.
            </p>
            <div className="actions">
              <Link href="/resources#book" className="btn btn-primary">Get the Book</Link>
              <Link href="/#connect" className="btn btn-outline-light">Work With Us</Link>
            </div>
          </div>
          <div className="hero-book">
            <Link href="/resources#book" aria-label="Breaking Through Gridlock, the book">
              <Image
                src="/images/book-cover.png"
                alt="Breaking Through Gridlock: The Power of Conversation in a Polarized World, by Jason Jay and Gabriel Grant"
                width={340}
                height={459}
                priority
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ marginTop: 0 }}>
            {pillars.map((p) => (
              <Link key={p.href} href={p.href} className="card">
                <span className="kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="quote">
            <blockquote>
              &ldquo;We need the creativity that can be harnessed from competing
              perspectives to craft a thriving organization and a thriving
              society. This book gives people the tools to take that on.&rdquo;
            </blockquote>
            <cite>John Mackey, CEO, Whole Foods Market</cite>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">About</span>
              <h2>What happens when you talk with someone who doesn&rsquo;t already agree with you?</h2>
              <p style={{ marginTop: "18px" }}>
                Think about the last time you tried to talk with someone about
                political, social, or environmental issues who didn&rsquo;t
                already agree with you. How well did it go?
              </p>
              <p style={{ marginTop: "14px" }}>
                With <em>Breaking Through Gridlock</em>, Jason Jay and Gabriel
                Grant share clear-cut and actionable pathways for having these
                hard conversations. The well-tested methods advocated in this
                book can be applied to any conversation where change is needed.
                With proven exercises and rich examples, this interactive
                &lsquo;field guide&rsquo; walks readers through a process of
                transforming paralysis and effecting positive change.
              </p>
              <div style={{ marginTop: "26px" }}>
                <Link href="/resources#book" className="btn btn-outline">Explore the Book</Link>
              </div>
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
                <strong>Breaking Through Gridlock</strong>
                Jason Jay at the MIT Sloan School of Management
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="team">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">Our Team</span>
            <h2>The people behind the work</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-member">
                <Image src={m.img} alt={m.name} width={190} height={190} />
                <div className="role">{m.role}</div>
                <h3>{m.name}</h3>
                <details>
                  <summary>Read bio</summary>
                  {m.bio.split("\n\n").map((para, i) => (
                    <p key={i} style={{ marginBottom: "10px" }}>{para}</p>
                  ))}
                </details>
                <p style={{ textAlign: "center", fontStyle: "italic" }}>{m.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">News &amp; Media</span>
            <h2>Articles, publications &amp; press</h2>
          </div>
          <div className="news-grid">
            {news.map((n) => (
              <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer" className="news-card">
                <span className="outlet">{n.outlet}</span>
                <h3>{n.title}</h3>
                <p>&ldquo;{n.quote}&rdquo;</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt anchor-offset" id="connect">
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
