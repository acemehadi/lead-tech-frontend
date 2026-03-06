import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaServer />,
      title: 'Custom REST API Development',
      description: 'Scalable and secure REST APIs for mobile apps, SaaS platforms, and enterprise systems using Django REST Framework.'
    },
    {
      icon: <FaCode />,
      title: 'Custom Software Development',
      description: 'Tailored business software solutions such as ERP, CRM, and management systems built with Django.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Backend',
      description: 'Powerful backend APIs designed specifically for Android and iOS mobile applications.'
    },
    {
      icon: <FaDatabase />,
      title: 'Business Management Software',
      description: 'Ready-made systems like Inventory, POS, School Management, and Business CRM software.'
    },
    {
      icon: <FaCogs />,
      title: 'API Integration',
      description: 'Integrate payment gateways, third-party services, and automation APIs into your system.'
    },
    {
      icon: <FaRocket />,
      title: 'Scalable System Architecture',
      description: 'Design and build high-performance backend systems ready to scale for thousands of users.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Scalable backend and software solutions for modern businesses</p>
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