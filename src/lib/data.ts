export const CAPABILITIES = [
  { icon: "receipt" as const, title: "Bookkeeping", description: "Categorizes expenses, reconciles bank feeds, closes your books monthly — ready for your accountant.", tag: "auto" as const },
  { icon: "invoice" as const, title: "Invoicing", description: "Drafts invoices from contracts, sends on schedule, chases politely, applies dunning at 30/60/90.", tag: "auto" as const },
  { icon: "scale" as const, title: "Tax & filings", description: "Prepares GST, TDS, advance tax, payroll filings. Flags deadlines two weeks out. You sign, Korana.ai files.", tag: "review" as const },
  { icon: "inbox" as const, title: "Customer messages", description: "Drafts replies in your voice, sends the obvious ones, escalates the ones that need you with full context.", tag: "auto" as const },
  { icon: "pipeline" as const, title: "Sales follow-up", description: "Runs sequences, books demos, replies to objections from your inbox. Your CRM stays clean without you opening it.", tag: "auto" as const },
  { icon: "calendar" as const, title: "Scheduling", description: "Books, reschedules, prep notes, intros — over email, WhatsApp, or your calendar link. No back-and-forth.", tag: "auto" as const },
  { icon: "chart" as const, title: "Weekly reporting", description: "P&L, cash position, customer health, pipeline. Friday 4:30pm brief, in your inbox or as a voice note.", tag: "auto" as const },
  { icon: "megaphone" as const, title: "Social media", description: "Drafts posts from what's happening in your business. Schedules a week ahead. You approve the ones that go out.", tag: "review" as const },
];

export type CapabilityIcon = typeof CAPABILITIES[number]["icon"];

export const TIMELINE_DAYS = [
  {
    day: "Mon", date: "May 17", rows: [
      { time: "8:02", text: "Cleared 14 customer threads — 11 sent, 3 escalated", status: "done" as const },
      { time: "10:30", text: "Posted Monday LinkedIn — 84 reactions by lunch", status: "done" as const },
      { time: "14:15", text: "Booked 3 intro calls, declined 2 spam pitches", status: "done" as const },
    ],
  },
  {
    day: "Tue", date: "May 18", rows: [
      { time: "9:00", text: "Reconciled May expenses — 38 receipts, ₹47K", status: "done" as const },
      { time: "11:45", text: "Issued invoices #138, #139, #140", status: "done" as const },
      { time: "16:20", text: "Drafted MSA reply for Acme — needed your call", status: "review" as const },
    ],
  },
  {
    day: "Wed", date: "May 19", rows: [
      { time: "8:30", text: "Pulled May P&L draft — flagged hosting overspend", status: "done" as const },
      { time: "12:10", text: "Chased 4 overdue invoices — 2 paid same day", status: "done" as const },
      { time: "15:00", text: "Scheduled the team's Thursday all-hands", status: "done" as const },
    ],
  },
  {
    day: "Thu", date: "May 20", rows: [
      { time: "9:15", text: "Replied to 19 support tickets, 4 escalated", status: "done" as const },
      { time: "13:00", text: "Prepared Q3 GST — held for your signature", status: "review" as const },
      { time: "17:00", text: "Drafted Friday post + Tuesday newsletter", status: "done" as const },
    ],
  },
  {
    day: "Fri", date: "May 23", rows: [
      { time: "8:00", text: "Morning brief delivered — 3 approvals queued", status: "done" as const },
      { time: "10:00", text: "Sales follow-up sequence — 12 touches", status: "done" as const },
      { time: "16:30", text: "Weekly brief auto-prepared for you", status: "done" as const },
    ],
  },
];

