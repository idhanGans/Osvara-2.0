import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const layers = [
  { count: 18, min: 6, max: 16, speedMin: 9, speedMax: 16, blur: 1.6 },
  { count: 12, min: 10, max: 24, speedMin: 11, speedMax: 20, blur: 1.1 },
  { count: 6, min: 18, max: 36, speedMin: 18, speedMax: 30, blur: 0.6 },
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const AnimatedBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const sparklesCounterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    let raf = 0;
    const handlePointer = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        node.style.setProperty("--parallaxX", x.toFixed(4));
        node.style.setProperty("--parallaxY", y.toFixed(4));
      });
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const main = sparklesRef.current;
      const counter = sparklesCounterRef.current;

      if (main) {
        gsap.set(main, { "--panX": "-2%", "--panY": "1.5%" });
        gsap.to(main, {
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          "--panX": "2%",
          "--panY": "-2.5%",
        });
      }

      if (counter) {
        gsap.set(counter, {
          "--panX2": "3%",
          "--panY2": "-2%",
          "--panRot": "0deg",
        });
        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
            defaults: { ease: "sine.inOut" },
          })
          .to(counter, { duration: 12, "--panX2": "-3%", "--panY2": "2%" })
          .to(counter, { duration: 12, "--panX2": "1.5%", "--panY2": "-2.8%" });

        gsap.to(counter, {
          duration: 32,
          repeat: -1,
          ease: "none",
          "--panRot": "360deg",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

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
      const drift = `${rand(-12, 12).toFixed(2)}%`;
      const tilt = `${rand(-8, 8).toFixed(2)}deg`;
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
            ["--drift" as any]: drift,
            ["--tilt" as any]: tilt,
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
    <div ref={rootRef} aria-hidden className="animated-bg-root">
      <div className="animated-bg-gradient" />
      <div className="animated-bg-vignette" />
      <div ref={sparklesRef} className="animated-bg-sparkles">
        {layerElems}
      </div>
      <div ref={sparklesCounterRef} className="animated-bg-sparkles counter">
        {layerElems}
      </div>
      <div className="animated-bg-glow" />
    </div>
  );
};

export default AnimatedBackground;
