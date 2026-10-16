import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ density = 42 }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (active) setReady(true);
    });
    return () => { active = false; };
  }, []);

  if (!ready) return <div className="particle-fallback" aria-hidden="true" />;

  return (
    <Particles
      id="portfolio-particles"
      className="particles-layer"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 45,
        detectRetina: true,
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: density, density: { enable: true, area: 950 } },
          color: { value: ["#9b7cff", "#5de4ff", "#c5b4ff"] },
          links: { enable: true, distance: 145, color: "#7664bf", opacity: 0.16, width: 1 },
          move: { enable: true, speed: 0.45, direction: "none", random: true, straight: false, outModes: { default: "out" } },
          opacity: { value: { min: 0.12, max: 0.45 } },
          size: { value: { min: 1, max: 2.5 } }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" }, resize: { enable: true } },
          modes: { grab: { distance: 150, links: { opacity: 0.3 } }, push: { quantity: 2 } }
        },
        responsive: [
          { maxWidth: 700, options: { particles: { number: { value: 22 }, links: { enable: false } } } }
        ]
      }}
    />
  );
}
