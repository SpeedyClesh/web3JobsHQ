"use client";
import { useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  IconSearch, IconFilter, IconShieldCheck, IconFlame,
  IconMapPin, IconClock, IconBuilding, IconArrowRight,
  IconX, IconChevronLeft, IconChevronRight, IconSortAscending,
  IconBookmark, IconBriefcase, IconAdjustments,
} from "@tabler/icons-react";
import {
  allJobs, categories, locationTypes, jobTypes, chains, salaryRanges, Job
} from "@/lib/jobsData";

const JOBS_PER_PAGE = 8;

const sortOptions = ["Most recent", "Highest salary", "Most relevant", "Featured first"];

const chainLogos: Record<string, string> = {
  "All chains": "", Ethereum: "/chains/eth.svg", Solana: "/chains/sol.svg",
  Base: "/chains/base.svg", TON: "/chains/ton.svg", Arbitrum: "/chains/arb.svg",
  Optimism: "/chains/op.svg", Polygon: "/chains/matic.svg",
};

export default function JobBoard() {
  const [search, setSearch]           = useState("");
  const [category, setCategory]       = useState("All");
  const [locType, setLocType]         = useState("All locations");
  const [jobType, setJobType]         = useState("All types");
  const [chain, setChain]             = useState("All chains");
  const [salaryIdx, setSalaryIdx]     = useState(0);
  const [sort, setSort]               = useState("Most recent");
  const [page, setPage]               = useState(1);
  const [saved, setSaved]             = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Read URL search params (?q=, ?chain=) on mount
  const searchParams = useSearchParams();
  useEffect(() => {
    const q = searchParams.get("q");
    const c = searchParams.get("chain");
    if (q) setSearch(q);
    if (c) setChain(c);
  }, [searchParams]);

  const toggleSave = (id: number) =>
    setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const filtered = useMemo(() => {
    const sal = salaryRanges[salaryIdx];
    let jobs = allJobs.filter(j => {
      const q = search.toLowerCase();
      const matchSearch = !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.tags.some(t => t.toLowerCase().includes(q)) ||
        j.techStack.some(t => t.toLowerCase().includes(q));
      const matchCat  = category === "All" || j.category === category;
      const matchLoc  = locType === "All locations" || j.locationType === locType;
      const matchType = jobType === "All types" || j.type === jobType;
      const matchChain = chain === "All chains" || j.chain === chain;
      const matchSal  = j.salary.min >= sal.min && j.salary.max <= sal.max + 10;
      return matchSearch && matchCat && matchLoc && matchType && matchChain && matchSal;
    });

    if (sort === "Highest salary")   jobs = [...jobs].sort((a,b) => b.salary.max - a.salary.max);
    if (sort === "Most recent")      jobs = [...jobs].sort((a,b) => a.postedDays - b.postedDays);
    if (sort === "Featured first")   jobs = [...jobs].sort((a,b) => (b.featured?1:0)-(a.featured?1:0));
    return jobs;
  }, [search, category, locType, jobType, chain, salaryIdx, sort]);

  const totalPages = Math.ceil(filtered.length / JOBS_PER_PAGE);
  const paginated  = filtered.slice((page-1)*JOBS_PER_PAGE, page*JOBS_PER_PAGE);

  const resetFilters = () => {
    setCategory("All"); setLocType("All locations");
    setJobType("All types"); setChain("All chains");
    setSalaryIdx(0); setPage(1);
  };
  const activeFilterCount = [
    category !== "All", locType !== "All locations",
    jobType !== "All types", chain !== "All chains", salaryIdx !== 0,
  ].filter(Boolean).length;

  // ── styles helpers ──────────────────────────────────────────────
  const pill = (active: boolean, color = "gold") => ({
    fontSize: 12, fontFamily: "var(--font-dm)",
    padding: "6px 14px",
    border: `0.5px solid ${active ? (color==="sky"?"var(--sky-bd)":"var(--gold-bd)") : "var(--bd)"}`,
    borderRadius: 999,
    color: active ? (color==="sky"?"var(--sky)":"var(--gold)") : "var(--w50)",
    background: active ? (color==="sky"?"var(--sky-dim)":"var(--gold-dim)") : "transparent",
    fontWeight: active ? 600 : 400,
    cursor: "pointer", transition: "all 0.18s", whiteSpace: "nowrap" as const,
  });

  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── PAGE HERO ────────────────────────────────── */}
      <div style={{
        background: "var(--blue)",
        borderBottom: "0.5px solid var(--bd)",
        padding: "48px 24px 36px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 50% -10%, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}/>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "var(--w40)" }}>Home</span>
            <span style={{ fontSize: 12, color: "var(--w30)" }}>/</span>
            <span style={{ fontSize: 12, color: "var(--gold)" }}>Browse jobs</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-syne)", fontSize: "clamp(26px,4vw,38px)",
            fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em",
          }}>
            Browse <span style={{ color: "var(--gold)" }}>web3 jobs</span>
          </h1>
          <p style={{ fontSize: 14, color: "var(--w50)", marginBottom: 28, maxWidth: 480 }}>
            {allJobs.length} verified roles from {new Set(allJobs.map(j=>j.company)).size} companies · Updated daily
          </p>

          {/* Search bar */}
          <div style={{
            display: "flex", maxWidth: 700, gap: 0,
            background: "rgba(255,255,255,0.06)",
            border: "0.5px solid var(--bd2)", borderRadius: 12, overflow: "hidden",
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
              <IconSearch size={18} color="var(--w30)"/>
              <input
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search roles, skills, companies..."
                style={{
                  background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontSize: 15, fontFamily: "var(--font-dm)", width: "100%",
                  padding: "16px 0",
                }}
              />
              {search && (
                <button onClick={() => setSearch("")}
                  style={{ background: "none", border: "none", color: "var(--w30)", cursor: "pointer" }}>
                  <IconX size={16}/>
                </button>
              )}
            </div>
            <button style={{
              background: "var(--gold)", color: "#3D2200",
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              border: "none", padding: "0 28px", cursor: "pointer",
              letterSpacing: "0.02em", display: "flex", alignItems: "center", gap: 8,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background="#f7b340")}
            onMouseLeave={e => (e.currentTarget.style.background="var(--gold)")}
            >
              <IconSearch size={16}/> Search
            </button>
          </div>

          {/* Quick category pills */}
          <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
            {categories.map(c => (
              <button key={c} onClick={() => { setCategory(c); setPage(1); }} style={pill(category===c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ─────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px", display: "flex", gap: 28, alignItems: "flex-start" }}>

        {/* ── SIDEBAR ─── */}
        <aside style={{
          width: sidebarOpen ? 260 : 0,
          minWidth: sidebarOpen ? 260 : 0,
          overflow: "hidden",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}>
          <div style={{
            background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
            borderRadius: 16, padding: "22px 20px", position: "sticky", top: 88,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 6 }}>
                <IconAdjustments size={16} color="var(--gold)"/> Filters
                {activeFilterCount > 0 && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 999,
                    background: "var(--gold)", color: "#3D2200", marginLeft: 4,
                  }}>{activeFilterCount}</span>
                )}
              </span>
              {activeFilterCount > 0 && (
                <button onClick={resetFilters} style={{
                  fontSize: 11, color: "var(--gold)", background: "none", border: "none",
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                }}>
                  <IconX size={12}/> Clear all
                </button>
              )}
            </div>

            {/* Location type */}
            <FilterGroup label="Location">
              {locationTypes.map(l => (
                <button key={l} onClick={() => { setLocType(l); setPage(1); }}
                  style={{
                    ...pill(locType===l,"sky"),
                    fontSize: 12, display: "block", width: "100%",
                    textAlign: "left", marginBottom: 6, padding: "7px 12px",
                  }}>{l}</button>
              ))}
            </FilterGroup>

            {/* Job type */}
            <FilterGroup label="Job type">
              {jobTypes.map(t => (
                <button key={t} onClick={() => { setJobType(t); setPage(1); }}
                  style={{
                    ...pill(jobType===t,"sky"),
                    fontSize: 12, display: "block", width: "100%",
                    textAlign: "left", marginBottom: 6, padding: "7px 12px",
                  }}>{t}</button>
              ))}
            </FilterGroup>

            {/* Chain */}
            <FilterGroup label="Chain">
              {chains.map(c => (
                <button key={c} onClick={() => { setChain(c); setPage(1); }}
                  style={{
                    ...pill(chain===c,"sky"),
                    fontSize: 12, display: "flex", alignItems: "center", gap: 7,
                    width: "100%", textAlign: "left", marginBottom: 6, padding: "7px 12px",
                  }}>
                  {chainLogos[c] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={chainLogos[c]} alt={c} width={15} height={15} style={{ borderRadius: "50%" }}/>
                  )}
                  {c}
                </button>
              ))}
            </FilterGroup>

            {/* Salary */}
            <FilterGroup label="Salary range" last>
              {salaryRanges.map((s, i) => (
                <button key={s.label} onClick={() => { setSalaryIdx(i); setPage(1); }}
                  style={{
                    ...pill(salaryIdx===i,"sky"),
                    fontSize: 12, display: "block", width: "100%",
                    textAlign: "left", marginBottom: 6, padding: "7px 12px",
                  }}>{s.label}</button>
              ))}
            </FilterGroup>
          </div>
        </aside>

        {/* ── JOB LIST ─── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Toolbar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 20, flexWrap: "wrap", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => setSidebarOpen(o => !o)} style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 12, fontFamily: "var(--font-dm)",
                color: "var(--w60)", background: "var(--w04)",
                border: "0.5px solid var(--bd)", borderRadius: 8,
                padding: "7px 14px", cursor: "pointer", transition: "all 0.2s",
              }}>
                <IconFilter size={14}/>{sidebarOpen ? "Hide" : "Show"} filters
                {activeFilterCount > 0 && !sidebarOpen && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 999,
                    background: "var(--gold)", color: "#3D2200",
                  }}>{activeFilterCount}</span>
                )}
              </button>
              <span style={{ fontSize: 13, color: "var(--w40)" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>{filtered.length}</span> roles found
              </span>
            </div>

            {/* Sort */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <IconSortAscending size={15} color="var(--w40)"/>
              <select
                value={sort} onChange={e => { setSort(e.target.value); setPage(1); }}
                style={{
                  background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
                  color: "#fff", fontSize: 13, fontFamily: "var(--font-dm)",
                  borderRadius: 8, padding: "7px 12px", cursor: "pointer", outline: "none",
                }}>
                {sortOptions.map(o => <option key={o} style={{ background: "var(--blue)" }}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {category !== "All" && <Chip label={category} onRemove={() => setCategory("All")}/>}
              {locType !== "All locations" && <Chip label={locType} onRemove={() => setLocType("All locations")}/>}
              {jobType !== "All types" && <Chip label={jobType} onRemove={() => setJobType("All types")}/>}
              {chain !== "All chains" && <Chip label={chain} onRemove={() => setChain("All chains")}/>}
              {salaryIdx !== 0 && <Chip label={salaryRanges[salaryIdx].label} onRemove={() => setSalaryIdx(0)}/>}
            </div>
          )}

          {/* Job cards */}
          {paginated.length === 0 ? (
            <EmptyState onReset={resetFilters}/>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {paginated.map(job => (
                <JobCard key={job.id} job={job}
                  saved={saved.includes(job.id)}
                  onSave={() => toggleSave(job.id)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 8, marginTop: 36,
            }}>
              <button
                onClick={() => setPage(p => Math.max(1, p-1))}
                disabled={page === 1}
                style={{
                  width: 36, height: 36, borderRadius: 9,
                  border: "0.5px solid var(--bd)", background: "var(--w04)",
                  color: page===1 ? "var(--w30)" : "#fff", cursor: page===1 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                <IconChevronLeft size={16}/>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i+1).map(n => (
                <button key={n} onClick={() => setPage(n)} style={{
                  width: 36, height: 36, borderRadius: 9, fontSize: 13,
                  fontFamily: "var(--font-dm)", cursor: "pointer",
                  border: n===page ? "0.5px solid var(--gold-bd)" : "0.5px solid var(--bd)",
                  background: n===page ? "var(--gold-dim)" : "var(--w04)",
                  color: n===page ? "var(--gold)" : "var(--w50)",
                  fontWeight: n===page ? 700 : 400,
                  transition: "all 0.18s",
                }}>{n}</button>
              ))}

              <button
                onClick={() => setPage(p => Math.min(totalPages, p+1))}
                disabled={page === totalPages}
                style={{
                  width: 36, height: 36, borderRadius: 9,
                  border: "0.5px solid var(--bd)", background: "var(--w04)",
                  color: page===totalPages ? "var(--w30)" : "#fff",
                  cursor: page===totalPages ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                <IconChevronRight size={16}/>
              </button>
            </div>
          )}

          {/* Results summary */}
          {filtered.length > 0 && (
            <p style={{ textAlign: "center", fontSize: 12, color: "var(--w30)", marginTop: 16 }}>
              Showing {Math.min((page-1)*JOBS_PER_PAGE+1, filtered.length)}–{Math.min(page*JOBS_PER_PAGE, filtered.length)} of {filtered.length} roles
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── SUB-COMPONENTS ─────────────────────────────────────────────── */

function FilterGroup({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : 22 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: "var(--w40)",
        letterSpacing: "0.08em", textTransform: "uppercase",
        marginBottom: 10,
      }}>{label}</div>
      {children}
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      fontSize: 11, fontWeight: 600, color: "var(--sky)",
      padding: "4px 10px", borderRadius: 999,
      background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)",
    }}>
      {label}
      <button onClick={onRemove} style={{
        background: "none", border: "none", color: "var(--sky)",
        cursor: "pointer", display: "flex", padding: 0,
      }}><IconX size={11}/></button>
    </span>
  );
}

function JobCard({ job, saved, onSave }: { job: Job; saved: boolean; onSave: () => void }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 16,
      background: job.featured ? "var(--gold-dim)" : "var(--w04)",
      border: `${job.featured ? "1.5px" : "0.5px"} solid ${job.featured ? "var(--gold-bd)" : "var(--bd)"}`,
      borderRadius: 14, padding: "18px 20px",
      transition: "all 0.2s", flexWrap: "wrap",
      position: "relative",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      (e.currentTarget as HTMLDivElement).style.borderColor = job.featured ? "var(--gold)" : "var(--bd2)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "none";
      (e.currentTarget as HTMLDivElement).style.borderColor = job.featured ? "var(--gold-bd)" : "var(--bd)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
    }}
    >
      {/* Featured ribbon */}
      {job.featured && (
        <div style={{
          position: "absolute", top: 0, right: 20,
          fontSize: 9, fontWeight: 700, letterSpacing: "0.08em",
          background: "var(--gold)", color: "#3D2200",
          padding: "3px 10px", borderRadius: "0 0 6px 6px",
        }}>FEATURED</div>
      )}

      {/* Company logo */}
      <div style={{
        width: 52, height: 52, borderRadius: 12, flexShrink: 0,
        border: "0.5px solid var(--bd2)", overflow: "hidden",
        background: "rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Image src={job.companyLogo} alt={job.company} width={52} height={52} style={{ borderRadius: 12 }}/>
      </div>

      {/* Main info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 700, color: "#fff",
          }}>{job.title}</span>
          {job.verified && (
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)",
              display: "inline-flex", alignItems: "center", gap: 3,
            }}>
              <IconShieldCheck size={10}/>Verified
            </span>
          )}
          {job.hot && (
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
              display: "inline-flex", alignItems: "center", gap: 3,
            }}>
              <IconFlame size={10}/>Hot
            </span>
          )}
          {job.isNew && (
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "rgba(100,200,120,0.13)", color: "#6DC87A",
              border: "0.5px solid rgba(100,200,120,0.3)",
            }}>New</span>
          )}
        </div>

        {/* Meta row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          fontSize: 12, color: "var(--w40)", flexWrap: "wrap", marginBottom: 10,
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconBuilding size={13}/>{job.company}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconMapPin size={13}/>{job.location}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={job.chainLogo} alt={job.chain} width={13} height={13} style={{ borderRadius: "50%"}}/>
            {job.chain}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconClock size={13}/>{job.type}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {job.tags.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "2px 8px", borderRadius: 999,
              background: "var(--w07)", color: "var(--w50)",
              border: "0.5px solid var(--bd)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div style={{ textAlign: "right", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <div>
          <div style={{
            fontFamily: "var(--font-syne)", fontSize: 15, fontWeight: 700,
            color: "var(--gold)", marginBottom: 3,
          }}>${job.salary.min}k – ${job.salary.max}k</div>
          <div style={{ fontSize: 11, color: "var(--w30)" }}>{job.posted}</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={(e) => { e.stopPropagation(); onSave(); }} style={{
            width: 34, height: 34, borderRadius: 8,
            border: `0.5px solid ${saved ? "var(--gold-bd)" : "var(--bd)"}`,
            background: saved ? "var(--gold-dim)" : "var(--w04)",
            color: saved ? "var(--gold)" : "var(--w40)",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>
            <IconBookmark size={15} fill={saved ? "var(--gold)" : "none"}/>
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 700, fontFamily: "var(--font-syne)",
            color: "#3D2200", padding: "0 16px", height: 34,
            border: "none", borderRadius: 8,
            background: "var(--gold)", cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background="#f7b340")}
          onMouseLeave={e => (e.currentTarget.style.background="var(--gold)")}
          >
            Apply <IconArrowRight size={13}/>
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div style={{
      textAlign: "center", padding: "64px 24px",
      background: "var(--w04)", border: "0.5px solid var(--bd)",
      borderRadius: 16,
    }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
      <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
        No roles match your filters
      </h3>
      <p style={{ fontSize: 14, color: "var(--w40)", marginBottom: 24, maxWidth: 320, margin: "0 auto 24px" }}>
        Try adjusting your search or clearing some filters to find more opportunities.
      </p>
      <button onClick={onReset} style={{
        fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)",
        color: "#3D2200", padding: "10px 24px",
        border: "none", borderRadius: 8, background: "var(--gold)",
        cursor: "pointer",
      }}>Clear all filters</button>
    </div>
  );
}
