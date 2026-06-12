"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Education.css';

const educationList = [
  {
    course: "ISTQB Foundation Level at ITB",
    institution: "Certification"
  },
  {
    course: "Cypress - Modern Automation Testing + Frameworks",
    institution: "Course"
  },
  {
    course: "End to End Playwright tutorials on JavaScript",
    institution: "Course"
  },
  {
    course: "BE - Mechanical",
    institution: "G K Bharad Institute Of Engineering",
    location: "Rajkot",
    date: "Jun 2012 — May 2016"
  }
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Education = () => {
  return (
    <section id="education" className="section container">
      <motion.div
        className="section-header text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h4 className="gradient-text section-subtitle">06 EDUCATION &amp; COURSES</h4>
        <h2 className="section-title">Academic Background</h2>
      </motion.div>

      <motion.div
        className="edu-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="edu-card glass-panel"
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: '0 0 32px rgba(157,0,255,0.25)',
              borderColor: 'rgba(157,0,255,0.4)',
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          >
            <div className="edu-icon">🎓</div>
            <h3 className="edu-course">{edu.course}</h3>
            <p className="edu-institution highlight-cyan">{edu.institution}</p>
            {edu.date && <p className="edu-date text-secondary">{edu.date}</p>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
