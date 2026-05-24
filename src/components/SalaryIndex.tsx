"use client";
import Link from "next/link";
import { IconTrendingUp, IconArrowRight } from "@tabler/icons-react";

const roles = [
  { title: "Smart Contract Engineer", chain: "Ethereum", low: 120, high: 220, trend: "+18%", hot: true  },
  { title: "Protocol Engineer (Rust)", chain: "Solana",  low: 130, high: 240, trend: "+24%", hot: true  },
  { title: "Web3 Growth Manager",     chain: "Multi",    low: 60,  high: 120, trend: "+12%", hot: false },
  { title: "Community Lead",          chain: "Multi",    low: 50,  high: 90,  trend: "+9%",  hot: false },
  { title: "DeFi Analyst",            chain: "Ethereum", low: 80,  high: 150, trend: "+15%", hot: false },
  { title: "DAO Operations Manager",  chain: "Multi",    low: 55,  high: 95,  trend: "+7%",  hot: false },
];

export default function SalaryIndex() {
  const max = 240;
  return (
    <section id="salary" style={{
      background: "var(--blue)", borderTop: "0.5px solid var(--bd)", borderBottom: "0.5px solid var(--bd)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
              Web3 salary index
            </h2>
            <p style={{ fontSize: 13, color: "var(--w40)" }}>Updated monthly · Based on verified listings &amp; community data</p>
          </div>
          <Link href="/salary-index" style={{ fontSize: 13, color: "var(--gold)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}>
            Full salary data <IconArrowRight size={15}/>
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {roles.map((r, i) => {
            const pct = Math.round(((r.high - r.low) / 2 + r.low) / max * 100);
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center",
                background: "var(--w04)", border: "0.5px solid var(--bd)", borderRadius: 12, padding: "16px 20px",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 600, color: "#fff" }}>{r.title}</span>
                    {r.hot && (
                      <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)" }}>Hot</span>
                    )}
                    <span style={{ fontSize: 11, color: "var(--w30)" }}>{r.chain}</span>
                  </div>
                  <div style={{ height: 6, background: "var(--w07)", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, var(--sky), var(--gold))", borderRadius: 999 }}/>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "var(--gold)", marginBottom: 3 }}>
                    ${r.low}k – ${r.high}k
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end", fontSize: 12, color: "#6DC87A" }}>
                    <IconTrendingUp size={13}/>{r.trend} YoY
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
