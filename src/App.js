import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechExpertiseSection from "./components/TechExpertiseSection";
import AccomplishmentsSection from "./components/AccomplishmentsSection";
import MissionSection from "./components/MissionSection";
import FooterSection from "./components/FooterSection";
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.to("body", { opacity: 1, duration: 1 });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechExpertiseSection />
      <AccomplishmentsSection />
      <MissionSection />
      <FooterSection />
    </div>
  );
};

export default App;
