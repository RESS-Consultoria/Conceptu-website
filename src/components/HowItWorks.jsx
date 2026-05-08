import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico da Necessidade Real',
    description:
      'Antes de qualquer proposta, analisamos o contexto do órgão ou empresa, os objetivos institucionais, o perfil dos participantes e os limites normativos aplicáveis.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Curadoria de Conteúdo e Formato',
    description:
      'Definimos o conteúdo mais adequado, combinando temas do nosso portfólio com ajustes, aprofundamentos ou criações totalmente novas, no formato ideal para seus objetivos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Capacitação com Aplicação Prática',
    description:
      'Entregamos a capacitação com curadoria especializada, rigor técnico e aplicabilidade real — presencial ou remota, com tecnologia licenciada e conformidade legal garantida.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

const formats = [
  { label: 'Palestra', desc: 'Visão estratégica do tema' },
  { label: 'Curso 1 dia', desc: 'Abordagem geral e conceitual' },
  { label: 'Curso 2 dias', desc: 'Teoria e prática aplicada' },
  { label: 'Curso 3 dias', desc: 'Teoria, prática e metodologias ativas' },
  { label: 'Curso 4 dias', desc: 'Com ferramentas personalizadas de IA' },
  { label: 'Programa Contínuo', desc: 'Mentoria com horas distribuídas' },
]

export default function HowItWorks() {
  return (
    <section className="how section" id="metodologia">
      <div className="container">
        <div className="how__top">
          <div className="section-header">
            <p className="how__eyebrow">Como funciona</p>
            <h2 className="section-title">Capacitação que parte da<br />realidade e entrega resultado</h2>
            <p className="section-subtitle">
              A metodologia da Conceptu foi desenvolvida para transformar conhecimento técnico
              em resultado concreto no dia a dia das organizações.
            </p>
          </div>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div key={i} className="how__step">
              <div className="how__step-icon">{step.icon}</div>
              <div className="how__step-body">
                <span className="how__step-number">{step.number}</span>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.description}</p>
              </div>
              {i < steps.length - 1 && <div className="how__connector" />}
            </div>
          ))}
        </div>

        <div className="how__formats">
          <h3 className="how__formats-title">Formatos disponíveis</h3>
          <div className="how__formats-grid">
            {formats.map((f, i) => (
              <div key={i} className="how__format-card">
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
