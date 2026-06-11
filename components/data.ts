export const PANEL_META = {
  about:    { color: '#2a6a9a', headBg: '#e8f4fa', title: 'About Me 🐧' },
  projects: { color: '#1a6a9a', headBg: '#e8f4fa', title: 'Projects ❄️'  },
  resume:   { color: '#8a4010', headBg: '#fff8e8', title: 'Resume 📋'    },
  contact:  { color: '#1a4a8a', headBg: '#e8f0fa', title: 'Contact 📬'   },
} as const

export const projects = [
  {
    title: 'RAG Document Intelligence System',
    tags: ['LangChain', 'FAISS', 'FastAPI', 'LLaMA3', 'Hugging Face', 'Groq'],
    desc: '4-tier distributed pipeline (ingest → embed → vector store → LLM). 6-endpoint REST API, sub-10s latency, $0 API cost via open-source stack.',
    link: 'https://github.com/Ayesha037/rag-chatbot',
  },
  {
    title: 'Transaction Graph Intelligence & Fraud Detection',
    tags: ['Python', 'node2vec', 'Graph Analytics'],
    desc: 'Large-scale transaction graph processing with node2vec embeddings. Interactive network visualisations for analyst fraud investigation.',
    link: 'https://github.com/Ayesha037/GraphShield',
  },
  {
    title: 'AMR Prediction — Clinical Decision Support',
    tags: ['XGBoost', 'Scikit-learn', 'SHAP', 'BVBRC Datasets'],
    desc: '0.87 F1 and 0.91 AUC on 8 k bacterial isolates. SHAP-based interpretability for clinical stakeholders.',
    link: 'https://github.com/Ayesha037/AMR-Project',
  },
  {
    title: 'Computer Vision Safety Monitor',
    tags: ['Python', 'OpenCV', 'PyTorch', 'CNN'],
    desc: 'Real-time video analysis pipeline for hazard detection in industrial environments using CNN classifiers.',
    link: 'https://github.com/Ayesha037/safety_monitor',
  },
  {
    title: 'AI-Powered HR Assistant',
    tags: ['RAG', 'Prompt Engineering', 'Figma', 'UX Design'],
    desc: 'Chat-based assistant for payroll, compliance, onboarding. Simulated 40 % task speed improvement through structured UX.',
  },
  {
    title: 'Ad Campaign Performance Analytics',
    tags: ['Python', 'Excel', 'XGBoost', 'Data Visualisation'],
    desc: 'End-to-end analytics pipeline — CTR, ROAS, CPL, conversion rates across multi-channel campaigns.',
    link: 'https://github.com/Ayesha037/ad_campaign_project',
  },
]

import type { CSSProperties } from 'react'

export const skillGroups: { label: string; style: CSSProperties; tags: string[] }[] = [
  {
    label: 'Languages',
    style: { background: '#d0eefa', borderColor: '#a8d8f5', color: '#1a5a8a' },
    tags: ['Python', 'JavaScript', 'SQL', 'NoSQL'],
  },
  {
    label: 'Frontend & UX',
    style: { background: '#fff8e0', borderColor: '#f5d878', color: '#8a6a10' },
    tags: ['React.js', 'HTML', 'CSS', 'Responsive UI', 'Prototyping(Figma)'],
  },
  {
    label: 'Backend & API',
    style: { background: '#ffe8e0', borderColor: '#f5a878', color: '#8a3010' },
    tags: ['FastAPI', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    label: 'AI & LLMs',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#6030a0' },
    tags: ['LangChain', 'LlamaIndex', 'FAISS', 'Hugging Face', 'LLaMA3', 'RAG Pipelines'],
  },
  {
    label: 'Data & Machine Learning',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#83acc1' },
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SHAP', 'Random Forest', 'Feature Engineering', 'SMOTE'],
  },
   {
    label: 'Database',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#7bdcd3' },
    tags: ['MongoDB', 'SQL', 'Vector database(FAISS)'],
  },
   {
    label: 'Tools & MLOps',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#86e07a' },
    tags: ['Git', 'Docker(basics)', 'Jupyter', 'Google Colab', 'Agile/SDLC'],
  },
   {
    label: 'Product & Design',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#b7f882' },
    tags: ['UX Research', 'Wireframing', 'Design Systems', 'Human-AI Interaction', 'AI UX'],
  },
   {
    label: 'Analytics & Business',
    style: { background: '#f0e8ff', borderColor: '#c0a0f0', color: '#f2e37e' },
    tags: ['Data Visualization', 'Dashboard Development', 'KPI Tracking', 'Campaign Analytics', 'Decision Making'],
  },
]
