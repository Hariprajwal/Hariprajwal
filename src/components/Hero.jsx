import React from 'react';
import { Bot, Zap, ArrowRight, Github, Code, Sparkles, Terminal, Activity, Layers } from 'lucide-react';

export default function Hero({ onOpenTerminal, onScrollToProjects }) {
  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>🟢 STATUS: Building Autonomous AI Engines & Market Intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-gradient-emerald">Next-Level AI</span>, Autonomous Engines & APIS
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I’m <strong className="text-emerald-400 font-semibold">K R Hari Prajwal</strong> (Hariprajwal). I turn complex engineering ideas into high-performance, usable products through deep research, autonomous LLM swarms, real-time APIs, and computer vision systems.
            </p>

            {/* Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-emerald-400 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" /> LLM Swarms
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Financial NSE AI
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-violet-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Astronomical APIs
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-amber-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> C++ / Python / JS
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onScrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Explore Capabilities & Repos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-emerald-500/60 text-slate-200 font-mono text-sm flex items-center gap-2 transition-all hover:bg-slate-800"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch CLI</span>
              </button>

              <a
                href="https://github.com/Hariprajwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white transition-all"
                title="View GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="font-display font-extrabold text-2xl text-emerald-400">6+</div>
                <div className="text-xs font-mono text-slate-400">Public Repositories</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-cyan-400">NPM & REST</div>
                <div className="text-xs font-mono text-slate-400">Published APIs</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-violet-400">VTU CS</div>
                <div className="text-xs font-mono text-slate-400">System Engineering</div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Showcase Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 glass-card-glow relative rounded-2xl border border-slate-800 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  LIVE SYSTEM MONITOR
                </div>
              </div>

              {/* Dynamic Animated Monitor Showcase */}
              <div className="mt-4 space-y-4 font-mono text-xs text-slate-300">
                
                {/* Engine 1: Ai-Stock-Calendar */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Ai-Stock-Calendar
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-[10px] text-emerald-300">NSE SWARM</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Multi-LLM agent swarm monitoring Indian stock catalyst metrics & forecasts.
                  </p>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[88%] animate-pulse" />
                  </div>
                </div>

                {/* Engine 2: Ekadashi-API */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-cyan-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-cyan-400" /> Ekadashi-API & NPM
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-[10px] text-cyan-300">ASTRONOMICAL</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Astronomical fasting date algorithm engine packaged for npm & web bots.
                  </p>
                </div>

                {/* Engine 3: LiveScreenOCR */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-violet-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-violet-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-violet-400" /> LiveScreenOCR
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-violet-950 text-[10px] text-violet-300">REALTIME VISION</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Desktop Google-Lens style regional OCR screen extractor.
                  </p>
                </div>

                {/* Quick Capability Teaser Footer */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center font-display font-medium text-xs">
                  ⚡ Instant Capability Validation: All systems ready for live inspection.
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
