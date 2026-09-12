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
            <a href="https://humanpartners.typeform.com/btgbot" target="_blank" rel="noopener noreferrer">Conversation Generator</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="https://www.facebook.com/groups/btgcommunity/" target="_blank" rel="noopener noreferrer">Facebook Community</a>
            <a href="https://www.facebook.com/groups/btgeducators/" target="_blank" rel="noopener noreferrer">Educators Group</a>
            <a href="https://twitter.com/hashtag/BreakingGridlock" target="_blank" rel="noopener noreferrer">#BreakingGridlock</a>
          </div>
        </div>
        <div className="legal">
          © {new Date().getFullYear()} Breaking Through Gridlock
        </div>
      </div>
    </footer>
  );
}
