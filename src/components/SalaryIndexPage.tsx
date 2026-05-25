"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import {
  IconTrendingUp, IconTrendingDown, IconArrowRight,
  IconChevronRight, IconSearch, IconFilter,
  IconCurrencyDollar, IconBriefcase, IconMapPin,
  IconUsers, IconChartBar, IconInfoCircle, IconX,
} from "@tabler/icons-react";

/* ── DATA ─────────────────────────────────────────────────── */
interface RoleData {
  title: string;
  category: string;
  chain: string;
  low: number;
  mid: number;
  high: number;
  trend: number; // percentage YoY
  yoe: string;
  remote: boolean;
  hot: boolean;
  demand: "High" | "Medium" | "Low";
  description: string;
}

const allRoles: RoleData[] = [
  { title: "Protocol Engineer (Rust/Go)", category: "Engineering", chain: "Ethereum/Solana", low: 160, mid: 210, high: 280, trend: 28, yoe: "5+", remote: true,  hot: true,  demand: "High",   description: "Core blockchain infrastructure engineers working on L1/L2 clients and rollup stacks." },
  { title: "Smart Contract Auditor",      category: "Engineering", chain: "Ethereum",        low: 130, mid: 175, high: 240, trend: 22, yoe: "3+", remote: true,  hot: true,  demand: "High",   description: "Security specialists who review smart contracts for vulnerabilities before deployment." },
  { title: "Senior Solidity Engineer",    category: "Engineering", chain: "Ethereum",        low: 120, mid: 165, high: 220, trend: 18, yoe: "3+", remote: true,  hot: true,  demand: "High",   description: "Production smart contract developers for DeFi protocols and dApps." },
  { title: "Rust Developer",             category: "Engineering", chain: "Solana",          low: 120, mid: 155, high: 200, trend: 24, yoe: "2+", remote: true,  hot: true,  demand: "High",   description: "Solana program developers working on high-performance on-chain code." },
  { title: "ZK Engineer",               category: "Engineering", chain: "Ethereum/Base",   low: 150, mid: 200, high: 270, trend: 35, yoe: "3+", remote: true,  hot: true,  demand: "High",   description: "Zero-knowledge proof specialists — one of the most in-demand roles in all of web3." },
  { title: "Frontend dApp Engineer",    category: "Engineering", chain: "Multi",           low: 90,  mid: 125, high: 170, trend: 14, yoe: "2+", remote: true,  hot: false, demand: "High",   description: "React/Next.js engineers building user-facing web3 interfaces with wallet integration." },
  { title: "Web3 DevRel Engineer",      category: "Engineering", chain: "Multi",           low: 80,  mid: 115, high: 155, trend: 12, yoe: "2+", remote: true,  hot: false, demand: "Medium", description: "Developer relations engineers creating SDKs, docs, and developer tooling." },
  { title: "Blockchain Data Engineer",  category: "Engineering", chain: "Multi",           low: 100, mid: 135, high: 180, trend: 19, yoe: "3+", remote: true,  hot: false, demand: "Medium", description: "Engineers building on-chain data pipelines and analytics infrastructure." },
  { title: "Head of Partnerships",      category: "Operations",  chain: "Multi",           low: 110, mid: 150, high: 200, trend: 16, yoe: "4+", remote: true,  hot: false, demand: "Medium", description: "Senior business development roles focused on ecosystem partnerships and integrations." },
  { title: "DAO Operations Manager",    category: "Operations",  chain: "Multi",           low: 55,  mid: 75,  high: 105, trend: 9,  yoe: "1+", remote: true,  hot: false, demand: "Medium", description: "Operations leads managing DAO treasury, governance, and contributor coordination." },
  { title: "Legal Counsel (Crypto)",    category: "Operations",  chain: "Multi",           low: 120, mid: 165, high: 220, trend: 21, yoe: "5+", remote: false, hot: true,  demand: "High",   description: "In-house lawyers specialising in crypto regulatory compliance and token law." },
  { title: "Chief of Staff",            category: "Operations",  chain: "Multi",           low: 100, mid: 140, high: 185, trend: 11, yoe: "4+", remote: true,  hot: false, demand: "Low",    description: "Executive support and operations for fast-growing web3 startups." },
  { title: "Web3 Growth Manager",       category: "Marketing",   chain: "Multi",           low: 60,  mid: 90,  high: 130, trend: 15, yoe: "2+", remote: true,  hot: false, demand: "High",   description: "User acquisition and growth leads focused on on-chain metrics and DeFi TVL growth." },
  { title: "DeFi Content Strategist",   category: "Marketing",   chain: "Ethereum",        low: 45,  mid: 65,  high: 95,  trend: 8,  yoe: "1+", remote: true,  hot: false, demand: "Medium", description: "Content strategists writing educational and marketing content for DeFi protocols." },
  { title: "Social Media Manager",      category: "Marketing",   chain: "Multi",           low: 45,  mid: 62,  high: 90,  trend: 7,  yoe: "1+", remote: true,  hot: false, demand: "Medium", description: "Social media managers running X, Discord, and Farcaster presence for web3 projects." },
  { title: "Ecosystem Growth Lead",     category: "Marketing",   chain: "Multi",           low: 75,  mid: 105, high: 145, trend: 17, yoe: "3+", remote: true,  hot: false, demand: "High",   description: "Ecosystem development roles focused on onboarding developers and protocols to a chain." },
  { title: "Community Manager",         category: "Community",   chain: "Multi",           low: 50,  mid: 68,  high: 95,  trend: 10, yoe: "1+", remote: true,  hot: false, demand: "High",   description: "Community managers running Discord and Telegram communities for web3 projects." },
  { title: "Community Lead",            category: "Community",   chain: "Multi",           low: 65,  mid: 88,  high: 120, trend: 11, yoe: "2+", remote: true,  hot: false, demand: "High",   description: "Senior community leaders owning the full community strategy and team." },
  { title: "DAO Governance Specialist", category: "Community",   chain: "Ethereum",        low: 60,  mid: 82,  high: 115, trend: 13, yoe: "2+", remote: true,  hot: false, demand: "Medium", description: "Specialists managing governance processes, voting, and proposal coordination." },
  { title: "NFT Product Designer",      category: "Design",      chain: "Ethereum",        low: 80,  mid: 115, high: 160, trend: 11, yoe: "3+", remote: true,  hot: false, demand: "Medium", description: "Product designers crafting NFT marketplace and minting experiences." },
  { title: "Web3 UX Researcher",        category: "Design",      chain: "Multi",           low: 75,  mid: 105, high: 145, trend: 9,  yoe: "2+", remote: true,  hot: false, demand: "Low",    description: "UX researchers focused on wallet onboarding, DeFi usability, and web3 mental models." },
  { title: "Motion Designer (Web3)",    category: "Design",      chain: "Multi",           low: 60,  mid: 85,  high: 120, trend: 8,  yoe: "2+", remote: true,  hot: false, demand: "Low",    description: "Motion and animation designers for NFT projects, protocol marketing, and dApp UI." },
  { title: "Technical Writer",          category: "Non-tech",    chain: "Multi",           low: 50,  mid: 70,  high: 100, trend: 9,  yoe: "1+", remote: true,  hot: false, demand: "Medium", description: "Technical writers producing developer docs, guides, and protocol documentation." },
  { title: "DAO Contributor (Bounties)", category: "Non-tech",   chain: "Multi",           low: 20,  mid: 45,  high: 80,  trend: 15, yoe: "0+", remote: true,  hot: false, demand: "High",   description: "Entry-level contributors working on DAO bounties across writing, ops, and design." },
  { title: "Crypto Researcher",         category: "Non-tech",    chain: "Multi",           low: 60,  mid: 90,  high: 130, trend: 14, yoe: "2+", remote: true,  hot: false, demand: "Medium", description: "Research analysts covering DeFi protocols, tokenomics, and market trends." },
];

