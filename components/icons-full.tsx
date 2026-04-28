// Full icon set — 49 icons sharing the mochi vocabulary (80×80 viewBox,
// 2px ink stroke, coral accents). Categorized in SECTIONS.

import { PALETTE } from "@/lib/mochi";

const INK = PALETTE.ink;

type IconProps = { size?: number; accent?: string };

const _S = (s: number) => ({ width: s, height: s, viewBox: "0 0 80 80", style: { display: "block" } as const });
const _stroke = (extra: React.SVGAttributes<SVGElement> = {}) => ({
  fill: "none",
  stroke: INK,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...extra,
});

/* ============== STREAMING / GAMES ============== */

export function IconController({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 22 30 Q 12 30 10 42 Q 8 56 16 60 Q 22 62 26 56 L 54 56 Q 58 62 64 60 Q 72 56 70 42 Q 68 30 58 30 Z"
            {..._stroke({ fill: "#fff", strokeWidth: 2.2 })} />
      <rect x="20" y="40" width="10" height="3.5" fill={INK} rx="1" />
      <rect x="23.25" y="36.75" width="3.5" height="10" fill={INK} rx="1" />
      <circle cx="52" cy="40" r="2.6" fill={accent} stroke={INK} strokeWidth="1.5" />
      <circle cx="60" cy="44" r="2.6" fill={accent} stroke={INK} strokeWidth="1.5" />
      <circle cx="40" cy="44" r="1.5" fill={INK} />
    </svg>
  );
}

export function IconArcade({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <ellipse cx="40" cy="60" rx="20" ry="5" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="37" y="32" width="6" height="26" fill="#fff" stroke={INK} strokeWidth="2" />
      <circle cx="40" cy="28" r="10" fill={accent} stroke={INK} strokeWidth="2.2" />
      <circle cx="36" cy="25" r="2" fill="#fff" opacity="0.7" />
      <circle cx="20" cy="62" r="3" fill={INK} />
      <circle cx="60" cy="62" r="3" fill={INK} />
    </svg>
  );
}

export function IconDisc({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="28" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <circle cx="40" cy="40" r="20" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.4" />
      <circle cx="40" cy="40" r="14" fill={accent} stroke={INK} strokeWidth="1.6" />
      <circle cx="40" cy="40" r="4" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <path d="M 22 30 Q 30 22 42 22" {..._stroke({ strokeWidth: 1.5, opacity: 0.5 })} />
    </svg>
  );
}

export function IconVHS({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="10" y="22" width="60" height="40" rx="3" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <rect x="14" y="28" width="52" height="20" rx="2" fill={PALETTE.bg} stroke={INK} strokeWidth="1.6" />
      <circle cx="26" cy="38" r="5" fill={accent} stroke={INK} strokeWidth="1.4" />
      <circle cx="54" cy="38" r="5" fill={accent} stroke={INK} strokeWidth="1.4" />
      <circle cx="26" cy="38" r="1.4" fill={INK} />
      <circle cx="54" cy="38" r="1.4" fill={INK} />
      <rect x="22" y="54" width="36" height="3" fill={INK} opacity="0.3" />
    </svg>
  );
}

export function IconTV({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <line x1="28" y1="14" x2="34" y2="22" {..._stroke()} />
      <line x1="52" y1="14" x2="46" y2="22" {..._stroke()} />
      <rect x="10" y="22" width="60" height="42" rx="4" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <rect x="16" y="28" width="44" height="30" rx="2" fill={accent} stroke={INK} strokeWidth="1.6" />
      <circle cx="65" cy="34" r="2" fill={INK} />
      <circle cx="65" cy="42" r="2" fill={INK} />
      <line x1="22" y1="64" x2="18" y2="70" {..._stroke()} />
      <line x1="58" y1="64" x2="62" y2="70" {..._stroke()} />
    </svg>
  );
}

export function IconMic({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="30" y="14" width="20" height="34" rx="10" {..._stroke({ fill: "#fff", strokeWidth: 2.2 })} />
      <line x1="32" y1="24" x2="48" y2="24" {..._stroke({ strokeWidth: 1.4 })} />
      <line x1="32" y1="30" x2="48" y2="30" {..._stroke({ strokeWidth: 1.4 })} />
      <line x1="32" y1="36" x2="48" y2="36" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 22 44 Q 22 60 40 60 Q 58 60 58 44" {..._stroke()} />
      <line x1="40" y1="60" x2="40" y2="68" {..._stroke()} />
      <ellipse cx="40" cy="70" rx="10" ry="2.5" fill={accent} stroke={INK} strokeWidth="1.8" />
    </svg>
  );
}

