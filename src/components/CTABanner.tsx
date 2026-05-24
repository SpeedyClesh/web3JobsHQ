"use client";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconUsers } from "@tabler/icons-react";

export default function CTABanner() {
  return (
    <div style={{ padding: "0 24px 56px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{
        borderRadius: 20, overflow: "hidden", position: "relative",
        border: "1.5px solid var(--gold-bd)", minHeight: 200,
      }}>
        <Image src="/banner.jpg" alt="Are you hiring in Web3?" fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.45 }} priority/>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(13,18,96,0.97) 0%, rgba(13,18,96,0.75) 55%, rgba(13,18,96,0.4) 100%)",
          display: "flex", alignItems: "center",
          padding: "32px clamp(24px,5vw,56px)", gap: "clamp(16px,3vw,40px)", flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2 style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800,
              color: "#fff", marginBottom: 8, letterSpacing: "-0.01em",
            }}>
              Are you hiring in <span style={{ color: "var(--gold)" }}>web3</span>?
            </h2>
            <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 380 }}>
              Post your role to 4,200+ active Jobbers. Verified listings get 3× more applications than unverified.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
            <Link href="/hire" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 14, fontWeight: 700, fontFamily: "var(--font-syne)",
              color: "#3D2200", padding: "14px 28px", borderRadius: 10,
              background: "var(--gold)", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(245,166,35,0.35)",
              transition: "all 0.2s",
            }}>Post a job <IconArrowRight size={16}/></Link>
            <Link href="/providers" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 14, fontWeight: 600, fontFamily: "var(--font-syne)",
              color: "#fff", padding: "14px 28px", borderRadius: 10,
              border: "2px solid rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.12)", textDecoration: "none",
              backdropFilter: "blur(8px)", transition: "all 0.2s",
            }}><IconUsers size={16}/> Browse talent</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
