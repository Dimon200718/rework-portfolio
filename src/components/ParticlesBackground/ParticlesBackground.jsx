import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/particles.js"; 
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#95eef5",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "724px",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
