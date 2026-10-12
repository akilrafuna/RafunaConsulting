---
name: Rafuna Consulting
description: Accounting and tax advisory in Prishtina, set as security print.
colors:
  intaglio-navy: "#0a2e40"
  intaglio-navy-deep: "#061d29"
  intaglio-navy-raised: "#0f3a50"
  security-paper: "#eef2ef"
  security-paper-shade: "#e3e9e5"
  security-paper-bright: "#f7f9f7"
  plate-teal: "#1596bb"
  plate-teal-ink: "#0b6380"
  plate-teal-glow: "#3fb4d8"
  plate-orange: "#f07022"
  plate-orange-ink: "#a64a0e"
  muted-on-paper: "#4a6573"
  muted-on-navy: "#a9bec7"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.75rem, 6.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 3.8vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.016em"
  title:
    fontFamily: "Bodoni Moda Variable, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.4rem, 2vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.12
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 560
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 125"
  numeral:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 620
    letterSpacing: "0.04em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 112"
rounded:
  plate: "2px"
  vignette: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(5rem, 11vw, 9.5rem)"
  header: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.plate-orange}"
    textColor: "{colors.intaglio-navy-deep}"
    rounded: "{rounded.plate}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "#f5843f"
  button-ink:
    backgroundColor: "{colors.intaglio-navy}"
    textColor: "{colors.security-paper}"
    rounded: "{rounded.plate}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-line:
    textColor: "{colors.intaglio-navy}"
    rounded: "{rounded.plate}"
    padding: "0 1.5rem"
    height: "3.25rem"
  input:
    backgroundColor: "{colors.security-paper-bright}"
    textColor: "{colors.intaglio-navy}"
    rounded: "{rounded.plate}"
    height: "3rem"
  coupon:
    backgroundColor: "{colors.security-paper}"
    textColor: "{colors.intaglio-navy}"
    padding: "1.6rem 1.5rem 1.4rem"
  coupon-stub:
    backgroundColor: "{colors.plate-orange}"
    textColor: "{colors.intaglio-navy-deep}"
---

# Design System: Rafuna Consulting

## Overview

**Creative North Star: "The Engraved Note"**

Every page is a note of value printed in intaglio: deep navy plates laid on cool security paper, engraved with guilloche work that a forger could not reproduce. The firm's promise (every figure in its place) is shown as craft rather than claimed. Precision is the luxury: hairline strokes, tabular figures, engraved display type, and nothing decorative that does not belong to the world of banknotes, bond coupons and share certificates.

The rhythm alternates navy notes and paper sections. Each navy note carries an inner engraved frame and a microtext rule along its foot, like a banknote's border. Paper sections carry a faint wave underprint, like the tint behind a banknote's text. Brand teal and orange are treated as the second and third ink plates, never as fills spread across a neutral page.

Motion has one grammar, engraving. Guilloche lines draw themselves once as they arrive, and the hero rosette's rings counter-rotate with scroll like a rose-engine lathe. Nothing loops.

**Key Characteristics:**
- Navy intaglio notes framed by a 1px inner rule, alternating with cool paper (never cream).
- Generative guilloche: rosettes and braided bands drawn as true hairlines, at about 0.8px at any size.
- Bodoni Moda engraved display over Archivo, with wide 125% tracked caps for legends.
- Tabular serial numerals for every date, hour, rate and phone number.
- Photography only as navy duotone engraved vignettes in oval double rings.
- Bond-coupon perforations for anything dated.

## Colors

Two inks on one paper: intaglio navy carries 30–60% of every page, and teal and orange are second and third plates used for linework, legends and the single primary action.

### Primary
- **Intaglio Navy** (`intaglio-navy`): the ground of every note (hero, calendar, diaspora, CTA). Also body text on paper (12.6:1).
- **Deep Navy** (`intaglio-navy-deep`): the footer and the text on orange plates (5.8:1 on orange).
- **Raised Navy** (`intaglio-navy-raised`): menus and the map facade that sit above a note.

### Secondary
- **Plate Orange** (`plate-orange`): the booking plate, coupon stubs, rates on navy, the selection highlight and the caret. On paper it is linework only. Text on paper uses **Orange Ink** (`plate-orange-ink`, 5.1:1).

### Tertiary
- **Plate Teal** (`plate-teal`): guilloche bands and focus rings. Text on paper uses **Teal Ink** (`plate-teal-ink`, 6.0:1); linework and text on navy use **Teal Glow** (`plate-teal-glow`, 5.9:1).

### Neutral
- **Security Paper** (`security-paper`): the paper ground. It is cool, with a faint green-grey cast.
- **Paper Shade** (`security-paper-shade`): alternate paper sections (process, audience, values).
- **Bright Paper** (`security-paper-bright`): certificate panels and form fields.
- **Muted on Paper** (`muted-on-paper`, 5.5:1) and **Muted on Navy** (`muted-on-navy`, 7.4:1): secondary text.

**The Two Inks Rule.** Orange is a plate, not a paint. It fills only the primary action and the coupon stub, and otherwise appears as linework or as numerals on navy.

**The Cool Paper Rule.** Paper is cool and slightly green (`security-paper`). A warm cream ground breaks the world.

## Typography

**Display Font:** Bodoni Moda Variable (with Bodoni 72, Didot, Georgia)
**Body Font:** Archivo Variable (with system sans)

