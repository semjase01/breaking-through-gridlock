import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Free Chapter Preview",
  description:
    "Sign up to receive a free preview of Breaking Through Gridlock: The Power of Conversation in a Polarized World.",
};

export default function ChapterOne() {
  return (
    <section className="section">
      <div className="container">
        <div className="book-layout" style={{ alignItems: "center" }}>
          <div className="book-cover">
            <Image
              src="/images/book-cover.png"
              alt="Breaking Through Gridlock book cover"
              width={300}
              height={405}
            />
          </div>
          <div>
            <span className="eyebrow">Free Preview</span>
            <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
              Download the free chapter preview
            </h1>
            <p className="lede" style={{ marginTop: "16px" }}>
              Sign up to receive a free preview of Breaking Through Gridlock:
              The Power of Conversation in a Polarized World.
            </p>
            <ContactForm
              heading="Get Chapter One"
              intro="Enter your details and we'll send the free preview to your inbox."
              formType="chapter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
