import { Orbit, Code2, UserRound, Layers3, MessageCircle, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const items = [
  { label: 'Home', icon: null },
  { label: 'Projects', icon: Code2 },
  { label: 'About', icon: UserRound },
  { label: 'Skills', icon: Layers3 },
];

export default function Navbar({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (page) => { onNavigate(page); setMenuOpen(false); };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('Home')} aria-label="Go to home">
        <Orbit className="brand-icon" />
        <span>MURALI<span className="orange-dot">.</span></span>
      </button>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {items.map(({ label, icon: Icon }) => (
          <button key={label} className={`nav-link ${activePage === label ? 'active' : ''}`} onClick={() => navigate(label)}>
            {label === 'Home' ? <span className="home-glyph">◆</span> : <Icon size={18} strokeWidth={2.5} />}
            <span>{label}</span>
          </button>
        ))}
        <a className="chat-link" href="https://www.linkedin.com/in/muralikrishna-kanisetty-349944403/" target="_blank" rel="noreferrer"><MessageCircle size={19} /> Let’s Chat</a>
      </nav>
      <button className="theme-button" type="button" aria-label="Decorative moon theme icon"><Moon size={20} fill="currentColor" /></button>
    </header>
  );
}
