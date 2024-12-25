import React from "react";

const MissionSection = () => {
  const text = "Driven by innovation and excellence, I'm dedicated to building secure, scalable, and future-ready financial solutions. Let's connect and shape the digital future together.";

  return (
    <section className="mission-section">
      <h2>Mission</h2>
      <div className="mission-container">
        <p className="mission-text">
          {text}
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
