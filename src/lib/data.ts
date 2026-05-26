export const CAPABILITIES = [
  { icon: "receipt" as const, title: "Bookkeeping", description: "Categorizes expenses, reconciles bank feeds, closes your books monthly — ready for your accountant.", tag: "auto" as const },
  { icon: "invoice" as const, title: "Invoicing", description: "Drafts invoices from contracts, sends on schedule, chases politely, applies dunning at 30/60/90.", tag: "auto" as const },
  { icon: "scale" as const, title: "Tax & filings", description: "Prepares GST, TDS, advance tax, payroll filings. Flags deadlines two weeks out. You sign, Korana files.", tag: "review" as const },
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
    body: "Strong signal from round 1. Korana found 3 slots that work for you and the panel — Tue 2pm, Wed 11am, or Thu 4pm.",
    meta: "Source: Notion eval · 2 panelists confirmed",
    action: "Book Tue 2pm",
    time: "4h",
    urgent: false,
  },
];

export const TESTIMONIALS = [
  {
    quote: "I used to spend Sunday nights reconciling the books and dreading Monday inbox. Korana ate both. I work on the product now.",
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

export const FAQS = [
  {
    q: "Is Korana an agent, an app, or a human team?",
    a: "Korana is a software product — the operating brain that lets any company run the AI-native way. The 'chief of staff' framing describes the role it plays in your business, not a person. Under the hood it's a coordinated set of AI agents trained on real ops, finance, sales, and customer-success work, with tight integrations into your tools and policies. No humans, no offshoring.",
  },
  {
    q: "How does Korana handle decisions I haven't told it about?",
    a: "When Korana hits something outside its policy or your past pattern, it stops and asks. Each item that lands in your approval queue includes the context, what Korana would do, why, and one tap to approve. You can also pre-approve patterns ('always send invoices over ₹50k for my sign-off').",
  },
  {
    q: "What about my data — accounting, customer info, contracts?",
    a: "Your data sits in Korana's SOC 2-controlled environment, encrypted at rest and in transit, scoped to your account, and never used to train models. You can export everything — books, threads, contracts, audit log — at any time, in standard formats. Enterprise customers get a DPA, dedicated security review, and additional regional residency options.",
  },
  {
    q: "Which integrations are supported?",
    a: "30+ on Team and Enterprise: Gmail, Google Workspace, Outlook, WhatsApp, Slack, Notion, Linear, Stripe, Razorpay, QuickBooks, Xero, Tally, Zoho Books, HubSpot, Salesforce, Pipedrive, Calendly, Cal.com, Twitter/X, LinkedIn, Buffer, and more. We add about two new ones a month, and Enterprise can request custom integrations.",
  },
  {
    q: "What if Korana gets something wrong?",
    a: "Every action is reversible and audit-logged. You'll see exactly what Korana did, when, on whose behalf, and with what reasoning. You can roll back sends, void invoices, and add a 'never do this again' rule that propagates immediately. We're aiming for 99.5% accuracy on routine work — and 100% transparency when something needs another look.",
  },
  {
    q: "How long to set up?",
    a: "30 minutes for the basics — connect your inbox, calendar, books, and CRM. Korana spends the first 48 hours observing and asking clarifying questions before it starts acting. Most founders are at full delegation by week two.",
  },
];
