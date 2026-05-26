"use client";

import { useRef, useState, useEffect } from "react";

export function ScaledFit({
  width,
  height,
  maxScale = 1,
  children,
}: {
  width: number;
  height: number;
  maxScale?: number;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(maxScale);

  useEffect(() => {
    if (!wrapRef.current) return;
    const update = () => {
      const w = wrapRef.current!.clientWidth;
      setScale(Math.min(maxScale, w / width));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [width, maxScale]);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        height: Math.round(height * scale),
        position: "relative",
      }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
