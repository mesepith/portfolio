import React, { useEffect } from "react";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { GoDatabase } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate main content
    tl.fromTo(".hero-content", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    // Animate decorative elements
    .fromTo(".decorative-element", 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 0.1, 
        duration: 1, 
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)"
      },
      "-=0.5"
    )
    .fromTo(".hero-social-links a",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(".scroll-indicator",
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.5"
    );

    // Floating animation for decorative elements
    gsap.to(".decorative-element", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "none",
      stagger: {
        amount: 2,
        from: "random"
      }
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Your Name</span>
          <span className="role">Software Engineer</span>
        </h1>
        <p className="hero-description">
          Crafting digital experiences through elegant code and innovative solutions.
        </p>
        <div className="hero-social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-container">
        <BiCodeAlt className="decorative-element code-icon" />
        <AiOutlineCloudServer className="decorative-element server-icon" />
        <GoDatabase className="decorative-element database-icon" />
        <div className="decorative-element circle"></div>
        <div className="decorative-element square"></div>
        <div className="decorative-element triangle"></div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
