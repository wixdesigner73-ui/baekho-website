# Baekho Martial Arts — Wix Studio build guide

The HTML files in this folder are a **working design prototype** (open `index.html` in a browser). Use it as the visual spec to rebuild in Wix Studio. Nothing here has been published or connected to a Wix site.

Design direction follows the **client brief** (Google Doc), not the black/red mockup: brand blue from the Baekho tiger logo, playful warm accents, and a continuous "flowing" scroll with curves, blobs and overlaps instead of stacked rectangles.

**Round 2 (client WhatsApp feedback) is applied:** the old site's dark blue **#001446** is now a core colour (all heroes, programs, quote strip, dojos, footer); the hero is dark blue; a **video-background quote strip** was added; **all programs** are shown (13, not 5) as **big badges** grouped like the old site; **all 3 dojos** are listed (Putra Heights, Bandar Rimbayu / Eco Sanctuary, Alam Impian). The mockup's *structure* (strong hero, benefits strip, program cards, About split, CTA band, rich footer) is kept.

---

## 1. Open items — decide / supply before launch

### Conflicts found between sources (I did not silently pick; prototype marks these `TBC`)
| Item | Source A | Source B |
|---|---|---|
| Little Taeks age | 3–6 (programs list) | 3–7 (its own page) |
| Rimba Stars age | 7–12 (programs list) | 8–12 (its own page) |
| Kids MMA age | 5–17 (list) | 7–17 (its own page) |
| BJJ age | 5–17 (list) | 7–17 (its own page) |
| Phone | +6012-513-8813 (shown, used for WhatsApp) | tel: links on old site were +60147959747 / +60126575527 |
| Email | admin@baekho.my (mailto) | baekho.management@gmail.com (shown) |
| Trial class | Old site: **free** trial | Brief: customer **pays** for a trial |
| "UFC for Kids" | Pricing page: BJJ + Muay Thai + MMA, 3x/week, ages 7–12 | No separate program page on old site |
| Quote on old homepage | Credited to Bruce Lee on the client's own banner | **Resolved:** shown as "— Bruce Lee" in the quote strip and About page |

### Needed from Baekho for the round-2 changes
- **Video file for the quote strip** (short, silent, loopable MP4, ideally under 8 MB, 1080p or less). The prototype looks for `video/quote-strip.mp4` and falls back to an animated deep-blue background. In Wix Studio: Strip → Background → Video.
- **Alam Impian**: opening status, address, programs, schedule. The old site only said "coming in 2023", so it is shown as "to be confirmed" with no address.
- Dojo wording: the old site uses **Bandar Rimbayu**, the URL and address use **Eco Sanctuary**; the prototype shows both.
- Badge art for **UFC for Kids, Combat Lab and Poomsae Clinic** (currently reusing Wolf MMA, Tiger Taeks and the main logo).

### Content I could not find (shown as dashed "to be supplied" placeholders)
Class timetable (days/times, except Open Dojo Fri 8:30–10pm and Combat Lab 1:30–3:30pm) · trial price and terms · ages for Combat Lab and Poomsae Clinic · parking · testimonials · tournament results/medal counts · coach profiles · NX4T coach profiles · founder story · grading schedule/fees · Baekho Score explanation · first-class guide · safety policy · YouTube channel link · real photos for UFC for Kids / Combat Lab / Poomsae Clinic (mascot art is used instead) · event and VR Taekwondo details · proper badge artwork for Combat Lab and Poomsae Clinic (currently reusing Tiger Taeks / main logo).

### Prices copied from the old site (flag: brief says do not trust old info — **confirm all**)
Taekwondo RM150/mo (+RM10 admin) · UFC for Kids RM179 (+RM10) · Combat Lab RM95 · Poomsae Clinic RM75 (+RM10). The old site also lists Black Panther Silat RM80, Martial Arts PT RM600, Gryphon Fitness RM1,500, Fitness PT Bronze–Platinum, and a yearly Taekwondo Platinum RM1,650; these are **not** in the brief and are not shown.
NX4T prices come from the brief (RM600 / RM1,200 / RM1,800 per month; 10 sessions RM1,500, recommended). The old site's "RM150 per hour" PT rate is not used. No validity periods or terms are invented.

---

## 2. Design tokens (set once in Wix Studio → Site Design)

