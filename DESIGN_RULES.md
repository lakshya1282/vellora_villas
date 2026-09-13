# Velora Villas - Master Design System & Architecture Specifications

## 1. Design Philosophy
Velora Villas is a ultra-luxury architectural retreat brand centered on quiet luxury, organic connection with nature, and structural precision.
"Where nature meets quiet luxury." Clean, balanced, minimal, maintaining a calm and refined visual rhythm.

---

## 2. Official Color Palette
- **Deep Charcoal Dark Surface (`#201F22`)**: Primary dark background base.
- **Secondary Dark Surface (`#707070`)**: Subdued secondary text and background elements.
- **Silver Tone (`#858585`)**: Muted captions, borders, and secondary copy.
- **Full White (`#FFFFFF`)**: Primary headlines, light surface pills, high-contrast buttons.
- **Subtle Card Background (`rgba(255, 255, 255, 0.05)` or `rgba(255, 255, 255, 0.08)`)**: Stat cards and glass panels.

---

## 3. Official Typography System (Inter Font)
- **Primary Font**: **Inter** (Google Font: Regular `400`, Medium `500`, Semi Bold `600`)
- **Typography Scale**:
  - `H1`: **119px** (Regular, line-height `1.05`, letter-spacing `-0.03em`) - Hero Headlines ("Where nature meets quiet luxury")
  - `H2`: **64px** (Regular, line-height `1.1`) - Section Titles
  - `Body 1`: **30px** (Regular, line-height `1.3`) - Lead paragraphs & intro statements
  - `Body 2`: **22px** (Semi Bold, line-height `1.4`) - Sub-headings & featured callouts
  - `Body 3`: **18px** (Regular, line-height `1.5`) - Standard body descriptions
  - `Button / Nav`: **16px** (Regular / Medium, uppercase or title case) - Interactive pills & CTAs

---

## 4. Grid System & Structural Layout
- **Viewport Outer Margins**: `80px` padding on left and right on desktop displays.
- **5-Column Architectural Grid Widths** (1440px+ Layout):
  - **Col 1 (575px)**: Brand logo ("VELORA VILLAS"), Pill tag ("Private Villa Retreats"), H1 Headline ("Where nature meets quiet luxury"), Sub-description.
  - **Col 2 (330px)**: Navigation Pill Group ("About", "Location").
  - **Col 3 (318px)**: Navigation Pill Group ("Offers", "Contact").
  - **Col 4 (293px)**: Stat Card 1 (`180°`, "Private villas designed for comfort...").
  - **Col 5 (269px)**: Main Action Pill ("RESERVE YOUR VILLA ↗") + Stat Card 2 (`100%`, "Immersive experience of nature...").

---

## 5. UI Component Specs & Corner Radii
- **Pill Buttons & Tags**: `rounded-full` with subtle border and `px-6 py-3`.
- **Stat Cards**: `rounded-[28px]` or `rounded-[32px]`, subtle background overlay `bg-white/[0.05]`, padding `p-8`.
- **Action Buttons**: Circular icon badges with diagonal arrow `↗` (`ArrowUpRight`).

---

## 6. Motion & Animation Standards
- **Smooth Scroll**: Lenis provider at `duration: 1.2`.
- **Mask Reveal**: Clip-path inset reveal for headlines and stat cards with cubic-bezier `[0.16, 1, 0.3, 1]`.
- **Text Split Reveal**: Staggered Inter typography slide-up animations.
- **Magnetic Physics**: Interactive pill buttons track cursor displacement.
