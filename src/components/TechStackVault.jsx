import React, { useState } from 'react';
import { Cpu, Terminal, Layers, Code, CheckCircle2, Wrench, Sparkles } from 'lucide-react';

export default function TechStackVault() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'AI & LLMs', 'APIs & Web', 'Tools & Systems'];

  const techVault = [
    { name: 'Python', category: 'Languages', level: 'Mastery / Advanced', desc: 'Primary language for AI agent swarms, pandas financial metrics, and desktop vision.' },
    { name: 'JavaScript / ES6+', category: 'Languages', level: 'Advanced', desc: 'Core language for published npm packages, REST APIs, and modern frontend engines.' },
    { name: 'C / C++', category: 'Languages', level: 'Core Systems', desc: 'High-performance algorithms, system software, and memory-efficient data structures.' },
    { name: 'TypeScript', category: 'Languages', level: 'Proficient', desc: 'Type-safe full-stack application development and API interface definitions.' },

    { name: 'Multi-LLM Swarms', category: 'AI & LLMs', level: 'Architect', desc: 'Multi-provider agent orchestrations combining OpenAI, Gemini, and local LLMs.' },
    { name: 'OpenCV & PyTesseract', category: 'AI & LLMs', level: 'Advanced', desc: 'Desktop screen capture, region cropping, image preprocessing, and OCR extraction.' },
    { name: 'Financial Catalyst Engines', category: 'AI & LLMs', level: 'Architect', desc: 'NSE market data processing, historical metric analysis, and trading forecast models.' },

    { name: 'Node.js & Express', category: 'APIs & Web', level: 'Advanced', desc: 'Scalable backend API development, middleware, and published NPM packages.' },
    { name: 'FastAPI / REST', category: 'APIs & Web', level: 'Advanced', desc: 'High-speed Python web APIs for machine learning and real-time data endpoints.' },
    { name: 'Vite & React / Next.js', category: 'APIs & Web', level: 'Advanced', desc: 'Building Vercel-ready, high-aesthetic interactive web applications.' },

    { name: 'Git & GitHub Workflow', category: 'Tools & Systems', level: 'Expert', desc: 'Repository management, open-source publishing, actions, and CI/CD pipelines.' },
    { name: 'Batch Pipeline Automation', category: 'Tools & Systems', level: 'Expert', desc: 'Background agent loops, media extraction, and 24/7 uninterrupted schedulers.' },
    { name: 'MIT Manipal CS Curriculum', category: 'Tools & Systems', level: 'Academic', desc: 'Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks core modules.' }
  ];

  const filteredTech = activeCategory === 'All' ? techVault : techVault.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-400">
            <Layers className="w-3.5 h-3.5" /> SYSTEM ARCHITECTURE & TECH MATRIX
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Technical Stack & <span className="text-gradient-cyan">Skill Vault</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed breakdown of languages, AI frameworks, API architectures, and automation systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-emerald-500/40 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    {item.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-400">
                    {item.category}
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 mb-3">
                  Proficiency: {item.level}
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified in Production Codebase
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
