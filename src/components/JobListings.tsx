"use client";
import { useState } from "react";
import Image from "next/image";
import { IconShieldCheck, IconFlame, IconMapPin, IconClock, IconBuilding, IconArrowRight } from "@tabler/icons-react";

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  chain: string;
  chainLogo: string;
  salary: string;
  type: string;
  posted: string;
  verified: boolean;
  hot: boolean;
  isNew: boolean;
  featured: boolean;
  category: string;
}

const jobs: Job[] = [
  {
    id: 1, title: "Senior Solidity Engineer", company: "Chainlink Labs",
    companyLogo: "/companies/chainlink.svg", location: "Remote · Worldwide",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: "$140k – $190k", type: "Full-time", posted: "2h ago",
    verified: true, hot: true, isNew: false, featured: true, category: "Engineering",
  },
  {
    id: 2, title: "Web3 Community Manager", company: "Uniswap Labs",
    companyLogo: "/companies/uniswap.svg", location: "Remote · US/EU",
    chain: "DeFi", chainLogo: "/chains/eth.svg",
    salary: "$60k – $85k", type: "Full-time", posted: "5h ago",
    verified: true, hot: false, isNew: true, featured: false, category: "Community",
  },
  {
    id: 3, title: "Growth Lead — Telegram Ecosystem", company: "TON Foundation",
    companyLogo: "/companies/ton.svg", location: "Remote · Worldwide",
    chain: "TON", chainLogo: "/chains/ton.svg",
    salary: "$75k – $110k", type: "Full-time", posted: "1d ago",
    verified: true, hot: true, isNew: false, featured: false, category: "Marketing",
  },
  {
    id: 4, title: "DeFi Content Strategist", company: "MakerDAO",
    companyLogo: "/companies/maker.svg", location: "Remote · Part-time ok",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: "$50k – $70k", type: "Part-time ok", posted: "1d ago",
    verified: false, hot: false, isNew: true, featured: false, category: "Marketing",
  },
  {
    id: 5, title: "Rust Developer — NFT Infrastructure", company: "Solana Foundation",
    companyLogo: "/companies/solana.svg", location: "Remote · Worldwide",
    chain: "Solana", chainLogo: "/chains/sol.svg",
    salary: "$120k – $160k", type: "Full-time", posted: "2d ago",
    verified: true, hot: false, isNew: false, featured: false, category: "Engineering",
  },
  {
    id: 6, title: "DAO Operations Manager", company: "Compound Finance",
    companyLogo: "/companies/compound.svg", location: "Remote · US preferred",
    chain: "DeFi", chainLogo: "/chains/eth.svg",
    salary: "$65k – $90k", type: "Full-time", posted: "2d ago",
    verified: true, hot: false, isNew: true, featured: false, category: "Operations",
  },
];

const filters = ["All roles","Engineering","Marketing","Community","Design","Operations","Non-tech","Part-time"];

export default function JobListings() {
  const [active, setActive] = useState("All roles");
  const filtered = active === "All roles" ? jobs : jobs.filter(j => j.category === active);

  return (
    <section id="jobs" style={{ padding: "56px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            Featured roles
          </h2>
          <p style={{ fontSize: 13, color: "var(--w40)" }}>Hand-picked from verified employers · Updated daily</p>
        </div>
        <a href="#" style={{ fontSize: 13, color: "var(--gold)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}>
          View all 847 jobs <IconArrowRight size={15}/>
        </a>
      </div>

      {/* Filter pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            style={{
              fontSize: 12, fontFamily: "var(--font-dm)",
              padding: "6px 14px", border: `0.5px solid ${active===f ? "var(--gold-bd)" : "var(--bd)"}`,
              borderRadius: 999,
              color: active===f ? "var(--gold)" : "var(--w50)",
              background: active===f ? "var(--gold-dim)" : "transparent",
              fontWeight: active===f ? 500 : 400,
              cursor: "pointer", transition: "all 0.2s",
            }}>{f}</button>
        ))}
      </div>

      {/* Job cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map(job => (
          <a key={job.id} href="#"
            style={{
              display: "flex", alignItems: "center", gap: 16,
              background: job.featured ? "var(--gold-dim)" : "var(--w04)",
              border: `${job.featured ? "1.5px" : "0.5px"} solid ${job.featured ? "var(--gold-bd)" : "var(--bd)"}`,
              borderRadius: 12, padding: "16px 20px",
              cursor: "pointer", transition: "all 0.2s", textDecoration: "none",
              flexWrap: "wrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = job.featured ? "var(--gold)" : "var(--bd2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = job.featured ? "var(--gold-bd)" : "var(--bd)";
            }}
          >
            {/* Company logo */}
            <div style={{
              width: 48, height: 48, borderRadius: 10, flexShrink: 0,
              border: "0.5px solid var(--bd2)", overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Image src={job.companyLogo} alt={job.company} width={48} height={48} style={{ borderRadius: 10 }}/>
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 600, color: "#fff" }}>{job.title}</span>
                {job.verified && (
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)" }}>
                    <IconShieldCheck size={10} style={{ verticalAlign: -1, marginRight: 3 }}/>Verified
                  </span>
                )}
                {job.hot && (
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)" }}>
                    <IconFlame size={10} style={{ verticalAlign: -1, marginRight: 3 }}/>Hot
                  </span>
                )}
                {job.isNew && (
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "rgba(100,200,120,0.13)", color: "#6DC87A", border: "0.5px solid rgba(100,200,120,0.3)" }}>
                    New
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--w40)", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <IconBuilding size={13}/>{job.company}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <IconMapPin size={13}/>{job.location}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={job.chainLogo} alt={job.chain} width={13} height={13} style={{ borderRadius: "50%" }}/>{job.chain}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <IconClock size={13}/>{job.type}
                </span>
              </div>
            </div>

            {/* Salary + time */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "var(--gold)", marginBottom: 4 }}>{job.salary}</div>
              <div style={{ fontSize: 11, color: "var(--w30)" }}>{job.posted}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
