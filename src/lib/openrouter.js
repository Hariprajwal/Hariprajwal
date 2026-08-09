/**
 * OpenRouter AI Engine
 * Connects to OpenRouter API with automatic free model fallback chain.
 * If one model is unavailable/rate-limited, the next free model is tried.
 * 
 * For Vercel: Set VITE_OPENROUTER_API_KEY in Vercel Dashboard → Project → Settings → Environment Variables
 * For Local:  Set in .env.local as VITE_OPENROUTER_API_KEY=sk-or-v1-...
 */

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Free model fallback chain — if one fails, tries next
const FREE_MODELS = [
  'deepseek/deepseek-chat',
  'mistralai/mistral-7b-instruct:free',
  'meta-llama/llama-3-8b-instruct:free',
  'google/gemma-7b-it:free',
  'openchat/openchat-7b:free',
  'gryphe/mythomist-7b:free',
];

const getApiKey = () => {
  return import.meta.env.VITE_OPENROUTER_API_KEY || '';
};

/**
 * Chat with OpenRouter AI using automatic model fallback.
 * @param {string} systemPrompt - System instructions defining the AI role
 * @param {string} userMessage - The user's message
 * @returns {Promise<string>} - The AI response text
 */
export async function chatWithAI(systemPrompt, userMessage) {
  const apiKey = getApiKey();

  if (!apiKey) {
    return '⚠️ OpenRouter API key not configured. Add VITE_OPENROUTER_API_KEY to your Vercel environment variables.';
  }

  let lastError = null;

  for (const model of FREE_MODELS) {
    try {
      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://github.com/Hariprajwal',
          'X-Title': 'Hariprajwal AI Portfolio',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Model ${model} returned ${response.status}: ${errText}`);
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      if (content) {
        return `[${model}]\n${content.trim()}`;
      }
      throw new Error(`Empty response from ${model}`);

    } catch (err) {
      console.warn(`[OpenRouter] Trying next model. ${model} failed:`, err.message);
      lastError = err;
    }
  }

  return `❌ All AI models are temporarily unavailable. Last error: ${lastError?.message || 'Unknown'}`;
}

// Preset AI prompt profiles for Hariprajwal's website features
export const AI_PROFILES = {
  stockAnalyst: `You are a concise autonomous AI stock catalyst analyst. 
When given an NSE/BSE stock ticker, provide: 
1. A brief fundamental outlook (2-3 lines) 
2. 3 key catalyst drivers 
3. A short-term directional bias (bullish/bearish/neutral) with one-line rationale.
Keep response under 150 words. Use ✅ ⚠️ 📈 📉 emojis for visual clarity.`,

  ekadashiExplain: `You are a knowledgeable Vedic calendar assistant specialized in Hindu astronomy. 
When asked about a specific Ekadashi or Sankashti date, provide: 
1. The significance of the tithi 
2. Fasting and parana timing guidance 
3. One relevant shloka or mantra recommendation.
Keep response concise (under 120 words).`,

  codeReviewer: `You are Hariprajwal's AI code reviewer. 
Review any code snippet provided and give: 
1. Code quality rating (1-10) 
2. Top 3 improvement suggestions 
3. Optimized version or key fixes.
Be concise, technical, and direct. Use \`code blocks\` where relevant.`,

  generalAssistant: `You are the AI assistant on Hariprajwal's developer portfolio. 
Hariprajwal (K R Hari Prajwal) is a MIT Manipal Computer Science Engineering student building:
- Autonomous LLM swarms for NSE stock catalysts  
- Astronomical APIs (Ekadashi, Sankashti) published on NPM
- Desktop vision OCR tools (LiveScreenOCR)
- AI storytelling & webtoon pipelines (Ganesha-Manwa)
- Batch automation agents (Tenor pipeline)

Answer visitor questions about his projects, skills, and capabilities in an engaging, technical way. Keep replies concise (under 100 words).`,
};