export const APPROVAL_ITEMS = [
  {
    id: 1,
    kind: "Customer · Acme Corp",
    title: "Reply re: net 60 ask",
    iconType: "inbox" as const,
    body: "Happy to extend net 60 on contracts above ₹5L/year. I've attached our updated MSA with the change marked.",
    meta: "Drafted in your voice · 12 prior threads referenced",
    action: "Send reply",
    time: "2h",
    urgent: false,
  },
  {
    id: 2,
    kind: "Compliance · GST",
    title: "Sign Q3 filing",
    iconType: "scale" as const,
    body: "Output tax ₹84,210 · Input credit ₹22,930 · Net payable ₹61,280 — pre-checked against last quarter's pattern.",
    meta: "Due Monday · auto-prepared from May books",
    action: "Sign & file",
    time: "due Mon",
    urgent: true,
  },
  {
    id: 3,
    kind: "Hiring · Engineering",
    title: "Schedule Lena's second round",
    iconType: "calendar" as const,
    body: "Strong signal from round 1. Korana.ai found 3 slots that work for you and the panel — Tue 2pm, Wed 11am, or Thu 4pm.",
    meta: "Source: Notion eval · 2 panelists confirmed",
    action: "Book Tue 2pm",
    time: "4h",
    urgent: false,
  },
];

export const TESTIMONIALS = [
  {
    quote: "I used to spend Sunday nights reconciling the books and dreading Monday inbox. Korana.ai ate both. I work on the product now.",
    name: "Aanya Reddy",
    role: "Founder · Lyra Studio",
    company: "design agency · 11 people",
    initial: "A",
    color: "#c14a26",
  },
  {
    quote: "It feels like having an EA, a bookkeeper and a junior CFO who never sleep and actually agree with each other.",
    name: "Marcus Halberg",
    role: "Founder · Holden & Co",
    company: "B2B SaaS · 4 people",
    initial: "M",
    color: "#2d6b4e",
  },
  {
    quote: "The WhatsApp thing is wild. I approve invoices waiting for biryani. My CA gets clean books on the 3rd of every month.",
    name: "Vivek Subramanian",
    role: "Solo founder",
    company: "consulting · 1 person",
    initial: "V",
    color: "#2c5d8a",
  },
  {
    quote: "We run it on our own cluster — finance data never leaves. Same product. That sealed it for our compliance team.",
    name: "Liu Wei",
    role: "Co-founder · Northwave",
    company: "healthtech · 22 people",
    initial: "L",
    color: "#9c6611",
  },
];

export const LOGOS = [
  "LYRA", "Holden & Co", "Northwave", "Hexa", "Foundry", "Anchor", "Stratos", "Marker.",
];

