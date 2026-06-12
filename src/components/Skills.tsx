"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    category: 'Automation & Testing Frameworks',
    skills: ['Playwright', 'Cypress', 'Mocha & Chai', 'JMeter'],
  },
  {
    category: 'API & Backend Testing',
    skills: ['Postman', 'Swagger', 'API Testing', 'WordPress Backend'],
  },
  {
    category: 'Cloud & Browser Testing',
    skills: ['BrowserStack', 'TestMu AI (LambdaTest)', 'Cross-Browser Testing', 'AWS Services'],
  },
  {
    category: 'Project & Test Management',
    skills: ['Jira', 'TestRail', 'ClickUp', 'Trello', 'Redmine'],
  },
  {
    category: 'Languages & Tools',
    skills: ['JavaScript', 'GitHub', 'Database & SQL', 'ServiceNow (ITSM)'],
  },
  {
    category: 'Testing Types',
    skills: [
      'Functional Testing', 'Regression Testing', 'Smoke Testing',
      'Exploratory Testing', 'UAT', 'Production Validation',
      'Web Testing', 'Android Testing', 'iOS Testing', 'Defect Management',
    ],
  },
  {
    category: 'Domain Testing',
    skills: [
      'WordPress Testing', 'ERP Testing', 'CRM Testing',
      'SaaS Testing', 'Real Estate Domain', 'Travel & Booking Domain',
    ],
  },
  {
    category: 'Methodologies & Processes',
    skills: ['Agile Scrum', 'STLC', 'SDLC'],
  },
  {
    category: 'AI Coding Tools',
    skills: ['Claude Code', 'Cursor', 'Antigravity', 'Codex', 'Copilot'],
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="section container skills-container">
      <div className="skills-content">
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="gradient-text section-subtitle">05 EXPERTISE</h4>
          <h2 className="section-title">Tech Stack &amp; Skills</h2>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              className="skill-category"
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: ci * 0.05 }}
            >
              <h3 className="skill-category-title">{cat.category}</h3>
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
              >
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="skill-badge glass-panel"
                    variants={badgeVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      color: 'var(--accent-cyan)',
                      borderColor: 'rgba(0,243,255,0.6)',
                      boxShadow: '0 0 20px rgba(0,243,255,0.35)',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
