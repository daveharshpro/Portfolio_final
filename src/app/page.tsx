import Hero from "@/components/Hero";
import Domain from "@/components/Domain";
import Specialized from "@/components/Specialized";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      {/* 01 — Profile */}
      <Hero />

      {/* 02 — Domain Expertise */}
      <Domain />

      {/* 03 — Specialized Experience */}
      <Specialized />

      {/* 04 — Employment History */}
      <Experience />

      {/* 05 — Tech Stack & Skills */}
      <Skills />

      {/* 06 — Education & Courses */}
      <Education />

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem',
        color: 'var(--text-secondary)'
      }}>
        <p>&copy; {new Date().getFullYear()} Harsh Dave. Built with Next.js</p>
      </footer>
    </>
  );
}
