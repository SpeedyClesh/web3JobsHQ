"use client";
import { useState } from "react";
import Link from "next/link";
import { IconTrendingUp, IconArrowRight, IconChevronRight } from "@tabler/icons-react";

const allRoles = [
  { title: "Protocol Engineer (Rust/Go)", chain: "Ethereum/Solana", category: "Engineering", low: 160, high: 280, trend: "+28%", hot: true,  yoe: "5+" },
  { title: "Smart Contract Auditor",      chain: "Ethereum",        category: "Engineering", low: 130, high: 240, trend: "+22%", hot: true,  yoe: "3+" },
  { title: "Smart Contract Engineer",     chain: "Ethereum",        category: "Engineering", low: 110, high: 200, trend: "+18%", hot: true,  yoe: "2+" },
  { title: "Rust Developer",              chain: "Solana",          category: "Engineering", low: 120, high: 190, trend: "+24%", hot: true,  yoe: "2+" },
  { title: "Base Chain Frontend Eng.",    chain: "Base",            category: "Engineering", low: 90,  high: 155, trend: "+14%", hot: false, yoe: "2+" },
  { title: "Web3 DevRel Engineer",        chain: "Multi",           category: "Engineering", low: 80,  high: 140, trend: "+12%", hot: false, yoe: "2+" },
  { title: "Head of Partnerships",        chain: "Multi",           category: "Operations",  low: 110, high: 180, trend: "+16%", hot: false, yoe: "4+" },
  { title: "DAO Operations Manager",      chain: "Multi",           category: "Operations",  low: 55,  high: 95,  trend: "+9%",  hot: false, yoe: "1+" },
  { title: "Web3 Growth Manager",         chain: "Multi",           category: "Marketing",   low: 60,  high: 120, trend: "+15%", hot: false, yoe: "2+" },
  { title: "Web3 Community Lead",         chain: "Multi",           category: "Community",   low: 50,  high: 90,  trend: "+10%", hot: false, yoe: "1+" },
  { title: "DeFi Content Strategist",     chain: "Ethereum",        category: "Marketing",   low: 45,  high: 80,  trend: "+8%",  hot: false, yoe: "1+" },
  { title: "NFT Product Designer",        chain: "Ethereum",        category: "Design",      low: 80,  high: 155, trend: "+11%", hot: false, yoe: "3+" },
  { title: "Social Media Manager",        chain: "Multi",           category: "Marketing",   low: 45,  high: 80,  trend: "+7%",  hot: false, yoe: "1+" },
  { title: "Blockchain Technical Writer", chain: "Multi",           category: "Non-tech",    low: 50,  high: 90,  trend: "+9%",  hot: false, yoe: "1+" },
  { title: "DAO Governance Advisor",      chain: "Ethereum",        category: "Operations",  low: 60,  high: 100, trend: "+11%", hot: false, yoe: "2+" },
];

const cats = ["All", "Engineering", "Marketing", "Community", "Operations", "Design", "Non-tech"];
const maxSalary = 280;

export default function SalaryIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = allRoles.filter(r => activeCategory === "All" || r.category === activeCategory);

  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "56px 24px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 65%)" }}/>
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>Salary Index</span>
          </div>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💰</div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Web3 <span style={{ color: "var(--gold)" }}>Salary Index</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--w50)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 20px" }}>
            Real compensation data across {allRoles.length} web3 roles. Updated monthly from verified listings and community submissions.
          </p>
          <div style={{ fontSize: 12, color: "var(--w30)" }}>All figures in USD · Annual · Remote roles unless stated</div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        {/* Category pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)} style={{
              fontSize: 12, fontFamily: "var(--font-dm)", fontWeight: activeCategory === c ? 600 : 400,
              padding: "6px 14px",
              border: `0.5px solid ${activeCategory === c ? "var(--gold-bd)" : "var(--bd)"}`,
              borderRadius: 999,
              color: activeCategory === c ? "var(--gold)" : "var(--w50)",
              background: activeCategory === c ? "var(--gold-dim)" : "transparent",
              cursor: "pointer", transition: "all 0.18s",
            }}>{c}</button>
          ))}
        </div>

        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 12, padding: "10px 20px", marginBottom: 8 }}>
          {["Role","Category","Chain","Salary range","YoY trend"].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 600, color: "var(--w30)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((r, i) => {
            const pct = Math.round(((r.high - r.low) / 2 + r.low) / maxSalary * 100);
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                gap: 12, alignItems: "center",
                background: "var(--w04)", border: "0.5px solid var(--bd)",
                borderRadius: 12, padding: "16px 20px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)"}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 600, color: "#fff" }}>{r.title}</span>
                    {r.hot && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)" }}>HOT</span>}
                  </div>
                  <div style={{ height: 5, background: "var(--w07)", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, var(--sky), var(--gold))", borderRadius: 999 }}/>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--w50)" }}>{r.category}</div>
                <div style={{ fontSize: 12, color: "var(--w50)" }}>{r.chain}</div>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "var(--gold)" }}>${r.low}k – ${r.high}k</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#6DC87A" }}>
                  <IconTrendingUp size={13}/>{r.trend}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, background: "var(--blue)", border: "0.5px solid var(--bd2)", borderRadius: 16, padding: "32px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Ready to find your next role?</h3>
          <p style={{ fontSize: 14, color: "var(--w50)", marginBottom: 20 }}>Browse verified listings across all salary ranges.</p>
          <Link href="/jobs" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#3D2200", padding: "12px 28px", borderRadius: 10, background: "var(--gold)", textDecoration: "none" }}>
            Browse all jobs <IconArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