const categories = ["All","Engineering","Marketing","Community","Operations","Design","Non-tech"];
const chainFilters = ["All chains","Ethereum","Solana","Base","TON","Multi"];
const demandFilters = ["All","High","Medium","Low"];
const maxGlobal = 280;

const demandColor: Record<string, {bg:string;color:string;border:string}> = {
  High:   { bg:"rgba(100,200,120,0.12)", color:"#6DC87A", border:"rgba(100,200,120,0.3)" },
  Medium: { bg:"var(--gold-dim)",         color:"var(--gold)", border:"var(--gold-bd)" },
  Low:    { bg:"rgba(255,255,255,0.06)",  color:"var(--w50)", border:"var(--bd2)" },
};

const globalStats = [
  { num: "$45k",  label: "Lowest entry role",  sub: "DAO contributor / content",  color: "var(--w60)" },
  { num: "$280k", label: "Highest senior role", sub: "Protocol / ZK engineer",    color: "var(--gold)" },
  { num: "+17%",  label: "Avg YoY growth",      sub: "Across all web3 roles",     color: "#6DC87A" },
  { num: "25",    label: "Roles tracked",        sub: "Updated monthly",           color: "var(--sky)" },
];

/* ── COMPONENT ─────────────────────────────────────────────── */
export default function SalaryIndexPage() {
  const [search, setSearch]         = useState("");
  const [category, setCategory]     = useState("All");
  const [chainFilter, setChainFilter] = useState("All chains");
  const [demandFilter, setDemandFilter] = useState("All");
  const [sort, setSort]             = useState("highest");
  const [openRole, setOpenRole]     = useState<RoleData | null>(null);

  const filtered = useMemo(() => {
    let roles = allRoles.filter(r => {
      const q = search.toLowerCase();
      const matchSearch = !q || r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q);
      const matchCat    = category === "All" || r.category === category;
      const matchChain  = chainFilter === "All chains" || r.chain.includes(chainFilter);
      const matchDemand = demandFilter === "All" || r.demand === demandFilter;
      return matchSearch && matchCat && matchChain && matchDemand;
    });
    if (sort === "highest")  roles = [...roles].sort((a,b) => b.high - a.high);
    if (sort === "lowest")   roles = [...roles].sort((a,b) => a.low - b.low);
    if (sort === "trending") roles = [...roles].sort((a,b) => b.trend - a.trend);
    if (sort === "alpha")    roles = [...roles].sort((a,b) => a.title.localeCompare(b.title));
    return roles;
  }, [search, category, chainFilter, demandFilter, sort]);

  /* ── ROLE DETAIL MODAL ──────────────────────────────────── */
  if (openRole) {
    const d = demandColor[openRole.demand];
    const barPct = (val: number) => Math.round(val / maxGlobal * 100);
    return (
      <div style={{ background:"var(--blue-deep)", minHeight:"100vh" }}>
        <div style={{ background:"var(--blue)", borderBottom:"0.5px solid var(--bd)", padding:"14px 24px" }}>
          <div style={{ maxWidth:860, margin:"0 auto", display:"flex", alignItems:"center", gap:6, fontSize:12, color:"var(--w40)" }}>
            <Link href="/" style={{ color:"var(--w40)", textDecoration:"none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <button onClick={() => setOpenRole(null)} style={{ background:"none", border:"none", color:"var(--w40)", cursor:"pointer", fontSize:12, padding:0 }}>Salary Index</button>
            <IconChevronRight size={12}/>
            <span style={{ color:"var(--gold)" }}>{openRole.title}</span>
          </div>
        </div>

        <div style={{ maxWidth:860, margin:"0 auto", padding:"40px 24px 80px" }}>
          <button onClick={() => setOpenRole(null)} style={{
            display:"inline-flex", alignItems:"center", gap:6,
            fontSize:13, color:"var(--w50)", background:"none", border:"none",
            cursor:"pointer", marginBottom:28, padding:0,
          }}>← Back to Salary Index</button>

          {/* Role header */}
          <div style={{ background:"var(--blue)", border:"0.5px solid var(--bd2)", borderRadius:20, padding:"32px", marginBottom:24, position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 50% 60% at 0% 50%, rgba(245,166,35,0.06) 0%, transparent 70%)" }}/>
            <div style={{ position:"relative" }}>
              <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
                <span style={{ fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:999, background:d.bg, color:d.color, border:`0.5px solid ${d.border}` }}>
                  {openRole.demand} demand
                </span>
                {openRole.hot && <span style={{ fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:999, background:"var(--gold-dim)", color:"var(--gold)", border:"0.5px solid var(--gold-bd)" }}>🔥 Hot role</span>}
                <span style={{ fontSize:11, padding:"3px 10px", borderRadius:999, background:"var(--w07)", color:"var(--w50)", border:"0.5px solid var(--bd)" }}>{openRole.category}</span>
                <span style={{ fontSize:11, padding:"3px 10px", borderRadius:999, background:"var(--w07)", color:"var(--w50)", border:"0.5px solid var(--bd)" }}>{openRole.chain}</span>
              </div>
              <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"clamp(22px,4vw,32px)", fontWeight:800, color:"#fff", marginBottom:10, letterSpacing:"-0.02em" }}>{openRole.title}</h1>
              <p style={{ fontSize:14, color:"var(--w50)", lineHeight:1.7, maxWidth:560 }}>{openRole.description}</p>
            </div>
          </div>

          {/* Salary range visual */}
          <div style={{ background:"var(--blue-card)", border:"0.5px solid var(--bd2)", borderRadius:16, padding:"28px", marginBottom:24 }}>
            <h2 style={{ fontFamily:"var(--font-syne)", fontSize:16, fontWeight:700, color:"#fff", marginBottom:24 }}>Salary range breakdown</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:16, marginBottom:28 }}>
              {[
                { label:"Entry level", val:openRole.low, sub:"0–2 yrs exp", color:"var(--sky)" },
                { label:"Mid level",   val:openRole.mid, sub:"2–5 yrs exp", color:"var(--gold)" },
                { label:"Senior",      val:openRole.high,sub:"5+ yrs exp",  color:"#6DC87A" },
              ].map((s,i) => (
                <div key={i} style={{ background:"var(--blue-deep)", border:"0.5px solid var(--bd)", borderRadius:12, padding:"18px 16px" }}>
                  <div style={{ fontSize:11, color:"var(--w40)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:6 }}>{s.label}</div>
                  <div style={{ fontFamily:"var(--font-syne)", fontSize:26, fontWeight:800, color:s.color, marginBottom:3 }}>${s.val}k</div>
                  <div style={{ fontSize:11, color:"var(--w30)" }}>{s.sub}</div>
                  <div style={{ height:4, background:"var(--w07)", borderRadius:999, overflow:"hidden", marginTop:12 }}>
                    <div style={{ height:"100%", width:`${barPct(s.val)}%`, background:s.color, borderRadius:999, transition:"width 0.8s ease" }}/>
                  </div>
                </div>
              ))}
            </div>

            {/* Full range bar */}
            <div style={{ marginBottom:8 }}>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"var(--w40)", marginBottom:8 }}>
                <span>$0k</span><span>$100k</span><span>$200k</span><span>$280k</span>
              </div>
              <div style={{ height:10, background:"var(--w07)", borderRadius:999, position:"relative", overflow:"hidden" }}>
                <div style={{
                  position:"absolute",
                  left:`${barPct(openRole.low)}%`,
                  width:`${barPct(openRole.high) - barPct(openRole.low)}%`,
                  height:"100%",
                  background:"linear-gradient(90deg, var(--sky), var(--gold), #6DC87A)",
                  borderRadius:999,
                }}/>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"var(--w50)", marginTop:8 }}>
                <span style={{ color:"var(--sky)" }}>${openRole.low}k min</span>
                <span style={{ color:"var(--gold)" }}>${openRole.mid}k median</span>
                <span style={{ color:"#6DC87A" }}>${openRole.high}k max</span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:14, marginBottom:28 }}>
            {[
              { icon:<IconTrendingUp size={18}/>, label:"YoY growth",   val:`+${openRole.trend}%`, color:"#6DC87A" },
              { icon:<IconBriefcase size={18}/>,  label:"Experience",   val:openRole.yoe + " years", color:"var(--gold)" },
              { icon:<IconMapPin size={18}/>,     label:"Work type",    val:openRole.remote ? "Remote ✓" : "On-site", color:"var(--sky)" },
              { icon:<IconUsers size={18}/>,      label:"Demand level", val:openRole.demand, color:d.color },
            ].map((s,i) => (
              <div key={i} style={{ background:"var(--w04)", border:"0.5px solid var(--bd)", borderRadius:12, padding:"16px" }}>
                <div style={{ color:s.color, marginBottom:8 }}>{s.icon}</div>
                <div style={{ fontSize:10, color:"var(--w40)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>{s.label}</div>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:15, fontWeight:700, color:"#fff" }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Negotiation tip */}
          <div style={{ background:"var(--gold-dim)", border:"0.5px solid var(--gold-bd)", borderLeft:"3px solid var(--gold)", borderRadius:14, padding:"18px 22px", marginBottom:28 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"var(--gold)", marginBottom:6 }}>💡 Negotiation tip for this role</div>
            <p style={{ fontSize:13, color:"var(--w70)", lineHeight:1.7 }}>
              {openRole.trend > 20
                ? `This role is in extreme demand (+${openRole.trend}% YoY). You have strong negotiating leverage — don't accept the first offer. Counter with the senior-level salary and ask for token allocation on top.`
                : openRole.trend > 12
                ? `Demand for this role is growing steadily (+${openRole.trend}% YoY). Come to negotiations with specific market data. The Pitch Academy's salary negotiation guide walks you through the exact counter-offer script.`
                : `This is a stable, consistently-hired role. Benchmark your salary ask at the mid-level figure and negotiate benefits like remote flexibility, equipment budget, and token allocation if base salary has a ceiling.`
              }
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            <Link href="/jobs" style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)",
              color:"#3D2200", padding:"14px", borderRadius:12,
              background:"var(--gold)", textDecoration:"none",
            }}>Browse {openRole.title} roles <IconArrowRight size={15}/></Link>
            <Link href="/pitch-academy" style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              fontSize:14, fontWeight:600, fontFamily:"var(--font-syne)",
              color:"var(--sky)", padding:"14px", borderRadius:12,
              border:"1.5px solid var(--sky-bd)", background:"var(--sky-dim)",
              textDecoration:"none",
            }}>Salary negotiation guide <IconArrowRight size={15}/></Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── INDEX VIEW ─────────────────────────────────────────── */
  return (
    <div style={{ background:"var(--blue-deep)", minHeight:"100vh" }}>

      {/* ── HERO ── */}
      <div style={{
        background:"var(--blue)", borderBottom:"0.5px solid var(--bd)",
        padding:"56px 24px 48px", textAlign:"center",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 65%)" }}/>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }}/>

        <div style={{ maxWidth:720, margin:"0 auto", position:"relative" }}>
          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, fontSize:12, color:"var(--w40)", marginBottom:24 }}>
            <Link href="/" style={{ color:"var(--w40)", textDecoration:"none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color:"var(--gold)" }}>Salary Index</span>
          </div>

          <div style={{ fontSize:48, marginBottom:16 }}>💰</div>
          <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"clamp(28px,5vw,44px)", fontWeight:800, color:"#fff", letterSpacing:"-0.02em", marginBottom:14, lineHeight:1.1 }}>
            Web3 <span style={{ color:"var(--gold)" }}>Salary Index</span>
          </h1>
          <p style={{ fontSize:"clamp(14px,2vw,16px)", color:"var(--w50)", lineHeight:1.7, maxWidth:500, margin:"0 auto 36px" }}>
            Real compensation data across {allRoles.length} web3 roles — from entry-level DAO contributors to senior protocol engineers. Updated monthly.
          </p>

          {/* Global stats */}
          <div style={{
            display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",
            background:"rgba(255,255,255,0.04)", border:"0.5px solid var(--bd2)",
            borderRadius:14, overflow:"hidden", maxWidth:620, margin:"0 auto",
          }}>
            {globalStats.map((s,i) => (
              <div key={i} style={{
                padding:"18px 12px", textAlign:"center",
                borderRight: i < globalStats.length-1 ? "0.5px solid var(--bd)" : "none",
              }}>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:"clamp(18px,2vw,24px)", fontWeight:800, color:s.color }}>{s.num}</div>
                <div style={{ fontSize:12, color:"var(--w60)", marginTop:2, fontWeight:500 }}>{s.label}</div>
                <div style={{ fontSize:11, color:"var(--w30)", marginTop:2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"40px 24px 80px" }}>

        {/* ── TOP EARNERS HIGHLIGHT ── */}
        <div style={{ marginBottom:48 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            <IconChartBar size={18} color="var(--gold)"/>
            <h2 style={{ fontFamily:"var(--font-syne)", fontSize:20, fontWeight:700, color:"#fff" }}>Top earning roles in 2026</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:14 }}>
            {allRoles.filter(r=>r.hot).slice(0,5).map((r,i) => (
              <div key={i} onClick={() => setOpenRole(r)} style={{
                background:"var(--blue-card)", border:`0.5px solid ${i===0?"var(--gold-bd)":"var(--bd2)"}`,
                borderRadius:16, padding:"20px", cursor:"pointer", transition:"all 0.2s",
                position:"relative", overflow:"hidden",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor="var(--gold-bd)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow="0 12px 40px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor=i===0?"var(--gold-bd)":"var(--bd2)"; (e.currentTarget as HTMLDivElement).style.transform="none"; (e.currentTarget as HTMLDivElement).style.boxShadow="none"; }}
              >
                {i===0 && <div style={{ position:"absolute", top:0, right:0, left:0, height:3, background:"linear-gradient(90deg,var(--gold),var(--sky))" }}/>}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                  <span style={{ fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:999, background:"var(--gold-dim)", color:"var(--gold)", border:"0.5px solid var(--gold-bd)" }}>#{i+1}</span>
                  <span style={{ fontSize:11, color:"#6DC87A", display:"flex", alignItems:"center", gap:3 }}>
                    <IconTrendingUp size={12}/>+{r.trend}%
                  </span>
                </div>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"#fff", marginBottom:6, lineHeight:1.3 }}>{r.title}</div>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:20, fontWeight:800, color:"var(--gold)", marginBottom:4 }}>${r.low}k–${r.high}k</div>
                <div style={{ fontSize:11, color:"var(--w40)" }}>{r.chain} · {r.yoe} yrs exp</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SEARCH + FILTERS ── */}
        <div style={{ display:"flex", gap:12, marginBottom:20, flexWrap:"wrap", alignItems:"center" }}>
          {/* Search */}
          <div style={{ flex:"1 1 200px", display:"flex", alignItems:"center", gap:10, background:"rgba(255,255,255,0.05)", border:"0.5px solid var(--bd2)", borderRadius:10, padding:"0 14px" }}>
            <IconSearch size={16} color="var(--w30)"/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search roles..."
              style={{ background:"transparent", border:"none", outline:"none", color:"#fff", fontSize:14, fontFamily:"var(--font-dm)", padding:"11px 0", width:"100%" }}/>
            {search && <button onClick={()=>setSearch("")} style={{ background:"none", border:"none", color:"var(--w30)", cursor:"pointer", display:"flex" }}><IconX size={14}/></button>}
          </div>

          {/* Sort */}
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{
            background:"var(--blue-card)", border:"0.5px solid var(--bd2)", color:"#fff",
            fontSize:13, fontFamily:"var(--font-dm)", borderRadius:10, padding:"11px 14px",
            cursor:"pointer", outline:"none", flex:"0 0 auto",
          }}>
            <option value="highest" style={{background:"#12177A"}}>Highest salary</option>
            <option value="lowest"  style={{background:"#12177A"}}>Lowest salary</option>
            <option value="trending"style={{background:"#12177A"}}>Fastest growing</option>
            <option value="alpha"   style={{background:"#12177A"}}>Alphabetical</option>
          </select>
        </div>

        {/* Filter pills row */}
        <div style={{ display:"flex", gap:8, marginBottom:28, flexWrap:"wrap" }}>
          {/* Category */}
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {categories.map(c => (
              <button key={c} onClick={()=>setCategory(c)} style={{
                fontSize:12, fontFamily:"var(--font-dm)",
                padding:"5px 12px", borderRadius:999,
                border:`0.5px solid ${category===c?"var(--gold-bd)":"var(--bd)"}`,
                color: category===c?"var(--gold)":"var(--w50)",
                background: category===c?"var(--gold-dim)":"transparent",
                cursor:"pointer", transition:"all 0.18s", fontWeight:category===c?600:400,
              }}>{c}</button>
            ))}
          </div>
          <div style={{ width:"0.5px", background:"var(--bd)", margin:"0 4px" }}/>
          {/* Demand */}
          {demandFilters.map(d => (
            <button key={d} onClick={()=>setDemandFilter(d)} style={{
              fontSize:12, fontFamily:"var(--font-dm)",
              padding:"5px 12px", borderRadius:999,
              border:`0.5px solid ${demandFilter===d?"var(--sky-bd)":"var(--bd)"}`,
              color: demandFilter===d?"var(--sky)":"var(--w50)",
              background: demandFilter===d?"var(--sky-dim)":"transparent",
              cursor:"pointer", transition:"all 0.18s", fontWeight:demandFilter===d?600:400,
            }}>{d === "All" ? "All demand" : d}</button>
          ))}
        </div>

        {/* Results count */}
        <div style={{ fontSize:13, color:"var(--w40)", marginBottom:16 }}>
          Showing <span style={{ color:"#fff", fontWeight:600 }}>{filtered.length}</span> of {allRoles.length} roles
          {search && <span> matching &quot;<span style={{color:"var(--gold)"}}>{search}</span>&quot;</span>}
        </div>

        {/* ── FULL TABLE ── */}
        {/* Header */}
        <div style={{ display:"grid", gridTemplateColumns:"2.5fr 1fr 1.5fr 1fr 1fr", gap:12, padding:"10px 20px", marginBottom:8 }}>
          {["Role & category","Experience","Salary range","YoY trend","Demand"].map(h => (
            <div key={h} style={{ fontSize:11, fontWeight:600, color:"var(--w30)", letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</div>
          ))}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {filtered.map((r,i) => {
            const d = demandColor[r.demand];
            const pct = Math.round(((r.high-r.low)/2+r.low)/maxGlobal*100);
            return (
              <div key={i} onClick={()=>setOpenRole(r)} style={{
                display:"grid", gridTemplateColumns:"2.5fr 1fr 1.5fr 1fr 1fr",
                gap:12, alignItems:"center",
                background:"var(--w04)", border:"0.5px solid var(--bd)",
                borderRadius:14, padding:"16px 20px",
                cursor:"pointer", transition:"all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor="var(--gold-bd)"; (e.currentTarget as HTMLDivElement).style.background="var(--gold-dim)"; (e.currentTarget as HTMLDivElement).style.transform="translateX(4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor="var(--bd)"; (e.currentTarget as HTMLDivElement).style.background="var(--w04)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}
              >
                {/* Role */}
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:7, flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"#fff" }}>{r.title}</span>
                    {r.hot && <span style={{ fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:999, background:"var(--gold-dim)", color:"var(--gold)", border:"0.5px solid var(--gold-bd)" }}>HOT</span>}
                  </div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    <span style={{ fontSize:11, color:"var(--w40)" }}>{r.category}</span>
                    <span style={{ color:"var(--w30)" }}>·</span>
                    <span style={{ fontSize:11, color:"var(--w40)" }}>{r.chain}</span>
                  </div>
                  <div style={{ height:4, background:"var(--w07)", borderRadius:999, overflow:"hidden", marginTop:8, maxWidth:200 }}>
                    <div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,var(--sky),var(--gold))", borderRadius:999 }}/>
                  </div>
                </div>

                {/* Experience */}
                <div style={{ fontSize:13, color:"var(--w60)" }}>{r.yoe} yrs</div>

                {/* Salary */}
                <div>
                  <div style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"var(--gold)" }}>${r.low}k – ${r.high}k</div>
                  <div style={{ fontSize:11, color:"var(--w30)", marginTop:2 }}>Median: ${r.mid}k</div>
                </div>

                {/* Trend */}
                <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:13, color: r.trend >= 20 ? "#6DC87A" : r.trend >= 10 ? "var(--gold)" : "var(--w50)" }}>
                  {r.trend >= 10 ? <IconTrendingUp size={14}/> : <IconTrendingDown size={14}/>}
                  +{r.trend}%
                </div>

                {/* Demand */}
                <div>
                  <span style={{ fontSize:11, fontWeight:600, padding:"3px 9px", borderRadius:999, background:d.bg, color:d.color, border:`0.5px solid ${d.border}` }}>
                    {r.demand}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"56px 24px", background:"var(--w04)", border:"0.5px solid var(--bd)", borderRadius:16 }}>
            <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
            <h3 style={{ fontFamily:"var(--font-syne)", fontSize:18, fontWeight:700, color:"#fff", marginBottom:8 }}>No roles match your filters</h3>
            <button onClick={() => { setSearch(""); setCategory("All"); setChainFilter("All chains"); setDemandFilter("All"); }} style={{ fontSize:13, fontWeight:700, fontFamily:"var(--font-syne)", color:"#3D2200", padding:"10px 22px", border:"none", borderRadius:8, background:"var(--gold)", cursor:"pointer", marginTop:8 }}>
              Clear filters
            </button>
          </div>
        )}

        {/* ── METHODOLOGY NOTE ── */}
        <div style={{ marginTop:48, background:"var(--blue)", border:"0.5px solid var(--bd2)", borderRadius:16, padding:"24px 28px" }}>
          <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
            <IconInfoCircle size={20} color="var(--sky)" style={{ flexShrink:0, marginTop:2 }}/>
            <div>
              <div style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"#fff", marginBottom:8 }}>About this data</div>
              <p style={{ fontSize:13, color:"var(--w50)", lineHeight:1.7 }}>
                Salary data is sourced from verified job listings on Web3 Jobs HQ, community salary submissions via our Google Form, and publicly available compensation data from DeFi protocols and web3 companies. All figures are annual USD, remote roles unless stated. Data is updated monthly. Ranges represent the 10th–90th percentile for each role. <Link href="/pitch-academy" style={{ color:"var(--gold)", textDecoration:"none" }}>See our salary negotiation guide →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div style={{ marginTop:24, display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <Link href="/jobs" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)", color:"#3D2200", padding:"14px", borderRadius:12, background:"var(--gold)", textDecoration:"none" }}>
            Browse open roles <IconArrowRight size={15}/>
          </Link>
          <Link href="/pitch-academy" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontSize:14, fontWeight:600, fontFamily:"var(--font-syne)", color:"var(--sky)", padding:"14px", borderRadius:12, border:"1.5px solid var(--sky-bd)", background:"var(--sky-dim)", textDecoration:"none" }}>
            Negotiate your salary <IconArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
