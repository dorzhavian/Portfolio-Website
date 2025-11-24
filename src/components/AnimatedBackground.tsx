"use client";

import { motion } from "framer-motion";
import React, { useMemo, useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  intensity?: "light" | "medium" | "heavy";
  className?: string;
}

const AnimatedBackground = React.memo(({
  intensity = "medium",
  className = "",
}: AnimatedBackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const configs = {
    light: { particles: 40, lines: 6, orbs: 8, opacity: 0.25 },
    medium: { particles: 80, lines: 12, orbs: 14, opacity: 0.35 },
    heavy: { particles: 140, lines: 20, orbs: 22, opacity: 0.45 },
  };

  const config = configs[intensity];

  const particles = useMemo(
    () => {
      if (!mounted) return [];
      return Array.from({ length: config.particles }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
        size: 1 + Math.random() * 2,
        opacity: (config.opacity * 0.5) + Math.random() * (config.opacity * 0.5),
        blur: Math.random() > 0.7,
      }));
    },
    [config.particles, config.opacity, mounted]
  );

  const lines = useMemo(
    () => {
      if (!mounted) return [];
      return Array.from({ length: config.lines }, (_, i) => ({
        id: i,
        left: Math.random() * 90,
        top: Math.random() * 90,
        width: 40 + Math.random() * 120,
        rotate: Math.random() * 360,
        delay: Math.random() * 2,
      }));
    },
    [config.lines, mounted]
  );

  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"];

  const orbs = useMemo(
    () => {
      if (!mounted) return [];
      return Array.from({ length: config.orbs }, (_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: 4 + Math.random() * 10,
          color,
          shadow: `0 0 ${10 + Math.random() * 20}px ${color}`,
          delay: Math.random() * 2,
        };
      });
    },
    [config.orbs, mounted]
  );

  if (!mounted) return null;

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            filter: p.blur ? "blur(1px)" : "none",
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: Math.random() > 0.5 ? "easeInOut" : "easeIn",
          }}
        />
      ))}

      {/* Lines */}
      {lines.map((l) => (
        <motion.div
          key={`line-${l.id}`}
          className="absolute bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            width: `${l.width}px`,
            height: "1px",
            transformOrigin: "center",
            rotate: `${l.rotate}deg`,
            opacity: config.opacity * 0.7,
          }}
          animate={{
            opacity: [0, config.opacity * 0.7, 0],
            scaleX: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: l.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbs */}
      {orbs.map((o) => (
        <motion.div
          key={`orb-${o.id}`}
          className="absolute rounded-full"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            width: `${o.size}px`,
            height: `${o.size}px`,
            background: `radial-gradient(circle, ${o.color}, transparent)`,
            boxShadow: o.shadow,
            opacity: config.opacity,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [config.opacity * 0.5, config.opacity, config.opacity * 0.5],
            x: [-8, 8, -8],
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: o.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default AnimatedBackground;
