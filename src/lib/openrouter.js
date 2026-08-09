/**
 * OpenRouter AI Engine & Smart Fallback Service
 * Supports OpenRouter Auto Model Routing (openrouter/auto) + Free Models Chain
 * 
 * Vercel Setup: Add VITE_OPENROUTER_API_KEY in Vercel Dashboard -> Environment Variables
 */

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// OpenRouter auto-rotate model + free models fallback chain
const MODELS = [
  'openrouter/auto',
  'google/gemini-2.0-flash-lite-preview-02-05:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'deepseek/deepseek-r1:free',
  'qwen/qwen-2.5-coder-32b-instruct:free',
  'mistralai/mistral-7b-instruct:free'
];

const getApiKey = () => {
  return import.meta.env.VITE_OPENROUTER_API_KEY || '';
};

/**
 * Intelligent Local Fallback Generator for seamless offline/invalid key response
 */
function generateSmartFallbackResponse(userMessage) {
  const query = userMessage.toLowerCase();

  if (query.includes('who are you') || query.includes('who r u') || query.includes('hello') || query.includes('hi') || query.includes('hey')) {
    return `Hello! I am K R Hari Prajwal's AI Assistant. I am an intelligent multi-agent platform designed to showcase Hariprajwal's work in AI systems engineering, astronomical calculation APIs, computer vision OCR, and MIT Manipal CS projects!`;
  }

  if (query.includes('stock') || query.includes('nse') || query.includes('market') || query.includes('calendar')) {
    return `📈 [Ai-Stock-Calendar Engine]: Hariprajwal built an autonomous Indian Stock Catalyst Calendar that monitors National Stock Exchange (NSE) metrics, processes historical snapshots, and runs multi-LLM research swarms for trading forecasts.`;
  }

  if (query.includes('ekadashi') || query.includes('fasting') || query.includes('api') || query.includes('npm')) {
    return `🌙 [Ekadashi-API & NPM Package]: An astronomical ephemeris calculation engine published on NPM (\`npm i ekadashi-api\`) that accurately computes Ekadashi and Sankashti fasting dates globally.`;
  }

  if (query.includes('ocr') || query.includes('lens') || query.includes('screen') || query.includes('vision')) {
    return `👁️ [LiveScreenOCR Engine]: A desktop computer vision tool equivalent to Google Lens that captures selected screen regions live and extracts text instantly.`;
  }

  if (query.includes('manipal') || query.includes('mit') || query.includes('vtu') || query.includes('college') || query.includes('degree')) {
    return `🎓 [MIT Manipal CS Engineering]: Hariprajwal is pursuing Computer Science Engineering at Manipal Institute of Technology (MIT Manipal), focusing on system software, algorithms, and AI agent swarms.`;
  }

  if (query.includes('contact') || query.includes('email') || query.includes('github') || query.includes('linkedin')) {
    return `🤝 You can connect with Hariprajwal on GitHub (https://github.com/Hariprajwal) or LinkedIn (https://linkedin.com/in/k-r-hari-prajwal-655373256)!`;
  }

  return `⚡ [Hariprajwal AI Swarm]: Analyzed query "${userMessage}". Systems active across autonomous multi-agent pipelines, astronomical ephemeris calculations, and high-performance C++/Python engineering.`;
}

/**
 * Query OpenRouter AI with automatic free model failover and local smart fallback.
 */
export async function chatWithAI(systemPrompt, userMessage) {
  const apiKey = getApiKey();

  if (apiKey) {
    for (const model of MODELS) {
      try {
        const response = await fetch(OPENROUTER_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://github.com/Hariprajwal/Hariprajwal',
            'X-Title': 'Hariprajwal AI Portfolio'
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userMessage }
            ],
            max_tokens: 350,
            temperature: 0.7
          })
        });

        if (response.ok) {
          const data = await response.json();
          const content = data?.choices?.[0]?.message?.content;
          if (content && content.trim()) {
            return content.trim();
          }
        }
      } catch (err) {
        console.warn(`[OpenRouter] Failover trying next model for ${model}...`, err);
      }
    }
  }

  // Smart Fallback if API key returns 401 or network issue
  return generateSmartFallbackResponse(userMessage);
}

// Preset AI prompt profiles
export const AI_PROFILES = {
  stockAnalyst: `You are Hariprajwal's stock catalyst analyst AI. Given a stock ticker or prompt, provide 3 key catalyst drivers, fundamental outlook, and short-term directional bias. Keep response under 120 words.`,

  ekadashiExplain: `You are Hariprajwal's astronomical calendar assistant AI. Explain Hindu fasting tithis, astronomical ephemeris calculations, and parana timings concisely (under 100 words).`,

  codeReviewer: `You are Hariprajwal's AI code reviewer. Provide a code quality rating, top 3 improvements, and optimized suggestions concisely.`,

  generalAssistant: `You are Hariprajwal's AI Assistant on his portfolio website. Hariprajwal is a MIT Manipal Computer Science Engineering student building AI stock swarms, astronomical APIs, desktop OCR tools, and content automation. Answer visitor queries concisely and intelligently.`
};
