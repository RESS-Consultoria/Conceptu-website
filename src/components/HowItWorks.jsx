import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico da Necessidade Real',
    description:
      'Antes de qualquer proposta, analisamos o contexto do órgão ou empresa, os objetivos institucionais, o perfil dos participantes e os limites normativos aplicáveis.',
  },
  {
    number: '02',
    title: 'Curadoria de Conteúdo e Formato',
    description:
      'Definimos o conteúdo mais adequado, combinando temas do nosso portfólio com ajustes, aprofundamentos ou criações totalmente novas, no formato ideal para seus objetivos.',
  },
  {
    number: '03',
    title: 'Capacitação com Aplicação Prática',
    description:
      'Entregamos a capacitação com curadoria especializada, rigor técnico e aplicabilidade real — presencial ou remota, com tecnologia licenciada e conformidade legal garantida.',
  },
]

const formats = [
  {
    label: 'Palestra',
    desc: 'Visão estratégica do tema',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Cursos de 1 a 4 dias',
    desc: 'Desde abordagem geral até a prática com ferramentas personalizadas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    label: 'Programa Contínuo',
    desc: 'Mentoria com horas distribuídas ao longo do tempo',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="how section" id="metodologia">
      <div className="container">
        <div className="how__layout">
          <div className="how__left">
            <div className="section-header">
              <p className="how__eyebrow">Como funciona</p>
              <h2 className="section-title">Capacitação que parte da<br />realidade e entrega resultado</h2>
              <p className="section-subtitle">
                A metodologia da Conceptu foi desenvolvida para transformar conhecimento técnico
                em resultado concreto no dia a dia das organizações.
              </p>
            </div>

            <div className="how__steps">
              {steps.map((step, i) => (
                <div key={i} className="how__step">
                  <span className="how__step-number">{step.number}</span>
                  <div className="how__step-body">
                    <h3 className="how__step-title">{step.title}</h3>
                    <p className="how__step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="how__right">
            <div className="how__image-wrap">
              <img
                src="/how-it-works.png"
                alt="Capacitação Conceptu"
                className="how__image"
              />
              <div className="how__image-stat">
                <span className="how__image-stat-num">15+</span>
                <span className="how__image-stat-label">anos transformando equipes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="how__formats">
          <h3 className="how__formats-title">Formatos disponíveis</h3>
          <div className="how__formats-grid">
            {formats.map((f, i) => (
              <div key={i} className="how__format-card">
                <div className="how__format-icon">{f.icon}</div>
                <strong>{f.label}</strong>
                <span>{f.desc}</span>
              </div>
            ))}
          </div>
          <p className="how__modality">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Todas as capacitações podem ser realizadas de forma <strong>presencial ou remota</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
