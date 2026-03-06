import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Banking System',
      category: 'Fintech',
      image: '🏦'
    },
    {
      title: 'E-commerce Platform',
      category: 'Retail',
      image: '🛒'
    },
    {
      title: 'Healthcare App',
      category: 'HealthTech',
      image: '🏥'
    },
    {
      title: 'School Management',
      category: 'Education',
      image: '📚'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Success stories from our valued clients</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;