"use client";
import Image from "next/image";
import { IconShieldCheck, IconArrowRight } from "@tabler/icons-react";

interface Provider {
  id: number;
  name: string;
  role: string;
  avatar: string;
  chain: string;
  chainLogo: string;
  rating: number;
}

const providers: Provider[] = [
  { id:1,  name:"Tunde K.",   role:"Smart contract auditor", avatar:"/providers/p1.svg",  chain:"Ethereum", chainLogo:"/chains/eth.svg",  rating:5 },
  { id:2,  name:"Sara A.",    role:"Web3 copywriter",        avatar:"/providers/p2.svg",  chain:"Multi-chain",chainLogo:"/chains/sol.svg", rating:5 },
  { id:3,  name:"Remi O.",    role:"Community lead",         avatar:"/providers/p3.svg",  chain:"Solana",   chainLogo:"/chains/sol.svg",  rating:5 },
  { id:4,  name:"Nadia J.",   role:"DeFi UX designer",       avatar:"/providers/p4.svg",  chain:"Base",     chainLogo:"/chains/base.svg", rating:5 },
  { id:5,  name:"Amara M.",   role:"Tokenomics analyst",     avatar:"/providers/p5.svg",  chain:"Ethereum", chainLogo:"/chains/eth.svg",  rating:5 },
  { id:6,  name:"Dev F.",     role:"Rust / Solana dev",      avatar:"/providers/p6.svg",  chain:"Solana",   chainLogo:"/chains/sol.svg",  rating:5 },
  { id:7,  name:"Kofi L.",    role:"DAO governance advisor", avatar:"/providers/p7.svg",  chain:"TON",      chainLogo:"/chains/ton.svg",  rating:5 },
  { id:8,  name:"Priya W.",   role:"NFT strategist",         avatar:"/providers/p8.svg",  chain:"Polygon",  chainLogo:"/chains/matic.svg",rating:5 },
  { id:9,  name:"Elena M.",   role:"Web3 growth hacker",     avatar:"/providers/p9.svg",  chain:"BNB Chain",chainLogo:"/chains/bnb.svg",  rating:5 },
  { id:10, name:"James B.",   role:"Smart contract dev",     avatar:"/providers/p10.svg", chain:"Ethereum", chainLogo:"/chains/eth.svg",  rating:5 },
];

// Duplicate for seamless loop
const doubled = [...providers, ...providers];

function ProviderCard({ p }: { p: Provider }) {
  return (
    <div style={{
      flexShrink: 0, width: 200,
      background: "var(--w04)", border: "0.5px solid var(--bd)",
      borderRadius: 14, padding: "20px 16px", textAlign: "center",
      marginRight: 14, cursor: "pointer", transition: "border-color 0.2s",
    }}
    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)"}
    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)"}
    >
      {/* Avatar */}
      <div style={{ position: "relative", width: 64, height: 64, margin: "0 auto 12px" }}>
        <Image
          src={p.avatar} alt={p.name}
          width={64} height={64}
          style={{ borderRadius: "50%", border: "2px solid var(--bd2)", objectFit: "cover" }}
        />
        {/* Verified checkmark */}
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 20, height: 20, borderRadius: "50%",
          background: "var(--sky)", display: "flex",
          alignItems: "center", justifyContent: "center",
          border: "2px solid var(--blue)",
        }}>
          <IconShieldCheck size={11} color="#fff"/>
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{p.name}</div>
      <div style={{ fontSize: 11, color: "var(--w40)", marginBottom: 10, lineHeight: 1.4 }}>{p.role}</div>

      {/* Chain */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 10 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.chainLogo} alt={p.chain} width={14} height={14} style={{ borderRadius: "50%" }}/>
        <span style={{ fontSize: 11, color: "var(--w40)" }}>{p.chain}</span>
      </div>

      {/* Stars */}
      <div style={{ color: "var(--gold)", fontSize: 12, letterSpacing: 2 }}>★★★★★</div>

      {/* Badge */}
      <div style={{
        marginTop: 10, display: "inline-block",
        fontSize: 10, fontWeight: 600, padding: "2px 9px",
        borderRadius: 999, background: "var(--sky-dim)",
        color: "var(--sky)", border: "0.5px solid var(--sky-bd)",
      }}>
        <IconShieldCheck size={9} style={{ verticalAlign: -1, marginRight: 3 }}/>Verified
      </div>
    </div>
  );
}

export default function ProvidersMarquee() {
  return (
    <section id="providers" style={{
      padding: "56px 0",
      background: "var(--blue)",
      borderTop: "0.5px solid var(--bd)",
      borderBottom: "0.5px solid var(--bd)",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        padding: "0 24px", marginBottom: 32, flexWrap: "wrap", gap: 12,
        maxWidth: 1280, margin: "0 auto 32px",
      }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            Verified service providers
          </h2>
          <p style={{ fontSize: 13, color: "var(--w40)" }}>Vetted web3 freelancers &amp; agencies — hover to pause</p>
        </div>
        <a href="/providers" style={{ fontSize: 13, color: "var(--gold)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none", paddingRight: 24 }}>
          Browse all providers <IconArrowRight size={15}/>
        </a>
      </div>

      {/* Marquee track */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="animate-marquee" style={{ paddingBottom: 4 }}>
          {doubled.map((p, i) => <ProviderCard key={`${p.id}-${i}`} p={p}/>)}
        </div>
      </div>
    </section>
  );
}
