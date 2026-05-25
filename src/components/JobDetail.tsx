"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconShieldCheck, IconFlame, IconMapPin, IconClock,
  IconBuilding, IconArrowRight, IconArrowLeft, IconBookmark,
  IconBriefcase, IconUsers, IconCurrencyDollar, IconWorld,
  IconCheck, IconStar, IconShare, IconBrandLinkedin,
  IconBrandX, IconChevronRight, IconCalendar, IconRocket,
} from "@tabler/icons-react";
import { Job, jobDetails, defaultDetail } from "@/lib/jobsData";

interface Props {
  job: Job;
  related: Job[];
}

export default function JobDetail({ job, related }: Props) {
  const [saved, setSaved]   = useState(false);
  const [applied, setApplied] = useState(false);
  const [tab, setTab]       = useState<"overview"|"requirements"|"company">("overview");
  const detail = jobDetails[job.id] ?? defaultDetail;

  const tabStyle = (t: string) => ({
    fontSize: 14, fontFamily: "var(--font-dm)",
    padding: "10px 20px", cursor: "pointer",
    border: "none", background: "transparent",
    color: tab === t ? "#fff" : "var(--w40)",
    borderBottom: `2px solid ${tab === t ? "var(--gold)" : "transparent"}`,
    fontWeight: tab === t ? 600 : 400,
    transition: "all 0.2s",
  });

  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── BREADCRUMB ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "14px 24px",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
          <IconChevronRight size={12}/>
          <Link href="/jobs" style={{ color: "var(--w40)", textDecoration: "none" }}>Browse jobs</Link>
          <IconChevronRight size={12}/>
          <span style={{ color: "var(--gold)" }}>{job.title}</span>
        </div>
      </div>

      {/* ── HERO HEADER ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "36px 24px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 50% 80% at 10% 50%, rgba(245,166,35,0.06) 0%, transparent 70%)",
        }}/>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Back button */}
          <Link href="/jobs" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--w50)", textDecoration: "none",
            marginBottom: 24, transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color="#fff")}
          onMouseLeave={e => (e.currentTarget.style.color="var(--w50)")}
          >
            <IconArrowLeft size={15}/> Back to all jobs
          </Link>

          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Company logo — large */}
            <div style={{
              width: 80, height: 80, borderRadius: 18, flexShrink: 0,
              border: "1.5px solid var(--bd2)", overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
            }}>
              <Image src={job.companyLogo} alt={job.company} width={80} height={80} style={{ borderRadius: 18 }}/>
            </div>

            {/* Title block */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                {job.verified && (
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                    background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)",
                    display: "inline-flex", alignItems: "center", gap: 4,
                  }}><IconShieldCheck size={11}/>Verified employer</span>
                )}
                {job.featured && (
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                    background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
                  }}>⭐ Featured</span>
                )}
                {job.hot && (
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                    background: "rgba(255,80,80,0.12)", color: "#FF6B6B", border: "0.5px solid rgba(255,80,80,0.3)",
                    display: "inline-flex", alignItems: "center", gap: 4,
                  }}><IconFlame size={11}/>Hot role</span>
                )}
              </div>

              <h1 style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(22px,4vw,32px)",
                fontWeight: 800, color: "#fff", letterSpacing: "-0.02em",
                marginBottom: 8, lineHeight: 1.15,
              }}>{job.title}</h1>

              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 15, color: "var(--w60)", marginBottom: 16, flexWrap: "wrap",
              }}>
                <span style={{ fontWeight: 600, color: "#fff" }}>{job.company}</span>
                <span style={{ color: "var(--w30)" }}>·</span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <IconMapPin size={14}/>{job.location}
                </span>
                <span style={{ color: "var(--w30)" }}>·</span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={job.chainLogo} alt={job.chain} width={14} height={14} style={{ borderRadius: "50%" }}/>{job.chain}
                </span>
              </div>

              {/* Meta pills row */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 0 }}>
                {[
                  { icon: <IconClock size={13}/>, label: job.type },
                  { icon: <IconBuilding size={13}/>, label: job.companySize + " employees" },
                  { icon: <IconCalendar size={13}/>, label: "Posted " + job.posted },
                  { icon: <IconUsers size={13}/>, label: job.category },
                ].map((m, i) => (
                  <span key={i} style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 12, color: "var(--w50)",
                    padding: "5px 12px", borderRadius: 999,
                    background: "var(--w07)", border: "0.5px solid var(--bd)",
                  }}>{m.icon}{m.label}</span>
                ))}
              </div>
            </div>

            {/* Salary + CTA block */}
            <div style={{
              background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
              borderRadius: 16, padding: "24px", flexShrink: 0,
              minWidth: 220, textAlign: "center",
            }}>
              <div style={{ fontSize: 11, color: "var(--w40)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Salary range</div>
              <div style={{
                fontFamily: "var(--font-syne)", fontSize: 24, fontWeight: 800,
                color: "var(--gold)", marginBottom: 4,
              }}>${job.salary.min}k – ${job.salary.max}k</div>
              <div style={{ fontSize: 11, color: "var(--w30)", marginBottom: 20 }}>Per year · USD</div>

              <button
                onClick={() => setApplied(true)}
                style={{
                  width: "100%", padding: "13px 0",
                  background: applied ? "rgba(100,200,120,0.2)" : "var(--gold)",
                  color: applied ? "#6DC87A" : "#3D2200",
                  border: applied ? "1.5px solid rgba(100,200,120,0.4)" : "none",
                  borderRadius: 10, cursor: applied ? "default" : "pointer",
                  fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
                  letterSpacing: "0.02em", transition: "all 0.3s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                {applied ? <><IconCheck size={16}/>Applied!</> : <><IconRocket size={16}/>Apply now</>}
              </button>

              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button onClick={() => setSaved(s => !s)} style={{
                  flex: 1, padding: "9px 0",
                  background: saved ? "var(--gold-dim)" : "var(--w07)",
                  border: `0.5px solid ${saved ? "var(--gold-bd)" : "var(--bd)"}`,
                  borderRadius: 8, cursor: "pointer",
                  color: saved ? "var(--gold)" : "var(--w50)",
                  fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  transition: "all 0.2s",
                }}>
                  <IconBookmark size={14} fill={saved ? "var(--gold)" : "none"}/>
                  {saved ? "Saved" : "Save"}
                </button>
                <button style={{
                  flex: 1, padding: "9px 0",
                  background: "var(--w07)", border: "0.5px solid var(--bd)",
                  borderRadius: 8, cursor: "pointer",
                  color: "var(--w50)", fontSize: 12,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                }}>
                  <IconShare size={14}/>Share
                </button>
              </div>

              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "0.5px solid var(--bd)" }}>
                <div style={{ fontSize: 11, color: "var(--w30)", marginBottom: 8 }}>Share this role</div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  <button style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "var(--w07)", border: "0.5px solid var(--bd)",
                    color: "var(--w50)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><IconBrandX size={15}/></button>
                  <button style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "var(--w07)", border: "0.5px solid var(--bd)",
                    color: "var(--w50)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><IconBrandLinkedin size={15}/></button>
                  <button style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "var(--w07)", border: "0.5px solid var(--bd)",
                    color: "var(--w50)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><IconWorld size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div style={{
            display: "flex", gap: 0, marginTop: 32,
            borderBottom: "0.5px solid var(--bd)",
          }}>
            {(["overview","requirements","company"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={tabStyle(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* OVERVIEW TAB */}
          {tab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <ContentSection title="About this role">
                <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.8 }}>{detail.about}</p>
              </ContentSection>

              <ContentSection title="What you'll do">
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                  {detail.responsibilities.map((r, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)",
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                      }}>
                        <IconCheck size={11} color="var(--gold)"/>
                      </div>
                      <span style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.7 }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Tech stack">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {job.techStack.map(t => (
                    <span key={t} style={{
                      fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 8,
                      background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
                      color: "#fff",
                    }}>{t}</span>
                  ))}
                </div>
              </ContentSection>

              <ContentSection title="Application process">
                <ol style={{ display: "flex", flexDirection: "column", gap: 0, listStyle: "none" }}>
                  {detail.applicationProcess.map((step, i) => (
                    <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                          background: "var(--gold)", color: "#3D2200",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "var(--font-syne)", fontSize: 12, fontWeight: 800,
                          zIndex: 1,
                        }}>{i + 1}</div>
                        {i < detail.applicationProcess.length - 1 && (
                          <div style={{ width: 1, flex: 1, minHeight: 24, background: "var(--bd2)", margin: "4px 0" }}/>
                        )}
                      </div>
                      <div style={{ paddingBottom: i < detail.applicationProcess.length - 1 ? 20 : 0 }}>
                        <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.6, paddingTop: 4 }}>{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </ContentSection>
            </div>
          )}

          {/* REQUIREMENTS TAB */}
          {tab === "requirements" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <ContentSection title="Requirements">
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                  {detail.requirements.map((r, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)",
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                      }}>
                        <IconCheck size={11} color="var(--sky)"/>
                      </div>
                      <span style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.7 }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Nice to have">
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                  {detail.niceToHave.map((r, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        background: "var(--w07)", border: "0.5px solid var(--bd)",
                        display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                      }}>
                        <IconStar size={10} color="var(--w40)"/>
                      </div>
                      <span style={{ fontSize: 14, color: "var(--w50)", lineHeight: 1.7 }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Perks & benefits">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
                  {detail.benefits.map((b, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 10, alignItems: "flex-start",
                      background: "var(--w04)", border: "0.5px solid var(--bd)",
                      borderRadius: 10, padding: "12px 14px",
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                        background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <IconCheck size={12} color="var(--gold)"/>
                      </div>
                      <span style={{ fontSize: 13, color: "var(--w60)", lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </ContentSection>
            </div>
          )}

          {/* COMPANY TAB */}
          {tab === "company" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{
                background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
                borderRadius: 16, padding: "28px",
              }}>
                <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
                  <Image src={job.companyLogo} alt={job.company} width={64} height={64}
                    style={{ borderRadius: 14, border: "0.5px solid var(--bd2)" }}/>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                      {job.company}
                    </h2>
                    <a href={detail.companyWebsite.startsWith("http") ? detail.companyWebsite : "#"} target="_blank" rel="noreferrer"
                      style={{ fontSize: 13, color: "var(--sky)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                      <IconWorld size={13}/>{detail.companyWebsite.replace("https://","")}
                    </a>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16, marginBottom: 24 }}>
                  {[
                    { icon: <IconUsers size={16}/>, label: "Team size", val: detail.teamSize },
                    { icon: <IconCurrencyDollar size={16}/>, label: "Funding", val: detail.fundingStage },
                    { icon: <IconBriefcase size={16}/>, label: "Category", val: job.category },
                    { icon: <IconMapPin size={16}/>, label: "Location", val: job.locationType },
                  ].map((m, i) => (
                    <div key={i} style={{
                      background: "var(--w04)", border: "0.5px solid var(--bd)",
                      borderRadius: 10, padding: "14px",
                    }}>
                      <div style={{ color: "var(--gold)", marginBottom: 6 }}>{m.icon}</div>
                      <div style={{ fontSize: 11, color: "var(--w40)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.label}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{m.val}</div>
                    </div>
                  ))}
                </div>

                <ContentSection title="Mission">
                  <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.8 }}>{detail.companyMission}</p>
                </ContentSection>
              </div>
            </div>
          )}
        </div>

        {/* Sticky sidebar */}
        <div style={{ width: 300, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 88 }}>

          {/* Tags */}
          <div style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", borderRadius: 14, padding: "20px" }}>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Skills & tags</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {job.tags.map(t => (
                <span key={t} style={{
                  fontSize: 12, padding: "4px 10px", borderRadius: 999,
                  background: "var(--w07)", color: "var(--w60)",
                  border: "0.5px solid var(--bd)",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Quick apply CTA */}
          {!applied && (
            <div style={{
              background: "linear-gradient(135deg, rgba(245,166,35,0.12) 0%, rgba(245,166,35,0.04) 100%)",
              border: "1px solid var(--gold-bd)", borderRadius: 14, padding: "20px", textAlign: "center",
            }}>
              <div style={{ fontSize: 13, color: "var(--w50)", marginBottom: 6, lineHeight: 1.5 }}>
                ⚡ Apply in under 2 minutes via Web3 Jobs HQ
              </div>
              <button onClick={() => setApplied(true)} style={{
                width: "100%", padding: "12px 0",
                background: "var(--gold)", color: "#3D2200",
                border: "none", borderRadius: 9, cursor: "pointer",
                fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                transition: "all 0.2s",
              }}>
                <IconRocket size={15}/>Apply now
              </button>
            </div>
          )}

          {applied && (
            <div style={{
              background: "rgba(100,200,120,0.08)", border: "1px solid rgba(100,200,120,0.3)",
              borderRadius: 14, padding: "20px", textAlign: "center",
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🎉</div>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#6DC87A", marginBottom: 6 }}>Application sent!</div>
              <div style={{ fontSize: 12, color: "var(--w40)", lineHeight: 1.5 }}>
                {job.company} will be in touch within 5 business days.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── RELATED JOBS ── */}
      {related.length > 0 && (
        <div style={{
          borderTop: "0.5px solid var(--bd)",
          background: "var(--blue)",
          padding: "48px 24px",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff" }}>
                Similar roles
              </h3>
              <Link href="/jobs" style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                View all jobs <IconArrowRight size={14}/>
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {related.map(r => (
                <Link key={r.id} href={`/jobs/${r.id}`} style={{
                  display: "flex", gap: 14, alignItems: "center",
                  background: "var(--w04)", border: "0.5px solid var(--bd)",
                  borderRadius: 12, padding: "16px 18px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold-bd)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bd)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
                >
                  <Image src={r.companyLogo} alt={r.company} width={44} height={44}
                    style={{ borderRadius: 10, border: "0.5px solid var(--bd2)", flexShrink: 0 }}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{r.title}</div>
                    <div style={{ fontSize: 12, color: "var(--w40)", marginBottom: 5 }}>{r.company} · {r.locationType}</div>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: 13, fontWeight: 700, color: "var(--gold)" }}>
                      ${r.salary.min}k – ${r.salary.max}k
                    </div>
                  </div>
                  <IconArrowRight size={15} color="var(--w30)"/>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{
        fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700,
        color: "#fff", marginBottom: 16, paddingBottom: 12,
        borderBottom: "0.5px solid var(--bd)",
      }}>{title}</h3>
      {children}
    </div>
  );
}
