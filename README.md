# Chris — portfolio

A React build of the hand-drawn portfolio design: dotted paper background, a notebook
margin rule down the page, tilted sticky-note cards, and highlighter-marker section
labels. Content is drawn from Christian Daniels' CV.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

> Node 20.19+ / 22.12+ is recommended. Vite is pinned to 7.x so it runs on Node 22.11;
> `npm run lint` (oxlint) needs the newer Node and will crash until you upgrade.

## Where to edit things

| What | Where |
| --- | --- |
| All copy — projects, jobs, services, socials, email, name | `src/data/content.js` |
| Colours, spacing, fonts, easing curves, border wobble | `src/index.css` (`:root`) |
| The reveal system and every shared animation | `src/index.css` (Motion section) |
| A section's layout | `src/components/<Section>.css` |
| Arrows, logo, sticker icons, project thumbnails | `src/components/graphics/` |
| The margin doodles and where they sit | `src/components/graphics/Doodles.jsx` + each section's `DOODLES` array |
| The cursor field and interaction hooks | `src/lib/pointer.js`, `src/hooks/` |
| The portrait illustration | `src/assets/chris.png` |

## The mark

`CMark` in `src/components/graphics/Logo.jsx` — a C drawn as one open arc with a
block caret sitting in its mouth. It reads as the initial and as a terminal cursor,
the same caret that blinks after the headline. Two shapes, no fill, so it holds from
220px down to a 16px favicon. `public/favicon.svg` is the same geometry on a dark tile
with the caret in orange.

## Links

Project URLs and social profiles all live in `src/data/content.js`. Project cards and
footer links open in a new tab.

## Sections

`Hero → About (01) → What i do (02) → skills ticker → Projects (03) →
Experience (04) → Contact (05)`

The monospace index above each marker label is the `index` prop on `SectionIntro`;
renumber there if you reorder sections.

## Colour

The signature accent is a warm orange, chosen to sit opposite the navy in the portrait:

```css
--accent:      #ffb07a;  /* highlighter swipes, the third sticky note */
--accent-deep: #ff9147;  /* project tag pills */
--accent-line: #dd6a1e;  /* "Hire Me", borders, focus states */
--navy:        #1e3a6b;  /* picked out of the illustration, used in the artwork */
```

Change those four values and the whole page follows — nothing hardcodes the colour.

## Theme

The layout is UI/UX by nature — sticky notes, marker labels, artboard framing. Two
other layers sit on top so the page covers the whole CV, not just the design half.

**Software**
- the terminal caret blinking after the headline
- `src/components/Ticker.jsx` — a full-width marquee of the CV's core skills, with the
  bullet colour keyed to `kind` (dev / sec / design) in `content.js`
- a `// 01 capabilities` style monospace index above every section label
- a console status line under the hero CTA (`● available for work // react · node · security`)
- a monospace stack line on each project card, the `</>` card icon, monospace dates

**IT & security**
- the navy shield card icon, plus faint CRT scanlines over the security card
- a padlock note under the contact form (`goes straight to my inbox — nothing is stored`)
- doodles: padlock, key, network nodes, wifi arcs, fingerprint, bug, `:443`, `ssh`, `0xA7F`

Doodles sit at ~20–24% ink so they read as notes scribbled beside the work rather than
as content.

### Keeping doodles off the text

With 27 of them across six sections and two breakpoints, eyeballing placement does not
scale — a doodle landed square on "04 // track record" and turned it into "track
shecord". `scratchpad/collide.mjs` walks every visible `.doodle` against every
text-bearing element and reports overlapping rectangles by area. Re-run it after moving
anything; it should report zero at both breakpoints.

Note that a label's box is usually wider than its text (`.intro__note` fills its whole
column), so the reliable free zones are the left margin strip outside the rule, and the
band between the label column and the content.

### Doodles on mobile

A phone has no margins to scribble in, so each doodle carries a **second position**.
`x`/`y` place it beside the content on desktop; `mx`/`my` drop it into the gap above
its section on mobile. Pass `desktopOnly` for the few there's genuinely no room for.
19 of 23 show on a phone. Positions live in each section's `DOODLES` array.

## The cursor field

`src/lib/pointer.js` runs **one** `pointermove` listener for the entire page, batches
into a single `requestAnimationFrame`, and publishes the cursor two ways:

- as `--px` / `--py` on `:root` (−1..1 from the viewport centre), so plain CSS can
  react with `calc()` and no element needs its own listener;
- to subscribers, for anything that needs its own geometry.

It no-ops entirely on touch (`pointer: coarse`) and when motion is reduced.

Four hooks build on it:

| Hook | What reacts |
| --- | --- |
| `useAim(base, swing)` | the hero and section arrows lean toward the cursor |
| `useTilt(max)` | service and project cards tilt in 3D under the pointer |
| `useMagnetic()` | the buttons and footer links drift toward your cursor |
| `--px` / `--py` in CSS | portrait, doodles, the "Chris" note, experience chips, logo mark |

`useAim` takes the direction the artwork *already* points (`base`) and maps the offset
to the cursor across `swing` rather than clamping to it. Clamping pinned the arrows to
their limit almost everywhere and read as a snap; scaling keeps them tracking smoothly.

Every reacting element composes its cursor transform through CSS custom properties
(`--tilt-x`, `--mag-x`, `--lift`) instead of writing `transform` directly, so the
hover, entry and cursor transforms never overwrite each other.