export function IconHeadphone({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 14 48 Q 14 18 40 18 Q 66 18 66 48" {..._stroke({ strokeWidth: 2.4 })} />
      <rect x="10" y="44" width="14" height="22" rx="5" fill={accent} stroke={INK} strokeWidth="2" />
      <rect x="56" y="44" width="14" height="22" rx="5" fill={accent} stroke={INK} strokeWidth="2" />
      <circle cx="17" cy="55" r="2" fill={INK} />
      <circle cx="63" cy="55" r="2" fill={INK} />
    </svg>
  );
}

export function IconPlay({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="28" fill={accent} stroke={INK} strokeWidth="2.2" />
      <path d="M 33 28 L 33 52 L 54 40 Z" fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLive({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 10 18 Q 10 12 16 12 L 64 12 Q 70 12 70 18 L 70 50 Q 70 56 64 56 L 30 56 L 20 66 L 22 56 L 16 56 Q 10 56 10 50 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="22" cy="34" r="5" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <circle cx="22" cy="34" r="2.4" fill={INK} />
      <rect x="32" y="26" width="2.4" height="16" fill="#fff" />
      <rect x="32" y="39.6" width="7" height="2.4" fill="#fff" />
      <rect x="42" y="26" width="2.4" height="16" fill="#fff" />
      <path d="M 47 26 L 50.5 42 L 54 26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="57" y="26" width="2.4" height="16" fill="#fff" />
      <rect x="57" y="26" width="7" height="2.4" fill="#fff" />
      <rect x="57" y="32.8" width="5.5" height="2.4" fill="#fff" />
      <rect x="57" y="39.6" width="7" height="2.4" fill="#fff" />
    </svg>
  );
}

export function IconTrophy({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 24 18 L 56 18 L 54 42 Q 50 50 40 50 Q 30 50 26 42 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 24 22 Q 14 22 14 30 Q 14 36 22 36" {..._stroke({ strokeWidth: 1.8 })} />
      <path d="M 56 22 Q 66 22 66 30 Q 66 36 58 36" {..._stroke({ strokeWidth: 1.8 })} />
      <rect x="34" y="50" width="12" height="6" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <rect x="26" y="56" width="28" height="6" rx="2" fill="#fff" stroke={INK} strokeWidth="2" />
      <text x="40" y="38" fontSize="14" fontWeight="900" fill="#fff" textAnchor="middle">★</text>
    </svg>
  );
}

/* ============== COMMUNICATION ============== */

export function IconBubble({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 14 22 Q 14 14 22 14 L 58 14 Q 66 14 66 22 L 66 46 Q 66 54 58 54 L 38 54 L 28 64 L 30 54 L 22 54 Q 14 54 14 46 Z"
            {..._stroke({ fill: "#fff", strokeWidth: 2.2 })} />
      <circle cx="28" cy="34" r="2.4" fill={INK} />
      <circle cx="40" cy="34" r="2.4" fill={accent} />
      <circle cx="52" cy="34" r="2.4" fill={INK} />
    </svg>
  );
}

export function IconLetter({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="10" y="22" width="60" height="40" rx="3" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <path d="M 10 22 L 40 46 L 70 22" {..._stroke({ strokeWidth: 2 })} />
      <path d="M 40 50 Q 36 46 36 50 Q 36 54 40 56 Q 44 54 44 50 Q 44 46 40 50 Z"
            fill={accent} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeart({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 64 Q 14 48 14 30 Q 14 18 26 18 Q 34 18 40 28 Q 46 18 54 18 Q 66 18 66 30 Q 66 48 40 64 Z"
            fill={accent} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <ellipse cx="28" cy="28" rx="3" ry="5" fill="#fff" opacity="0.6" transform="rotate(-30 28 28)" />
    </svg>
  );
}

export function IconStar({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 12 L 47 30 L 66 32 L 52 45 L 56 64 L 40 54 L 24 64 L 28 45 L 14 32 L 33 30 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="34" cy="36" r="1.4" fill="#fff" opacity="0.8" />
    </svg>
  );
}

export function IconBell({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="37" y="10" width="6" height="4" rx="1.5" fill={INK} />
      <path d="M 18 52 Q 18 22 40 22 Q 62 22 62 52 L 64 56 L 16 56 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 22 46 Q 30 42 40 42 Q 50 42 58 46" {..._stroke({ strokeWidth: 1.5 })} />
      <circle cx="40" cy="64" r="4" fill={accent} stroke={INK} strokeWidth="1.8" />
    </svg>
  );
}

export function IconPin({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 14 Q 26 14 26 30 Q 26 42 36 50 L 40 70 L 44 50 Q 54 42 54 30 Q 54 14 40 14 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="40" cy="30" r="5" fill="#fff" stroke={INK} strokeWidth="1.8" />
    </svg>
  );
}

export function IconTag({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 38 12 L 68 12 L 68 42 L 42 68 Q 38 72 34 68 L 12 46 Q 8 42 12 38 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="56" cy="24" r="4" fill="#fff" stroke={INK} strokeWidth="1.8" />
    </svg>
  );
}

export function IconCamera({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 28 22 L 32 16 L 48 16 L 52 22 L 64 22 Q 70 22 70 28 L 70 56 Q 70 62 64 62 L 16 62 Q 10 62 10 56 L 10 28 Q 10 22 16 22 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="40" cy="42" r="12" fill={accent} stroke={INK} strokeWidth="2" />
      <circle cx="40" cy="42" r="6" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <circle cx="60" cy="30" r="2" fill={INK} />
    </svg>
  );
}

export function IconLink({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="10" y="32" width="32" height="16" rx="8" fill={accent} stroke={INK} strokeWidth="2.2" transform="rotate(-30 26 40)" />
      <rect x="38" y="32" width="32" height="16" rx="8" fill="#fff" stroke={INK} strokeWidth="2.2" transform="rotate(-30 54 40)" />
      <line x1="34" y1="40" x2="46" y2="40" {..._stroke({ strokeWidth: 2.4 })} transform="rotate(-30 40 40)" />
    </svg>
  );
}

export function IconShare({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="20" cy="40" r="8" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <circle cx="58" cy="22" r="8" fill={accent} stroke={INK} strokeWidth="2.2" />
      <circle cx="58" cy="58" r="8" fill={accent} stroke={INK} strokeWidth="2.2" />
      <line x1="26" y1="36" x2="52" y2="26" {..._stroke({ strokeWidth: 2 })} />
      <line x1="26" y1="44" x2="52" y2="54" {..._stroke({ strokeWidth: 2 })} />
    </svg>
  );
}

/* ============== HOUSE / DAILY ============== */

export function IconHouse({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 12 38 L 40 14 L 68 38 Z" fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="20" y="36" width="40" height="30" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <rect x="34" y="48" width="12" height="18" rx="2" fill={accent} stroke={INK} strokeWidth="1.8" />
      <circle cx="43" cy="58" r="1" fill={INK} />
      <rect x="24" y="40" width="6" height="6" fill={INK} opacity="0.15" stroke={INK} strokeWidth="1.4" />
      <rect x="52" y="20" width="6" height="10" fill="#fff" stroke={INK} strokeWidth="1.8" />
    </svg>
  );
}

export function IconMug({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 18 24 L 18 56 Q 18 64 26 64 L 50 64 Q 58 64 58 56 L 58 24 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 58 32 Q 70 32 70 42 Q 70 52 58 52" {..._stroke({ strokeWidth: 2.2 })} />
      <path d="M 22 28 L 54 28" {..._stroke({ strokeWidth: 1.6 })} />
      <path d="M 38 44 Q 34 40 34 44 Q 34 48 38 50 Q 42 48 42 44 Q 42 40 38 44 Z"
            fill={accent} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M 28 16 Q 30 12 28 8 M 38 16 Q 40 12 38 8 M 48 16 Q 50 12 48 8" {..._stroke({ strokeWidth: 1.6 })} />
    </svg>
  );
}

export function IconBook({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 12 18 Q 28 14 40 18 Q 52 14 68 18 L 68 60 Q 52 56 40 60 Q 28 56 12 60 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="40" y1="18" x2="40" y2="60" {..._stroke({ strokeWidth: 1.8 })} />
      <path d="M 18 26 L 34 24" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 18 32 L 34 30" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 46 24 L 62 26" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 46 30 L 62 32" {..._stroke({ strokeWidth: 1.4 })} />
      <circle cx="40" cy="42" r="3" fill={accent} stroke={INK} strokeWidth="1.4" />
    </svg>
  );
}

export function IconPencil({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 14 18 L 22 10 L 60 48 L 52 56 Z"
            fill={PALETTE.cream} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 52 56 L 60 48 L 64 52 L 56 60 Z"
            fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <line x1="56" y1="52" x2="60" y2="56" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 14 18 L 22 10 L 18 6 L 10 14 Z"
            fill={accent} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 56 60 L 64 52 L 70 70 Z"
            fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 62 62 L 70 70" {..._stroke({ strokeWidth: 1.6 })} />
    </svg>
  );
}

export function IconCalendar({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="12" y="20" width="56" height="48" rx="4" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <rect x="12" y="20" width="56" height="12" fill={accent} stroke={INK} strokeWidth="2.2" />
      <line x1="24" y1="14" x2="24" y2="28" {..._stroke({ strokeWidth: 2.4 })} />
      <line x1="56" y1="14" x2="56" y2="28" {..._stroke({ strokeWidth: 2.4 })} />
      <circle cx="26" cy="44" r="2.5" fill={INK} />
      <circle cx="40" cy="44" r="2.5" fill={accent} />
      <circle cx="54" cy="44" r="2.5" fill={INK} />
      <circle cx="26" cy="56" r="2.5" fill={INK} />
      <circle cx="40" cy="56" r="2.5" fill={INK} />
    </svg>
  );
}

export function IconClock({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="20" cy="22" r="6" fill={accent} stroke={INK} strokeWidth="2" />
      <circle cx="60" cy="22" r="6" fill={accent} stroke={INK} strokeWidth="2" />
      <rect x="36" y="14" width="8" height="6" rx="2" fill={accent} stroke={INK} strokeWidth="1.8" />
      <circle cx="40" cy="44" r="22" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <line x1="40" y1="26" x2="40" y2="30" {..._stroke({ strokeWidth: 1.8 })} />
      <line x1="40" y1="58" x2="40" y2="62" {..._stroke({ strokeWidth: 1.8 })} />
      <line x1="22" y1="44" x2="26" y2="44" {..._stroke({ strokeWidth: 1.8 })} />
      <line x1="54" y1="44" x2="58" y2="44" {..._stroke({ strokeWidth: 1.8 })} />
      <line x1="40" y1="44" x2="40" y2="32" {..._stroke({ strokeWidth: 2.4 })} />
      <line x1="40" y1="44" x2="50" y2="44" {..._stroke({ strokeWidth: 2.4, stroke: accent })} />
      <circle cx="40" cy="44" r="2" fill={INK} />
      <line x1="22" y1="64" x2="18" y2="70" {..._stroke({ strokeWidth: 2.2 })} />
      <line x1="58" y1="64" x2="62" y2="70" {..._stroke({ strokeWidth: 2.2 })} />
    </svg>
  );
}

export function IconKey({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="22" cy="40" r="14" fill={accent} stroke={INK} strokeWidth="2.2" />
      <circle cx="22" cy="40" r="5" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <rect x="36" y="36" width="32" height="8" fill={accent} stroke={INK} strokeWidth="2.2" />
      <rect x="58" y="44" width="6" height="8" fill={accent} stroke={INK} strokeWidth="2.2" />
      <rect x="48" y="44" width="6" height="6" fill={accent} stroke={INK} strokeWidth="2.2" />
    </svg>
  );
}

export function IconGift({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <rect x="14" y="32" width="52" height="32" rx="2" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <rect x="14" y="32" width="52" height="8" fill={accent} stroke={INK} strokeWidth="2.2" />
      <line x1="40" y1="32" x2="40" y2="64" {..._stroke({ strokeWidth: 2.4 })} />
      <path d="M 40 32 Q 28 22 28 14 Q 32 14 40 26 Q 48 14 52 14 Q 52 22 40 32 Z"
            fill={accent} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="22" r="3" fill="#fff" stroke={INK} strokeWidth="1.4" />
    </svg>
  );
}

export function IconBag({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 26 24 Q 26 14 40 14 Q 54 14 54 24" {..._stroke({ strokeWidth: 2.2 })} />
      <path d="M 14 28 L 18 66 Q 18 70 22 70 L 58 70 Q 62 70 62 66 L 66 28 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="28" cy="40" r="2.5" fill={INK} />
      <circle cx="52" cy="40" r="2.5" fill={INK} />
    </svg>
  );
}

/* ============== FOOD ============== */

export function IconOnigiri({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 14 L 68 60 L 12 60 Z" fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="20" y="48" width="40" height="12" fill={INK} />
      <ellipse cx="32" cy="36" rx="2.5" ry="3" fill={INK} />
      <ellipse cx="48" cy="36" rx="2.5" ry="3" fill={INK} />
      <circle cx="28" cy="44" r="3" fill={accent} opacity="0.55" />
      <circle cx="52" cy="44" r="3" fill={accent} opacity="0.55" />
      <path d="M 36 42 Q 40 45 44 42" {..._stroke({ strokeWidth: 1.6 })} />
    </svg>
  );
}

export function IconCake({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <line x1="40" y1="10" x2="40" y2="18" {..._stroke({ strokeWidth: 2.4 })} />
      <path d="M 40 6 Q 42 10 40 12 Q 38 10 40 6 Z" fill={accent} stroke={INK} strokeWidth="1.2" />
      <rect x="22" y="20" width="36" height="14" rx="2" fill={accent} stroke={INK} strokeWidth="2.2" />
      <path d="M 22 28 Q 28 34 34 28 Q 40 34 46 28 Q 52 34 58 28" {..._stroke({ strokeWidth: 2 })} />
      <rect x="14" y="34" width="52" height="28" rx="2" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <circle cx="24" cy="48" r="2" fill={accent} />
      <circle cx="40" cy="48" r="2" fill={accent} />
      <circle cx="56" cy="48" r="2" fill={accent} />
      <ellipse cx="40" cy="64" rx="32" ry="3" fill={INK} opacity="0.2" />
    </svg>
  );
}

export function IconRamen({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 28 22 Q 30 18 28 14 M 40 22 Q 42 18 40 14 M 52 22 Q 54 18 52 14"
            {..._stroke({ strokeWidth: 1.6 })} />
      <ellipse cx="40" cy="34" rx="30" ry="6" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <path d="M 10 34 Q 12 60 40 64 Q 68 60 70 34"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 16 50 Q 20 46 24 50 Q 28 54 32 50 Q 36 46 40 50 Q 44 54 48 50 Q 52 46 56 50 Q 60 54 64 50"
            {..._stroke({ strokeWidth: 1.4, opacity: 0.5, stroke: "#fff" })} />
      <path d="M 32 30 Q 32 24 40 24 Q 48 24 48 30 Z"
            fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <ellipse cx="40" cy="29" rx="3" ry="2" fill={PALETTE.cream} stroke={INK} strokeWidth="1.2" />
      <rect x="18" y="26" width="6" height="8" fill={INK} />
      <line x1="56" y1="14" x2="64" y2="32" {..._stroke({ strokeWidth: 2.2 })} />
      <line x1="62" y1="14" x2="68" y2="32" {..._stroke({ strokeWidth: 2.2 })} />
    </svg>
  );
}

export function IconCandy({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="16" fill={accent} stroke={INK} strokeWidth="2.2" />
      <path d="M 40 28 Q 50 30 50 40 Q 50 50 40 50 Q 32 50 32 42" {..._stroke({ strokeWidth: 2 })} />
      <path d="M 24 40 L 8 28 L 14 40 L 8 52 Z" fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 56 40 L 72 28 L 66 40 L 72 52 Z" fill="#fff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconIcecream({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="28" r="14" fill={accent} stroke={INK} strokeWidth="2.2" />
      <circle cx="35" cy="24" r="2" fill="#fff" opacity="0.6" />
      <path d="M 26 42 L 54 42 L 40 70 Z" fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="34" y1="48" x2="42" y2="56" {..._stroke({ strokeWidth: 1.4 })} />
      <line x1="46" y1="48" x2="38" y2="56" {..._stroke({ strokeWidth: 1.4 })} />
      <line x1="32" y1="42" x2="48" y2="42" {..._stroke({ strokeWidth: 1.6 })} />
    </svg>
  );
}

/* ============== WEATHER / NATURE ============== */

export function IconCloud({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 18 54 Q 8 54 10 44 Q 12 36 22 36 Q 22 24 34 24 Q 44 24 46 32 Q 56 30 60 38 Q 70 38 70 48 Q 70 56 60 56 L 22 56 Q 18 56 18 54 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="28" cy="46" r="3" fill={accent} opacity="0.55" />
      <circle cx="52" cy="46" r="3" fill={accent} opacity="0.55" />
      <ellipse cx="32" cy="42" rx="1.5" ry="2" fill={INK} />
      <ellipse cx="48" cy="42" rx="1.5" ry="2" fill={INK} />
    </svg>
  );
}

export function IconSun({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="14" fill={accent} stroke={INK} strokeWidth="2.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
        const r1 = 18, r2 = 26;
        const rad = (a * Math.PI) / 180;
        return (
          <line key={a}
            x1={40 + r1 * Math.cos(rad)} y1={40 + r1 * Math.sin(rad)}
            x2={40 + r2 * Math.cos(rad)} y2={40 + r2 * Math.sin(rad)}
            {..._stroke({ strokeWidth: 2.4 })} />
        );
      })}
      <ellipse cx="34" cy="38" rx="1.4" ry="2" fill={INK} />
      <ellipse cx="46" cy="38" rx="1.4" ry="2" fill={INK} />
      <path d="M 36 44 Q 40 47 44 44" {..._stroke({ strokeWidth: 1.6 })} />
    </svg>
  );
}

export function IconMoon({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 50 14 Q 30 14 24 34 Q 18 54 36 64 Q 56 64 60 50 Q 44 48 42 32 Q 42 22 50 14 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="48" cy="48" rx="1.4" ry="2" fill={INK} />
      <path d="M 46 54 Q 49 56 52 54" {..._stroke({ strokeWidth: 1.4 })} />
      <circle cx="22" cy="22" r="1.5" fill={INK} />
      <circle cx="64" cy="32" r="1.5" fill={INK} />
    </svg>
  );
}

export function IconRain({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 18 40 Q 8 40 10 30 Q 12 22 22 22 Q 22 12 34 12 Q 44 12 46 20 Q 56 18 60 26 Q 70 26 70 36 Q 70 42 60 42 L 22 42 Q 18 42 18 40 Z"
            fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 26 50 L 22 64" {..._stroke({ strokeWidth: 2.4, stroke: accent })} />
      <path d="M 40 50 L 36 64" {..._stroke({ strokeWidth: 2.4, stroke: accent })} />
      <path d="M 54 50 L 50 64" {..._stroke({ strokeWidth: 2.4, stroke: accent })} />
    </svg>
  );
}

export function IconFlower({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      {[0, 72, 144, 216, 288].map(a => {
        const rad = (a * Math.PI) / 180;
        const cx = 40 + 14 * Math.cos(rad - Math.PI / 2);
        const cy = 40 + 14 * Math.sin(rad - Math.PI / 2);
        return (
          <ellipse key={a} cx={cx} cy={cy}
                   rx="9" ry="11" fill={accent} stroke={INK} strokeWidth="1.8"
                   transform={`rotate(${a} ${cx} ${cy})`} />
        );
      })}
      <circle cx="40" cy="40" r="6" fill={PALETTE.cream} stroke={INK} strokeWidth="1.8" />
      <circle cx="40" cy="40" r="2" fill={INK} />
    </svg>
  );
}

export function IconLeaf({ size = 60 }: IconProps) {
  const green = "#a6d4bf";
  return (
    <svg {..._S(size)}>
      <path d="M 16 64 Q 14 28 40 14 Q 66 28 64 64 Q 50 56 40 56 Q 30 56 16 64 Z"
            fill={green} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 40 16 L 40 60" {..._stroke({ strokeWidth: 1.6 })} />
      <path d="M 40 28 L 28 36 M 40 36 L 28 44 M 40 44 L 28 52" {..._stroke({ strokeWidth: 1.4 })} />
      <path d="M 40 28 L 52 36 M 40 36 L 52 44 M 40 44 L 52 52" {..._stroke({ strokeWidth: 1.4 })} />
    </svg>
  );
}

export function IconSparkle({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 12 Q 42 32 56 36 Q 42 40 40 60 Q 38 40 24 36 Q 38 32 40 12 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 64 18 Q 65 26 70 28 Q 65 30 64 38 Q 63 30 58 28 Q 63 26 64 18 Z"
            fill={accent} stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M 16 50 Q 17 56 22 58 Q 17 60 16 66 Q 15 60 10 58 Q 15 56 16 50 Z"
            fill={accent} stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/* ============== UI / MISC ============== */

export function IconSearch({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="34" cy="34" r="20" fill="#fff" stroke={INK} strokeWidth="2.4" />
      <circle cx="34" cy="34" r="14" fill={accent} opacity="0.2" />
      <line x1="49" y1="49" x2="68" y2="68" {..._stroke({ strokeWidth: 4, stroke: accent })} />
      <line x1="49" y1="49" x2="68" y2="68" {..._stroke({ strokeWidth: 4 })} />
    </svg>
  );
}

export function IconSettings({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
        <rect key={a} x="36" y="6" width="8" height="14" rx="2" fill={accent} stroke={INK} strokeWidth="1.6"
              transform={`rotate(${a} 40 40)`} />
      ))}
      <circle cx="40" cy="40" r="16" fill="#fff" stroke={INK} strokeWidth="2.4" />
      <circle cx="40" cy="40" r="6" fill={accent} stroke={INK} strokeWidth="1.6" />
    </svg>
  );
}

