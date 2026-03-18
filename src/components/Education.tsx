import React from 'react';
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

const Education = () => {
  return (
    <section id="education" className="section container">
       <div className="section-header text-center">
         <h4 className="gradient-text section-subtitle">04 EDUCATION & COURSES</h4>
         <h2 className="section-title">Academic Background</h2>
       </div>
       
       <div className="edu-grid">
         {educationList.map((edu, index) => (
           <div key={index} className="edu-card glass-panel">
             <div className="edu-icon">🎓</div>
             <h3 className="edu-course">{edu.course}</h3>
             <p className="edu-institution highlight-cyan">{edu.institution}</p>
             {edu.date && <p className="edu-date text-secondary">{edu.date}</p>}
           </div>
         ))}
       </div>
    </section>
  );
};

export default Education;
