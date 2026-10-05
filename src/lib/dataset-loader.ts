import dataset from '@/data/dataset.json';
import {
  RawDataset,
  EnrichedCourse,
  EnrichedCampus,
  EnrichedTrainer,
  EnrichedCertification,
  EnrichedLearningFormat,
  EnrichedTrialClass,
  EnrichedSuccessStory,
  EnrichedReview,
  CareerJourneyPath,
  CareerDomain,
  CategoryFilter,
  EnrichedAdmissionStep,
} from './types';

// Cast the imported raw data
export const rawData: RawDataset = dataset as RawDataset;

// 1. BRAND
export const brand = {
  name: rawData.brand?.name || 'CodeForge Institute Singapore',
  tagline: "Singapore's Future-Focused Learning Institution",
  manifesto:
    "We do not train workers for the software jobs of yesterday. We forge engineering leaders, AI architects, and systems thinkers for industries that don't exist yet.",
  accreditation: 'Registered with Committee for Private Education (CPE) & SkillsFuture Singapore partner',
  headquarters: 'LaunchPad @ One-North, 71 Ayer Rajah Crescent, Singapore 139951',
  supportEmail: 'admissions@codeforge.sg',
  contactPhone: '+65 6827 9400',
};

// Course naming templates across 6 domains
const courseDomainConfig: Record<
  string,
  {
    category: CategoryFilter;
    domain: CareerDomain;
    titles: string[];
    skills: string[][];
    summaries: string[];
  }
> = {
  AI: {
    category: 'AI',
    domain: 'AI Engineer',
    titles: [
      'Autonomous Agentic AI & LLM Systems Engineering',
      'Deep Learning & Neural Architectures with PyTorch & Triton',
      'Production ML Engineering & Distributed Model Serving',
      'Multimodal AI & Vision-Language Foundation Models',
      'Reinforcement Learning & Robotics Motion Planning',
      'Enterprise Retrieval-Augmented Generation (RAG) Architecture',
      'AI Alignment, Constitutional AI & Safety Auditing',
      'High-Performance Tensor Computing & CUDA C++ Kernels',
      'Fine-Tuning Open Source LLMs: LoRA, QLoRA & DPO',
      'Edge AI Inference & Quantization on Embedded Silicon',
      'Graph Neural Networks for High-Throughput Financial Systems',
      'Generative Diffusion Models & Neural Rendering Pipelines',
      'Speech AI & Real-Time Conversational Audio Engines',
      'AI Infrastructure & GPU Cluster Orchestration on Slurm/Kubernetes',
      'Vector Database Architecture & High-Dimensional Nearest Neighbors',
      'Self-Supervised Learning & Representation Engineering',
      'Compound AI Systems & Multi-Agent Collaboration Frameworks',
      'Synthetic Data Generation & Differential Privacy for AI',
      'Biomedical AI & Protein Folding Computational Models',
      'Autonomous Systems Safety & Mission-Critical Verification',
    ],
    skills: [
      ['PyTorch', 'CUDA', 'vLLM', 'LangGraph', 'Triton', 'Hugging Face'],
      ['Distributed Training', 'Megatron-LM', 'Ray Train', 'NCCL', 'NVIDIA NeMo'],
      ['Kubeflow', 'MLflow', 'Docker', 'Triton Server', 'Prometheus'],
      ['CLIP', 'Whisper', 'LLaVA', 'Diffusion', 'Vision Transformers'],
      ['Gymnasium', 'Isaac Sim', 'PPO', 'MuJoCo', 'Policy Gradients'],
      ['Qdrant', 'Milvus', 'Hybrid Search', 'Rerankers', 'Semantic Cache'],
    ],
    summaries: [
      'Master the engineering paradigms behind multi-agent frameworks, reasoning loops, and deterministic LLM execution environments.',
      'Dive deep into backward passes, autograd engines, and writing bespoke GPU kernels for extreme inference throughput.',
      'Design fault-tolerant machine learning infrastructure that handles continuous retraining and sub-10ms latency serving.',
      'Construct unified vision-text-audio neural systems trained on Singapore public-sector multi-modal datasets.',
    ],
  },
  Analytics: {
    category: 'Analytics',
    domain: 'Data Analyst',
    titles: [
      'Advanced Quantitative Analytics & Financial Time-Series in SG Markets',
      'Modern Data Stack Architecture: dbt, Snowflake & DuckDB',
      'Algorithmic Trading Analytics & Risk Modelling for APAC',
      'Causal Inference & Experimentation Systems at Scale',
      'Geospatial Analytics & Smart Nation Urban Data Modeling',
      'Customer Lifetime Value & Churn Prediction with Machine Learning',
      'Enterprise Business Intelligence Architecture with Tableau & Hex',
      'Healthcare Informatics & Clinical Trial Data Science',
      'Supply Chain Optimization & APAC Maritime Logistics Intelligence',
      'Real-Time Streaming Analytics with Apache Flink & ClickHouse',
      'Statistical Machine Learning for High-Dimension Microdata',
      'Product Analytics & Behavioral Cohort Analysis for SaaS',
      'Fraud Detection & AML Anomaly Discovery Engines',
      'Revenue Operations & Predictive Forecasting in Fintech',
      'Data Governance, Data Mesh & SG Personal Data Protection (PDPA)',
      'Automated Data Quality & Observability with Monte Carlo',
      'Energy Grid Analytics & Carbon Accounting Optimization',
      'E-Commerce Search Ranking & Recommendation Analytics',
      'Credit Scoring & Alternative Data Risk Modelling',
      'Executive Storytelling with High-Density Interactive Visuals',
    ],
    skills: [
      ['DuckDB', 'dbt Core', 'Snowflake', 'Python Polars', 'SQL Window Functions'],
      ['Apache Flink', 'ClickHouse', 'Kafka', 'Streamlit', 'Superset'],
      ['Causal Impact', 'DoWhy', 'Bayesian A/B Testing', 'Propensity Scoring'],
      ['GeoPandas', 'H3 Hexagons', 'PostGIS', 'Deck.gl', 'Kepler.gl'],
      ['Survival Analysis', 'Scikit-Learn', 'SHAP Values', 'XGBoost'],
      ['Monte Carlo', 'Great Expectations', 'Soda Core', 'DataHub'],
    ],
    summaries: [
      'Build end-to-end analytical engines that synthesize millions of transactions into actionable algorithmic market signals.',
      'Construct resilient analytics transformation graphs with automated testing, CI/CD, and lineage guarantees.',
      'Apply rigorous econometrics and Bayesian experimentation to isolate genuine product causation from random noise.',
      'Analyze Singapore smart-mobility, land-use, and port throughput data streams using modern vector geospatial primitives.',
    ],
  },
  Cloud: {
    category: 'Cloud',
    domain: 'Cloud Architect',
    titles: [
      'Distributed Cloud Systems Architecture on AWS & Kubernetes',
      'Multi-Region Resiliency & Disaster Recovery for Critical SG Infrastructure',
      'Zero-Trust Cloud Network Engineering with Cilium & eBPF',
      'Serverless Microservices & Event-Driven Architecture with Go',
      'Terraform, Pulumi & GitOps Platform Engineering with ArgoCD',
      'Google Cloud Anthos & Hybrid Sovereign Cloud Architecture',
      'Azure Enterprise Landing Zones & Financial Cloud Compliance (MAS TRM)',
      'High-Performance Cloud Storage & Ceph Distributed File Systems',
      'Edge Compute Architecture for ASEAN Smart Infrastructure',
      'Cloud FinOps & Infrastructure Unit Economics Optimization',
      'Distributed Database Architecture: CockroachDB & Spanner',
      'Service Mesh Architecture: Istio & Linkerd at Scale',
      'Cloud Migration Factory & Legacy Monolith Modernization',
      'Container Security & Runtime Defense in Kubernetes',
      'High-Velocity CI/CD Platform Engineering with Tekton & GitHub Actions',
      'Observability Engineering: OpenTelemetry, Grafana & Tempo',
      'Cloud Cost Allocation & Automated Ephemeral Environments',
      'IoT Fleet Management & Cloud Telemetry Ingestion at 100k msg/s',
      'Chaos Engineering & Resilience Auditing with LitmusChaos',
      'Confidential Computing & Hardware Enclave Orchestration on Nitro',
    ],
    skills: [
      ['Kubernetes', 'AWS Solutions', 'Terraform', 'ArgoCD', 'Helm', 'Cilium'],
      ['eBPF', 'Istio', 'Envoy', 'WireGuard', 'Zero Trust Architecture'],
      ['Go', 'AWS Lambda', 'EventBridge', 'DynamoDB Streams', 'Apache Kafka'],
      ['OpenTelemetry', 'Grafana Mimir', 'Loki', 'Tempo', 'Prometheus'],
      ['Pulumi', 'Crossplane', 'Nixpacks', 'GitHub Actions', 'Karpenter'],
      ['CockroachDB', 'TiDB', 'Raft Consensus', 'Distributed Systems'],
    ],
    summaries: [
      'Design planet-scale cloud primitives with zero single point of failure, compliant with Monetary Authority of Singapore (MAS) TRM guidelines.',
      'Deep dive into Linux kernel networking, eBPF packet inspection, and declarative network policies for ultra-secure clusters.',
      'Construct self-healing internal developer platforms (IDP) that empower hundreds of engineers to ship safely without friction.',
      'Master financial cloud compliance, sovereign enclave architectures, and sub-second regional failover protocols.',
    ],
  },
  Cybersecurity: {
    category: 'Cybersecurity',
    domain: 'Cybersecurity Specialist',
    titles: [
      'Enterprise Threat Hunting & Zero Trust Infrastructure Defense',
      'Offensive Penetration Testing & Advanced Red Team Operations',
      'Cloud-Native Security & DevSecOps Automated Guardrails',
      'Digital Forensics, Incident Response & Memory Analysis',
      'Malware Reverse Engineering & Kernel-Level Rootkit Analysis',
      'Critical Information Infrastructure (CII) Protection & OT/SCADA Defense',
      'Applied Cryptography, Zero-Knowledge Proofs & Post-Quantum Prep',
      'Active Directory & Hybrid Entra ID Attack Path Management (BloodHound)',
      'Security Operations Center (SOC) Engineering with Suricata & Zeek',
      'Application Security Architecture & Automated Fuzzing with AFL++',
      'Cyber Threat Intelligence (CTI) & MITRE ATT&CK Framework Mapping',
      'Hardware Hacking & IoT Firmware Extraction via UART/JTAG',
      'Container Escape & Linux Kernel Exploitation Techniques',
      'Automated SIEM/SOAR Playbook Engineering with Python & Shuffle',
      'Smart Contract Security Auditing & EVM Bytecode Decompilation',
      'Social Engineering Defense, Red Teaming & Human-Centric Hardening',
      'Network Protocol Reversing & Deep Packet Telemetry',
      'Supply Chain Security: SBOM, Cosign & Sigstore Provenance',
      'Cloud Identity & Privilege Escalation in Multi-Cloud Environments',
      'MAS Technology Risk Management (TRM) & Cybersecurity Act Compliance',
    ],
    skills: [
      ['Burp Suite Pro', 'Cobalt Strike', 'BloodHound', 'Metasploit', 'Ghidra'],
      ['Wireshark', 'Zeek', 'Suricata', 'YARA Rules', 'Velociraptor'],
      ['eBPF Security', 'Trivy', 'Falco', 'Cosign', 'Open Policy Agent'],
      ['Volatility 3', 'FTK Imager', 'Autopsy', 'X-Ways', 'Memory Forensics'],
      ['Ghidra', 'IDA Pro', 'x64dbg', 'Radare2', 'Assembly x86/ARM'],
      ['Smart Contract Auditing', 'Slither', 'Foundry', 'EVM Security'],
    ],
    summaries: [
      'Transform into an elite offensive or defensive operator capable of neutralizing nation-state APT vectors across critical infrastructure.',
      'Deconstruct compiled binaries in Ghidra, analyze heap sprays, and trace malicious command-and-control communication channels.',
      'Build automated DevSecOps pipelines that enforce cryptographic supply chain signatures and block CVEs pre-merge.',
      'Conduct rigorous architectural risk assessments aligning with the Singapore Cybersecurity Act and CSA guidelines.',
    ],
  },
  Development: {
    category: 'Development',
    domain: 'Full Stack Developer',
    titles: [
      'Full-Stack Distributed Systems with Next.js, Rust & GraphQL',
      'High-Performance Backend Engineering in Go with gRPC & Raft',
      'Modern TypeScript Architecture: Clean Architecture & Monorepos (Turborepo)',
      'Real-Time Collaborative Systems with WebSockets, CRDTs & Yjs',
      'Micro-Frontends & Design System Architecture at Enterprise Scale',
      'Database Internals: Storage Engines, WAL & Indexing Deep-Dive',
      'Asynchronous Event-Driven Architectures with Kafka & RabbitMQ',
      'WebAssembly (WASM) & High-Performance Client-Side Computing in Rust',
      'Mobile-First Engineering with React Native & Expo Architecture',
      'API Gateway Architecture, Rate Limiting & Envoy Proxying',
      'Domain-Driven Design (DDD) & Event Sourcing with PostgreSQL',
      'Headless Commerce & High-Concurrency Checkout Systems',
      'Advanced CSS, WebGL & Canvas Rendering Engines with Three.js',
      'Testing Engineering: Contract Testing, Property Testing & Playwright',
      'Serverless Edge Computing with Cloudflare Workers & Durable Objects',
      'Search Engine Architecture with Meilisearch & Elasticsearch',
      'Authentication & Authorization Protocols: OAuth 2.1, OIDC & WebAuthn',
      'Developer Productivity Engineering & Custom Tooling in Go',
      'Fintech Payment Gateway Integrations & Double-Entry Ledger Engines',
      'Web Performance Engineering: Core Web Vitals, SSR & Hydration Optimization',
    ],
    skills: [
      ['React 19', 'Next.js 15', 'TypeScript', 'Rust', 'Tailwind CSS', 'Turborepo'],
      ['Go (Golang)', 'gRPC', 'Protocol Buffers', 'PostgreSQL', 'Redis Cluster'],
      ['CRDTs', 'Yjs', 'WebSockets', 'Web Workers', 'SharedArrayBuffer'],
      ['Docker', 'Docker Compose', 'CI/CD Pipelines', 'Prisma', 'Drizzle ORM'],
      ['GraphQL', 'Apollo Server', 'tRPC', 'Zod', 'Clean Architecture'],
      ['Three.js', 'WebGL', 'GLSL Shaders', 'WebAudio API', 'Framer Motion'],
    ],
    summaries: [
      'Build bulletproof distributed software from responsive React 19 client components to low-latency Rust background workers.',
      'Engineer real-time multiplayer collaborative applications backed by conflict-free replicated data types (CRDTs).',
      'Design high-throughput banking ledgers with strict ACID guarantees, idempotent transaction dispatch, and audit trails.',
      'Achieve sub-50ms paint times and zero-layout-shift performance through advanced streaming hydration and edge compilation.',
    ],
  },
  Design: {
    category: 'Design',
    domain: 'Product Designer',
    titles: [
      'Design Systems Engineering: Tokens, Figma API & React Sync',
      'Enterprise Product Strategy & Complex B2B UX Architecture',
      'Spatial UI & Human-Computer Interaction for Mixed Reality',
      'User Research at Scale: Continuous Discovery & Usability Labs',
      'Micro-Interactions, Motion Design & Prototyping with Framer & GSAP',
      'Data Visualization Design & Dashboard Information Hierarchy',
      'Design for AI: Prompt Ergonomics, Copilots & Non-Deterministic UI',
      'Accessible Product Design: WCAG 2.2 AAA & Inclusive Design Systems',
      'Typography, Grid Systems & Swiss Editorial Digital Aesthetics',
      'Service Design Blueprinting for Singapore Public Services & FinTech',
      'Behavioral Psychology & Habit-Forming UX Ethics',
      'Design Leadership, Cross-Functional Alignment & Design Ops',
      'Conversion Rate Optimization (CRO) & Scientific Growth UX',
      'Voice & Conversational UI Design for Multimodal Systems',
      'Design Systems Documentation & Component Lifecycle Governance',
      'Hardware-Software Interaction Design & Physical Computing',
      'Mobile App Experience Design & Platform HIG Guidelines',
      'Information Architecture & Mega-Navigation Systems for Complex Portals',
      'Design Token Automation with Style Dictionary & GitHub Actions',
      'Design Portfolio Mastery & Senior Staff Designer Case Study Craft',
    ],
    skills: [
      ['Figma Advanced', 'Design Tokens', 'Style Dictionary', 'Storybook', 'Tailwind'],
      ['Framer', 'GSAP', 'CSS Motion', 'Protopie', 'Micro-Interactions'],
      ['User Research', 'Usability Testing', 'Dovetail', 'Jobs-To-Be-Done', 'Miro'],
      ['Information Architecture', 'Tree Testing', 'Card Sorting', 'Heuristics'],
      ['Accessibility (A11y)', 'WCAG 2.2', 'Color Contrast', 'Screen Reader Audits'],
      ['Prompt UI', 'Generative Interfaces', 'State Machines', 'Figma API'],
    ],
    summaries: [
      'Bridge the gap between world-class visual aesthetics and industrial design systems that automatically sync to production codebases.',
      'Design interfaces for probabilistic AI outputs, guiding users through confidence scoring and graceful fallbacks.',
      'Master the Swiss typography principles and mathematical layout grids that underpin modern editorial digital experiences.',
      'Construct deep-tier interactive prototypes that feel completely indistinguishable from finished native applications.',
    ],
  },
};

