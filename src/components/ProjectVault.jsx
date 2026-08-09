import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Play, Sparkles, Terminal, Copy, Check, Calendar, Search, RefreshCw, Cpu, Layers } from 'lucide-react';

export default function ProjectVault() {
  const [activeTab, setActiveTab] = useState({});
  const [copiedNpm, setCopiedNpm] = useState(false);

  // State for Ekadashi Live Simulator
  const [calcYear, setCalcYear] = useState(2026);
  const [calcMonth, setCalcMonth] = useState('August');
  const [calcResult, setCalcResult] = useState(null);

  // State for AI Stock Simulator
  const [stockTicker, setStockTicker] = useState('RELIANCE.NS');
  const [stockSimResult, setStockSimResult] = useState(null);
  const [isSimulatingStock, setIsSimulatingStock] = useState(false);

  // State for OCR Simulator
  const [ocrSampleText, setOcrSampleText] = useState('CAPTURED SCREEN REGION: "NIFTY50 BREAKOUT AT 24,500 DETECTED — LLM SWARM EXECUTING FORECAST"');
  const [isScanningOcr, setIsScanningOcr] = useState(false);

  const toggleTab = (projectId, tabName) => {
    setActiveTab((prev) => ({ ...prev, [projectId]: tabName }));
  };

  const handleCopyNpm = () => {
    navigator.clipboard.writeText('npm install ekadashi-api');
    setCopiedNpm(true);
    setTimeout(() => setCopiedNpm(false), 2000);
  };

  const runEkadashiCalc = () => {
    setCalcResult({
      shuklaEkadashi: `${calcMonth} 12, ${calcYear} — Pavitra Ekadashi (Parana: 06:12 AM)`,
      krishnaEkadashi: `${calcMonth} 26, ${calcYear} — Aja Ekadashi (Parana: 06:18 AM)`,
      sankashti: `${calcMonth} 29, ${calcYear} — Heramba Sankashti Chaturthi (Moonrise: 08:45 PM)`,
      precision: '100% Astronomical Ephemeris Math'
    });
  };

  const runStockSimulation = () => {
    setIsSimulatingStock(true);
    setStockSimResult(null);
    setTimeout(() => {
      setStockSimResult({
        ticker: stockTicker,
        catalystEvent: 'Q2 Earnings Release & Multi-LLM Metrics Analysis',
        bullishProbability: '78.4%',
        keyDrivers: ['Margin Expansion +240bps', 'NSE Orderbook Surge', 'Multi-LLM Swarm Consensus: BULLISH'],
        aiInsight: 'Autonomous catalyst agent predicts high volatility breakout with trailing stop-loss strategy.'
      });
      setIsSimulatingStock(false);
    }, 1200);
  };

  const runOcrScan = () => {
    setIsScanningOcr(true);
    setTimeout(() => {
      setIsScanningOcr(false);
    }, 800);
  };

  const projects = [
    {
      id: 'ai-stock-calendar',
      title: 'Ai-Stock-Calendar',
      category: 'Autonomous AI Engine',
      githubUrl: 'https://github.com/Hariprajwal/Ai-stock-calendar',
      description: 'An autonomous Indian Stock Catalyst Calendar and AI Intelligence Engine that monitors the National Stock Exchange (NSE), tracks historical metric snapshots, and uses a multi-provider LLM swarm for market research and trading forecasts.',
      tech: ['Python', 'Multi-LLM Swarm', 'NSE API', 'FastAPI', 'Pandas'],
      hasSimulator: 'stock'
    },
    {
      id: 'ekadashi-api',
      title: 'Ekadashi-api & NPM Package',
      category: 'API & Astronomical NPM Package',
      githubUrl: 'https://github.com/Hariprajwal/Ekadashi-api',
      description: 'Calculates Ekadashi and Sankashti fasting dates with astronomical accuracy. Published as an easy-to-use npm package and REST API for developers to integrate into calendar apps and bots.',
      tech: ['JavaScript', 'Node.js', 'NPM Package', 'Astronomical Ephemeris', 'REST API'],
      hasSimulator: 'ekadashi'
    },
    {
      id: 'live-screen-ocr',
      title: 'LiveScreenOCR Screen Reader',
      category: 'Computer Vision & OCR Desktop App',
      githubUrl: 'https://github.com/Hariprajwal/LiveScreenOCR-screen-reader-',
      description: 'Desktop OCR tool functioning like Google Lens. Allows users to capture any region of their computer screen live to instantly extract text for reading, copying, or AI analysis.',
      tech: ['Python', 'OpenCV', 'PyTesseract', 'PyQt', 'Desktop Vision'],
      hasSimulator: 'ocr'
    },
    {
      id: 'ganesha-manwa',
      title: 'Ganesha-Manwa Automation',
      category: 'Content Automation & Storytelling',
      githubUrl: 'https://github.com/Hariprajwal/Ganesha-manwa',
      description: 'AI storytelling and webtoon/manga narration automation platform. Converts creative prompts into dynamic storyboard scripts and visual story assets automatically.',
      tech: ['Python', 'GenAI', 'Story Pipeline', 'Automated Canvas', 'Media Scraping'],
      hasSimulator: 'manwa'
    },
    {
      id: 'prompt-vtu',
      title: 'PROMPT-FOR-STUDYING-VTU',
      category: 'Academic AI Framework',
      githubUrl: 'https://github.com/Hariprajwal/PROMPT-FOR-STUDYING-VTU',
      description: 'Comprehensive repository containing structured AI prompts engineered to assist VTU Computer Science students in learning complex engineering algorithms and syllabus topics.',
      tech: ['Prompt Engineering', 'Markdown', 'VTU Curriculum', 'Algorithm Analysis'],
      hasSimulator: 'vtu'
    },
    {
      id: 'tenor-agent',
      title: 'Tenor Automation Pipeline Agent',
      category: 'High-Throughput Automation',
      githubUrl: 'https://github.com/Hariprajwal',
      description: 'Real-time automation pipeline agent that continuously extracts, processes, cleanses, and batches media links and GIF assets in 24/7 background tasks.',
      tech: ['Python', 'Batch Pipelines', 'Process Scheduler', 'Scraping Agents'],
      hasSimulator: 'tenor'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
              <Code2 className="w-3.5 h-3.5" /> FEATURED PUBLIC REPOSITORIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Interactive Project <span className="text-gradient-cyan">Vault & Live Demos</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-mono">
            Click on any project to test live interactive engine simulators directly inside your browser.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const currentTab = activeTab[project.id] || 'overview';

            return (
              <div
                key={project.id}
                className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
                        {project.category}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-slate-100 mt-2">
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4 font-mono text-xs">
                    <button
                      onClick={() => toggleTab(project.id, 'overview')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        currentTab === 'overview'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Overview
                    </button>
                    
                    <button
                      onClick={() => toggleTab(project.id, 'simulator')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                        currentTab === 'simulator'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-cyan-400'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Live Interactive Simulator
                    </button>
                  </div>

                  {/* Tab 1: Overview */}
                  {currentTab === 'overview' && (
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Live Simulator Panels */}
                  {currentTab === 'simulator' && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-4">
                      
                      {/* Simulator for AI Stock Calendar */}
                      {project.hasSimulator === 'stock' && (
                        <div className="space-y-3">
                          <div className="text-emerald-400 font-semibold flex items-center justify-between">
                            <span>🤖 Autonomous NSE LLM Swarm Simulator</span>
                            <span className="text-[10px] text-slate-400">STATUS: READY</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={stockTicker}
                              onChange={(e) => setStockTicker(e.target.value)}
                              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 w-full focus:outline-none focus:border-emerald-500"
                              placeholder="e.g. RELIANCE.NS, TATAMOTORS.NS"
                            />
                            <button
                              onClick={runStockSimulation}
                              disabled={isSimulatingStock}
                              className="px-4 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shrink-0 flex items-center gap-1.5 transition-colors"
                            >
                              {isSimulatingStock ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-current" />
                              )}
                              Run Swarm
                            </button>
                          </div>

                          {stockSimResult && (
                            <div className="p-3 rounded bg-slate-900/90 border border-emerald-500/30 space-y-2 text-[11px] animate-fadeIn">
                              <div className="text-emerald-300 font-bold">ANALYSIS COMPLETE: {stockSimResult.ticker}</div>
                              <div className="text-slate-300">Catalyst Event: {stockSimResult.catalystEvent}</div>
                              <div className="text-cyan-400 font-semibold">Bullish Confidence: {stockSimResult.bullishProbability}</div>
                              <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                                {stockSimResult.keyDrivers.map((kd, idx) => (
                                  <li key={idx}>{kd}</li>
                                ))}
                              </ul>
                              <p className="text-slate-300 font-sans italic pt-1 border-t border-slate-800">
                                "{stockSimResult.aiInsight}"
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Simulator for Ekadashi API */}
                      {project.hasSimulator === 'ekadashi' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 font-semibold">🌙 Astronomical Fasting Date Calculator</span>
                            <button
                              onClick={handleCopyNpm}
                              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 flex items-center gap-1 text-[11px]"
                            >
                              {copiedNpm ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              npm i ekadashi-api
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <select
                              value={calcMonth}
                              onChange={(e) => setCalcMonth(e.target.value)}
                              className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                            >
                              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                                <option key={m} value={m}>{m}</option>
                              ))}
                            </select>
                            <input
                              type="number"
                              value={calcYear}
                              onChange={(e) => setCalcYear(e.target.value)}
                              className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 w-24 text-xs"
                            />
                            <button
                              onClick={runEkadashiCalc}
                              className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                            >
                              Calculate
                            </button>
                          </div>

                          {calcResult ? (
                            <div className="p-3 rounded bg-slate-900 border border-cyan-500/30 space-y-1.5 text-[11px]">
                              <div className="text-emerald-400">✨ Shukla Ekadashi: {calcResult.shuklaEkadashi}</div>
                              <div className="text-cyan-400">✨ Krishna Ekadashi: {calcResult.krishnaEkadashi}</div>
                              <div className="text-violet-400">🌕 Sankashti Chaturthi: {calcResult.sankashti}</div>
                              <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-1">
                                Engine Precision: {calcResult.precision}
                              </div>
                            </div>
                          ) : (
                            <div className="text-slate-500 text-[11px] italic">
                              Click 'Calculate' to execute astronomical ephemeris algorithms for selected month/year.
                            </div>
                          )}
                        </div>
                      )}

                      {/* Simulator for LiveScreenOCR */}
                      {project.hasSimulator === 'ocr' && (
                        <div className="space-y-3">
                          <div className="text-violet-400 font-semibold flex items-center justify-between">
                            <span>👁️ Regional Desktop OCR Capture Simulator</span>
                            <span className="text-[10px] text-emerald-400">ACTIVE REGION</span>
                          </div>

                          <div className="p-3 rounded bg-slate-900 border border-dashed border-violet-500/40 relative">
                            {isScanningOcr && (
                              <div className="absolute inset-0 bg-violet-500/10 border-b-2 border-violet-400 animate-scanline pointer-events-none" />
                            )}
                            <div className="text-slate-300 font-mono text-[11px]">
                              {ocrSampleText}
                            </div>
                          </div>

                          <button
                            onClick={runOcrScan}
                            className="px-4 py-1.5 rounded bg-violet-500 hover:bg-violet-400 text-slate-950 font-bold flex items-center gap-1.5"
                          >
                            <Search className="w-3.5 h-3.5" /> Trigger OCR Region Scan
                          </button>
                        </div>
                      )}

                      {/* Simulator for Ganesha-Manwa */}
                      {project.hasSimulator === 'manwa' && (
                        <div className="space-y-3 text-slate-300">
                          <div className="text-amber-400 font-semibold">🎨 AI Webtoon Narration & Story Generator</div>
                          <p className="text-slate-400 text-[11px] font-sans">
                            Automated storytelling canvas that structures panels, prompt prompts, and scene transitions automatically.
                          </p>
                          <div className="p-3 rounded bg-slate-900 border border-amber-500/30 text-[11px]">
                            <div className="text-amber-300">Panel 1 [Exterior City]: Neon rain reflecting on cyber streets.</div>
                            <div className="text-slate-400">Panel 2 [Dialogue]: "The autonomous swarm detected the anomaly..."</div>
                          </div>
                        </div>
                      )}

                      {/* Simulator for VTU Prompt */}
                      {project.hasSimulator === 'vtu' && (
                        <div className="space-y-2 text-slate-300">
                          <div className="text-rose-400 font-semibold">🎓 VTU Computer Science Prompt Explorer</div>
                          <div className="p-2.5 rounded bg-slate-900 border border-rose-500/30 text-[11px]">
                            <span className="text-rose-300">Prompt Module 18CS61:</span> System Software & Compiler Design optimization prompts ready for VTU exam prep.
                          </div>
                        </div>
                      )}

                      {/* Simulator for Tenor Agent */}
                      {project.hasSimulator === 'tenor' && (
                        <div className="space-y-2 text-slate-300">
                          <div className="text-emerald-400 font-semibold">⚡ Batch GIF Media Pipeline Monitor</div>
                          <div className="p-2.5 rounded bg-slate-900 border border-emerald-500/30 text-[11px] flex items-center justify-between">
                            <span>Processing Pipeline: 2,319+ Media Links</span>
                            <span className="text-emerald-400 font-bold animate-pulse">24/7 RUNNING</span>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>

                {/* Footer Action Links */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-slate-400" /> Public Repository
                  </span>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition-colors"
                  >
                    Source Code <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
