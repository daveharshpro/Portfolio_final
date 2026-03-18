import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      
      {/* Simple Footer */}
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
