# Animation coverage audit — Prospark-template

Every element and state on both pages, whether it animates, and why. Rule applied
throughout: motion must have a job (attention, feedback, continuity); otherwise it is
static on purpose. All motion is transform/opacity, token-driven
(`--ease-out`, `--dur-fast: 0.12s`, `--dur: 0.3s`, `--dur-reveal: 0.9s`), and fully
disabled under `prefers-reduced-motion: reduce`.

Legend: ✅ purposeful smooth animation · ⚪ static by design (justified) · 🔧 fixed in this pass

## Global

| Element / state | Animation | Why |
|---|---|---|
| Section entrance (all sections) | ✅ `fade-up` reveal, 0.4s ease-out, 120px viewport offset | Progressive disclosure; guides the eye down the page |
| Headline entrances | ✅ masked `rise`, 0.9s expo-out | The one orchestrated signature move; everything else yields to it |
| Stagger groups (service list, feature cards) | ✅ 70ms child stagger | Sequencing siblings without a separate delay per item |
| Theme change | ✅ 0.25s cross-fade of background/color | Soft switch instead of a hard jump |
| Reduced motion | ✅ all reveals, counters, shake, float disabled; page renders complete and static | Accessibility, WCAG 2.3.3 |

## Nav (both pages)

| State | Animation | Why |
|---|---|---|
| Link hover | ✅ color → ink (0.3s) + chevron 180° rotate | Signals interactivity, previews state |
| Link focus (keyboard) | ✅ `:focus-visible` 2px outline, offset 3px | Keyboard parity with hover |
| Active page | ⚪ weight + color change, no transition | A state, not an event — animation would imply a transition that didn't happen |
| CTA hover | ✅ invert to transparent + arrow slides 5px | Invitation to click; arrow implies forward motion |
| CTA / subscribe / footer button press | ✅ scale 0.97, 120ms | Immediate tactile feedback |
| Nav on scroll | ✅ shadow fades in (0.25s) | Communicates elevation change over content |
| Mobile menu open | 🔧 slide-down + fade, 0.28s expo-out (`transform-origin: top`) | Was an instant appearance — jarring against the animated page |
| Mobile menu close | ⚪ instant | Dismissal should be fast; an exit delay would hold the user |
| Burger hover | 🔧 soft background tint + focus ring parity | Was hover-less; all interactive elements need feedback |
| Theme toggle hover | 🔧 tint + icon rotates 30°; press scales 0.94 | Consistent with every other nav control |
| Theme toggle state | ⚪ icon swaps, no morph | Content of the button changed, not its position |

## Page: index

| Element / state | Animation | Why |
|---|---|---|
| Hero eyebrow → headline → image | ✅ staggered 0.09s / 0.22s | Reads top-down, one glance path |
| Hero image | ✅ `zoom-out` scale 1.2 → 1 | Settles the largest element; motion direction matches scroll |
| Stats (40+, 360+, 14+, 99%) | ✅ count-up once, 1.1s cubic ease-out, static under reduced motion | Data emphasis; replays would cheapen it |
| Award rows hover | ✅ row fills accent, circle inverts | Draws the eye across the row; row is non-interactive so pointer cursor was removed 🔧 |
| Award rows press | ⚪ removed 🔧 | Rows are informational, not links — fake affordance removed |
| Team card chips hover | ✅ chip inverts to button surface | Signals the arrow is meaningful |
| Final CTA circle arrow | ✅ float loop 1.5s | Persistent attention on the last CTA; disabled under reduced motion |
| Footer link hover | ✅ color lift | Standard affordance |
| Scroll-to anchor | ⚪ `scroll-behavior: smooth` | Continuity between sections |

## Page: service

| Element / state | Animation | Why |
|---|---|---|
| Hero wash | ⚪ static gradient (reduced in dark theme) | Decoration; animating background wash adds cost, no meaning |
| Service grid items | ✅ `fade-up` with per-column delays (1–3) | Echoes the landing rhythm |
| Service box hover | ✅ accent fill + icon ink swap | Marks the interactive card |
| Strategy/process images | ✅ `fade-up` | Same reveal language as index — one motion system across pages |

## Form states (newsletter, footer)

| State | Animation | Why |
|---|---|---|
| Idle → typing | ⚪ input focus ring only | Feedback must be instant; no decoration |
| Invalid submit | 🔧 danger border + 0.3s shake, then status line fades in | Motion directs the eye to the failure and its explanation |
| Success | 🔧 status line fades in (`aria-live` polite) | Confirms without layout jump |
| Loading | ⚪ none — the form validates client-side, no network round-trip | Nothing to wait for; a spinner would be a lie |

## Empty / error states

| State | Animation | Why |
|---|---|---|
| Empty lists | ⚪ none exist — both pages are fully static content | No data layer, so no empty state to design |
| Form error | ✅ shake + status fade (above) | Only error surface in the product |
| 404 | ⚪ not in scope — two-page template with fixed routes | Vercel-level concern |

## Sources for the approach

- Dark-mode anti-flash pattern (render-blocking inline head script reading localStorage, then `prefers-color-scheme`): <https://arnoldwender.com/en/blog/dark-mode-anti-fouc-script/> · <https://codefronts.com/snippets/css-variable-dark-mode-system/anti-fouc-head-script/> (accessed Oct 2026)
- Purposeful landing animation — motion guides attention to CTAs and reveals content progressively: <https://www.a1.gallery/websites/animated-landing> (accessed Oct 2026)
