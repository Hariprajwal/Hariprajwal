import React, { useState } from 'react';
import { Github, Mail, Send, CheckCircle2, Globe, Heart, ArrowUp, Cpu } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-[#040609] border-t border-slate-200 dark:border-slate-800/80 relative pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Left Side: Brand Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-slate-900 dark:bg-[#080c14] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-slate-900 dark:text-slate-100">
                HARIPRAJWAL
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              Full-stack AI Systems Engineer & Autonomous Pipeline Developer at MIT Manipal. Ready for collaborative AI projects, API integrations, and innovative system developments.
            </p>

            <div className="flex items-center gap-4 font-mono text-xs text-slate-700 dark:text-slate-300">
              <a
                href="https://github.com/Hariprajwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" /> GitHub Profile
              </a>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-emerald-300">
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span>Hariprajwal AI Core • 100% Active</span>
            </div>
          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">
                Send a Direct Message to Hariprajwal
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mb-6">
                Have a project idea, API query, or collaboration offer? Drop a line below.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 animate-fadeIn font-mono text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been dispatched to Hariprajwal.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                      placeholder="Hi Hariprajwal, I loved your Ai-Stock-Calendar and Ekadashi-api project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white dark:text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> Dispatch Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} K R Hari Prajwal (Hariprajwal). MIT Manipal CS Engineering.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 shadow-sm"
          >
            <ArrowUp className="w-4 h-4" /> Top
          </button>
        </div>

      </div>
    </footer>
  );
}
