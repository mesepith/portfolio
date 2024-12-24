import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AccomplishmentsSection = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".accomplishment-word");

    gsap.fromTo(
      words,
      { rotation: 360, x: (i) => 100 * Math.cos((i / words.length) * 2 * Math.PI), y: (i) => 100 * Math.sin((i / words.length) * 2 * Math.PI) },
      {
        rotation: 0,
        x: 0,
        y: 0,
        duration: 1.5,
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
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