export function IconCheck({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="28" fill={accent} stroke={INK} strokeWidth="2.2" />
      <path d="M 26 40 L 36 50 L 56 30" {..._stroke({ strokeWidth: 4, stroke: "#fff" })} />
      <path d="M 26 40 L 36 50 L 56 30" {..._stroke({ strokeWidth: 2.2 })} />
    </svg>
  );
}

export function IconArrow({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="40" r="28" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <line x1="22" y1="40" x2="54" y2="40" {..._stroke({ strokeWidth: 3, stroke: accent })} />
      <path d="M 46 30 L 56 40 L 46 50" {..._stroke({ strokeWidth: 3, stroke: accent })} />
    </svg>
  );
}

export function IconUser({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <circle cx="40" cy="28" r="12" fill="#fff" stroke={INK} strokeWidth="2.2" />
      <circle cx="32" cy="30" r="2" fill={accent} opacity="0.55" />
      <circle cx="48" cy="30" r="2" fill={accent} opacity="0.55" />
      <ellipse cx="36" cy="27" rx="1.4" ry="2" fill={INK} />
      <ellipse cx="44" cy="27" rx="1.4" ry="2" fill={INK} />
      <path d="M 14 68 Q 14 46 40 46 Q 66 46 66 68 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 34 46 L 40 54 L 46 46" {..._stroke({ strokeWidth: 1.8 })} />
    </svg>
  );
}

