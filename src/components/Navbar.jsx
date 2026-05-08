import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Professores', href: '#professores' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <img src="/Logo-Conceptu-horizontal-branco.png" alt="Conceptu" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5561984233683" target="_blank" rel="noreferrer" className="btn btn-primary navbar__cta">
            Fale conosco
          </a>
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? 'open' : ''}></span>
          <span className={open ? 'open' : ''}></span>
          <span className={open ? 'open' : ''}></span>
        </button>
      </div>
    </header>
  )
}
