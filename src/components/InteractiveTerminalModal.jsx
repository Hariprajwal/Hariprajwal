import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, Bot } from 'lucide-react';
import { chatWithAI, AI_PROFILES } from '../lib/openrouter';

export default function InteractiveTerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: '⚡ HARIPRAJWAL AI COMMAND CENTER v3.0 | OpenRouter AI Enabled' },
    { type: 'sys', text: 'Commands: help | bio | repos | ai-stock | ekadashi | ocr | gif | contact | ask [anything] | clear' }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = async (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    const raw = inputVal.trim();
    if (!raw) return;
    const isAsk = cmd.startsWith('ask ');
    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];
    if (isAsk) {
      const question = raw.slice(4).trim();
      setHistory([...newHistory, { type: 'output', text: '🤖 AI is thinking via OpenRouter...' }]);
      setInputVal('');
      setIsAiLoading(true);
      try {
        const reply = await chatWithAI(AI_PROFILES.generalAssistant, question);
        setHistory((prev) => [
          ...prev.slice(0, -1),
          { type: 'output', text: `🤖 AI RESPONSE:\n${reply}` }
        ]);
      } catch (err) {
        setHistory((prev) => [...prev.slice(0, -1), { type: 'error', text: `AI Error: ${err.message}` }]);
      } finally {
        setIsAiLoading(false);
      }
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help      - Display this command reference
  bio       - Show Hariprajwal profile summary
  repos     - List public GitHub repositories
  ai-stock  - Execute AI Stock Catalyst simulation
  ekadashi  - Calculate Hindu astronomical dates
  ocr       - Trigger desktop vision scan
  contact   - Display social links & email
  gif       - View Tenor automation agent status
  ask [msg] - 💬 Chat with OpenRouter AI live!
  clear     - Clear terminal history`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          text: `K R HARI PRAJWAL (Hariprajwal)
Institution: MIT Manipal — Computer Science Engineering
Tagline: "Building scalable systems by combining AI, automation, and APIs."
Specialties: Autonomous LLM Swarms, Astronomical Calculation Engines, Desktop Vision OCR, MIT Manipal CS Engineering.`
        });
        break;

      case 'repos':
        newHistory.push({
          type: 'output',
          text: `PUBLIC REPOSITORIES (@Hariprajwal):
  1. Ai-stock-calendar [Python/LLMs] - Autonomous NSE catalyst calendar engine.
  2. Ekadashi-api [JavaScript/NPM]  - Astronomical fasting date API & npm package.
  3. LiveScreenOCR [Python/OpenCV]   - Google Lens style desktop screen OCR.
  4. Ganesha-manwa [Python/GenAI]   - AI webtoon content automation pipeline.
  5. PROMPT-FOR-STUDYING-VTU        - VTU CS academic prompt matrix.`
        });
        break;

      case 'ai-stock':
        newHistory.push({
          type: 'output',
          text: `[EXEC] Running Multi-LLM Swarm on NSE RELIANCE.NS...
✓ Pulled quarterly metric snapshots.
✓ Multi-provider LLM Consensus: BULLISH (78.4% Confidence).
✓ Catalyst Forecast: Earnings breakout expected.`
        });
        break;

      case 'ekadashi':
        newHistory.push({
          type: 'output',
          text: `[EXEC] Calculating Astronomical Fasting Ephemeris for 2026...
✓ Next Shukla Ekadashi: Pavitra Ekadashi (Parana: 06:12 AM)
✓ Next Krishna Ekadashi: Aja Ekadashi (Parana: 06:18 AM)
✓ Package: npm i ekadashi-api`
        });
        break;

      case 'ocr':
        newHistory.push({
          type: 'output',
          text: `[EXEC] Triggering LiveScreenOCR Desktop Region Scan...
✓ Screen region captured: (x:240, y:180, w:800, h:450)
✓ Tesseract OCR Output: "SYSTEM AUTOMATION ACTIVE — 100% PRECISION"`
        });
        break;

      case 'gif':
        newHistory.push({
          type: 'output',
          text: `[EXEC] Tenor Automated Agent Pipeline...
✓ Active batch task: 2,319+ GIF URLs processed.
✓ Background status: UNINTERRUPTED 24/7 EXECUTION.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONNECT WITH HARIPRAJWAL:
  GitHub: https://github.com/Hariprajwal
  LinkedIn: https://linkedin.com/in/k-r-hari-prajwal-655373256
  Institution: MIT Manipal — Computer Science Engineering
  Location: India`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl rounded-2xl bg-[#080c14] border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-slate-200 font-semibold">
              hariprajwal@ai-terminal:~$
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 font-mono text-xs space-y-2 overflow-y-auto text-slate-300">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.type === 'sys'
                  ? 'text-emerald-400 font-semibold'
                  : item.type === 'user'
                  ? 'text-cyan-300 font-bold'
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : 'text-slate-300 whitespace-pre-wrap'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Command Line */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (e.g. help, ai-stock, ekadashi, repos)..."
            className="flex-1 bg-transparent text-xs font-mono text-slate-100 focus:outline-none placeholder-slate-500"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
