"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/organizations", label: "Organizations" },
  { href: "/highered", label: "Higher Education" },
  { href: "/speaking-consulting", label: "Speaking & Workshops" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Breaking Through Gridlock" width={61} height={44} />
          <span>
            Breaking Through
            <br />
            Gridlock
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/#connect" className="cta">Connect With Us</Link>
        </nav>
      </div>
    </header>
  );
}
