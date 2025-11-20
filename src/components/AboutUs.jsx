import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      className="about-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Dot Com Infoway is a leading technology company providing innovative
          solutions to businesses worldwide. We specialize in web development,
          digital marketing, app development, and AI services.
        </p>
        <p>
          Our mission is to empower our clients with cutting-edge technology and
          exceptional service.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;