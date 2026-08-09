import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Search, RefreshCw, Code2, AlertCircle } from 'lucide-react';

export default function LiveGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLang, setFilterLang] = useState('All');

  const fallbackRepos = [
    {
      id: 1,
      name: 'Ai-stock-calendar',
      description: 'Autonomous Indian Stock Catalyst Calendar and AI Intelligence Engine using multi-provider LLM swarm.',
      html_url: 'https://github.com/Hariprajwal/Ai-stock-calendar',
      language: 'Python',
      stargazers_count: 12,
      forks_count: 3,
      updated_at: '2026-08-01T12:00:00Z'
    },
    {
      id: 2,
      name: 'Ekadashi-api',
      description: 'API & NPM Package calculating Ekadashi and Sankashti fasting dates with astronomical accuracy.',
      html_url: 'https://github.com/Hariprajwal/Ekadashi-api',
      language: 'JavaScript',
      stargazers_count: 8,
      forks_count: 2,
      updated_at: '2026-07-28T12:00:00Z'
    },
    {
      id: 3,
      name: 'LiveScreenOCR-screen-reader-',
      description: 'Desktop OCR tool like Google Lens for live screen region text extraction.',
      html_url: 'https://github.com/Hariprajwal/LiveScreenOCR-screen-reader-',
      language: 'Python',
      stargazers_count: 5,
      forks_count: 1,
      updated_at: '2026-07-15T12:00:00Z'
    },
    {
      id: 4,
      name: 'Ganesha-manwa',
      description: 'AI storytelling and webtoon/manga content creation automation engine.',
      html_url: 'https://github.com/Hariprajwal/Ganesha-manwa',
      language: 'Python',
      stargazers_count: 4,
      forks_count: 0,
      updated_at: '2026-06-20T12:00:00Z'
    },
    {
      id: 5,
      name: 'PROMPT-FOR-STUDYING-VTU',
      description: 'Structured AI prompt framework engineered for VTU Computer Science students.',
      html_url: 'https://github.com/Hariprajwal/PROMPT-FOR-STUDYING-VTU',
      language: 'Markdown',
      stargazers_count: 15,
      forks_count: 4,
      updated_at: '2026-05-10T12:00:00Z'
    },
    {
      id: 6,
      name: 'my-resume',
      description: 'Personal web resume and portfolio showcase built with clean frontend stack.',
      html_url: 'https://github.com/Hariprajwal/my-resume',
      language: 'HTML',
      stargazers_count: 3,
      forks_count: 1,
      updated_at: '2026-04-02T12:00:00Z'
    }
  ];

  const fetchGitHubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://api.github.com/users/Hariprajwal/repos?sort=updated&per_page=30');
      if (!res.ok) throw new Error('GitHub API rate limit or network issue');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch (err) {
      console.warn('Falling back to static GitHub data:', err);
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  // Filtering
  const filteredRepos = repos.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = filterLang === 'All' || r.language === filterLang;
    return matchesSearch && matchesLang;
  });

  const languages = ['All', ...new Set(repos.map((r) => r.language).filter(Boolean))];

  return (
    <section id="live-repos" className="py-20 bg-slate-950/80 border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
              <Github className="w-3.5 h-3.5" /> LIVE GITHUB API INTEGRATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Public Repositories <span className="text-gradient-emerald">@Hariprajwal</span>
            </h2>
          </div>

          <button
            onClick={fetchGitHubRepos}
            disabled={loading}
            className="mt-4 md:mt-0 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs font-mono text-slate-300 hover:text-emerald-400 flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Sync with GitHub API
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Language Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-mono text-slate-400 shrink-0">Filter:</span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilterLang(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors shrink-0 ${
                  filterLang === lang
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-16 text-center text-slate-400 font-mono text-sm flex items-center justify-center gap-2">
            <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin" />
            Fetching live repository stream from github.com/Hariprajwal...
          </div>
        )}

        {/* Repository Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-emerald-500/50 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-display font-bold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-2 truncate">
                      <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 transition-colors" />
                  </div>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed mb-4">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1 text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 hover:text-amber-400">
                      <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stargazers_count || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-cyan-400" /> {repo.forks_count || 0}
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-500">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
