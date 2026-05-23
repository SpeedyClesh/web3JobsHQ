"use client";
const stats = [
  { num: "847",      gold: true,  label: "Live roles"        },
  { num: "312",      gold: false, label: "Verified companies" },
  { num: "4,200+",   gold: true,  label: "Jobbers placed"    },
  { num: "$45k–$280k",gold:false, label: "Salary range"      },
  { num: "Daily",    gold: true,  label: "New roles added"   },
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
        <div key={i} style={{
          padding: "22px 12px", textAlign: "center",
          borderRight: i < stats.length - 1 ? "0.5px solid var(--bd)" : "none",
        }}>
          <div style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 800,
            color: s.gold ? "var(--gold)" : "#fff", letterSpacing: "-0.01em",
          }}>{s.num}</div>
          <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 2, letterSpacing: "0.03em" }}>{s.label}</div>
        </div>
      ))}
      <style>{`
        @media (max-width: 600px) {
          /* collapse to 3+2 on small screens */
          div[data-stats] { grid-template-columns: repeat(3,1fr); }
        }
      `}</style>
    </div>
  );
}
