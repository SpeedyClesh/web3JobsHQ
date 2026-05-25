"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight, IconCheck, IconStar, IconShieldCheck,
  IconBriefcase, IconUsers, IconMail, IconChevronRight,
  IconCurrencyDollar, IconRocket, IconX,
  IconMapPin, IconClipboardList, IconBolt,
} from "@tabler/icons-react";

/* ── DATA ─────────────────────────────────────────────────── */
const plans = [
  {
    name: "Basic",
    price: 99,
    period: "per listing",
    highlight: false,
    accent: "var(--bd2)",
    features: [
      "30-day listing",
      "Standard board placement",
      "Direct email applications",
      "Company profile page",
      "Basic analytics",
    ],
  },
  {
    name: "Featured",
    price: 199,
    period: "per listing",
    highlight: true,
    accent: "var(--gold-bd)",
    features: [
      "60-day listing",
      "Featured placement (top of board)",
      "Gold border & verified badge",
      "Weekly newsletter inclusion (6,200+ subs)",
      "Full analytics dashboard",
      "Priority support",
      "Social media amplification",
    ],
  },
  {
    name: "Premium",
    price: 299,
    period: "per listing",
    highlight: false,
    accent: "var(--sky-bd)",
    features: [
      "90-day listing",
      "Pinned to homepage hero",
      "Newsletter featured slot",
      "Talent directory access",
      "Verified employer badge",
      "Dedicated account manager",
      "Unlimited edits",
      "X / Telegram promotion",
    ],
  },
];

const stats = [
  { num: "4,200+", label: "Active Jobbers" },
  { num: "6,200+", label: "Newsletter subscribers" },
  { num: "3×",     label: "More applications (verified)" },
  { num: "48h",    label: "Avg. time to first application" },
];

const logos = [
  "/companies/chainlink.svg","/companies/uniswap.svg","/companies/ton.svg",
  "/companies/maker.svg","/companies/solana.svg","/companies/compound.svg",
  "/companies/aave.svg","/companies/arbitrum.svg",
];

const steps = [
  { icon: <IconClipboardList size={22}/>, title: "Fill the form", desc: "Job title, description, requirements, salary range, and chain. Takes 5 minutes." },
  { icon: <IconShieldCheck size={22}/>,   title: "We verify you", desc: "Our team reviews your company within 24 hours and adds the verified badge." },
  { icon: <IconBolt size={22}/>,          title: "Go live instantly", desc: "Your listing is published, emailed to subscribers, and shared on X & Telegram." },
  { icon: <IconUsers size={22}/>,         title: "Receive Jobbers", desc: "Qualified candidates apply directly. You manage everything from your dashboard." },
];

const faqs = [
  { q: "How long does verification take?", a: "We review all new employers within 24 hours. Once verified you receive the blue shield badge on all your listings, which significantly increases application quality and volume." },
  { q: "Can I edit my listing after posting?", a: "Yes. Featured and Premium listings have unlimited edits. Basic listings allow up to 3 edits within the 30-day window." },
  { q: "What's included in the newsletter?", a: "Featured and Premium listings are included in our weekly digest sent to 6,200+ active Jobbers every Monday. It's one of the highest-converting channels for web3 hiring." },
  { q: "Do you offer refunds?", a: "We offer a full refund within 48 hours if you haven't received any applications. After that we'll work with you to improve the listing before considering a refund." },
  { q: "Can I post multiple jobs at once?", a: "Absolutely. We offer bundle discounts for 3+ listings. Contact us at web3jobhq@gmail.com for a custom quote." },
  { q: "What chains and categories do you support?", a: "All chains (Ethereum, Solana, Base, TON, BNB, Arbitrum, Optimism, Polygon, and more) and all job categories from engineering to non-tech roles." },
];

/* ── FORM FIELDS ──────────────────────────────────────────── */
const chains   = ["Ethereum","Solana","Base","TON","BNB Chain","Arbitrum","Optimism","Polygon","Multi-chain"];
const jobTypes = ["Full-time","Part-time","Contract","Freelance"];
const cats     = ["Engineering","Marketing","Community","Design","Operations","Non-tech","Research","Legal"];
const locs     = ["Remote · Worldwide","Remote · US only","Remote · EU only","Remote · US/EU","Hybrid","On-site"];

