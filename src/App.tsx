import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  Database,
  Globe2,
  Menu,
  MessageSquare,
  ServerCog,
  ShoppingCart,
  Workflow,
  X,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Artificial Intelligence & AI Solutions",
    description:
      "Building practical AI-powered applications, intelligent assistants and integrations that help solve real business problems.",
    tags: ["AI applications", "AI agents", "AI integrations"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Full-Stack Software Development",
    description:
      "Developing modern digital applications, responsive interfaces and software systems using contemporary technologies.",
    tags: ["React", "TypeScript", "Application development"],
  },
  {
    icon: ServerCog,
    number: "03",
    title: "Backend & API Engineering",
    description:
      "Designing application backends, APIs, databases and the underlying systems that make digital products function.",
    tags: ["Backend systems", "API development", "Database design"],
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "E-commerce & Marketplace Systems",
    description:
      "Developing digital commerce experiences and marketplace functionality, from product management to business workflows.",
    tags: ["E-commerce", "Marketplace platforms", "Commerce systems"],
  },
  {
    icon: Workflow,
    number: "05",
    title: "Business Automation & Integrations",
    description:
      "Connecting systems, streamlining repetitive operations and creating automated workflows that improve business efficiency.",
    tags: ["Workflow automation", "System integrations", "AI automation"],
  },
  {
    icon: Blocks,
    number: "06",
    title: "Digital Platforms & Product Development",
    description:
      "Turning product ideas into structured digital platforms with thoughtful architecture, useful features and scalable foundations.",
    tags: ["Platform architecture", "SaaS development", "Digital products"],
  },
];

const projects = [
  {
    number: "01",
    category: "CLIENT WORK · WEBSITE DEVELOPMENT",
    title: "Three17 Events ATX",
    description:
      "A paid client website project for a luxury event styling company, focused on presenting its services through a polished digital experience.",
    stack: ["Client website", "Web design", "Responsive development"],
    status: "Paid client website project",
    className: "project-visual-one",
  },
  {
    number: "02",
    category: "SOFTWARE ENGINEERING · MARKETPLACE",
    title: "Telegram Marketplace",
    description:
      "A marketplace platform under active development, involving full-stack engineering, backend systems, database architecture and core marketplace functionality.",
    stack: ["Full-stack development", "Backend engineering", "Marketplace systems"],
    status: "In development",
    className: "project-visual-two",
  },
];

