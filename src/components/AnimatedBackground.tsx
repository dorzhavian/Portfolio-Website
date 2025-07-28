"use client";

import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const AnimatedBackground = ({ 
  intensity = 'medium', 
  className = '' 
}: AnimatedBackgroundProps) => {
  
  const configs = {
    light: {
      particles: 40,
      lines: 8,
      orbs: 12,
      opacity: 0.3
    },
    medium: {
      particles: 80,
      lines: 15,
      orbs: 20,
      opacity: 0.4
    },
    heavy: {
      particles: 120,
      lines: 25,
      orbs: 30,
      opacity: 0.5
    }
  };

  const config = configs[intensity];

  const particles = Array.from({ length: config.particles }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 1 + Math.random() * 3,
    opacity: (config.opacity * 0.5) + Math.random() * (config.opacity * 0.5)
  }));

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection lines */}
      {Array.from({ length: config.lines }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${50 + Math.random() * 100}px`,
            height: '1px',
            transformOrigin: 'center',
            rotate: `${Math.random() * 360}deg`,
            opacity: config.opacity * 0.8,
          }}
          animate={{
            opacity: [0, config.opacity * 0.8, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing orbs */}
      {Array.from({ length: config.orbs }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            background: `radial-gradient(circle, ${
              ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)]
            }, transparent)`,
            boxShadow: `0 0 ${10 + Math.random() * 20}px ${
              ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)]
            }`,
            opacity: config.opacity,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [config.opacity * 0.5, config.opacity, config.opacity * 0.5],
            x: [-10, 10, -10],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;