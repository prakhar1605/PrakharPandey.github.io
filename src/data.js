export const profile = {
  name: 'Prakhar Pandey',
  role: 'AI Engineer · LLMs & Agentic Systems',
  tagline:
    'I build agentic systems, RAG pipelines, and LLM-powered products — shipping solo to thousands of users and contributing open-source tooling the developer community actually uses.',
  location: 'IIT Guwahati · B.S. Data Science & AI',
  email: 'prakhar9999pandey@gmail.com',
  phone: '+91 7607398940',
  links: {
    github: 'https://github.com/prakhar1605',
    linkedin: 'https://www.linkedin.com/in/prakhar-pandey-56267a2a2',
    leetcode: 'https://leetcode.com/',
  },
}

export const stats = [
  { value: '3,000+', label: 'Users served' },
  { value: '3', label: 'AI internships' },
  { value: '1710', label: 'LeetCode rating' },
  { value: '700+', label: 'Problems solved' },
]

export const experience = [
  {
    role: 'Agentic AI Intern',
    company: 'Rowboat Labs (YC S24)',
    location: 'San Francisco (Remote)',
    period: 'May 2026 — Present',
    current: true,
    points: [
      'Engineering production-ready agentic workflows and background task agents for an open-source AI coworker platform (15k+ GitHub stars), operating over persistent knowledge graphs built from user emails and meeting notes.',
      'Collaborating directly with both co-founders to debug and optimize multi-step agent orchestration pipelines across a TypeScript-first codebase, improving reliability and reducing failure modes in production.',
    ],
  },
  {
    role: 'AI Product Engineer Intern — Founding Team',
    company: 'ThinkSpace AI',
    location: 'Singapore (Remote)',
    period: 'Dec 2025 — Mar 2026',
    points: [
      'Designed and built a multi-document AI research system (PDF, DOCX, TXT) with semantic chunking mapped to precise page coordinates, enabling exact clickable citations and in-document highlights for fully traceable LLM outputs.',
      'Architected a sentence-window RAG pipeline using dense embeddings and cosine-similarity retrieval with coordinate-anchored citation rendering, reducing hallucination surface to near-zero.',
      'Extended the platform with live web search and multi-source research synthesis for real-time, grounded responses alongside document context.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Compeers AI',
    location: 'United States (Remote)',
    period: 'Sep 2025 — Dec 2025',
    points: [
      'Designed and shipped the core LLM analysis engine for a B2B company-intelligence platform, implementing structured multi-step reasoning chains over enterprise datasets to surface competitive signals for founders.',
      'Built an end-to-end cultural-trend pipeline that scraped Twitter and Reddit, applied NLP-based signal extraction, and auto-generated structured insight reports.',
    ],
  },
]

export const projects = [
  {
    name: 'OpenCollab MCP',
    tag: 'Open Source',
    blurb:
      'An open-source MCP server that surfaces skill-matched "good first issues" from GitHub — with repo health scoring, PR plan generation, and contribution-impact estimation across 7 integrated tools. Zero-infra via STDIO, installable through uvx in Claude Desktop & Cursor. MIT licensed.',
    stack: ['Python', 'FastMCP', 'GitHub API'],
    link: 'https://github.com/prakhar1605',
    featured: true,
  },
  {
    name: 'CareerLift',
    tag: 'AI Career Platform',
    blurb:
      'Full-stack AI career platform serving 3,000+ users — aggregating live jobs, 1,500+ IIT professor research roles, an LLM resume analyzer with skill-gap detection, 2,000+ HR contacts for one-click outreach, and an AI cold-email generator.',
    stack: ['Next.js', 'Supabase', 'Resend'],
    link: '#',
    live: true,
    featured: true,
  },
  {
    name: 'Drona AI',
    tag: 'Autonomous Interview Agent',
    blurb:
      'Autonomous AI interview platform with an adaptive difficulty engine and long-term memory via ChromaDB-backed RAG — reached 500+ users in two weeks, fully organic. Real-time token streaming with Redis session caching for concurrency at scale.',
    stack: ['Python', 'Streamlit', 'ChromaDB', 'Redis'],
    link: 'https://www.dronaai.in/',
    live: true,
    featured: true,
  },
  {
    name: 'DSA Visualizer',
    tag: 'Interactive EdTech',
    blurb:
      'Interactive algorithm visualization platform for binary trees, sorting algorithms, and core data structures — built with vanilla JavaScript for smooth, real-time animations and educational clarity.',
    stack: ['JavaScript', 'Algorithms', 'Visualization'],
    link: 'https://dsa-visualizer-tool-six.vercel.app/',
    live: true,
  },
]

export const skills = [
  {
    title: 'AI & LLMs',
    items: ['LangChain', 'LangGraph', 'RAG Architectures', 'Prompt Engineering', 'FAISS', 'ChromaDB', 'MCP', 'Agentic Systems'],
  },
  {
    title: 'Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face', 'NLP'],
  },
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth', 'Async'],
  },
  {
    title: 'Frontend & Data',
    items: ['React.js', 'Next.js', 'Streamlit', 'Pandas', 'NumPy'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Git', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Redis'],
  },
]

export const education = {
  school: 'Indian Institute of Technology Guwahati',
  degree: 'B.S. (Honors) in Data Science and Artificial Intelligence',
  period: 'Aug 2023 — May 2027',
}
