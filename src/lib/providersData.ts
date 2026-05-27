export interface Provider {
  id: number;
  name: string;
  initials: string;
  avatar: string;
  role: string;
  category: string;
  chain: string;
  chainLogo: string;
  rate: string;
  rateNum: number;
  rating: number;
  reviews: number;
  location: string;
  availability: "Available now" | "Available soon" | "Booked";
  responseTime: string;
  completedProjects: number;
  tags: string[];
  bio: string;
  portfolio: { title: string; desc: string; result: string }[];
  socials: { x?: string; github?: string; linkedin?: string; website?: string };
  featured: boolean;
  verified: boolean;
  topRated: boolean;
}

export const providers: Provider[] = [
  {
    id: 1, name: "Tunde K.", initials: "TK",
    avatar: "/providers/p1.svg",
    role: "Smart Contract Auditor", category: "Engineering",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    rate: "$120/hr", rateNum: 120,
    rating: 5.0, reviews: 24,
    location: "Lagos, Nigeria · Remote",
    availability: "Available now", responseTime: "< 2 hours",
    completedProjects: 18,
    tags: ["Solidity","Foundry","Slither","Security","EVM","DeFi"],
    bio: "Senior smart contract auditor with 4+ years auditing DeFi protocols. Have reviewed $2B+ TVL in contracts. Previously auditor at a top-4 web3 security firm.",
    portfolio: [
      { title: "DeFi lending protocol audit", desc: "Full audit of a $200M TVL lending protocol", result: "Found 3 critical, 7 high severity bugs before launch" },
      { title: "NFT marketplace security review", desc: "End-to-end security review of an NFT trading platform", result: "Zero post-launch exploits, protocol now $50M volume" },
      { title: "Cross-chain bridge audit",  desc: "Audit of a Ethereum↔Arbitrum bridge contract", result: "Identified reentrancy vulnerability saving $12M" },
    ],
    socials: { x: "https://x.com", github: "https://github.com" },
    featured: true, verified: true, topRated: true,
  },
  {
    id: 2, name: "Sara A.", initials: "SA",
    avatar: "/providers/p2.svg",
    role: "Web3 Copywriter & Content Strategist", category: "Marketing",
    chain: "Multi-chain", chainLogo: "/chains/eth.svg",
    rate: "$85/hr", rateNum: 85,
    rating: 5.0, reviews: 31,
    location: "Berlin, Germany · Remote",
    availability: "Available now", responseTime: "< 4 hours",
    completedProjects: 47,
    tags: ["Content Strategy","DeFi","NFT","Technical Writing","SEO","Tokenomics"],
    bio: "Web3 content strategist with 5 years writing for protocols, DAOs, and NFT projects. Former crypto journalist. I turn complex DeFi mechanics into compelling narratives.",
    portfolio: [
      { title: "DeFi protocol content strategy", desc: "Full content overhaul for a Ethereum DeFi protocol", result: "3× increase in organic traffic, 40% newsletter growth" },
      { title: "NFT project launch campaign", desc: "Copy and strategy for a 10k NFT collection launch", result: "Sold out in 4 hours, $2.4M raised" },
      { title: "DAO documentation system", desc: "Built complete docs system for a major DAO", result: "Contributor onboarding time reduced by 60%" },
    ],
    socials: { x: "https://x.com", website: "https://example.com" },
    featured: true, verified: true, topRated: true,
  },
  {
    id: 3, name: "Remi O.", initials: "RO",
    avatar: "/providers/p3.svg",
    role: "Community Lead & Discord Manager", category: "Community",
    chain: "Solana", chainLogo: "/chains/sol.svg",
    rate: "$75/hr", rateNum: 75,
    rating: 5.0, reviews: 38,
    location: "Accra, Ghana · Remote",
    availability: "Available soon", responseTime: "< 6 hours",
    completedProjects: 22,
    tags: ["Discord","Telegram","Community Growth","Moderation","Events","Web3"],
    bio: "Built and scaled 6 web3 communities from 0 to 50k+ members. Expert in Discord architecture, moderation systems, and community-led growth. Specialist in African web3 markets.",
    portfolio: [
      { title: "Solana ecosystem community",  desc: "Built community for a Solana gaming protocol from scratch", result: "0 to 45,000 Discord members in 6 months" },
      { title: "NFT project community management", desc: "Led community for a 5k NFT collection launch", result: "98% holder retention 6 months post-mint" },
      { title: "DeFi protocol Telegram growth", desc: "Grew and managed Telegram community for DeFi protocol", result: "22,000 active members, 40% daily engagement rate" },
    ],
    socials: { x: "https://x.com", linkedin: "https://linkedin.com" },
    featured: true, verified: true, topRated: false,
  },
  {
    id: 4, name: "Nadia J.", initials: "NJ",
    avatar: "/providers/p4.svg",
    role: "DeFi UX Designer", category: "Design",
    chain: "Base", chainLogo: "/chains/base.svg",
    rate: "$95/hr", rateNum: 95,
    rating: 4.9, reviews: 15,
    location: "Paris, France · Remote",
    availability: "Available now", responseTime: "< 8 hours",
    completedProjects: 12,
    tags: ["Figma","Web3 UX","DeFi","Wallet Design","Framer","Design Systems"],
    bio: "Product designer specialising in DeFi and wallet UX. I make complex financial products feel simple. 4 years designing for web3 protocols, previously at a major European fintech.",
    portfolio: [
      { title: "DeFi lending dApp redesign", desc: "Full UX/UI redesign of a top-10 DeFi lending protocol", result: "42% increase in user retention, 30% more successful transactions" },
      { title: "Wallet onboarding flow", desc: "Redesigned crypto wallet first-time user experience", result: "Onboarding completion rate up from 34% to 71%" },
      { title: "NFT marketplace design system", desc: "Built full design system for NFT trading platform", result: "Shipped 3× faster with consistent UI across 40+ screens" },
    ],
    socials: { website: "https://example.com", linkedin: "https://linkedin.com" },
    featured: false, verified: true, topRated: true,
  },
  {
    id: 5, name: "Amara M.", initials: "AM",
    avatar: "/providers/p5.svg",
    role: "Tokenomics Analyst & DeFi Researcher", category: "Research",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    rate: "$110/hr", rateNum: 110,
    rating: 5.0, reviews: 9,
    location: "Nairobi, Kenya · Remote",
    availability: "Available now", responseTime: "< 3 hours",
    completedProjects: 8,
    tags: ["Tokenomics","DeFi Research","Token Design","Governance","Modelling","Excel"],
    bio: "Tokenomics designer and DeFi researcher. I model token economies, design incentive structures, and write research reports used by protocols managing $100M+ in assets.",
    portfolio: [
      { title: "L2 token economic design", desc: "Designed full token economy for a new Ethereum L2", result: "Token model adopted by team, TGE raised $15M" },
      { title: "DeFi governance research", desc: "Research report on governance participation across 20 DAOs", result: "Report cited by 3 top protocols, 50k+ reads" },
      { title: "Staking mechanism redesign", desc: "Redesigned staking system for a DeFi protocol", result: "Staking participation rate increased from 28% to 61%" },
    ],
    socials: { x: "https://x.com", github: "https://github.com" },
    featured: false, verified: true, topRated: true,
  },
  {
    id: 6, name: "Dev F.", initials: "DF",
    avatar: "/providers/p6.svg",
    role: "Rust / Solana Program Developer", category: "Engineering",
    chain: "Solana", chainLogo: "/chains/sol.svg",
    rate: "$130/hr", rateNum: 130,
    rating: 5.0, reviews: 22,
    location: "São Paulo, Brazil · Remote",
    availability: "Available soon", responseTime: "< 5 hours",
    completedProjects: 14,
    tags: ["Rust","Anchor","Solana","NFT","DeFi","TypeScript"],
    bio: "Solana program developer with 3 years building production-grade on-chain programs. Expert in Anchor framework, SPL tokens, and Solana DeFi primitives.",
    portfolio: [
      { title: "Solana DEX liquidity program", desc: "Built AMM liquidity program on Solana", result: "$8M TVL within 3 months of launch, zero exploits" },
      { title: "NFT staking program", desc: "Developed NFT staking and rewards distribution program", result: "15,000+ NFTs staked, $1.2M rewards distributed" },
      { title: "Cross-program invocation system", desc: "Built composable CPI system for DeFi protocol", result: "Enabled 5 integrations, 40% increase in protocol usage" },
    ],
    socials: { github: "https://github.com", x: "https://x.com" },
    featured: false, verified: true, topRated: false,
  },
  {
    id: 7, name: "Kofi L.", initials: "KL",
    avatar: "/providers/p7.svg",
    role: "DAO Governance Advisor", category: "Operations",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    rate: "$90/hr", rateNum: 90,
    rating: 4.8, reviews: 11,
    location: "Kumasi, Ghana · Remote",
    availability: "Available now", responseTime: "< 4 hours",
    completedProjects: 9,
    tags: ["DAO","Governance","Snapshot","Tally","Treasury","Strategy"],
    bio: "DAO governance specialist with a background in political science and public policy. I design governance structures, voting mechanisms, and treasury frameworks for DAOs.",
    portfolio: [
      { title: "DAO governance framework redesign", desc: "Redesigned full governance process for a major DeFi DAO", result: "Voter participation up from 12% to 34%, faster decision-making" },
      { title: "Treasury diversification strategy", desc: "Built treasury management framework for $40M DAO treasury", result: "15% yield improvement, runway extended by 18 months" },
      { title: "Contributor rewards system", desc: "Designed contributor compensation framework for DAO", result: "Retained 85% of top contributors through bear market" },
    ],
    socials: { x: "https://x.com", linkedin: "https://linkedin.com" },
    featured: false, verified: true, topRated: false,
  },
  {
    id: 8, name: "Priya W.", initials: "PW",
    avatar: "/providers/p8.svg",
    role: "NFT & Web3 Growth Strategist", category: "Marketing",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    rate: "$80/hr", rateNum: 80,
    rating: 4.9, reviews: 19,
    location: "Mumbai, India · Remote",
    availability: "Available now", responseTime: "< 3 hours",
    completedProjects: 31,
    tags: ["NFT","Growth","Twitter/X","Brand Strategy","Influencer","GTM"],
    bio: "Web3 growth strategist with a background in fashion brand marketing. I run NFT launch campaigns, X growth strategies, and go-to-market plans for new protocols.",
    portfolio: [
      { title: "NFT collection launch",  desc: "Full GTM strategy for 8k NFT collection", result: "Sold out in 90 minutes, $1.8M raised" },
      { title: "Protocol X growth campaign", desc: "6-month X growth strategy for DeFi protocol", result: "12,000 → 87,000 followers, 340% engagement increase" },
      { title: "Web3 brand positioning", desc: "Complete brand strategy for new L2 chain", result: "Launched to 50k followers on day one" },
    ],
    socials: { x: "https://x.com", website: "https://example.com" },
    featured: false, verified: true, topRated: true,
  },
  {
    id: 9, name: "Elena M.", initials: "EM",
    avatar: "/providers/p9.svg",
    role: "Web3 Growth Hacker & Analytics Lead", category: "Marketing",
    chain: "Base", chainLogo: "/chains/base.svg",
    rate: "$85/hr", rateNum: 85,
    rating: 5.0, reviews: 27,
    location: "Lisbon, Portugal · Remote",
    availability: "Available now", responseTime: "< 2 hours",
    completedProjects: 23,
    tags: ["Growth","Analytics","Dune","On-chain Data","A/B Testing","Farcaster"],
    bio: "Data-driven growth hacker working at the intersection of on-chain analytics and product growth. I use Dune, Nansen and on-chain data to find growth levers other teams miss.",
    portfolio: [
      { title: "Base ecosystem growth analysis", desc: "On-chain growth analysis for Base protocol team", result: "Identified 3 growth levers, 2× MAU in 8 weeks" },
      { title: "DeFi user funnel optimisation", desc: "Full funnel analysis and optimisation for DeFi protocol", result: "Reduced drop-off from 67% to 31%, $2M more TVL" },
      { title: "Farcaster growth campaign", desc: "Farcaster-native growth campaign for new protocol", result: "8,000 followers, 40% referral rate to dApp" },
    ],
    socials: { x: "https://x.com", github: "https://github.com" },
    featured: false, verified: true, topRated: true,
  },
  {
    id: 10, name: "James B.", initials: "JB",
    avatar: "/providers/p10.svg",
    role: "Senior Smart Contract Developer", category: "Engineering",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    rate: "$125/hr", rateNum: 125,
    rating: 4.9, reviews: 33,
    location: "London, UK · Remote",
    availability: "Available soon", responseTime: "< 6 hours",
    completedProjects: 26,
    tags: ["Solidity","Hardhat","EVM","DeFi","ERC-20","Gas Optimisation"],
    bio: "Senior Solidity developer with 5 years building DeFi protocols. Specialist in gas optimisation, complex DeFi mechanics, and protocol architecture. Previously at a top-5 DeFi protocol.",
    portfolio: [
      { title: "Yield aggregator protocol", desc: "Built yield aggregation protocol from scratch", result: "$15M TVL at peak, featured in DeFi Pulse top 20" },
      { title: "Gas optimisation project", desc: "Optimised gas usage across 12 core contracts", result: "Average user saves 40% gas per transaction" },
      { title: "ERC-4626 vault implementation", desc: "Built tokenised vault system for asset management protocol", result: "$30M in deposits, zero security incidents" },
    ],
    socials: { github: "https://github.com", linkedin: "https://linkedin.com" },
    featured: false, verified: true, topRated: false,
  },
];

export const providerCategories = ["All","Engineering","Marketing","Community","Design","Operations","Research"];
export const availabilityFilters = ["All","Available now","Available soon"];
export const sortOptions = ["Top rated","Highest rate","Lowest rate","Most reviews","Most projects"];
