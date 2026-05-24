export interface Win {
  id: number;
  name: string;
  initials: string;
  avatar: string; // provider avatar path
  role: string;
  company: string;
  companyLogo: string;
  salary: string;
  location: string;
  chain: string;
  chainLogo: string;
  category: string;
  background: string; // their background before
  quote: string;
  story: string;
  timeToLand: string;
  toolsUsed: string[];
  postedDays: number;
  posted: string;
  featured: boolean;
  color: string;
  bg: string;
}

export const wins: Win[] = [
  {
    id: 1,
    name: "Aisha O.", initials: "AO",
    avatar: "/providers/p1.svg",
    role: "Community Manager", company: "Arbitrum", companyLogo: "/companies/arbitrum.svg",
    salary: "$68,000/yr", location: "Remote · Worldwide",
    chain: "Arbitrum", chainLogo: "/chains/arb.svg",
    category: "Community",
    background: "Customer service rep with no crypto experience",
    quote: "The cold DM template from the Pitch Academy changed everything. I landed a community role at a funded L2 in 3 weeks.",
    story: "I came from a customer service background — no tech skills, no web3 experience whatsoever. I found Web3 Jobs HQ on X and started reading the guides. The cold DM template was the game-changer. I spent 10 minutes researching the Arbitrum community's pain points, personalised the template, and sent 8 targeted DMs. I got 3 replies, 2 interviews, and 1 offer. Start to finish: 21 days.",
    timeToLand: "3 weeks",
    toolsUsed: ["Cold DM template", "Pitch Academy", "Job board"],
    postedDays: 1, posted: "1 day ago",
    featured: true, color: "var(--gold)", bg: "rgba(245,166,35,0.15)",
  },
  {
    id: 2,
    name: "Kelvin M.", initials: "KM",
    avatar: "/providers/p2.svg",
    role: "Smart Contract Dev", company: "Compound Finance", companyLogo: "/companies/compound.svg",
    salary: "$95,000/yr", location: "Remote · US/EU",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    category: "Engineering",
    background: "Web2 JavaScript developer wanting to break into Web3",
    quote: "Found the role on HQ's board, applied same day. Two interviews later, I had the offer. This platform is the real deal.",
    story: "I'd been trying to break into web3 for 8 months. Applied to dozens of jobs on other platforms with zero callbacks. Joined Web3 Jobs HQ, read the portfolio guide, rebuilt my GitHub to show web3 projects instead of random tutorials, and found the Compound role on the job board on a Tuesday. Applied by Wednesday. Had an offer by Friday of the following week. The difference was showing up with context — I'd read everything about Compound before my first interview.",
    timeToLand: "10 days",
    toolsUsed: ["Job board", "Portfolio guide", "Research guide"],
    postedDays: 2, posted: "2 days ago",
    featured: true, color: "var(--sky)", bg: "rgba(59,158,232,0.15)",
  },
  {
    id: 3,
    name: "Fatima N.", initials: "FN",
    avatar: "/providers/p3.svg",
    role: "DAO Operations Manager", company: "MakerDAO", companyLogo: "/companies/maker.svg",
    salary: "$55,000/yr", location: "Remote · Worldwide",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    category: "Operations",
    background: "HR manager at a traditional finance company",
    quote: "Non-tech background, zero crypto knowledge. Used the Pitch Academy for 6 weeks. Web3 Jobs HQ completely changed my career path.",
    story: "I was an HR manager at a fintech company, comfortable but bored. I wanted web3 but thought I needed to code. The 'Breaking Into Web3 With No Tech Background' guide opened my eyes. I spent 3 weeks learning the basics — wallets, DeFi, DAOs. Then I volunteered at Bankless DAO for 2 weeks to get experience. By week 6, I had a paid DAO Ops role at MakerDAO. My traditional HR and operations skills were exactly what they needed.",
    timeToLand: "6 weeks",
    toolsUsed: ["Non-tech guide", "Pitch Academy", "DAO contribution guide"],
    postedDays: 3, posted: "3 days ago",
    featured: true, color: "#6DC87A", bg: "rgba(100,200,120,0.15)",
  },
  {
    id: 4,
    name: "James B.", initials: "JB",
    avatar: "/providers/p10.svg",
    role: "Protocol Engineer", company: "Polygon", companyLogo: "/companies/polygon.svg",
    salary: "$160,000/yr", location: "Remote · Worldwide",
    chain: "Polygon", chainLogo: "/chains/matic.svg",
    category: "Engineering",
    background: "Systems engineer at a cloud infrastructure company",
    quote: "Used the 'find newly funded projects' guide. Reached out to Polygon before the job was even posted. Skip the queue entirely.",
    story: "The funding research guide taught me to look for companies mid-raise, not post-raise. I saw Polygon announce a $450M ecosystem fund, set a Google Alert, and DM'd their VP of Engineering within 6 hours. Referenced their specific technical challenges with ZK rollups. Got a reply within the day. Had a coffee chat by Friday. The job wasn't even posted yet — I was hired two weeks before it went live on any board.",
    timeToLand: "2 weeks",
    toolsUsed: ["Funded projects guide", "Cold DM template", "Salary negotiation guide"],
    postedDays: 4, posted: "4 days ago",
    featured: false, color: "#C490FF", bg: "rgba(153,69,255,0.15)",
  },
  {
    id: 5,
    name: "Priya W.", initials: "PW",
    avatar: "/providers/p8.svg",
    role: "NFT Strategist", company: "OpenSea", companyLogo: "/companies/opensea.svg",
    salary: "$80,000/yr", location: "Remote · US preferred",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    category: "Marketing",
    background: "Marketing manager at a fashion brand",
    quote: "My fashion background became a superpower in NFT marketing. The HQ community helped me see that angle.",
    story: "I was sceptical that my fashion marketing background had any relevance to web3. Posted in the HQ Telegram asking for advice. The community immediately pointed out that NFT projects desperately need people who understand brand storytelling and consumer psychology — skills fashion gave me in spades. I reframed my portfolio around that angle, applied to OpenSea, and got the role. The community here genuinely helps.",
    timeToLand: "4 weeks",
    toolsUsed: ["Portfolio guide", "Telegram community", "Job board"],
    postedDays: 5, posted: "5 days ago",
    featured: false, color: "#F0997B", bg: "rgba(216,90,48,0.15)",
  },
  {
    id: 6,
    name: "Tunde K.", initials: "TK",
    avatar: "/providers/p1.svg",
    role: "Smart Contract Auditor", company: "Aave", companyLogo: "/companies/aave.svg",
    salary: "$180,000/yr", location: "Remote · Worldwide",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    category: "Engineering",
    background: "Security researcher at a cybersecurity firm",
    quote: "The salary negotiation guide helped me counter-offer confidently. Went from $130k to $180k offer — that's $50k more annually.",
    story: "I had the technical skills — 5 years in security research. But I always undersold myself in negotiations. The salary negotiation guide taught me to lead with market data, not feelings. Aave offered $130k. I came back with a specific counter — '$180k based on current market data for senior auditors with my profile' — and they met it. I also negotiated a token allocation I hadn't even thought to ask for. That guide is worth thousands.",
    timeToLand: "5 weeks",
    toolsUsed: ["Salary negotiation guide", "Job board", "Interview prep guide"],
    postedDays: 6, posted: "6 days ago",
    featured: false, color: "var(--gold)", bg: "rgba(245,166,35,0.15)",
  },
  {
    id: 7,
    name: "Elena M.", initials: "EM",
    avatar: "/providers/p9.svg",
    role: "Web3 Growth Hacker", company: "Base", companyLogo: "/companies/base.svg",
    salary: "$90,000/yr", location: "Remote · US/EU",
    chain: "Base", chainLogo: "/chains/base.svg",
    category: "Marketing",
    background: "Growth marketer at a SaaS startup",
    quote: "I had a 30-min coffee chat with the Base team because of a Twitter thread I wrote after reading the personal branding guide. The job came to me.",
    story: "I wrote a 12-tweet thread analysing Base's onboarding funnel, highlighting 3 friction points I'd identified as a user, and suggesting fixes. Web3 Jobs HQ shared it. A product lead at Base DM'd me the next day to chat. By the end of the call they asked if I was looking for work. I hadn't even applied anywhere yet. Building in public is the real strategy.",
    timeToLand: "1 week",
    toolsUsed: ["Personal branding guide", "Pitch Academy"],
    postedDays: 8, posted: "8 days ago",
    featured: false, color: "var(--sky)", bg: "rgba(59,158,232,0.15)",
  },
  {
    id: 8,
    name: "Remi O.", initials: "RO",
    avatar: "/providers/p3.svg",
    role: "Community Lead", company: "TON Foundation", companyLogo: "/companies/ton.svg",
    salary: "$75,000/yr", location: "Remote · Worldwide",
    chain: "TON", chainLogo: "/chains/ton.svg",
    category: "Community",
    background: "Telegram group admin with 50k members — no formal job",
    quote: "I was already doing the job for free. HQ showed me how to package that experience and get paid for it.",
    story: "I'd been running a 50,000-member Telegram community about crypto for 2 years — completely unpaid, just passion. I had no idea how to translate that into a job application. The portfolio guide section on non-tech roles showed me exactly how: frame it as Professional community management, show growth metrics, moderation systems, community health scores. I presented it like a case study. TON Foundation didn't hesitate.",
    timeToLand: "2 weeks",
    toolsUsed: ["Portfolio guide", "Cold DM template", "Job board"],
    postedDays: 10, posted: "10 days ago",
    featured: false, color: "#6DC87A", bg: "rgba(100,200,120,0.15)",
  },
  {
    id: 9,
    name: "Kofi L.", initials: "KL",
    avatar: "/providers/p7.svg",
    role: "DAO Governance Advisor", company: "Uniswap Labs", companyLogo: "/companies/uniswap.svg",
    salary: "$70,000/yr", location: "Remote · Worldwide",
    chain: "Ethereum", chainLogo: "/chains/eth.svg",
    category: "Operations",
    background: "Political science graduate, policy researcher",
    quote: "My policy background was the exact thing Uniswap's governance team needed. Niche beats generalist every time.",
    story: "I was a policy researcher who'd been following DeFi governance academically. Everyone told me I needed coding skills. The HQ community showed me that DAO governance desperately needs people who understand political structures, voting theory, and stakeholder dynamics — exactly what political science teaches. I wrote one detailed governance analysis on Uniswap's voting mechanisms, posted it publicly, and tagged their team. Got a reply within hours.",
    timeToLand: "3 weeks",
    toolsUsed: ["Non-tech guide", "Personal branding guide", "Telegram community"],
    postedDays: 14, posted: "14 days ago",
    featured: false, color: "var(--gold)", bg: "rgba(245,166,35,0.15)",
  },
];

export const categories = ["All", "Engineering", "Marketing", "Community", "Operations", "Design"];

export const winsStats = [
  { num: "4,200+", label: "Jobbers placed"      },
  { num: "6 wks",  label: "Avg. time to offer"  },
  { num: "73%",    label: "Got reply using HQ DM template" },
  { num: "38",     label: "Countries represented" },
];
