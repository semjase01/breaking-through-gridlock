import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://breakingthroughgridlock.com"),
  title: {
    default: "Breaking Through Gridlock — The Power of Conversation in a Polarized World",
    template: "%s — Breaking Through Gridlock",
  },
  description:
    "Break through your most challenging conversations. Jason Jay and Gabriel Grant share actionable pathways for having hard conversations about the things that matter.",
  openGraph: {
    title: "Breaking Through Gridlock",
    description:
      "The Power of Conversation in a Polarized World — by Jason Jay and Gabriel Grant.",
    images: ["/images/book-cover.png"],
  },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
