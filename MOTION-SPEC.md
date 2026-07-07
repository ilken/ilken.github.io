# Motion Spec — ilken.github.io

CSS-only. Calm, springless, music-app smooth.

- **Durations**: micro 150ms, standard 250ms, page-level 400ms. Easing `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint feel).
- **Page load**: staggered fade-up on main content sections (`animation-delay` steps of 80ms). One orchestrated reveal, no scattered effects.
- **Hover**: song rows lift surface tone + reveal play button (opacity/scale 150ms); cards translateY(-2px) with shadow deepen.
- **Playing state**: 3-bar equalizer animation (staggered scaleY keyframes) in lime next to the active track; waveform bars in the player are static except a lime played-portion.
- **Nav**: the active sidebar pill scales in from the left (`nav-pill-in`, 250ms).
- **Player**: play/pause icons cross-fade with a slight scale (150ms); the play button presses down to `scale-95`.
- **Marquee**: overflowing track titles scroll (duplicated text, `translateX(-50%)`, ~25px/s linear, min 8s loop) behind a horizontal fade mask; short titles stay static and truncated.
- **Loading**: skeletons sweep a shimmer gradient (1.6s linear) instead of pulsing.
- **Headers**: section titles reveal an 8×2px lime underline (`grow-x`, 400ms, 150ms delay).
- **Hero**: inner content uses the same stagger cascade; the portrait fades in to its blend opacity.
- **Respect `prefers-reduced-motion`**: disable equalizer, marquee, shimmer + reveal animations.
