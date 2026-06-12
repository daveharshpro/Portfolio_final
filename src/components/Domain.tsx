"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Domain.css';

const domains = [
  { icon: '🏢', title: 'Real Estate & Property Management', desc: 'End-to-end QA for property management platforms and workflows.' },
  { icon: '⚙️',  title: 'ERP Systems',                      desc: 'Enterprise Resource Planning — complex business logic & integrations.' },
  { icon: '🤝', title: 'CRM Systems',                       desc: 'Customer Relationship Management platforms and data flows.' },
  { icon: '🔌', title: 'WordPress Products & Plugins',      desc: 'Theme, plugin, and backend WordPress testing expertise.' },
  { icon: '☁️',  title: 'SaaS Applications',                desc: 'Scalable cloud-based software across multiple tenants.' },
  { icon: '✈️',  title: 'Travel & Booking Platforms',        desc: 'Booking workflows, availability engines, and UX validation.' },
  { icon: '🌐', title: 'Enterprise Web Applications',       desc: 'High-traffic, cross-browser enterprise-grade web testing.' },
  { icon: '📊', title: 'Data-Driven Business Platforms',    desc: 'Reporting modules, data integrity, and dashboard validation.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Domain = () => (
  <section id="domains" className="section container domain-section">
    <motion.div
      className="section-header"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h4 className="gradient-text section-subtitle">02 DOMAIN EXPERTISE</h4>
      <h2 className="section-title">Industries I&apos;ve Served</h2>
    </motion.div>

    <motion.div
      className="domain-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {domains.map((d, i) => (
        <motion.div
          key={i}
          className="domain-card glass-panel"
          variants={cardVariants}
          whileHover={{ y: -8, boxShadow: '0 0 32px rgba(0,243,255,0.25)', borderColor: 'rgba(0,243,255,0.4)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="domain-icon">{d.icon}</span>
          <h3 className="domain-title">{d.title}</h3>
          <p className="domain-desc text-secondary">{d.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Domain;
