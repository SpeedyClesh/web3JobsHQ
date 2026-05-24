"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight, IconLock, IconCheck, IconClock,
  IconChevronRight, IconCopy, IconBookmark, IconFlame,
  IconStar, IconArrowLeft, IconX,
} from "@tabler/icons-react";
import { guides, categories, stats, Guide } from "@/lib/academyData";

const difficultyColor: Record<string, { bg: string; color: string; border: string }> = {
  Beginner:     { bg: "rgba(100,200,120,0.12)", color: "#6DC87A", border: "rgba(100,200,120,0.3)" },
  Intermediate: { bg: "var(--gold-dim)",         color: "var(--gold)", border: "var(--gold-bd)" },
  Advanced:     { bg: "rgba(255,80,80,0.10)",    color: "#FF6B6B", border: "rgba(255,80,80,0.3)" },
};

export default function PitchAcademy() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openGuide, setOpenGuide]           = useState<Guide | null>(null);
  const [copied, setCopied]                 = useState(false);
  const [email, setEmail]                   = useState("");
  const [subscribed, setSubscribed]         = useState(false);
  const [savedGuides, setSavedGuides]       = useState<string[]>([]);

  const filtered = guides.filter(g =>
    activeCategory === "All" || g.category === activeCategory
  );
  const featured = guides.filter(g => g.featured);

  const copyTemplate = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleSave = (id: string) =>
    setSavedGuides(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  // ── Guide detail modal / panel ───────────────────────────────────
  if (openGuide) {
    const d = difficultyColor[openGuide.difficulty];
    return (
      <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
        {/* Back bar */}
        <div style={{
          background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
          padding: "14px 24px",
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)" }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <button onClick={() => setOpenGuide(null)} style={{ background: "none", border: "none", color: "var(--w40)", cursor: "pointer", padding: 0, fontSize: 12 }}>Pitch Academy</button>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>{openGuide.title}</span>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
          {/* Back button */}
          <button onClick={() => setOpenGuide(null)} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--w50)", background: "none", border: "none",
            cursor: "pointer", marginBottom: 28, padding: 0,
          }}>
            <IconArrowLeft size={15}/> Back to Academy
          </button>

          {/* Guide header */}
          <div style={{
            background: "var(--blue)", border: "0.5px solid var(--bd2)",
            borderRadius: 20, padding: "36px", marginBottom: 32,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(245,166,35,0.07) 0%, transparent 70%)",
            }}/>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                  background: d.bg, color: d.color, border: `0.5px solid ${d.border}`,
                }}>{openGuide.difficulty}</span>
                <span style={{
                  fontSize: 11, color: "var(--w40)",
                  display: "flex", alignItems: "center", gap: 4,
                }}><IconClock size={13}/>{openGuide.readTime}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                  background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)",
                }}>{openGuide.category}</span>
              </div>

              <div style={{ fontSize: 40, marginBottom: 12 }}>{openGuide.emoji}</div>
              <h1 style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(22px,4vw,30px)",
                fontWeight: 800, color: "#fff", letterSpacing: "-0.02em",
                marginBottom: 12, lineHeight: 1.2,
              }}>{openGuide.title}</h1>
              <p style={{ fontSize: 15, color: "var(--w50)", lineHeight: 1.7, maxWidth: 600 }}>
                {openGuide.description}
              </p>

              <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                {openGuide.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: "3px 9px", borderRadius: 999,
                    background: "var(--w07)", color: "var(--w50)", border: "0.5px solid var(--bd)",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Intro */}
          <div style={{
            background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)",
            borderRadius: 14, padding: "20px 24px", marginBottom: 32,
            borderLeft: "3px solid var(--gold)",
          }}>
            <p style={{ fontSize: 15, color: "var(--w70)", lineHeight: 1.8, fontStyle: "italic" }}>
              {openGuide.content.intro}
            </p>
          </div>

          {/* Sections */}
          {openGuide.content.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h2 style={{
                fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700,
                color: "#fff", marginBottom: 14, paddingBottom: 12,
                borderBottom: "0.5px solid var(--bd)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "var(--gold)", color: "#3D2200",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-syne)", fontSize: 12, fontWeight: 800, flexShrink: 0,
                }}>{i+1}</span>
                {s.heading}
              </h2>
              <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.8, marginBottom: s.tip ? 16 : 0 }}>
                {s.body}
              </p>
              {s.tip && (
                <div style={{
                  background: "var(--sky-dim)", border: "0.5px solid var(--sky-bd)",
                  borderRadius: 10, padding: "12px 16px",
                  display: "flex", gap: 10, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                  <p style={{ fontSize: 13, color: "var(--sky)", lineHeight: 1.6 }}>{s.tip}</p>
                </div>
              )}
            </div>
          ))}

          {/* Template block */}
          {openGuide.content.template && (
            <div style={{ marginBottom: 32 }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 14, flexWrap: "wrap", gap: 8,
              }}>
                <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff" }}>
                  📋 Copy-paste template
                </h2>
                <button
                  onClick={() => copyTemplate(openGuide.content.template!)}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    fontSize: 12, fontWeight: 600, fontFamily: "var(--font-syne)",
                    color: copied ? "#6DC87A" : "#3D2200",
                    padding: "8px 16px", border: "none", borderRadius: 8,
                    background: copied ? "rgba(100,200,120,0.2)" : "var(--gold)",
                    cursor: "pointer", transition: "all 0.2s",
                  }}>
                  {copied ? <><IconCheck size={14}/>Copied!</> : <><IconCopy size={14}/>Copy template</>}
                </button>
              </div>
              <div style={{
                background: "var(--blue-deep)", border: "0.5px solid var(--bd2)",
                borderRadius: 12, padding: "24px",
                fontFamily: "monospace", fontSize: 13, color: "var(--w70)",
                lineHeight: 1.9, whiteSpace: "pre-wrap",
              }}>
                {openGuide.content.template}
              </div>
            </div>
          )}

          {/* Key takeaways */}
          {openGuide.content.keyTakeaways.length > 0 && (
            <div style={{
              background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
              borderRadius: 16, padding: "28px",
            }}>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 18 }}>
                ✅ Key takeaways
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {openGuide.content.keyTakeaways.map((k, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                      background: "var(--gold)", color: "#3D2200",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 1,
                    }}>
                      <IconCheck size={12}/>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--w70)", lineHeight: 1.6 }}>{k}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{
            marginTop: 48, background: "var(--blue)", border: "0.5px solid var(--bd2)",
            borderRadius: 16, padding: "28px", textAlign: "center",
          }}>
            <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={48} height={48}
              style={{ borderRadius: "50%", margin: "0 auto 14px", display: "block", border: "2px solid var(--gold-bd)" }}/>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Ready to put this into action?
            </h3>
            <p style={{ fontSize: 13, color: "var(--w50)", marginBottom: 20 }}>
              Browse 847 verified web3 roles and apply what you just learned.
            </p>
            <Link href="/jobs" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#3D2200", padding: "12px 28px",
              border: "none", borderRadius: 10, background: "var(--gold)",
              textDecoration: "none",
            }}>
              Browse web3 jobs <IconArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── ACADEMY INDEX ────────────────────────────────────────────────
  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── PAGE HERO ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "56px 24px 48px", position: "relative", overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 65%)",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px", pointerEvents: "none",
        }}/>
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>Pitch Academy</span>
          </div>

          <div style={{ fontSize: 48, marginBottom: 16 }}>🎓</div>
          <h1 style={{
            fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,44px)",
            fontWeight: 800, color: "#fff", letterSpacing: "-0.02em",
            marginBottom: 14, lineHeight: 1.1,
          }}>
            The <span style={{ color: "var(--gold)" }}>Pitch Academy</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,2vw,16px)", color: "var(--w50)", lineHeight: 1.7, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Cold DM scripts, pitch frameworks, portfolio guides, and research tactics — everything Jobbers need to land web3 roles faster.
          </p>

          {/* Stats row */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 0,
            background: "rgba(255,255,255,0.04)", border: "0.5px solid var(--bd2)",
            borderRadius: 14, overflow: "hidden", maxWidth: 560, margin: "0 auto",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                flex: 1, padding: "18px 12px", textAlign: "center",
                borderRight: i < stats.length-1 ? "0.5px solid var(--bd)" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px,2vw,20px)", fontWeight: 800, color: "var(--gold)" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>

        {/* ── FEATURED GUIDES ── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <IconFlame size={18} color="var(--gold)"/>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff" }}>
              Start here
            </h2>
            <span style={{
              fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
            }}>Most read</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {featured.map(guide => (
              <FeaturedCard
                key={guide.id} guide={guide}
                saved={savedGuides.includes(guide.id)}
                onSave={() => toggleSave(guide.id)}
                onOpen={() => setOpenGuide(guide)}
              />
            ))}
          </div>
        </div>

        {/* ── ALL GUIDES ── */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff" }}>
              All guides
            </h2>
            <span style={{ fontSize: 13, color: "var(--w40)" }}>
              {filtered.length} guides in <span style={{ color: "#fff" }}>{activeCategory}</span>
            </span>
          </div>

          {/* Category filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} style={{
                fontSize: 12, fontFamily: "var(--font-dm)", fontWeight: activeCategory===c ? 600 : 400,
                padding: "6px 14px",
                border: `0.5px solid ${activeCategory===c ? "var(--gold-bd)" : "var(--bd)"}`,
                borderRadius: 999,
                color: activeCategory===c ? "var(--gold)" : "var(--w50)",
                background: activeCategory===c ? "var(--gold-dim)" : "transparent",
                cursor: "pointer", transition: "all 0.18s",
              }}>{c}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map(guide => (
              <GuideRow
                key={guide.id} guide={guide}
                saved={savedGuides.includes(guide.id)}
                onSave={() => toggleSave(guide.id)}
                onOpen={() => !guide.locked && setOpenGuide(guide)}
              />
            ))}
          </div>
        </div>

        {/* ── NEWSLETTER SIGNUP ── */}
        <div style={{
          marginTop: 64,
          background: "var(--blue)", border: "0.5px solid var(--bd2)",
          borderRadius: 20, padding: "48px 32px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(circle at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 60%)",
          }}/>
          <div style={{ position: "relative" }}>
            <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={56} height={56}
              style={{ borderRadius: "50%", margin: "0 auto 18px", display: "block", border: "2px solid var(--gold-bd)" }}/>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>
              New guides every week
            </h2>
            <p style={{ fontSize: 14, color: "var(--w50)", lineHeight: 1.7, marginBottom: 28, maxWidth: 420, margin: "0 auto 28px" }}>
              Get the latest pitch guides, job search tactics, and web3 career advice straight to your inbox.
            </p>
            {subscribed ? (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 14, fontWeight: 600, color: "#6DC87A",
                background: "rgba(100,200,120,0.1)", border: "0.5px solid rgba(100,200,120,0.3)",
                padding: "12px 24px", borderRadius: 10,
              }}>
                <IconCheck size={18}/>You&apos;re in! Welcome to the HQ.
              </div>
            ) : (
              <div style={{ display: "flex", maxWidth: 480, margin: "0 auto", gap: 0, border: "0.5px solid var(--bd2)", borderRadius: 10, overflow: "hidden", background: "rgba(255,255,255,0.05)" }}>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, background: "transparent", border: "none", outline: "none",
                    color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)",
                    padding: "13px 18px",
                  }}
                />
                <button
                  onClick={() => email && setSubscribed(true)}
                  style={{
                    background: "var(--gold)", color: "#3D2200",
                    fontSize: 13, fontWeight: 700, fontFamily: "var(--font-syne)",
                    border: "none", padding: "13px 24px", cursor: "pointer",
                    letterSpacing: "0.02em", whiteSpace: "nowrap",
                  }}>
                  Subscribe free
                </button>
              </div>
            )}
            <p style={{ fontSize: 11, color: "var(--w30)", marginTop: 12 }}>Free forever · No spam · Unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── FEATURED CARD ─────────────────────────────────────────────── */
