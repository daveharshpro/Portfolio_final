import React from 'react';
import './Skills.css';

const skills = [
  "Playwright", "Cypress", "WordPress Backend",
  "API Testing (Swagger, Postman)", "ServiceNow (ITSM)",
  "JIRA / Trello / ClickUp", "Mocha & Chai", "JMETER",
  "Cross-Browser Testing", "Agile Methodology", "Play-back automation tools", "AWS services", "Database and SQL"
];

const Skills = () => {
  return (
    <section id="skills" className="section container skills-container">
      <div className="skills-content">
        <div className="section-header">
          <h4 className="gradient-text section-subtitle">03 EXPERTISE</h4>
          <h2 className="section-title">Core Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
