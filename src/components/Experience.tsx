import React from 'react';
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

const Experience = () => {
  return (
    <section id="experience" className="section experience-section container">
      <div className="section-header">
        <h4 className="gradient-text section-subtitle">04 EMPLOYMENT HISTORY</h4>
        <h2 className="section-title">Where I&apos;ve Worked</h2>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