function FeaturedCard({ guide, saved, onSave, onOpen }: {
  guide: Guide; saved: boolean; onSave: () => void; onOpen: () => void;
}) {
  const d = difficultyColor[guide.difficulty];
  return (
    <div
      onClick={onOpen}
      style={{
        background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
        borderRadius: 16, padding: "24px", cursor: "pointer",
        transition: "all 0.2s", display: "flex", flexDirection: "column", gap: 14,
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd2)";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0, left: 0, height: 3,
        background: "linear-gradient(90deg, var(--gold), var(--sky))",
      }}/>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ fontSize: 36 }}>{guide.emoji}</div>
        <button onClick={e => { e.stopPropagation(); onSave(); }} style={{
          width: 32, height: 32, borderRadius: 8,
          border: `0.5px solid ${saved ? "var(--gold-bd)" : "var(--bd)"}`,
          background: saved ? "var(--gold-dim)" : "var(--w04)",
          color: saved ? "var(--gold)" : "var(--w40)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
        }}>
          <IconBookmark size={14} fill={saved ? "var(--gold)" : "none"}/>
        </button>
      </div>

      <div>
        <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
            background: d.bg, color: d.color, border: `0.5px solid ${d.border}`,
          }}>{guide.difficulty}</span>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
            background: "var(--sky-dim)", color: "var(--sky)", border: "0.5px solid var(--sky-bd)",
          }}>{guide.category}</span>
        </div>
        <h3 style={{
          fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700,
          color: "#fff", marginBottom: 8, lineHeight: 1.3,
        }}>{guide.title}</h3>
        <p style={{ fontSize: 13, color: "var(--w50)", lineHeight: 1.6 }}>{guide.description}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <span style={{ fontSize: 12, color: "var(--w30)", display: "flex", alignItems: "center", gap: 4 }}>
          <IconClock size={13}/>{guide.readTime}
        </span>
        <span style={{
          fontSize: 12, color: "var(--gold)", fontWeight: 600,
          display: "flex", alignItems: "center", gap: 4,
        }}>
          Read guide <IconArrowRight size={13}/>
        </span>
      </div>
    </div>
  );
}

