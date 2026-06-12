"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <a href="#" className="nav-logo">HD<span className="gradient-text">.QA</span></a>
        <ul className="nav-links">
          {["About", "Domains", "Specialized", "Experience", "Skills", "Education"].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
            >
              <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
