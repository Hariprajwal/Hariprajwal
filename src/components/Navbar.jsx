import React from 'react';
import { Terminal, Cpu, Sparkles, Github, Code2, Globe } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#06080d]/80 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-600 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#080c14] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-wider text-slate-100 flex items-center gap-1.5">
              HARIPRAJWAL <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400/90 font-medium">
              AI SYSTEMS & APIS
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
          <a href="#capabilities" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Capabilities
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#live-repos" className="hover:text-emerald-400 transition-colors">GitHub Repos</a>
          <a href="#tech-stack" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800 text-xs font-mono text-slate-200 transition-all shadow-inner"
            title="Open CLI Terminal (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Vercel Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
            <Globe className="w-3 h-3 text-emerald-400" />
            Vercel Ready
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/Hariprajwal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </header>
  );
}
