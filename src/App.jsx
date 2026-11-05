import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';

const pages = { Home, Projects, About, Skills };

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const ActivePage = pages[activePage];

  return (
    <main className="app-shell">
      <div className="space-stars" aria-hidden="true" />
      <div className="ambient-glow glow-left" aria-hidden="true" />
      <div className="ambient-glow glow-right" aria-hidden="true" />
      <div className="distant-planet" aria-hidden="true" />
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <ActivePage onNavigate={setActivePage} />
      {activePage === 'Home' ? (
        <footer className="home-quote"><span />“ Let’s build something <strong>extraordinary</strong> together! ”<span /></footer>
      ) : (
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Murali</span>
          <span>Code <b>•</b> Create <b>•</b> Innovate</span>
          <span>Made with curiosity <b className="heart">♥</b></span>
        </footer>
      )}
    </main>
  );
}
