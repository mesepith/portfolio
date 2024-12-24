import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechExpertiseSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/tech-1.jpg",
    "/images/tech-2.png",
    "/images/tech-3.png",
    "/images/tech-4.png"
  ];

  useEffect(() => {
    // Timeline for image transitions and content reveal
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tech-expertise-section",
        start: "top top",
        end: "+=200%", // Reduced from 300% to decrease white space
        pin: true,
        pinSpacing: true,
        scrub: 1,
      }
    });

    // Add image transitions
    images.forEach((_, index) => {
      mainTl.to({}, {
        duration: 1,
        onStart: () => setCurrentImage(index),
        onReverseComplete: () => setCurrentImage(index > 0 ? index - 1 : 0)
      });
    });

    // Add content reveal after images
    mainTl.to(".tech-rows-container", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    // Individual row animations
    const rows = document.querySelectorAll(".tech-row");
    rows.forEach((row, index) => {
      gsap.fromTo(
        row,
        { 
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="tech-expertise-section">
      <h2>Technical Expertise</h2>
      <div className="tech-image-wrapper">
        <img
          src={images[currentImage]}
          alt={`Technical expertise ${currentImage + 1}`}
          className="tech-image"
        />
      </div>
      <div className="tech-rows-container">
        <div className="tech-row">
          <div className="tech-left">APIs & Verification Systems:</div>
          <div className="tech-right">CIBIL, NSDL Pan, Aadhar, Bank Statement Reader</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">Technologies:</div>
          <div className="tech-right">Elastic Search, Kibana, Logstash, Kafka</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">DevOps:</div>
          <div className="tech-right">Azure, AWS, CICD Pipeline</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">Languages:</div>
          <div className="tech-right">PHP, Python, Node.js</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">Databases:</div>
          <div className="tech-right">MySQL, Mongo, Redis, Oracle</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">JavaScript Libraries:</div>
          <div className="tech-right">ReactJs, AngularJs, VUE JS, JQuery</div>
        </div>
        <div className="tech-row">
          <div className="tech-left">Web Optimization:</div>
          <div className="tech-right">Google AMP, PWA, Grunt, Service Worker</div>
        </div>
      </div>
    </section>
  );
};

export default TechExpertiseSection;
