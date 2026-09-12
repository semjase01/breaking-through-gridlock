import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div style={{ maxWidth: "300px" }}>
            <h4>Breaking Through Gridlock</h4>
            <p style={{ fontSize: "0.92rem" }}>
              The Power of Conversation in a Polarized World, by Jason Jay and
              Gabriel Grant.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/organizations">Organizations</Link>
            <Link href="/highered">Higher Education</Link>
            <Link href="/speaking-consulting">Speaking &amp; Workshops</Link>
            <Link href="/resources">Resources</Link>
          </div>
          <div>
            <h4>The Book</h4>
            <Link href="/resources#book">About the Book</Link>
            <Link href="/chapter-one">Free Chapter Preview</Link>
            <a href="https://www.amazon.com/Breaking-Through-Gridlock-Conversation-Polarized/dp/1626568952" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
          </div>
        </div>
        <div className="legal">
          © {new Date().getFullYear()} Breaking Through Gridlock
        </div>
      </div>
    </footer>
  );
}
