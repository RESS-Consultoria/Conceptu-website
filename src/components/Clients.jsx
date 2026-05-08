import './Clients.css'

const clients = [
  { name: 'Poder Judiciário', sub: 'Estado do Tocantins' },
  { name: 'STF', sub: 'Supremo Tribunal Federal' },
  { name: 'Banco Mundial', sub: 'BIRF · AIF' },
  { name: 'FAPDF', sub: 'Fundação de Apoio à Pesquisa' },
  { name: 'Justiça do Trabalho', sub: 'TRT da 16ª Região — MA' },
  { name: 'ADAPEC', sub: 'Tocantins' },
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

export default function Clients() {
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

        <div className="clients__logos">
          {clients.map((c, i) => (
            <div key={i} className="clients__logo-card">
              <span className="clients__logo-name">{c.name}</span>
              <span className="clients__logo-sub">{c.sub}</span>
            </div>
          ))}
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
