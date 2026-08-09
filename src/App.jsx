import React, { useState, useEffect } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesOverview from './components/CapabilitiesOverview';
import ProjectVault from './components/ProjectVault';
import LiveGitHubRepos from './components/LiveGitHubRepos';
import TechStackVault from './components/TechStackVault';
import InteractiveTerminalModal from './components/InteractiveTerminalModal';
import ContactFooter from './components/ContactFooter';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
  // Light mode is default as explicitly requested by user
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hariprajwal_theme') || 'light';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('hariprajwal_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToProjects = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#06080d] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-600 dark:selection:text-emerald-300 antialiased overflow-x-hidden bg-cyber-grid transition-colors duration-300">
      
      {/* Dynamic Particle Neural Canvas Background */}
      <NeuralCanvas theme={theme} />

      {/* Navigation Bar with Theme Toggle */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onScrollToProjects={scrollToProjects}
        />
        
        <CapabilitiesOverview />

        <ProjectVault />

        <LiveGitHubRepos />

        <TechStackVault />
      </main>

      {/* Footer */}
      <ContactFooter />

      {/* Interactive CLI Terminal Modal */}
      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Live OpenRouter AI Chat Widget (bottom-right) */}
      <AIChatWidget />

    </div>
  );
}
