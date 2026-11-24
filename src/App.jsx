import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgressBar from './components/common/ScrollProgressBar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import GitHubContributions from './components/github/GitHubContributions';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-primary text-text-primary transition-colors duration-300">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubContributions />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
    </div>
  );
}

export default App;