## Headline

"I **design** top notch web applications", with the verb cycling **design ⇄ build**
every 2.6s. It holds on the first word under reduced motion.

`WordSwap` keeps every word mounted, stacked in one grid cell, so the wrapper is always
as wide as the longest word and the rest of the line never moves. The highlighter sits
on each word rather than the wrapper, so the marker hugs whichever word is showing —
at the cost of a slightly wider gap after the shorter word.

**It animates with `@keyframes`, not `transition`, and that matters.** Each word carries
`.hl`, and `[data-reveal] .hl` in `index.css` declares its own `transition` for the
marker wipe. That selector (0,2,0) outranks `.swap__word` (0,1,0), so any `transition`
set here is silently replaced and the words hard-cut with no tween. Keyframes sidestep
the collision entirely, and as a bonus an animation always replays from its `from`
state, so a word entering always rises from below — with transitions it re-entered from
wherever it happened to leave, and the direction flipped every other cycle.

Two earlier approaches that did not work, for the record: measuring each word from a
hidden copy and transitioning the wrapper width (the incoming word hit full size before
the box finished widening and overran "top" — and the measurement was wrong anyway,
since block children inside an absolutely-positioned wrapper all take the wrapper's
shrink-to-fit width rather than their own).

## Motion

The animation is meant to read as the artwork being *drawn*, not as a UI sliding around.
Five primitives live in the Motion section of `src/index.css`, all driven by one
`IntersectionObserver` in `src/hooks/useReveal.js` that adds `is-in` to any
`[data-reveal]` element the first time it scrolls into view:

| Attribute | Effect | Used by |
| --- | --- | --- |
| `data-reveal="up"` | rises and fades into place | section intros, project cards, form fields |
| `data-reveal="words"` | headline arrives a word at a time | hero headline |
| `data-reveal="card"` | drops in and settles, like a note being placed | service cards |
| `data-reveal="pop"` | springs up from small, like a pressed sticker | experience numbers, footer links |
| `data-reveal="frame"` | triggers children only, no movement of its own | experience rule frame |

The About facts, experience chips and footer links use `pop`; the About paragraphs use
`up`.

Stagger any of them by setting `--d` inline (`style={{ "--d": "120ms" }}`).

Two helper classes compose with those:

- `.stroke-draw` — traces an SVG path on. Every animated path carries `pathLength="1"`,
  so one dash length fits all of them and nothing needs measuring. Add
  `.stroke-draw--head` to an arrowhead so it lands after its shaft.
- `.rule-draw-x` / `.rule-draw-y` — draws a rule out from its origin, used for the
  frame around Work Experience.

Marker swipes are automatic: any `.hl` inside a revealed element wipes left-to-right
when its parent lands. Continuous motion is limited to one slow drift on the portrait.

**Reduced motion** covers the cursor work too: the pointer field never starts, and
every tilt, lean, parallax, magnet and the blinking caret are pinned to neutral.
Beyond that — `prefers-reduced-motion: reduce` zeroes every
duration *and delay* and forces every reveal to its finished state, so nothing is left
invisible. Verified: 0 of 34 reveal elements stay hidden under that media query.

### Service card tilt

The sticky notes use two nested elements on purpose. The outer `.card-slot` owns the
drop-in animation; the inner `.card` owns its resting tilt and hover lift. Keeping them
apart means the entry transform and the hover transform never overwrite each other.

## Project thumbnails

The four thumbnails are SVG sketches of the real products (NeuroLens, KÀWÉ, Daniels
Network, DA'SAYONCE) in `src/components/graphics/mocks.jsx`. To use real screenshots,
drop them in `src/assets/` and point a project at one:

```js
import neurolensShot from "../assets/neurolens.png";

// in src/data/content.js
{ id: "neurolens", title: "NeuroLens adaptive reader", image: neurolensShot, ... }
```

Any project with an `image` renders that instead of its sketch. Images are cropped to a
320:284 box, so square-ish crops work best.

## Contact form

Posts to **Web3Forms** (`https://api.web3forms.com/submit`) — no backend to run. The
access key lives in `formAccessKey` in `src/data/content.js` and can be overridden with
a `VITE_WEB3FORMS_KEY` env var. Web3Forms keys are public by design: the endpoint is
called straight from the browser, so the key is in the bundle either way.

Four states — `idle` / `sending` / `sent` / `error`. On success the fields clear; on
failure the visitor's message is **kept** so nothing is lost, and a `mailto:` fallback
sits under the form. A hidden `botcheck` honeypot is included, which Web3Forms uses for
spam filtering.

The whole request sits in a `try`, so a non-JSON response (a Cloudflare HTML error page,
say) lands on the error state rather than throwing — verified.

> Live round-trip could not be confirmed from the dev sandbox: Web3Forms sits behind
> Cloudflare, which returns a 403 with no CORS headers to requests from this
> environment. The request payload and every UI state were verified against a stub.
> **Submit the form once from your own browser to confirm the key end to end.**

## Layout notes

- One breakpoint at **900px**: above it sections are two columns (label beside content);
  below, everything stacks and the drawn frame around Work Experience is hidden.
- The margin rule is `.app::before`, positioned off `--pad-l` so it tracks the content.
- Hand-drawn borders are asymmetric `border-radius` values rather than images, so they
  scale cleanly — see `--hand-radius` in `src/index.css`.
