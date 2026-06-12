"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Specialized.css';

const specializations = [
  { icon: '🤖', text: 'Built and maintained Playwright automation frameworks for cross-browser web application testing.' },
  { icon: '🏗️', text: 'Led end-to-end QA for Real Estate, ERP, CRM, SaaS, WordPress, and Travel & Booking platforms.' },
  { icon: '🔍', text: 'Validated complex business workflows, user roles & permissions, data integrity, reporting modules, and system integrations.' },
  { icon: '📱', text: 'Performed functional, regression, exploratory, UAT, and production deployment testing across Web, Android, and iOS applications.' },
  { icon: '🔗', text: 'Conducted API testing using Postman and Swagger to verify business logic and data consistency.' },
  { icon: '🧩', text: 'Tested property management systems, booking workflows, WordPress plugins/themes, and enterprise business applications.' },
  { icon: '🤝', text: 'Collaborated with cross-functional teams to ensure high-quality releases, improved test coverage, and seamless user experiences.' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Specialized = () => (
  <section id="specialized" className="section container specialized-section">
    <motion.div
      className="section-header"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h4 className="gradient-text section-subtitle">03 SPECIALIZED EXPERIENCE</h4>
      <h2 className="section-title">What I Do Best</h2>
    </motion.div>

    <motion.div
      className="spec-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {specializations.map((item, i) => (
        <motion.div
          key={i}
          className="spec-item glass-panel"
          variants={itemVariants}
          whileHover={{ x: 10, boxShadow: '0 0 28px rgba(157,0,255,0.25)', borderColor: 'rgba(157,0,255,0.4)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          <span className="spec-icon">{item.icon}</span>
          <p className="spec-text text-secondary">{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Specialized;
