import { useState } from 'react';
import { Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

export default function Home({ onNavigate }) {
  const [portraitActive, setPortraitActive] = useState(false);

  return (
    <section className="home-page page-enter">
      <div className="hero-portrait-column">
        <div className="portrait-orbit orbit-a" aria-hidden="true" />
        <div className="portrait-orbit orbit-b" aria-hidden="true" />
        <button
          type="button"
          className={`home-portrait-wrap portrait-interactive ${portraitActive ? 'portrait-active' : ''}`}
          onClick={() => setPortraitActive((active) => !active)}
          aria-label="Toggle portrait glow effect"
          aria-pressed={portraitActive}
        >
          <img src="/murali.png" alt="Murali" className="home-portrait" />
          <span className="portrait-hint">Click to activate glow</span>
        </button>
      </div>

      <div className="hero-copy">
        <div className="role-pill"><span className="pulse-dot" /> Fullstack Developer</div>
        <h1>Hi, I’m <span className="hero-name">MURALI</span></h1>
        <p className="hero-description">I build modern web applications and<br className="desktop-break" /> dream of becoming a future-ready <strong>tech innovator.</strong> <span>🚀</span></p>
        <div className="hero-motto"><i /> <Sparkles size={15} /> <span>Code</span><b>•</b><span>Create</span><b>•</b><span>Innovate</span> <i /></div>
        <div className="hero-actions">
          <button className="primary-cta" onClick={() => onNavigate('Projects')}>Explore My Projects <ArrowRight size={19} /></button>
          <a className="outline-cta github-cta" href="https://github.com/murali-sky" target="_blank" rel="noreferrer"><Github /> View My GitHub</a>
          <a className="outline-cta linkedin-cta" href="https://www.linkedin.com/in/muralikrishna-kanisetty-349944403/" target="_blank" rel="noreferrer"><Linkedin /> Connect on LinkedIn</a>
        </div>
        <p className="hero-footnote">Curious mind. Creative builder. Lifelong learner.</p>
      </div>
    </section>
  );
}
