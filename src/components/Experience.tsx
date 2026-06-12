"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: "QA Engineer",
    company: "Momentum91 (A DevX Company)",
    date: "Sept 2025 — Present",
    location: "Ahmedabad | Office",
    details: [
      "Led end-to-end QA for a real estate property management platform.",
      "Built and implemented a scalable Playwright automation framework for cross-browser testing.",
      "Managed parallel QA during deployments, validating live production data."
    ]
  },
  {
    role: "QA Consultant (Part-time)",
    company: "Freelancer",
    date: "Feb 2025 — Aug 2025",
    location: "Remote",
    details: [
      "Streamlined QA processes for a startup travel organization.",
      "Designed and implemented efficient Playwright automation architecture.",
      "Provided hands-on guidance and mentorship to fresher QA team members."
    ]
  },
  {
    role: "QA Engineer",
    company: "Multidots inc.",
    date: "Oct 2023 — Jan 2025",
    location: "Remote | Ahmedabad, USA",
    details: [
      "Proficient in Playwright automation, extensive experience in WordPress backend operations.",
      "Successfully managed and tested the Multicollab plugin for six months.",
      "Experienced in evaluating newly developed plugins by Multidots."
    ]
  },
  {
    role: "Quality Assurance",
    company: "Oneclick IT Consultancy",
    date: "Dec 2021 — July 2023",
    location: "Ahmedabad | Office",
    details: [
      "Developed automated test scripts using Cypress for end-to-end testing, resulting in a 30% reduction in testing time.",
      "Collaborated to resolve critical bugs, ensuring a seamless user experience.",
      "Contributed to comprehensive test suite creation using Mocha and Chai."
    ]
  }
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Experience = () => {
  return (
    <section id="experience" className="section experience-section container">
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h4 className="gradient-text section-subtitle">04 EMPLOYMENT HISTORY</h4>
        <h2 className="section-title">Where I&apos;ve Worked</h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <motion.div
              className="timeline-content glass-panel"
              whileHover={{
                y: -6,
                boxShadow: '0 0 28px rgba(0,243,255,0.2)',
                borderColor: 'rgba(0,243,255,0.35)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-meta">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-date">{exp.date}</span>
                <span className="exp-location">{exp.location}</span>
              </div>
              <ul className="exp-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
