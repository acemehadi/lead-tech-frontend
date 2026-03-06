import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h4>Welcome to LeadTech</h4>
          <h1>Leading Software Innovation in Bangladesh</h1>
          <p>We deliver cutting-edge software solutions that transform businesses and drive digital growth across Bangladesh and beyond.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;