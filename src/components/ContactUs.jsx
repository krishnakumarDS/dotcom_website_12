import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.section
      id="contact-us"
      className="contact-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Us</h2>
      <div className="contact-form">
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;