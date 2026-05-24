export interface Guide {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  emoji: string;
  featured: boolean;
  locked: boolean;
  tags: string[];
  content: {
    intro: string;
    sections: { heading: string; body: string; tip?: string }[];
    template?: string;
    keyTakeaways: string[];
  };
}

export const guides: Guide[] = [
  {
    id: "cold-dm-template",
    category: "Pitching",
    title: "The Cold DM Template That Gets Replies",
    description: "A battle-tested framework for cold messaging Web3 founders and hiring managers on X and Telegram. Real examples included.",
    readTime: "6 min read",
    difficulty: "Beginner",
    emoji: "💬",
    featured: true,
    locked: false,
    tags: ["DM","Pitching","Twitter","Telegram"],
    content: {
      intro: "Most cold DMs fail because they lead with the sender, not the receiver. This guide flips that — and gets reply rates of 20–40% when executed properly.",
      sections: [
        {
          heading: "The 3-part structure",
          body: "Every great cold DM has exactly three parts: a hook that shows you did your homework, a single specific ask, and a clear value proposition. That's it. No CV dump, no life story.",
          tip: "Keep your DM under 5 lines. If it's longer, cut it in half.",
        },
        {
          heading: "Research first — always",
          body: "Before you write a single word, spend 10 minutes on their profile. What did they ship last week? What's their project's biggest current challenge? What's their community excited or frustrated about? Reference something specific — it proves you're not copy-pasting.",
        },
        {
          heading: "The subject line (for email) or first line (for DM)",
          body: "This is the only thing that determines if they read further. Best openers reference a specific thing they did: 'Your thread on Uniswap v4 hooks was the clearest explanation I've read.' Never start with 'Hi, my name is...'",
        },
        {
          heading: "Timing matters",
          body: "Send DMs within 24 hours of a project announcement, funding round, or major X thread. People in momentum mode are more likely to respond. Set Google Alerts for project names you're targeting.",
        },
      ],
      template: `Hey [Name] 👋

Saw your [specific post/announcement/feature] — [one genuine observation that shows you actually understood it].

I've been [1-line relevant background — what you build/do] and I think I could help with [specific problem you noticed they have].

Would you be open to a 15-min call this week to explore?

[Your name]`,
      keyTakeaways: [
        "Reference something specific from their last 7 days of activity",
        "Lead with their problem, not your credentials",
        "Make the ask tiny — a 15-min call, not a job offer",
        "Follow up once after 3 days if no reply — one time only",
        "Send 10 targeted DMs, not 100 generic ones",
      ],
    },
  },
  {
    id: "find-funded-projects",
    category: "Research",
    title: "How to Find Newly Funded Web3 Projects Before Anyone Else",
    description: "The exact workflow to identify projects that just raised and are about to hire — before the job posts go live.",
    readTime: "8 min read",
    difficulty: "Intermediate",
    emoji: "🔍",
    featured: true,
    locked: false,
    tags: ["Research","Funding","Alpha","Job hunting"],
    content: {
      intro: "The best time to apply is before the job even exists. Companies that just raised are scrambling to hire — and if you show up at the right moment with the right pitch, you skip the queue entirely.",
      sections: [
        {
          heading: "Track funding announcements in real time",
          body: "Set up Google Alerts for '[chain name] raises', '[chain name] funding', 'web3 seed round', and 'DeFi series A'. Also follow @TheBlock__, @CoinDesk, and @Decrypt_ on X — they post funding news within hours.",
          tip: "CrunchBase has a free tier that lets you filter by blockchain/crypto funding rounds from the last 30 days.",
        },
        {
          heading: "The Crypto Twitter signals to watch",
          body: "When a project posts 'We're hiring!' or 'We're growing the team' on X — that's too late. You want to catch them at the funding announcement. Founders almost always post on X when they close a round. Follow them before they're famous.",
        },
        {
          heading: "LinkedIn as an intel tool",
          body: "Search '[company name] + employee count' and watch for rapid headcount growth. A project with 5 employees last month and 15 this month is in a hiring sprint. Reach out to existing employees to learn what gaps the team has.",
        },
        {
          heading: "On-chain funding signals",
          body: "Large treasury movements, new multi-sig wallets, and DAO governance proposals to expand contributor budgets are all on-chain signals that hiring is coming. Tools like Nansen, Dune Analytics, and DeBank help track these.",
        },
      ],
      keyTakeaways: [
        "Act within 72 hours of a funding announcement — after that, recruiters swarm",
        "Prioritise seed and Series A rounds — they hire fastest and care least about formal process",
        "Follow the investors — a16z crypto, Paradigm, Multicoin post their portfolio companies",
        "Build a list of 20 target projects and monitor them weekly",
        "The goal is to be remembered before the job post — not to apply first",
      ],
    },
  },
  {
    id: "portfolio-review",
    category: "Portfolio",
    title: "The Web3 Portfolio That Gets You Hired (With No Degree)",
    description: "Exactly what to put in your web3 portfolio — and what to leave out. Applies to engineers, marketers, community managers, and non-tech roles.",
    readTime: "10 min read",
    difficulty: "Beginner",
    emoji: "📁",
    featured: false,
    locked: false,
    tags: ["Portfolio","Non-tech","Engineering","Marketing"],
    content: {
      intro: "In web3, nobody cares where you went to university. They care what you've shipped. This guide shows you how to build a portfolio that speaks directly to what hiring managers in crypto actually look for.",
      sections: [
        {
          heading: "For engineers: GitHub is your resume",
          body: "Your pinned repos need to show production-quality work — not just tutorials. If you have no production code, build one project that solves a real DeFi problem and write a clear README explaining why you built it, what you learned, and what you'd do differently.",
          tip: "Contribute to a major protocol's open-source repo. Even fixing docs or typos shows you can navigate a real codebase.",
        },
        {
          heading: "For non-tech roles: show your work in public",
          body: "Community managers should show Discord server growth, engagement metrics, and moderation systems they've built. Marketers should show campaigns with real numbers — follower growth, email open rates, viral threads. Writers should have a published body of work in web3 publications.",
        },
        {
          heading: "The project case study format",
          body: "For every piece of work in your portfolio, answer: What was the problem? What did you do? What was the result? This format — Problem / Action / Result — is what every web3 hiring manager secretly reads for.",
        },
        {
          heading: "Your web3 identity",
          body: "Have an ENS name. Have a visible wallet history that shows real participation — not just holding. DAOs you've contributed to, protocols you've voted in, projects you've minted — this is your on-chain resume and it matters more than you think.",
        },
      ],
      keyTakeaways: [
        "1 excellent case study beats 10 vague bullet points",
        "Show numbers — follower growth, TVL, transactions, community size",
        "Your on-chain activity is part of your portfolio in web3",
        "A public X presence commenting on the space adds credibility",
        "Update your portfolio every time you complete something significant",
      ],
    },
  },
  {
    id: "non-tech-entry",
    category: "Non-tech",
    title: "Breaking Into Web3 With No Tech Background",
    description: "The complete guide for non-technical people to land their first web3 role — community, ops, marketing, content, and more.",
    readTime: "12 min read",
    difficulty: "Beginner",
    emoji: "🚀",
    featured: true,
    locked: false,
    tags: ["Non-tech","Beginners","Community","Marketing"],
    content: {
      intro: "Web3 needs far more than engineers. Community managers, growth leads, operations managers, content strategists, DAO contributors — these roles are in high demand and most web3 teams are desperately underserved in them.",
      sections: [
        {
          heading: "The 5 highest-demand non-tech roles right now",
          body: "Community Manager (Discord/Telegram), Growth Marketer (user acquisition), Content Strategist (threads, newsletters, docs), DAO Operations (governance, treasury, contributors), and Business Development. All of these are hiring constantly and don't require coding.",
          tip: "Community Manager roles at early-stage DeFi protocols often pay $50k–$90k fully remote with token upside.",
        },
        {
          heading: "Learn enough to be dangerous",
          body: "You don't need to code, but you need to understand: what a wallet is, how transactions work, what DeFi and DAOs are, what L1s vs L2s mean, and how NFTs work. This takes about 2 weeks of focused learning — not 2 years.",
        },
        {
          heading: "Get your reps in public",
          body: "The fastest path to a web3 job is to become known in the community you want to work in. Show up in Discord, answer questions, write a thread about what you learned, help moderate — do the job before you have the job.",
        },
        {
          heading: "Volunteer with a DAO first",
          body: "DAOs like Bankless, Friends With Benefits, and GitcoinDAO have contributor programs that let you do real work and get paid in tokens. This gives you web3 experience on your resume within weeks.",
        },
      ],
      keyTakeaways: [
        "Pick one role — don't try to be everything at once",
        "Spend 2 weeks learning the basics before applying anywhere",
        "Join 3 Discord communities and become a recognisable name",
        "Contribute to a DAO before your first job application",
        "Your traditional skills — writing, ops, marketing — are scarce in web3. Use them.",
      ],
    },
  },
  {
    id: "salary-negotiation",
    category: "Negotiation",
    title: "How to Negotiate Your Web3 Salary (Including Tokens)",
    description: "Most Jobbers leave money on the table. This guide covers base salary negotiation, token vesting, and how to evaluate an offer's real value.",
    readTime: "9 min read",
    difficulty: "Intermediate",
    emoji: "💰",
    featured: false,
    locked: false,
    tags: ["Salary","Negotiation","Tokens","Offers"],
    content: {
      intro: "Web3 compensation is more complex than traditional jobs — base salary, tokens, vesting schedules, cliff periods, and future token value all factor in. This guide helps you evaluate and negotiate the full package.",
      sections: [
        {
          heading: "Understanding the full comp package",
          body: "A web3 offer has four components: base salary (cash), token allocation (quantity and current value), vesting schedule (how long to receive them), and cliff (how long before any vest). A low base with a large token allocation can be worth millions — or nothing.",
          tip: "Always ask for the total token quantity, not just current value. Tokens are illiquid and speculative — price them at zero for safety.",
        },
        {
          heading: "The counter-offer framework",
          body: "Never accept the first offer. Always say: 'Thank you, I'm very excited. I need a couple of days to review.' Then come back with a specific counter — not a range. 'Based on my research, I was expecting $X for base and Y tokens' is stronger than 'I was hoping for more.'",
        },
        {
          heading: "What to negotiate beyond salary",
          body: "Remote flexibility, equipment budget, conference budget, accelerated vesting for senior hires, and signing bonuses are all negotiable — and most candidates never ask.",
        },
        {
          heading: "Token vesting red flags",
          body: "Watch out for: no cliff (tokens are cheap to promise if they vest immediately), single-trigger acceleration only (you want double-trigger for acquisitions), and tokens with no liquidity plan or lock-up that outlasts the project's runway.",
        },
      ],
      keyTakeaways: [
        "Always negotiate — it's expected, and declining hurts no one",
        "Counter with a specific number, not a range",
        "Value tokens conservatively — treat them as bonus, not salary",
        "Ask for the full vesting schedule in writing before signing",
        "Benchmark against web3 salary data — use our Salary Index",
      ],
    },
  },
  {
    id: "interview-prep",
    category: "Interviews",
    title: "Cracking the Web3 Interview: What They Actually Ask",
    description: "Real interview questions from Chainlink, Uniswap, Aave, and other top protocols — and how to answer them.",
    readTime: "11 min read",
    difficulty: "Intermediate",
    emoji: "🎯",
    featured: false,
    locked: true,
    tags: ["Interviews","Prep","Engineering","Non-tech"],
    content: {
      intro: "Web3 interviews test for curiosity, self-direction, and deep protocol knowledge — not just technical ability. This guide covers the questions you'll actually be asked.",
      sections: [],
      keyTakeaways: [],
    },
  },
  {
    id: "dao-contribution",
    category: "DAOs",
    title: "How to Get Paid Contributing to a DAO",
    description: "The step-by-step playbook for finding DAO contributor programs, completing your first bounty, and building a reputation that leads to a full-time role.",
    readTime: "7 min read",
    difficulty: "Beginner",
    emoji: "🏛️",
    featured: false,
    locked: true,
    tags: ["DAO","Bounties","Contribution","Freelance"],
    content: {
      intro: "DAOs are the fastest onramp into paid web3 work — no application, no interview, just ship.",
      sections: [],
      keyTakeaways: [],
    },
  },
  {
    id: "twitter-presence",
    category: "Branding",
    title: "Building a Web3 Personal Brand on X (That Actually Gets You Hired)",
    description: "How to use X to become known in your niche, attract inbound opportunities, and turn followers into job offers.",
    readTime: "8 min read",
    difficulty: "Advanced",
    emoji: "🐦",
    featured: false,
    locked: true,
    tags: ["Personal brand","Twitter","X","Visibility"],
    content: {
      intro: "The best web3 jobs are never posted — they come through your network. This guide shows you how to build one.",
      sections: [],
      keyTakeaways: [],
    },
  },
];

export const categories = ["All", "Pitching", "Research", "Portfolio", "Non-tech", "Negotiation", "Interviews", "DAOs", "Branding"];

export const stats = [
  { num: "4,200+", label: "Jobbers helped" },
  { num: "73%",    label: "Reply rate improvement" },
  { num: "6 weeks",label: "Avg. time to first offer" },
  { num: "Free",   label: "Always" },
];
