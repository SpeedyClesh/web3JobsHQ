"use client";
import Image from "next/image";
import Link from "next/link";
import { IconBrandX, IconBrandTelegram, IconLink, IconMail } from "@tabler/icons-react";

const forJobbers = [
  { label: "Browse jobs",        href: "/jobs" },
  { label: "Pitch academy",      href: "/pitch-academy" },
  { label: "Job wins & diaries", href: "/job-wins" },
  { label: "Salary index",       href: "/salary-index" },
  { label: "Verified providers", href: "/providers" },
  { label: "Telegram community", href: "https://linktr.ee/Web3jobhq" },
];

const forHirers = [
  { label: "Post a job",        href: "/hire" },
  { label: "Browse talent",     href: "/providers" },
  { label: "Verified providers",href: "/providers" },
  { label: "Company profile",   href: "/hire" },
  { label: "Hiring guides",     href: "/pitch-academy" },
  { label: "Advertise",         href: "/hire" },
];

const company = [
  { label: "About HQ",       href: "/about" },
  { label: "Newsletter",     href: "/#newsletter" },
  { label: "Press kit",      href: "/about" },
  { label: "Terms of service",href: "/about" },
  { label: "Privacy policy", href: "/about" },
  { label: "Contact us",     href: "mailto:web3jobhq@gmail.com" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--blue)", borderTop: "0.5px solid var(--bd)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 24px 28px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 40, marginBottom: 44,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={36} height={36}
                style={{ borderRadius: "50%", border: "1.5px solid var(--w30)", objectFit: "cover" }}/>
              <span style={{
                fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 800,
                color: "#fff", letterSpacing: "0.03em",
              }}>WEB3 <span style={{ color: "var(--gold)" }}>JOBS</span> HQ</span>
            </div>
            <p style={{ fontSize: 12, color: "var(--w40)", lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Agency for Web3 Job Opportunities &amp; Services. The verified HQ for Jobbers and hirers across every chain.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: <IconBrandX size={16}/>,        href: "https://x.com/Web3Jobhq",        label: "X / Twitter" },
                { icon: <IconBrandTelegram size={16}/>, href: "https://linktr.ee/Web3jobhq",     label: "Telegram" },
                { icon: <IconLink size={16}/>,          href: "https://linktr.ee/Web3jobhq",     label: "Linktree" },
                { icon: <IconMail size={16}/>,          href: "mailto:web3jobhq@gmail.com",      label: "Email" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: "0.5px solid var(--bd)", background: "var(--w04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--w50)", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--gold)"; el.style.borderColor = "var(--gold-bd)"; el.style.background = "var(--gold-dim)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--w50)"; el.style.borderColor = "var(--bd)"; el.style.background = "var(--w04)";
                  }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* For Jobbers */}
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>For Jobbers</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forJobbers.map(l => (
                <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--w50)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* For Hirers */}
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>For Hirers</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forHirers.map(l => (
                <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--w50)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {company.map(l => (
                <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--w50)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "0.5px solid var(--bd)", paddingTop: 24,
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "var(--w30)" }}>© 2026 Web3 Jobs HQ. All rights reserved.</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--w30)" }}>Built for Jobbers everywhere.</span>
            <span style={{ fontSize: 12, color: "var(--gold)" }}>🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
