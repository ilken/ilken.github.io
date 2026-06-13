# Design Tokens — ilken.github.io

Source of truth: the music-player reference design (dark warm-grey chrome, cream content, lime accent). Tokens live as CSS custom properties in `src/styles/index.css` under `@theme`.

## Color Palette

```css
/* Chrome (sidebar, player bar) */
--color-chrome: #3b3734; /* warm dark grey */
--color-chrome-raised: #4a4541; /* active pill, hover */
--color-chrome-text: #f5f2ee;
--color-chrome-muted: #a8a19a;

/* Content area */
--color-cream: #faf7f1; /* main surface */
--color-cream-raised: #f1ece3; /* now-playing panel, cards */
--color-cream-sunken: #e9e3d8; /* dividers, skeletons */

/* Text on cream */
--color-ink: #2e2a27;
--color-ink-soft: #6f6962;
--color-ink-muted: #a39c93;

/* Accent */
--color-lime: #dff24b; /* play button, waveform, active highlights */
--color-lime-ink: #2b2b1f; /* text/icons on lime */

/* Hero gradient (curated-playlist card) */
--color-ember: #a14613;
--color-ember-deep: #6e300d;
```

## Typography

- Single family: **Montserrat** (Google Fonts, 400/500/600/700/800). Display moments use 700–800 with tight tracking; body 400–500.
- Scale: hero 40–48px, section titles 22px/700, card titles 15px/600, body 14px, meta 12–13px.

## Shape & Depth

- Radii: app window 24px, cards 16px, pills/buttons full, artwork 12px (squares) / full (artist circles).
- Shadows: soft and warm — `0 8px 30px rgb(59 55 52 / 0.08)` on raised cards; no hard borders, separation by surface tone.

## Layout

- App shell: fixed sidebar (~230px, chrome) · scrollable cream main · Now Playing panel (~300px, cream-raised, hidden < xl) · fixed bottom player bar (chrome, full width).
- Content max-width none; generous 32–40px gutters.
