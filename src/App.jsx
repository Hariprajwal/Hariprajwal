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
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

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

  const scrollToProjects = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 antialiased overflow-x-hidden bg-cyber-grid">
      
      {/* Dynamic Particle Neural Canvas Background */}
      <NeuralCanvas />

      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

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
