import { useState } from 'react';
import { Rocket } from 'lucide-react';

export default function About() {
  const [portraitActive, setPortraitActive] = useState(false);

  return (
    <section className="content-page about-page page-enter">
      <button
        type="button"
        className={`about-image-frame portrait-interactive ${portraitActive ? 'portrait-active' : ''}`}
        onClick={() => setPortraitActive((active) => !active)}
        aria-label="Toggle portrait glow effect"
        aria-pressed={portraitActive}
      >
        <img src="/murali.png" alt="Murali portrait" />
        <span className="image-caption">A little about me · Click to glow</span>
      </button>
      <div className="about-copy">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>About <span className="gradient-text">Me.</span></h1>
        <p>I'm a passionate BTech student and aspiring Frontend Developer who loves creating interactive and user-friendly web experiences.</p>
        <p>Skilled in HTML, CSS, JavaScript and React.js.</p>
        <p>Currently exploring backend development and AI technologies.</p>
        <p>I enjoy learning new skills, solving problems and turning creative ideas into reality.</p>
        <p className="about-last">Always curious, always building, always growing. <span>🚀</span></p>
        <div className="future-goal"><Rocket /><span>Future goal: <strong>Agentic AI Engineer</strong></span></div>
      </div>
    </section>
  );
}