export function IconCrown({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 12 60 L 14 28 L 28 42 L 40 22 L 52 42 L 66 28 L 68 60 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="12" y="58" width="56" height="6" fill={PALETTE.cream} stroke={INK} strokeWidth="2" />
      <circle cx="14" cy="28" r="3" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <circle cx="40" cy="22" r="3" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <circle cx="66" cy="28" r="3" fill="#fff" stroke={INK} strokeWidth="1.4" />
    </svg>
  );
}

export function IconRibbon({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <path d="M 40 38 L 18 22 Q 12 24 14 32 Q 16 38 28 38 Q 16 38 14 44 Q 12 52 18 54 L 40 38 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 40 38 L 62 22 Q 68 24 66 32 Q 64 38 52 38 Q 64 38 66 44 Q 68 52 62 54 L 40 38 Z"
            fill={accent} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="40" cy="38" r="6" fill={PALETTE.cream} stroke={INK} strokeWidth="1.8" />
      <path d="M 36 44 L 30 66 L 38 60 Z" fill={accent} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 44 44 L 50 66 L 42 60 Z" fill={accent} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBalloon({ size = 60, accent = PALETTE.coral }: IconProps) {
  return (
    <svg {..._S(size)}>
      <ellipse cx="40" cy="32" rx="18" ry="22" fill={accent} stroke={INK} strokeWidth="2.2" />
      <ellipse cx="32" cy="22" rx="3" ry="6" fill="#fff" opacity="0.5" />
      <path d="M 36 54 L 44 54 L 40 60 Z" fill={accent} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M 40 60 Q 36 66 42 70" {..._stroke({ strokeWidth: 1.8 })} />
    </svg>
  );
}

// ═══ Catalog metadata ═══

export type IconEntry = {
  Comp: React.ComponentType<IconProps>;
  name: string;
  romaji: string;
};

export type IconSection = {
  title: string;
  subtitle: string;
  items: IconEntry[];
};

export const SECTIONS: IconSection[] = [
  {
    title: "はいしん・げーむ",
    subtitle: "Streaming & games",
    items: [
      { Comp: IconController, name: "コントローラー", romaji: "controller" },
      { Comp: IconArcade,     name: "アーケード",     romaji: "arcade" },
      { Comp: IconDisc,       name: "ディスク",       romaji: "disc" },
      { Comp: IconVHS,        name: "VHS",           romaji: "vhs" },
      { Comp: IconTV,         name: "テレビ",         romaji: "tv" },
      { Comp: IconMic,        name: "マイク",         romaji: "mic" },
      { Comp: IconHeadphone,  name: "ヘッドホン",     romaji: "headphone" },
      { Comp: IconPlay,       name: "さいせい",       romaji: "play" },
      { Comp: IconLive,       name: "ライブ",         romaji: "live" },
      { Comp: IconTrophy,     name: "トロフィー",     romaji: "trophy" },
    ],
  },
  {
    title: "おしゃべり・つうち",
    subtitle: "Communication",
    items: [
      { Comp: IconBubble, name: "ふきだし", romaji: "bubble" },
      { Comp: IconLetter, name: "おてがみ", romaji: "letter" },
      { Comp: IconHeart,  name: "ハート",   romaji: "heart" },
      { Comp: IconStar,   name: "ほし",     romaji: "star" },
      { Comp: IconBell,   name: "ベル",     romaji: "bell" },
      { Comp: IconPin,    name: "ピン",     romaji: "pin" },
      { Comp: IconTag,    name: "タグ",     romaji: "tag" },
      { Comp: IconCamera, name: "カメラ",   romaji: "camera" },
      { Comp: IconLink,   name: "リンク",   romaji: "link" },
      { Comp: IconShare,  name: "シェア",   romaji: "share" },
    ],
  },
  {
    title: "おうち・にちじょう",
    subtitle: "Daily life",
    items: [
      { Comp: IconHouse,    name: "おうち",     romaji: "house" },
      { Comp: IconMug,      name: "マグカップ", romaji: "mug" },
      { Comp: IconBook,     name: "ほん",       romaji: "book" },
      { Comp: IconPencil,   name: "えんぴつ",   romaji: "pencil" },
      { Comp: IconCalendar, name: "カレンダー", romaji: "calendar" },
      { Comp: IconClock,    name: "とけい",     romaji: "clock" },
      { Comp: IconKey,      name: "かぎ",       romaji: "key" },
      { Comp: IconGift,     name: "プレゼント", romaji: "gift" },
      { Comp: IconBag,      name: "かばん",     romaji: "bag" },
    ],
  },
  {
    title: "たべもの",
    subtitle: "Food",
    items: [
      { Comp: IconOnigiri,  name: "おにぎり", romaji: "onigiri" },
      { Comp: IconCake,     name: "ケーキ",   romaji: "cake" },
      { Comp: IconRamen,    name: "らーめん", romaji: "ramen" },
      { Comp: IconCandy,    name: "あめ",     romaji: "candy" },
      { Comp: IconIcecream, name: "アイス",   romaji: "icecream" },
    ],
  },
  {
    title: "てんき・しぜん",
    subtitle: "Weather & nature",
    items: [
      { Comp: IconCloud,   name: "くも",     romaji: "cloud" },
      { Comp: IconSun,     name: "おひさま", romaji: "sun" },
      { Comp: IconMoon,    name: "つき",     romaji: "moon" },
      { Comp: IconRain,    name: "あめ",     romaji: "rain" },
      { Comp: IconFlower,  name: "おはな",   romaji: "flower" },
      { Comp: IconLeaf,    name: "はっぱ",   romaji: "leaf" },
      { Comp: IconSparkle, name: "きらきら", romaji: "sparkle" },
    ],
  },
  {
    title: "UI・かざり",
    subtitle: "UI & decorative",
    items: [
      { Comp: IconSearch,   name: "けんさく", romaji: "search" },
      { Comp: IconSettings, name: "せってい", romaji: "settings" },
      { Comp: IconCheck,    name: "チェック", romaji: "check" },
      { Comp: IconArrow,    name: "やじるし", romaji: "arrow" },
      { Comp: IconUser,     name: "ユーザー", romaji: "user" },
      { Comp: IconCrown,    name: "おうかん", romaji: "crown" },
      { Comp: IconRibbon,   name: "リボン",   romaji: "ribbon" },
      { Comp: IconBalloon,  name: "ふうせん", romaji: "balloon" },
    ],
  },
];
