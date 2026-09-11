const list = await (await fetch("http://127.0.0.1:9222/json/list")).json();
for (const t of list) if (t.type === "page") await fetch(`http://127.0.0.1:9222/json/close/${t.id}`);
const t = await (await fetch("http://127.0.0.1:9222/json/new?" + encodeURIComponent("http://localhost:4317/"), { method: "PUT" })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
let id = 0; const pending = new Map();
const send = (m, p = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
await new Promise((r) => (ws.onopen = r));
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) pending.get(m.id)(m.result); };
const ev = async (x) => (await send("Runtime.evaluate", { expression: x, returnByValue: true })).result.value;
await send("Page.enable"); await send("Page.bringToFront");
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });

const script = `(() => {
  const abs = el => { const r = el.getBoundingClientRect(); return {l:r.left+scrollX, t:r.top+scrollY, r:r.right+scrollX, b:r.bottom+scrollY}; };
  const doodles = [...document.querySelectorAll('.doodle')].filter(d => getComputedStyle(d).display !== 'none');
  // leaf elements that actually paint text
  const text = [...document.querySelectorAll('h1,h2,h3,p,li,label,a,figcaption,.intro__index,.project__stack,.xp__date,.fact__value,.fact__label,.card__title,.card__tool,.hero__status')]
    .filter(e => e.textContent.trim() && !e.querySelector('h1,h2,h3,p,li,label,figcaption') && !e.closest('.ticker') && !e.closest('.doodle'));
  const hits = [];
  for (const d of doodles) {
    const a = abs(d);
    for (const e of text) {
      const b = abs(e);
      const ox = Math.min(a.r,b.r) - Math.max(a.l,b.l);
      const oy = Math.min(a.b,b.b) - Math.max(a.t,b.t);
      if (ox > 2 && oy > 2) hits.push({
        doodle: d.textContent.trim() || (d.querySelector('svg') ? 'svg' : '?'),
        cls: d.className.replace('doodle','').replace('--glyph','').trim(),
        over: e.textContent.trim().slice(0, 38),
        area: Math.round(ox * oy)
      });
    }
  }
  return JSON.stringify(hits);
})()`;

for (const [w, h, label] of [[1440, 900, "desktop"], [390, 844, "phone"]]) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w < 800 });
  await new Promise((r) => setTimeout(r, 1800));
  const hits = JSON.parse(await ev(script));
  console.log(`\n=== ${label}: ${hits.length} collision(s) ===`);
  hits.sort((a, b) => b.area - a.area).forEach(x => console.log(`  ${x.cls || x.doodle} over "${x.over}"  (${x.area}px²)`));
}
ws.close(); process.exit(0);
