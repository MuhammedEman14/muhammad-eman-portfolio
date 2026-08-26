export const profile = {
  name: "Muhammad Eman",
  initials: "ME",
  title: "Full Stack AI Engineer",
  tagline: "Engineering production-grade",
  taglineAccent: "AI systems",
  taglineEnd: "that turn data, voice, and vision into real business outcomes.",
  intro:
    "I build end-to-end AI products — from multi-agent LLM pipelines and computer-vision suites to real-time telephony platforms — and ship them to production.",
  email: "mueman14@gmail.com",
  github: "https://github.com/MuhammedEman14",
  linkedin: "https://www.linkedin.com/in/muhammad-eman-0b7304247/",
  location: "Pakistan",
  availability:
    "Currently open to senior AI engineering roles, LLM/agentic-workflow consulting, and long-term product collaborations.",
};

export type Skill = { title: string; skills: string[]; icon: string };

export const expertise: Skill[] = [
  {
    title: "AI & LLM Systems",
    icon: "brain",
    skills: [
      "GPT / Claude / Gemini APIs",
      "RAG Pipelines",
      "LangChain",
      "Vector DBs (Pinecone / FAISS)",
      "Whisper (ASR)",
      "OCR (Tesseract / EasyOCR)",
      "Prompt Engineering",
    ],
  },
  {
    title: "Machine Learning & Vision",
    icon: "eye",
    skills: [
      "PyTorch / TensorFlow",
      "Scikit-learn",
      "Time-series Forecasting",
      "YOLO / OpenCV",
      "Face Recognition & Anti-Spoofing",
      "Generative Image / Video (VEO3, WAN 2.2)",
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    skills: [
      "Python / FastAPI",
      "Go",
      "PostgreSQL / TimescaleDB",
      "Redis",
      "Apache Kafka",
      "WebSockets",
      "JWT / OAuth2",
    ],
  },
  {
    title: "Frontend, Cloud & DevOps",
    icon: "cloud",
    skills: [
      "Vue 3 / PrimeVue",
      "React / Next.js",
      "TypeScript / Tailwind",
      "Docker / GitHub Actions",
      "AWS S3 / Azure",
      "FreeSWITCH / Telnyx (VoIP)",
      "n8n / Make / Zapier",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: string;
  image: string;
  imageAlt: string;
  width?: number;
  height?: number;
  /** Source file is cropped at the bottom — fade the edge so it looks intentional. */
  fadeBottom?: boolean;
  secondaryImage?: string;
  challenge: string;
  solution: string;
  outcome: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "ringba-clone",
    title: "Pay-Per-Call Tracking & Routing Platform",
    period: "2025 – Present",
    category: "Telephony · Real-time Analytics",
    image: "",
    imageAlt: "",
    challenge:
      "Performance-marketing businesses needed to know which ad generated each inbound phone call, route it to the best buyer in milliseconds, record it, and see live analytics — the same problem Ringba solves at enterprise scale.",
    solution:
      "Built a full Ringba-class platform: FastAPI backend with PostgreSQL + TimescaleDB, a Go dial-plan router that answers FreeSWITCH mod_xml_curl requests from Redis alone, Telnyx SIP trunking, Kafka event pipelines, a sandboxed QuickJS/Deno sidecar for operator JavaScript, and a Vue 3 + PrimeVue dashboard with live WebSocket call boards.",
    outcome:
      "Delivered campaigns, tracking numbers, ring trees, real-time bidding targets, caps, postbacks, and a tenant-isolated billing service — all covered by property-based, contract (Schemathesis) and Playwright test suites and CI/CD.",
    tech: [
      "FastAPI",
      "Go",
      "FreeSWITCH",
      "Telnyx",
      "Kafka",
      "TimescaleDB",
      "Redis",
      "Vue 3",
      "Docker",
    ],
  },
  {
    slug: "cartoon-video-pipeline",
    title: "AI Cartoon Video Generation Pipeline",
    period: "2025",
    category: "Generative AI · Video",
    image: "/projects/AI-Cartoon-Video-Generation-Pipeline.jpg",
    width: 392,
    height: 623,
    imageAlt: "Flowchart of the two-phase AI cartoon video generation pipeline",
    secondaryImage: "/projects/AI-Cartoon-Character-Sample.png",
    challenge:
      "A YouTube channel needed a steady stream of consistent cartoon episodes, but producing character-accurate scenes and videos by hand took hours per clip.",
    solution:
      "Designed a two-phase pipeline: Phase 1 generates scenario-based character images from a base image (GPT Image 1, later Nano Banana via Replicate); Phase 2 refines the raw prompt with the GPT API and routes to VEO3 (paid) or WAN 2.2 (free) for video synthesis.",
    outcome:
      "Turned a base character image plus a one-line scene description into a finished cartoon video in minutes, with a cost-aware paid/free rendering switch.",
    tech: ["Replicate", "GPT API", "Nano Banana", "VEO3", "WAN 2.2", "Python"],
  },
  {
    slug: "toxicology-report-generator",
    title: "Automated Toxicology Report Generator",
    period: "2024",
    category: "LLM · Web Scraping · NLP",
    image: "/projects/Automated-Toxicology-Report-Generator-full.jpg",
    width: 1024,
    height: 1536,
    imageAlt: "Automated toxicology report generator for chemical compounds",
    challenge:
      "Safety professionals spent days compiling toxicology dossiers for chemical compounds from scattered scientific and regulatory sources.",
    solution:
      "Built an AI system that takes a CAS number or compound name, scrapes PubMed, Google Scholar, NIOSH, FDA and IARC, filters irrelevant content with NLP, and compiles structured findings (in vivo / in vitro results, natural occurrence), regulatory classifications and risk assessments with citations.",
    outcome:
      "Reports and raw source data are stored in AWS S3 for traceability, giving researchers a cited, reproducible report in minutes instead of days.",
    tech: ["Python", "NLP", "Web Scraping", "LLM", "AWS S3"],
  },
  {
    slug: "earlibird-automation",
    title: "Earlibird AI Automation Platform",
    period: "2024",
    category: "Workflow Automation · CRM",
    image: "/projects/Earlibird-AI-Automation-Platform.png",
    width: 695,
    height: 480,
    imageAlt: "Mind map of the Earlibird AI automation platform",
    challenge:
      "Small businesses were losing leads to slow follow-ups and manual scheduling, with customer data scattered across channels.",
    solution:
      "Integrated Make.com, n8n, Zapier and GoHighLevel to automate lead capture, scheduling, follow-ups and support across SMS, email, Meta (FB/IG) and live chat, with CRM sync, contact reactivation, AI-driven web forms and centralized funnels + reporting.",
    outcome:
      "Faster response times, higher conversions and significantly reduced operational overhead for the business.",
    tech: ["n8n", "Make.com", "Zapier", "GoHighLevel", "Meta APIs", "CRM"],
  },
  {
    slug: "crypto-forex-trading-bot",
    title: "AI-Powered Crypto & Forex Trading Bot",
    period: "2024",
    category: "ML · Time-series · Trading",
    image: "/projects/AI-Crypto-Forex-Trading-Bot.png",
    width: 1024,
    height: 1536,
    imageAlt: "AI-powered crypto and forex trading bot overview",
    challenge:
      "Traders needed reliable, data-driven predictions across both crypto and forex markets instead of gut-feel entries.",
    solution:
      "Trained ML models on large-scale historical data from Binance and OKX (BTC, ETH, XRP, SOL, DOGE, SUI) plus key forex pairs for hourly, daily and weekly trend prediction, with future-trend simulation and automated execution based on confidence thresholds.",
    outcome:
      "A single bot supporting diversified crypto + forex portfolio management with configurable strategy parameters.",
    tech: ["Python", "Scikit-learn", "PyTorch", "Binance API", "OKX API", "Pandas"],
  },
  {
    slug: "political-sentiment-chatbot",
    title: "Political Sentiment Chatbot",
    period: "2024",
    category: "NLP · OCR · ASR · RAG",
    image: "/projects/Political-Sentiment-Chatbot.png",
    width: 1024,
    height: 1536,
    imageAlt: "Political sentiment chatbot architecture",
    challenge:
      "News and media analysts needed to track political sentiment across TV tickers, audio debates and online articles — three completely different data modalities.",
    solution:
      "Built an insight engine that OCRs news tickers (Tesseract / EasyOCR), transcribes audio with OpenAI Whisper, scrapes articles, stores structured data in PostgreSQL and embeddings in a vector DB (Pinecone / FAISS), and runs a fine-tuned transformer for sentiment and topic analysis.",
    outcome:
      "Sentiment classification, trending-topic and named-entity detection, and ticker tracking with summarization of evolving narratives — all queryable through a chat interface.",
    tech: ["Whisper", "Tesseract", "PostgreSQL", "Pinecone", "Transformers", "Python"],
  },
  {
    slug: "face-solutions",
    title: "Face Solutions Suite",
    period: "2023",
    category: "Computer Vision · Deep Learning",
    image: "/projects/Face-Solutions.jpg",
    width: 1261,
    height: 860,
    imageAlt: "Face Solutions computer vision feature overview",
    challenge:
      "A client needed one unified engine for every face-related task — from security verification to privacy protection — across video, image and photo inputs.",
    solution:
      "Engineered a modular CV suite: face detection, recognition/verification, age & gender prediction, anti-spoofing, deep-learning face swap, face blur for privacy, and image enhancement, with multi-format input processing.",
    outcome:
      "Eight production-ready modules behind a single API, reusable across security, media and analytics use cases.",
    tech: ["OpenCV", "PyTorch", "Deep Learning", "FastAPI", "Python"],
  },
  {
    slug: "real-estate-prediction-bot",
    title: "AI Real Estate Price & Market Prediction Bot",
    period: "2023",
    category: "ML · Predictive Analytics",
    image: "/projects/AI-Real-Estate-Price-Prediction-Bot.png",
    width: 1024,
    height: 1536,
    imageAlt: "AI-powered real estate price and market prediction bot",
    challenge:
      "Realtors and investment groups priced properties on intuition, with no way to model how a listing compared to competitors or its likelihood of selling.",
    solution:
      "Built a prediction engine trained on sale-price trends, neighbourhood demand, property type/size and time-on-market records, factoring in location value, competitor listings and supply-demand balance.",
    outcome:
      "Flags over/under-priced listings, models sale probability within a timeframe, and runs impact analysis of price changes on sales probability.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Geo Data"],
  },
  {
    slug: "autonomous-driving",
    title: "AI-Powered Autonomous Driving Solution",
    period: "2023",
    category: "Computer Vision · Edge AI",
    image: "/projects/AI-Autonomous-Driving-Solution.png",
    width: 1024,
    height: 1536,
    imageAlt: "AI-powered autonomous driving and traffic monitoring solution",
    challenge:
      "The National Highway & Motorway Authority needed real-time traffic monitoring and safety enforcement on live highway video.",
    solution:
      "Combined edge AI with real-time video processing for lane detection, traffic-sign recognition, vehicle detection & classification, license-plate recognition, speed estimation and environmental context analysis (weather / temperature).",
    outcome:
      "An intelligent, scalable and cost-effective solution for smart highway infrastructure.",
    tech: ["YOLO", "OpenCV", "Edge AI", "OCR", "Python"],
  },
  {
    slug: "crypto-pulse",
    title: "Crypto Pulse — AI Sentiment Pipeline",
    period: "2023",
    category: "NLP · Data Engineering · Cloud",
    image: "/projects/Crypto-Pulse-Sentiment-Pipeline.jpg",
    width: 1308,
    height: 842,
    imageAlt: "Crypto Pulse Unlimited data flow diagram",
    challenge:
      "Crypto sentiment lives across Reddit, Discord, YouTube, news and Binance Square — too noisy and fragmented to read manually.",
    solution:
      "Built a five-stage pipeline: multi-source ingestion with scheduled streaming/batch collection, cleaning & deduplication, OCR + translation + normalization, GPT-based sentiment analysis with signal aggregation, and Azure deployment via a Flask REST API + Streamlit frontend.",
    outcome:
      "Live bullish / bearish / neutral predictions with confidence scores, historical tracking, trend analysis and exportable reports.",
    tech: ["GPT", "Flask", "Streamlit", "Azure", "OCR", "Python"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "SageTeck",
    role: "Full Stack AI Engineer",
    period: "2025 – Present",
    bullets: [
      "Building a Ringba-class pay-per-call tracking and analytics platform: tracking numbers, campaigns, ring trees, real-time bidding targets, caps and postbacks.",
      "Architected the call path — Telnyx SIP → FreeSWITCH → Go dial-plan router (Redis-only, sub-millisecond) → FastAPI backend — with Kafka consumers writing CDRs to TimescaleDB and pushing live events over WebSockets.",
      "Shipped a sandboxed QuickJS/Deno sidecar for operator JavaScript, a tenant-isolated billing service, and a Vue 3 + PrimeVue dashboard, backed by property-based, Schemathesis contract and Playwright test suites in CI/CD.",
    ],
  },
  {
    company: "Brainbox Automations",
    role: "AI Engineer",
    period: "2024 – 2025",
    bullets: [
      "Earlibird AI Automation Platform — automated lead capture, scheduling, follow-ups and support across SMS, email, Meta and live chat using n8n, Make.com, Zapier and GoHighLevel with CRM sync and centralized reporting.",
      "Automated Toxicology Report Generator — AI system that scrapes PubMed, NIOSH, FDA and IARC for a compound, filters with NLP, and compiles cited toxicological findings and risk assessments stored in AWS S3.",
      "AI Cartoon Video Generation Pipeline — two-phase generative pipeline (Nano Banana / GPT Image → VEO3 / WAN 2.2) turning a base character and a scene prompt into finished YouTube cartoon videos.",
    ],
  },
];

export const aboutParagraphs = [
  "I'm a Full Stack AI Engineer who likes owning the whole stack: the model, the pipeline that feeds it, the API that serves it, and the UI people actually touch.",
  "My work spans multi-agent LLM systems, retrieval pipelines, computer vision, time-series forecasting, and — most recently — a real-time telephony platform where a bad millisecond means a dropped call.",
  "I care about systems that survive production: typed contracts, property-based tests, observability, and clean boundaries between services.",
];
