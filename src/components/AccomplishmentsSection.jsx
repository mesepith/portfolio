import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AccomplishmentsSection = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".accomplishment-word");

    gsap.fromTo(
      words,
      { opacity: 0, x: (i) => 100 * Math.cos((i / words.length) * 2 * Math.PI), y: (i) => 100 * Math.sin((i / words.length) * 2 * Math.PI) },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0, // Ensure the words are not rotated
        duration: 1.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".accomplishments-section",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="accomplishments-section">
      <h2>Accomplishments</h2>
      <div className="accomplishments-container">
        <span className="accomplishment-word">ChatGPT ADA</span>
        <span className="accomplishment-word">Solr Search</span>
        <span className="accomplishment-word">Git</span>
        <span className="accomplishment-word">Bitbucket</span>
        <span className="accomplishment-word">Jira</span>
        <span className="accomplishment-word">Artificial Intelligent</span>
        <span className="accomplishment-word">Node JS</span>
        <span className="accomplishment-word">IOS App</span>
        <span className="accomplishment-word">Android App</span>
        <span className="accomplishment-word">React JS</span>
        <span className="accomplishment-word">React Native</span>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
