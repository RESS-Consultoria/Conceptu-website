import './Teachers.css'

const teachers = [
  {
    name: 'Antonio Netto',
    photo: '/teachers/antonio-netto.png',
    role: 'Licitações Públicas & IA',
    bio: 'Professor e palestrante em Licitações Públicas, CPSI, IA, Segurança da Informação, Tecnologia, Transformação Digital e Pagamentos Digitais.',
  },
  {
    name: 'Silvio Lima',
    photo: '/teachers/silvio-lima.png',
    role: 'Tecnologia & Gestão de Riscos',
    bio: 'Coordenador-Geral de Contratações de TIC da Central de Compras do Ministério da Economia. Especialista em Tecnologia e Gestão de Riscos.',
  },
  {
    name: 'José Guidi',
    photo: '/teachers/jose-guidi.png',
    role: 'Contratos de Obras Públicas',
    bio: 'Engenheiro Consultor, Mestre em Administração Pública. Especialista em Contratos de Obras Públicas.',
  },
  {
    name: 'Camilo Mussi',
    photo: '/teachers/camilo-mussi.png',
    role: 'Transformação Digital & Liderança',
    bio: 'Líder em Transformação Digital no Setor Público. CIO, palestrante e professor. Mestre em IA, subsecretário de TI com expertise em Segurança da Informação.',
  },
  {
    name: 'Erick Muzart',
    photo: '/teachers/erick-muzart.png',
    role: 'Machine Learning & Dados',
    bio: 'Auditor Federal de Controle Externo do TCU. Coordenador do Programa de Capacitação em Análise de Dados do ISC/TCU.',
  },
  {
    name: 'Rafael Cavalcante',
    photo: '/teachers/rafael-cavalcante.png',
    role: 'Controle Externo & Fiscalização',
    bio: 'Auditor Federal de Controle Externo e dirigente do TCU. Ex-secretário de Controle Externo do Sistema Financeiro Nacional do TCU.',
  },
  {
    name: 'Dr. Paulo Miranda',
    photo: '/teachers/paulo-miranda.png',
    role: 'Saúde & IA',
    bio: 'Médico, Diretor executivo do HUB H2O e professor do MBA Health 4.0 (BBI of Chicago). Formação em gestão de negócios e gestão de TI.',
  },
]

export default function Teachers() {
  return (
    <section className="teachers section" id="professores">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <p className="teachers__eyebrow">Corpo docente</p>
          <h2 className="section-title" style={{ margin: '0 auto 12px' }}>Professores Parceiros</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Mais de 30 professores credenciados, todos com atuação prática e reconhecida
            nos seus campos de especialidade.
          </p>
        </div>

        <div className="teachers__grid">
          {teachers.map((t, i) => (
            <div key={i} className="teacher-card">
              <div className="teacher-card__avatar">
                <img src={t.photo} alt={t.name} className="teacher-card__photo" />
              </div>
              <div className="teacher-card__body">
                <h3 className="teacher-card__name">{t.name}</h3>
                <span className="teacher-card__role">{t.role}</span>
                <p className="teacher-card__bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="teachers__footer">
          <p>Corpo docente com <strong>mais de 30 professores credenciados</strong> em diversas áreas estratégicas.</p>
        </div>
      </div>
    </section>
  )
}
