# Motion Spec — ilken.github.io

CSS-only. Calm, springless, music-app smooth.

- **Durations**: micro 150ms, standard 250ms, page-level 400ms. Easing `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint feel).
- **Page load**: staggered fade-up on main content sections (`animation-delay` steps of 80ms). One orchestrated reveal, no scattered effects.
- **Hover**: song rows lift surface tone + reveal play button (opacity/scale 150ms); cards translateY(-2px) with shadow deepen.
- **Playing state**: 3-bar equalizer animation (staggered scaleY keyframes) in lime next to the active track; waveform bars in the player are static except a lime played-portion.
- **Respect `prefers-reduced-motion`**: disable equalizer + reveal animations.