**Colors** (name them exactly like this so the team can find them)
| Token | Hex | Use |
|---|---|---|
| **Deep blue** | `#001446` | **hero, programs, quote strip, dojos, footer, mobile menu (colour from the old Baekho site)** |
| Ink | `#0A1B33` | body/heading text |
| Navy | `#0C2A55` | NX4T background, secondary dark |
| Blue (brand) | `#0A6CF0` | links, primary blue buttons, CTA band |
| Sky | `#5BBFFF` | accents on dark |
| Ice | `#E9F4FF` | light section background |
| Cream | `#FFF7EA` | page background |
| Orange | `#FF9F0A` | main CTA buttons, eyebrow bars |
| Sun | `#FFD43B` | highlights, stickers |
| Lime | `#A6D63A` | program accent |
| Coral | `#FF6B7A` | program accent |
| NX4T Gold | `#D9B66B` | NX4T accent only |
| Muted text | `#52627B` | body copy |

**Fonts** (Wix Studio supports Google Fonts): headings **Bricolage Grotesque** 800 (tight letter-spacing −2%), body **DM Sans** 400/500/700. Heading sizes use fluid scaling (H1 ≈ 44–76px, H2 ≈ 32–58px, body 16–18px).

**Buttons** (create as reusable styles): pill, min-height 52px, Orange fill / Ink text; variants Blue, Navy, White, WhatsApp green `#22C55E`, Ghost (2.5px outline). Hover: lift 3px.

**Shapes**: card radius 36px; images use organic masks (see §4).

---

## 3. Sitemap (8 pages, per client brief) and redirects

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | story, benefits, programs, locations, proof, trial CTA |
| Programs | `/programs` | All 13: Taekwondo (Little Taeks, Rimba Stars, Tiger Taeks), Martial arts (Muay Thai, Boa BJJ, Wolf MMA, Capoeira), Functional fitness (Gryphon, Phoenix, Dragon), Specialist (UFC for Kids, Combat Lab, Poomsae Clinic) |
| Locations & Schedules | `/locations` | 3-dojo selector (Putra Heights, Bandar Rimbayu / Eco Sanctuary, Alam Impian), map, timetable, pricing |
| About Baekho | `/about` | story, philosophy, methodology, coaches, student journey |
| Achievements | `/achievements` | results, pathways, stories, gallery |
| Parents Hub | `/parents-hub` | progress, FAQ, YouTube syllabus, events |
| NX4T | `/nx4t` | personal training (distinct, more mature look) |
| Contact / Trial | `/trial` | five-step trial purchase, WhatsApp, contacts |

Put **Book a trial** as the header CTA on every page. Header links: Home, Programs, Locations, About, Achievements, Parents Hub, NX4T.

**301 redirects** (Wix → Settings → SEO → URL Redirect Manager):
`/baekho-programs` → `/programs` · `/programs/little-taeks-taekwondo` → `/programs#little-taeks` · `/programs/rimba-stars-taekwondo` → `/programs#rimba-stars` · `/programs/tiger-taeks-taekwondo` → `/programs#tiger-taeks` · `/programs/wolf-mixed-martial-arts` → `/programs#ufc-for-kids` · other `/programs/*` → `/programs` · `/bandarrimbayu` → `/locations#eco-sanctuary` · `/putraheights` → `/locations#putra-heights` · `/pricing-plans/plans-pricing-list` → `/locations` · `/shop`, `/blog` → decide keep or redirect to `/` .

---

## 4. Recreating the "continuous flow" in Wix Studio

The brief rejects stacked rectangles. In the prototype every section sits on one canvas and is joined by an SVG wave. In Wix Studio:

