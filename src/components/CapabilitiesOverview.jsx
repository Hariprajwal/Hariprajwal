import React from 'react';
import { Cpu, Globe, Eye, Palette, GraduationCap, Zap, CheckCircle2, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export default function CapabilitiesOverview() {
  const capabilities = [
    {
      id: 'ai-swarms',
      title: 'Autonomous AI & LLM Agent Swarms',
      subtitle: 'Financial Intelligence & NSE Market Catalyst Engine',
      description: 'Architecting multi-provider LLM agent swarms that continuously pull NSE metrics, track historical data snapshots, and run short-term trading forecasts autonomously.',
      icon: Cpu,
      accent: 'from-emerald-500 to-teal-400',
      borderGlow: 'hover:border-emerald-500/50',
      badge: 'AI Systems',
      highlights: ['NSE Stock Monitoring', 'Multi-Provider LLMs', 'Automated Forecasts', 'Catalyst Tracking']
    },
    {
      id: 'astronomical-api',
      title: 'Astronomical Precision & Published NPM APIs',
      subtitle: 'Ekadashi-API & Global Package Distribution',
      description: 'Designing astronomical algorithm engines calculating Hindu calendar fasting dates with 100% precision. Deployed as scalable REST APIs and published on NPM for global usage.',
      icon: Globe,
      accent: 'from-cyan-500 to-blue-500',
      borderGlow: 'hover:border-cyan-500/50',
      badge: 'API & NPM Package',
      highlights: ['Astronomical Math', 'Published NPM Package', 'REST API Endpoint', 'Zero-Dependency Algorithmic Engine']
    },
    {
      id: 'screen-ocr',
      title: 'Real-Time Desktop Computer Vision & OCR',
      subtitle: 'LiveScreenOCR (Google Lens Equivalent)',
      description: 'Building native desktop OCR screen readers that capture selected screen regions live, extract text instantly, and facilitate real-time OCR transcription.',
      icon: Eye,
      accent: 'from-violet-500 to-purple-500',
      borderGlow: 'hover:border-violet-500/50',
      badge: 'Computer Vision',
      highlights: ['Region Scanning', 'Instant Text Capture', 'Python & OpenCV/Tesseract', 'Desktop Automation']
    },
    {
      id: 'content-automation',
      title: 'AI Storytelling & Webtoon Content Pipeline',
      subtitle: 'Ganesha-Manwa Automation Engine',
      description: 'Creating AI-driven content generation pipelines that automate story scriptwriting, panel creation, and visual narrative assembly for webtoons and digital manga.',
      icon: Palette,
      accent: 'from-amber-500 to-orange-500',
      borderGlow: 'hover:border-amber-500/50',
      badge: 'Creative AI',
      highlights: ['AI Script Generation', 'Webtoon Panel Automation', 'Storytelling Engine', 'Workflow Batching']
    },
    {
      id: 'vtu-matrix',
      title: 'VTU Engineering AI Prompt Matrix',
      subtitle: 'Computer Science Academic Acceleration',
      description: 'Engineering optimized AI prompt frameworks specifically tailored for VTU Computer Science subjects, enabling students to master core algorithms and system design faster.',
      icon: GraduationCap,
      accent: 'from-rose-500 to-pink-500',
      borderGlow: 'hover:border-rose-500/50',
      badge: 'Education Tech',
      highlights: ['VTU Syllabus Alignment', 'Structured AI Prompts', 'Algorithm Conceptualization', 'Exam Preparation']
    },
    {
      id: 'media-automation',
      title: 'High-Throughput Batch Automation Pipelines',
      subtitle: 'Tenor Media Processing Agent',
      description: 'Constructing robust automated background agents capable of batch processing media links, scraping datasets, extracting assets, and running uninterrupted 24/7 background tasks.',
      icon: Zap,
      accent: 'from-emerald-400 to-cyan-400',
      borderGlow: 'hover:border-emerald-400/50',
      badge: 'Automation Pipelines',
      highlights: ['24/7 Background Execution', 'GIF & Link Batching', 'Clean Data Pipeline', 'Resilient Error Handling']
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-slate-950/60 relative border-t border-b border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" /> CORE ENGINEERING CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Hariprajwal Is <span className="text-gradient-emerald">Capable Of Building</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From autonomous multi-provider LLM swarms to published NPM packages and real-time computer vision engines — here is a breakdown of full-stack AI and systems architecture capabilities.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.id}
                className={`glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between border border-slate-800 ${cap.borderGlow} group relative overflow-hidden`}
              >
                {/* Top Subtle Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cap.accent}`} />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.accent} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-slate-100 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/90 font-medium mt-0.5 mb-3">
                    {cap.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Key Highlights</div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                    {cap.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
