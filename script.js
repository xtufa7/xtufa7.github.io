const socialLinks = {
  github: "https://github.com/xtufa7",
  x: "https://x.com/0xtufa7",
  instagram: "https://instagram.com/_bb5bb",
  website: "https://xtufa7.github.io",
  email: "mailto:tufa7shaml@gmail.com",
};

const iconSvg = {
  projects:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm2 1V18h12V6.5H6Zm2 2h8v1.7H8V8.5Zm0 3.1h5.8v1.7H8v-1.7Zm0 3.1h3.9v1.7H8v-1.7Z"/></svg>',
  radar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2Zm1 1v9.6l7.8 4.5 1-1.74-6.8-3.92V3h-2Zm-1 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.34-3.78-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.17 1.73 1.17 1 .1.27 2.64 1.05 3.28 1.82.82 1.22-.4 2.44-.76.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.1-2.99 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.65 0C18.04 6.1 19 6.4 19 6.4c.6 1.56.22 2.7.1 2.99.72.8 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.41.36.77 1.05.77 2.12v3.14c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.53 3h3.06l-6.69 7.64L21.77 21h-6.16l-4.82-6.3L5.27 21H2.2l7.16-8.18L1.82 3h6.32l4.36 5.76L17.53 3Zm-1.07 16.18h1.7L7.22 4.72H5.4l11.06 14.46Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5-2.15a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 2A.5.5 0 0 0 4 7.5v.28l8 4.8 8-4.8V7.5a.5.5 0 0 0-.5-.5h-15Zm15.5 3.1-7.49 4.5a1 1 0 0 1-1.02 0L4 10.1v6.4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-6.4Z"/></svg>',
  website:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.16a15.7 15.7 0 0 0-1.05-5.06A8.04 8.04 0 0 1 18.93 11ZM12 4.04c.76 1.1 1.5 3.2 1.72 6.96h-3.44C10.5 7.24 11.24 5.14 12 4.04ZM4.07 13h3.16c.13 1.92.5 3.67 1.05 5.06A8.04 8.04 0 0 1 4.07 13Zm3.16-2H4.07a8.04 8.04 0 0 1 4.21-5.06A15.7 15.7 0 0 0 7.23 11ZM12 19.96c-.76-1.1-1.5-3.2-1.72-6.96h3.44c-.22 3.76-.96 5.86-1.72 6.96Zm3.72-1.9c.55-1.39.92-3.14 1.05-5.06h3.16a8.04 8.04 0 0 1-4.21 5.06Z"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6.1c0 5.05 3.3 9.67 8 10.9 4.7-1.23 8-5.85 8-10.9V5l-8-3Zm0 2.16L18 6.4v4.7c0 3.88-2.42 7.52-6 8.82-3.58-1.3-6-4.94-6-8.82V6.4l6-2.24Z"/></svg>',
  nodes:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4a3 3 0 0 1 2.83 2h6.34A3 3 0 1 1 18 10a2.98 2.98 0 0 1-2.12-.88L9.3 12.4A3.03 3.03 0 0 1 9 14l6.2 3.1a3 3 0 1 1-.9 1.8L8.1 15.8A3 3 0 1 1 7.9 11L14.5 7.7A3.2 3.2 0 0 1 14.5 8H8.83A3 3 0 1 1 6 4Z"/></svg>',
  eye:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c5.2 0 8.78 4.02 10 7-1.22 2.98-4.8 7-10 7S3.22 14.98 2 12c1.22-2.98 4.8-7 10-7Zm0 2c-3.8 0-6.6 2.72-7.74 5C5.4 14.28 8.2 17 12 17s6.6-2.72 7.74-5C18.6 9.72 15.8 7 12 7Zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/></svg>',
  edit:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h5v2H8v-2Z"/></svg>',
  system:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v11H4V4Zm2 2v7h12V6H6Zm-1 12h14v2H5v-2Zm5-3h4v3h-4v-3Z"/></svg>',
};

