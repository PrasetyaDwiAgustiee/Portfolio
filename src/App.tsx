import MainShell from './app/layout/MainShell';
import Hero from './app/sections/Hero';
import ExecutiveSummary from './app/sections/ExecutiveSummary';
import Achievements from './app/sections/Achievements';
import Experience from './app/sections/Experience';
import Competencies from './app/sections/Competencies';
import CaseStudies from './app/sections/CaseStudies';
import Certifications from './app/sections/Certifications';
import Contact from './app/sections/Contact';

export default function App() {
  return (
    <MainShell>
      <Hero />
      <ExecutiveSummary />
      <Achievements />
      <Experience />
      <Competencies />
      <CaseStudies />
      <Certifications />
      <Contact />
    </MainShell>
  );
}
