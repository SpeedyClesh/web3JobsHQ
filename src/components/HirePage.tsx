"use client";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconShieldCheck, IconUsers, IconBriefcase, IconStar, IconCheck } from "@tabler/icons-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "per listing",
    color: "var(--bd2)",
    textColor: "#fff",
    features: ["30-day listing","Standard visibility","Email applications","Company profile","Basic analytics"],
    cta: "Post basic job",
    popular: false,
  },
  {
    name: "Featured",
    price: "$199",
    period: "per listing",
    color: "var(--gold-bd)",
    textColor: "var(--gold)",
    features: ["60-day listing","Featured placement (top of board)","Gold border & badge","Email blast to 6,200+ subscribers","Full analytics dashboard","Priority support"],
    cta: "Post featured job",
    popular: true,
  },
  {
    name: "Premium",
    price: "$299",
    period: "per listing",
    color: "var(--sky-bd)",
    textColor: "var(--sky)",
    features: ["90-day listing","Pinned to homepage hero","Newsletter feature slot","Talent directory access","Verified employer badge","Dedicated account manager","Unlimited edits"],
    cta: "Go premium",
    popular: false,
  },
];

const benefits = [
  { icon: "🎯", title: "4,200+ active Jobbers", desc: "Reach an engaged community of web3 professionals actively looking for roles." },
  { icon: "✅", title: "Verified employer badge", desc: "Build trust with candidates. All featured employers get a verified checkmark." },
  { icon: "📧", title: "Newsletter reach", desc: "Featured and premium listings are included in our weekly digest to 6,200+ subscribers." },
  { icon: "⚡", title: "Fast applications", desc: "Candidates apply in minutes. You receive structured applications directly to your inbox." },
];

export default function HirePage() {
  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        background: "var(--blue)", borderBottom: "0.5px solid var(--bd)",
        padding: "64px 24px 56px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 65%)" }}/>
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--w40)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--w40)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Post a job</span>
          </div>
          <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={64} height={64}
            style={{ borderRadius: "50%", margin: "0 auto 20px", display: "block", border: "2px solid var(--gold-bd)" }}/>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Hire verified <span style={{ color: "var(--gold)" }}>web3 talent</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--w50)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 32px" }}>
            Post your role to 4,200+ active Jobbers across every chain. Verified listings get 3× more quality applications.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {[["4,200+","Active Jobbers"],["6,200+","Newsletter subscribers"],["3×","More applications (verified)"]].map(([n,l],i)=>(
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: 24, fontWeight: 800, color: "var(--gold)" }}>{n}</div>
                <div style={{ fontSize: 12, color: "var(--w40)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>

        {/* Benefits */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 64 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ background: "var(--blue-card)", border: "0.5px solid var(--bd2)", borderRadius: 14, padding: "22px 20px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{b.icon}</div>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{b.title}</div>
              <div style={{ fontSize: 13, color: "var(--w50)", lineHeight: 1.6 }}>{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 15, color: "var(--w50)" }}>No subscription. Pay per listing. Cancel anytime.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 56 }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: "var(--blue-card)",
              border: `${plan.popular ? "2px" : "0.5px"} solid ${plan.color}`,
              borderRadius: 18, padding: "28px 24px",
              position: "relative", transition: "all 0.2s",
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "var(--gold)", color: "#3D2200",
                  fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999,
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                  <IconStar size={11}/> Most popular
                </div>
              )}
              <div style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: plan.textColor, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: 36, fontWeight: 800, color: "#fff" }}>{plan.price}</span>
                <span style={{ fontSize: 13, color: "var(--w40)" }}>{plan.period}</span>
              </div>
              <div style={{ height: "0.5px", background: "var(--bd)", margin: "20px 0" }}/>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--gold-dim)", border: "0.5px solid var(--gold-bd)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <IconCheck size={11} color="var(--gold)"/>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--w60)", lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "13px", border: "none", borderRadius: 10, cursor: "pointer",
                fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
                background: plan.popular ? "var(--gold)" : "var(--w07)",
                color: plan.popular ? "#3D2200" : "#fff",

                transition: "all 0.2s",
              }}>{plan.cta} →</button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{ background: "var(--blue)", border: "0.5px solid var(--bd2)", borderRadius: 20, padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
            Need a custom package?
          </h3>
          <p style={{ fontSize: 14, color: "var(--w50)", marginBottom: 24 }}>
            Multiple listings, sponsored content, or talent directory access? We&apos;ll build a package that works for you.
          </p>
          <a href="mailto:web3jobhq@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
            color: "#3D2200", padding: "13px 28px", borderRadius: 10,
            background: "var(--gold)", textDecoration: "none",
          }}>Contact us <IconArrowRight size={15}/></a>
        </div>
      </div>
    </div>
  );
}
