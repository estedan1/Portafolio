import { useState } from 'react'
import { profile, about, experience, projects, tech, techNote, soft, hobbies, contact } from './data/portfolio.js'

const menu = [
  ['sobre-mi', 'Sobre mí'],
  ['experiencia', 'Experiencia'],
  ['proyectos', 'Proyectos'],
  ['habilidades', 'Habilidades'],
  ['hobbies', 'Hobbies'],
  ['contacto', 'Contacto'],
]

const Tags = ({ items, c = '' }) => (
  <ul className="tags">
    {items.map((t) => <li key={t} className={`tag ${c}`}>{t}</li>)}
  </ul>
)

const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={`${id}-t`}>
    <div className="wrap">
      <h2 id={`${id}-t`}>{title}</h2>
      {children}
    </div>
  </section>
)

function ThemeButton() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const next = theme === 'dark' ? 'light' : 'dark'
  const toggle = () => {
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* sin almacenamiento */ }
    setTheme(next)
  }
  return (
    <button className="theme" onClick={toggle} aria-label={`Cambiar a modo ${next === 'dark' ? 'oscuro' : 'claro'}`}>
      {theme === 'dark' ? 'Claro' : 'Oscuro'}
    </button>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <header className="nav">
        <div className="wrap">
          <a className="logo" href="#inicio">Esteban</a>
          <nav aria-label="Principal">
            <ul>
              {menu.map(([id, label]) => <li key={id}><a className="l" href={`#${id}`}>{label}</a></li>)}
            </ul>
          </nav>
          <ThemeButton />
        </div>
      </header>

      <main id="main">
        <section id="inicio" className="hero" aria-labelledby="inicio-t">
          <div className="wrap">
            <p className="status">{profile.status}</p>
            <h1 id="inicio-t">{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="lead">{profile.lead}</p>
            <div className="cta">
              <a className="btn primary" href={contact.write} target="_blank" rel="noopener noreferrer">Escríbeme</a>
              <a className="btn ghost" href="#proyectos">Ver proyectos</a>
            </div>
          </div>
        </section>

        <Section id="sobre-mi" title="Sobre mí">
          <div className="prose">{about.map((p) => <p key={p}>{p}</p>)}</div>
        </Section>

        <Section id="experiencia" title="Educación y experiencia">
          <div className="grid c2">
            {experience.map((e) => (
              <article className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p className="when">{e.when}</p>
                <p className="win">{e.win}</p>
                <p>{e.text}</p>
                <Tags items={e.tags} c="g" />
              </article>
            ))}
          </div>
        </Section>

        <Section id="proyectos" title="Proyectos">
          <div className="grid c2">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="win">{p.win}</p>
                <p>{p.text}</p>
                <Tags items={p.tags} c="b" />
                <a className="btn ghost" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio de ${p.title} (se abre en otra pestaña)`}>Ver sitio</a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="habilidades" title="Habilidades técnicas">
          <div className="grid c2">
            {tech.map((t) => (
              <article className="card" key={t.group}>
                <h3>{t.group}</h3>
                <Tags items={t.items} c={t.color} />
              </article>
            ))}
          </div>
          <p className="note">{techNote}</p>
        </Section>

        <Section id="blandas" title="Habilidades blandas">
          <div className="grid c3">
            {soft.map((s) => (
              <article className="card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>
            ))}
          </div>
        </Section>

        <Section id="hobbies" title="Hobbies que me hacen mejor profesional">
          <div className="grid c3">
            {hobbies.map((h) => (
              <article className="card" key={h.title}><h3>{h.title}</h3><p>{h.text}</p></article>
            ))}
          </div>
        </Section>

        <Section id="contacto" title="Contacto">
          <p className="lead">Cuéntame qué necesitas y vemos cómo hacerlo realidad. Estoy en {contact.city}.</p>
          <ul className="contact">
            {contact.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span>{l.label}</span><strong>{l.value}</strong>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} {profile.name}. Hecho en {contact.city}.</div>
      </footer>
    </>
  )
}
