export const profile = {
  name: "Chris",
  fullName: "Christian Daniels",
  tagline: "I design top notch web applications",
  intro:
    "I design the interface, build the full stack behind it, and secure what ships.",
  status: "available for work",
  email: "christiandaniels1104@gmail.com",
  cv: "/Christian-Daniels-CV.pdf",
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer and IT manager who builds web applications in React, Node.js and SQL, from the first sketch in Figma to the server they run on. I founded NeuroLens, a browser extension and reading platform that adapts text, pacing and focus aids for readers with dyslexia and ADHD.",
    "Day to day I lead development and IT at DA'SAYONCE Real Estate & Properties: building the company's web apps, running its infrastructure and listings platforms, managing digital marketing, and keeping its data and digital assets safe.",
    "Before that I shipped and managed client sites at WillyWillMar, made motion and brand work at Derev Digital, taught Computer Science, and repaired phones. I hold an OND in Computer Science, taught myself design, and know enough networking and security to see where things break.",
  ],
  facts: [
    { value: "1", label: "product founded", tone: "yellow" },
    { value: "2019", label: "building since", tone: "blue" },
    { value: "OND", label: "Computer Science", tone: "accent" },
  ],
};

export const services = [
  {
    id: "design",
    title: "UI/UX & Product Design",
    tool: "Figma",
    toolTone: "blue",
    tone: "yellow",
    icon: "pencil",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    tool: "React/Node",
    toolTone: "plain",
    tone: "blue",
    icon: "code",
  },
  {
    id: "security",
    title: "IT & Security Operations",
    tool: "Kali/Nmap",
    toolTone: "yellow",
    tone: "accent",
    icon: "shield",
  },
];

export const projects = [
  {
    id: "neurolens",
    stack: "React · Node · ML",
    title: "NeuroLens adaptive reader",
    tag: "Assistive Tech",
    tone: "accent",
    mock: "neurolens",
    image: null,
    href: "https://neurolens.space/",
  },
  {
    id: "dasayonce",
    stack: "React · Node · Cloud",
    title: "DA'SAYONCE property platform",
    tag: "Full-Stack",
    tone: "green",
    mock: "property",
    image: null,
    href: "https://www.dasayoncerealestate.com/",
  },
  {
    id: "kawe",
    stack: "React · SQL · Realtime",
    title: "KÀWÉ assessment platform",
    tag: "EdTech",
    tone: "blue",
    mock: "kawe",
    image: null,
    status: "In development",
    href: "https://kawe11.vercel.app/",
  },
  {
    id: "daniels-network",
    stack: "React · Streaming · CDN",
    title: "Daniels Network live TV",
    tag: "Streaming",
    tone: "yellow",
    mock: "streaming",
    image: null,
    href: "https://tv-ctpg.vercel.app/",
  },
];

/* Smaller landing-page builds, listed as plain links under the main grid. */
export const landingPages = [
  { id: "tenista", title: "Tenista", href: "https://tenista6.vercel.app/" },
  { id: "aeline", title: "Aeline", href: "https://aeline-one.vercel.app/" },
  { id: "cityarcade", title: "City Arcade", href: "https://cityarcade.vercel.app/" },
  { id: "gaming", title: "Gaming site", href: "https://gaming-site-two.vercel.app/" },
];

export const experience = [
  {
    id: "neurolens",
    role: "Founder & Lead Developer at",
    company: "NeuroLens",
    detail: "Adaptive reading extension and platform for readers with dyslexia and ADHD",
    date: "2026 — Present",
    tone: "accent",
  },
  {
    id: "fullstack-dev",
    role: "Full-Stack Developer at",
    company: "DA'SAYONCE Real Estate",
    detail: "Complex web apps on React, Node.js and cloud solutions",
    date: "2025 — Present",
    tone: "yellow",
  },
  {
    id: "it-manager",
    role: "IT Manager at",
    company: "DA'SAYONCE Real Estate",
    detail: "Infrastructure, digital platforms, data security and IT support",
    date: "2025 — Present",
    tone: "blue",
  },
  {
    id: "derev",
    role: "Motion & Graphic Designer at",
    company: "Derev Digital Concepts",
    detail: "Motion graphics and branding for marketing and social",
    date: "2025",
    tone: "accent",
  },
  {
    id: "willywillmar",
    role: "Website Developer at",
    company: "WillyWillMar Ltd",
    detail: "Led consultancy web projects from requirements through launch",
    date: "2024",
    tone: "yellow",
  },
  {
    id: "sail",
    role: "Software Development Intern at",
    company: "SAIL Innovation Lab",
    detail: "Structured training in advanced programming and software development",
    date: "2024 — 2025",
    tone: "blue",
  },
  {
    id: "bright-future",
    role: "Teacher at",
    company: "Bright Future Schools",
    detail: "Lesson plans for Computer Science, Mathematics and Chemistry",
    date: "2023 — 2024",
    tone: "accent",
  },
  {
    id: "megarich",
    role: "Intern at",
    company: "Megarich Consults & Networks",
    detail: "Entrepreneurship, corporate ethics, negotiation and human relations",
    date: "2022",
    tone: "yellow",
  },
  {
    id: "upper-hands",
    role: "Mobile Phone Technician at",
    company: "Upper Hands Repair",
    detail: "Diagnosed and repaired hardware and software faults",
    date: "2019 — 2020",
    tone: "blue",
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christian-daniels1104",
  },
  { label: "GitHub", href: "https://github.com/kingkrisman" },
  { label: "X", href: "https://x.com/Kris10Dani" },
];

/* Web3Forms access keys are public by design — the endpoint is called straight
   from the browser, so this ends up in the bundle either way. Set
   VITE_WEB3FORMS_KEY to override it per environment. */
export const formAccessKey =
  import.meta.env.VITE_WEB3FORMS_KEY || "ee26693f-b1f0-46d5-91fa-0e4c0269a22a";

/* Core skills from the CV, for the marquee. `kind` colours the bullet:
   dev = navy, sec = orange, design = blue. */
export const skills = [
  { label: "React", kind: "dev" },
  { label: "TypeScript", kind: "dev" },
  { label: "Node.js", kind: "dev" },
  { label: "Express", kind: "dev" },
  { label: "Vue.js", kind: "dev" },
  { label: "Angular", kind: "dev" },
  { label: "SQL", kind: "dev" },
  { label: "Figma", kind: "design" },
  { label: "UI/UX", kind: "design" },
  { label: "Webflow", kind: "design" },
  { label: "Linux/Unix", kind: "sec" },
  { label: "Kali Linux", kind: "sec" },
  { label: "Nmap", kind: "sec" },
  { label: "Wireshark", kind: "sec" },
  { label: "Burp Suite", kind: "sec" },
  { label: "Metasploit", kind: "sec" },
  { label: "Networking", kind: "sec" },
];
