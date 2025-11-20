import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Corp',
      testimonial:
        'Dot Com Infoway has been an invaluable partner in our technology journey. Their expertise and dedication are unmatched.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Ltd',
      testimonial:
        'We are extremely satisfied with the quality of service and support provided by Dot Com Infoway. Highly recommended!',
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <p className="testimonial-author">
              - {testimonial.name}, {testimonial.company}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;