const content = {
  en: {
    metaTitle: "0xtufa7 | Cyber Intelligence, OSINT & Network Security",
    metaDescription:
      "Personal website of 0xtufa7, focused on cyber intelligence, OSINT, defensive monitoring, network security analysis, regulatory cybersecurity, AI-assisted security systems, and creative editing.",
    skip: "Skip to content",
    nav: [
      ["home", "Home"],
      ["about", "About"],
      ["osint", "OSINT"],
      ["security", "Security"],
      ["godeye", "Echosystem"],
      ["future", "Future"],
      ["creative", "Editing"],
      ["stack", "Stack"],
      ["contact", "Contact"],
    ],
    hero: {
      eyebrow: "identity layer / cyber intelligence builder",
      subtitle: "Cyber Intelligence • OSINT • Network Security Analysis • Defensive & Regulatory Monitoring",
      text:
        "I build systems that turn raw network, DNS, device, and open-source signals into structured intelligence: context, behavior, risk, and control. The goal is not to drown in logs. The goal is to understand what is happening and why it matters.",
    },
    buttons: {
      projects: "View Projects",
      osint: "OSINT Profile",
      github: "GitHub",
      contact: "Contact",
      githubProfile: "GitHub Profile",
    },
    readouts: {
      dns: "DNS SIG / LIVE",
      osint: "OSINT MAP / ACTIVE",
      ai: "AI RELAY / READY",
    },
    intelStrip: ["DNS behavior", "OSINT pivots", "Network analysis", "Regulatory monitoring"],
    about: {
      eyebrow: "profile",
      title: "About 0xtufa7",
      p1:
        "I focus on cyber intelligence, OSINT, network behavior analysis, defensive security, and regulatory-style monitoring. My strongest angle is analysis: connecting technical signals to behavior, risk, identity, and practical decisions.",
      p2:
        "I work across DNS visibility, device activity, domain classification, monitoring dashboards, AI-assisted interpretation, and controlled access systems. I treat logs as evidence streams, not just technical records.",
      p3:
        "I also bring a visual editing background into the way I design interfaces. Cyber dashboards should be fast, sharp, readable, and cinematic without becoming childish or fake.",
    },
    metrics: {
      osint: "open-source intelligence",
      dns: "network behavior layer",
      ai: "analysis accelerator",
      edit: "motion editing experience",
    },
    osint: {
      eyebrow: "intelligence discipline",
      title: "OSINT & Network Intelligence",
    },
    osintCards: [
      {
        title: "Username & Identity Pivots",
        icon: "eye",
        description:
          "Connecting public usernames, profile signals, platform traces, and timing patterns into clean investigative leads.",
      },
      {
        title: "Domain & DNS Reconnaissance",
        icon: "nodes",
        description:
          "Reading domains as infrastructure signals: DNS trails, hosting context, categories, risk levels, and behavioral history.",
      },
      {
        title: "Network Signal Analysis",
        icon: "radar",
        description:
          "Separating normal background traffic from meaningful user-driven activity, suspicious patterns, and policy violations.",
      },
      {
      title: "Public Signal Review",
      icon: "shield",
      description:
          "Reviewing public signals, infrastructure context, domain reputation, and weak visibility points with clear evidence.",
      },
      {
        title: "Intelligence Reporting",
        icon: "projects",
        description:
          "Turning raw findings into readable reports with confidence levels, context, evidence, and practical next steps.",
      },
      {
        title: "AI-assisted Triage",
        icon: "system",
        description:
          "Using AI to summarize domains, classify activity, reduce noise, and explain behavior without replacing analyst judgment.",
      },
    ],
    security: {
      eyebrow: "security posture",
      title: "Analytical Security, Defensive Control",
      cardTitle: "Balanced Security Thinking",
      p1:
        "I use adversarial security thinking as a validation method: review exposure, test assumptions, and convert findings into stronger monitoring, filtering, and control.",
      p2:
        "The core focus remains defensive and regulatory: visibility, policy-aware filtering, risk explanation, network behavior baselines, and systems that make suspicious activity easier to understand.",
    },
    securityPoints: [
      "Defensive monitoring and visibility",
      "Network behavior baselining",
      "Regulatory and policy-driven filtering",
      "Surface visibility review",
      "Infrastructure reputation triage",
      "Risk explanation for non-technical decisions",
    ],
    godeye: {
      eyebrow: "flagship project",
      status: "Private / In Development",
      role: "Founder & Builder",
      category: "Cyber Intelligence / DNS Monitoring / AI Security",
      title: "GodEye Echosystem",
      description:
        "GodEye Echosystem is a private cyber intelligence monitoring concept designed to turn network and DNS activity into meaningful behavioral and security insight. It focuses on device visibility, domain analysis, activity classification, AI-assisted interpretation, and privacy-aware control.",
      note:
        "GodEye Echosystem is private and in development. Public documentation and repository access will be published when the system is ready.",
    },
    godeyeFeatures: [
      "DNS and security log ingestion",
      "Device-based activity monitoring",
      "IPv4 / IPv6 identity tracking",
      "Live log streaming",
      "Domain classification",
      "Background vs active usage detection",
      "AI domain analysis",
      "Priority activity highlighting",
      "Policy and content-risk indicators",
      "Sleep mode monitoring",
      "SQLite local persistence",
      "Privacy mode for screenshots",
      "AI relay support via Cloudflare Workers",
      "OpenAI / Gemini-ready architecture",
      "Custom filters and profile-based control",
    ],
    future: {
      eyebrow: "future build",
      title: "Full Mobile Oversight System",
      cardTitle: "Privacy-aware mobile supervision and security monitoring",
      description:
        "A future system concept for complete mobile visibility: device activity signals, network behavior, content risk indicators, profile-based controls, alerting, and clean reporting. The direction is serious, security-focused, and designed around responsible monitoring.",
    },
    futurePoints: [
      "Mobile network activity visibility",
      "App and profile-based controls",
      "Content-risk indicators",
      "Device protection workflows",
      "Privacy mode and clean reports",
      "Security alerts with context",
    ],
    creative: {
      eyebrow: "visual craft",
      title: "Motion Editing Background",
    },
    creativeCards: [
      {
        title: "Alight Motion",
        metric: "4 years",
        icon: "edit",
        description:
          "Mobile motion design experience with timing, pacing, transitions, typography, and polished visual impact.",
      },
      {
        title: "After Effects",
        metric: "4 years",
        icon: "edit",
        description:
          "Composition, motion graphics, cinematic effects, visual rhythm, and polished animated presentation.",
      },
      {
        title: "Blurrr",
        metric: "1 year",
        icon: "edit",
        description:
          "Fast mobile editing workflow for sharp short-form visuals, clean cuts, glow, blur, and detail control.",
      },
    ],
    opensource: {
      eyebrow: "builder direction",
      title: "Open-Source Security Tools",
      label: "public utility mindset",
      cardTitle: "Tools that help analysts move faster",
      description:
        "I am building toward open-source tools that support cybersecurity workflows: DNS triage, domain classification, log interpretation, network visibility, OSINT pivots, and clean reporting.",
    },
    stack: {
      eyebrow: "technical surface",
      title: "Technical Stack",
    },
    stackGroups: [
      {
        title: "Cybersecurity",
        items: [
          "Defensive security",
          "Network security",
          "OSINT analysis",
          "DNS intelligence",
          "Log analysis",
          "Risk detection",
          "Regulatory monitoring",
          "Threat interpretation",
          "Behavioral monitoring",
        ],
      },
      {
        title: "Development",
        items: [
          "Java Android development",
          "Flutter experiments",
          "JavaScript / TypeScript",
          "Node.js",
          "PowerShell",
          "Python basics/scripts",
          "HTML/CSS",
          "Git/GitHub",
        ],
      },
      {
        title: "Cloud & APIs",
        items: [
          "Cloudflare Workers",
          "API relay design",
          "OpenAI integration",
          "Gemini integration",
          "DNS provider APIs",
          "REST APIs",
        ],
      },
      {
        title: "Systems",
        items: [
          "Windows 11 power user",
          "Linux / Arch Linux",
          "Manual partitioning",
          "Bootloader/GRUB experience",
          "Development environments",
          "Local storage / SQLite",
        ],
      },
      {
        title: "Visual / UI",
        items: [
          "Cyber dashboards",
          "Dark interfaces",
          "Sharp UI systems",
          "Motion editing",
          "After Effects",
          "Alight Motion",
          "Blurrr",
          "Responsive design",
        ],
      },
    ],
    philosophy: {
      eyebrow: "operating model",
      title: "How I Think",
      text:
        "Logs alone are not intelligence. Intelligence begins when raw events are connected to context, timing, identity, behavior, and risk. The best systems do more than show data: they explain what changed, why it matters, and what should be watched next.",
    },
    approach: [
      "Observe deeply",
      "Classify carefully",
      "Reduce noise",
      "Detect meaningful signals",
      "Explain behavior",
      "Build tools that survive real conditions",
    ],
    roadmap: {
      eyebrow: "project trajectory",
      title: "Roadmap",
    },
    roadmapItems: [
      "Stable Android native build for GodEye Echosystem",
      "Better background collection",
      "Larger local log storage",
      "Smarter domain learning",
      "Profile-based filters",
      "AI relay abstraction",
      "Full mobile oversight system concept",
      "Open-source security utilities",
      "Public GitHub documentation when ready",
    ],
    contact: {
      eyebrow: "contact surface",
      title: "Contact",
    },
    contacts: [
      { label: "GitHub", value: "xtufa7", href: socialLinks.github, icon: "github" },
      { label: "X / Twitter", value: "@0xtufa7", href: socialLinks.x, icon: "x" },
      { label: "Email", value: "tufa7shaml@gmail.com", href: socialLinks.email, icon: "mail" },
      { label: "Website", value: "xtufa7.github.io", href: socialLinks.website, icon: "website" },
      { label: "Instagram", value: "_bb5bb", href: socialLinks.instagram, icon: "instagram" },
    ],
    footer: {
      built: "Built by 0xtufa7",
      tagline: "Cyber Intelligence • OSINT • Defensive Monitoring • AI Security Systems",
    },
  },
  ar: {
    metaTitle: "0xtufa7 | استخبارات سيبرانية و OSINT وأمن شبكات",
    metaDescription:
      "الموقع الشخصي لـ 0xtufa7، متخصص في الاستخبارات السيبرانية، OSINT، المراقبة الدفاعية، تحليل أمن الشبكات، الأمن الرقابي، وأنظمة الأمن المدعومة بالذكاء الاصطناعي.",
    skip: "تجاوز إلى المحتوى",
    nav: [
      ["home", "الرئيسية"],
      ["about", "نبذة"],
      ["osint", "OSINT"],
      ["security", "الأمن"],
      ["godeye", "Echosystem"],
      ["future", "المستقبل"],
      ["creative", "المونتاج"],
      ["stack", "المهارات"],
      ["contact", "تواصل"],
    ],
    hero: {
      eyebrow: "هوية رقمية / بناء أنظمة استخبارات سيبرانية",
      subtitle: "استخبارات سيبرانية • OSINT • تحليل أمن الشبكات • مراقبة دفاعية ورقابية",
      text:
        "أبني أنظمة تحوّل إشارات الشبكات و DNS والأجهزة والمصادر المفتوحة إلى استخبارات منظمة: سياق، سلوك، مخاطر، وتحكم. الهدف ليس الغرق في السجلات، بل فهم ما يحدث ولماذا يهم.",
    },
    buttons: {
      projects: "عرض المشاريع",
      osint: "ملف OSINT",
      github: "غيتهاب",
      contact: "تواصل",
      githubProfile: "حساب غيتهاب",
    },
    readouts: {
      dns: "إشارة DNS / مباشرة",
      osint: "خريطة OSINT / نشطة",
      ai: "AI RELAY / جاهز",
    },
    intelStrip: ["سلوك DNS", "محاور OSINT", "تحليل الشبكات", "مراقبة رقابية"],
    about: {
      eyebrow: "الملف",
      title: "نبذة عن 0xtufa7",
      p1:
        "أركز على الاستخبارات السيبرانية، OSINT، تحليل سلوك الشبكات، الأمن الدفاعي، والمراقبة الرقابية. أقوى زاوية عندي هي التحليل: ربط الإشارات التقنية بالسلوك والمخاطر والهوية والقرار العملي.",
      p2:
        "أعمل على رؤية DNS، نشاط الأجهزة، تصنيف النطاقات، لوحات المراقبة، التفسير المدعوم بالذكاء الاصطناعي، وأنظمة التحكم بالوصول. أتعامل مع السجلات كمسارات أدلة وليست مجرد بيانات تقنية.",
      p3:
        "أحمل أيضا خلفية مونتاج بصري تؤثر على طريقة تصميمي للواجهات. لوحة الأمن السيبراني يجب أن تكون سريعة، حادة، واضحة، وسينمائية بدون مبالغة أو مظهر مزيف.",
    },
    metrics: {
      osint: "استخبارات المصادر المفتوحة",
      dns: "طبقة سلوك الشبكة",
      ai: "مسرع للتحليل",
      edit: "خبرة مونتاج موشن",
    },
    osint: {
      eyebrow: "انضباط استخباراتي",
      title: "OSINT واستخبارات الشبكات",
    },
    osintCards: [
      {
        title: "ربط الهويات وأسماء المستخدمين",
        icon: "eye",
        description:
          "ربط أسماء المستخدمين العامة، إشارات الحسابات، آثار المنصات، وأنماط التوقيت لتحويلها إلى خيوط تحقيق مرتبة.",
      },
      {
        title: "استطلاع النطاقات و DNS",
        icon: "nodes",
        description:
          "قراءة النطاقات كبنية تحتية: آثار DNS، سياق الاستضافة، التصنيف، مستوى الخطر، والتاريخ السلوكي.",
      },
      {
        title: "تحليل إشارات الشبكة",
        icon: "radar",
        description:
          "فصل الترافيك الخلفي الطبيعي عن النشاط البشري المهم، الأنماط المشبوهة، ومخالفات السياسة.",
      },
      {
        title: "مراجعة الإشارات العامة",
        icon: "shield",
        description:
          "مراجعة الإشارات العامة، سياق البنية التحتية، سمعة النطاقات، ونقاط ضعف الرؤية بأدلة واضحة.",
      },
      {
        title: "كتابة التقارير الاستخباراتية",
        icon: "projects",
        description:
          "تحويل النتائج الخام إلى تقارير واضحة فيها مستوى ثقة، سياق، أدلة، وخطوات عملية تالية.",
      },
      {
        title: "فرز مدعوم بالذكاء الاصطناعي",
        icon: "system",
        description:
          "استخدام الذكاء الاصطناعي لتلخيص النطاقات، تصنيف النشاط، تقليل الضوضاء، وشرح السلوك بدون استبدال حكم المحلل.",
      },
    ],
    security: {
      eyebrow: "وضعية أمنية",
      title: "تحليل أمني، تحكم دفاعي",
      cardTitle: "تفكير أمني متوازن",
      p1:
        "أستخدم التفكير الأمني الخصومي كطريقة تحقق: مراجعة الظهور العام، اختبار الافتراضات، ثم تحويل النتائج إلى مراقبة وفلترة وتحكم أقوى.",
      p2:
        "التركيز الأساسي يبقى دفاعيا ورقابيا: رؤية واضحة، فلترة مبنية على سياسة، شرح المخاطر، خطوط أساس لسلوك الشبكة، وأنظمة تجعل النشاط المشبوه أسهل للفهم.",
    },
    securityPoints: [
      "مراقبة دفاعية ورؤية تشغيلية",
      "بناء خطوط أساس لسلوك الشبكة",
      "فلترة رقابية وسياسات وصول",
      "مراجعة وضوح السطح العام",
      "فرز سمعة البنية التحتية",
      "شرح المخاطر لاتخاذ قرار واضح",
    ],
    godeye: {
      eyebrow: "المشروع الرئيسي",
      status: "خاص / قيد التطوير",
      role: "المؤسس والباني",
      category: "استخبارات سيبرانية / مراقبة DNS / أمن AI",
      title: "GodEye Echosystem",
      description:
        "GodEye Echosystem هو تصور خاص لمنظومة مراقبة استخباراتية سيبرانية مصممة لتحويل نشاط الشبكة و DNS إلى رؤى سلوكية وأمنية مفهومة. يركز على رؤية الأجهزة، تحليل النطاقات، تصنيف النشاط، التفسير المدعوم بالذكاء الاصطناعي، والتحكم الواعي بالخصوصية.",
      note:
        "GodEye Echosystem مشروع خاص وقيد التطوير. سيتم نشر التوثيق والوصول للمستودع عندما يكون النظام جاهزا.",
    },
    godeyeFeatures: [
      "استيراد سجلات DNS والأمان",
      "مراقبة النشاط حسب الجهاز",
      "تتبع هوية IPv4 / IPv6",
      "بث مباشر للسجلات",
      "تصنيف النطاقات",
      "تمييز الخلفي عن النشاط الفعلي",
      "تحليل النطاقات بالذكاء الاصطناعي",
      "إبراز النشاط عالي الأولوية",
      "مؤشرات مخاطر المحتوى والسياسات",
      "مراقبة وضع النوم",
      "تخزين محلي SQLite",
      "وضع خصوصية للسكرينشوت",
      "دعم AI relay عبر Cloudflare Workers",
      "معمارية جاهزة لـ OpenAI / Gemini",
      "فلاتر مخصصة وتحكم حسب البروفايل",
    ],
    future: {
      eyebrow: "بناء مستقبلي",
      title: "نظام رقابة كامل للجوال",
      cardTitle: "مراقبة وحماية جوال واعية بالخصوصية",
      description:
        "تصور مستقبلي لنظام يوفر رؤية كاملة للجوال: إشارات نشاط الجهاز، سلوك الشبكة، مؤشرات مخاطر المحتوى، تحكم حسب البروفايل، تنبيهات، وتقارير نظيفة. الاتجاه جاد وأمني ومصمم حول المراقبة المسؤولة.",
    },
    futurePoints: [
      "رؤية لنشاط شبكة الجوال",
      "تحكم حسب التطبيق والبروفايل",
      "مؤشرات مخاطر المحتوى",
      "تدفقات حماية للأجهزة",
      "وضع خصوصية وتقارير نظيفة",
      "تنبيهات أمنية بسياق واضح",
    ],
    creative: {
      eyebrow: "حرفة بصرية",
      title: "خلفية مونتاج وموشن",
    },
    creativeCards: [
      {
        title: "Alight Motion",
        metric: "4 سنوات",
        icon: "edit",
        description:
          "خبرة موشن على الجوال في التوقيت، الإيقاع، الانتقالات، التيبوغرافي، والتأثير البصري المصقول.",
      },
      {
        title: "After Effects",
        metric: "4 سنوات",
        icon: "edit",
        description:
          "كومبوزشن، موشن غرافيكس، مؤثرات سينمائية، إيقاع بصري، وعرض أنيميشن مصقول.",
      },
      {
        title: "Blurrr",
        metric: "سنة",
        icon: "edit",
        description:
          "تدفق تحرير سريع للجوال لفيديوهات قصيرة حادة، قصات نظيفة، توهج، بلور، وتحكم بالتفاصيل.",
      },
    ],
    opensource: {
      eyebrow: "اتجاه البناء",
      title: "أدوات أمن سيبراني مفتوحة المصدر",
      label: "عقلية منفعة عامة",
      cardTitle: "أدوات تساعد المحللين يتحركون أسرع",
      description:
        "أتجه لبناء أدوات مفتوحة المصدر تدعم أعمال الأمن السيبراني: فرز DNS، تصنيف النطاقات، تفسير السجلات، رؤية الشبكات، محاور OSINT، وتقارير نظيفة.",
    },
    stack: {
      eyebrow: "المجال التقني",
      title: "المهارات والتقنيات",
    },
    stackGroups: [
      {
        title: "الأمن السيبراني",
        items: [
          "الأمن الدفاعي",
          "أمن الشبكات",
          "تحليل OSINT",
          "استخبارات DNS",
          "تحليل السجلات",
          "كشف المخاطر",
          "المراقبة الرقابية",
          "تفسير التهديدات",
          "مراقبة السلوك",
        ],
      },
      {
        title: "التطوير",
        items: [
          "تطوير Java Android",
          "تجارب Flutter",
          "JavaScript / TypeScript",
          "Node.js",
          "PowerShell",
          "Python سكربتات أساسية",
          "HTML/CSS",
          "Git/GitHub",
        ],
      },
      {
        title: "السحابة والواجهات",
        items: [
          "Cloudflare Workers",
          "تصميم API relay",
          "دمج OpenAI",
          "دمج Gemini",
          "واجهات مزودي DNS",
          "REST APIs",
        ],
      },
      {
        title: "الأنظمة",
        items: [
          "Windows 11 power user",
          "Linux / Arch Linux",
          "Manual partitioning",
          "Bootloader/GRUB",
          "بيئات تطوير",
          "تخزين محلي / SQLite",
        ],
      },
      {
        title: "البصري والواجهات",
        items: [
          "Cyber dashboards",
          "واجهات داكنة",
          "أنظمة UI حادة",
          "مونتاج موشن",
          "After Effects",
          "Alight Motion",
          "Blurrr",
          "تصميم متجاوب",
        ],
      },
    ],
    philosophy: {
      eyebrow: "نموذج التفكير",
      title: "كيف أفكر",
      text:
        "السجلات وحدها ليست استخبارات. الاستخبارات تبدأ عندما ترتبط الأحداث الخام بالسياق، التوقيت، الهوية، السلوك، والمخاطر. أفضل الأنظمة لا تعرض البيانات فقط، بل تشرح ما الذي تغير، لماذا يهم، وما الذي يجب مراقبته بعد ذلك.",
    },
    approach: [
      "الملاحظة بعمق",
      "التصنيف بحذر",
      "تقليل الضوضاء",
      "كشف الإشارات المهمة",
      "شرح السلوك",
      "بناء أدوات تصمد تحت ظروف حقيقية",
    ],
    roadmap: {
      eyebrow: "مسار المشاريع",
      title: "الخارطة القادمة",
    },
    roadmapItems: [
      "بناء Android native مستقر لـ GodEye Echosystem",
      "تحسين الجمع في الخلفية",
      "توسيع التخزين المحلي للسجلات",
      "تعلم أذكى للنطاقات",
      "فلاتر حسب البروفايل",
      "تجريد AI relay",
      "تصور نظام رقابة كامل للجوال",
      "أدوات أمنية مفتوحة المصدر",
      "توثيق GitHub عام عند الجاهزية",
    ],
    contact: {
      eyebrow: "واجهة التواصل",
      title: "التواصل",
    },
    contacts: [
      { label: "GitHub", value: "xtufa7", href: socialLinks.github, icon: "github" },
      { label: "X / Twitter", value: "@0xtufa7", href: socialLinks.x, icon: "x" },
      { label: "Email", value: "tufa7shaml@gmail.com", href: socialLinks.email, icon: "mail" },
      { label: "Website", value: "xtufa7.github.io", href: socialLinks.website, icon: "website" },
      { label: "Instagram", value: "_bb5bb", href: socialLinks.instagram, icon: "instagram" },
    ],
    footer: {
      built: "بناء 0xtufa7",
      tagline: "استخبارات سيبرانية • OSINT • مراقبة دفاعية • أنظمة أمن AI",
    },
  },
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

let currentLang = detectLanguage();

function detectLanguage() {
  const saved = localStorage.getItem("portfolio-language");
  if (saved === "ar" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function t(path) {
  return path.split(".").reduce((acc, key) => acc?.[key], content[currentLang]) ?? "";
}

function applyLanguage() {
  const lang = content[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.title = lang.metaTitle;
  qs('meta[name="description"]')?.setAttribute("content", lang.metaDescription);

  qsa("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value) node.textContent = value;
  });

  qs("[data-current-lang]").textContent = currentLang.toUpperCase();
  qs("[data-lang-toggle] strong").textContent = currentLang === "en" ? "AR" : "EN";

  renderNavigation();
  renderAllDynamic();
}

function renderNavigation() {
  const root = qs("[data-nav-links]");
  root.innerHTML = content[currentLang].nav
    .map(([id, label], index) => `<a href="#${id}" class="${index === 0 ? "active" : ""}">${label}</a>`)
    .join("");
  bindNavLinks();
}

function icon(name) {
  return iconSvg[name] || iconSvg.system;
}

function hydrateIcons() {
  qsa("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function renderIntelStrip() {
  const root = qs("[data-intel-strip]");
  root.innerHTML = content[currentLang].intelStrip.map((item) => `<span>${item}</span>`).join("");
}

function renderCards(rootSelector, items, className = "spec-card") {
  const root = qs(rootSelector);
  root.innerHTML = items
    .map(
      (item) => `
        <article class="${className}">
          <div class="card-icon">${icon(item.icon)}</div>
          <h3>${item.title}</h3>
          ${item.metric ? `<strong class="creative-metric">${item.metric}</strong>` : ""}
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderFeatures() {
  const root = qs("[data-godeye-features]");
  root.innerHTML = content[currentLang].godeyeFeatures.map((feature) => `<div class="feature-item">${feature}</div>`).join("");
}

function renderSecurity() {
  const root = qs("[data-security]");
  root.innerHTML = content[currentLang].securityPoints
    .map((point, index) => `<div class="ops-item"><span>${String(index + 1).padStart(2, "0")}</span>${point}</div>`)
    .join("");
}

function renderFuture() {
  const root = qs("[data-future]");
  root.innerHTML = content[currentLang].futurePoints.map((point) => `<span>${point}</span>`).join("");
}

function renderStack() {
  const root = qs("[data-stack]");
  root.innerHTML = content[currentLang].stackGroups
    .map(
      (group, index) => `
        <article class="stack-card">
          <div class="stack-card-head">
            <span class="stack-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${group.title}</h3>
          </div>
          <div class="skill-list">
            ${group.items.map((item) => `<span class="skill-row">${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderApproach() {
  const root = qs("[data-approach]");
  root.innerHTML = content[currentLang].approach
    .map((item, index) => `<div class="approach-item"><span>${String(index + 1).padStart(2, "0")}</span>${item}</div>`)
    .join("");
}

function renderRoadmap() {
  const root = qs("[data-roadmap]");
  root.innerHTML = content[currentLang].roadmapItems
    .map(
      (item, index) => `
        <article class="timeline-item">
          <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span>
          <p>${item}</p>
        </article>
      `,
    )
    .join("");
}

function renderContacts() {
  const root = qs("[data-contact]");
  root.innerHTML = content[currentLang].contacts
    .map((item) => {
      const value = item.href
        ? `<a href="${item.href}" target="${item.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noreferrer">${item.value}</a>`
        : `<p>${item.value}</p>`;
      return `
        <article class="contact-card">
          <div class="contact-icon">${icon(item.icon)}</div>
          <span>${item.label}</span>
          ${value}
        </article>
      `;
    })
    .join("");
}

function renderAllDynamic() {
  hydrateIcons();
  renderIntelStrip();
  renderCards("[data-osint]", content[currentLang].osintCards);
  renderSecurity();
  renderFeatures();
  renderFuture();
  renderCards("[data-creative]", content[currentLang].creativeCards, "creative-card");
  renderStack();
  renderApproach();
  renderRoadmap();
  renderContacts();
}

function bindNavLinks() {
  const toggle = qs("[data-nav-toggle]");
  const links = qs("[data-nav-links]");
  qsa(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  });
}

function initNavigation() {
  const toggle = qs("[data-nav-toggle]");
  const links = qs("[data-nav-links]");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    links.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        qsa(".nav-links a").forEach((link) => {
          const target = link.getAttribute("href")?.replace("#", "");
          link.classList.toggle("active", target === id);
        });
      });
    },
    { rootMargin: "-36% 0px -56% 0px", threshold: 0 },
  );

  qsa("[data-section]").forEach((section) => observer.observe(section));
}

function initLanguageToggle() {
  qs("[data-lang-toggle]").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("portfolio-language", currentLang);
    applyLanguage();
  });
}

function initReveal() {
  const reveals = qsa(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  reveals.forEach((item) => {
    if (item.classList.contains("immediate")) item.classList.add("visible");
    else observer.observe(item);
  });
}

function initRadar() {
  const canvas = qs("#radarCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let raf = 0;
  let angle = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;

  const nodes = Array.from({ length: 44 }, (_, index) => ({
    radius: 42 + ((index * 29) % 238),
    theta: (index * 137.5 * Math.PI) / 180,
    size: index % 6 === 0 ? 2.5 : 1.35,
    alpha: 0.2 + (index % 8) * 0.055,
    pulse: index % 4,
  }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const cx = width / 2;
    const cy = height / 2;
    const max = Math.min(width, height) * 0.43;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(cx, cy);

    for (let i = 1; i <= 5; i += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, (max / 5) * i, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(213, 216, 222, ${0.045 + i * 0.024})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let i = 0; i < 12; i += 1) {
      const theta = (Math.PI * 2 * i) / 12;
      ctx.beginPath();
      ctx.moveTo(Math.cos(theta) * 26, Math.sin(theta) * 26);
      ctx.lineTo(Math.cos(theta) * max, Math.sin(theta) * max);
      ctx.strokeStyle = "rgba(45, 91, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, max);
    gradient.addColorStop(0, "rgba(45, 91, 255, 0.24)");
    gradient.addColorStop(0.45, "rgba(45, 91, 255, 0.09)");
    gradient.addColorStop(1, "rgba(45, 91, 255, 0)");

    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, max, -0.2, 0.2);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(max, 0);
    ctx.strokeStyle = "rgba(45, 91, 255, 0.9)";
    ctx.lineWidth = 1.8;
    ctx.shadowColor = "rgba(45, 91, 255, 0.9)";
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    nodes.forEach((node) => {
      const orbit = node.radius * (max / 280);
      const x = cx + Math.cos(node.theta + angle * 0.14) * orbit;
      const y = cy + Math.sin(node.theta + angle * 0.14) * orbit;
      const sweepDistance = Math.abs(Math.atan2(Math.sin(node.theta - angle), Math.cos(node.theta - angle)));
      const glow = Math.max(0, 1 - sweepDistance / 0.5);
      const alpha = node.alpha + glow * 0.62;

      ctx.beginPath();
      ctx.arc(x, y, node.size + glow * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${glow > 0.72 ? "255, 61, 85" : "213, 216, 222"}, ${alpha})`;
      ctx.fill();
    });

    angle += 0.014;
    raf = window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);

  draw();
  if (media.matches) window.cancelAnimationFrame(raf);
}

function initParticles() {
  const canvas = qs("#particleCanvas");
  const ctx = canvas.getContext("2d");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let raf = 0;

  const particles = Array.from({ length: 86 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    size: index % 9 === 0 ? 1.8 : 1,
    alpha: 0.12 + Math.random() * 0.28,
  }));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const field = ctx.createRadialGradient(width * 0.72, height * 0.18, 0, width * 0.72, height * 0.18, Math.max(width, height) * 0.82);
    field.addColorStop(0, "rgba(45, 91, 255, 0.028)");
    field.addColorStop(0.48, "rgba(45, 91, 255, 0.012)");
    field.addColorStop(1, "rgba(45, 91, 255, 0)");
    ctx.fillStyle = field;
    ctx.fillRect(0, 0, width, height);

    particles.forEach((p, index) => {
      p.x += p.vx / width;
      p.y += p.vy / height;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;

      const x = p.x * width;
      const y = p.y * height;

      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(213, 216, 222, ${p.alpha})`;
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const ox = other.x * width;
        const oy = other.y * height;
        const dx = x - ox;
        const dy = y - oy;
        const distance = Math.hypot(dx, dy);
        if (distance < 116) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(ox, oy);
          ctx.strokeStyle = `rgba(45, 91, 255, ${(1 - distance / 116) * 0.08})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    raf = window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
  if (media.matches) window.cancelAnimationFrame(raf);
}

function init() {
  applyLanguage();
  initNavigation();
  initLanguageToggle();
  initReveal();
  initRadar();
  initParticles();
}

document.addEventListener("DOMContentLoaded", init);
