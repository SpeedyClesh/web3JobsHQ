"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconShieldCheck, IconStar, IconArrowRight, IconChevronRight,
  IconSearch, IconX, IconBrandX, IconBrandGithub,
  IconBrandLinkedin, IconWorld, IconClock, IconBriefcase,
  IconMapPin, IconUsers, IconCheck, IconArrowLeft,
  IconCurrencyDollar, IconSparkles, IconBolt,
} from "@tabler/icons-react";
import { providers, providerCategories, availabilityFilters, sortOptions, Provider } from "@/lib/providersData";

const availColor: Record<string, { bg: string; color: string; border: string; dot: string }> = {
  "Available now":  { bg: "rgba(100,200,120,0.12)", color: "#6DC87A", border: "rgba(100,200,120,0.3)", dot: "#6DC87A" },
  "Available soon": { bg: "var(--gold-dim)",         color: "var(--gold)", border: "var(--gold-bd)",     dot: "var(--gold)" },
  "Booked":         { bg: "rgba(255,255,255,0.06)",  color: "var(--w40)", border: "var(--bd2)",          dot: "var(--w40)" },
};

export default function ProvidersPage() {
  const [search, setSearch]       = useState("");
  const [category, setCategory]   = useState("All");
  const [avail, setAvail]         = useState("All");
  const [sort, setSort]           = useState("Top rated");
  const [openProvider, setOpenProvider] = useState<Provider | null>(null);
  const [contactSent, setContactSent]   = useState(false);
  const [applyOpen, setApplyOpen]       = useState(false);

  const filtered = useMemo(() => {
    let list = providers.filter(p => {
      const q = search.toLowerCase();
      const matchSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q));
      const matchCat   = category === "All" || p.category === category;
      const matchAvail = avail === "All" || p.availability === avail;
      return matchSearch && matchCat && matchAvail;
    });
    if (sort === "Top rated")      list = [...list].sort((a,b) => b.rating - a.rating);
    if (sort === "Highest rate")   list = [...list].sort((a,b) => b.rateNum - a.rateNum);
    if (sort === "Lowest rate")    list = [...list].sort((a,b) => a.rateNum - b.rateNum);
    if (sort === "Most reviews")   list = [...list].sort((a,b) => b.reviews - a.reviews);
    if (sort === "Most projects")  list = [...list].sort((a,b) => b.completedProjects - a.completedProjects);
    return list;
  }, [search, category, avail, sort]);

  /* ── PROVIDER DETAIL VIEW ─────────────────────────────── */
  if (openProvider) {
    const av = availColor[openProvider.availability];
    return (
      <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "14px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)" }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <button onClick={() => setOpenProvider(null)} style={{ background: "none", border: "none", color: "var(--w40)", cursor: "pointer", fontSize: 12, padding: 0 }}>Providers</button>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--sky)" }}>{openProvider.name}</span>
          </div>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 80px" }}>
          <button onClick={() => setOpenProvider(null)} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--w50)", background: "none", border: "none",
            cursor: "pointer", marginBottom: 28, padding: 0,
          }}><IconArrowLeft size={15}/> All providers</button>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 28, alignItems: "flex-start" }}>

            {/* ── MAIN COLUMN ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Profile header */}
              <div style={{
                background: "var(--blue)", border: "0.5px solid var(--bd2)",
                borderRadius: 20, padding: "32px", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 60% at 0% 0%, rgba(59,158,232,0.07) 0%, transparent 60%)" }}/>
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <Image src={openProvider.avatar} alt={openProvider.name} width={88} height={88}
                        style={{ borderRadius: "50%", border: "2.5px solid var(--sky-bd)" }}/>
                      <div style={{ position: "absolute", bottom: 2, right: 2, width: 22, height: 22, borderRadius: "50%", background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--blue)" }}>
                        <IconShieldCheck size={12} color="#fff"/>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                        {openProvider.topRated && (
                          <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)", display: "flex", alignItems: "center", gap: 4 }}>
                            <IconSparkles size={11}/>Top Rated
                          </span>
                        )}
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999, background: av.bg, color: av.color, border: `0.5px solid ${av.border}`, display: "flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: av.dot, display: "inline-block" }}/>
                          {openProvider.availability}
                        </span>
                      </div>
                      <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: "-0.01em" }}>{openProvider.name}</h1>
                      <div style={{ fontSize: 15, color: "var(--sky)", marginBottom: 10 }}>{openProvider.role}</div>
                      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 13, color: "var(--w50)" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><IconMapPin size={14}/>{openProvider.location}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={openProvider.chainLogo} alt={openProvider.chain} width={14} height={14} style={{ borderRadius: "50%" }}/>{openProvider.chain}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><IconClock size={14}/>Replies {openProvider.responseTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, marginTop: 24, background: "rgba(255,255,255,0.04)", border: "0.5px solid var(--bd)", borderRadius: 12, overflow: "hidden" }}>
                    {[
                      { label: "Rating", val: `${openProvider.rating.toFixed(1)} ★`, color: "var(--gold)" },
                      { label: "Reviews", val: String(openProvider.reviews), color: "#fff" },
                      { label: "Projects", val: String(openProvider.completedProjects), color: "#fff" },
                      { label: "Rate", val: openProvider.rate, color: "var(--sky)" },
                    ].map((s,i) => (
                      <div key={i} style={{ padding: "14px 12px", textAlign: "center", borderRight: i < 3 ? "0.5px solid var(--bd)" : "none" }}>
                        <div style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 800, color: s.color }}>{s.val}</div>
                        <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <DetailSection title="About">
                <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.8 }}>{openProvider.bio}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                  {openProvider.tags.map(t => (
                    <span key={t} style={{ fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 8, background: "var(--blue-card)", border: "0.5px solid var(--bd2)", color: "#fff" }}>{t}</span>
                  ))}
                </div>
              </DetailSection>

              {/* Portfolio */}
              <DetailSection title="Portfolio highlights">
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {openProvider.portfolio.map((p, i) => (
                    <div key={i} style={{ background: "var(--blue-deep)", border: "0.5px solid var(--bd)", borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: "var(--w50)", lineHeight: 1.6, marginBottom: 10 }}>{p.desc}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <IconCheck size={11} color="var(--gold)"/>
                        </div>
                        <span style={{ fontSize: 13, color: "var(--gold)", fontWeight: 500 }}>{p.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </DetailSection>

              {/* Socials */}
              {Object.keys(openProvider.socials).length > 0 && (
                <DetailSection title="Links">
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {openProvider.socials.x && (
                      <a href={openProvider.socials.x} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--w70)", padding: "8px 16px", border: "0.5px solid var(--bd2)", borderRadius: 9, background: "var(--w07)", textDecoration: "none" }}>
                        <IconBrandX size={15}/> X / Twitter
                      </a>
                    )}
                    {openProvider.socials.github && (
                      <a href={openProvider.socials.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--w70)", padding: "8px 16px", border: "0.5px solid var(--bd2)", borderRadius: 9, background: "var(--w07)", textDecoration: "none" }}>
                        <IconBrandGithub size={15}/> GitHub
                      </a>
                    )}
                    {openProvider.socials.linkedin && (
                      <a href={openProvider.socials.linkedin} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--w70)", padding: "8px 16px", border: "0.5px solid var(--bd2)", borderRadius: 9, background: "var(--w07)", textDecoration: "none" }}>
                        <IconBrandLinkedin size={15}/> LinkedIn
                      </a>
                    )}
                    {openProvider.socials.website && (
                      <a href={openProvider.socials.website} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--w70)", padding: "8px 16px", border: "0.5px solid var(--bd2)", borderRadius: 9, background: "var(--w07)", textDecoration: "none" }}>
                        <IconWorld size={15}/> Website
                      </a>
                    )}
                  </div>
                </DetailSection>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 88 }}>

              {/* Hire card */}
              <div style={{ background: "var(--blue-card)", border: "0.5px solid var(--sky-bd)", borderRadius: 16, padding: "24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: 26, fontWeight: 800, color: "var(--sky)", marginBottom: 3 }}>{openProvider.rate}</div>
                <div style={{ fontSize: 12, color: "var(--w40)", marginBottom: 20 }}>per hour · USD</div>

                {contactSent ? (
                  <div style={{ background: "rgba(100,200,120,0.1)", border: "0.5px solid rgba(100,200,120,0.3)", borderRadius: 10, padding: "14px" }}>
                    <div style={{ fontSize: 24, marginBottom: 6 }}>✅</div>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#6DC87A", marginBottom: 4 }}>Message sent!</div>
                    <div style={{ fontSize: 12, color: "var(--w40)" }}>{openProvider.name} will reply within {openProvider.responseTime}</div>
                  </div>
                ) : (
                  <>
                    <button onClick={() => setContactSent(true)} style={{
                      width: "100%", padding: "13px", border: "none", borderRadius: 10, cursor: "pointer",
                      fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
                      background: "var(--sky)", color: "#001F3D", marginBottom: 10, transition: "all 0.2s",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                    >
                      <IconBolt size={16}/> Hire {openProvider.name.split(" ")[0]}
                    </button>
                    <button style={{
                      width: "100%", padding: "11px", border: "0.5px solid var(--bd2)", borderRadius: 10, cursor: "pointer",
                      fontSize: 13, fontWeight: 600, fontFamily: "var(--font-syne)",
                      background: "var(--w07)", color: "var(--w70)", transition: "all 0.2s",
                    }}>Message first</button>
                  </>
                )}

                <div style={{ fontSize: 11, color: "var(--w30)", marginTop: 12, lineHeight: 1.5 }}>
                  Replies in {openProvider.responseTime} · Verified by Web3 Jobs HQ
                </div>
              </div>

              {/* Quick stats */}
              <div style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", borderRadius: 14, padding: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { icon: <IconShieldCheck size={15} color="var(--sky)"/>, label: "Verified provider", val: "Reviewed by HQ" },
                    { icon: <IconBriefcase size={15} color="var(--gold)"/>,  label: "Completed projects", val: `${openProvider.completedProjects} projects` },
                    { icon: <IconClock size={15} color="#6DC87A"/>,          label: "Response time", val: openProvider.responseTime },
                    { icon: <IconUsers size={15} color="var(--w40)"/>,       label: "Category", val: openProvider.category },
                  ].map((s,i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--w07)", border: "0.5px solid var(--bd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "var(--w40)" }}>{s.label}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{s.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div style={{ background: av.bg, border: `0.5px solid ${av.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: av.dot, display: "inline-block", flexShrink: 0 }}/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: av.color }}>{openProvider.availability}</div>
                  <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 1 }}>for new projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other providers */}
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>More providers</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 }}>
              {providers.filter(p => p.id !== openProvider.id && p.category === openProvider.category).slice(0,3).map(p => (
                <ProviderCard key={p.id} provider={p} onOpen={() => setOpenProvider(p)}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── INDEX VIEW ─────────────────────────────────────────── */
  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "56px 24px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(59,158,232,0.09) 0%, transparent 65%)" }}/>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }}/>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 28 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--sky)" }}>Verified Providers</span>
          </div>

          <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap", paddingBottom: 40 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 500, color: "var(--sky)", marginBottom: 20 }}>
                <IconShieldCheck size={14}/> All providers verified by HQ
              </div>
              <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
                Verified web3<br/><span style={{ color: "var(--sky)" }}>service providers</span>
              </h1>
              <p style={{ fontSize: 16, color: "var(--w50)", lineHeight: 1.75, maxWidth: 440, marginBottom: 32 }}>
                Vetted freelancers and specialists across every web3 discipline — from smart contract auditors to community leads. Every provider is reviewed and verified by the Web3 Jobs HQ team.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, maxWidth: 420 }}>
                {[
                  { num: String(providers.length), label: "Verified providers" },
                  { num: `${providers.filter(p=>p.availability==="Available now").length}`, label: "Available now" },
                  { num: "4.9★", label: "Avg rating" },
                  { num: "48h", label: "Avg response" },
                ].map((s,i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid var(--bd2)", borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 800, color: "var(--sky)", marginBottom: 2 }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: "var(--w40)", lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured providers mini-preview */}
            <div style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--w30)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Featured this week</div>
              {providers.filter(p => p.featured).map(p => (
                <div key={p.id} onClick={() => setOpenProvider(p)} style={{
                  display: "flex", gap: 12, alignItems: "center",
                  background: "rgba(255,255,255,0.04)", border: "0.5px solid var(--bd2)",
                  borderRadius: 12, padding: "12px 14px", cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--sky-bd)"; (e.currentTarget as HTMLDivElement).style.background = "var(--sky-dim)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd2)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <Image src={p.avatar} alt={p.name} width={40} height={40} style={{ borderRadius: "50%", border: "1.5px solid var(--sky-bd)", flexShrink: 0 }}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "#fff" }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: "var(--sky)" }}>{p.role.split(" ").slice(0,3).join(" ")}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "var(--gold)", flexShrink: 0 }}>{p.rate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search + filters bar */}
          <div style={{ borderTop: "0.5px solid var(--bd)", padding: "20px 0", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 220px", display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "0.5px solid var(--bd2)", borderRadius: 10, padding: "0 14px" }}>
              <IconSearch size={16} color="var(--w30)"/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, role, or skill..."
                style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)", padding: "11px 0", width: "100%" }}/>
              {search && <button onClick={() => setSearch("")} style={{ background: "none", border: "none", color: "var(--w30)", cursor: "pointer", display: "flex" }}><IconX size={14}/></button>}
            </div>
            <select value={avail} onChange={e => setAvail(e.target.value)} style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", color: "#fff", fontSize: 13, fontFamily: "var(--font-dm)", borderRadius: 10, padding: "11px 14px", cursor: "pointer", outline: "none" }}>
              {availabilityFilters.map(a => <option key={a} style={{ background: "#12177A" }}>{a}</option>)}
            </select>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", color: "#fff", fontSize: 13, fontFamily: "var(--font-dm)", borderRadius: 10, padding: "11px 14px", cursor: "pointer", outline: "none" }}>
              {sortOptions.map(s => <option key={s} style={{ background: "#12177A" }}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* Category pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {providerCategories.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{
              fontSize: 12, fontFamily: "var(--font-dm)", fontWeight: category === c ? 600 : 400,
              padding: "6px 14px", borderRadius: 999,
              border: `0.5px solid ${category === c ? "var(--sky-bd)" : "var(--bd)"}`,
              color: category === c ? "var(--sky)" : "var(--w50)",
              background: category === c ? "var(--sky-dim)" : "transparent",
              cursor: "pointer", transition: "all 0.18s",
            }}>{c}</button>
          ))}
          <span style={{ fontSize: 13, color: "var(--w40)", alignSelf: "center", marginLeft: 8 }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>{filtered.length}</span> providers
          </span>
        </div>

        {/* Provider grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
          {filtered.map(p => <ProviderCard key={p.id} provider={p} onOpen={() => setOpenProvider(p)}/>)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "56px 24px", background: "var(--w04)", border: "0.5px solid var(--bd)", borderRadius: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>No providers match</h3>
            <button onClick={() => { setSearch(""); setCategory("All"); setAvail("All"); }} style={{ fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#3D2200", padding: "10px 22px", border: "none", borderRadius: 8, background: "var(--gold)", cursor: "pointer", marginTop: 8 }}>
              Clear filters
            </button>
          </div>
        )}

        {/* Become a provider CTA */}
        <div style={{ marginTop: 64, background: "var(--blue)", border: "1.5px solid var(--sky-bd)", borderRadius: 20, padding: "48px 36px", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(59,158,232,0.07) 0%, transparent 60%)" }}/>
          <div style={{ position: "relative", flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>
              Are you a web3 freelancer?
            </h2>
            <p style={{ fontSize: 15, color: "var(--w50)", lineHeight: 1.7, maxWidth: 440 }}>
              Apply to become a verified provider. Get discovered by 312+ verified web3 companies, showcase your portfolio, and receive inbound leads from our job board audience.
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              {["Free to apply","Reviewed within 48 hours","Receive inbound hiring requests","Featured in marquee on homepage"].map((f,i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <IconCheck size={11} color="var(--sky)"/>
                  </div>
                  <span style={{ fontSize: 13, color: "var(--w70)" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="mailto:web3jobhq@gmail.com?subject=Provider application" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              fontSize: 15, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#001F3D", padding: "14px 32px", borderRadius: 12,
              background: "var(--sky)", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(59,158,232,0.3)", transition: "all 0.2s",
            }}>
              Apply to be verified <IconArrowRight size={16}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PROVIDER CARD ──────────────────────────────────────── */
function ProviderCard({ provider, onOpen }: { provider: Provider; onOpen: () => void }) {
  const av = availColor[provider.availability];
  return (
    <div onClick={onOpen} style={{
      background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
      borderRadius: 18, padding: "24px", cursor: "pointer",
      transition: "all 0.2s", display: "flex", flexDirection: "column", gap: 0,
      position: "relative",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--sky-bd)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd2)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
    >
      {provider.topRated && (
        <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)", display: "flex", alignItems: "center", gap: 3 }}>
          <IconSparkles size={10}/>Top Rated
        </div>
      )}

      {/* Avatar + verified */}
      <div style={{ position: "relative", width: 64, height: 64, marginBottom: 14 }}>
        <Image src={provider.avatar} alt={provider.name} width={64} height={64}
          style={{ borderRadius: "50%", border: "2px solid var(--bd2)" }}/>
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderRadius: "50%", background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--blue-card)" }}>
          <IconShieldCheck size={11} color="#fff"/>
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{provider.name}</div>
      <div style={{ fontSize: 13, color: "var(--sky)", marginBottom: 10, lineHeight: 1.3 }}>{provider.role}</div>

      {/* Rating + rate */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <IconStar size={14} color="var(--gold)" fill="var(--gold)"/>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{provider.rating.toFixed(1)}</span>
          <span style={{ fontSize: 12, color: "var(--w40)" }}>({provider.reviews})</span>
        </div>
        <div style={{ fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 700, color: "var(--gold)" }}>{provider.rate}</div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {provider.tags.slice(0,3).map(t => (
          <span key={t} style={{ fontSize: 11, padding: "2px 9px", borderRadius: 999, background: "var(--w07)", color: "var(--w50)", border: "0.5px solid var(--bd)" }}>{t}</span>
        ))}
        {provider.tags.length > 3 && <span style={{ fontSize: 11, color: "var(--w30)" }}>+{provider.tags.length - 3}</span>}
      </div>

      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "var(--w40)", marginBottom: 16, flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><IconBriefcase size={13}/>{provider.completedProjects} projects</span>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><IconClock size={13}/>{provider.responseTime}</span>
      </div>

      {/* Availability + CTA */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "0.5px solid var(--bd)" }}>
        <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 999, background: av.bg, color: av.color, border: `0.5px solid ${av.border}`, display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: av.dot, display: "inline-block" }}/>
          {provider.availability}
        </span>
        <span style={{ fontSize: 13, color: "var(--sky)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
          View profile <IconArrowRight size={13}/>
        </span>
      </div>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", borderRadius: 16, padding: "24px 26px" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16, paddingBottom: 12, borderBottom: "0.5px solid var(--bd)" }}>{title}</h2>
      {children}
    </div>
  );
}