export const PRICING_TIERS = [
  {
    name: "Solo",
    tagline: "For founders running solo",
    monthly: 49,
    annual: 39,
    cta: "Start 14-day trial",
    ctaStyle: "ghost" as const,
    featured: false,
    features: [
      "1 founder seat",
      "All 8 capabilities",
      "Mobile, Web, WhatsApp",
      "Connect 5 apps",
      "Email & WhatsApp brief",
      "1k tasks / month",
    ],
  },
  {
    name: "Team",
    tagline: "For small businesses up to 25 people",
    monthly: 199,
    annual: 159,
    cta: "Start 14-day trial",
    ctaStyle: "primary" as const,
    featured: true,
    badge: "Most loved",
    features: [
      "Up to 10 seats",
      "Everything in Solo",
      "Advanced integrations · 30+",
      "Custom approval workflows",
      "Voice clone — replies in your voice",
      "Audit log · SOC 2 controls",
      "Unlimited tasks",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For scaling teams & regulated industries",
    monthly: null,
    annual: null,
    customLabel: "Custom",
    cta: "Talk to sales",
    ctaStyle: "ghost" as const,
    featured: false,
    features: [
      "Unlimited seats",
      "Everything in Team",
      "SSO / SAML · SCIM provisioning",
      "Custom approval workflows + policies",
      "Compliance: SOC 2, GDPR, DPDP, HIPAA-ready",
      "DPA + dedicated security review",
      "Dedicated CSM + onboarding engineer",
      "Custom integrations + priority SLAs",
    ],
  },
];

// --- AI Mail data ---

export const MAIL_PRICING_TIERS = [
  {
    name: "Personal",
    tagline: "For individuals and freelancers",
    monthly: 1,
    annual: 10,
    cta: "Get a mailbox",
    ctaStyle: "ghost" as const,
    featured: false,
    features: [
      "1 mailbox",
      "AI triage & Smart Views",
      "AI draft replies",
      "Custom domain or @korana.email",
      "Gmail/Outlook forwarding",
      "IMAP/SMTP access",
      "Inbox Ledger (read-only)",
      "10 GB storage",
    ],
  },
  {
    name: "Personal+",
    tagline: "For power users who live in email",
    monthly: 5,
    annual: 50,
    cta: "Get started \u2192",
    ctaStyle: "primary" as const,
    featured: true,
    badge: "Best value",
    features: [
      "Everything in Personal",
      "AI sends routine replies for you",
      "Scam Protection",
      "Full Inbox Ledger + Spend tracking",
      "Ask Korana.ai (conversational search)",
      "Voice learning (adapts to your tone)",
      "Standing Rules engine",
      "25 GB storage",
    ],
  },
  {
    name: "Business",
    tagline: "For teams, shared inboxes & compliance",
    monthly: null,
    annual: null,
    customLabel: "Custom",
    cta: "Talk to us",
    ctaStyle: "ghost" as const,
    featured: false,
    features: [
      "Everything in Personal+",
      "Unlimited mailboxes",
      "Shared inboxes + approval routing",
      "Chief of Staff integration",
      "SSO / SAML · audit log",
      "Data residency options · DPA",
      "Dedicated support engineer",
      "Custom integrations + SLAs",
    ],
  },
];

export const MAIL_TESTIMONIALS = [
  {
    quote: "I used to spend an hour every morning sorting email. Now I glance at the approval queue for 3 minutes and I\u2019m done. Korana.ai drafted better replies than I would have.",
    name: "Sara Kim",
    role: "Founder \u00B7 Anchor Studio",
    company: "branding agency \u00B7 6 people \u00B7 Lagos",
    initial: "S",
    color: "#c14a26",
  },
  {
    quote: "We moved 14 team mailboxes to Korana.ai. Support response time dropped from 4 hours to 8 minutes. At $1 per mailbox. It\u2019s absurd.",
    name: "Diego Alvarez",
    role: "Head of Ops \u00B7 Stratos",
    company: "logistics SaaS \u00B7 30 people \u00B7 Mexico City",
    initial: "D",
    color: "#2d6b4e",
  },
  {
    quote: "Inbox Ledger found $480/month in subscriptions I forgot about. The AI paid for itself before lunch on day one.",
    name: "Priya Nair",
    role: "Solo founder",
    company: "consulting \u00B7 1 person \u00B7 Bangalore",
    initial: "P",
    color: "#2c5d8a",
  },
  {
    quote: "Our support inbox was a graveyard of unread threads. Korana.ai cleared the backlog in a day, and now every customer hears back in under 10 minutes. Our CSAT went from 72 to 94.",
    name: "James Okafor",
    role: "CTO \u00B7 Hexa Systems",
    company: "devtools \u00B7 18 people \u00B7 Nairobi",
    initial: "J",
    color: "#9c6611",
  },
];

export const MAIL_FAQS = [
  {
    q: "Does Korana.ai Mail replace Gmail or Outlook?",
    a: "It can, but it doesn\u2019t have to. You can use Korana.ai as your primary host with IMAP/SMTP, or keep Gmail/Outlook and forward a copy. Either way, the AI sorts, drafts, and handles replies. Most users keep their existing address and let Korana.ai do the work behind the scenes.",
  },
  {
    q: "What\u2019s the difference between Personal and Personal+?",
    a: "Personal gives you AI triage, Smart Views, and draft suggestions for $1/month. Personal+ adds autonomous sending of routine replies, Scam Protection, full Inbox Ledger with spend tracking, Ask Korana.ai conversational search, voice learning, and Standing Rules. If email is the centre of your workday, Personal+ pays for itself fast.",
  },
  {
    q: "What is the Inbox Ledger?",
    a: "The Inbox Ledger automatically extracts financial and logistical data from every email \u2014 subscriptions, invoices, receipts, travel confirmations \u2014 and turns it into a live dashboard. Personal gets a read-only view; Personal+ unlocks full spend tracking and exportable reports.",
  },
  {
    q: "Is this real IMAP/SMTP email hosting?",
    a: "Yes. Korana.ai Mail runs on a full-featured mail server with standard IMAP and SMTP. Connect any client \u2014 Apple Mail, Thunderbird, Outlook \u2014 just like any other provider. The AI layer runs on top, not instead of the protocol.",
  },
  {
    q: "How does it learn my voice?",
    a: "When you connect, Korana.ai reads your last 90 days of sent email to learn how you write \u2014 greetings, sign-offs, formality, common phrases. After that, every edit you make to a draft teaches it more. Most users stop editing after the first week.",
  },
  {
    q: "Is my email private?",
    a: "Your email data is encrypted at rest and in transit, stored on dedicated infrastructure, and never used to train AI models. No ads, no third-party scanning. Business customers get data residency options and a DPA. We treat email like the most sensitive data you have \u2014 because it is.",
  },
  {
    q: "How does it integrate with Korana.ai Chief of Staff?",
    a: "Invoices, meeting requests, tasks, and approvals in your inbox are detected and routed into CoS workflows automatically. An invoice attachment becomes a payable. A meeting request becomes a calendar event. No forwarding rules or manual setup \u2014 it just works.",
  },
  {
    q: "Can I export everything if I leave?",
    a: "Yes. One-tap export gives you a standard .mbox archive of every message, folder, label, and attachment. Your Inbox Ledger data exports as CSV. No lock-in, no hostage data.",
  },
];

export const FAQS = [
  {
    q: "Is Korana.ai an agent, an app, or a human team?",
    a: "Korana.ai is a software product — the operating brain that lets any company run the AI-native way. The 'chief of staff' framing describes the role it plays in your business, not a person. Under the hood it's a coordinated set of AI agents trained on real ops, finance, sales, and customer-success work, with tight integrations into your tools and policies. No humans, no offshoring.",
  },
  {
    q: "How does Korana.ai handle decisions I haven't told it about?",
    a: "When Korana.ai hits something outside its policy or your past pattern, it stops and asks. Each item that lands in your approval queue includes the context, what Korana.ai would do, why, and one tap to approve. You can also pre-approve patterns ('always send invoices over ₹50k for my sign-off').",
  },
  {
    q: "What about my data — accounting, customer info, contracts?",
    a: "Your data sits in Korana.ai's SOC 2-controlled environment, encrypted at rest and in transit, scoped to your account, and never used to train models. You can export everything — books, threads, contracts, audit log — at any time, in standard formats. Enterprise customers get a DPA, dedicated security review, and additional regional residency options.",
  },
  {
    q: "Which integrations are supported?",
    a: "30+ on Team and Enterprise: Gmail, Google Workspace, Outlook, WhatsApp, Slack, Notion, Linear, Stripe, Razorpay, QuickBooks, Xero, Tally, Zoho Books, HubSpot, Salesforce, Pipedrive, Calendly, Cal.com, Twitter/X, LinkedIn, Buffer, and more. We add about two new ones a month, and Enterprise can request custom integrations.",
  },
  {
    q: "What if Korana.ai gets something wrong?",
    a: "Every action is reversible and audit-logged. You'll see exactly what Korana.ai did, when, on whose behalf, and with what reasoning. You can roll back sends, void invoices, and add a 'never do this again' rule that propagates immediately. We're aiming for 99.5% accuracy on routine work — and 100% transparency when something needs another look.",
  },
  {
    q: "How long to set up?",
    a: "30 minutes for the basics — connect your inbox, calendar, books, and CRM. Korana.ai spends the first 48 hours observing and asking clarifying questions before it starts acting. Most founders are at full delegation by week two.",
  },
];
