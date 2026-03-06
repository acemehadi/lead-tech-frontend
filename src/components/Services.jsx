import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaRobot, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems that learn and adapt to your business needs.'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive software solutions tailored for Bangladeshi businesses</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;