const capabilities = [
  "Artificial intelligence solutions",
  "AI agents and intelligent assistants",
  "Full-stack software development",
  "React and TypeScript",
  "Backend application engineering",
  "REST API development",
  "Database design and management",
  "E-commerce development",
  "Marketplace architecture",
  "Business process automation",
  "System and API integrations",
  "SaaS and digital platforms",
  "Authentication and access control",
  "Software testing and debugging",
  "UI/UX and responsive interfaces",
  "Technical problem-solving",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">S<span>.</span></span>
            <span className="brand-name">SALIH<span>MEEN</span></span>
          </a>

          <button
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Expertise</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot" />
                SOFTWARE · AI · DIGITAL PLATFORMS
              </div>

              <h1>
                Engineering ideas.
                <br />
                <span className="gradient-text">Building possibilities.</span>
              </h1>

              <p className="hero-description">
                I'm <strong>Salih Al-uthaymeen Qasim</strong>, a technology
                developer and digital product builder working across software
                engineering, artificial intelligence, business automation and
                digital platform development.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in touch <ArrowRight size={17} />
                </a>
              </div>

              <div className="hero-footnote">
                <span className="footnote-line" />
                From technical ideas to practical digital solutions.
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract digital technology illustration">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />

              <div className="core-card">
                <div className="core-top">
                  <span className="core-indicator" />
                  <span>ENGINEERING / 001</span>
                </div>
                <div className="core-icon">
                  <Cpu size={54} strokeWidth={1.2} />
                </div>
                <div className="core-title">Think. Engineer. Build.</div>
                <div className="core-subtitle">Technology with purpose.</div>
                <div className="core-bars">
                  <span /><span /><span /><span /><span /><span /><span />
                </div>
              </div>

              <div className="floating-chip chip-top">
                <Bot size={16} /> AI systems
              </div>
              <div className="floating-chip chip-bottom">
                <Code2 size={16} /> Software engineering
              </div>
              <div className="art-cross cross-one">+</div>
              <div className="art-cross cross-two">+</div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <a href="#about" aria-label="Scroll to about section">
              <ArrowDown size={17} />
            </a>
            <span className="hero-bottom-line" />
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>AREAS OF EXPERTISE</span>
            <div><Code2 size={17} /> Software Development</div>
            <div><BrainCircuit size={17} /> Artificial Intelligence</div>
            <div><Database size={17} /> Backend Systems</div>
            <div><Globe2 size={17} /> Digital Platforms</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container two-column">
            <div>
              <div className="section-label">01 / ABOUT</div>
              <h2>
                Building technology that solves
                <span className="gradient-text"> real problems.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p className="large-copy">
                I am a technology-focused developer interested in engineering
                useful software, intelligent systems and digital products.
              </p>

              <p>
                My interests and work span frontend and backend development,
                application architecture, APIs, databases, e-commerce,
                marketplace systems, artificial intelligence and business
                automation. I approach development by understanding the
                problem, structuring the solution and building practical
                technology around it.
              </p>

              <a className="text-link" href="#contact">
                Have a project in mind? <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">02 / EXPERTISE</div>
                <h2>
                  What I <span className="gradient-text">build.</span>
                </h2>
              </div>

              <p>
                A broad technical focus covering software engineering,
                intelligent applications, business systems and digital
                product development.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-top">
                      <div className="service-icon">
                        <Icon size={23} />
                      </div>
                      <span>{service.number}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="tag-list">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label">03 / SELECTED WORK</div>
                <h2>
                  Projects & <span className="gradient-text">development.</span>
                </h2>
              </div>

              <p>
                Selected client work and software development projects.
                Each project is presented according to its actual status.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual ${project.className}`}>
                    <div className="project-visual-inner">
                      <span className="project-visual-number">
                        {project.number}
                      </span>

                      {project.number === "01" && (
                        <div className="visual-window">
                          <div className="visual-window-bar">
                            <i /><i /><i />
                          </div>
                          <div className="visual-window-content">
                            <span>THREE17</span>
                            <strong>EVENTS<br />THAT FEEL<br />LIKE YOU.</strong>
                            <small>EVENT STYLING · ATX</small>
                          </div>
                        </div>
                      )}

                      {project.number === "02" && (
                        <div className="visual-ai">
                          <div className="visual-ai-orbit">
                            <ShoppingCart size={55} />
                          </div>
                          <span>MARKETPLACE PLATFORM</span>
                          <strong>BUILT TO CONNECT</strong>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tag-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capabilities-section">
          <div className="container capabilities-layout">
            <div>
              <div className="section-label">04 / TECHNICAL CAPABILITIES</div>
              <h2>
                Strong foundations.
                <br />
                <span className="gradient-text">Practical execution.</span>
              </h2>

              <p className="capabilities-intro">
                The technologies, engineering disciplines and problem-solving
                areas that inform my approach to building digital solutions.
              </p>
            </div>

            <div className="capability-list">
              {capabilities.map((capability) => (
                <div className="capability-item" key={capability}>
                  <span><Check size={15} /></span>
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-panel">
            <div className="contact-glow" />

            <div className="section-label">05 / START A CONVERSATION</div>

            <h2>
              Have an idea worth
              <span className="gradient-text"> building?</span>
            </h2>

            <p>
              Whether you need software development, an AI-powered solution,
              a marketplace system or a digital product, let's discuss
              what you want to build.
            </p>

            <a className="button button-primary" href="#about">
              <MessageSquare size={17} /> Get in touch <ArrowUpRight size={17} />
            </a>

            <div className="contact-bottom">
              <span>Salih Al-uthaymeen Qasim</span>
              <span>SOFTWARE · AI · DIGITAL PRODUCTS</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">S<span>.</span></span>
            <span className="brand-name">SALIH<span>MEEN</span></span>
          </a>

          <span>
            © {new Date().getFullYear()} Salih Al-uthaymeen Qasim. Built with purpose.
          </span>

          <a href="#home" className="back-top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

