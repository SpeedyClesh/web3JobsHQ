export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  companySize: string;
  location: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  chain: string;
  chainLogo: string;
  salary: { min: number; max: number };
  type: "Full-time" | "Part-time" | "Contract" | "Freelance";
  category: string;
  tags: string[];
  posted: string;
  postedDays: number;
  verified: boolean;
  hot: boolean;
  isNew: boolean;
  featured: boolean;
  description: string;
  techStack: string[];
}

export const allJobs: Job[] = [
  {
    id: 1, title: "Senior Solidity Engineer", company: "Chainlink Labs",
    companyLogo: "/companies/chainlink.svg", companySize: "201–500",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 140, max: 190 }, type: "Full-time",
    category: "Engineering", tags: ["Solidity","EVM","Smart Contracts","DeFi"],
    posted: "2h ago", postedDays: 0,
    verified: true, hot: true, isNew: false, featured: true,
    description: "Build and audit production-grade smart contracts powering real-world data feeds.",
    techStack: ["Solidity","Hardhat","TypeScript","EVM"],
  },
  {
    id: 2, title: "Web3 Community Manager", company: "Uniswap Labs",
    companyLogo: "/companies/uniswap.svg", companySize: "51–200",
    location: "Remote · US/EU", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 60, max: 85 }, type: "Full-time",
    category: "Community", tags: ["Community","Discord","Twitter","DeFi"],
    posted: "5h ago", postedDays: 0,
    verified: true, hot: false, isNew: true, featured: false,
    description: "Own and grow the Uniswap community across Discord, Twitter and governance forums.",
    techStack: ["Discord","Notion","Twitter"],
  },
  {
    id: 3, title: "Growth Lead — Telegram Ecosystem", company: "TON Foundation",
    companyLogo: "/companies/ton.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "TON", chainLogo: "/chains/ton.svg",
    salary: { min: 75, max: 110 }, type: "Full-time",
    category: "Marketing", tags: ["Growth","Telegram","TON","Web3 Marketing"],
    posted: "1d ago", postedDays: 1,
    verified: true, hot: true, isNew: false, featured: false,
    description: "Drive user acquisition and ecosystem growth for the TON blockchain network.",
    techStack: ["Telegram","Analytics","Growth"],
  },
  {
    id: 4, title: "DeFi Content Strategist", company: "MakerDAO",
    companyLogo: "/companies/maker.svg", companySize: "51–200",
    location: "Remote · Part-time ok", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 50, max: 70 }, type: "Part-time",
    category: "Marketing", tags: ["Content","DeFi","Writing","Strategy"],
    posted: "1d ago", postedDays: 1,
    verified: false, hot: false, isNew: true, featured: false,
    description: "Create compelling content about MakerDAO's DAI stablecoin and DeFi ecosystem.",
    techStack: ["Notion","Figma","CMS"],
  },
  {
    id: 5, title: "Rust Developer — NFT Infrastructure", company: "Solana Foundation",
    companyLogo: "/companies/solana.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Solana", chainLogo: "/chains/sol.svg",
    salary: { min: 120, max: 160 }, type: "Full-time",
    category: "Engineering", tags: ["Rust","Solana","NFT","Infrastructure"],
    posted: "2d ago", postedDays: 2,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Build the NFT infrastructure layer powering millions of assets on Solana.",
    techStack: ["Rust","Anchor","TypeScript","Solana"],
  },
  {
    id: 6, title: "DAO Operations Manager", company: "Compound Finance",
    companyLogo: "/companies/compound.svg", companySize: "11–50",
    location: "Remote · US preferred", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 65, max: 90 }, type: "Full-time",
    category: "Operations", tags: ["DAO","Operations","Governance","DeFi"],
    posted: "2d ago", postedDays: 2,
    verified: true, hot: false, isNew: true, featured: false,
    description: "Coordinate DAO governance, treasury management, and contributor relations.",
    techStack: ["Notion","Snapshot","Tally"],
  },
  {
    id: 7, title: "Smart Contract Auditor", company: "Aave",
    companyLogo: "/companies/aave.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 150, max: 220 }, type: "Full-time",
    category: "Engineering", tags: ["Solidity","Auditing","Security","EVM"],
    posted: "3d ago", postedDays: 3,
    verified: true, hot: true, isNew: false, featured: false,
    description: "Audit smart contracts across Aave's lending protocol and ecosystem integrations.",
    techStack: ["Solidity","Foundry","Slither","Python"],
  },
  {
    id: 8, title: "Protocol Engineer", company: "Arbitrum",
    companyLogo: "/companies/arbitrum.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Arbitrum", chainLogo: "/chains/arb.svg",
    salary: { min: 160, max: 240 }, type: "Full-time",
    category: "Engineering", tags: ["L2","Rollups","Go","Rust"],
    posted: "3d ago", postedDays: 3,
    verified: true, hot: true, isNew: false, featured: true,
    description: "Work on the core Arbitrum One rollup protocol and nitro stack.",
    techStack: ["Go","Rust","Solidity","Docker"],
  },
  {
    id: 9, title: "NFT Product Designer", company: "OpenSea",
    companyLogo: "/companies/opensea.svg", companySize: "201–500",
    location: "San Francisco, US", locationType: "On-site",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 120, max: 170 }, type: "Full-time",
    category: "Design", tags: ["Product Design","NFT","Figma","UX"],
    posted: "4d ago", postedDays: 4,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Design delightful product experiences for the world's largest NFT marketplace.",
    techStack: ["Figma","Framer","Lottie"],
  },
  {
    id: 10, title: "Web3 DevRel Engineer", company: "Polygon",
    companyLogo: "/companies/polygon.svg", companySize: "201–500",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Polygon", chainLogo: "/chains/matic.svg",
    salary: { min: 90, max: 130 }, type: "Full-time",
    category: "Engineering", tags: ["DevRel","Solidity","TypeScript","Education"],
    posted: "4d ago", postedDays: 4,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Help developers build on Polygon through content, workshops, and code examples.",
    techStack: ["TypeScript","Solidity","React","Next.js"],
  },
  {
    id: 11, title: "Head of Partnerships", company: "MetaMask",
    companyLogo: "/companies/metamask.svg", companySize: "201–500",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    salary: { min: 130, max: 180 }, type: "Full-time",
    category: "Operations", tags: ["Partnerships","Business Dev","Web3","Strategy"],
    posted: "5d ago", postedDays: 5,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Build strategic partnerships that grow MetaMask's ecosystem and user base globally.",
    techStack: ["CRM","Notion","Analytics"],
  },
  {
    id: 12, title: "Base Chain Frontend Engineer", company: "Base",
    companyLogo: "/companies/base.svg", companySize: "51–200",
    location: "Remote · US/EU", locationType: "Remote",
    chain: "Base", chainLogo: "/chains/base.svg",
    salary: { min: 110, max: 155 }, type: "Full-time",
    category: "Engineering", tags: ["React","Next.js","TypeScript","Web3"],
    posted: "5d ago", postedDays: 5,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Build user-facing dApps and tools on the Base L2 ecosystem.",
    techStack: ["React","Next.js","TypeScript","wagmi"],
  },
  {
    id: 13, title: "Social Media Manager", company: "Optimism",
    companyLogo: "/companies/optimism.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Optimism", chainLogo: "/chains/op.svg",
    salary: { min: 55, max: 80 }, type: "Full-time",
    category: "Marketing", tags: ["Social Media","Twitter","Content","L2"],
    posted: "6d ago", postedDays: 6,
    verified: false, hot: false, isNew: false, featured: false,
    description: "Own Optimism's social media presence across Twitter, Discord, and Farcaster.",
    techStack: ["Twitter","Discord","Farcaster"],
  },
  {
    id: 14, title: "Ecosystem Growth Manager", company: "Lens Protocol",
    companyLogo: "/companies/lens.svg", companySize: "11–50",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Polygon", chainLogo: "/chains/matic.svg",
    salary: { min: 70, max: 100 }, type: "Full-time",
    category: "Marketing", tags: ["Ecosystem","Growth","SocialFi","Web3"],
    posted: "7d ago", postedDays: 7,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Grow the Lens Protocol ecosystem by onboarding developers and creators.",
    techStack: ["Notion","Analytics","Twitter"],
  },
  {
    id: 15, title: "Blockchain Technical Writer", company: "Arbitrum",
    companyLogo: "/companies/arbitrum.svg", companySize: "51–200",
    location: "Remote · Worldwide", locationType: "Remote",
    chain: "Arbitrum", chainLogo: "/chains/arb.svg",
    salary: { min: 60, max: 90 }, type: "Contract",
    category: "Non-tech", tags: ["Technical Writing","Docs","Arbitrum","L2"],
    posted: "1w ago", postedDays: 7,
    verified: true, hot: false, isNew: false, featured: false,
    description: "Write clear, developer-friendly documentation for Arbitrum's rollup ecosystem.",
    techStack: ["Markdown","Git","Notion"],
  },
];