// Singapore Campuses configuration for CMP001 - CMP012
const campusLocations = [
  {
    locationName: 'One-North LaunchPad & Deep Tech Lab',
    district: 'Ayer Rajah / One-North (District 05)',
    address: '71 Ayer Rajah Crescent, #04-12, LaunchPad @ One-North, Singapore 139951',
    mrt: 'One-North MRT (CC23) — 3 min walk',
    focus: 'Artificial Intelligence, Foundation Models & Deep Tech Incubator',
    description:
      'Set inside Singapore’s premier deep-tech research enclave, our flagship campus houses dedicated NVIDIA GPU clusters, private sprint pods, and an open amphitheater for architectural critiques.',
    facilities: [
      'NVIDIA DGX H100 Accelerated Compute Pods',
      'Acoustic Sprint Rooms with 4K Interactive Displays',
      'Hardware Prototyping & Sensor Workbench',
      'Aeropress Specialty Coffee Lab & Rooftop Garden',
    ],
    specs: [
      { label: 'Footprint', value: '18,500 sq ft' },
      { label: 'Compute Access', value: '100 Gbps Low-Latency Fabric' },
      { label: 'Capacity', value: '240 Engineers' },
      { label: 'Open Access', value: '24/7 Keycard Entry' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Marina Bay Tower Tech Suites',
    district: 'Marina Bay Financial Centre (District 01)',
    address: '8 Marina Boulevard, Level 38, MBFC Tower 1, Singapore 018981',
    mrt: 'Downtown MRT (DT17) & Marina Bay MRT (NS27/TE20) — Direct Underground Link',
    focus: 'Fintech Systems, High-Frequency Trading & Distributed Cloud',
    description:
      'Perched high above the Singapore Strait, this executive campus is designed for banking engineers, quantitative analysts, and enterprise cloud architects modernizing APAC financial infrastructure.',
    facilities: [
      'Dual Multi-Cloud Simulation Command Center',
      'Executive Boardroom & Pitch Stage',
      'Bloomberg & Refinitiv Real-Time Market Feeds',
      'Panoramic Marina Bay Skyline Study Lounge',
    ],
    specs: [
      { label: 'Footprint', value: '14,200 sq ft' },
      { label: 'Network', value: 'Redundant Dark Fiber Links' },
      { label: 'Capacity', value: '180 Fellows' },
      { label: 'Open Access', value: '7:00 AM – 11:00 PM' },
    ],
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Jurong Innovation District Advanced Lab',
    district: 'CleanTech Park / Jurong (District 22)',
    address: '1 CleanTech Loop, #03-08, CleanTech One, Singapore 637141',
    mrt: 'Boon Lay MRT (EW27) / Future Jurong Region Line',
    focus: 'Industry 4.0, Edge Computing & Smart Manufacturing Robotics',
    description:
      'Adjacent to Singapore’s Advanced Manufacturing Transformation Centre, this space pairs distributed systems software with real industrial automation hardware and IoT edge testbeds.',
    facilities: [
      'Edge Computing Testbed & Robotics Rig',
      'Clean Room Computational Testing Facility',
      'Private Focus Chambers for Deep Work',
      'Maker Studio with SLA/SLS 3D Printing',
    ],
    specs: [
      { label: 'Footprint', value: '16,000 sq ft' },
      { label: 'Power Backup', value: 'Full Industrial UPS' },
      { label: 'Capacity', value: '150 Engineers' },
      { label: 'Open Access', value: '24/7 Access' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Raffles Place Executive Systems Studio',
    district: 'Central Business District (District 01)',
    address: '63 Chulia Street, Level 15, OCBC Centre East, Singapore 049514',
    mrt: 'Raffles Place MRT (EW14/NS26) — 1 min walk',
    focus: 'Cloud Architecture, High-Availability Systems & Executive Upskilling',
    description:
      'Curated for mid-career professionals and corporate fellows seeking high-velocity evening and weekend deep dives without leaving the central financial nexus.',
    facilities: [
      'Modular Hybrid Learning Pods',
      'Ergonomic Herman Miller Embody Workstations',
      'Dedicated Career Transition Advisory Suites',
      'Quiet Library & Systems Architecture Archive',
    ],
    specs: [
      { label: 'Footprint', value: '12,800 sq ft' },
      { label: 'Connectivity', value: 'Multi-SSID Wi-Fi 7' },
      { label: 'Capacity', value: '130 Learners' },
      { label: 'Open Access', value: '6:30 AM – 10:30 PM' },
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Changi Business Park Cyber Defense Range',
    district: 'Changi South / Expo (District 16)',
    address: '1 Changi Business Park Crescent, Plaza 8 @ CBP, Singapore 486025',
    mrt: 'Expo MRT (DT35/CG1) — Direct Link',
    focus: 'Offensive Security, Threat Hunting & Critical Infrastructure Defense',
    description:
      'Equipped with an isolated Red/Blue live war-room network, allowing students to simulate nation-state cyberattacks, malware analysis, and industrial protocol interception in a controlled sandbox.',
    facilities: [
      'Air-Gapped Cyber Range War Room',
      'Hardware Logic Analyzers & JTAG Workbenches',
      'Forensics Imaging Lab with Ultra-Fast NVMe Arrays',
      'Incident Commander Briefing Theater',
    ],
    specs: [
      { label: 'Footprint', value: '15,400 sq ft' },
      { label: 'Isolation', value: 'Dedicated Air-Gapped Network' },
      { label: 'Capacity', value: '160 Operators' },
      { label: 'Open Access', value: '24/7 Security Clearance' },
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Tanjong Pagar Product & Design Atelier',
    district: 'Tanjong Pagar / Anson (District 02)',
    address: '79 Anson Road, Level 21, Singapore 079906',
    mrt: 'Tanjong Pagar MRT (EW15) / Shenton Way MRT (TE19)',
    focus: 'Product Systems, Design Engineering & Spatial Interaction',
    description:
      'Bathed in natural daylight, our design atelier features museum-grade color-calibrated monitors, physical interaction design prototyping benches, and critique walls for daily peer reviews.',
    facilities: [
      'Critique Gallery with Magnetic Wall Systems',
      'Eizo ColorEdge 4K Calibrated Display Stations',
      'Vision Pro & Mixed Reality Spatial Testing Lab',
      'Material & Paper Library for Physical Ergonomics',
    ],
    specs: [
      { label: 'Footprint', value: '11,200 sq ft' },
      { label: 'Aesthetics', value: 'Minimalist Scandinavian & Japanese Joinery' },
      { label: 'Capacity', value: '110 Designers' },
      { label: 'Open Access', value: '8:00 AM – Midnight' },
    ],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Biopolis Computational Biology & AI Hub',
    district: 'Buona Vista / Biopolis (District 05)',
    address: '10 Biopolis Road, #05-01, Chromos, Singapore 138670',
    mrt: 'Buona Vista MRT (EW21/CC22) — 5 min sheltered link',
    focus: 'Genomics ML, Bio-Informatics & High-Throughput Modeling',
    description:
      'Cross-disciplinary innovation campus where software engineers collaborate on biomedical foundation models and structural biology simulations.',
    facilities: [
      'High-Memory Compute Instances for Genome Processing',
      'Collaborative Wet-to-Dry Lab Bridges',
      'Dual-Monitor Data Science Workstations',
      'Botanical Reflection Atrium',
    ],
    specs: [
      { label: 'Footprint', value: '13,500 sq ft' },
      { label: 'Compute', value: 'Petabyte High-IOPS NVMe Storage' },
      { label: 'Capacity', value: '120 Researchers' },
      { label: 'Open Access', value: '24/7 Access' },
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Bugis Digital Media & Frontend Lab',
    district: 'Bugis / Rochor (District 07)',
    address: '188 Victoria Street, Level 08, Bugis Junction Towers, Singapore 188024',
    mrt: 'Bugis MRT (EW12/DT14) — Direct connection',
    focus: 'Modern Web Architecture, WebAssembly & Interactive Graphics',
    description:
      'Immersive digital studio focused on high-performance frontend compilation, Three.js shaders, WebGPU pipelines, and ultra-responsive web applications.',
    facilities: [
      'High-Refresh 144Hz Latency Testing Stations',
      'Mobile Device Farm Testing Lab',
      'Live Coding Broadcast Recording Studio',
      'Espresso Bar & Peer Pair-Programming Commons',
    ],
    specs: [
      { label: 'Footprint', value: '10,900 sq ft' },
      { label: 'Display Gear', value: 'Apple Studio Display Labs' },
      { label: 'Capacity', value: '100 Developers' },
      { label: 'Open Access', value: '8:00 AM – 11:00 PM' },
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Keppel Bay Maritime & Edge IoT Lab',
    district: 'HarbourFront / Keppel (District 04)',
    address: '2 HarbourFront Place, Bank of America Tower, Singapore 098499',
    mrt: 'HarbourFront MRT (NE1/CC29)',
    focus: 'Maritime Edge Computing, Logistics IoT & Telemetry Systems',
    description:
      'Facing the Singapore port straits, this campus specializes in distributed telemetry pipelines handling maritime logistics data and extreme-edge software.',
    facilities: [
      'LoRaWAN & 5G Private Standalone Edge Node',
      'Ruggedized Hardware Test Bench',
      'Harbor View Focus Balcony',
      'Real-Time Telemetry Stream Monitors',
    ],
    specs: [
      { label: 'Footprint', value: '9,800 sq ft' },
      { label: 'Edge Testbeds', value: 'Multi-Arch ARM64/RISC-V Nodes' },
      { label: 'Capacity', value: '85 Engineers' },
      { label: 'Open Access', value: '7:30 AM – 10:00 PM' },
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Punggol Digital District Future Campus',
    district: 'Punggol North (District 19)',
    address: '88 Punggol Coast Road, JTC PDD Tower 2, Singapore 828608',
    mrt: 'Punggol Coast MRT (NE18) — Direct integration',
    focus: 'Smart Nation Infrastructure, Autonomous Mobility & Open Data',
    description:
      'Our newest smart-campus integrated directly into Singapore’s Punggol Digital District testbed, featuring native sensor feeds from campus smart-grid systems.',
    facilities: [
      'District Smart-Grid API Live Gateway',
      'Acoustic VR/Spatial Simulation Dome',
      'Eco-Certified Zero-Carbon Collaborative Commons',
      'Robotics Autonav Simulation Track',
    ],
    specs: [
      { label: 'Footprint', value: '21,000 sq ft' },
      { label: 'Smart Grid', value: '100% Solar-Assisted Power' },
      { label: 'Capacity', value: '260 Fellows' },
      { label: 'Open Access', value: '24/7 Biometric Entry' },
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Science Park II Quantum & HPC Lab',
    district: 'Science Park II / Pasir Panjang (District 05)',
    address: '81 Science Park Drive, The Chadwick, Singapore 118257',
    mrt: 'Haw Par Villa MRT (CC25) / Kent Ridge MRT (CC24)',
    focus: 'Quantum Computing Simulation, Cryptographic Enclaves & HPC',
    description:
      'Equipped for research fellows advancing post-quantum cryptography, distributed consensus protocols, and ultra-high-performance kernel computing.',
    facilities: [
      'Quantum Algorithm Simulator Workstations',
      'Shielded Faraday Audio-Visual Chamber',
      'Deep Computing Research Archive',
      'Outdoor Pine Forest Contemplation Deck',
    ],
    specs: [
      { label: 'Footprint', value: '14,000 sq ft' },
      { label: 'Security', value: 'TEMPEST-Compliant Shielding' },
      { label: 'Capacity', value: '115 Researchers' },
      { label: 'Open Access', value: '24/7 Access' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    locationName: 'Orchard Executive Lifelong Learning Academy',
    district: 'Orchard Boulevard (District 09)',
    address: '260 Orchard Road, Level 12, The Heeren, Singapore 238855',
    mrt: 'Somerset MRT (NS23) / Orchard MRT (NS22/TE14)',
    focus: 'Executive Tech Leadership, Board-Level AI Governance & SCTP Sabbaticals',
    description:
      'Crafted for senior engineering managers, CTOs, and mid-career professionals transitioning into strategic tech roles with concierge mentoring and alumni roundtables.',
    facilities: [
      'Executive Strategy Amphitheater',
      'Private 1-on-1 Career Advisory Boardrooms',
      'Artisanal Barista Lounge & Networking Salon',
      'Media Broadcast & Keynote Stage',
    ],
    specs: [
      { label: 'Footprint', value: '13,200 sq ft' },
      { label: 'Hospitality', value: 'Concierge Support & Private Catering' },
      { label: 'Capacity', value: '140 Executives' },
      { label: 'Open Access', value: '8:00 AM – 10:00 PM' },
    ],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
  },
];

// Enrich Campuses
export const enrichedCampuses: EnrichedCampus[] = rawData.campuses.map((c, i) => {
  const meta = campusLocations[i % campusLocations.length];
  return {
    id: c.id,
    name: `${c.name} — ${meta.locationName}`,
    locationName: meta.locationName,
    district: meta.district,
    address: meta.address,
    mrt: meta.mrt,
    focus: meta.focus,
    description: meta.description,
    facilities: meta.facilities,
    specs: meta.specs,
    image: meta.image,
  };
});

// Faculty & Trainers configuration
const trainerProfiles = [
  {
    name: 'Dr. Evelyn Tan-Wee',
    role: 'Distinguished Fellow in Autonomous AI Systems',
    company: 'Ex-Principal AI Scientist, GovTech Singapore & DeepMind Fellow',
    experienceYears: 18,
    specialization: 'Neural Architecture Search, Agentic Workflows & Safety Alignment',
    bio: 'Pioneered national-scale automated decisioning pipelines across Singapore smart government initiatives. Former researcher at Cambridge Computer Laboratory.',
    philosophy: 'Code is cheap; architectural consequence is permanent. We build systems that reason deterministically even when models drift.',
    notableAchievement: 'Architected Singapore’s core AI verification framework; holds 6 US patents in neural inference optimization.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Marcus Zhang, SMIEEE',
    role: 'Principal Cloud & Distributed Systems Architect',
    company: 'Ex-Staff Infrastructure Engineer, Stripe APAC & Grab Infrastructure Lead',
    experienceYears: 16,
    specialization: 'Distributed Consensus, High-Concurrency Go & Multi-Region Resilience',
    bio: 'Engineered cross-border transaction routing infrastructure managing over SGD 35B in annual volume across Southeast Asia with zero recorded downtime.',
    philosophy: 'Simplicity is prerequisite for reliability. If you cannot explain your service mesh failover on a single napkin, you have already failed production.',
    notableAchievement: 'Led zero-downtime database migration of 45TB active Postgres sharded clusters across AWS Singapore and Tokyo.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sarah Chen-Rasmussen',
    role: 'Head of Offensive Cyber Operations & Zero Trust Systems',
    company: 'Ex-Cyber Threat Intelligence Lead, CSIT & Offensive Security Reviewer',
    experienceYears: 15,
    specialization: 'Kernel Exploitation, Critical Infrastructure Defense & Memory Forensics',
    bio: 'Led specialized incident response teams defending Singapore national utilities and financial gateways against state-sponsored advanced persistent threats (APTs).',
    philosophy: 'Assume breach is not a mindset; it is a mathematical axiom. You do not secure code by hoping attackers are incompetent.',
    notableAchievement: 'Discovered and responsibly disclosed 14 zero-day vulnerabilities in enterprise SDN switches and VPN gateways.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Jonathan K. Loh',
    role: 'Chief Product Architect & Design Systems Director',
    company: 'Ex-Head of Design Engineering, Sea Group & Grab Passenger Experience',
    experienceYears: 14,
    specialization: 'Design Systems at Scale, WebGL/WASM Ergonomics & Spatial UI',
    bio: 'Author of open-source design token pipelines used by over 40,000 engineers globally. Pioneer in bridging mathematical typography with React Server Components.',
    philosophy: 'The boundary between software engineering and graphic design is artificial. The best interfaces are built by craftsmen who understand both raster engines and render loops.',
    notableAchievement: 'Standardized design language system across 7 Southeast Asian languages and 180M active consumer endpoints.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Priyah Ramanathan',
    role: 'Chair of Quantitative Data Analytics & Algorithmic Systems',
    company: 'Ex-Head of Quantitative Research, Standard Chartered & A*STAR Senior Fellow',
    experienceYears: 20,
    specialization: 'High-Frequency Financial Time-Series, Causal Inference & Microeconometrics',
    bio: 'Advised sovereign wealth committees on systematic risk evaluation and machine learning for macroeconomic early-warning indicators.',
    philosophy: 'Correlation is cheap and abundant; causation requires intellectual humility, counterfactual models, and disciplined validation.',
    notableAchievement: 'Designed APAC liquidity risk projection model that successfully navigated the 2020 liquidity shock.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Devin Thorne, CISO',
    role: 'Director of Cloud-Native Defense & DevSecOps Systems',
    company: 'Ex-Head of Security Architecture, DBS Bank & Cloud Security Alliance APAC Chair',
    experienceYears: 17,
    specialization: 'Kubernetes Hardening, eBPF Telemetry & MAS TRM Regulatory Architecture',
    bio: 'Architected Singapore’s premier digital banking security guardrails and automated compliance attestation for continuous microservices deployments.',
    philosophy: 'Security that slows engineers down will be bypassed. The only security that works is invisible, automated, and enforced at compile-time.',
    notableAchievement: 'Eliminated manual security sign-offs across 2,400 microservices through automated policy-as-code admission controllers.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Audrey Mei-Ling Sim',
    role: 'Principal Full-Stack & Distributed Systems Fellow',
    company: 'Ex-Principal Engineer, Shopee Core Frameworks & Netflix Contributor',
    experienceYears: 13,
    specialization: 'React 19 Core Internals, Rust WASM & Edge Streaming Architectures',
    bio: 'Maintains critical open-source caching primitives. Key architect of real-time flash-sale engine processing 800,000 checkout queries per minute.',
    philosophy: 'A framework is only as good as your understanding of the underlying browser event loop and network socket. Master the primitives first.',
    notableAchievement: 'Reduced client bundle sizes by 64% and TTFB by 420ms across 40M daily active mobile web users.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Karthik Balasubramanian',
    role: 'Staff ML Infrastructure Engineer & GPU Cluster Specialist',
    company: 'Ex-Lead Platform Engineer, ByteDance AI Lab Singapore & AWS HPC Specialist',
    experienceYears: 15,
    specialization: 'Slurm/Kubernetes GPU Schedulers, Triton Inference & CUDA Optimization',
    bio: 'Engineered training clusters spanning 4,096 GPUs for multimodal foundation models, pioneering automated checkpoint resumption and network topology tuning.',
    philosophy: 'Compute is finite and expensive. Great engineers do not throw larger clusters at bad algorithms; they write cache-friendly kernels.',
    notableAchievement: 'Halved LLM fine-tuning cluster runtimes through bespoke ring-allreduce network topology overrides.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
];

export const enrichedTrainers: EnrichedTrainer[] = rawData.trainers.map((t, i) => {
  const profile = trainerProfiles[i % trainerProfiles.length];
  return {
    id: t.id,
    name: `${t.name} (${profile.name})`,
    fullName: profile.name,
    role: profile.role,
    formerCompany: profile.company,
    experienceYears: profile.experienceYears,
    specialization: profile.specialization,
    bio: profile.bio,
    philosophy: profile.philosophy,
    notableAchievement: profile.notableAchievement,
    avatar: profile.avatar,
    linkedCourseCount: 3,
  };
});

// Certifications configuration for CERT001 - CERT030
const certificationDetails = [
  {
    officialTitle: 'SG Specialist Diploma in Autonomous AI Architecture (SSG Level 6)',
    authority: 'SkillsFuture Singapore & CodeForge Examination Board',
    level: 'Advanced Level 6 Professional',
    validity: 'Lifetime with Biannual Continuing Mastery Attestation',
    examFormat: '48-hour System Implementation Sprint + Viva Voce Defense',
    recognitionScore: 98,
    prerequisites: 'Production Python or C++ experience, Linear Algebra, Distributed Systems basics',
    skillsVerified: ['Agentic Workflows', 'CUDA Acceleration', 'LLM Alignment', 'Inference Optimization', 'Model Security'],
    salaryImpact: '+SGD 3,800/mo avg baseline increase in Singapore tech market',
  },
  {
    officialTitle: 'Cloud Architect Fellow Credential (AWS & Kubernetes Professional)',
    authority: 'Cloud Native Computing Foundation (CNCF) & AWS Alliance',
    level: 'Tier-1 Enterprise Infrastructure',
    validity: '3 Years with Cloud-Native Re-attestation',
    examFormat: 'Live Chaos Simulation: 4-hour Multi-Region Outage Remediation',
    recognitionScore: 99,
    prerequisites: 'Linux Kernel fundamentals, Networking (BGP/eBPF), Container Orchestration',
    skillsVerified: ['Multi-Region Failover', 'Terraform GitOps', 'Zero-Trust Networks', 'MAS TRM Compliance', 'FinOps'],
    salaryImpact: '+SGD 4,200/mo avg uplift across banking and multinational tech',
  },
  {
    officialTitle: 'Offensive Security & Red Team Engineering Specialist (OS-RT Level 5)',
    authority: 'Offensive Security Singapore Chapter & CodeForge Cyber Range',
    level: 'Elite Hands-on Tactical Defense',
    validity: '3 Years with Blind CTF Maintenance',
    examFormat: '24-hour Blind Air-Gapped Penetration Test with Executive Briefing',
    recognitionScore: 97,
    prerequisites: 'Assembly (x86/ARM), Network Protocol Analysis, Active Directory fundamentals',
    skillsVerified: ['Zero-Day Exploitation', 'Kernel Memory Forensics', 'BloodHound Attack Paths', 'CII Defense', 'Evasion'],
    salaryImpact: '+SGD 3,600/mo avg uplift in cybersecurity and critical infrastructure sectors',
  },
  {
    officialTitle: 'Quantitative Analytics & Algorithmic Systems Specialist (IBF Level 5)',
    authority: 'Institute of Banking and Finance (IBF) Singapore & CodeForge',
    level: 'Advanced Financial Technology Specialist',
    validity: '5 Years with Annual Market Ethics Renewal',
    examFormat: 'Quantitative Backtesting Engine Build + Live Statistical Portfolio Audit',
    recognitionScore: 96,
    prerequisites: 'Applied Statistics, Econometrics, SQL and Python Polars',
    skillsVerified: ['Causal Inference', 'Time-Series Transformers', 'dbt Analytics Engineering', 'MAS Liquidity Auditing', 'Risk Modeling'],
    salaryImpact: '+SGD 4,500/mo avg uplift in wealth management, family offices & hedge funds',
  },
  {
    officialTitle: 'Design Systems Architect & Staff Product Designer Credential',
    authority: 'Design Systems Consortium & CodeForge Product Atelier',
    level: 'Staff / Principal Product Design',
    validity: 'Lifetime Credential',
    examFormat: 'End-to-End Design System Specification, Token Architecture & React Code Sync',
    recognitionScore: 95,
    prerequisites: 'Advanced Figma Mastery, Component Architecture, Web Accessibility standards',
    skillsVerified: ['Design Token Pipelines', 'Figma API Automation', 'WCAG AAA Compliance', 'Motion Choreography', 'Design Strategy'],
    salaryImpact: '+SGD 3,200/mo avg uplift in tech scale-ups and global consumer apps',
  },
  {
    officialTitle: 'Distributed Systems & High-Throughput Engineering Master (Rust & Go)',
    authority: 'Open Source Systems Guild & CodeForge Institute',
    level: 'Senior Systems Engineering Mastery',
    validity: 'Lifetime Credential',
    examFormat: 'Build a distributed Raft consensus engine handling 100k writes/sec with automated fault injection',
    recognitionScore: 99,
    prerequisites: 'Memory management, OS concurrency primitives, Socket programming',
    skillsVerified: ['Raft Consensus', 'gRPC Wire Protocols', 'Cache Invalidation at Scale', 'PostgreSQL Internals', 'Async Rust'],
    salaryImpact: '+SGD 4,100/mo avg uplift in global tech firms and algorithmic platforms',
  },
];

export const enrichedCertifications: EnrichedCertification[] = rawData.certifications.map((c, i) => {
  const meta = certificationDetails[i % certificationDetails.length];
  return {
    id: c.id,
    name: `${c.name} — ${meta.officialTitle}`,
    officialTitle: meta.officialTitle,
    authority: meta.authority,
    level: meta.level,
    validity: meta.validity,
    examFormat: meta.examFormat,
    recognitionScore: meta.recognitionScore,
    prerequisites: meta.prerequisites,
    skillsVerified: meta.skillsVerified,
    salaryImpact: meta.salaryImpact,
  };
});

// Learning Formats configuration for LF001 - LF012
const learningFormatSpecs = [
  {
    formatTitle: 'Full-Time Immersive Sabbatical',
    commitment: 'Monday to Friday, 9:00 AM – 6:00 PM SGT',
    schedulePattern: '16 Weeks Intensive Cohort',
    idealFor: 'Mid-career career pivoters, tech sabbaticals, and sponsored high-velocity learners',
    description:
      'Total immersion in our One-North or Marina Bay campuses. 40 hours weekly of live studio code reviews, peer pair-programming, and daily standups under resident faculty.',
    deliveryMethod: '100% In-Person Campus Residency + Dedicated Lab Pod',
    highlightTag: 'Highest Transition Rate (96.4%)',
    iconName: 'Zap',
  },
  {
    formatTitle: 'Executive Hybrid Evening',
    commitment: '2 Weekday Evenings (7:00 PM – 10:00 PM) + Saturday Full-Day Lab',
    schedulePattern: '24 Weeks Part-Time Mastery',
    idealFor: 'Employed software engineers, data analysts, and tech leads maintaining full-time positions',
    description:
      'Balanced for working professionals in Singapore. Interactive virtual seminar sessions during weeknights, anchored by in-person high-intensity labs every Saturday at Raffles Place.',
    deliveryMethod: '60% Virtual Live + 40% On-Campus Studio',
    highlightTag: 'Most Popular for Working Tech Leads',
    iconName: 'Clock',
  },
  {
    formatTitle: 'Weekend Deep-Dive Sprint',
    commitment: 'Saturdays 9:30 AM – 5:30 PM SGT + Async Code Review',
    schedulePattern: '20 Weeks Weekend Track',
    idealFor: 'Senior executives, consultants, and developers seeking concentrated deep focus',
    description:
      'Zero weekday interruptions. Spend Saturdays locked into production-grade systems architecture, live hacking ranges, and architectural critiques with faculty.',
    deliveryMethod: 'In-Campus Saturday Sprints + Async Mentor Slack',
    highlightTag: 'Zero Workday Conflicts',
    iconName: 'Calendar',
  },
  {
    formatTitle: 'Autonomous Async Mastery with 1-on-1 Mentorship',
    commitment: 'Self-Paced (8-12 Hours / Week) + 2 Weekly 1-on-1 Dedicated Faculty Syncs',
    schedulePattern: 'Flexible 12 to 36 Weeks',
    idealFor: 'Autonomous engineers, frequent APAC business travelers, and async-first thinkers',
    description:
      'Master our rigorous curriculum at your own velocity with unlimited automated code grading and weekly 45-minute private architecture consultations with ex-FAANG mentors.',
    deliveryMethod: '100% Async Platform + Live 1-on-1 Screen-Share Mentorship',
    highlightTag: 'Maximum Pacing Flexibility',
    iconName: 'Compass',
  },
  {
    formatTitle: 'Enterprise Corporate Cohort',
    commitment: 'Custom Modules / 3-Day Intensive Sprints or 8-Week Retainers',
    schedulePattern: 'Tailored Corporate Engagement',
    idealFor: 'Engineering squads at Singapore banks, government statutory boards, and regional tech hubs',
    description:
      'Upskill your entire engineering team on your own stack. We bring our cyber defense ranges, cloud architecture simulators, and AI harnesses directly to your enterprise.',
    deliveryMethod: 'On-Site Private Command Center or CodeForge Executive Suites',
    highlightTag: 'MAS TRM & Enterprise Tailored',
    iconName: 'ShieldCheck',
  },
  {
    formatTitle: 'Accelerated Apprenticeship Bootcamp',
    commitment: '3 Days Intensive Study + 2 Days Embedded Singapore Tech Co-Op',
    schedulePattern: '20 Weeks Hybrid Apprenticeship',
    idealFor: 'Recent university graduates and rapid polytechnic transitioners',
    description:
      'Combine rigorous formal systems training with direct real-world engineering sprints inside funded Singapore tech scale-ups and statutory agencies.',
    deliveryMethod: 'CodeForge Campus + Host Tech Company Office',
    highlightTag: 'Direct Co-Op Placement',
    iconName: 'Briefcase',
  },
];

export const enrichedLearningFormats: EnrichedLearningFormat[] = rawData.learning_formats.map((f, i) => {
  const meta = learningFormatSpecs[i % learningFormatSpecs.length];
  return {
    id: f.id,
    name: `${f.name} — ${meta.formatTitle}`,
    formatTitle: meta.formatTitle,
    commitment: meta.commitment,
    schedulePattern: meta.schedulePattern,
    idealFor: meta.idealFor,
    description: meta.description,
    deliveryMethod: meta.deliveryMethod,
    highlightTag: meta.highlightTag,
    iconName: meta.iconName,
  };
});

// Categories list for filtering
export const categoryList: CategoryFilter[] = [
  'All',
  'AI',
  'Analytics',
  'Cybersecurity',
  'Cloud',
  'Development',
  'Design',
];

// Enrich Courses (120 items from rawData.courses)
const domainKeys: (keyof typeof courseDomainConfig)[] = ['AI', 'Analytics', 'Cloud', 'Cybersecurity', 'Development', 'Design'];

export const enrichedCourses: EnrichedCourse[] = rawData.courses.map((c, i) => {
  const domainKey = domainKeys[i % domainKeys.length];
  const domainInfo = courseDomainConfig[domainKey];
  const titleIndex = Math.floor(i / domainKeys.length) % domainInfo.titles.length;
  const cleanTitle = domainInfo.titles[titleIndex];

  const levels: ('Foundational' | 'Accelerated' | 'Advanced' | 'Executive Mastery')[] = [
    'Foundational',
    'Accelerated',
    'Advanced',
    'Executive Mastery',
  ];
  const level = levels[i % levels.length];

  const durationWeeks = 12 + (i % 4) * 4; // 12, 16, 20, 24 weeks
  const durationLabel = `${durationWeeks} Weeks (${Math.round(durationWeeks * 6.5)} hrs)`;

  const pacings = ['Immersive Full-Time', 'Executive Hybrid', 'Weekend Sprint', 'Self-Paced Mentored'];
  const pacing = pacings[i % pacings.length];

  // Raw fee is in SGD from dataset (e.g. 3925)
  const fullFee = c.fees_sgd || 4500;
  // Singapore Citizen 70% SkillsFuture subsidy
  const subsidizedFeeSGD = Math.round(fullFee * 0.3);
  const subsidyRate = 'Up to 70% - 90% SSG / IBF Funding for Singaporeans & PRs';

  const summary = domainInfo.summaries[i % domainInfo.summaries.length];
  const skills = domainInfo.skills[i % domainInfo.skills.length];

  const curriculum = [
    'Module 1: Foundations, Mental Models & Memory Layouts',
    'Module 2: High-Throughput Production Pipelines & Tooling',
    'Module 3: Enterprise Architecture, Security Guardrails & Chaos Testing',
    'Module 4: Capstone Engineering Project & Singapore Industry Panel Defense',
  ];

  const trainer = enrichedTrainers[i % enrichedTrainers.length];
  const cert = enrichedCertifications[i % enrichedCertifications.length];
  const scheduleId = rawData.schedules[i % rawData.schedules.length]?.id || 'SCH001';
  const campus = enrichedCampuses[i % enrichedCampuses.length];
  const format = enrichedLearningFormats[i % enrichedLearningFormats.length];

  const months = ['May 2026', 'June 2026', 'July 2026', 'August 2026'];
  const intakeMonth = months[i % months.length];

  return {
    id: c.id,
    title: `${c.title}: ${cleanTitle}`,
    cleanTitle,
    fees_sgd: fullFee,
    subsidizedFeeSGD,
    subsidyRate,
    category: domainInfo.category,
    level,
    durationWeeks,
    durationLabel,
    pacing,
    summary,
    curriculum,
    skills,
    trainerId: trainer.id,
    trainerName: trainer.fullName,
    certificationId: cert.id,
    certificationName: cert.officialTitle,
    scheduleId,
    intakeMonth,
    formatId: format.id,
    campusId: campus.id,
    featured: i === 0 || i === 4 || i === 12 || i === 20 || i === 36,
  };
});

// Trial Classes (80 items from rawData.trial_classes)
const trialClassTopics = [
  {
    topic: 'Zero-to-Agent: Building a Multi-Step ReAct LLM Agent with Python & vLLM',
    category: 'AI' as CategoryFilter,
    takeaways: ['Understand prompt reasoning loops & tool execution', 'Host open weights locally with sub-20ms latency', 'Evaluate hallucination rates with programmatic unit tests'],
  },
  {
    topic: 'Live Red Team Range: Breaking into an AWS Kubernetes Cluster via Misconfigured IAM',
    category: 'Cybersecurity' as CategoryFilter,
    takeaways: ['Inspect service account tokens in pods', 'Exploit metadata service SSRF vectors', 'Implement Cilium eBPF network egress guardrails'],
  },
  {
    topic: 'High-Concurrency Rust: Building an Order Matching Engine from Scratch',
    category: 'Development' as CategoryFilter,
    takeaways: ['Lock-free ring buffers and cache coherence', 'Handling 500,000 tick-to-trade events per second', 'Memory layout optimization for L1/L2 CPU caches'],
  },
  {
    topic: 'Financial Time-Series Forecasting: Beyond ARIMA with Temporal Fusion Transformers',
    category: 'Analytics' as CategoryFilter,
    takeaways: ['Pre-processing non-stationary market data', 'Multi-horizon quantile forecasting', 'Backtesting Sharpe ratios using Polars and DuckDB'],
  },
  {
    topic: 'Resilient Multi-Cloud: Live Chaos Injections & Zero-Downtime Database Failovers',
    category: 'Cloud' as CategoryFilter,
    takeaways: ['Simulating regional network partition in AWS', 'CockroachDB Raft quorum behavior under split-brain', 'Automated DNS and CDN health-check routing with Cloudflare'],
  },
  {
    topic: 'Figma Tokens to Production Code: Automating Modern Design Systems',
    category: 'Design' as CategoryFilter,
    takeaways: ['Extracting design tokens via Figma REST API', 'Transforming to Tailwind CSS v4 variables with Style Dictionary', 'Visual regression testing with Playwright'],
  },
];

export const enrichedTrialClasses: EnrichedTrialClass[] = rawData.trial_classes.map((t, i) => {
  const topicMeta = trialClassTopics[i % trialClassTopics.length];
  const campus = enrichedCampuses[i % enrichedCampuses.length];
  const trainer = enrichedTrainers[i % enrichedTrainers.length];

  const dates = [
    'Saturday, 18 April 2026',
    'Saturday, 25 April 2026',
    'Saturday, 02 May 2026',
    'Sunday, 10 May 2026',
    'Saturday, 16 May 2026',
    'Saturday, 23 May 2026',
  ];
  const scheduleDate = dates[i % dates.length];

  const times = ['10:00 AM – 1:00 PM SGT', '2:30 PM – 5:30 PM SGT', '6:30 PM – 9:30 PM SGT'];
  const timeSlot = times[i % times.length];

  const formats: ('In-Person Lab' | 'Live Interactive Studio' | 'Hybrid')[] = [
    'In-Person Lab',
    'Live Interactive Studio',
    'Hybrid',
  ];
  const format = formats[i % formats.length];

  const seats = (i % 6) + 2; // 2 to 7 seats
  const status: 'Open' | 'Filling Fast' | 'Final Seats' = seats <= 3 ? 'Final Seats' : seats <= 5 ? 'Filling Fast' : 'Open';

  return {
    id: t.id,
    name: `${t.name}: ${topicMeta.topic}`,
    classTitle: topicMeta.topic,
    category: topicMeta.category,
    instructorName: trainer.fullName,
    campusName: campus.locationName,
    campusId: campus.id,
    scheduleDate,
    timeSlot,
    format,
    seatsRemaining: seats,
    status,
    keyTakeaways: topicMeta.takeaways,
  };
});

// Success Stories (100 items from rawData.success_stories)
const successNarratives = [
  {
    personName: 'Daryl Goh, 32',
    previousRole: 'Mechanical CAD Designer',
    previousCompany: 'Keppel Offshore & Marine',
    newRole: 'Senior AI Infrastructure Engineer',
    newCompany: 'GovTech Singapore',
    salaryGrowthPercent: 115,
    timeToTransition: '5 Months (Immersive Sabbatical)',
    quote:
      'I had zero computer science degree. CodeForge did not give me generic Python syntax tutorials; they threw me into Linux kernel internals, GPU memory buffers, and distributed Slurm schedulers. By month 4, I was speaking the language of senior systems architects.',
    storyNarrative:
      'Daryl spent six years designing physical marine structures before recognizing that algorithmic automation would reshape engineering. Through CodeForge’s AI track, he built a custom distributed inference proxy that caught the attention of GovTech directors during the Capstone Defense Night.',
    capstoneProject: 'Distributed Multi-Node LLaMA-3 Quantization & Inference Load-Balancer',
    track: 'AI Engineer' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    personName: 'Shalini Nambiar, 29',
    previousRole: 'Retail Credit Risk Officer',
    previousCompany: 'OCBC Bank',
    newRole: 'Staff Data Analytics Solutions Lead',
    newCompany: 'DBS Bank Group',
    salaryGrowthPercent: 88,
    timeToTransition: '6 Months (Executive Hybrid)',
    quote:
      'Traditional courses teach you how to make pretty bar charts. CodeForge taught me causal inference, dbt orchestrations, and how to write data models that directly stand up against MAS audit scrutiny. My current team was stunned by how production-ready my code was from day one.',
    storyNarrative:
      'Balancing her full-time banking role with CodeForge’s weekend and evening labs at Raffles Place, Shalini redesigned an entire automated credit delinquency early-warning pipeline using DuckDB and Bayesian regression, directly securing her senior role at DBS.',
    capstoneProject: 'Real-Time Non-Stationary Credit Default Forecasting Engine using Bayesian Additive Regression Trees',
    track: 'Data Analyst' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    personName: 'Kenzo Takahashi, 35',
    previousRole: 'Junior Linux Sysadmin',
    previousCompany: 'Singtel Data Center',
    newRole: 'Principal Cloud & Zero-Trust Architect',
    newCompany: 'Stripe Singapore Hub',
    salaryGrowthPercent: 140,
    timeToTransition: '4.5 Months (Accelerated Bootcamp)',
    quote:
      'I was stuck rebooting servers and managing static firewalls for five years. CodeForge’s cloud curriculum forced me to throw away clicking in cloud consoles and embrace declarative infrastructure, eBPF packet routing, and multi-region failover. It completely changed my earning trajectory.',
    storyNarrative:
      'Kenzo passed both AWS Professional and CNCF CKS credentials during his track at CodeForge, demonstrating his live multi-region chaos failover simulator to Stripe engineering managers during their technical round.',
    capstoneProject: 'Zero-Downtime Multi-Cloud Kubernetes Mesh with eBPF Kernel Telemetry and Automated BGP Peering',
    track: 'Cloud Architect' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    personName: 'Valerie Lim, 27',
    previousRole: 'Junior Graphic Designer',
    previousCompany: 'Local Boutique Branding Agency',
    newRole: 'Senior Design Systems Engineer',
    newCompany: 'Grab Singapore HQ',
    salaryGrowthPercent: 95,
    timeToTransition: '5 Months (Tanjong Pagar Atelier)',
    quote:
      'Most design bootcamps teach Figma shortcuts. CodeForge taught me how to write Style Dictionary transforms, automate tokens into GitHub Actions, and write production React components. I became the unicorn designer who speaks fluent TypeScript.',
    storyNarrative:
      'Valerie transitioned from creating static campaign posters to architecting a unified multi-brand design system that automates dark mode tokens across 4 distinct mobile apps and web platforms.',
    capstoneProject: 'Multi-Brand Automated Design Token Architecture with WCAG 2.2 AAA Real-Time Contrast Linters',
    track: 'Product Designer' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    personName: 'Muhammad Harith, 31',
    previousRole: 'Network Support Specialist',
    previousCompany: 'Ministry of Home Affairs Contractor',
    newRole: 'Offensive Security & Red Team Operator',
    newCompany: 'Standard Chartered Global Cyber Hub',
    salaryGrowthPercent: 105,
    timeToTransition: '6 Months (Changi Cyber Range)',
    quote:
      'The air-gapped cyber range at Changi was unlike anything available anywhere else in Southeast Asia. We were attacking realistic simulated enterprise active directories and reverse engineering real botnet C2 traffic till midnight. It was intense, rigorous, and unbeatable.',
    storyNarrative:
      'Harith passed his OSCP credential on the first attempt after spending 200+ hours in CodeForge’s hands-on range, landing an elite red-teaming role at Standard Chartered with a compensation package exceeding SGD 145,000.',
    capstoneProject: 'Automated Active Directory BloodHound Attack Path Execution & Kernel Hook Evasion Framework',
    track: 'Cybersecurity Specialist' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    personName: 'Chloe S. Widjaja, 28',
    previousRole: 'WordPress / PHP Freelancer',
    previousCompany: 'Self-Employed',
    newRole: 'Staff Distributed Systems Engineer',
    newCompany: 'ByteDance APAC',
    salaryGrowthPercent: 130,
    timeToTransition: '5 Months (One-North Campus)',
    quote:
      'I thought I knew web development until I was asked to build a real-time CRDT collaborative document editor and handle distributed lockouts in Redis. CodeForge pushed me beyond framework hype into actual computer science.',
    storyNarrative:
      'Chloe built a collaborative code canvas running over WebSockets with Conflict-Free Replicated Data Types (CRDTs) and Rust WASM, which impressed ByteDance hiring committees during technical whiteboard rounds.',
    capstoneProject: 'High-Throughput Collaborative Canvas with Yjs CRDTs, Rust WebAssembly & Postgres Logical Replication',
    track: 'Full Stack Developer' as CareerDomain,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
];

export const enrichedSuccessStories: EnrichedSuccessStory[] = rawData.success_stories.map((s, i) => {
  const profile = successNarratives[i % successNarratives.length];
  return {
    id: s.id,
    personName: profile.personName,
    previousRole: profile.previousRole,
    previousCompany: profile.previousCompany,
    newRole: profile.newRole,
    newCompany: profile.newCompany,
    salaryGrowthPercent: profile.salaryGrowthPercent + (i % 15),
    timeToTransition: profile.timeToTransition,
    quote: profile.quote,
    storyNarrative: profile.storyNarrative,
    capstoneProject: profile.capstoneProject,
    track: profile.track,
    avatar: profile.avatar,
  };
});

// Reviews (250 items from rawData.student_reviews)
const reviewQuotes = [
  {
    author: 'Jianhao Tan',
    designation: 'Senior Cloud Security Lead',
    company: 'GovTech Singapore',
    courseTitle: 'Enterprise Threat Hunting & Zero Trust Infrastructure',
    quote:
      'CodeForge is what university computer science degrees should have been. You are not writing hello-world calculators; you are debugging multi-threaded memory leaks in the middle of the night with faculty who built Singapore’s foundational tech.',
    highlight: 'Rigorous systems focus that instantly translates to production.',
  },
  {
    author: 'Melissa Ong',
    designation: 'Machine Learning Infrastructure Engineer',
    company: 'Sea Group (Shopee)',
    courseTitle: 'Autonomous Agentic AI & LLM Systems Engineering',
    quote:
      'The sheer intensity of the One-North campus environment is unmatched. The access to high-performance GPU clusters and actual ex-DeepMind researchers pushed our entire cohort to engineer systems at an international tier.',
    highlight: 'World-class compute access and uncompromising academic rigor.',
  },
  {
    author: 'Vikram Sundaram',
    designation: 'Staff Solutions Architect',
    company: 'Amazon Web Services Singapore',
    courseTitle: 'Distributed Cloud Systems Architecture on AWS & Kubernetes',
    quote:
      'As someone who interviews hundreds of engineers each year, I can immediately spot a CodeForge graduate. They do not memorize quiz questions; they understand the mathematical trade-offs between consistency and availability.',
    highlight: 'Graduates exhibit profound architectural maturity.',
  },
  {
    author: 'Rachel Low',
    designation: 'Principal Quantitative Systems Specialist',
    company: 'DBS Treasury & Markets',
    courseTitle: 'Advanced Quantitative Analytics & Financial Time-Series',
    quote:
      'The financial econometrics modules combined with high-performance DuckDB and Polars pipelines completely transformed how our trading desks evaluate micro-signals. Worth every single dollar.',
    highlight: 'Immediate alpha generation in production financial environments.',
  },
  {
    author: 'Ahmad Faiz',
    designation: 'Lead Product Design Systems Architect',
    company: 'Grab Financial Group',
    courseTitle: 'Design Systems Engineering: Tokens, Figma API & React Sync',
    quote:
      'For the first time in Singapore, there is an institution that treats product design with the same mathematical precision and engineering discipline as kernel programming. The Tanjong Pagar atelier is stunning.',
    highlight: 'Unmatched synergy between aesthetic beauty and code architecture.',
  },
  {
    author: 'Benedict Seah',
    designation: 'Lead Distributed Systems Engineer',
    company: 'Bytedance Singapore',
    courseTitle: 'Full-Stack Distributed Systems with Next.js, Rust & GraphQL',
    quote:
      'The focus on memory safety, concurrency, and WebAssembly gave me the technical leverage to pass the hardest engineering screens in the country. If you want a comfortable walk in the park, look elsewhere. If you want excellence, this is it.',
    highlight: 'The definitive crucible for high-performance software craft.',
  },
];

export const enrichedReviews: EnrichedReview[] = rawData.student_reviews.map((r, i) => {
  const q = reviewQuotes[i % reviewQuotes.length];
  const dates = ['March 2026', 'February 2026', 'January 2026', 'December 2025', 'November 2025'];
  return {
    id: r.id,
    rating: r.rating || 5,
    authorName: q.author,
    currentDesignation: q.designation,
    company: q.company,
    courseTitle: q.courseTitle,
    quote: q.quote,
    date: dates[i % dates.length],
    verified: true,
    highlight: q.highlight,
  };
});

// Admissions Step-by-Step Experience
export const admissionSteps: EnrichedAdmissionStep[] = [
  {
    stepNumber: 1,
    code: 'ADM-01',
    title: 'Admissions Portfolio & Background Audit',
    timeline: 'Within 48 Hours',
    overview:
      'Submit your academic history, professional journey, GitHub or portfolio repository, and personal motivation statement. We review your quantitative curiosity and readiness for rigorous systems thinking.',
    deliverables: ['Academic / Employment transcripts', 'GitHub / Portfolio / Code samples', 'Statement of Purpose (500 words)', 'SkillsFuture / IBF subsidy eligibility pre-check'],
    acceptanceRateNote: '100% of applications receive comprehensive rubric feedback.',
    actionCta: 'Start Digital Application',
  },
  {
    stepNumber: 2,
    code: 'ADM-02',
    title: 'Technical Diagnostic & Problem-Solving Sandbox',
    timeline: 'Day 3 – Day 5',
    overview:
      'Complete a 90-minute take-home algorithmic and systems diagnostic designed to assess logical decomposition, pattern synthesis, and resilience under ambiguity.',
    deliverables: ['90-min online logic & algorithmic assessment', 'Open-book computational thinking challenge', 'No syntax trick questions; purely mental modeling'],
    acceptanceRateNote: 'Top 38% advance to the Technical Architecture Defense.',
    actionCta: 'View Diagnostic Rubric',
  },
  {
    stepNumber: 3,
    code: 'ADM-03',
    title: 'Technical Architecture & Faculty Defense',
    timeline: 'Day 6 – Day 8',
    overview:
      'A 30-minute private 1-on-1 interview with a resident faculty member (ex-GovTech, ex-Stripe, or ex-DeepMind). We critique a real-world system architecture together and assess your communication clarity.',
    deliverables: ['Live architectural whiteboard discussion', 'Career aspiration and timeline alignment', 'Faculty fit and cohort synergy evaluation'],
    acceptanceRateNote: 'Final cohort acceptance rate is 18.4% to maintain extreme peer quality.',
    actionCta: 'Meet Admissions Faculty',
  },
  {
    stepNumber: 4,
    code: 'ADM-04',
    title: 'Offer of Admission & SkillsFuture / IBF Subsidies',
    timeline: 'Day 9 – Day 10',
    overview:
      'Successful fellows receive a formal Letter of Offer. Our financial concierge finalizes government funding deductions (up to 70-90% for Singaporeans) and flexible 0% interest monthly installments.',
    deliverables: ['Official Letter of Offer & Enrollment Agreement', 'SkillsFuture Singapore (SSG) grant deduction verification', 'IBF Financial Training Scheme claim endorsement', 'Hardware compute grant voucher (up to $1,500 AWS/NVIDIA credits)'],
    acceptanceRateNote: 'Guaranteed seat reservation for 7 calendar days.',
    actionCta: 'Review Tuition Subsidies',
  },
  {
    stepNumber: 5,
    code: 'ADM-05',
    title: 'Cohort Orientation & Cloud Infrastructure Provisioning',
    timeline: 'Day 14 (Intake Kickoff)',
    overview:
      'Receive your biometric campus access keycard, personal GPU cluster credentials, private Git repositories, and meet your cohort squad and dedicated faculty mentor at the Welcome Gala.',
    deliverables: ['One-North / Marina Bay 24/7 RFID keycard', 'NVIDIA GPU cluster SSH access & private workspace', 'Cohort squad allocation & mentor pairing', 'Welcome Keynote and Faculty Roundtable'],
    acceptanceRateNote: 'Orientation commences across all 12 campuses.',
    actionCta: 'Prepare for Day One',
  },
];

// Career Journey Builder data for SECTION 1 & SECTION 2
export const careerJourneyPaths: Record<CareerDomain, CareerJourneyPath> = {
  'AI Engineer': {
    career: 'AI Engineer',
    tagline: 'Architect autonomous agentic workflows, custom tensor operations, and production LLM infrastructure.',
    averageSalarySG: 'SGD 9,500 – 16,800 / month',
    growthRate: '+42% annual market hiring demand in Singapore',
    currentSkillLevels: [
      {
        level: 'Non-Technical or Junior Coder',
        description: 'Basic scripting or non-STEM background seeking complete transition into foundation models.',
        coursesRecommended: ['CRS001: Autonomous Agentic AI', 'CRS002: Deep Learning with PyTorch', 'CRS007: Enterprise RAG Architecture'],
        estimatedTimeline: '24 Weeks (Full-Time or Evening)',
      },
      {
        level: 'Software Engineer (1-3 Years)',
        description: 'Strong full-stack or backend fundamentals looking to master GPU kernels, fine-tuning, and model deployment.',
        coursesRecommended: ['CRS001: Autonomous Agentic AI', 'CRS008: CUDA C++ Kernels', 'CRS014: GPU Cluster Orchestration'],
        estimatedTimeline: '16 Weeks Intensive',
      },
      {
        level: 'Senior Architect / Tech Lead',
        description: 'Experienced tech lead transitioning entire enterprise engineering teams toward autonomous AI systems.',
        coursesRecommended: ['CRS005: Autonomous Multi-Agent Systems', 'CRS007: Enterprise RAG', 'CRS017: Compound AI Architecture'],
        estimatedTimeline: '12 Weeks Executive Mastery',
      },
    ],
    primaryTrack: 'Autonomous Systems & Machine Intelligence',
    coreSkills: ['PyTorch 2.0', 'CUDA C++', 'LangGraph', 'vLLM', 'Triton Inference', 'Vector Embeddings', 'RAG Guardrails'],
    capstoneProject: {
      title: 'Enterprise Multi-Agent Orchestrator with Deterministic Tool Use & Guardrails',
      description: 'Build an autonomous multi-agent reasoning cluster that reads Singapore regulatory PDFs, executes API transactions, and verifies compliance against MAS guidelines with zero hallucination.',
      industryPartners: ['GovTech Singapore', 'AWS APAC', 'A*STAR Institute for Infocomm Research'],
    },
    outcomeRole: 'Senior AI Engineer / Machine Learning Infrastructure Lead',
  },
  'Data Analyst': {
    career: 'Data Analyst',
    tagline: 'Master econometric causal inference, modern data stack pipelines, and high-frequency market intelligence.',
    averageSalarySG: 'SGD 7,200 – 13,500 / month',
    growthRate: '+31% annual market demand across SG Financial & Port Sectors',
    currentSkillLevels: [
      {
        level: 'Excel / BI Analyst',
        description: 'Familiar with spreadsheets and basic dashboards, eager to graduate to production Python, dbt, and DuckDB.',
        coursesRecommended: ['CRS002: Advanced Quantitative Analytics', 'CRS006: Modern Data Stack', 'CRS010: Product Analytics'],
        estimatedTimeline: '20 Weeks Hybrid',
      },
      {
        level: 'Business Intelligence Developer',
        description: 'Writing SQL queries but wanting to build automated data models, causal experiments, and streaming analytics.',
        coursesRecommended: ['CRS002: Advanced Quantitative Analytics', 'CRS004: Causal Inference', 'CRS011: Real-Time Streaming'],
        estimatedTimeline: '16 Weeks Accelerated',
      },
      {
        level: 'Senior Data Specialist',
        description: 'Looking to lead data platform architecture, governance under PDPA, and machine learning integration.',
        coursesRecommended: ['CRS003: Algorithmic Trading Analytics', 'CRS004: Causal Inference', 'CRS015: Data Mesh & Governance'],
        estimatedTimeline: '12 Weeks Executive',
      },
    ],
    primaryTrack: 'Quantitative Analytics & Modern Data Engineering',
    coreSkills: ['DuckDB', 'dbt Core', 'Snowflake', 'Python Polars', 'Causal Impact', 'Apache Flink', 'Tableau / Hex'],
    capstoneProject: {
      title: 'High-Frequency ASEAN Maritime Supply Chain Telemetry & Predictive Port Congestion Model',
      description: 'Construct a unified analytics warehouse transforming real-time AIS vessel coordinates and PSA Singapore port operations data into automated berthing optimization alerts.',
      industryPartners: ['PSA International', 'Enterprise Singapore', 'Standard Chartered Analytics'],
    },
    outcomeRole: 'Lead Quantitative Analyst / Modern Data Platform Specialist',
  },
  'Cloud Architect': {
    career: 'Cloud Architect',
    tagline: 'Design fault-tolerant, multi-region distributed cloud topologies that survive catastrophic failure.',
    averageSalarySG: 'SGD 10,200 – 18,500 / month',
    growthRate: '+38% annual growth across Singapore multinational hubs',
    currentSkillLevels: [
      {
        level: 'Traditional Sysadmin / On-Prem IT',
        description: 'Managing virtual machines and hardware, wanting to leap into declarative infrastructure and Kubernetes.',
        coursesRecommended: ['CRS003: Distributed Cloud on AWS', 'CRS005: Terraform GitOps', 'CRS014: Container Security'],
        estimatedTimeline: '24 Weeks Hybrid',
      },
      {
        level: 'DevOps / Site Reliability Engineer',
        description: 'Running Kubernetes clusters, ready to architect multi-region active-active architectures and eBPF networking.',
        coursesRecommended: ['CRS003: Distributed Cloud on AWS', 'CRS004: Zero-Trust eBPF', 'CRS011: Distributed DBs (CockroachDB)'],
        estimatedTimeline: '16 Weeks Intensive',
      },
      {
        level: 'Enterprise Solutions Architect',
        description: 'Guiding enterprise cloud strategy and aligning multi-cloud topologies with MAS Technology Risk Management.',
        coursesRecommended: ['CRS004: Zero-Trust eBPF', 'CRS007: Azure Enterprise Landing Zones (MAS TRM)', 'CRS019: Chaos Engineering'],
        estimatedTimeline: '12 Weeks Executive Mastery',
      },
    ],
    primaryTrack: 'Cloud-Native Distributed Infrastructure & Zero Trust',
    coreSkills: ['AWS Solutions Architecture', 'Kubernetes Core', 'Terraform / Pulumi', 'eBPF / Cilium', 'ArgoCD GitOps', 'OpenTelemetry'],
    capstoneProject: {
      title: 'Active-Active Multi-Region Sovereign Banking Infrastructure with Sub-100ms Failover',
      description: 'Architect a compliant distributed cloud fabric across AWS Singapore and Google Cloud Jakarta that tolerates complete datacenter annihilation while preserving strict data residency.',
      industryPartners: ['DBS Bank', 'AWS Financial Services APAC', 'Google Cloud Singapore'],
    },
    outcomeRole: 'Principal Cloud Architect / Enterprise Infrastructure Fellow',
  },
  'Cybersecurity Specialist': {
    career: 'Cybersecurity Specialist',
    tagline: 'Defend national critical infrastructure, dissect binary exploits, and orchestrate offensive red-team operations.',
    averageSalarySG: 'SGD 9,000 – 17,200 / month',
    growthRate: '+45% annual urgency under Singapore Cybersecurity Act',
    currentSkillLevels: [
      {
        level: 'IT Support / Network Engineer',
        description: 'Understands TCP/IP and routing, ready to step into hands-on penetration testing and threat hunting.',
        coursesRecommended: ['CRS004: Enterprise Threat Hunting', 'CRS002: Offensive Pentesting', 'CRS014: SOC Engineering'],
        estimatedTimeline: '24 Weeks Immersive',
      },
      {
        level: 'SOC Analyst / Security Auditor',
        description: 'Handling alerts and checklists, ready to transition into live red teaming and binary reverse engineering.',
        coursesRecommended: ['CRS002: Offensive Pentesting', 'CRS005: Malware Reversing', 'CRS008: Active Directory Attack Paths'],
        estimatedTimeline: '16 Weeks Intensive',
      },
      {
        level: 'Senior Security Engineer',
        description: 'Leading incident response, seeking mastery of zero-trust kernel bypasses, OT/SCADA defense, and CISO leadership.',
        coursesRecommended: ['CRS005: Malware Reversing', 'CRS006: OT/SCADA Defense', 'CRS020: MAS TRM Compliance'],
        estimatedTimeline: '12 Weeks Executive',
      },
    ],
    primaryTrack: 'Offensive Operations & Critical Infrastructure Defense',
    coreSkills: ['Burp Suite Pro', 'Ghidra / IDA Pro', 'BloodHound', 'eBPF Kernel Monitoring', 'YARA Rules', 'Air-Gapped Range Tactics'],
    capstoneProject: {
      title: 'Full-Spectrum Red Team Emulation on Simulated Singapore Smart-Port SCADA & Corporate AD',
      description: 'Execute an end-to-end simulated cyber campaign bypassing EDR, exploiting hybrid Active Directory delegations, and capturing industrial control flags in an isolated physical cyber range.',
      industryPartners: ['Cyber Security Agency of Singapore (CSA)', 'ST Engineering', 'Standard Chartered Cyber'],
    },
    outcomeRole: 'Senior Red Team Operator / Critical Infrastructure CISO',
  },
  'Product Designer': {
    career: 'Product Designer',
    tagline: 'Unify Swiss typography, mathematical layout grids, and design tokens that compile cleanly into code.',
    averageSalarySG: 'SGD 7,800 – 14,200 / month',
    growthRate: '+29% market demand for code-fluent Design Engineers',
    currentSkillLevels: [
      {
        level: 'Graphic / Visual Designer',
        description: 'Strong aesthetic instincts seeking to master interaction design, UX research, and design systems.',
        coursesRecommended: ['CRS001: Design Systems Engineering', 'CRS002: Enterprise B2B UX', 'CRS005: Motion Design & Framer'],
        estimatedTimeline: '20 Weeks Atelier',
      },
      {
        level: 'Product / UI/UX Designer',
        description: 'Designing in Figma, ready to learn design token automation, Figma APIs, and React component integration.',
        coursesRecommended: ['CRS001: Design Systems Engineering', 'CRS007: Design for AI & Copilots', 'CRS008: WCAG AAA Accessibility'],
        estimatedTimeline: '16 Weeks Studio',
      },
      {
        level: 'Senior UX Lead',
        description: 'Directing product design strategy, multi-brand design systems, and design ops across engineering squads.',
        coursesRecommended: ['CRS001: Design Systems Engineering', 'CRS007: Design for AI', 'CRS012: Design Leadership & Ops'],
        estimatedTimeline: '12 Weeks Executive',
      },
    ],
    primaryTrack: 'Design Systems Engineering & Human-Computer Ergonomics',
    coreSkills: ['Figma API Automation', 'Design Tokens', 'Style Dictionary', 'Framer & GSAP', 'WCAG 2.2 AAA', 'React 19 Components'],
    capstoneProject: {
      title: 'Autonomous AI Copilot Design System with Non-Deterministic State Handling & Token Sync',
      description: 'Architect a production-grade multi-theme design system that manages confidence scoring UI, conversational streaming states, and automatically pushes token updates to a live Next.js repository via GitHub Actions.',
      industryPartners: ['Grab Design', 'Carousell', 'GovTech Open Government Products (OGP)'],
    },
    outcomeRole: 'Staff Design Systems Architect / Head of Product Design',
  },
  'Full Stack Developer': {
    career: 'Full Stack Developer',
    tagline: 'Engineer high-performance web systems from Rust/Go backends to real-time React 19 interactive interfaces.',
    averageSalarySG: 'SGD 8,500 – 15,600 / month',
    growthRate: '+36% annual hiring volume across Singapore tech firms',
    currentSkillLevels: [
      {
        level: 'Junior Web Developer / Self-Taught',
        description: 'Knows HTML/CSS/basic JS, ready to master modern TypeScript, Next.js 15 App Router, and relational database internals.',
        coursesRecommended: ['CRS001: Full-Stack Distributed Systems', 'CRS002: High-Performance Go Backend', 'CRS003: Modern TypeScript Architecture'],
        estimatedTimeline: '24 Weeks Bootcamp',
      },
      {
        level: 'Frontend or Backend Specialist',
        description: 'Single-discipline engineer seeking full-stack versatility, WebSockets, CRDTs, and cloud deployment.',
        coursesRecommended: ['CRS001: Full-Stack Distributed Systems', 'CRS004: Real-Time CRDTs & Yjs', 'CRS006: Database Internals'],
        estimatedTimeline: '16 Weeks Intensive',
      },
      {
        level: 'Senior Software Engineer',
        description: 'Ready to master distributed consensus, Rust WASM, high-concurrency event brokers, and staff-level architecture.',
        coursesRecommended: ['CRS002: High-Performance Go Backend', 'CRS004: Real-Time CRDTs', 'CRS008: WebAssembly in Rust'],
        estimatedTimeline: '12 Weeks Executive Mastery',
      },
    ],
    primaryTrack: 'Modern Distributed Systems & Full-Stack Craft',
    coreSkills: ['Next.js 15 App Router', 'React 19', 'TypeScript', 'Rust / Go', 'PostgreSQL Internals', 'CRDTs & WebSockets', 'Docker / CI/CD'],
    capstoneProject: {
      title: 'Ultra-Low-Latency Multiplayer Collaborative CAD Canvas with Rust WASM & Distributed Consensus',
      description: 'Develop a high-performance multiplayer browser application supporting 20 concurrent editors with zero conflict, powered by Conflict-Free Replicated Data Types, Rust WASM compile-targets, and an event-sourced Postgres backplane.',
      industryPartners: ['Shopee Core Tech', 'Stripe Engineering', 'ByteDance APAC'],
    },
    outcomeRole: 'Staff Distributed Systems Engineer / Full-Stack Technical Lead',
  },
};
