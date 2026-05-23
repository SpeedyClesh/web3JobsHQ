"use client";
import Image from "next/image";
import { IconBrandX, IconBrandTelegram, IconLink, IconMail } from "@tabler/icons-react";

const forJobbers = ["Browse jobs","Pitch academy","Job wins & diaries","Salary index","Create profile","Telegram community"];
const forHirers  = ["Post a job","Browse talent","Verified providers","Company profile","Hiring guides","Advertise"];
const company    = ["About HQ","Newsletter","Press kit","Terms of service","Privacy policy","Contact us"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--blue)", borderTop: "0.5px solid var(--bd)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 24px 28px" }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 40, marginBottom: 44,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image
                src="/logo.jpg" alt="Web3 Jobs HQ"
                width={36} height={36}
                style={{ borderRadius: "50%", border: "1.5px solid var(--w30)", objectFit: "cover" }}
              />
              <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "0.03em" }}>
                WEB3 <span style={{ color: "var(--gold)" }}>JOBS</span> HQ
              </span>
            </div>
            <p style={{ fontSize: 12, color: "var(--w40)", lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Agency for Web3 Job Opportunities &amp; Services. The verified HQ for Jobbers and hirers across every chain.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: <IconBrandX size={16}/>, href: "https://x.com/Web3Jobhq", label: "X / Twitter" },
                { icon: <IconBrandTelegram size={16}/>, href: "#", label: "Telegram" },
                { icon: <IconLink size={16}/>, href: "https://linktr.ee/Web3jobhq", label: "Linktree" },
                { icon: <IconMail size={16}/>, href: "#", label: "Email" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: "0.5px solid var(--bd)", background: "var(--w04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--w50)", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold-bd)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold-dim)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--w50)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bd)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--w04)";
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
                <a key={l} href="#" style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--w50)"}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* For Hirers */}
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>For Hirers</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forHirers.map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--w50)"}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {company.map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: "var(--w50)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--w50)"}
                >{l}</a>
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
          <span style={{ fontSize: 12, color: "var(--w30)" }}>
            © 2026 Web3 Jobs HQ. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--w30)" }}>Built for Jobbers everywhere.</span>
            <span style={{ fontSize: 12, color: "var(--gold)" }}>🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
