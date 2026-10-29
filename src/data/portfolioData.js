export const personalInfo = {
  name: "John Andrei Costoya",
  title: "Computer Science Student • Backend Developer & AI Engineer",
  program: "Bachelor of Science in Computer Science",
  institution: "College of Computer Science",
  location: "La Carlota City, Negros Occidental, Philippines (Open to On-site / Hybrid / Remote)",
  email: "johncanja17@gmail.com", // Professional email (update if desired)
  github: "https://github.com/YellyJacc",
  resumeUrl: "#",
  ojtStatus: {
    available: true,
    badgeText: "Actively Seeking OJT",
    requiredHours: "500 Hours",
    targetTerm: "As per CS Curriculum",
  },
  specialties: [
    "Backend Development & Systems Architecture",
    "AI Engineering (Model Training & Evaluation)",
    "Logic Thinking & Computational Problem Solving",
    "Programming (Low-Level to High-Level)",
  ],
  careerInterests: [
    "Backend Systems Architecture & API Engineering",
    "AI Engineering (Deep Learning Model Training & Evaluation)",
    "Computer Vision & Action Recognition Pipelines",
    "Logic Programming & Systems Optimization",
    "Networking Infrastructure & Security (CCNA Track)",
  ],
  about:
    "I am a Computer Science student with deep technical focus in backend development, artificial intelligence engineering, and analytical problem-solving. My expertise spans architecting dependable server-side systems, training and evaluating computer vision models (such as YOLOv11 Pose and Info-GCN++ for aerial action recognition), and writing rigorous logic across multiple programming paradigms. As a consistent Dean's Honor List student (GWA 90+) and Philippine Startup Challenge XI Top 10 Finalist, I am actively seeking a 500-hour On-the-Job Training (OJT) placement where I can contribute to high-impact software, AI workflows, and backend engineering teams.",
  stats: [
    { label: "Target Role", value: "Backend / AI Engineer" },
    { label: "Required Hours", value: "500 Hours (Curriculum)" },
    { label: "Academic Standing", value: "Dean's Lister (GWA 90+)" },
    { label: "Key Specialty", value: "Backend, AI & Logic" },
  ],
};

export const skills = [
  {
    category: "AI Engineering & Computer Vision",
    description: "Model training, evaluation, and CV pipelines",
    items: [
      { name: "Model Training & Evaluation", level: "Specialty", note: "Loss, mAP, benchmark metrics" },
      { name: "YOLOv11 Pose", level: "Thesis", note: "Aerial skeletal tracking" },
      { name: "Info-GCN++", level: "Thesis", note: "Graph action recognition" },
      { name: "PyTorch & OpenCV", level: "Proficient", note: "Tensors & video pipelines" },
      { name: "Python", level: "Advanced", note: "NumPy, AI models & scripts" },
    ],
  },
  {
    category: "Backend Development & Logic",
    description: "Server architecture, APIs, and computational logic",
    items: [
      { name: "Backend Architecture", level: "Specialty", note: "REST APIs & data flow" },
      { name: "PHP & PostgreSQL", level: "Proficient", note: "NearBuy startup app core" },
      { name: "Java", level: "Proficient", note: "OOP & data structures" },
      { name: "x86-64 NASM Assembly", level: "Academic", note: "Registers, memory & CPU" },
      { name: "Prolog", level: "Academic", note: "Declarative logic thinking" },
    ],
  },
  {
    category: "Networking & Infrastructure (CCNA)",
    description: "Cisco certified track and network engineering",
    items: [
      { name: "Routing & Switching", level: "CCNA Cert", note: "VLANs, STP, EtherChannel" },
      { name: "Network Fundamentals", level: "CCNA Cert", note: "IPv4/IPv6, protocols & OSI" },
      { name: "Enterprise Networking", level: "In Progress", note: "OSPF, WAN, ACLs & Security" },
      { name: "Linux & Bash", level: "Proficient", note: "Shell scripts & system admin" },
      { name: "Git & Version Control", level: "Proficient", note: "Team collaboration" },
    ],
  },
  {
    category: "Databases & Full-Stack Tools",
    description: "Relational persistence and application interfaces",
    items: [
      { name: "MySQL / MariaDB", level: "Proficient", note: "Normalized schema design" },
      { name: "AJAX & REST APIs", level: "Proficient", note: "Async data integration" },
      { name: "Tailwind CSS", level: "Proficient", note: "Modern responsive UI" },
      { name: "Paper Documentation", level: "Lead", note: "Academic thesis & specs" },
    ],
  },
];

