export const profile = {
  name: "Chris",
  fullName: "Christian Daniels",
  tagline: "I design top notch web applications",
  intro:
    "I design the interface, build the full stack behind it, and secure what ships.",
  status: "available for work",
  email: "christiandaniels1104@gmail.com",
};

export const about = {
  paragraphs: [
    "I'm a founder and full-stack developer. NeuroLens, KÀWÉ and Daniels Network all started as my own ideas, and I built each one end to end — the interface, the backend, and the infrastructure underneath.",
    "The same work pays the bills at DA'SAYONCE Real Estate, where I run development and IT: React and Node applications, the platforms around them, and keeping the company's data and digital assets safe.",
    "Computer Science background, self-taught in design, and enough networking and security to know where things break.",
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
    stack: "React · Node · AI",
    title: "NeuroLens adaptive reader",
    tag: "AI Product",
    tone: "accent",
    mock: "neurolens",
    image: null,
    href: "https://neurolens21lite.vercel.app/",
  },
  {
    id: "kawe",
    stack: "React · SQL · Realtime",
    title: "KÀWÉ assessment platform",
    tag: "EdTech",
    tone: "blue",
    mock: "kawe",
    image: null,
    href: "https://kawe31.netlify.app",
  },
  {
    id: "daniels-network",
    stack: "React · Streaming · CDN",
    title: "Daniels Network live TV",
    tag: "Streaming",
    tone: "yellow",
    mock: "streaming",
    image: null,
    href: "https://danielsnet.netlify.app/",
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
];

export const experience = [
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
    role: "Video Editor / Designer at",
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
