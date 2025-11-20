import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2024 Dot Com Infoway. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;