**Character:** An engraved Didone with optical sizing sets the headlines like a certificate's text. A width-variable grotesque does everything functional, stretching to 125% for banknote-style legends.

### Hierarchy
- **Display** (500, clamp(2.75rem, 6.4vw, 6rem), 0.98): one per page, the note's headline.
- **Headline** (500, clamp(2rem, 3.8vw, 3.5rem), 1.04): section titles.
- **Title** (500, clamp(1.4rem, 2vw, 1.85rem), 1.12): service names, clauses, steps and FAQ questions, always in Bodoni.
- **Body** (400, 1.0625rem, 1.65): copy at 34–44rem measure.
- **Label** (560, 0.72rem, 0.16em, uppercase, width 125%): legends on notes, table heads and coupon kinds. Never smaller than 11.5px.
- **Numeral** (620, width 112%, tabular lining figures, 0.04em, no wrapping): dates, hours, rates and phone numbers.

**The One Display Voice Rule.** Bodoni is the only display face. Italic display accents are not used.

**The Plain Zero Rule.** Figures use tabular lining numerals with an unslashed zero. This is why the sans is Archivo: Mona Sans, named in the original direction, has a slashed tabular zero.

## Layout

A 88rem max container with fluid gutters. Sections pace at clamp(5rem, 11vw, 9.5rem). Desktop compositions are asymmetric two-column grids (7/5, 5/7, 4/7) with a sticky intro column. Every grid track is `minmax(0, 1fr)` so nowrap microtext and wide tables never widen a page. From 64rem up, notes sit inside a 0.75rem paper margin; below that they run full-bleed. On phones the hero rosette moves below the actions, the action plates go full width, tables restack into labelled rows, and a translucent action bar (call, WhatsApp, book) appears after the first viewport.

## Elevation & Depth

Depth is mostly tonal: navy notes on paper, and paper panels with double inset rules. Shadows appear only where a surface floats above content.

### Shadow Vocabulary
- **Floating chrome** (`0 10px 30px -12px` deep navy at 55%): the condensed header and the mobile action bar over paper.
- **Menu** (`0 24px 48px -20px` deep navy at 80%): the services menu.
- **Certificate panel** (`0 30px 60px -40px` navy at 45%): the booking form panel.

**The Engraved Frame Rule.** Containers are framed by inset hairline rules (1px, often doubled at a 6–7px gap), never by drop shadows.

## Shapes

Square-cut, like printed paper: 2px radius on plates, fields and panels. Circles are reserved for guilloche, the arrow badges and the oval vignettes (4:5 ovals in double engraved rings). Coupons carry real perforations: punched dots in the ground colour and half-circle notches.

## Components

### Buttons (ink plates)
- **Shape:** square-cut (2px), 3.25rem tall, with a double inset rule that reads as a printed plate.
- **Primary:** orange plate, deep-navy label. On the home hero a foil glint (React Bits GlareHover) crosses it once on arrival.
- **Line:** a hairline outline in the current ink, used for call and WhatsApp.
- **Press:** scales to 0.97 on pointer-down (90ms). Focus shows a 2px teal ring, orange on navy.

### Inputs / Fields
- **Style:** shadcn Input, Select and Textarea restyled to bright paper, a 1px navy (28%) stroke, 2px radius and 3rem height.
- **Focus:** teal border with a 3px teal halo at 22%.
- **Status:** sending, sent and error messages print into the page in a ruled box (aria-live), never as toasts.

### Navigation
- **Header:** transparent over the hero note, then condenses to translucent navy material (84%, blur 18px) once scrolled. Navy menu items, an orange-underlined current page, SQ · EN · DE switching to the same page in each language, and a booking plate.
- **Mobile:** a full-screen navy `<dialog>` sheet with services in Bodoni.

### Guilloche Rosette (signature)
Five generated rings (rope braids, a lens-petal net, a scalloped edge) in teal, orange and paper hairlines, with the logo mark in the watermark window. It engraves once on load, counter-rotates with scroll, and renders statically under reduced motion.

### Bond Coupons (signature)
Upcoming Kosovo tax deadlines are printed as paper coupons on navy: kind in a legend, the day in Bodoni, the month, and an orange tear-off stub whose day count rolls up (React Bits Counter). Dates are recomputed in the visitor's browser.

### Engraved Vignette
Stock photography becomes a navy duotone with a 172° line-screen, set in a 4:5 oval with double rings.

## Do's and Don'ts

### Do:
- **Do** alternate navy notes and paper sections, giving each note its inner 1px frame and microtext rule.
- **Do** draw ornament as generated hairline guilloche (about 0.8px), and let it engrave once on arrival.
- **Do** set every figure in tabular lining numerals that don't wrap.
- **Do** keep the display face Bodoni and functional text Archivo, with legends at width 125%.
- **Do** keep a human one tap away: call, WhatsApp and booking on every page.

### Don't:
- **Don't** use a warm cream or ivory ground.
- **Don't** fill large areas with orange; it is reserved for the primary plate and coupon stubs.
- **Don't** set tracked-caps labels above headings. Breadcrumbs stay sentence case.
- **Don't** show raw stock photos; run them through the engraved vignette.
- **Don't** loop animations or animate content into view on every section; engraving is the only motion grammar.
