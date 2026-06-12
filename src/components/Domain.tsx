import React from 'react';
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

const Domain = () => (
  <section id="domains" className="section container domain-section">
    <div className="section-header">
      <h4 className="gradient-text section-subtitle">02 DOMAIN EXPERTISE</h4>
      <h2 className="section-title">Industries I&apos;ve Served</h2>
    </div>

    <div className="domain-grid">
      {domains.map((d, i) => (
        <div
          key={i}
          className="domain-card glass-panel animate-fade-in"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <span className="domain-icon">{d.icon}</span>
          <h3 className="domain-title">{d.title}</h3>
          <p className="domain-desc text-secondary">{d.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Domain;
