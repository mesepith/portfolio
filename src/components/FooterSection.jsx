import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  useEffect(() => {
    // Set initial state to visible to prevent flash of hidden content
    gsap.set(".footer-section", { opacity: 1 });
    
    gsap.fromTo(
      ".footer-content",
      { 
        opacity: 0, 
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2>Let's Collaborate!</h2>
        <div className="footer-links">
          <a href="mailto:your-email@example.com">Contact Me</a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
