export const profile = {
  name: 'Prakhar Pandey',
  role: 'AI Engineer · Agents, Post-training & Evals',
  availability: 'Open to AI internships now · Full-time from 2027',
  tagline:
    "Final-year Data Science & AI at IIT Guwahati. I post-train vision-language models, research multi-agent systems at UW's RAIVN Lab, shipped Skills and OAuth at Rowboat Labs (YC S24), and solo-built AI products with 30,000+ organic users.",
  location: 'IIT Guwahati, India',
  timezones: 'Remote across US & Singapore timezones',
  email: 'prakhar9999pandey@gmail.com',
  resume: './Prakhar_Pandey_Resume.pdf',
  links: {
    github: 'https://github.com/prakhar1605',
    linkedin: 'https://www.linkedin.com/in/prakhar-pandey-56267a2a2',
    x: 'https://x.com/PRAKHARPANDEY31',
    leetcode: 'https://leetcode.com/u/prakhar3104/',
    huggingface: 'https://huggingface.co/Prakharpandey31',
  },
}

// Credential strip under the hero headline — the fastest scan for a busy reader.
export const highlights = [
  { label: 'NeurIPS 2026 Workshop', detail: 'sole author', href: '#research' },
  { label: 'UW RAIVN Lab', detail: 'research', href: '#experience' },
  { label: 'Rowboat Labs', detail: 'YC S24', href: '#experience' },
  { label: '30,000+ users', detail: 'solo-built', href: '#projects' },
]

export const stats = [
  { value: '30,000+', label: 'Organic users on products I built solo' },
  { value: '30+', label: 'PRs merged at Rowboat Labs (YC S24)' },
  { value: '4', label: 'Remote AI roles across US & Singapore' },
  { value: '1,000+', label: 'LeetCode problems · 400+ day streak' },
]