/* ── GUIDE ROW ─────────────────────────────────────────────────── */
function GuideRow({ guide, saved, onSave, onOpen }: {
  guide: Guide; saved: boolean; onSave: () => void; onOpen: () => void;
}) {
  const d = difficultyColor[guide.difficulty];
  return (
    <div
      onClick={onOpen}
      style={{
        display: "flex", alignItems: "center", gap: 16,
        background: "var(--w04)", border: "0.5px solid var(--bd)",
        borderRadius: 12, padding: "16px 20px",
        cursor: guide.locked ? "default" : "pointer",
        transition: "all 0.2s", opacity: guide.locked ? 0.7 : 1,
        flexWrap: "wrap",
      }}
      onMouseEnter={e => {
        if (!guide.locked) {
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)";
          (e.currentTarget as HTMLDivElement).style.background = "var(--gold-dim)";
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)";
        (e.currentTarget as HTMLDivElement).style.background = "var(--w04)";
      }}
    >
      {/* Emoji */}
      <div style={{
        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
        background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24,
      }}>{guide.emoji}</div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff" }}>
            {guide.title}
          </span>
          {guide.locked && (
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "rgba(255,255,255,0.06)", color: "var(--w40)",
              border: "0.5px solid var(--bd)", display: "inline-flex", alignItems: "center", gap: 3,
            }}><IconLock size={9}/>Coming soon</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 999,
            background: d.bg, color: d.color, border: `0.5px solid ${d.border}`,
          }}>{guide.difficulty}</span>
          <span style={{ fontSize: 12, color: "var(--w40)", display: "flex", alignItems: "center", gap: 4 }}>
            <IconClock size={12}/>{guide.readTime}
          </span>
          <span style={{ fontSize: 12, color: "var(--w40)" }}>{guide.category}</span>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
        <button onClick={e => { e.stopPropagation(); onSave(); }} style={{
          width: 32, height: 32, borderRadius: 8,
          border: `0.5px solid ${saved ? "var(--gold-bd)" : "var(--bd)"}`,
          background: saved ? "var(--gold-dim)" : "transparent",
          color: saved ? "var(--gold)" : "var(--w40)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
        }}>
          <IconBookmark size={14} fill={saved ? "var(--gold)" : "none"}/>
        </button>

        {guide.locked ? (
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, color: "var(--w30)",
            padding: "7px 14px", border: "0.5px solid var(--bd)",
            borderRadius: 8, background: "transparent",
          }}>
            <IconLock size={13}/>Locked
          </div>
        ) : (
          <button style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 700, fontFamily: "var(--font-syne)",
            color: "#3D2200", padding: "7px 16px",
            border: "none", borderRadius: 8, background: "var(--gold)",
            cursor: "pointer", transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background="#f7b340")}
          onMouseLeave={e => (e.currentTarget.style.background="var(--gold)")}
          >
            Read <IconArrowRight size={13}/>
          </button>
        )}
      </div>
    </div>
  );
}
