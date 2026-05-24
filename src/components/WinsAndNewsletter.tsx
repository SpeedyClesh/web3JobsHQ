"use client";
import Image from "next/image";
import Link from "next/link";
import { IconBriefcase, IconCode, IconSettings, IconArrowRight, IconSchool, IconCheck } from "@tabler/icons-react";

const wins = [
  {
    initials: "AO", name: "Aisha O.", color: "var(--gold)", bg: "rgba(245,166,35,0.15)",
    quote: "Used the pitch guide from HQ, landed a community role at a funded L2 in 3 weeks. The cold DM template was everything.",
    role: "Community Manager", salary: "$68k/yr", icon: <IconBriefcase size={10}/>,
  },
  {
    initials: "KM", name: "Kelvin M.", color: "var(--sky)", bg: "rgba(59,158,232,0.15)",
    quote: "Found the role on HQ's board. Applied same day, interviewed twice, got the offer. Fully remote. This platform is the real deal.",
    role: "Smart Contract Dev", salary: "$95k/yr", icon: <IconCode size={10}/>,
  },
  {
    initials: "FN", name: "Fatima N.", color: "#6DC87A", bg: "rgba(100,200,120,0.15)",
    quote: "Non-tech background. Used the Pitch Academy, landed a DAO ops role in 6 weeks. Web3 Jobs HQ changed my career completely.",
    role: "DAO Operations", salary: "$55k/yr", icon: <IconSettings size={10}/>,
  },
];

const academyItems = [
  "Cold DM & pitch templates",
  "How to find newly funded projects",
  "Portfolio review framework",
  "Non-tech web3 entry guide",
  "Salary negotiation scripts",
];

export default function WinsAndNewsletter() {
  return (
    <section id="wins" style={{ borderTop: "0.5px solid var(--bd)" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "56px 24px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40,
      }}>
        {/* LEFT: Job Wins */}
        <div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 8 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                Job wins &amp; diaries
              </h2>
              <p style={{ fontSize: 13, color: "var(--w40)" }}>Real Jobbers. Real placements. Real proof.</p>
            </div>
            <Link href="/job-wins" style={{ fontSize: 13, color: "var(--gold)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}>
              All wins <IconArrowRight size={15}/>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {wins.map((w, i) => (
              <div key={i} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                background: "var(--w04)", border: "0.5px solid var(--bd)",
                borderRadius: 14, padding: "18px", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)"}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                  background: w.bg, color: w.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 800,
                }}>{w.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "var(--gold)", fontSize: 12, marginBottom: 3, letterSpacing: 1 }}>★★★★★</div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{w.name}</div>
                  <p style={{ fontSize: 12, color: "var(--w50)", fontStyle: "italic", lineHeight: 1.6, marginBottom: 10 }}>&ldquo;{w.quote}&rdquo;</p>
                  <span style={{
                    fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                    background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
                    display: "inline-flex", alignItems: "center", gap: 4,
                  }}>{w.icon} {w.role} · {w.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Newsletter + Academy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Newsletter */}
          <div style={{
            background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
            borderRadius: 20, padding: "32px 28px", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)",
              width: 200, height: 200,
              background: "radial-gradient(circle, rgba(245,166,35,0.13) 0%, transparent 70%)",
              pointerEvents: "none",
            }}/>
            <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={56} height={56}
              style={{ borderRadius: "50%", margin: "0 auto 18px", display: "block", border: "2.5px solid var(--gold-bd)", objectFit: "cover" }}/>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Get the weekly job digest</h3>
            <p style={{ fontSize: 13, color: "var(--w50)", lineHeight: 1.6, marginBottom: 22, maxWidth: 280, margin: "0 auto 22px" }}>
              Top 10 verified web3 roles every Monday, straight to your inbox.
            </p>
            <div id="newsletter" style={{
              display: "flex", border: "0.5px solid var(--bd2)", borderRadius: 10,
              overflow: "hidden", background: "rgba(255,255,255,0.05)", marginBottom: 12,
            }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                color: "#fff", fontSize: 13, fontFamily: "var(--font-dm)", padding: "12px 16px",
              }}/>
              <button style={{
                background: "var(--gold)", color: "#3D2200",
                fontSize: 12, fontWeight: 700, fontFamily: "var(--font-syne)",
                border: "none", padding: "12px 20px", cursor: "pointer",
                letterSpacing: "0.02em", whiteSpace: "nowrap",
              }}>Subscribe →</button>
            </div>
            <p style={{ fontSize: 11, color: "var(--w30)", marginBottom: 20 }}>Free forever · No spam · Unsubscribe anytime</p>
            <div style={{ display: "flex", borderTop: "0.5px solid var(--bd)", paddingTop: 20, justifyContent: "space-around" }}>
              {[["6,200+","Subscribers"],["52","Issues sent"],["48%","Open rate"]].map(([n,l],i) => (
                <div key={i} style={{ textAlign: "center", flex: 1, borderRight: i < 2 ? "0.5px solid var(--bd)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 800, color: "var(--gold)" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Academy box */}
          <div style={{
            background: "linear-gradient(135deg, #1A1090 0%, #0D1260 100%)",
            border: "0.5px solid var(--sky-bd)", borderRadius: 20, padding: "28px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", bottom: -30, right: -30,
              width: 120, height: 120,
              background: "radial-gradient(circle, rgba(59,158,232,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}/>
            <div style={{
              width: 44, height: 44, background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)",
              borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
            }}>
              <IconSchool size={22} color="var(--sky)"/>
            </div>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Pitch Academy</h3>
            <p style={{ fontSize: 12, color: "var(--w50)", lineHeight: 1.6, marginBottom: 18 }}>
              The tools, scripts &amp; guides that get Jobbers hired — curated by the HQ team.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 22 }}>
              {academyItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "var(--w70)" }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}><IconCheck size={10} color="var(--sky)"/></div>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/pitch-academy" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#001F3D", padding: "11px 22px", border: "none", borderRadius: 9,
              background: "var(--sky)", textDecoration: "none",
            }}>
              Explore the academy <IconArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
