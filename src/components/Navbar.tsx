"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { label: "Find jobs",      href: "#jobs" },
  { label: "Hire talent",    href: "#hire" },
  { label: "Pitch academy",  href: "#academy" },
  { label: "Job wins",       href: "#wins" },
  { label: "Salary index",   href: "#salary" },
  { label: "Providers",      href: "#providers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(13,18,96,0.94)",
        backdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--bd)",
      }}
    >
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: 68,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="/logo.jpg"
            alt="Web3 Jobs HQ"
            width={38} height={38}
            style={{ borderRadius: "50%", border: "1.5px solid var(--w30)", objectFit: "cover" }}
          />
          <span style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontSize: 16, fontWeight: 800, letterSpacing: "0.04em", color: "#fff"
          }}>
            WEB3 <span style={{ color: "var(--gold)" }}>JOBS</span> HQ
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="hidden-mobile">
          {links.map(l => (
            <Link key={l.label} href={l.href}
              style={{ fontSize: 13, color: "var(--w70)", textDecoration: "none", letterSpacing: "0.01em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--w70)")}
            >{l.label}</Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden-mobile">
          <button style={{
            fontSize: 13, fontFamily: "var(--font-dm)", color: "var(--w70)",
            padding: "7px 18px", border: "0.5px solid var(--bd2)", borderRadius: 7,
            background: "transparent", cursor: "pointer",
          }}>Sign in</button>
          <button style={{
            fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)",
            color: "#3D2200", padding: "7px 20px", border: "none", borderRadius: 7,
            background: "var(--gold)", cursor: "pointer", letterSpacing: "0.01em",
          }}>Post a job</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <IconX size={24}/> : <IconMenu2 size={24}/>}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: "var(--blue)", borderTop: "0.5px solid var(--bd)",
          padding: "16px 24px 24px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20 }}>
            {links.map(l => (
              <Link key={l.label} href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 15, color: "var(--w70)", textDecoration: "none",
                  padding: "10px 0", borderBottom: "0.5px solid var(--bd)",
                }}
              >{l.label}</Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button style={{
              fontSize: 14, fontFamily: "var(--font-dm)", color: "#fff",
              padding: "12px", border: "0.5px solid var(--bd2)", borderRadius: 8,
              background: "transparent", cursor: "pointer", width: "100%",
            }}>Sign in</button>
            <button style={{
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#3D2200", padding: "12px", border: "none", borderRadius: 8,
              background: "var(--gold)", cursor: "pointer", width: "100%",
            }}>Post a job</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
