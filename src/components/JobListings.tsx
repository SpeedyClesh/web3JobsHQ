"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconShieldCheck, IconFlame, IconMapPin, IconClock, IconBuilding, IconArrowRight } from "@tabler/icons-react";
import { allJobs } from "@/lib/jobsData";

const filters = ["All roles","Engineering","Marketing","Community","Design","Operations","Non-tech"];

export default function JobListings() {
  const [active, setActive] = useState("All roles");
  const featured = allJobs
    .filter(j => active === "All roles" || j.category === active)
    .slice(0, 6);

  return (
    <section id="jobs" style={{ padding: "56px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            Featured roles
          </h2>
          <p style={{ fontSize: 13, color: "var(--w40)" }}>Hand-picked from verified employers · Updated daily</p>
        </div>
        <Link href="/jobs" style={{ fontSize: 13, color: "var(--gold)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}>
          View all {allJobs.length} jobs <IconArrowRight size={15}/>
        </Link>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)} style={{
            fontSize: 12, fontFamily: "var(--font-dm)",
            padding: "6px 14px",
            border: `0.5px solid ${active===f ? "var(--gold-bd)" : "var(--bd)"}`,
            borderRadius: 999,
            color: active===f ? "var(--gold)" : "var(--w50)",
            background: active===f ? "var(--gold-dim)" : "transparent",
            fontWeight: active===f ? 600 : 400,
            cursor: "pointer", transition: "all 0.2s",
          }}>{f}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {featured.map(job => (
          <Link key={job.id} href={`/jobs/${job.id}`} style={{
            display: "flex", alignItems: "center", gap: 16,
            background: job.featured ? "var(--gold-dim)" : "var(--w04)",
            border: `${job.featured ? "1.5px" : "0.5px"} solid ${job.featured ? "var(--gold-bd)" : "var(--bd)"}`,
            borderRadius: 12, padding: "16px 20px",
            cursor: "pointer", transition: "all 0.2s", textDecoration: "none",
            flexWrap: "wrap",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10, flexShrink: 0,
              border: "0.5px solid var(--bd2)", overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
            }}>
              <Image src={job.companyLogo} alt={job.company} width={48} height={48} style={{ borderRadius: 10 }}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 600, color: "#fff" }}>{job.title}</span>
                {job.verified && <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)", display:"inline-flex",alignItems:"center",gap:3 }}><IconShieldCheck size={10}/>Verified</span>}
                {job.hot && <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)", display:"inline-flex",alignItems:"center",gap:3 }}><IconFlame size={10}/>Hot</span>}
                {job.isNew && <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "rgba(100,200,120,0.13)", color: "#6DC87A", border: "0.5px solid rgba(100,200,120,0.3)" }}>New</span>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--w40)", flexWrap: "wrap" }}>
                <span style={{ display:"flex",alignItems:"center",gap:4 }}><IconBuilding size={13}/>{job.company}</span>
                <span style={{ display:"flex",alignItems:"center",gap:4 }}><IconMapPin size={13}/>{job.location}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span style={{ display:"flex",alignItems:"center",gap:4 }}><img src={job.chainLogo} alt={job.chain} width={13} height={13} style={{borderRadius:"50%"}}/>{job.chain}</span>
                <span style={{ display:"flex",alignItems:"center",gap:4 }}><IconClock size={13}/>{job.type}</span>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "var(--gold)", marginBottom: 4 }}>${job.salary.min}k – ${job.salary.max}k</div>
              <div style={{ fontSize: 11, color: "var(--w30)" }}>{job.posted}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
