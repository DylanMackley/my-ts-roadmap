import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Foundation Layer",
    subtitle: "Months 1–3",
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.3)",
    icon: "⬡",
    description: "Learn the tools every T&S engineer touches daily",
    categories: [
      {
        name: "Code & Version Control",
        icon: "{ }",
        items: [
          { name: "VS Code", tag: "You're here", url: "https://code.visualstudio.com", note: "Extensions: Pylance, GitLens, ESLint, Prettier" },
          { name: "Git + GitHub", tag: "You're here", url: "https://github.com", note: "Commits, branches, pull requests, README files" },
          { name: "Python Basics", tag: "Priority #1", url: "https://python.org", note: "Variables, loops, functions, lists, dicts — freeCodeCamp is free" },
          { name: "JavaScript Basics", tag: "Priority #2", url: "https://javascript.info", note: "The web runs on JS. You're already using it if you use VS Code" },
        ]
      },
      {
        name: "Command Line",
        icon: ">_",
        items: [
          { name: "Terminal / Bash", tag: "Essential", url: "https://www.learnshell.org", note: "cd, ls, mkdir, cat, grep — you need this to run anything" },
          { name: "pip & npm", tag: "Essential", url: "https://pypi.org", note: "Package managers. How you install tools in Python and Node" },
          { name: "Virtual Environments", tag: "Good habit", url: "https://docs.python.org/3/library/venv.html", note: "Keeps your projects clean and isolated" },
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Data & Detection Layer",
    subtitle: "Months 3–6",
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.08)",
    border: "rgba(255,107,53,0.3)",
    icon: "◈",
    description: "The core skillset that makes T&S engineers valuable",
    categories: [
      {
        name: "Data Analysis",
        icon: "∑",
        items: [
          { name: "SQL", tag: "Critical", url: "https://mode.com/sql-tutorial", note: "Mode Analytics has a free course. You'll query abuse logs with this every day" },
          { name: "Pandas (Python)", tag: "Critical", url: "https://pandas.pydata.org", note: "Analyze datasets in Python. Your SQS system will use this" },
          { name: "Jupyter Notebooks", tag: "Practical", url: "https://jupyter.org", note: "Write and run Python in browser cells. Great for investigations" },
          { name: "BigQuery / Snowflake", tag: "Learn later", url: "https://cloud.google.com/bigquery", note: "Cloud databases. Companies store billions of abuse signals here" },
        ]
      },
      {
        name: "Machine Learning Basics",
        icon: "⬡",
        items: [
          { name: "scikit-learn", tag: "Start here", url: "https://scikit-learn.org", note: "Python ML library. Your bot detection project uses this" },
          { name: "Logistic Regression", tag: "Concept", url: "https://www.coursera.org/learn/machine-learning", note: "The simplest classifier. Understand it before neural nets" },
          { name: "Random Forest / XGBoost", tag: "Practical", url: "https://xgboost.readthedocs.io", note: "Industry standard for fraud/abuse detection models" },
          { name: "Feature Engineering", tag: "Key concept", url: "https://www.kaggle.com/learn/feature-engineering", note: "Turning raw signals (IPs, timing, behavior) into model inputs" },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Trust & Safety Domain",
    subtitle: "Months 4–9",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.3)",
    icon: "◎",
    description: "The domain knowledge that no CS degree teaches",
    categories: [
      {
        name: "T&S Fundamentals",
        icon: "⚑",
        items: [
          { name: "TSPA Certification", tag: "Do this first", url: "https://www.tspa.org", note: "Trust & Safety Professionals Association — free courses built for career changers" },
          { name: "Platform Policies", tag: "Study", url: "https://transparency.fb.com", note: "Read Facebook, Reddit, Discord, Vercel transparency reports. Learn how they define abuse" },
          { name: "CSAM, NCII, Hate Speech", tag: "Know the law", url: "https://www.missingkids.org/gethelpnow/cybertipline", note: "Know reporting obligations. NCMEC CyberTipline, EARN IT Act basics" },
          { name: "Content Moderation Theory", tag: "Foundation", url: "https://www.taylorfrancis.com/books/mono/10.4324/9781003181545/custodians-internet-tarleton-gillespie", note: "Read 'Custodians of the Internet' by Tarleton Gillespie" },
        ]
      },
      {
        name: "Abuse Patterns to Study",
        icon: "◉",
        items: [
          { name: "Bot Detection", tag: "Your project!", url: "https://botd.readme.io/docs", note: "Behavioral signals: mouse movement, typing cadence, JS fingerprinting" },
          { name: "Account Takeover (ATO)", tag: "Common", url: "https://owasp.org/www-community/attacks/Credential_stuffing", note: "Credential stuffing, session hijacking, impossible travel detection" },
          { name: "Spam & Phishing", tag: "Common", url: "https://developers.google.com/safe-browsing", note: "Link analysis, content hashing, sender reputation scoring" },
          { name: "Fraud Rings", tag: "Advanced", url: "https://research.fb.com/publications", note: "Graph analysis of coordinated networks. Facebook AI Research has public papers" },
        ]
      },
    ]
  },
  {
    id: 4,
    title: "Infrastructure & LLM Layer",
    subtitle: "Months 7–12",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.3)",
    icon: "⬢",
    description: "What separates T&S engineers from T&S analysts",
    categories: [
      {
        name: "Cloud & Systems",
        icon: "☁",
        items: [
          { name: "AWS Free Tier", tag: "Start here", url: "https://aws.amazon.com/free", note: "S3 (storage), Lambda (serverless functions), SQS (queues) — your SQS project applies here!" },
          { name: "Docker Basics", tag: "Practical", url: "https://docs.docker.com/get-started", note: "Containerize your abuse detection system. Every real company uses this" },
          { name: "Queues & Async", tag: "Your project!", url: "https://aws.amazon.com/sqs", note: "SQS = Simple Queue Service. Exactly what you're building. Keep going" },
          { name: "GitHub Actions (CI/CD)", tag: "Practical", url: "https://github.com/features/actions", note: "Auto-run your tests when you push code. Learn this on your own repo" },
        ]
      },
      {
        name: "LLM & AI for T&S",
        icon: "◈",
        items: [
          { name: "OpenAI API", tag: "Priority", url: "https://platform.openai.com/docs", note: "Use GPT-4 to classify content at scale. This is in the Vercel job posting" },
          { name: "Prompt Engineering", tag: "Priority", url: "https://learnprompting.org", note: "Writing prompts that reliably detect abuse. Huge T&S use case" },
          { name: "LangChain", tag: "Intermediate", url: "https://langchain.com", note: "Chain LLM calls together for complex detection pipelines" },
          { name: "Evals & Red-teaming", tag: "Advanced", url: "https://github.com/openai/evals", note: "Testing whether your LLM classifier works. What the Vercel posting specifically mentions" },
        ]
      },
    ]
  },
  {
    id: 5,
    title: "Portfolio & Job Layer",
    subtitle: "Months 9–18",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
    icon: "★",
    description: "What you show employers to get hired",
    categories: [
      {
        name: "Projects to Build",
        icon: "⬡",
        items: [
          { name: "Bot Detection System", tag: "You started this!", url: "https://github.com", note: "Behavioral signals → ML classifier → flag or block. Document it well on GitHub" },
          { name: "Fake Review Detector", tag: "Build next", url: "https://www.kaggle.com/datasets", note: "Use Kaggle's Amazon review dataset. Train a model to spot fakes" },
          { name: "Spam URL Classifier", tag: "Build next", url: "https://developers.google.com/safe-browsing", note: "Use Google Safe Browsing API + your own features. Real T&S work" },
          { name: "Abuse Dashboard", tag: "Polish piece", url: "https://grafana.com", note: "Visualize your detection system's output. Shows you think operationally" },
        ]
      },
      {
        name: "Where to Apply",
        icon: "◎",
        items: [
          { name: "Vercel (target)", tag: "Long game", url: "https://vercel.com/careers", note: "Start with T&S Analyst if posted. Your sister-in-law is your edge" },
          { name: "Discord / Reddit / Twitch", tag: "Good targets", url: "https://discord.com/jobs", note: "All have active T&S teams. Less competitive than FAANG" },
          { name: "Cloudflare", tag: "Stretch", tag2: "Dream", url: "https://cloudflare.com/careers", note: "Heavy infrastructure overlap with your SQS/queue work" },
          { name: "Startups via AngelList", tag: "Entry point", url: "https://wellfound.com", note: "Smaller companies hire junior T&S. Great for first role" },
        ]
      },
    ]
  }
];

const tools = [
  { name: "VS Code", status: "active", category: "Editor" },
  { name: "GitHub", status: "active", category: "Version Control" },
  { name: "Python", status: "learning", category: "Language" },
  { name: "SQL", status: "next", category: "Data" },
  { name: "Pandas", status: "next", category: "Data" },
  { name: "scikit-learn", status: "soon", category: "ML" },
  { name: "AWS SQS", status: "learning", category: "Cloud" },
  { name: "Docker", status: "soon", category: "Infra" },
  { name: "OpenAI API", status: "soon", category: "LLM" },
  { name: "TSPA Cert", status: "soon", category: "Domain" },
];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);

  const phase = phases.find(p => p.id === activePhase);

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      background: "#080C12",
      minHeight: "100vh",
      color: "#E0E6F0",
      padding: "0",
      overflow: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Space+Grotesk:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080C12; }
        ::-webkit-scrollbar-thumb { background: #1E2A3A; border-radius: 2px; }
        .phase-btn { transition: all 0.2s ease; cursor: pointer; border: none; background: none; }
        .phase-btn:hover { transform: translateX(3px); }
        .item-card { transition: all 0.15s ease; cursor: pointer; }
        .item-card:hover { transform: translateY(-1px); }
        .tool-chip { transition: all 0.2s ease; }
        .glow-text { text-shadow: 0 0 20px currentColor; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        .scanline { animation: scan 8s linear infinite; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
      `}</style>

      {/* Scanline effect */}
      <div className="scanline" style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(transparent, rgba(0,212,255,0.03), transparent)",
        pointerEvents: "none", zIndex: 100
      }} />

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1E2A3A",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(8,12,18,0.95)",
        position: "sticky", top: 0, zIndex: 50,
        backdropFilter: "blur(10px)"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00D4FF", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#00D4FF", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>Trust & Safety</span>
            <span style={{ color: "#2A3A4A", fontSize: 11 }}>//</span>
            <span style={{ color: "#4A5A6A", fontSize: 11, letterSpacing: 2 }}>Engineering Path</span>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, marginTop: 4, color: "#fff", letterSpacing: -0.5 }}>
            Career Roadmap <span style={{ color: "#00D4FF" }}>v1.0</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, color: "#4A5A6A", letterSpacing: 2, textTransform: "uppercase" }}>Target Role</div>
          <div style={{ fontSize: 13, color: "#A855F7", fontWeight: 600, letterSpacing: 1 }}>T&S Engineer @ Vercel</div>
          <div style={{ fontSize: 10, color: "#2A3A4A", marginTop: 2 }}>est. timeline: 12–18 months</div>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 73px)", overflow: "hidden" }}>

        {/* Left sidebar — phase nav */}
        <div style={{
          width: 220, flexShrink: 0,
          borderRight: "1px solid #1E2A3A",
          padding: "24px 0",
          overflowY: "auto",
          background: "rgba(4,8,14,0.8)"
        }}>
          <div style={{ padding: "0 20px 12px", fontSize: 9, letterSpacing: 3, color: "#2A3A4A", textTransform: "uppercase" }}>
            Phases
          </div>
          {phases.map(p => (
            <button key={p.id} className="phase-btn" onClick={() => setActivePhase(p.id)}
              style={{
                width: "100%", padding: "14px 20px", textAlign: "left",
                borderLeft: activePhase === p.id ? `2px solid ${p.color}` : "2px solid transparent",
                background: activePhase === p.id ? p.bg : "transparent",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: p.color, fontSize: 16, lineHeight: 1 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: activePhase === p.id ? p.color : "#8A9AB0", letterSpacing: 0.5 }}>
                    Phase {p.id}
                  </div>
                  <div style={{ fontSize: 10, color: "#4A5A6A", marginTop: 1 }}>{p.subtitle}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: activePhase === p.id ? "#8A9AB0" : "#2A3A4A", marginTop: 6, paddingLeft: 26, lineHeight: 1.4 }}>
                {p.title}
              </div>
            </button>
          ))}

          {/* Tool status */}
          <div style={{ padding: "20px 20px 0", borderTop: "1px solid #1E2A3A", marginTop: 12 }}>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#2A3A4A", textTransform: "uppercase", marginBottom: 12 }}>
              Tool Status
            </div>
            {tools.map(t => (
              <div key={t.name} className="tool-chip" style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "5px 0", borderBottom: "1px solid #0E1820"
              }}>
                <span style={{ fontSize: 10, color: t.status === "active" ? "#10B981" : t.status === "learning" ? "#F59E0B" : "#2A3A4A" }}>
                  {t.name}
                </span>
                <span style={{
                  fontSize: 8, letterSpacing: 1, padding: "1px 5px", borderRadius: 2,
                  background: t.status === "active" ? "rgba(16,185,129,0.15)" : t.status === "learning" ? "rgba(245,158,11,0.15)" : "rgba(42,58,74,0.3)",
                  color: t.status === "active" ? "#10B981" : t.status === "learning" ? "#F59E0B" : "#2A3A4A"
                }}>
                  {t.status === "active" ? "ACTIVE" : t.status === "learning" ? "WIP" : "SOON"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {phase && (
            <div className="fade-in" key={phase.id}>
              {/* Phase header */}
              <div style={{
                padding: "20px 24px", borderRadius: 4,
                border: `1px solid ${phase.border}`,
                background: phase.bg, marginBottom: 24,
                borderLeft: `3px solid ${phase.color}`
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ color: phase.color, fontSize: 22 }}>{phase.icon}</span>
                      <span style={{ fontSize: 9, letterSpacing: 3, color: phase.color, textTransform: "uppercase" }}>
                        Phase {phase.id} — {phase.subtitle}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: -0.3 }}>
                      {phase.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#6A7A8A", marginTop: 4, lineHeight: 1.5 }}>
                      {phase.description}
                    </div>
                  </div>
                  <div style={{
                    fontSize: 36, color: phase.color, opacity: 0.15, fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, lineHeight: 1
                  }}>
                    0{phase.id}
                  </div>
                </div>
              </div>

              {/* Categories */}
              {phase.categories.map(cat => (
                <div key={cat.name} style={{ marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ color: phase.color, fontSize: 14, width: 24, textAlign: "center" }}>{cat.icon}</span>
                    <span style={{ fontSize: 10, letterSpacing: 3, color: "#6A7A8A", textTransform: "uppercase" }}>{cat.name}</span>
                    <div style={{ flex: 1, height: 1, background: "#1E2A3A", marginLeft: 8 }} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {cat.items.map(item => (
                      <a key={item.name} href={item.url} target="_blank" rel="noreferrer"
                        className="item-card"
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          display: "block", textDecoration: "none",
                          padding: "14px 16px", borderRadius: 4,
                          border: `1px solid ${hoveredItem === item.name ? phase.border : "#1E2A3A"}`,
                          background: hoveredItem === item.name ? phase.bg : "rgba(255,255,255,0.02)",
                          transition: "all 0.15s ease"
                        }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#D0D8E8", letterSpacing: 0.3 }}>
                            {item.name}
                          </span>
                          <div style={{ display: "flex", gap: 4, flexShrink: 0, marginLeft: 8 }}>
                            {item.tag && (
                              <span style={{
                                fontSize: 8, letterSpacing: 1, padding: "2px 6px", borderRadius: 2,
                                background: item.tag === "You're here" || item.tag === "Your project!" ? "rgba(16,185,129,0.2)" :
                                  item.tag === "Priority #1" || item.tag === "Priority" || item.tag === "Critical" || item.tag === "Do this first" ? `rgba(${phase.color === "#00D4FF" ? "0,212,255" : phase.color === "#FF6B35" ? "255,107,53" : phase.color === "#A855F7" ? "168,85,247" : phase.color === "#10B981" ? "16,185,129" : "245,158,11"},0.2)` :
                                    "rgba(42,58,74,0.5)",
                                color: item.tag === "You're here" || item.tag === "Your project!" ? "#10B981" :
                                  item.tag === "Priority #1" || item.tag === "Priority" || item.tag === "Critical" || item.tag === "Do this first" ? phase.color :
                                    "#4A5A6A",
                                whiteSpace: "nowrap"
                              }}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                        </div>
                        <div style={{ fontSize: 10, color: "#4A5A6A", lineHeight: 1.6 }}>
                          {item.note}
                        </div>
                        <div style={{ fontSize: 9, color: phase.color, marginTop: 6, opacity: hoveredItem === item.name ? 0.8 : 0.3 }}>
                          {item.url.replace("https://", "")} ↗
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar — your project context */}
        <div style={{
          width: 240, flexShrink: 0,
          borderLeft: "1px solid #1E2A3A",
          padding: "24px 20px",
          overflowY: "auto",
          background: "rgba(4,8,14,0.8)"
        }}>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#2A3A4A", textTransform: "uppercase", marginBottom: 16 }}>
            Your Current Project
          </div>

          <div style={{
            padding: 14, borderRadius: 4, border: "1px solid rgba(16,185,129,0.3)",
            background: "rgba(16,185,129,0.06)", marginBottom: 20
          }}>
            <div style={{ display: "flex", items: "center", gap: 6, marginBottom: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", animation: "pulse 2s infinite", marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#10B981", fontWeight: 600 }}>Active Build</span>
            </div>
            <div style={{ fontSize: 12, color: "#D0D8E8", fontWeight: 600, marginBottom: 6 }}>
              AI Bot Detection SQS System
            </div>
            <div style={{ fontSize: 10, color: "#4A5A6A", lineHeight: 1.6 }}>
              Marketplace bot detection with mock AI signals. VS Code + GitHub setup.
            </div>
            <div style={{ marginTop: 10 }}>
              {["VS Code ✓", "GitHub ✓", "SQS Queue", "ML Classifier", "API Layer"].map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0" }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: 2, flexShrink: 0,
                    background: i < 2 ? "#10B981" : "transparent",
                    border: i < 2 ? "none" : "1px solid #2A3A4A",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {i < 2 && <span style={{ fontSize: 8, color: "#080C12" }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 10, color: i < 2 ? "#10B981" : "#4A5A6A" }}>{step.replace(" ✓","")}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 9, letterSpacing: 3, color: "#2A3A4A", textTransform: "uppercase", marginBottom: 12 }}>
            Why This Project Works
          </div>
          {[
            ["Directly maps to Vercel JD", "Bot detection is explicitly listed"],
            ["Shows SQS knowledge", "AWS infrastructure = job ready"],
            ["ML classification", "Teaches feature engineering"],
            ["GitHub portfolio", "Employers will see this"],
          ].map(([title, sub]) => (
            <div key={title} style={{ padding: "8px 0", borderBottom: "1px solid #0E1820" }}>
              <div style={{ fontSize: 10, color: "#8A9AB0", fontWeight: 600 }}>{title}</div>
              <div style={{ fontSize: 9, color: "#4A5A6A", marginTop: 2, lineHeight: 1.4 }}>{sub}</div>
            </div>
          ))}

          <div style={{ fontSize: 9, letterSpacing: 3, color: "#2A3A4A", textTransform: "uppercase", margin: "20px 0 12px" }}>
            Next 3 Actions
          </div>
          {[
            ["1", "Add a README.md to your GitHub repo explaining what it does"],
            ["2", "Sign up for TSPA.org free courses today"],
            ["3", "Add Pandas to your project — analyze the mock signals as data"],
          ].map(([num, action]) => (
            <div key={num} style={{
              display: "flex", gap: 10, padding: "8px 10px", marginBottom: 6,
              borderRadius: 3, background: "rgba(255,255,255,0.02)", border: "1px solid #1E2A3A"
            }}>
              <span style={{ color: "#A855F7", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{num}</span>
              <span style={{ fontSize: 10, color: "#6A7A8A", lineHeight: 1.5 }}>{action}</span>
            </div>
          ))}

          <div style={{ marginTop: 20, padding: 14, borderRadius: 4, border: "1px solid rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.06)" }}>
            <div style={{ fontSize: 10, color: "#A855F7", fontWeight: 600, marginBottom: 6 }}>Sister-in-law Strategy</div>
            <div style={{ fontSize: 10, color: "#4A5A6A", lineHeight: 1.6 }}>
              Don't ask for a referral yet. Ask for a 30-min monthly mentorship call. Show her this project in 3 months. Ask for referral at month 9.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}