export const experience = [
  {
    role: 'Research Intern',
    company: 'RAIVN Lab, University of Washington',
    companyLink: 'https://raivn.cs.washington.edu/',
    location: 'Seattle, WA (Remote)',
    period: 'Jul 2026 — Present',
    current: true,
    points: [
      "Built a multi-agent web-browsing system on Ai2's MolmoWeb where vision-language agents (MolmoWeb, Qwen-VL) drive real browsers from screenshots alone, behind policy-agnostic model adapters spanning three coordinate conventions.",
      'Implemented parallel orchestration — isolated browser contexts, best-of-N rollouts with an LLM judge, manager–worker DAG replanning — reaching a 2.71× speedup on live runs.',
      'Traced a 0/6 → 6/6 grounding failure to coordinate normalization; shipped a FastAPI run viewer with a task-graph view and timeline scrubber, and covered the system with 170 tests.',
    ],
    stack: ['Python', 'Playwright', 'asyncio', 'FastAPI', 'Vision-language agents'],
  },
  {
    role: 'Agentic AI Engineer Intern',
    company: 'Rowboat Labs (YC S24)',
    companyLink: 'https://github.com/rowboatlabs/rowboat',
    location: 'San Francisco (Remote)',
    period: 'May 2026 — Aug 2026',
    points: [
      'Implemented Skills support in Rowboat, an open-source AI coworker platform (15k+ GitHub stars): agents load packaged instruction sets and tools on demand, so new capabilities ship as installable packages instead of core-code changes.',
      'Shipped ChatGPT OAuth (OAuth 2.0 + PKCE) so users run agents on their existing ChatGPT/Codex subscription instead of managing separate API keys.',
      'Rebuilt provider and model selection around one shared ModelSelector used on 9 surfaces, with bring-your-own-key support.',
      'Merged 30+ PRs into a TypeScript/Electron production codebase, reviewed by both co-founders.',
    ],
    stack: ['TypeScript', 'Electron', 'OAuth 2.0 / PKCE', 'Agent runtime'],
  },
  {
    role: 'Product Engineer Intern — Founding Team',
    company: 'ThinkSpace AI',
    location: 'Singapore (Remote)',
    period: 'Dec 2025 — Mar 2026',
    points: [
      'Built an Electron research assistant with sentence-window RAG and page-anchored citations across PDF/DOCX, Google Drive and live web, behind a single retrieval layer.',
      'Evaluated for factual and citation accuracy by a legal QA team on a ~100-question gold standard.',
    ],
    stack: ['Electron', 'RAG', 'Embeddings', 'Google Drive API'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Compeers AI',
    location: 'United States (Remote)',
    period: 'Sep 2025 — Dec 2025',
    points: [
      'Shipped two market-research tools for a B2B intelligence platform: a 4-stage pipeline (search → SEC EDGAR 10-K → Google Trends → SWOT) and a Reddit audience profiler (PRAW, Laplace-smoothed scoring, VADER).',
    ],
    stack: ['Python', 'SEC EDGAR', 'NLP'],
  },
]

export const publications = [
  {
    title: 'Navigating Epistemic Parity in LLM Agents',
    subtitle: 'A benchmark for cross-source conflict resolution between memory and procedural skills',
    venue: 'NeurIPS 2026 Workshop',
    workshop: '“Who Verifies the Agents?”',
    status: 'Accepted',
    date: 'Dec 2026',
    arxiv: '2610.33128',
    authors: 'Prakhar Pandey · sole author',
    summary:
      'Production agents inject episodic memory and SKILL.md procedures into the same context with no defined precedence. When the two contradict, which one wins — and does the agent tell the user? I built a benchmark across four conflict types (factual, format, procedural, permission), graded deterministically over tool-call payloads and output structure.',
    findings: [
      { value: '52', label: 'scenarios across 4 conflict types' },
      { value: '1,383', label: 'graded runs · 3 open-weight models × 3 context conditions' },
      { value: '98.8%', label: 'of tool-call runs resolved the conflict silently, with no explanation' },
      { value: '28% → 90%', label: 'one generic “skill takes precedence” line flipped a model into performing forbidden irreversible actions' },
    ],
    links: [
      { label: 'Read on arXiv', href: 'https://arxiv.org/abs/2610.33128' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2610.33128' },
      { label: 'Code & data', href: 'https://github.com/prakhar1605/epistemic-parity-bench' },
    ],
  },
]

export const projects = [
  {
    name: 'Carrerlift',
    tag: 'Agentic AI career platform',
    blurb:
      'Solo-built and scaled with zero paid acquisition. Resume parsing → embeddings → vector search → LLM re-ranking against live jobs and 1,500+ research positions, with skill-gap analysis. A jobs pipeline refreshes 3,500+ openings across India, US and EU every 12–24 hours and sends personalized alerts — unattended, at near-zero infra cost.',
    metrics: [
      { value: '30,000+', label: 'organic users' },
      { value: '100+', label: 'paid users in 15 days' },
    ],
    stack: ['Next.js', 'Supabase', 'LLM Agents', 'Vector Search'],
    links: [{ label: 'Live site', href: 'https://www.carrerlift.in/' }],
    live: true,
  },
  {
    name: 'GRPO Post-Training for Web Grounding',
    tag: 'Post-training · open weights',
    blurb:
      'Post-trained Qwen2.5-VL-3B with SFT → GRPO using a verifiable geometric click reward, beating SFT alone by 4.5 pts in ~2 A100-hours. Open-sourced the LoRA adapters and eval harness — and caught a coordinate-space mismatch that made the naive baseline read 10% instead of 72%.',
    metrics: [
      { value: '71.6 → 81.8%', label: 'ScreenSpot-Web click accuracy' },
      { value: '59 → 84%', label: 'on icons' },
    ],
    stack: ['Qwen2.5-VL', 'TRL', 'Unsloth', 'LoRA', 'PyTorch'],
    links: [
      { label: 'Code', href: 'https://github.com/prakhar1605/grpo-web-grounding' },
      { label: 'Weights', href: 'https://huggingface.co/Prakharpandey31/qwen2.5-vl-3b-grpo-screenspot-web' },
    ],
  },
  {
    name: 'Drona AI',
    tag: 'Autonomous interview agent',
    blurb:
      'Adaptive mock-interview platform that generates role-specific questions from uploaded PDFs and adjusts difficulty from a rolling performance window. Re-architected from Streamlit to serverless Next.js, replacing a ~500 MB ChromaDB stack with lightweight client-side scoring.',
    metrics: [
      { value: '1,000+', label: 'organic users' },
      { value: '$0', label: 'infra cost' },
    ],
    stack: ['Next.js', 'TypeScript', 'Vercel', 'OpenRouter', 'Redis'],
    links: [{ label: 'Live site', href: 'https://www.dronaai.in/' }],
    live: true,
  },
  {
    name: 'OpenCollab MCP',
    tag: 'Open-source MCP server',
    blurb:
      'Find your next open-source contribution from your AI chat. Gives Claude, Cursor or any MCP client focused GitHub tools to find skill-matched issues, check repo health, verify nobody has claimed them, and plan the PR. Relaunched lean — cut 22 tools to 6, because big tool lists hurt LLM routing.',
    metrics: [
      { value: '22 → 6', label: 'tools, for better routing' },
      { value: 'PyPI', label: 'uvx opencollab-mcp' },
    ],
    stack: ['Python', 'FastMCP', 'GitHub API'],
    links: [
      { label: 'Code', href: 'https://github.com/prakhar1605/Opencollab-mcp' },
      { label: 'PyPI', href: 'https://pypi.org/project/opencollab-mcp/' },
    ],
  },
]

export const skills = [
  {
    title: 'Agents & LLMs',
    items: ['Multi-agent orchestration', 'Tool calling', 'MCP', 'LangGraph', 'LangChain', 'CrewAI', 'RAG', 'LLM evals', 'Vision-language agents'],
  },
  {
    title: 'ML & Post-training',
    items: ['PyTorch', 'Hugging Face Transformers', 'TRL', 'Unsloth', 'PEFT / LoRA', 'SFT', 'GRPO', 'Scikit-learn'],
  },
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express', 'asyncio', 'Playwright', 'OAuth 2.0 (PKCE)', 'REST', 'SSE', 'WebSockets'],
  },
  {
    title: 'Frontend & Desktop',
    items: ['Next.js', 'React', 'Electron', 'Tailwind CSS'],
  },
  {
    title: 'Data & Infra',
    items: ['PostgreSQL', 'Supabase', 'Redis', 'MongoDB', 'FAISS', 'ChromaDB', 'Docker', 'Vercel', 'GitHub Actions'],
  },
]

export const education = {
  school: 'Indian Institute of Technology Guwahati',
  degree: 'B.S. (Honors) in Data Science and Artificial Intelligence',
  period: 'Expected Aug 2027',
}
