import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, Bot, RefreshCw } from 'lucide-react';
import { chatWithAI, AI_PROFILES } from '../lib/openrouter';

export default function InteractiveTerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: '⚡ HARIPRAJWAL AI COMMAND CENTER v3.5 | OpenRouter AI & Natural Agent Active' },
    { type: 'sys', text: 'Type any system command (help, bio, repos, ai-stock, ekadashi, ocr, contact) or chat naturally (e.g. "hello who are u", "what can you build?")' }
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
  }, [history, isAiLoading]);

  if (!isOpen) return null;

  const handleCommand = async (e) => {
    e.preventDefault();
    const raw = inputVal.trim();
    if (!raw || isAiLoading) return;
    const cmd = raw.toLowerCase();

    const userEntry = { type: 'user', text: `$ ${raw}` };
    setInputVal('');

    // Fixed Built-in Commands
    if (cmd === 'help') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `AVAILABLE SYSTEM COMMANDS:
  help      - Display this command reference
  bio       - Show Hariprajwal profile summary & MIT Manipal credentials
  repos     - List public GitHub repositories
  ai-stock  - Execute AI Stock Catalyst simulation
  ekadashi  - Calculate Hindu astronomical dates
  ocr       - Trigger desktop vision scan
  contact   - Display social links & email
  gif       - View Tenor automation agent status
  clear     - Clear terminal history
  
🤖 NATURAL AI CHAT:
  Type any natural question (e.g. "hello who are u", "tell me about your AI projects") to chat directly with Hariprajwal's AI engine!`
        }
      ]);
      return;
    }

    if (cmd === 'bio') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `K R HARI PRAJWAL (Hariprajwal)
Institution: MIT Manipal — Computer Science Engineering
Tagline: "Building scalable systems by combining AI, automation, and APIs."
Specialties: Autonomous LLM Swarms, Astronomical Calculation Engines, Desktop Vision OCR, MIT Manipal CS Engineering.`
        }
      ]);
      return;
    }

    if (cmd === 'repos') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `PUBLIC REPOSITORIES (@Hariprajwal):
  1. Ai-stock-calendar [Python/LLMs] - Autonomous NSE catalyst calendar engine.
  2. Ekadashi-api [JavaScript/NPM]  - Astronomical fasting date API & npm package.
  3. LiveScreenOCR [Python/OpenCV]   - Google Lens style desktop screen OCR.
  4. Ganesha-manwa [Python/GenAI]   - AI webtoon content automation pipeline.
  5. PROMPT-FOR-STUDYING-VTU        - CS academic prompt matrix.`
        }
      ]);
      return;
    }

    if (cmd === 'ai-stock') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `[EXEC] Running Multi-LLM Swarm on NSE RELIANCE.NS...
✓ Pulled quarterly metric snapshots.
✓ Multi-provider LLM Consensus: BULLISH (78.4% Confidence).
✓ Catalyst Forecast: Earnings breakout expected.`
        }
      ]);
      return;
    }

    if (cmd === 'ekadashi') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `[EXEC] Calculating Astronomical Fasting Ephemeris for 2026...
✓ Next Shukla Ekadashi: Pavitra Ekadashi (Parana: 06:12 AM)
✓ Next Krishna Ekadashi: Aja Ekadashi (Parana: 06:18 AM)
✓ Package: npm i ekadashi-api`
        }
      ]);
      return;
    }

    if (cmd === 'ocr') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `[EXEC] Triggering LiveScreenOCR Desktop Region Scan...
✓ Screen region captured: (x:240, y:180, w:800, h:450)
✓ Tesseract OCR Output: "SYSTEM AUTOMATION ACTIVE — 100% PRECISION"`
        }
      ]);
      return;
    }

    if (cmd === 'gif') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `[EXEC] Tenor Automated Agent Pipeline...
✓ Active batch task: 2,319+ GIF URLs processed.
✓ Background status: UNINTERRUPTED 24/7 EXECUTION.`
        }
      ]);
      return;
    }

    if (cmd === 'contact') {
      setHistory((prev) => [
        ...prev,
        userEntry,
        {
          type: 'output',
          text: `CONNECT WITH HARIPRAJWAL:
  GitHub: https://github.com/Hariprajwal
  Location: India`
        }
      ]);
      return;
    }

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    // Natural Language Query -> Route directly to OpenRouter AI Engine
    const question = raw.startsWith('ask ') ? raw.slice(4).trim() : raw;
    setHistory((prev) => [...prev, userEntry]);
    setIsAiLoading(true);

    try {
      const aiReply = await chatWithAI(AI_PROFILES.generalAssistant, question);
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `🤖 [AI RESPONSE]:\n${aiReply}`
        }
      ]);
    } catch (err) {
      setHistory((prev) => [
        ...prev,
        { type: 'error', text: `AI Error: ${err.message}` }
      ]);
    } finally {
      setIsAiLoading(false);
    }
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
        <div className="flex-1 p-4 font-mono text-xs space-y-3 overflow-y-auto text-slate-300">
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
                  : 'text-slate-200 whitespace-pre-wrap leading-relaxed'
              }`}
            >
              {item.text}
            </div>
          ))}

          {isAiLoading && (
            <div className="text-emerald-400 font-mono text-xs flex items-center gap-2 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              🤖 AI Engine analyzing & responding via OpenRouter...
            </div>
          )}

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
            placeholder='Type any question or command (e.g. "hello who are u", "help", "ai-stock")...'
            className="flex-1 bg-transparent text-xs font-mono text-slate-100 focus:outline-none placeholder-slate-500"
          />
          <button
            type="submit"
            disabled={isAiLoading || !inputVal.trim()}
            className="p-1.5 rounded bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