/* ── COMPONENT ────────────────────────────────────────────── */
export default function HirePage() {
  const [tab, setTab]           = useState<"post"|"faq"|"guides">("post");
  const [step, setStep]         = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq]   = useState<number|null>(null);
  const [plan, setPlan]         = useState(1); // 0=basic,1=featured,2=premium

  const [form, setForm] = useState({
    // Company
    companyName:"", website:"", companySize:"", chain:"Ethereum",
    // Role
    title:"", category:"Engineering", location:"Remote · Worldwide",
    type:"Full-time", salaryMin:"", salaryMax:"",
    // Details
    description:"", requirements:"", niceToHave:"", tags:"",
    // Contact
    contactEmail:"", contactName:"",
  });

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "0.5px solid var(--bd2)", borderRadius: 10,
    color: "#fff", fontSize: 14, fontFamily: "var(--font-dm)",
    padding: "12px 16px", outline: "none", transition: "border-color 0.2s",
  };
  const selectStyle: React.CSSProperties = { ...inputStyle, cursor: "pointer" };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: "var(--w50)",
    letterSpacing: "0.04em", textTransform: "uppercase",
    display: "block", marginBottom: 8,
  };

  const tabBtn = (t: typeof tab, label: string) => (
    <button onClick={() => setTab(t)} style={{
      fontSize: 14, fontFamily: "var(--font-dm)", padding: "11px 22px",
      cursor: "pointer", border: "none", background: "transparent",
      color: tab === t ? "#fff" : "var(--w40)",
      borderBottom: `2px solid ${tab === t ? "var(--gold)" : "transparent"}`,
      fontWeight: tab === t ? 600 : 400, transition: "all 0.2s",
    }}>{label}</button>
  );

  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "60px 24px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,166,35,0.09) 0%, transparent 70%)" }}/>
        <div style={{ position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize:"48px 48px", pointerEvents:"none" }}/>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"var(--w40)", marginBottom:28 }}>
            <Link href="/" style={{ color:"var(--w40)", textDecoration:"none" }}>Home</Link>
            <IconChevronRight size={12}/>
            <span style={{ color:"var(--gold)" }}>Hire talent</span>
          </div>

          <div style={{ display:"flex", gap:48, alignItems:"flex-start", flexWrap:"wrap" }}>
            {/* Left text */}
            <div style={{ flex:1, minWidth:280, paddingBottom:48 }}>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:7,
                background:"var(--gold-dim)", border:"0.5px solid var(--gold-bd)",
                borderRadius:999, padding:"5px 14px",
                fontSize:12, fontWeight:500, color:"var(--gold)", marginBottom:24,
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--gold)", display:"inline-block" }}/>
                Agency for Web3 Job Opportunities &amp; Services
              </div>

              <h1 style={{
                fontFamily:"var(--font-syne)", fontSize:"clamp(28px,4vw,46px)",
                fontWeight:800, color:"#fff", letterSpacing:"-0.02em",
                marginBottom:16, lineHeight:1.1,
              }}>
                Hire verified<br/><span style={{ color:"var(--gold)" }}>web3 talent</span>
              </h1>
              <p style={{ fontSize:16, color:"var(--w50)", lineHeight:1.75, maxWidth:440, marginBottom:32 }}>
                Post your role to 4,200+ active Jobbers across every chain. Verified listings get 3× more quality applications — and your first applicant arrives within 48 hours.
              </p>

              {/* Stats */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, maxWidth:360 }}>
                {stats.map((s,i) => (
                  <div key={i} style={{
                    background:"rgba(255,255,255,0.04)", border:"0.5px solid var(--bd2)",
                    borderRadius:12, padding:"14px 16px",
                  }}>
                    <div style={{ fontFamily:"var(--font-syne)", fontSize:22, fontWeight:800, color:"var(--gold)", marginBottom:2 }}>{s.num}</div>
                    <div style={{ fontSize:11, color:"var(--w40)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: trusted by logos */}
            <div style={{ width:260, flexShrink:0, paddingBottom:48 }}>
              <div style={{ fontSize:11, fontWeight:600, color:"var(--w30)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:16 }}>Trusted by</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
                {logos.map((l,i) => (
                  <div key={i} style={{
                    width:52, height:52, borderRadius:12,
                    background:"rgba(255,255,255,0.05)", border:"0.5px solid var(--bd)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    overflow:"hidden",
                  }}>
                    <Image src={l} alt="company" width={52} height={52} style={{ borderRadius:12 }}/>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div style={{ display:"flex", borderBottom:"0.5px solid var(--bd)", gap:0, marginTop:8 }}>
            {tabBtn("post",   "📋 Post a job")}
            {tabBtn("guides", "📚 Hiring guides")}
            {tabBtn("faq",    "❓ FAQ")}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"48px 24px 80px" }}>

        {/* ── POST A JOB TAB ── */}
        {tab === "post" && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:36, alignItems:"flex-start" }}>

            {/* FORM */}
            <div>
              {submitted ? (
                /* ── SUCCESS ── */
                <div style={{
                  textAlign:"center", padding:"72px 32px",
                  background:"var(--blue)", border:"1px solid var(--gold-bd)",
                  borderRadius:24,
                }}>
                  <div style={{ fontSize:72, marginBottom:20 }}>🎉</div>
                  <h2 style={{ fontFamily:"var(--font-syne)", fontSize:30, fontWeight:800, color:"#fff", marginBottom:12 }}>
                    Your job is submitted!
                  </h2>
                  <p style={{ fontSize:15, color:"var(--w50)", lineHeight:1.7, maxWidth:420, margin:"0 auto 28px" }}>
                    The Web3 Jobs HQ team will review and verify your listing within 24 hours. You&apos;ll receive a confirmation email at <span style={{ color:"var(--gold)" }}>{form.contactEmail}</span>.
                  </p>
                  <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                    <button onClick={() => { setSubmitted(false); setStep(1); }} style={{
                      fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)",
                      color:"#3D2200", padding:"12px 24px", border:"none", borderRadius:10,
                      background:"var(--gold)", cursor:"pointer",
                    }}>Post another job</button>
                    <Link href="/jobs" style={{
                      fontSize:14, fontWeight:600, fontFamily:"var(--font-syne)",
                      color:"var(--w70)", padding:"12px 24px", border:"0.5px solid var(--bd2)",
                      borderRadius:10, background:"var(--w07)", textDecoration:"none",
                      display:"inline-flex", alignItems:"center", gap:6,
                    }}>View job board <IconArrowRight size={14}/></Link>
                  </div>
                </div>
              ) : (
                <>
                  {/* ── STEP INDICATOR ── */}
                  <div style={{ display:"flex", alignItems:"center", gap:0, marginBottom:36 }}>
                    {["Company info","Role details","Description","Review & pay"].map((s,i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", flex: i<3 ? 1 : "none" }}>
                        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, cursor: i+1<=step ? "pointer" : "default" }}
                          onClick={() => i+1 < step && setStep(i+1)}>
                          <div style={{
                            width:32, height:32, borderRadius:"50%", flexShrink:0,
                            background: step > i+1 ? "var(--gold)" : step === i+1 ? "var(--gold)" : "var(--w07)",
                            border: step === i+1 ? "2px solid var(--gold)" : step > i+1 ? "none" : "0.5px solid var(--bd2)",
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontFamily:"var(--font-syne)", fontSize:13, fontWeight:800,
                            color: step >= i+1 ? "#3D2200" : "var(--w40)",
                            transition:"all 0.3s",
                          }}>
                            {step > i+1 ? <IconCheck size={15}/> : i+1}
                          </div>
                          <span style={{ fontSize:11, color: step === i+1 ? "var(--gold)" : "var(--w30)", whiteSpace:"nowrap" }}>{s}</span>
                        </div>
                        {i < 3 && (
                          <div style={{ flex:1, height:1, background: step > i+1 ? "var(--gold)" : "var(--bd)", margin:"0 6px", marginBottom:18, transition:"background 0.3s" }}/>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ── STEP 1: Company ── */}
                  {step === 1 && (
                    <FormCard title="Company information" subtitle="Tell us about the company posting this role.">
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                        <Field label="Company name *">
                          <input style={inputStyle} placeholder="e.g. Chainlink Labs" value={form.companyName} onChange={e=>set("companyName",e.target.value)}/>
                        </Field>
                        <Field label="Website *">
                          <input style={inputStyle} placeholder="https://yourcompany.com" value={form.website} onChange={e=>set("website",e.target.value)}/>
                        </Field>
                        <Field label="Team size">
                          <select style={selectStyle} value={form.companySize} onChange={e=>set("companySize",e.target.value)}>
                            {["1–10","11–50","51–200","201–500","500+"].map(s=><option key={s} style={{background:"#12177A"}}>{s}</option>)}
                          </select>
                        </Field>
                        <Field label="Primary chain">
                          <select style={selectStyle} value={form.chain} onChange={e=>set("chain",e.target.value)}>
                            {chains.map(c=><option key={c} style={{background:"#12177A"}}>{c}</option>)}
                          </select>
                        </Field>
                      </div>
                      <StepNav onNext={() => form.companyName && form.website ? setStep(2) : null} nextLabel="Next: Role details"/>
                    </FormCard>
                  )}

                  {/* ── STEP 2: Role ── */}
                  {step === 2 && (
                    <FormCard title="Role details" subtitle="Basic information about the position.">
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                        <Field label="Job title *" style={{ gridColumn:"1/-1" }}>
                          <input style={inputStyle} placeholder="e.g. Senior Solidity Engineer" value={form.title} onChange={e=>set("title",e.target.value)}/>
                        </Field>
                        <Field label="Category">
                          <select style={selectStyle} value={form.category} onChange={e=>set("category",e.target.value)}>
                            {cats.map(c=><option key={c} style={{background:"#12177A"}}>{c}</option>)}
                          </select>
                        </Field>
                        <Field label="Job type">
                          <select style={selectStyle} value={form.type} onChange={e=>set("type",e.target.value)}>
                            {jobTypes.map(t=><option key={t} style={{background:"#12177A"}}>{t}</option>)}
                          </select>
                        </Field>
                        <Field label="Location">
                          <select style={selectStyle} value={form.location} onChange={e=>set("location",e.target.value)}>
                            {locs.map(l=><option key={l} style={{background:"#12177A"}}>{l}</option>)}
                          </select>
                        </Field>
                        <Field label="Chain">
                          <select style={selectStyle} value={form.chain} onChange={e=>set("chain",e.target.value)}>
                            {chains.map(c=><option key={c} style={{background:"#12177A"}}>{c}</option>)}
                          </select>
                        </Field>
                        <Field label="Salary min (USD k)">
                          <input style={inputStyle} placeholder="e.g. 80" value={form.salaryMin} onChange={e=>set("salaryMin",e.target.value)}/>
                        </Field>
                        <Field label="Salary max (USD k)">
                          <input style={inputStyle} placeholder="e.g. 140" value={form.salaryMax} onChange={e=>set("salaryMax",e.target.value)}/>
                        </Field>
                        <Field label="Skills / tags (comma separated)" style={{ gridColumn:"1/-1" }}>
                          <input style={inputStyle} placeholder="e.g. Solidity, Hardhat, TypeScript, DeFi" value={form.tags} onChange={e=>set("tags",e.target.value)}/>
                        </Field>
                      </div>
                      <StepNav onBack={() => setStep(1)} onNext={() => form.title ? setStep(3) : null} nextLabel="Next: Description"/>
                    </FormCard>
                  )}

                  {/* ── STEP 3: Description ── */}
                  {step === 3 && (
                    <FormCard title="Job description" subtitle="The more detail you provide, the better quality of applications you'll receive.">
                      <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                        <Field label="About the role *">
                          <textarea rows={5} style={{ ...inputStyle, resize:"vertical" }}
                            placeholder="Describe the role, what the team is building, and why someone should join..."
                            value={form.description} onChange={e=>set("description",e.target.value)}/>
                        </Field>
                        <Field label="Requirements *">
                          <textarea rows={5} style={{ ...inputStyle, resize:"vertical" }}
                            placeholder="List the must-have skills and experience. One per line works well..."
                            value={form.requirements} onChange={e=>set("requirements",e.target.value)}/>
                        </Field>
                        <Field label="Nice to have (optional)">
                          <textarea rows={3} style={{ ...inputStyle, resize:"vertical" }}
                            placeholder="Bonus skills or experience that would be great but aren't essential..."
                            value={form.niceToHave} onChange={e=>set("niceToHave",e.target.value)}/>
                        </Field>
                      </div>
                      <StepNav onBack={() => setStep(2)} onNext={() => form.description && form.requirements ? setStep(4) : null} nextLabel="Next: Review & pay"/>
                    </FormCard>
                  )}

                  {/* ── STEP 4: Review & Pay ── */}
                  {step === 4 && (
                    <FormCard title="Review & publish" subtitle="Check your listing details and choose a plan to go live.">
                      {/* Summary card */}
                      <div style={{ background:"var(--blue-deep)", border:"0.5px solid var(--bd2)", borderRadius:14, padding:"20px", marginBottom:24 }}>
                        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
                          <div>
                            <div style={{ fontFamily:"var(--font-syne)", fontSize:18, fontWeight:700, color:"#fff", marginBottom:4 }}>{form.title || "Untitled role"}</div>
                            <div style={{ fontSize:13, color:"var(--gold)", marginBottom:8 }}>{form.companyName}</div>
                            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                              {[form.location, form.type, form.chain, form.category].map((v,i) => v && (
                                <span key={i} style={{ fontSize:11, padding:"3px 9px", borderRadius:999, background:"var(--w07)", color:"var(--w50)", border:"0.5px solid var(--bd)" }}>{v}</span>
                              ))}
                            </div>
                          </div>
                          {form.salaryMin && form.salaryMax && (
                            <div style={{ fontFamily:"var(--font-syne)", fontSize:16, fontWeight:700, color:"var(--gold)" }}>
                              ${form.salaryMin}k – ${form.salaryMax}k
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Plan selector */}
                      <div style={{ fontSize:13, fontWeight:600, color:"var(--w50)", marginBottom:14, letterSpacing:"0.04em", textTransform:"uppercase" }}>Select a plan</div>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12, marginBottom:24 }}>
                        {plans.map((p,i) => (
                          <div key={i} onClick={() => setPlan(i)} style={{
                            background: plan===i ? "var(--gold-dim)" : "var(--w04)",
                            border: `${plan===i ? "2px" : "0.5px"} solid ${plan===i ? "var(--gold-bd)" : "var(--bd2)"}`,
                            borderRadius:14, padding:"18px 16px", cursor:"pointer", transition:"all 0.2s",
                            position:"relative",
                          }}>
                            {p.highlight && <div style={{ position:"absolute", top:-10, left:"50%", transform:"translateX(-50%)", background:"var(--gold)", color:"#3D2200", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:999 }}>Most popular</div>}
                            <div style={{ fontFamily:"var(--font-syne)", fontSize:13, fontWeight:700, color: plan===i ? "var(--gold)" : "#fff", marginBottom:4 }}>{p.name}</div>
                            <div style={{ fontFamily:"var(--font-syne)", fontSize:22, fontWeight:800, color:"#fff", marginBottom:2 }}>${p.price}</div>
                            <div style={{ fontSize:11, color:"var(--w40)", marginBottom:12 }}>{p.period}</div>
                            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                              {p.features.slice(0,4).map((f,fi) => (
                                <div key={fi} style={{ display:"flex", gap:7, alignItems:"flex-start" }}>
                                  <IconCheck size={11} color={plan===i ? "var(--gold)" : "var(--w40)"} style={{ flexShrink:0, marginTop:2 }}/>
                                  <span style={{ fontSize:11, color:"var(--w50)" }}>{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contact */}
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:24 }}>
                        <Field label="Contact name *">
                          <input style={inputStyle} placeholder="Your name" value={form.contactName} onChange={e=>set("contactName",e.target.value)}/>
                        </Field>
                        <Field label="Contact email *">
                          <input type="email" style={inputStyle} placeholder="hire@yourcompany.com" value={form.contactEmail} onChange={e=>set("contactEmail",e.target.value)}/>
                        </Field>
                      </div>

                      {/* Total */}
                      <div style={{ background:"var(--blue)", border:"0.5px solid var(--gold-bd)", borderRadius:14, padding:"18px 20px", marginBottom:24, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
                        <div>
                          <div style={{ fontSize:13, color:"var(--w50)", marginBottom:2 }}>Total for {plans[plan].name} plan</div>
                          <div style={{ fontFamily:"var(--font-syne)", fontSize:24, fontWeight:800, color:"var(--gold)" }}>${plans[plan].price}</div>
                        </div>
                        <div style={{ fontSize:12, color:"var(--w40)", maxWidth:220 }}>
                          Secure payment via Stripe. Invoice provided. Cancel within 48h for full refund.
                        </div>
                      </div>

                      <StepNav
                        onBack={() => setStep(3)}
                        onNext={() => { if (form.contactName && form.contactEmail) setSubmitted(true); }}
                        nextLabel={`Pay $${plans[plan].price} & publish`}
                        nextColor="var(--gold)"
                        nextTextColor="#3D2200"
                      />
                    </FormCard>
                  )}
                </>
              )}
            </div>

            {/* SIDEBAR */}
            <div style={{ display:"flex", flexDirection:"column", gap:16, position:"sticky", top:88 }}>
              {/* How it works */}
              <div style={{ background:"var(--blue-card)", border:"0.5px solid var(--bd2)", borderRadius:16, padding:"22px 20px" }}>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"#fff", marginBottom:16 }}>How it works</div>
                <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                  {steps.map((s,i) => (
                    <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                        <div style={{ width:36, height:36, borderRadius:10, background:"var(--gold-dim)", border:"0.5px solid var(--gold-bd)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--gold)" }}>
                          {s.icon}
                        </div>
                        {i < steps.length-1 && <div style={{ width:1, height:20, background:"var(--bd2)", margin:"4px 0" }}/>}
                      </div>
                      <div style={{ paddingBottom: i < steps.length-1 ? 16 : 0 }}>
                        <div style={{ fontFamily:"var(--font-syne)", fontSize:13, fontWeight:600, color:"#fff", marginBottom:3 }}>{s.title}</div>
                        <div style={{ fontSize:12, color:"var(--w40)", lineHeight:1.5 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{ background:"var(--blue-card)", border:"0.5px solid var(--bd2)", borderRadius:16, padding:"22px 20px" }}>
                <div style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:700, color:"#fff", marginBottom:10 }}>Need help?</div>
                <p style={{ fontSize:12, color:"var(--w50)", lineHeight:1.6, marginBottom:14 }}>
                  Want a custom package or have questions? Our team replies within 2 hours.
                </p>
                <a href="mailto:web3jobhq@gmail.com" style={{
                  display:"flex", alignItems:"center", gap:8,
                  fontSize:13, fontWeight:600, fontFamily:"var(--font-syne)",
                  color:"var(--gold)", textDecoration:"none",
                }}>
                  <IconMail size={15}/>web3jobhq@gmail.com
                </a>
              </div>

              {/* Social proof */}
              <div style={{ background:"var(--gold-dim)", border:"0.5px solid var(--gold-bd)", borderRadius:16, padding:"18px 20px" }}>
                <div style={{ display:"flex", gap:3, marginBottom:8 }}>
                  {[1,2,3,4,5].map(i=><IconStar key={i} size={14} color="var(--gold)" fill="var(--gold)"/>)}
                </div>
                <p style={{ fontSize:12, color:"var(--w70)", lineHeight:1.6, fontStyle:"italic", marginBottom:10 }}>
                  &ldquo;We filled a Senior Solidity role in 4 days. The quality of applications from HQ is miles ahead of other crypto job boards.&rdquo;
                </p>
                <div style={{ fontSize:12, fontWeight:600, color:"var(--gold)" }}>— CTO, Ethereum DeFi Protocol</div>
              </div>
            </div>
          </div>
        )}

        {/* ── HIRING GUIDES TAB ── */}
        {tab === "guides" && (
          <div style={{ maxWidth:800 }}>
            <h2 style={{ fontFamily:"var(--font-syne)", fontSize:26, fontWeight:800, color:"#fff", marginBottom:10, letterSpacing:"-0.01em" }}>Hiring guides for web3 founders</h2>
            <p style={{ fontSize:15, color:"var(--w50)", lineHeight:1.7, marginBottom:36 }}>How to attract, evaluate, and retain top web3 talent.</p>
            {[
              { emoji:"🎯", title:"Writing a web3 job description that converts", body:"Most web3 job posts are too vague or too technical. The best ones lead with the mission, explain what the hire will own, and are honest about compensation. Bullet lists are fine but lead with context. Include the token situation — candidates always want to know.", time:"4 min read" },
              { emoji:"💰", title:"Web3 compensation: salary, tokens, and vesting", body:"The market rate for senior Solidity engineers is $140k–$220k in 2026. Non-tech roles like community and marketing range $50k–$120k depending on experience. Token allocations are expected by most candidates — 1–5% for early hires, 0.1–0.5% for later. 4-year vesting with a 1-year cliff is the standard.", time:"6 min read" },
              { emoji:"🔍", title:"How to evaluate web3 candidates (without wasting their time)", body:"The best web3 hiring processes are fast and specific. Skip the generic HR screen — go straight to a 30-min technical or role-specific call with the hiring manager. If you need a test, make it paid, relevant, and under 3 hours. Top candidates have options and they'll drop your process if it's disrespectful of their time.", time:"5 min read" },
              { emoji:"🏛️", title:"Hiring for DAOs: what's different", body:"DAO hiring is async-first, trust-based, and community-driven. Contributors often start via bounties before being offered full contributor roles. Governance tokens as compensation require careful legal consideration. The best DAO hires are already active community members — so invest in community before you need to hire.", time:"7 min read" },
              { emoji:"🌍", title:"Building a remote-first web3 team across time zones", body:"85% of web3 jobs are remote. That means async communication is a core competency, not a nice-to-have. Invest in clear written documentation, overlapping hours policies (not mandatory hours), and quarterly in-person retreats. Hiring across time zones is an advantage — your protocol runs 24/7 and so can your team.", time:"5 min read" },
            ].map((g,i) => (
              <div key={i} style={{ display:"flex", gap:20, alignItems:"flex-start", padding:"24px 0", borderBottom:"0.5px solid var(--bd)" }}>
                <div style={{ fontSize:32, flexShrink:0 }}>{g.emoji}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, flexWrap:"wrap", marginBottom:10 }}>
                    <h3 style={{ fontFamily:"var(--font-syne)", fontSize:16, fontWeight:700, color:"#fff" }}>{g.title}</h3>
                    <span style={{ fontSize:11, color:"var(--w30)", flexShrink:0 }}>{g.time}</span>
                  </div>
                  <p style={{ fontSize:14, color:"var(--w50)", lineHeight:1.8 }}>{g.body}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop:40, background:"var(--blue)", border:"0.5px solid var(--gold-bd)", borderRadius:16, padding:"28px", textAlign:"center" }}>
              <h3 style={{ fontFamily:"var(--font-syne)", fontSize:18, fontWeight:700, color:"#fff", marginBottom:8 }}>Ready to post your role?</h3>
              <p style={{ fontSize:13, color:"var(--w50)", marginBottom:20 }}>Join 312+ verified employers on Web3 Jobs HQ.</p>
              <button onClick={() => setTab("post")} style={{
                fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)",
                color:"#3D2200", padding:"12px 28px", border:"none", borderRadius:10,
                background:"var(--gold)", cursor:"pointer",
                display:"inline-flex", alignItems:"center", gap:8,
              }}>Post a job <IconArrowRight size={15}/></button>
            </div>
          </div>
        )}

        {/* ── FAQ TAB ── */}
        {tab === "faq" && (
          <div style={{ maxWidth:720 }}>
            <h2 style={{ fontFamily:"var(--font-syne)", fontSize:26, fontWeight:800, color:"#fff", marginBottom:10, letterSpacing:"-0.01em" }}>Frequently asked questions</h2>
            <p style={{ fontSize:15, color:"var(--w50)", marginBottom:36 }}>Everything employers need to know about posting on Web3 Jobs HQ.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {faqs.map((f,i) => (
                <div key={i} style={{
                  background:"var(--w04)", border:"0.5px solid var(--bd)",
                  borderRadius:14, overflow:"hidden", transition:"border-color 0.2s",
                  ...(openFaq===i ? { borderColor:"var(--gold-bd)" } : {}),
                }}>
                  <button onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{
                    width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"18px 20px", background:"transparent", border:"none",
                    color:"#fff", cursor:"pointer", gap:12,
                  }}>
                    <span style={{ fontFamily:"var(--font-syne)", fontSize:14, fontWeight:600, textAlign:"left" }}>{f.q}</span>
                    <span style={{ color:"var(--gold)", flexShrink:0, transition:"transform 0.2s", transform: openFaq===i ? "rotate(45deg)" : "none" }}>
                      <IconX size={16}/>
                    </span>
                  </button>
                  {openFaq===i && (
                    <div style={{ padding:"0 20px 20px" }}>
                      <p style={{ fontSize:14, color:"var(--w50)", lineHeight:1.8 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop:40, display:"flex", gap:14, flexWrap:"wrap" }}>
              <button onClick={() => setTab("post")} style={{
                fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)",
                color:"#3D2200", padding:"12px 24px", border:"none", borderRadius:10,
                background:"var(--gold)", cursor:"pointer",
                display:"flex", alignItems:"center", gap:8,
              }}>Post a job <IconArrowRight size={15}/></button>
              <a href="mailto:web3jobhq@gmail.com" style={{
                fontSize:14, fontWeight:600, fontFamily:"var(--font-syne)",
                color:"var(--w70)", padding:"12px 24px", border:"0.5px solid var(--bd2)",
                borderRadius:10, background:"var(--w07)", textDecoration:"none",
                display:"flex", alignItems:"center", gap:8,
              }}>
                <IconMail size={15}/>Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── HELPERS ──────────────────────────────────────────────── */
function FormCard({ title, subtitle, children }: { title:string; subtitle:string; children:React.ReactNode }) {
  return (
    <div style={{ background:"var(--blue-card)", border:"0.5px solid var(--bd2)", borderRadius:20, padding:"32px 28px" }}>
      <h2 style={{ fontFamily:"var(--font-syne)", fontSize:20, fontWeight:700, color:"#fff", marginBottom:6 }}>{title}</h2>
      <p style={{ fontSize:13, color:"var(--w40)", marginBottom:28 }}>{subtitle}</p>
      <div style={{ display:"flex", flexDirection:"column", gap:20 }}>{children}</div>
    </div>
  );
}

function Field({ label, children, style }: { label:string; children:React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <label style={{ fontSize:12, fontWeight:600, color:"var(--w50)", letterSpacing:"0.04em", textTransform:"uppercase", display:"block", marginBottom:8 }}>{label}</label>
      {children}
    </div>
  );
}

function StepNav({ onBack, onNext, nextLabel, nextColor="var(--gold)", nextTextColor="#3D2200" }: {
  onBack?:()=>void; onNext?:()=>void; nextLabel:string; nextColor?:string; nextTextColor?:string;
}) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:28, paddingTop:20, borderTop:"0.5px solid var(--bd)" }}>
      {onBack ? (
        <button onClick={onBack} style={{ fontSize:13, fontFamily:"var(--font-dm)", color:"var(--w50)", background:"transparent", border:"0.5px solid var(--bd)", borderRadius:8, padding:"10px 20px", cursor:"pointer" }}>
          ← Back
        </button>
      ) : <div/>}
      <button onClick={onNext} style={{
        fontSize:14, fontWeight:700, fontFamily:"var(--font-syne)",
        color:nextTextColor, padding:"12px 28px", border:"none", borderRadius:10,
        background:nextColor, cursor:"pointer",
        display:"flex", alignItems:"center", gap:8, transition:"all 0.2s",
      }}>{nextLabel} <IconArrowRight size={15}/></button>
    </div>
  );
}
