import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechExpertiseSection = () => {
  useEffect(() => {
    const rows = document.querySelectorAll(".tech-row");
    rows.forEach((row) => {
      const left = row.querySelector(".tech-left");
      const right = row.querySelector(".tech-right");

      gsap.fromTo(
        left,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        right,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="tech-expertise-section">
      <h2>Technical Expertise</h2>
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
    </section>
  );
};

export default TechExpertiseSection;
