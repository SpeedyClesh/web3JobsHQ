"use client";
import { IconSearch } from "@tabler/icons-react";

const tags = [
  "Smart contract dev","Community manager","DeFi analyst",
  "Web3 marketer","Solidity engineer","DAO contributor",
  "NFT designer","Rust developer",
];

export default function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "80px 24px 72px", textAlign: "center",
      borderBottom: "0.5px solid var(--bd)",
    }}>
      {/* Backgrounds */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,166,35,0.09) 0%, transparent 70%),
                     radial-gradient(ellipse 50% 40% at 20% 100%, rgba(59,158,232,0.07) 0%, transparent 60%)`,
      }}/>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 1, pointerEvents: "none" }}/>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        {/* Badge */}
        <div className="anim-badge" style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)",
          borderRadius: 999, padding: "5px 14px",
          fontSize: 12, fontWeight: 500, color: "var(--gold)",
          marginBottom: 28,
        }}>
          <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }}/>
          847 verified web3 roles live right now
        </div>

        {/* H1 */}
        <h1 className="anim-h1" style={{
          fontFamily: "var(--font-syne), Syne, sans-serif",
          fontSize: "clamp(32px, 5vw, 54px)",
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-0.02em", color: "#fff",
          marginBottom: 18,
        }}>
          Your gateway to{" "}
          <span style={{ color: "var(--gold)" }}>web3 jobs</span>
          {" "}&amp;{" "}
          <span style={{ color: "var(--sky)" }}>opportunities</span>
        </h1>

        {/* Subtext */}
        <p className="anim-sub" style={{
          fontSize: "clamp(14px, 2vw, 16px)", color: "var(--w50)",
          maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.7,
        }}>
          Agency for Web3 Job Opportunities &amp; Services. Curated roles, vetted employers, and the tools Jobbers need to win.
        </p>

        {/* Search bar */}
        <div className="anim-search" style={{ maxWidth: 640, margin: "0 auto 20px" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 0,
            background: "rgba(255,255,255,0.06)",
            border: "0.5px solid var(--bd2)", borderRadius: 12, overflow: "hidden",
          }}>
            <div style={{ flex: "1 1 200px", display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
              <IconSearch size={18} color="var(--w30)"/>
              <input
                type="text"
                placeholder="Role, skill, protocol, or company..."
                style={{
                  background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontSize: 15, fontFamily: "var(--font-dm)", width: "100%",
                  padding: "17px 0",
                }}
              />
            </div>
            <div style={{ width: "0.5px", background: "var(--bd)", margin: "10px 0" }}/>
            <select style={{
              background: "transparent", border: "none", outline: "none",
              color: "var(--w50)", fontSize: 13, fontFamily: "var(--font-dm)",
              padding: "0 14px", cursor: "pointer", flex: "0 0 auto",
            }}>
              <option style={{ background: "#12177A" }}>All chains</option>
              <option style={{ background: "#12177A" }}>Ethereum</option>
              <option style={{ background: "#12177A" }}>Solana</option>
              <option style={{ background: "#12177A" }}>Base</option>
              <option style={{ background: "#12177A" }}>TON</option>
            </select>
            <div style={{ width: "0.5px", background: "var(--bd)", margin: "10px 0" }}/>
            <select style={{
              background: "transparent", border: "none", outline: "none",
              color: "var(--w50)", fontSize: 13, fontFamily: "var(--font-dm)",
              padding: "0 14px", cursor: "pointer", flex: "0 0 auto",
            }}>
              <option style={{ background: "#12177A" }}>Anywhere</option>
              <option style={{ background: "#12177A" }}>Remote</option>
              <option style={{ background: "#12177A" }}>On-site</option>
              <option style={{ background: "#12177A" }}>Hybrid</option>
            </select>
            <button style={{
              background: "var(--gold)", color: "#3D2200",
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              border: "none", padding: "0 28px", cursor: "pointer",
              letterSpacing: "0.02em", whiteSpace: "nowrap", flex: "0 0 auto",
            }}>
              <IconSearch size={16} style={{ verticalAlign: -3, marginRight: 6 }}/>Search
            </button>
          </div>
        </div>

        {/* Quick tags */}
        <div className="anim-tags" style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {tags.map(t => (
            <span key={t} style={{
              fontSize: 12, color: "var(--w50)",
              padding: "5px 12px", border: "0.5px solid var(--bd)",
              borderRadius: 999, cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.color = "var(--gold)";
              el.style.borderColor = "var(--gold-bd)";
              el.style.background = "var(--gold-dim)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.color = "var(--w50)";
              el.style.borderColor = "var(--bd)";
              el.style.background = "transparent";
            }}
            >{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
