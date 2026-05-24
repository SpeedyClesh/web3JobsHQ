import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBrandX, IconBrandTelegram } from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <div style={{ background: "var(--blue-deep)", minHeight: "100vh" }}>
      <div style={{ background: "var(--blue)", borderBottom: "0.5px solid var(--bd)", padding: "64px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,166,35,0.1) 0%, transparent 65%)" }}/>
        <div style={{ maxWidth: 620, margin: "0 auto", position: "relative" }}>
          <Image src="/logo.jpg" alt="Web3 Jobs HQ" width={80} height={80}
            style={{ borderRadius: "50%", margin: "0 auto 24px", display: "block", border: "3px solid var(--gold-bd)" }}/>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
            About <span style={{ color: "var(--gold)" }}>Web3 Jobs HQ</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--w50)", lineHeight: 1.8, marginBottom: 28 }}>
            We are the verified agency for Web3 Job Opportunities &amp; Services — a platform built by Jobbers, for Jobbers. Our mission is to connect talented people with the best opportunities in web3, and to give every Jobber the tools to compete.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://x.com/Web3Jobhq" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#fff", padding: "11px 22px", borderRadius: 10, border: "1.5px solid var(--bd2)", background: "var(--w07)", textDecoration: "none" }}>
              <IconBrandX size={16}/> Follow on X
            </a>
            <a href="https://linktr.ee/Web3jobhq" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#001F3D", padding: "11px 22px", borderRadius: 10, border: "none", background: "var(--sky)", textDecoration: "none" }}>
              <IconBrandTelegram size={16}/> Join Telegram
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px" }}>
        {[
          { emoji: "🎯", title: "Our mission", body: "To become the most trusted platform for web3 talent and opportunities — where every Jobber has the education, tools, and connections to succeed, regardless of their background." },
          { emoji: "🏆", title: "What makes us different", body: "We don't just post jobs. We educate Jobbers on how to pitch, research, and negotiate. Our Pitch Academy, Job Wins community, and Salary Index are all designed to give our community an unfair advantage." },
          { emoji: "✅", title: "The verified standard", body: "Every employer on Web3 Jobs HQ is vetted. Every service provider is reviewed. The 'Verified' badge means something here — and that's what builds the trust that makes our community thrive." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ fontSize: 36, flexShrink: 0 }}>{s.emoji}</div>
            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h2>
              <p style={{ fontSize: 15, color: "var(--w50)", lineHeight: 1.8 }}>{s.body}</p>
            </div>
          </div>
        ))}
        <div style={{ background: "var(--blue)", border: "0.5px solid var(--gold-bd)", borderRadius: 16, padding: "32px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Ready to find your next role?</h3>
          <Link href="/jobs" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)", color: "#3D2200", padding: "12px 28px", borderRadius: 10, background: "var(--gold)", textDecoration: "none", marginTop: 16 }}>
            Browse web3 jobs <IconArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
