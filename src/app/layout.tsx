import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Harsh Dave | QA Engineer Portfolio",
  description: "Portfolio of Harsh Dave, a QA Engineer specializing in Playwright, Cypress, and automated testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <div className="bg-gradient-mesh" />
        <nav className="navbar">
          <div className="container">
            <a href="#" className="nav-logo">HD<span className="gradient-text">.QA</span></a>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
