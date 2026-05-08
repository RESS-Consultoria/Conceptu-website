import './Themes.css'

const themes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'IA & Contratações de TIC',
    desc: 'Inteligência artificial aplicada às contratações de tecnologia da informação no setor público.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'ESG, Inovação e IA',
    desc: 'Sustentabilidade, governança e estratégias de inovação integradas à inteligência artificial.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Licitações, Contratos e Convênios',
    desc: 'Nova lei de licitações, contratos administrativos, convênios e instrumentos correlatos.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Finanças e Contabilidade',
    desc: 'Gestão financeira, contabilidade pública, orçamento e planejamento financeiro.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Logística, Materiais e Patrimônio',
    desc: 'Gestão de materiais, patrimônio público, almoxarifado e logística institucional.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Gestão, Liderança e RH',
    desc: 'Desenvolvimento de liderança, gestão de pessoas, cultura organizacional e performance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Assessoria, Comunicação, Dados e Eventos',
    desc: 'Comunicação institucional, gestão de dados, análise e organização de eventos corporativos.',
  },
]

export default function Themes() {
  return (
    <section className="themes section section-dark" id="tematicas">
      <div className="container">
        <div className="section-header">
          <p className="themes__eyebrow">Áreas de atuação</p>
          <h2 className="section-title section-title-white">Vamos além dos cursos apresentados</h2>
          <p className="section-subtitle section-subtitle-white">
            A Conceptu desenvolve capacitações personalizadas em diversas áreas estratégicas
            da Administração Pública e do setor privado.
          </p>
        </div>

        <div className="themes__grid">
          {themes.map((t, i) => (
            <div key={i} className="theme-card">
              <div className="theme-card__icon">{t.icon}</div>
              <div>
                <h3 className="theme-card__title">{t.title}</h3>
                <p className="theme-card__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
