import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <div className="image-placeholder">
              🏢
            </div>
          </div>
          <div className="about-content">
            <h2>About LeadTech</h2>
            <h3>Bangladesh's Premier Software Development Company</h3>
            <p>Founded in 2020, LeadTech has quickly become one of Bangladesh's most trusted software development partners. We combine global expertise with local insights to deliver exceptional digital solutions.</p>
            <p>Our team of 50+ skilled professionals works tirelessly to help businesses leverage technology for growth and innovation.</p>
            <div className="stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Team Members</p>
              </div>
              <div className="stat">
                <h4>100+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;