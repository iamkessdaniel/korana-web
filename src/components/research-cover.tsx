import s from "./research-cover.module.css";

type Props = {
  gradient: string;
  accent: string;
  variant: "rings" | "nodes" | "bars";
  mode?: "card" | "banner";
};

function RingsShapes({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
      <circle cx="280" cy="110" r="90" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <circle cx="280" cy="110" r="60" fill="none" stroke={accent} strokeWidth="1" opacity="0.4" />
      <circle cx="280" cy="110" r="30" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.3" />
      <circle cx="280" cy="110" r="6" fill={accent} opacity="0.5" />
      <circle cx="120" cy="60" r="40" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.2" />
      <circle cx="120" cy="60" r="20" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.15" />
    </svg>
  );
}

function NodesShapes({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
      {/* nodes */}
      <circle cx="200" cy="112" r="5" fill={accent} opacity="0.6" />
      <circle cx="120" cy="70" r="4" fill={accent} opacity="0.5" />
      <circle cx="300" cy="80" r="4" fill={accent} opacity="0.5" />
      <circle cx="160" cy="160" r="3.5" fill={accent} opacity="0.4" />
      <circle cx="280" cy="155" r="3.5" fill={accent} opacity="0.4" />
      <circle cx="340" cy="130" r="3" fill={accent} opacity="0.3" />
      <circle cx="80" cy="140" r="3" fill={accent} opacity="0.3" />
      {/* lines */}
      <line x1="200" y1="112" x2="120" y2="70" stroke={accent} strokeWidth="0.8" opacity="0.3" />
      <line x1="200" y1="112" x2="300" y2="80" stroke={accent} strokeWidth="0.8" opacity="0.3" />
      <line x1="200" y1="112" x2="160" y2="160" stroke={accent} strokeWidth="0.8" opacity="0.3" />
      <line x1="200" y1="112" x2="280" y2="155" stroke={accent} strokeWidth="0.8" opacity="0.3" />
      <line x1="120" y1="70" x2="80" y2="140" stroke={accent} strokeWidth="0.5" opacity="0.2" />
      <line x1="300" y1="80" x2="340" y2="130" stroke={accent} strokeWidth="0.5" opacity="0.2" />
      <line x1="160" y1="160" x2="280" y2="155" stroke={accent} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

function BarsShapes({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
      <rect x="100" y="120" width="28" height="70" rx="4" fill={accent} opacity="0.35" />
      <rect x="140" y="90" width="28" height="100" rx="4" fill={accent} opacity="0.4" />
      <rect x="180" y="60" width="28" height="130" rx="4" fill={accent} opacity="0.5" />
      <rect x="220" y="100" width="28" height="90" rx="4" fill={accent} opacity="0.35" />
      <rect x="260" y="75" width="28" height="115" rx="4" fill={accent} opacity="0.45" />
      <rect x="300" y="110" width="28" height="80" rx="4" fill={accent} opacity="0.3" />
      {/* accent dots */}
      <circle cx="114" cy="112" r="3" fill={accent} opacity="0.3" />
      <circle cx="154" cy="82" r="3" fill={accent} opacity="0.3" />
      <circle cx="194" cy="52" r="3" fill={accent} opacity="0.3" />
      <circle cx="234" cy="92" r="3" fill={accent} opacity="0.3" />
      <circle cx="274" cy="67" r="3" fill={accent} opacity="0.3" />
      <circle cx="314" cy="102" r="3" fill={accent} opacity="0.3" />
    </svg>
  );
}

const SHAPE_MAP = { rings: RingsShapes, nodes: NodesShapes, bars: BarsShapes };

export function ResearchCover({ gradient, accent, variant, mode = "card" }: Props) {
  const Shapes = SHAPE_MAP[variant];
  return (
    <div
      className={`${s.cover} ${mode === "banner" ? s.banner : s.card}`}
      style={{ "--gradient": gradient } as React.CSSProperties}
    >
      <div className={s.bg} />
      <div className={s.shapes}>
        <Shapes accent={accent} />
      </div>
      <div className={s.grain} />
    </div>
  );
}
