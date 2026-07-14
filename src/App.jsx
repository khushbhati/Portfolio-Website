import { useState, useEffect } from 'react';
import profileImg from './assets/profile.jpg';
import workspaceImg from './assets/workspace.jpg';
import fullBodyImg from './assets/full-body.png';

// Inline SVG Icon components for clean modular use without extra dependencies
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
);

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-theme');
  };

  // Section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      // Simulate form submission
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#hero" className="logo">
            KHUSHPAT.K
          </a>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} style={{
            display: isMobileMenuOpen ? 'flex' : undefined,
            flexDirection: isMobileMenuOpen ? 'column' : undefined,
            position: isMobileMenuOpen ? 'absolute' : undefined,
            top: isMobileMenuOpen ? '80px' : undefined,
            left: isMobileMenuOpen ? '0' : undefined,
            width: isMobileMenuOpen ? '100%' : undefined,
            background: isMobileMenuOpen ? 'var(--bg-color)' : undefined,
            padding: isMobileMenuOpen ? '2rem' : undefined,
            borderBottom: isMobileMenuOpen ? '1px solid var(--card-border)' : undefined,
            gap: isMobileMenuOpen ? '1.5rem' : undefined,
            zIndex: 100
          }}>
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-controls">
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {isLightMode ? <MoonIcon /> : <SunIcon />}
            </button>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">Welcome to my Space</span>
            <h1 className="hero-title">
              Hi, I'm <br />
              <span style={{ color: 'var(--primary)', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Khushpat Kumar</span>
            </h1>
            <h2 className="hero-subtitle" style={{ color: 'var(--text-primary)', textTransform: 'none', letterSpacing: 'normal', fontSize: '1.5rem', marginTop: '-0.5rem' }}>
              Full Stack Developer
            </h2>
            <p className="hero-description">
              Motivated Computer Science graduate seeking a Full Stack Developer role. Experienced in building scalable web applications with MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, and Python.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Talk
              </a>
            </div>
            <div className="social-links" style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/khushbhati" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/khushpat-kumar-4734b3258" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="mailto:khushpatbhati@gmail.com" className="social-btn" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={profileImg} alt="Khushpat Kumar Professional Photo" className="hero-image" />
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-img-wrapper">
            <img src={fullBodyImg} alt="Khushpat Kumar working" className="about-img" />
          </div>
          <div className="about-info">
            <p className="about-text">
              I am a Computer Science engineering graduate with a passion for building full-stack web architectures. I enjoy solving real-world challenges through code and designing beautiful, efficient web interfaces. Currently working as a Software Developer Intern, where I focus on developing modular components, optimizing front-end performance, and adding multilingual capabilities to software systems.
            </p>
            <div className="about-cards">
              <div className="glass-card about-card">
                <h3 className="about-card-title">Education</h3>
                <p className="about-card-desc" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                  B.Tech in Computer Science
                </p>
                <p className="about-card-desc">Chartered Institute of Technology</p>
                <p className="about-card-desc" style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>
                  CGPA: 9.20 (2022 - 2026)
                </p>
              </div>
              <div className="glass-card about-card">
                <h3 className="about-card-title">Schooling</h3>
                <p className="about-card-desc" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                  Class XII & X (RBSE)
                </p>
                <p className="about-card-desc">Govt. Sr. Sec. School, Sumerpur</p>
                <p className="about-card-desc" style={{ color: 'var(--secondary)', marginTop: '0.25rem' }}>
                  Class XII: 65.6% | Class X: 72.5%
                </p>
              </div>
            </div>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span className="meta-value">Mumbai, Maharashtra</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Email:</span>
                <span className="meta-value">khushpatbhati@gmail.com</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Phone:</span>
                <span className="meta-value">+91 8769264170</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Availability:</span>
                <span className="meta-value" style={{ color: 'var(--success)', fontWeight: '600' }}>Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section container">
        <h2 className="section-title">My Toolbox</h2>
        <div className="skills-grid">
          {/* Languages */}
          <div className="glass-card skills-category">
            <h3 className="skills-category-title">Languages</h3>
            <div className="skill-list">
              <span className="skill-badge">JavaScript (ES6+)</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">C++</span>
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3</span>
            </div>
          </div>
          
          {/* Frontend */}
          <div className="glass-card skills-category">
            <h3 className="skills-category-title">Frontend</h3>
            <div className="skill-list">
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">Responsive Design</span>
            </div>
          </div>

          {/* Backend & Databases */}
          <div className="glass-card skills-category">
            <h3 className="skills-category-title">Backend & Data</h3>
            <div className="skill-list">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express.js</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">SQL</span>
            </div>
          </div>

          {/* Tools & Soft Skills */}
          <div className="glass-card skills-category">
            <h3 className="skills-category-title">Tools & Practice</h3>
            <div className="skill-list">
              <span className="skill-badge">Git & GitHub</span>
              <span className="skill-badge">VS Code</span>
              <span className="skill-badge">REST APIs</span>
              <span className="skill-badge">Teamwork</span>
              <span className="skill-badge">Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          
          {/* Experience 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Software Developer Intern</h3>
                  <span className="timeline-company">AMUS SOFTWARE SL (AMUS SOFT)</span>
                </div>
                <span className="timeline-date">May 2026 – Present</span>
              </div>
              <div className="timeline-body">
                <ul>
                  <li>Developing and maintaining modern, user-friendly web applications using React.js, Next.js, JavaScript, and Tailwind CSS.</li>
                  <li>Implementing multilingual localization systems and optimizing performance across high-traffic frontend assets.</li>
                  <li>Debugging UI behaviors and collaborating directly with the international team through structured Git workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">MERN Stack Intern</h3>
                  <span className="timeline-company">Grras Solutions Pvt. Ltd.</span>
                </div>
                <span className="timeline-date">Jun 2025 – Aug 2025</span>
              </div>
              <div className="timeline-body">
                <ul>
                  <li>Designed and built full-stack web features using MongoDB, Express.js, React.js, and Node.js (MERN stack).</li>
                  <li>Developed dynamic user profiles, responsive admin interfaces, and scalable RESTful API endpoints.</li>
                  <li>Integrated securely managed CRUD capabilities for real-time database management systems.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="glass-card project-card">
            <div className="project-content">
              <h3 className="project-title">Inventory Management System</h3>
              <p className="project-desc">
                A robust, full-stack inventory manager dashboard enabling businesses to control stock, handle supplier information, and monitor live items. Built CRUD infrastructure, low-stock trigger warnings, and complete secure session token authentication.
              </p>
              <div className="project-tags">
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Express.js</span>
                <span className="project-tag">React.js</span>
                <span className="project-tag">Node.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/khushbhati" target="_blank" rel="noopener noreferrer" className="project-link">
                  Code Repo <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card project-card">
            <div className="project-content">
              <h3 className="project-title">Smart Travel Planner</h3>
              <p className="project-desc">
                An AI-driven interactive travel itinerary builder. Generates optimized vacation routes, sightseeing stops, and meal suggestions based on budget constraints. Features real-time travel storage data sync and user account profiles.
              </p>
              <div className="project-tags">
                <span className="project-tag">React.js</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">Tailwind CSS</span>
                <span className="project-tag">AI integration</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/khushbhati" target="_blank" rel="noopener noreferrer" className="project-link">
                  Code Repo <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-card project-card">
            <div className="project-content">
              <h3 className="project-title">Virtual-Assistant</h3>
              <p className="project-desc">
                An interactive voice-command system built directly on top of web APIs. Translates speech commands into client browser actions (e.g. search pages, open tabs, weather display) and implements text-to-speech feedback.
              </p>
              <div className="project-tags">
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">Web Speech API</span>
                <span className="project-tag">HTML5 & CSS3</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/khushbhati" target="_blank" rel="noopener noreferrer" className="project-link">
                  Code Repo <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section container">
        <h2 className="section-title">Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><AwardIcon /></div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>MERN Full Stack Intern</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Grras Solutions Pvt. Ltd.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><AwardIcon /></div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Complete Web Development Bootcamp</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Udemy</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><AwardIcon /></div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>JavaScript for Beginners</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Simplilearn</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><AwardIcon /></div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Employability Skills</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Rubicon</p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Let's build something epic!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am open to discussions about software development roles, internship opportunities, code challenges, or technical questions. Reach out directly!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper"><MailIcon /></div>
                <div>
                  <div className="contact-label">Email Me</div>
                  <a href="mailto:khushpatbhati@gmail.com" className="contact-value">khushpatbhati@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper"><PhoneIcon /></div>
                <div>
                  <div className="contact-label">Call Me</div>
                  <a href="tel:+918769264170" className="contact-value">+91 8769264170</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper"><MapPinIcon /></div>
                <div>
                  <div className="contact-label">My Location</div>
                  <span className="contact-value">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Thank You, Khushpat!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Your message has been sent successfully. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    placeholder="Hi Khushpat, I would like to discuss a job opportunity..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">KHUSHPAT KUMAR</div>
          <p className="footer-text">
            © {new Date().getFullYear()} Khushpat Kumar. All rights reserved.
          </p>
          <p className="footer-text" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Built with React.js
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
