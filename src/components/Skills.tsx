import React from 'react';
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

const Skills = () => {
  return (
    <section id="skills" className="section container skills-container">
      <div className="skills-content">
        <div className="section-header">
          <h4 className="gradient-text section-subtitle">05 EXPERTISE</h4>
          <h2 className="section-title">Tech Stack & Skills</h2>
        </div>

        <div className="skills-categories">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="skill-category animate-fade-in" style={{ animationDelay: `${ci * 0.1}s` }}>
              <h3 className="skill-category-title">{cat.category}</h3>
              <div className="skills-grid">
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="skill-badge glass-panel"
                    style={{ animationDelay: `${(ci * cat.skills.length + si) * 0.04}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