export const projects = [
  {
    title: "YOLOv11 Pose & Info-GCN++ Action Recognition",
    fullTitle: "YOLOv11 POSE IN AERIAL POSE ESTIMATION AND INFO-GCN++ SKELETON BASED ACTION RECOGNITION SYSTEM",
    badge: "Undergraduate Thesis",
    category: "AI & Computer Vision Research",
    role: "AI Engineer & Lead in Paper Documentation",
    teamSize: "Group of 3",
    description:
      "An advanced AI computer vision research thesis uniting YOLOv11 Pose for real-time aerial keypoint tracking with Info-GCN++ for skeleton-based human action recognition from aerial perspectives.",
    highlights: [
      "Trained, benchmarked, and evaluated YOLOv11 Pose models on aerial perspective datasets for human keypoint identification.",
      "Engineered the integration pipeline connecting skeletal coordinate sequences to Info-GCN++ for multi-class action classification.",
      "Served as Lead in Paper Documentation, authoring the thesis manuscript, experimental methodology, and quantitative evaluation chapters.",
    ],
    tools: ["Python", "YOLOv11 Pose", "Info-GCN++", "PyTorch", "OpenCV", "NumPy"],
    acknowledgments: "Conducted collaboratively with thesis groupmates (team of 3) under university faculty supervision.",
    liveUrl: "https://yolo-ar-thesis.preview.local",
    githubUrl: "https://github.com/yourusername/yolo-ar-thesis",
    evidenceType: "vision",
    evidenceSnippet: `// Thesis Evaluation: Aerial YOLOv11-Pose + Info-GCN++\n[MODEL 1] YOLOv11-Pose Aerial: 17 Keypoints detected @ 45 FPS\n[MODEL 2] Info-GCN++ Spatio-Temporal Graph Convolution\n[CLASSIFICATION] Action: "Walking / Standing" (Confidence: 96.8%)\n[ROLE] AI Engineer & Documentation Lead | Group of 3 Thesis`,
  },
  {
    title: "NearBuy Application",
    fullTitle: "NearBuy Platform - E-Commerce Enlistment for MSMEs",
    badge: "Startup Idea in Development • Top 10 Finalist",
    category: "Enterprise Startup Application",
    role: "Lead Backend Developer & System Architect",
    teamSize: "Startup Team Project",
    description:
      "A digital commerce application and startup idea in active development targeting micro, small, and medium enterprises (MSMEs) to enlist localized inventories, manage merchant tiers, and connect neighborhood consumers.",
    highlights: [
      "Selected and awarded as a Top 10 Finalist in the Philippine Startup Challenge XI.",
      "Designed and normalized relational database schemas handling multi-tenant merchant catalogs and transactions.",
      "Engineered secure server-side logic, session validation, order workflows, and asynchronous AJAX integrations.",
    ],
    tools: ["PHP", "PostgreSQL", "AJAX", "JavaScript", "Tailwind CSS"],
    acknowledgments: "Pitched and recognized in the Philippine Startup Challenge XI competition.",
    liveUrl: "https://nearbuy-platform.preview.local",
    githubUrl: "https://github.com/RuiJy-X/nearbuy",
    evidenceType: "schema",
    evidenceSnippet: `// NearBuy Application Core Architecture\n[PSC XI] Philippine Startup Challenge XI - Top 10 Finalist\n[STATUS] Startup Application in Active Development\n[BACKEND] Multi-tenant relational schema, transaction & catalog pipeline\n[ROLE] Lead Backend Developer & System Architect`,
  },
];

export const certifications = [
  {
    type: "Achievement",
    title: "Top 10 Finalist - Philippine Startup Challenge XI",
    issuer: "Philippine Startup Challenge (PSC XI)",
    date: "2024",
    id: "PSC-XI-FINALIST",
    status: "National Finalist",
    badge: "Startup Competition",
    description: "Selected among the top 10 startup projects nationwide for the NearBuy application and enterprise platform concept.",
  },
  {
    type: "Certification",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Completed",
    id: "CCNA-SRWE-VERIFIED",
    status: "Completed Certification",
    badge: "Cisco Networking",
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, SLAAC, WLAN configuration, and wireless security concepts.",
  },
  {
    type: "Certification",
    title: "CCNA: Introduction to Networks (ITN)",
    issuer: "Cisco Networking Academy",
    date: "Completed",
    id: "CCNA-ITN-VERIFIED",
    status: "Completed Certification",
    badge: "Cisco Networking",
    description: "Network architectures, models, protocols, IPv4/IPv6 addressing, Ethernet, and fundamental network operations.",
  },
  {
    type: "Certification",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "In Progress",
    id: "CCNA-ENSA-CURRENT",
    status: "Continuing Course",
    badge: "Cisco Networking",
    description: "Continuing course covering OSPFv2, network security concepts, ACLs, NAT, WAN technologies, VPNs, QoS, and network automation.",
  },
  {
    type: "Achievement",
    title: "Dean's Honor List for Academic Excellence",
    issuer: "College of Computer Science",
    date: "2023 – Present",
    id: "DEANS-LIST-GWA90",
    status: "Consistent Honor Student",
    badge: "Academic Distinction",
    description: "Consistent academic excellence awardee from 2023 to present, maintaining a General Weighted Average (GWA) of 90 or above.",
  },
];
