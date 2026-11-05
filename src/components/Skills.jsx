import { Code2, Palette, Braces, FileCode2, Atom, Wind } from 'lucide-react';

const skills = [
  { name: 'HTML5', category: 'Frontend', icon: FileCode2 },
  { name: 'CSS3', category: 'Frontend', icon: Palette },
  { name: 'JavaScript', category: 'Programming', icon: Braces },
  { name: 'TypeScript', category: 'Programming', icon: Code2 },
  { name: 'React.js', category: 'Frontend', icon: Atom },
  { name: 'Tailwind CSS', category: 'Styling', icon: Wind },
  { name: 'Figma', category: 'Design', icon: Palette },
];

export default function Skills() {
  return (
    <section className="content-page skills-page page-enter">
      <div className="section-heading">
        <p className="eyebrow">TOOLS I WORK WITH</p>
        <h1>My <span className="gradient-text">Skills.</span></h1>
        <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>
      </div>
      <div className="skills-grid">
        {skills.map(({ name, category, icon: Icon }, index) => (
          <article className="skill-card" key={name} style={{ '--delay': `${index * 70}ms` }}>
            <div className="skill-icon"><Icon /></div>
            <div><h2>{name}</h2><p>{category}</p></div>
            <span className="skill-index">0{index + 1}</span>
          </article>
        ))}
      </div>
      <div className="learning-note"><span className="pulse-dot" /> Currently learning <strong>Backend Development & AI</strong></div>
    </section>
  );
}
