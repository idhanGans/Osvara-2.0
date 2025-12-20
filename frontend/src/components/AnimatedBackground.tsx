import React from "react";

const layers = [
  { count: 20, min: 6, max: 18, speedMin: 8, speedMax: 16, blur: 1.6 },
  { count: 10, min: 10, max: 28, speedMin: 12, speedMax: 24, blur: 1.2 },
  { count: 5, min: 18, max: 42, speedMin: 20, speedMax: 40, blur: 0.6 },
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const AnimatedBackground: React.FC = () => {
  const layerElems = layers.map((L, li) => {
    const items = Array.from({ length: L.count }).map((_, i) => {
      const size = Math.round(rand(L.min, L.max));
      const left = `${rand(-10, 110).toFixed(2)}%`;
      // bias y towards bottom so more density there
      const top = `${(80 + rand(-30, 20)).toFixed(2)}%`;
      const duration = `${rand(L.speedMin, L.speedMax).toFixed(2)}s`;
      const delay = `${rand(0, 6).toFixed(2)}s`;
      const opacity = rand(0.45, 1).toFixed(2);
      const rotate = `${rand(0, 360).toFixed(2)}deg`;
      return (
        <span
          key={`l${li}-s${i}`}
          className={`sparkle layer-${li}`}
          style={{
            width: size,
            height: size,
            left,
            top,
            animationDuration: duration,
            animationDelay: delay,
            opacity: Number(opacity),
            transform: `translate(-50%, -50%) rotate(${rotate})`,
          }}
        />
      );
    });
    return (
      <div className={`animated-bg-layer layer-${li}`} key={`layer-${li}`}>
        {items}
      </div>
    );
  });

  return (
    <div aria-hidden className="animated-bg-root">
      <div className="animated-bg-gradient" />
      <div className="animated-bg-vignette" />
      <div className="animated-bg-sparkles">{layerElems}</div>
      <div className="animated-bg-glow" />
    </div>
  );
};

export default AnimatedBackground;
