import React from 'react';
import './Specialized.css';

const specializations = [
  {
    icon: '🤖',
    text: 'Built and maintained Playwright automation frameworks for cross-browser web application testing.',
  },
  {
    icon: '🏗️',
    text: 'Led end-to-end QA for Real Estate, ERP, CRM, SaaS, WordPress, and Travel & Booking platforms.',
  },
  {
    icon: '🔍',
    text: 'Validated complex business workflows, user roles & permissions, data integrity, reporting modules, and system integrations.',
  },
  {
    icon: '📱',
    text: 'Performed functional, regression, exploratory, UAT, and production deployment testing across Web, Android, and iOS applications.',
  },
  {
    icon: '🔗',
    text: 'Conducted API testing using Postman and Swagger to verify business logic and data consistency.',
  },
  {
    icon: '🧩',
    text: 'Tested property management systems, booking workflows, WordPress plugins/themes, and enterprise business applications.',
  },
  {
    icon: '🤝',
    text: 'Collaborated with cross-functional teams to ensure high-quality releases, improved test coverage, and seamless user experiences.',
  },
];

const Specialized = () => (
  <section id="specialized" className="section container specialized-section">
    <div className="section-header">
      <h4 className="gradient-text section-subtitle">03 SPECIALIZED EXPERIENCE</h4>
      <h2 className="section-title">What I Do Best</h2>
    </div>

    <div className="spec-list">
      {specializations.map((item, i) => (
        <div
          key={i}
          className="spec-item glass-panel animate-fade-in"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <span className="spec-icon">{item.icon}</span>
          <p className="spec-text text-secondary">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Specialized;
