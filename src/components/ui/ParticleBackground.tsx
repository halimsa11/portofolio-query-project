'use client';
import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    
    return {
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#66bb6a",
        },
        links: {
          color: "#66bb6a",
          distance: 120,
          enable: !isMobile,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.8,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: {
            default: "bounce" as const,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 15 : 60,
        },
        opacity: {
          value: { min: 0.15, max: 0.3 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (!init) return null;

  return (
    <div className={`absolute inset-0 pointer-events-auto z-0 ${className}`}>
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}