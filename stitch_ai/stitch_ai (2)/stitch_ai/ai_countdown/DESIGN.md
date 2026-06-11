---
name: AI Countdown
colors:
  surface: '#fcf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fcf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#564334'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe1'
  on-secondary-container: '#616365'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#a9aaaa'
  on-tertiary-container: '#3d3f3f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf8fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 20px
  stack-gap-sm: 8px
  stack-gap-md: 16px
  stack-gap-lg: 24px
  gutter: 12px
---

## Brand & Style
The design system is centered on the concept of "Cherished Moments." It targets users who value mindfulness and organization, providing an emotional bridge between utility and sentiment. The brand personality is serene, premium, and sophisticated.

The design style is **Emotional Minimalism**. It blends the structural rigor of Apple’s interface guidelines with the functional flexibility of Notion. By utilizing generous whitespace and a "content-first" hierarchy, the system ensures that the user's personal events—the countdowns themselves—are the hero of the experience. We employ subtle Glassmorphism to create a sense of depth and modernity within the constrained environment of a WeChat Mini Program.

## Colors
The palette is intentional and restrained to maintain a premium feel. 
- **Primary (Warm Orange):** Used sparingly for meaningful actions and highlighting active countdown states. It evokes warmth and urgency without being aggressive.
- **Secondary (Light Gray):** The foundation for background surfaces, providing a soft contrast against pure white elements.
- **Neutral (Ink):** A deep, off-black used for primary text to ensure high legibility while remaining softer than pure black.
- **Glass/Translucent:** Applied to overlays and navigation bars to provide a sense of place and stack order.

## Typography
The typographic system prioritizes clarity and a rhythmic "editorial" feel. While **Plus Jakarta Sans** provides a modern, geometric energy for numbers and titles, **Inter** (paired with PingFang SC for Chinese characters) handles functional body text and labels.

- Use **Display LG** exclusively for the primary "Days Remaining" digit in full-screen views.
- Use **Weight 600** for all headers to create a strong visual anchor.
- Line heights are slightly oversized (approx 1.5x) to mirror the airy feel of Apple Calendar and Notion.

## Layout & Spacing
Following WeChat Mini Program constraints, the layout utilizes a **fluid 4-column grid** for mobile. 
- **Safe Areas:** Adhere strictly to WeChat's top navigation bar height and the bottom "Home Indicator" safe area.
- **Margins:** A consistent 20px horizontal margin is applied to the main viewport.
- **Rhythm:** An 8px-based scale is used for all internal component spacing.
- **Groupings:** Content is grouped in "cards" rather than separated by full-width dividers, creating a cleaner, more modular interface.

## Elevation & Depth
Depth is communicated through **Tonal Stacking** and **Soft Diffusion**:
- **Level 0 (Background):** Light Gray (#F5F5F7).
- **Level 1 (Cards):** Pure White (#FFFFFF) with a very fine 0.5px border (#E5E5E7) and no shadow.
- **Level 2 (Floating Elements):** White with a soft ambient shadow (0px 10px 30px rgba(0,0,0,0.04)).
- **Glass Layers:** Apply a `backdrop-filter: blur(20px)` and `background: rgba(255, 255, 255, 0.8)` for top navigation bars and modal backgrounds to maintain context of the underlying content.

## Shapes
The shape language is friendly and approachable. 
- **Standard Cards:** 16px corner radius.
- **Buttons & Chips:** 12px or fully rounded (pill) depending on size.
- **Interactive States:** Use a subtle scale-down effect (0.98) on tap to provide tactile feedback without visual clutter.

## Components
- **Countdown Cards:** High-impact cards utilizing the Primary Warm Orange for the "days left" number. Use Notion-style minimalist icons (monochrome) to denote categories.
- **Floating Action Button (FAB):** A pill-shaped button positioned at the bottom center. Background is Primary Warm Orange with a high-diffusion shadow.
- **Glass Lists:** List items within a group should be separated by a hairline stroke that does not reach the edges of the card, mimicking the iOS "Inset Grouped" look.
- **Input Fields:** Minimalist design with only a bottom border that highlights to Warm Orange on focus. No heavy boxes.
- **Progress Bars:** Thin 4px bars using a gradient from Warm Orange to a lighter tint, representing time elapsed.
- **Empty States:** Use center-aligned, light-gray iconography with low-contrast subtext to maintain the "calm" aesthetic.