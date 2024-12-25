import React, { useEffect } from "react";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50, boxShadow: "0 0 20px rgba(255, 255, 255, 0)" },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
        ease: "power3.out",
        onComplete: () => {
          gsap.to(".hero-title", {
            boxShadow: "0 0 20px rgba(255, 255, 255, 0)",
            duration: 1.5,
            ease: "power3.out",
          });
        },
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to My Digital Portfolio</h1>
      <h2 className="hero-subtitle">
        Seasoned Software Engineer | FinTech Expert | Innovator
      </h2>
    </section>
  );
};

export default HeroSection;
