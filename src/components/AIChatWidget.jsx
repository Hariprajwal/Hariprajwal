import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, Minimize2, Maximize2 } from 'lucide-react';
import { chatWithAI, AI_PROFILES } from '../lib/openrouter';

const STARTERS = [
  'What can Hariprajwal build?',
  'Tell me about the AI Stock Calendar engine',
  'How does the Ekadashi API work?',
  'What is MIT Manipal CS Engineering?',
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm Hariprajwal's AI assistant, powered by OpenRouter. Ask me anything about his projects, AI stack, or MIT Manipal CS Engineering work!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeProfile, setActiveProfile] = useState('generalAssistant');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const reply = await chatWithAI(AI_PROFILES[activeProfile], userMsg);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `❌ Error: ${err.message}` }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const profileLabels = {
    generalAssistant: '🤖 General',
    stockAnalyst: '📈 Stock AI',
    ekadashiExplain: '🌙 Ekadashi',
    codeReviewer: '💻 Code Review',
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-xl shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open AI Chat"
        title="Chat with Hariprajwal's AI"
      >
        <Bot className="w-7 h-7 text-slate-950" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#06080d] animate-pulse" />
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-slate-700/80"
      style={{ width: '360px', height: isMinimized ? '56px' : '520px', background: '#0a0f1a', transition: 'height 0.25s ease' }}
    >
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-slate-950" />
          </div>
          <div>
            <div className="text-xs font-display font-bold text-slate-100 flex items-center gap-1.5">
              Hari AI <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-[10px] font-mono text-emerald-400">OpenRouter • Free Models</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized((p) => !p)} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-slate-200">
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-rose-400">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Profile Selector */}
          <div className="px-3 py-2 bg-slate-950/80 border-b border-slate-800/80 flex gap-1.5 overflow-x-auto shrink-0">
            {Object.entries(profileLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveProfile(key)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono whitespace-nowrap transition-colors shrink-0 ${
                  activeProfile === key
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2.5 rounded-xl text-[11px] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-100 font-mono'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                  OpenRouter AI thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Starter Prompts */}
          {messages.length === 1 && (
            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-slate-800/80 shrink-0">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
            className="px-3 py-2.5 bg-slate-900/80 border-t border-slate-800 flex gap-2 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Hari's projects..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-[11px] font-mono text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}