export const categories = ["All","Engineering","Marketing","Community","Design","Operations","Non-tech"];
export const locationTypes = ["All locations","Remote","On-site","Hybrid"];
export const jobTypes = ["All types","Full-time","Part-time","Contract","Freelance"];
export const chains = ["All chains","Ethereum","Solana","Base","TON","Arbitrum","Optimism","Polygon"];
export const salaryRanges = [
  { label: "Any salary",  min: 0,   max: 999 },
  { label: "$0–$60k",     min: 0,   max: 60  },
  { label: "$60k–$100k",  min: 60,  max: 100 },
  { label: "$100k–$150k", min: 100, max: 150 },
  { label: "$150k+",      min: 150, max: 999 },
];

// Extended detail content keyed by job id
export const jobDetails: Record<number, {
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  applicationProcess: string[];
  companyMission: string;
  companyWebsite: string;
  teamSize: string;
  fundingStage: string;
}> = {
  1: {
    about: "Chainlink Labs is the primary development company behind the Chainlink Network, the industry-standard Web3 services platform that has enabled trillions of dollars in transaction value across DeFi, insurance, gaming, NFTs and other major industries. As a Senior Solidity Engineer you will design, build, and audit the smart contracts that power Chainlink's oracle network.",
    responsibilities: [
      "Design and implement production-grade Solidity smart contracts for Chainlink's data feeds and oracle infrastructure",
      "Conduct internal security reviews and collaborate with external auditors on protocol-level code",
      "Optimise gas efficiency across existing and new contract deployments",
      "Write comprehensive unit, integration, and fuzz tests using Foundry and Hardhat",
      "Collaborate closely with protocol designers and researchers to translate specs into code",
      "Mentor junior engineers and participate in thorough code reviews",
      "Contribute to open-source Chainlink repositories and developer tooling",
    ],
    requirements: [
      "5+ years of software engineering experience, with 3+ years writing production Solidity",
      "Deep understanding of the EVM, ABI encoding, storage layout, and gas optimisation patterns",
      "Proficient with Foundry, Hardhat, or similar Solidity development frameworks",
      "Experience writing formal tests including unit, integration, and invariant/fuzz tests",
      "Strong knowledge of DeFi protocols, oracle mechanisms, and common attack vectors",
      "Comfortable working asynchronously in a distributed, fully-remote team",
    ],
    niceToHave: [
      "Experience with formal verification tools (Certora, Halmos, etc.)",
      "Prior contributions to audited or widely-used open-source smart contract projects",
      "Familiarity with cross-chain messaging protocols (CCIP, LayerZero, Wormhole)",
      "Knowledge of ZK proofs and their applications in smart contract verification",
    ],
    benefits: [
      "Competitive salary + token allocation with vesting schedule",
      "Fully remote — work from anywhere in the world",
      "Generous equipment budget and home office stipend",
      "Comprehensive health, dental and vision (US-based employees)",
      "Unlimited PTO with a minimum 15-day expectation",
      "Annual team retreats to exciting locations",
      "Access to the largest network of web3 builders and founders",
    ],
    applicationProcess: [
      "Submit your application with CV and any relevant GitHub/portfolio links",
      "Async technical screen — a short take-home Solidity challenge (2–3 hours)",
      "Technical interview with two senior engineers (60 min)",
      "Final culture & values interview with engineering leadership (45 min)",
      "Offer and onboarding — average time to offer is 2–3 weeks",
    ],
    companyMission: "Build a world powered by truth — enabling smart contracts to securely connect to real-world data, events, and payments.",
    companyWebsite: "https://chainlinklabs.com",
    teamSize: "201–500 people",
    fundingStage: "Series unknown — backed by a16z, Sequoia, Google Ventures",
  },
  8: {
    about: "Offchain Labs builds Arbitrum, the leading Ethereum Layer 2 scaling solution. As a Protocol Engineer you will work directly on the Arbitrum Nitro stack — the technical backbone processing billions of dollars of transactions daily.",
    responsibilities: [
      "Contribute to core development of the Arbitrum Nitro rollup stack written in Go and Rust",
      "Design and implement protocol upgrades, fraud proofs, and sequencer logic",
      "Write extensive tests ensuring correctness of consensus-critical code paths",
      "Review protocol proposals and collaborate with the research team on new features",
      "Coordinate with security researchers during audits and bug bounty disclosures",
      "Help onboard and mentor new protocol engineers",
    ],
    requirements: [
      "5+ years of systems programming experience in Go, Rust, or C++",
      "Deep understanding of blockchain consensus, fraud proofs, or optimistic rollup design",
      "Strong background in distributed systems and networking",
      "Experience reading and reasoning about EVM bytecode",
      "Excellent written communication for async, distributed collaboration",
    ],
    niceToHave: [
      "Direct contributions to an L1 or L2 blockchain codebase",
      "Experience with ZK proof systems or validity rollups",
      "Background in formal methods or program verification",
    ],
    benefits: [
      "Top-of-market salary + significant ARB token allocation",
      "Fully remote with optional offices in NYC and other major cities",
      "Full benefits package including health, dental, vision, and 401k",
      "Generous conference and education budget",
      "Unlimited PTO",
    ],
    applicationProcess: [
      "Apply with CV and a brief note on your most interesting systems engineering project",
      "Initial call with a recruiter (30 min)",
      "Technical deep-dive with two protocol engineers (90 min)",
      "Take-home protocol design exercise (4 hours)",
      "Final discussion with CTO (45 min)",
    ],
    companyMission: "Scale Ethereum to billions of users without compromising on security or decentralisation.",
    companyWebsite: "https://arbitrum.io",
    teamSize: "51–200 people",
    fundingStage: "Series B — $120M raised, backed by Lightspeed, Pantera, Coinbase Ventures",
  },
};

