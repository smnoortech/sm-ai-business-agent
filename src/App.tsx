import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Cpu,
  Globe2,
  Menu,
  MessageSquare,
  Monitor,
  Workflow,
  X,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    number: "01",
    title: "AI Solutions",
    description:
      "Practical AI-powered tools that help businesses work smarter, improve customer experiences and unlock new possibilities.",
    tags: ["AI assistants", "AI integration", "Intelligent tools"],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Business Automation",
    description:
      "Streamline repetitive processes, connect business systems and build workflows that reduce manual work.",
    tags: ["Workflow design", "Process automation", "Integrations"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Web Development",
    description:
      "Modern, responsive websites and digital experiences designed around business goals and user needs.",
    tags: ["Business websites", "Web applications", "UI development"],
  },
];

const projects = [
  {
    number: "01",
    category: "CLIENT PROJECT · EVENT INDUSTRY",
    title: "Three17 Events ATX",
    description:
      "A digital presence for a luxury event styling company, focused on presenting its services and creating a polished brand experience.",
    stack: ["Web design", "Responsive development", "Client delivery"],
    status: "Featured client project",
    className: "project-visual-one",
  },
  {
    number: "02",
    category: "AI · BUSINESS AUTOMATION",
    title: "SM AI Business Agent",
    description:
      "A portfolio and product direction exploring practical AI agents, business workflows and automation-led solutions.",
    stack: ["Artificial intelligence", "Automation", "Digital products"],
    status: "In development",
    className: "project-visual-two",
  },
  {
    number: "03",
    category: "WEB · DIGITAL EXPERIENCE",
    title: "Business Web Experiences",
    description:
      "A collection of web development capabilities focused on clear communication, responsive interfaces and useful digital experiences.",
    stack: ["React", "TypeScript", "Modern web"],
    status: "Ongoing practice",
    className: "project-visual-three",
  },
];

const capabilities = [
  "AI-powered business solutions",
  "Business process automation",
  "Responsive web development",
  "React and TypeScript",
  "API and system integrations",
  "Digital product development",
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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
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
                AI · AUTOMATION · WEB DEVELOPMENT
              </div>
              <h1>
                Building smarter
                <br />
                <span className="gradient-text">digital solutions.</span>
              </h1>
              <p className="hero-description">
                I'm <strong>Salih Al-uthaymeen Qasim</strong>. I work at the
                intersection of artificial intelligence, business automation
                and web development to turn ideas into useful digital experiences.
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
                Focused on practical technology and real-world impact.
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract digital technology illustration">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core-card">
                <div className="core-top">
                  <span className="core-indicator" />
                  <span>INTELLIGENCE / 001</span>
                </div>
                <div className="core-icon"><Cpu size={54} strokeWidth={1.2} /></div>
                <div className="core-title">Think. Build. Automate.</div>
                <div className="core-subtitle">Technology with purpose.</div>
                <div className="core-bars">
                  <span /><span /><span /><span /><span /><span /><span />
                </div>
              </div>
              <div className="floating-chip chip-top"><Bot size={16} /> AI systems</div>
              <div className="floating-chip chip-bottom"><Workflow size={16} /> Smart workflows</div>
              <div className="art-cross cross-one">+</div>
              <div className="art-cross cross-two">+</div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
            <span className="hero-bottom-line" />
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>AREAS OF FOCUS</span>
            <div><Bot size={17} /> Artificial Intelligence</div>
            <div><Workflow size={17} /> Automation</div>
            <div><Monitor size={17} /> Web Experiences</div>
            <div><Globe2 size={17} /> Digital Innovation</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container two-column">
            <div>
              <div className="section-label">01 / ABOUT</div>
              <h2>Technology should solve <span className="gradient-text">real problems.</span></h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I am a technology-focused builder interested in making
                artificial intelligence and digital tools useful in everyday
                business operations.
              </p>
              <p>
                My work brings together AI experimentation, automation thinking
                and modern web development. I enjoy taking an idea, breaking
                it into practical steps and building a digital experience around it.
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
                <div className="section-label">02 / WHAT I DO</div>
                <h2>Ideas into <span className="gradient-text">solutions.</span></h2>
              </div>
              <p>
                Combining thoughtful problem-solving with modern technology
                to create useful business and digital experiences.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-top">
                      <div className="service-icon"><Icon size={23} /></div>
                      <span>{service.number}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="tag-list">
                      {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
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
                <h2>Work in <span className="gradient-text">progress.</span></h2>
              </div>
              <p>
                A look at client work, current development and the areas
                where I am putting ideas into practice.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual ${project.className}`}>
                    <div className="project-visual-inner">
                      <span className="project-visual-number">{project.number}</span>
                      {project.number === "01" && (
                        <div className="visual-window">
                          <div className="visual-window-bar"><i /><i /><i /></div>
                          <div className="visual-window-content">
                            <span>THREE17</span>
                            <strong>EVENTS<br />THAT FEEL<br />LIKE YOU.</strong>
                            <small>EVENT STYLING · ATX</small>
                          </div>
                        </div>
                      )}
                      {project.number === "02" && (
                        <div className="visual-ai">
                          <div className="visual-ai-orbit"><Bot size={55} /></div>
                          <span>AI AGENT</span>
                          <strong>WORK SMARTER</strong>
                        </div>
                      )}
                      {project.number === "03" && (
                        <div className="visual-web">
                          <div className="visual-web-top" />
                          <div className="visual-web-lines"><i /><i /><i /></div>
                          <div className="visual-web-blocks"><i /><i /><i /></div>
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
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
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
              <div className="section-label">04 / CAPABILITIES</div>
              <h2>Tools are powerful.<br /><span className="gradient-text">Execution matters.</span></h2>
              <p className="capabilities-intro">
                The technologies and disciplines I use to explore, design
                and build digital solutions.
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
            <h2>Have an idea worth <span className="gradient-text">building?</span></h2>
            <p>
              Whether you are exploring AI, improving a business workflow
              or planning a website, let's discuss what you want to create.
            </p>
            <a className="button button-primary" href="mailto:">
              <MessageSquare size={17} /> Get in touch <ArrowUpRight size={17} />
            </a>
            <div className="contact-bottom">
              <span>Salih Al-uthaymeen Qasim</span>
              <span>AI · AUTOMATION · WEB</span>
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
          <span>© {new Date().getFullYear()} Salih Al-uthaymeen Qasim. Built with purpose.</span>
          <a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;


