import { useState } from 'react'
import './Clients.css'

const clients = [
  { name: 'STF', logo: '/clients/stf.png' },
  { name: 'Banco Mundial', logo: '/clients/banco-mundial.png' },
  { name: 'Poder Judiciário TO', logo: '/clients/poder-judiciario-to.png' },
  { name: 'FAPDF', logo: '/clients/fapdf.png' },
  { name: 'TRT 16ª Região', logo: '/clients/trt16.png' },
  { name: 'ADAPEC', logo: '/clients/adapec.png' },
]

const testimonials = [
  {
    quote: 'A capacitação em IA para contratações públicas transformou completamente nossos processos. Reduzimos o tempo de elaboração de editais em 60%.',
    name: 'João Silva',
    role: 'Diretor de Compras, TCU',
  },
  {
    quote: 'As metodologias gamificadas tornaram o aprendizado muito mais efetivo. Nossa equipe está aplicando IA nas contratações com segurança jurídica.',
    name: 'Maria Oliveira',
    role: 'Coordenadora de Licitações, ANATEL',
  },
  {
    quote: 'O licenciamento de IA por meio da Conceptu nos permitiu implementar soluções inovadoras com total conformidade à LGPD.',
    name: 'Carlos Santos',
    role: 'Gestor de TI, Ministério da Economia',
  },
]

const VISIBLE = 3

export default function Clients() {
  const [startIndex, setStartIndex] = useState(0)

  const canPrev = startIndex > 0
  const canNext = startIndex + VISIBLE < clients.length

  const prev = () => { if (canPrev) setStartIndex(i => i - 1) }
  const next = () => { if (canNext) setStartIndex(i => i + 1) }

  const visibleClients = clients.slice(startIndex, startIndex + VISIBLE)

  return (
    <section className="clients section section-gray" id="clientes">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <p className="clients__eyebrow">Clientes</p>
          <h2 className="section-title" style={{ margin: '0 auto 12px' }}>
            Quem está evoluindo com a Conceptu
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Órgãos públicos e organizações de referência que confiam na Conceptu
            para transformar suas equipes.
          </p>
        </div>

        <div className="clients__carousel">
          <button
            className="clients__arrow"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="clients__logos">
            {visibleClients.map((c, i) => (
              <div key={startIndex + i} className="clients__logo-card">
                <img src={c.logo} alt={c.name} className="clients__logo-img" />
              </div>
            ))}
          </div>

          <button
            className="clients__arrow"
            onClick={next}
            disabled={!canNext}
            aria-label="Próximo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="clients__testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <svg className="testimonial-card__quote-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 11.424 8.757 9.143 10 8zM24 8c-3.314 0-6 2.686-6 6v10h10V14h-6.667C21.333 11.424 22.757 9.143 24 8z" fill="currentColor" opacity="0.15"/>
              </svg>
              <p className="testimonial-card__text">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
