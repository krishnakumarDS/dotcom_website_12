import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create stunning and functional websites tailored to your needs.',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our expert digital marketing strategies.',
    },
    {
      id: 3,
      title: 'App Development',
      description: 'We build high-quality mobile apps for iOS and Android platforms.',
    },
    {
      id: 4,
      title: 'AI Services',
      description: 'Leverage the power of AI with our advanced AI solutions.',
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud solutions for your business needs.',
    },
  ];

  return (
    <motion.section
      id="services"
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;