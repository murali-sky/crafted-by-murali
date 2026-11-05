import { ShoppingCart, Orbit, Music2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Shopping Assistant',
    tagline: 'Smarter Shopping, Powered by AI.',
    description: 'An intelligent shopping experience designed to help users discover products and make better choices.',
    icon: ShoppingCart,
    className: 'shopping',
    number: '01',
  },
  {
    title: 'COSMOS',
    tagline: 'Explore the Universe Beyond Imagination.',
    description: 'An interactive space exploration experience inspired by the beauty and mystery of our universe.',
    icon: Orbit,
    className: 'cosmos',
    number: '02',
  },
  {
    title: 'Virtual Musical Instrument',
    tagline: 'Where Code Meets Creativity.',
    description: 'A playful virtual instrument that lets users create music through an interactive experience.',
    icon: Music2,
    className: 'music',
    number: '03',
  },
];

export default function Projects() {
  return (
    <section className="content-page projects-page page-enter">
      <div className="section-heading">
        <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
        <h1>My <span className="gradient-text">Projects.</span></h1>
        <p className="section-subtitle">Ideas turned into experiences through code and creativity.</p>
      </div>
      <div className="project-grid">
        {projects.map(({ title, tagline, description, icon: Icon, className, number }) => (
          <article className={`project-card ${className}`} key={title}>
            <div className="project-card-top"><span>{number} / 03</span><Icon className="project-icon" /></div>
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <p>{description}</p>
            <a href="https://github.com/murali-sky" target="_blank" rel="noreferrer" className="project-link">
              Explore on GitHub <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
      <p className="project-note">Project buttons currently open your GitHub profile. Replace them with individual repository or live-demo URLs when available.</p>
    </section>
  );
}
