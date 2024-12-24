import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".about-image");
    
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { 
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          y: 50
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          }
        }
      );
    });
  }, []);

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a seasoned software engineer with a decade of experience, specializing in financial technology. I've mastered the art of creating software that simplifies the home loan process, making it as easy as a click of a button.
      </p>
      <div className="about-images-container">
        <img src="/images/about-1.jpg" alt="Coding" className="about-image" />
        <img src="/images/about-2.jpg" alt="Team collaboration" className="about-image" />
        <img src="/images/about-3.jpg" alt="Technical planning" className="about-image" />
        <img src="/images/about-4.jpg" alt="Project success" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