1. **Section dividers:** Add → Decorative → *Dividers* (or Vector Art/SVG). Place a wave at the **top of each section**, filled with the **previous section's color**, so the previous section "pours" into the next. Prototype uses three wave shapes (`js/site.js`, `WAVES`); copy those path strings into SVG files and upload to Media.
2. **Image masks:** apply a **Shape mask** (Studio → image → Mask) with organic blob shapes. Prototype CSS border-radius values for 3 blobs are in `css/styles.css` (`.mask-a/.mask-b/.mask-c`); recreate as SVG masks. Use an arch mask for tall portrait photos.
3. **Blobs:** large soft shapes (Sun, Sky, Blue at 35–50% opacity) behind headings and photos. Slow "morph" is optional (Studio *Looping* animation).
4. **Stickers:** circular badges ("Ages 3–17", "2 dojos") overlapping photo corners, with a gentle *Float* looping animation.
5. **Overlaps:** let photos extend over the divider (negative margin / layering inside the section container) rather than ending at section edges.
6. **Program cards:** colored top block with the mascot, white body, concave white curve between them (a white ellipse shape at the card's lower edge of the colored block).

---

## 5. Page-by-page build (components)

Use **Studio sections → containers → grids/stacks**. Avoid absolute positioning for structure; absolute/layered is OK only for decorative blobs, stickers and mascots.

### Home
1. **Hero** — **deep blue #001446** background with a blue glow top-right, 2-column grid (text | layered photos), white heading, sky-blue and yellow highlights. H1 "Serious coaching. Seriously fun." with "Seriously" in Blue and "fun." highlighted with Sun underline. Buttons: *Book a trial class* → `/trial`; *Ask on WhatsApp* → `https://wa.me/60125138813?text=…`. Photo: `photo-class-kids` in a blob mask; small overlapping `photo-syllabus`. Entrance animation: H1 lines *Reveal up*, stagger 120ms.
2. **Benefits** — 4 repeater cards (CMS or Repeater element). Staggered vertical offset on even cards on desktop, 2-col tablet, 1-col mobile. Icon *hover rotate*.
3. **Programs** (deep blue) — **big badges**: one Repeater per group (Taekwondo 3, Martial arts 4, Functional fitness 3, Specialist 3), each card = badge image (up to 280px), name, age line, "See program". Soft coloured glow behind each badge. CMS-connected; 3-up desktop, 2-up tablet, 1-up mobile. Cards link to `/programs#id`.
4. **About** (cream) — split: photo (blob mask, overlapping circle photo) | copy with 3 ticks.
5. **Quote strip with video background** (deep blue): Studio Strip with **video background** (looping, muted, with dark overlay), the quote "Learning is never cumulative. It is a movement of knowing, which has no beginning and no end." and "— Bruce Lee". Wave on top. Provide a poster image for mobile/data-saver.
6. **Methodology preview** — arch-masked photo + numbered path (dotted connector).
7. **Dojos** (deep blue) — **3 cards** from **Locations** CMS: dojo badge image, name, address, program chips, button. Alam Impian is a dashed "coming soon / to be confirmed" card.
8. **Testimonials** — CMS repeater; hide section if empty until real quotes arrive.
9. **CTA band** — Blue background, two mascots at the bottom corners, buttons *Book a trial class* + *WhatsApp us*.
10. **Footer** — deep blue, wave on top, 4 columns, social icons, WhatsApp.

### Programs
Hero with mascot collage + jump chips (anchor links). Then one section per program, alternating image left/right and Cream/Ice backgrounds: age + location chips, description, 3 ticks, collapsible "What's included" (Studio Accordion), price + *Book a trial* → `/trial?program=<id>` (use Wix **Dynamic page** or query params). Final "More ways to train" cards for Muay Thai, BJJ, Kids MMA, Capoeira, Gryphon Fitness (flag *confirm if still running*).

### Locations & Schedules
**Tabs** element (or Studio *Tabs*) as branch selector → each tab: photo card, address, chips for programs, *Get directions* (Google Maps link), WhatsApp/email, **Google Maps** element, **schedule table** (Studio *Table* or CMS Repeater filtered by location), parking note. Then Open Dojo feature (poster image + 4 bullets), then pricing cards.

### About
Hero · story split · "guiding thought" quote on Ink · **methodology** (anchor `#methodology`: numbered path + four tracks Physical/Online/Resources/Career) · coaches (CMS **Coaches**) · student-journey path · CTA.

### Achievements
Hero · medal wall (4 stat cards — numbers from Baekho) · competition pathways (Combat Lab, Poomsae Clinic, UFC for Kids) · student stories (CMS) · gallery (Studio *Gallery* or Pro Gallery) · CTA.

### Parents Hub
Hero · progress tiles (Compass, Gradings, Baekho Score, App & reports) · **FAQ** (Studio Accordion bound to CMS **FAQ**; one-open-at-a-time, 400ms ease) · YouTube syllabus (Wix **Video** / YouTube embed, playlist) · events & VR Taekwondo · CTA.

### NX4T (distinct, mature)
Navy/Gold scheme; same fonts at weight 700; no stickers/blobs except one large soft shape in hero. Hero (arch-masked gym photo) · what NX4T is (4 tiles) · **packages** (4 cards; 10-session card gold and flagged **Recommended**) · coaches (placeholder) · location + map + testimonials · gold CTA band. **Primary CTA: WhatsApp consultation** (`wa.me/60125138813?text=…NX4T…`). Optional direct purchase only if Baekho approves (see §6).

### Contact / Trial
Five-step journey (build with **Wix Bookings** — see §6, or Studio *Multi-state box* for the prototype flow): 1 age → program, 2 location, 3 schedule, 4 essential details, 5 review & pay. Sidebar: WhatsApp, phone, email, Instagram, Facebook, both addresses. Show price and conditions **before** payment. Provide success and failure states (both built in the prototype; add `?simulate=fail` to `trial.html` to preview failure) with a WhatsApp fallback.

---

## 6. Trial checkout — recommended implementation (verify before committing)

Simplest reliable setup inside budget: **Wix Bookings** with one "Trial class" **service per program/location**, class sessions published as a *Class* schedule (Wix prevents overbooking via capacity). Customers pay at booking; staff manage bookings/attendance in Bookings.
- **Confirm before build** (per the brief): which payment methods Wix offers for a Malaysian business (Wix Payments availability in Malaysia, Stripe, PayPal, FPX/e-wallets via a supported gateway), transaction fees, and which Wix plan/app tier is required. I could not verify these, so they are not asserted here.
- If the five-step wizard UX is wanted exactly as designed, Wix Bookings' own flow can be used for steps 3–5, with steps 1–2 as a Studio pre-selector that links to the matching service.
- Trial price/conditions must be set by Baekho.

---

## 7. CMS collections (so the team can self-update)

| Collection | Fields |
|---|---|
| Programs | name, slug, ageRange, tagline, description, points[], included[], price, priceNote, locations (ref), photo, mascot, accentColor |
| Locations | name, slug, area, address, mapQuery, programs (ref), photo, parking |
| Schedule | location (ref), program (ref), day, startTime, endTime, ageGroup |
| Pricing | program (ref), amount, unit, adminFee, note |
| FAQ | question, answer, category, order |
| Testimonials | quote, name, relation, photo, approved (bool) |
| Results | event, date, student, result, photo |
| Coaches | name, role, qualifications, photo, bio |

---

## 8. Animation, accessibility, SEO, analytics

- **Animations** (Studio Interactions): hero *Reveal up*; section content *Fade in + rise 34px* (800ms, ease-out, stagger 80ms); image mask *Reveal*; mild parallax (≤5%) on hero/mascot layers; card hover lift + image zoom 1.06; accordion height ease 400ms; header hides on scroll-down, returns on scroll-up. **Honor "reduced motion"**: Studio respects the OS setting for entrance animations; disable *Looping* animations on mobile.
- **Accessibility**: min body 16px; text/background contrast checked on brand colors (Orange buttons use Ink text, never white); 44–52px touch targets; focus styles visible; all photos have descriptive alt text (prototype has examples); one H1 per page; skip-link.
- **SEO**: titles and meta descriptions are in each prototype file's `<head>`; set them per page in Wix SEO panel. Add Schema.org *LocalBusiness / SportsActivityLocation* for each dojo (name, address, phone). Compress images to WebP; lazy-load below the fold.
- **Analytics**: fire events `trial_cta_click`, `trial_purchase_submit`, `trial_purchase`, `whatsapp_click`, `nx4t_whatsapp_click` (prototype pushes these to `dataLayer`; connect to GA4 / Meta Pixel / Wix Analytics via Marketing Integrations).
- **Handover** (per brief): owner/admin access, short walkthrough, list of ongoing costs (Wix plan, domain, apps, transaction fees).

---

## 9. Files in this folder

| Path | What |
|---|---|
| `index.html`, `programs.html`, `locations.html`, `about.html`, `achievements.html`, `parents-hub.html`, `nx4t.html`, `trial.html` | The 8 pages |
| `css/styles.css` | Design system (tokens at the top) |
| `js/site.js` | Header/footer, waves, scroll reveals, accordion, tabs, tracking |
| `js/trial.js` | Trial journey; edit `PROGRAMS` / `slotsFor()` for demo data |
| `website-assets/` | **Every asset used on the site** (322 files): originals + web images, every photo in its frame, vector art (dotted ring, waves, blobs, masks), icons, container shapes, UI component renders, reference screenshots. Open `website-assets/asset-index.html` |
| `img/` | Optimised WebP of the original Baekho photos/logos |
| `assets/` | (Not in the repo.) Original full-size downloads from baekho.my, kept locally as source files |
