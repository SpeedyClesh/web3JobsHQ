"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight, IconChevronRight, IconShieldCheck,
  IconClock, IconMapPin, IconCheck, IconStar,
  IconArrowLeft, IconBriefcase, IconX, IconSend,
  IconUsers, IconTrophy, IconSparkles,
} from "@tabler/icons-react";
import { wins, categories, winsStats, Win } from "@/lib/winsData";

export default function JobWins() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openWin, setOpenWin]               = useState<Win | null>(null);
  const [showSubmit, setShowSubmit]         = useState(false);
  const [submitted, setSubmitted]           = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "", role: "", company: "", salary: "",
    timeToLand: "", background: "", story: "", email: "",
  });

  const filtered = wins.filter(w =>
    activeCategory === "All" || w.category === activeCategory
  );
  const featured = wins.filter(w => w.featured);

  // ── SUBMIT FORM ──────────────────────────────────────────────────
  if (showSubmit) {
    return (
      <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
        <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "14px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)" }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <button onClick={() => setShowSubmit(false)} style={{ background: "none", border: "none", color: "var(--w40)", cursor: "pointer", fontSize: 12, padding: 0 }}>Job Wins</button>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>Share your win</span>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>
          <button onClick={() => setShowSubmit(false)} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--w50)", background: "none", border: "none",
            cursor: "pointer", marginBottom: 28, padding: 0,
          }}><IconArrowLeft size={15}/> Back to Job Wins</button>

          {submitted ? (
            <div style={{
              textAlign: "center", padding: "64px 32px",
              background: "var(--blue)", border: "1px solid var(--gold-bd)",
              borderRadius: 20,
            }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
                Your win is submitted!
              </h2>
              <p style={{ fontSize: 15, color: "var(--w50)", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 28px" }}>
                Thank you for sharing. The Web3 Jobs HQ team will review your story and publish it within 48 hours.
              </p>
              <button onClick={() => { setShowSubmit(false); setSubmitted(false); setForm({ name:"",role:"",company:"",salary:"",timeToLand:"",background:"",story:"",email:"" }); }}
                style={{
                  fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
                  color: "#3D2200", padding: "12px 28px", border: "none", borderRadius: 10,
                  background: "var(--gold)", cursor: "pointer",
                }}>View all wins →</button>
            </div>
          ) : (
            <div>
              {/* Form header */}
              <div style={{
                background: "var(--blue)", border: "0.5px solid var(--gold-bd)",
                borderRadius: 20, padding: "36px", marginBottom: 28,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: "radial-gradient(circle at 0% 0%, rgba(245,166,35,0.08) 0%, transparent 60%)",
                }}/>
                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>🏆</div>
                  <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(22px,4vw,30px)", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>
                    Share your web3 win
                  </h1>
                  <p style={{ fontSize: 14, color: "var(--w50)", lineHeight: 1.7, maxWidth: 520 }}>
                    Landed a role? Tell your story. Your experience could be the nudge another Jobber needs to keep going. Every win gets reviewed and published to the HQ community.
                  </p>
                </div>
              </div>

              {/* Form fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                  {[
                    { label: "Your name (or alias)", key: "name", placeholder: "e.g. Aisha O.", type: "text" },
                    { label: "Role you landed",       key: "role", placeholder: "e.g. Community Manager", type: "text" },
                    { label: "Company",               key: "company", placeholder: "e.g. Arbitrum", type: "text" },
                    { label: "Salary (optional)",     key: "salary", placeholder: "e.g. $68,000/yr", type: "text" },
                    { label: "Time to land the role", key: "timeToLand", placeholder: "e.g. 3 weeks", type: "text" },
                    { label: "Your email (private)",  key: "email", placeholder: "For follow-up only", type: "email" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--w60)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.05)",
                          border: "0.5px solid var(--bd2)", borderRadius: 10,
                          color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)",
                          padding: "12px 16px", outline: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Background */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--w60)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Your background before this role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Customer service rep with no crypto experience"
                    value={form.background}
                    onChange={e => setForm(p => ({ ...p, background: e.target.value }))}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid var(--bd2)", borderRadius: 10,
                      color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)",
                      padding: "12px 16px", outline: "none",
                    }}
                  />
                </div>

                {/* Story */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--w60)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Your full story ✍️
                  </label>
                  <textarea
                    placeholder="Tell us exactly how you did it. What guides helped? How did you approach it? What worked? Be as specific as possible — the more detail, the more it helps other Jobbers."
                    value={form.story}
                    onChange={e => setForm(p => ({ ...p, story: e.target.value }))}
                    rows={7}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid var(--bd2)", borderRadius: 10,
                      color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)",
                      padding: "14px 16px", outline: "none", resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={() => { if (form.name && form.role && form.story) setSubmitted(true); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    fontSize: 15, fontWeight: 700, fontFamily: "var(--font-syne)",
                    color: "#3D2200", padding: "15px 0", width: "100%",
                    border: "none", borderRadius: 12, background: "var(--gold)",
                    cursor: "pointer", letterSpacing: "0.01em",
                    boxShadow: "0 4px 20px rgba(245,166,35,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                >
                  <IconSend size={17}/> Submit my win
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "var(--w30)" }}>
                  Reviewed within 48 hours · Your email is never shared · You can request removal anytime
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── WIN DETAIL VIEW ──────────────────────────────────────────────
  if (openWin) {
    return (
      <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
        <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "14px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--w40)" }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <button onClick={() => setOpenWin(null)} style={{ background: "none", border: "none", color: "var(--w40)", cursor: "pointer", fontSize: 12, padding: 0 }}>Job Wins</button>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>{openWin.name}</span>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>
          <button onClick={() => setOpenWin(null)} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--w50)", background: "none", border: "none",
            cursor: "pointer", marginBottom: 28, padding: 0,
          }}><IconArrowLeft size={15}/> All wins</button>

          {/* Story hero card */}
          <div style={{
            background: "var(--blue)", border: `1.5px solid ${openWin.color === "var(--gold)" ? "var(--gold-bd)" : "var(--bd2)"}`,
            borderRadius: 20, overflow: "hidden", marginBottom: 28,
          }}>
            {/* Colour accent top strip */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${openWin.color}, transparent)` }}/>

            <div style={{ padding: "32px" }}>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap" }}>
                <Image src={openWin.avatar} alt={openWin.name} width={72} height={72}
                  style={{ borderRadius: "50%", border: `2px solid ${openWin.color === "var(--gold)" ? "var(--gold-bd)" : "var(--bd2)"}`, flexShrink: 0 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                      background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
                    }}>⭐ Success story</span>
                    <span style={{ fontSize: 11, color: "var(--w40)", display: "flex", alignItems: "center", gap: 4 }}>
                      <IconClock size={12}/>{openWin.posted}
                    </span>
                  </div>
                  <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {openWin.name} landed <span style={{ color: openWin.color }}>{openWin.role}</span>
                  </h1>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: "var(--w50)", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <Image src={openWin.companyLogo} alt={openWin.company} width={16} height={16} style={{ borderRadius: 4 }}/>{openWin.company}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <IconMapPin size={13}/>{openWin.location}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={openWin.chainLogo} alt={openWin.chain} width={13} height={13} style={{ borderRadius: "50%" }}/>{openWin.chain}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Salary",        val: openWin.salary,     icon: "💰" },
                  { label: "Time to land",  val: openWin.timeToLand, icon: "⏱️" },
                  { label: "Category",      val: openWin.category,   icon: "📂" },
                  { label: "Background",    val: openWin.background, icon: "👤" },
                ].map((m, i) => (
                  <div key={i} style={{
                    background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
                    borderRadius: 12, padding: "14px",
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 6 }}>{m.icon}</div>
                    <div style={{ fontSize: 10, color: "var(--w40)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div style={{
                background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)",
                borderRadius: 14, padding: "20px 24px", marginBottom: 24,
                borderLeft: "3px solid var(--gold)",
              }}>
                <p style={{ fontSize: 16, color: "#fff", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;{openWin.quote}&rdquo;
                </p>
              </div>

              {/* Full story */}
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 14, paddingBottom: 12, borderBottom: "0.5px solid var(--bd)" }}>
                  The full story
                </h2>
                <p style={{ fontSize: 14, color: "var(--w60)", lineHeight: 1.9 }}>{openWin.story}</p>
              </div>

              {/* Tools used */}
              <div>
                <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 14, paddingBottom: 12, borderBottom: "0.5px solid var(--bd)" }}>
                  HQ tools used
                </h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {openWin.toolsUsed.map(t => (
                    <span key={t} style={{
                      fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 999,
                      background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
                      display: "flex", alignItems: "center", gap: 5,
                    }}><IconCheck size={12}/>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 48 }}>
            <Link href="/pitch-academy" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#3D2200", padding: "14px", borderRadius: 12,
              background: "var(--gold)", textDecoration: "none",
            }}>Explore Pitch Academy <IconArrowRight size={15}/></Link>
            <Link href="/jobs" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              fontSize: 14, fontWeight: 600, fontFamily: "var(--font-syne)",
              color: "var(--sky)", padding: "14px", borderRadius: 12,
              border: "1.5px solid var(--sky-bd)", background: "var(--sky-dim)",
              textDecoration: "none",
            }}>Browse open roles <IconArrowRight size={15}/></Link>
          </div>

          {/* More wins */}
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>More wins</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {wins.filter(w => w.id !== openWin.id).slice(0, 3).map(w => (
              <WinCard key={w.id} win={w} onOpen={() => setOpenWin(w)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── INDEX VIEW ───────────────────────────────────────────────────
  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── PAGE HERO ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "56px 24px 48px", textAlign: "center",
        position: "relative", overflow: "hidden",
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

        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color: "var(--gold)" }}>Job Wins & Diaries</span>
          </div>

          <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
          <h1 style={{
            fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,44px)",
            fontWeight: 800, color: "#fff", letterSpacing: "-0.02em",
            marginBottom: 14, lineHeight: 1.1,
          }}>
            Job Wins &amp; <span style={{ color: "var(--gold)" }}>Diaries</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,2vw,16px)", color: "var(--w50)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px" }}>
            Real Jobbers. Real placements. Real stories. Every win you read here was submitted by someone who started exactly where you are now.
          </p>

          {/* Stats strip */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            background: "rgba(255,255,255,0.04)", border: "0.5px solid var(--bd2)",
            borderRadius: 14, overflow: "hidden", maxWidth: 580, margin: "0 auto 32px",
          }}>
            {winsStats.map((s, i) => (
              <div key={i} style={{
                padding: "18px 12px", textAlign: "center",
                borderRight: i < winsStats.length - 1 ? "0.5px solid var(--bd)" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px,2vw,22px)", fontWeight: 800, color: "var(--gold)" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "var(--w40)", marginTop: 3, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Share your win CTA */}
          <button onClick={() => setShowSubmit(true)} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
            color: "#3D2200", padding: "13px 28px", border: "none", borderRadius: 10,
            background: "var(--gold)", cursor: "pointer",
            boxShadow: "0 4px 20px rgba(245,166,35,0.3)", transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
          >
            <IconTrophy size={17}/> Share your win
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>

        {/* ── FEATURED WINS ── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <IconSparkles size={18} color="var(--gold)"/>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff" }}>Featured stories</h2>
            <span style={{
              fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
            }}>Community picks</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {featured.map(win => (
              <FeaturedWinCard key={win.id} win={win} onOpen={() => setOpenWin(win)}/>
            ))}
          </div>
        </div>

        {/* ── ALL WINS ── */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff" }}>All wins</h2>
            <span style={{ fontSize: 13, color: "var(--w40)" }}>
              {filtered.length} stories · <span style={{ color: "#fff" }}>{activeCategory}</span>
            </span>
          </div>

          {/* Category filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} style={{
                fontSize: 12, fontFamily: "var(--font-dm)", fontWeight: activeCategory === c ? 600 : 400,
                padding: "6px 14px",
                border: `0.5px solid ${activeCategory === c ? "var(--gold-bd)" : "var(--bd)"}`,
                borderRadius: 999,
                color: activeCategory === c ? "var(--gold)" : "var(--w50)",
                background: activeCategory === c ? "var(--gold-dim)" : "transparent",
                cursor: "pointer", transition: "all 0.18s",
              }}>{c}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.map(win => (
              <WinCard key={win.id} win={win} onOpen={() => setOpenWin(win)}/>
            ))}
          </div>
        </div>

        {/* ── SUBMIT CTA BANNER ── */}
        <div style={{
          marginTop: 64,
          background: "var(--blue)", border: "0.5px solid var(--gold-bd)",
          borderRadius: 20, padding: "48px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 100% at 0% 50%, rgba(245,166,35,0.07) 0%, transparent 70%)",
          }}/>
          <div style={{ position: "relative", flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✍️</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>
              Just landed a web3 role?
            </h2>
            <p style={{ fontSize: 14, color: "var(--w50)", lineHeight: 1.7, maxWidth: 420 }}>
              Share your story. Inspire the next Jobber. Every submission gets reviewed and published — no follower count required.
            </p>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            <button onClick={() => setShowSubmit(true)} style={{
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 15, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#3D2200", padding: "14px 32px", border: "none", borderRadius: 12,
              background: "var(--gold)", cursor: "pointer",
              boxShadow: "0 4px 20px rgba(245,166,35,0.3)", transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "none")}
            >
              <IconTrophy size={17}/> Share your win
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--w30)", justifyContent: "center" }}>
              <IconShieldCheck size={13} color="var(--w30)"/>
              <span>Reviewed within 48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── FEATURED WIN CARD ────────────────────────────────────────── */
function FeaturedWinCard({ win, onOpen }: { win: Win; onOpen: () => void }) {
  return (
    <div onClick={onOpen} style={{
      background: "var(--blue-card)", border: "0.5px solid var(--bd2)",
      borderRadius: 18, overflow: "hidden", cursor: "pointer",
      transition: "all 0.2s", display: "flex", flexDirection: "column",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd2)";
      (e.currentTarget as HTMLDivElement).style.transform = "none";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
    }}
    >
      {/* Top colour strip */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${win.color}, transparent)` }}/>

      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Avatar + name */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image src={win.avatar} alt={win.name} width={52} height={52}
            style={{ borderRadius: "50%", border: `2px solid ${win.bg}`, flexShrink: 0 }}/>
          <div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{win.name}</div>
            <div style={{ fontSize: 12, color: "var(--w40)" }}>{win.background}</div>
          </div>
        </div>

        {/* Role + company */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src={win.companyLogo} alt={win.company} width={28} height={28} style={{ borderRadius: 6, border: "0.5px solid var(--bd2)" }}/>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: win.color }}>{win.role}</div>
            <div style={{ fontSize: 12, color: "var(--w40)" }}>{win.company}</div>
          </div>
        </div>

        {/* Stars */}
        <div style={{ color: "var(--gold)", fontSize: 13, letterSpacing: 2 }}>★★★★★</div>

        {/* Quote */}
        <p style={{ fontSize: 13, color: "var(--w60)", lineHeight: 1.65, fontStyle: "italic", flex: 1 }}>
          &ldquo;{win.quote}&rdquo;
        </p>

        {/* Footer pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 12, borderTop: "0.5px solid var(--bd)" }}>
          <span style={{
            fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 999,
            background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
            display: "flex", alignItems: "center", gap: 4,
          }}><IconClock size={11}/>{win.timeToLand}</span>
          <span style={{
            fontSize: 11, padding: "3px 9px", borderRadius: 999,
            background: "var(--w07)", color: "var(--w50)", border: "0.5px solid var(--bd)",
          }}>{win.salary}</span>
          <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--gold)", display: "flex", alignItems: "center", gap: 4 }}>
            Read story <IconArrowRight size={13}/>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── WIN ROW CARD ─────────────────────────────────────────────── */
function WinCard({ win, onOpen }: { win: Win; onOpen: () => void }) {
  return (
    <div onClick={onOpen} style={{
      display: "flex", gap: 16, alignItems: "center",
      background: "var(--w04)", border: "0.5px solid var(--bd)",
      borderRadius: 14, padding: "16px 20px",
      cursor: "pointer", transition: "all 0.2s", flexWrap: "wrap",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold-bd)";
      (e.currentTarget as HTMLDivElement).style.background = "var(--gold-dim)";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)";
      (e.currentTarget as HTMLDivElement).style.background = "var(--w04)";
      (e.currentTarget as HTMLDivElement).style.transform = "none";
    }}
    >
      <Image src={win.avatar} alt={win.name} width={44} height={44}
        style={{ borderRadius: "50%", border: "1.5px solid var(--bd2)", flexShrink: 0 }}/>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff" }}>{win.name}</span>
          <span style={{ fontSize: 12, color: win.color }}>→ {win.role}</span>
          <span style={{ fontSize: 12, color: "var(--w40)" }}>at {win.company}</span>
        </div>
        <p style={{ fontSize: 12, color: "var(--w50)", lineHeight: 1.5, fontStyle: "italic" }}>
          &ldquo;{win.quote.substring(0, 100)}...&rdquo;
        </p>
      </div>

      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
          background: "var(--gold-dim)", color: "var(--gold)", border: "0.5px solid var(--gold-bd)",
          marginBottom: 6, display: "inline-block",
        }}>{win.timeToLand}</div>
        <div style={{ fontSize: 11, color: "var(--w30)" }}>{win.posted}</div>
      </div>
    </div>
  );
}
