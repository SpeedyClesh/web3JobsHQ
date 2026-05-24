"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconShieldCheck, IconStar, IconArrowRight, IconChevronRight, IconSearch } from "@tabler/icons-react";

const providers = [
  { id:1,  name:"Tunde K.",  role:"Smart Contract Auditor", avatar:"/providers/p1.svg",  chain:"Ethereum", rate:"$120/hr", rating:5, reviews:24, tags:["Solidity","Foundry","Security"] },
  { id:2,  name:"Sara A.",   role:"Web3 Copywriter",        avatar:"/providers/p2.svg",  chain:"Multi",    rate:"$85/hr",  rating:5, reviews:18, tags:["Content","DeFi","NFT"] },
  { id:3,  name:"Remi O.",   role:"Community Lead",         avatar:"/providers/p3.svg",  chain:"Solana",   rate:"$75/hr",  rating:5, reviews:31, tags:["Discord","Telegram","Growth"] },
  { id:4,  name:"Nadia J.",  role:"DeFi UX Designer",       avatar:"/providers/p4.svg",  chain:"Base",     rate:"$95/hr",  rating:5, reviews:15, tags:["Figma","Web3 UX","DeFi"] },
  { id:5,  name:"Amara M.",  role:"Tokenomics Analyst",     avatar:"/providers/p5.svg",  chain:"Ethereum", rate:"$110/hr", rating:5, reviews:9,  tags:["Tokenomics","DeFi","Research"] },
  { id:6,  name:"Dev F.",    role:"Rust / Solana Dev",       avatar:"/providers/p6.svg",  chain:"Solana",   rate:"$130/hr", rating:5, reviews:22, tags:["Rust","Anchor","Solana"] },
  { id:7,  name:"Kofi L.",   role:"DAO Governance Advisor",  avatar:"/providers/p7.svg",  chain:"TON",      rate:"$90/hr",  rating:5, reviews:11, tags:["DAO","Governance","Strategy"] },
  { id:8,  name:"Priya W.",  role:"NFT Strategist",          avatar:"/providers/p8.svg",  chain:"Polygon",  rate:"$80/hr",  rating:5, reviews:19, tags:["NFT","Marketing","Branding"] },
  { id:9,  name:"Elena M.",  role:"Web3 Growth Hacker",      avatar:"/providers/p9.svg",  chain:"BNB Chain",rate:"$85/hr",  rating:5, reviews:27, tags:["Growth","Twitter","Analytics"] },
  { id:10, name:"James B.",  role:"Smart Contract Dev",      avatar:"/providers/p10.svg", chain:"Ethereum", rate:"$125/hr", rating:5, reviews:33, tags:["Solidity","Hardhat","EVM"] },
];

export default function ProvidersPage() {
  const [search, setSearch] = useState("");
  const filtered = providers.filter(p =>
    !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.role.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "56px 24px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(59,158,232,0.1) 0%, transparent 65%)" }}/>
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--sky)" }}>Verified Providers</span>
          </div>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🛡️</div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Verified <span style={{ color: "var(--sky)" }}>service providers</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--w50)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 28px" }}>
            Vetted web3 freelancers and agencies. Every provider on this page has been reviewed and verified by the Web3 Jobs HQ team.
          </p>
          {/* Search */}
          <div style={{ maxWidth: 480, margin: "0 auto", display: "flex", background: "rgba(255,255,255,0.06)", border: "0.5px solid var(--bd2)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
              <IconSearch size={18} color="var(--w30)"/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, role, or skill..."
                style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)", width: "100%", padding: "14px 0" }}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
              borderRadius: 16, padding: "24px", transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--sky-bd)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd2)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <Image src={p.avatar} alt={p.name} width={56} height={56} style={{ borderRadius: "50%", border: "2px solid var(--bd2)" }}/>
                  <div style={{ position: "absolute", bottom: 0, right: 0, width: 18, height: 18, borderRadius: "50%", background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--blue-card)" }}>
                    <IconShieldCheck size={10} color="#fff"/>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--sky)" }}>{p.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 999, background: "var(--w07)", color: "var(--w50)", border: "0.5px solid var(--bd)" }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "0.5px solid var(--bd)" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700, color: "var(--gold)" }}>{p.rate}</div>
                  <div style={{ fontSize: 11, color: "var(--w30)", display: "flex", alignItems: "center", gap: 3 }}>
                    <IconStar size={11} color="var(--gold)" fill="var(--gold)"/>
                    {p.rating}.0 · {p.reviews} reviews
                  </div>
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#001F3D", padding: "8px 16px", border: "none", borderRadius: 8, background: "var(--sky)", cursor: "pointer" }}>
                  Hire <IconArrowRight size={13}/>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a provider CTA */}
        <div style={{ marginTop: 56, background: "var(--blue)", border: "0.5px solid var(--sky-bd)", borderRadius: 20, padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Are you a web3 freelancer?</h3>
          <p style={{ fontSize: 14, color: "var(--w50)", marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>Apply to become a verified provider and get discovered by leading web3 companies.</p>
          <Link href="/hire" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#001F3D", padding: "12px 28px", borderRadius: 10, background: "var(--sky)", textDecoration: "none" }}>
            Apply to be verified <IconArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
