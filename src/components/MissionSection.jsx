import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mission-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="mission-section">
      <h2>Mission</h2>
      <p className="mission-text">
        Driven by innovation and excellence, I’m dedicated to building secure, scalable, and future-ready financial solutions. Let’s connect and shape the digital future together.
      </p>
    </section>
  );
};

export default MissionSection;
