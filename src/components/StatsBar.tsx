"use client";
import Link from "next/link";

const stats = [
  { num: "847",        gold: true,  label: "Live roles",          href: "/jobs" },
  { num: "312",        gold: false, label: "Verified companies",  href: "/hire" },
  { num: "4,200+",     gold: true,  label: "Jobbers placed",      href: "/job-wins" },
  { num: "$45k–$280k", gold: false, label: "Salary range",        href: "/salary-index" },
  { num: "Daily",      gold: true,  label: "New roles added",     href: "/jobs" },
];

export default function StatsBar() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      borderBottom: "0.5px solid var(--bd)",
      background: "var(--blue)",
    }}>
      {stats.map((s, i) => (
        <Link key={i} href={s.href} style={{
          padding: "22px 12px", textAlign: "center",
          borderRight: i < stats.length - 1 ? "0.5px solid var(--bd)" : "none",
          textDecoration: "none", transition: "background 0.2s",
          display: "block",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(245,166,35,0.05)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 800,
            color: s.gold ? "var(--gold)" : "#fff", letterSpacing: "-0.01em",
          }}>{s.num}</div>
          <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 2, letterSpacing: "0.03em" }}>{s.label}</div>
        </Link>
      ))}
      <style>{`
        @media (max-width: 640px) {
          .stats-bar { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
