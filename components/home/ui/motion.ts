// Shared motion tokens for the home page.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

// Hero entrance waits for the intro curtain to lift.
export const INTRO_DURATION = 1.2;
export const INTRO_DELAY = INTRO_DURATION + 0.35;

export const LAYOUT_TRANSITION = { duration: 0.75, ease: EASE_IN_OUT };
