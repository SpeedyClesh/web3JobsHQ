"use client";

const chains = [
  { name: "Ethereum", logo: "/chains/eth.svg",   color: "#627EEA" },
  { name: "Solana",   logo: "/chains/sol.svg",   color: "#9945FF" },
  { name: "Base",     logo: "/chains/base.svg",  color: "#0052FF" },
  { name: "TON",      logo: "/chains/ton.svg",   color: "#0098EA" },
  { name: "BNB Chain",logo: "/chains/bnb.svg",   color: "#F3BA2F" },
  { name: "Arbitrum", logo: "/chains/arb.svg",   color: "#12AAFF" },
  { name: "Optimism", logo: "/chains/op.svg",    color: "#FF0420" },
  { name: "Polygon",  logo: "/chains/matic.svg", color: "#8247E5" },
];

export default function ChainFilter() {
  return (
    <div style={{
      background: "var(--blue)",
      borderBottom: "0.5px solid var(--bd)",
      padding: "18px 24px",
      display: "flex", alignItems: "center", gap: 16,
      overflowX: "auto",
    }}>
      <span style={{
        fontSize: 11, color: "var(--w30)", letterSpacing: "0.08em",
        textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0,
      }}>Browse by chain</span>
      <div style={{ width: "0.5px", height: 20, background: "var(--bd2)", flexShrink: 0 }}/>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {chains.map(c => (
          <button key={c.name}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              fontSize: 13, color: "var(--w60)",
              padding: "6px 14px", border: "0.5px solid var(--bd)",
              borderRadius: 999, cursor: "pointer", background: "transparent",
              fontFamily: "var(--font-dm)", whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const b = e.currentTarget;
              b.style.color = c.color;
              b.style.borderColor = c.color + "55";
              b.style.background = c.color + "18";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget;
              b.style.color = "var(--w60)";
              b.style.borderColor = "var(--bd)";
              b.style.background = "transparent";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt={c.name} width={18} height={18} style={{ borderRadius: "50%" }}/>
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
