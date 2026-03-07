import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';

const Services = () => {

  const services = [
    {
      icon: <FaServer />,
      title: 'REST API Development',
      description:
        'Design and develop secure, scalable, and high-performance REST APIs using Django REST Framework for web, mobile, and SaaS platforms.'
    },
    {
      icon: <FaCode />,
      title: 'Custom Software Development',
      description:
        'We build custom business software including ERP, CRM, and automation systems tailored to your business workflow.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Backend',
      description:
        'Robust backend architecture for Android and iOS applications including authentication, APIs, and real-time services.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design & Optimization',
      description:
        'Professional database architecture using PostgreSQL and modern data modeling techniques for performance and scalability.'
    },
    {
      icon: <FaCogs />,
      title: 'System Integration',
      description:
        'Integration with third-party APIs such as payment gateways, SMS services, cloud services, and enterprise tools.'
    },
    {
      icon: <FaRocket />,
      title: 'Scalable System Architecture',
      description:
        'Build high-performance scalable systems using microservices, containerization, and modern DevOps practices.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            We provide scalable backend systems, modern APIs, and enterprise software solutions for businesses.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

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