// Fallback detail for jobs without specific content
export const defaultDetail = {
  about: "This is an exciting opportunity to join one of the leading teams building the future of Web3. You will work alongside world-class engineers, designers, and builders on products used by millions of people globally.",
  responsibilities: [
    "Take full ownership of your area and deliver high-quality output consistently",
    "Collaborate cross-functionally with engineering, product, and design teams",
    "Contribute to technical decisions and architecture discussions",
    "Write clean, well-tested, and well-documented code or content",
    "Participate in hiring, interviewing, and growing the team",
    "Represent the company at conferences and community events",
  ],
  requirements: [
    "3+ years of relevant professional experience in your field",
    "Strong understanding of blockchain technology and the Web3 ecosystem",
    "Excellent written and verbal communication skills",
    "Comfortable working in a fast-paced, remote-first environment",
    "Self-motivated with strong ownership and accountability",
  ],
  niceToHave: [
    "Prior experience working at a Web3 protocol, DeFi project, or blockchain company",
    "Active participation in DAO governance or open-source communities",
    "Personal track record of building or shipping web3 products",
  ],
  benefits: [
    "Competitive salary and meaningful token/equity allocation",
    "Fully remote — work from anywhere",
    "Flexible working hours — we care about output, not hours",
    "Home office setup budget",
    "Health insurance (varies by region)",
    "Annual company retreat",
  ],
  applicationProcess: [
    "Submit your application and we'll review within 5 business days",
    "Intro call with the hiring manager (30 min)",
    "Skills assessment relevant to the role",
    "Final interview with team leads",
    "Offer and onboarding",
  ],
  companyMission: "Build the infrastructure and products that power the next generation of the internet.",
  companyWebsite: "https://web3jobshq.com",
  teamSize: "11–200 people",
  fundingStage: "Venture-backed",
};
