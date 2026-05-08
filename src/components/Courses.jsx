import { useState } from 'react'
import './Courses.css'

const courses = [
  {
    id: 1,
    tag: 'IA & Setor Público',
    title: 'IA Aplicada à Rotina das Câmaras Municipais',
    teacher: 'Silvio Lima',
    teacherRole: 'Coordenador-Geral de Contratações de TIC — Ministério da Economia',
    objective:
      'Capacitar vereadores e servidores a utilizar IA Generativa como multiplicador de produtividade nas atividades legislativas e administrativas, com segurança jurídica e conformidade com a LGPD.',
    topics: [
      'Uso prático de ChatGPT, Gemini, Copilot e Perplexity',
      'Elaboração e revisão de Projetos de Lei, Indicações e Moções',
      'Análise de constitucionalidade e apoio às Comissões (CCJ)',
      'Fiscalização do Executivo com análise de dados orçamentários',
      'Planejamento de licitações (ETP e TR) conforme Lei 14.133/2021',
      'Ética, LGPD e validação humana no uso de IA',
    ],
    color: '#0B2545',
  },
  {
    id: 2,
    tag: 'Tecnologia & Dados',
    title: 'Machine Learning em Projetos',
    teacher: 'Erick Muzart',
    teacherRole: 'Auditor Federal de Controle Externo — TCU',
    objective:
      'Capacitar profissionais a desenvolver, avaliar e implementar projetos reais de Machine Learning, garantindo autonomia técnica para criação de novas aplicações em IA.',
    topics: [
      'Fundamentos de ML: conceitos, ambiente e ferramentas',
      'Modelos de classificação e regressão (KNN, Regressão Logística)',
      'Pré-processamento de dados e validação cruzada',
      'Árvores de decisão e Ensemble/Random Forest',
      'NLP: bag-of-words, tf-idf e classificação de textos',
      'Desenvolvimento de projeto completo com feedback técnico',
    ],
    color: '#1a4f8a',
  },
  {
    id: 3,
    tag: 'Saúde & IA',
    title: 'Inteligência Artificial Aplicada à Saúde',
    teacher: 'Dr. Paulo Miranda Filho',
    teacherRole: 'Diretor executivo do HUB H2O — Professor MBA Health 4.0 (BBI of Chicago)',
    objective:
      'Capacitar profissionais de saúde e gestores públicos a aplicar IA de forma ética, segura e eficiente, promovendo inovação no serviço público de saúde e cuidado humanizado.',
    topics: [
      'Panorama da IA na Saúde Pública e Saúde Digital',
      'Alfabetização digital e adaptação do profissional à Saúde 4.0',
      'Ética, segurança da informação e uso responsável de dados sensíveis',
      'Engenharia de prompts para contextos reais de saúde',
      'Uso prático de ferramentas de IA para gestão e assistência',
      'Exercícios "mão na massa" com mais de 10 ferramentas aplicáveis',
    ],
    color: '#005f6b',
  },
  {
    id: 4,
    tag: 'Licitações & IA',
    title: 'CPSI — Contrato Público de Solução Inovadora',
    teacher: 'Antonio Netto',
    teacherRole: 'Professor e palestrante em Licitações Públicas, CPSI, IA e Transformação Digital',
    objective:
      'Capacitar agentes públicos a planejar, estruturar e executar contratações públicas inovadoras, com foco no CPSI, utilizando IA como apoio ao planejamento, com conformidade com a Lei 14.133/2021.',
    topics: [
      'Planejamento das contratações à luz da Lei 14.133/2021',
      'Uso prático de IA no planejamento da contratação',
      'Elaboração de DFD, ETP, Matriz de Riscos e Termo de Referência',
      'Engenharia de prompts aplicada às compras públicas',
      'Contratação de soluções inovadoras: CPSI e ETEC',
      'Oficinas práticas com simulações reais de planejamento',
    ],
    color: '#2d4a1e',
  },
  {
    id: 5,
    tag: 'Letramento Digital',
    title: 'Letramento Digital para o Setor Público',
    teacher: 'Antonio Netto',
    teacherRole: 'Professor e palestrante em Licitações Públicas, CPSI, IA e Transformação Digital',
    objective:
      'Promover o letramento digital em IA no setor público, capacitando servidores e gestores a utilizar IA de forma prática, segura e responsável, fortalecendo a cultura de inovação institucional.',
    topics: [
      'Fundamentos da IA e dos modelos generativos',
      'Panorama das ferramentas de IA aplicáveis ao setor público',
      'Engenharia de prompts para contextos administrativos',
      'Automação de tarefas rotineiras e otimização de processos',
      'Análise crítica dos riscos da IA: vieses e alucinações',
      'Ética, segurança da informação e proteção de dados',
    ],
    color: '#3d2b6e',
  },
  {
    id: 6,
    tag: 'Liderança',
    title: 'Liderar é Servir — Liderança, Decisão e Resultados em Ambientes Complexos',
    teacher: 'Camilo Mussi',
    teacherRole: 'Líder em Transformação Digital no Setor Público. CIO, palestrante e professor.',
    objective:
      'Desenvolver líderes executivos capazes de tomar decisões estratégicas com clareza, fortalecer a confiança dos times e transformar estratégia em execução consistente.',
    topics: [
      'Liderança como serviço aplicada ao contexto executivo',
      'Tomada de decisão em ambientes complexos e de pressão',
      'Execução estratégica: da definição do plano à entrega de resultados',
      'Construção de confiança, engajamento e accountability',
      'Comunicação executiva, escuta ativa e gestão de conflitos',
      'Cultura organizacional orientada a resultados e valores',
    ],
    color: '#5a2020',
  },
]

export default function Courses() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="courses section section-gray" id="cursos">
      <div className="container">
        <div className="section-header">
          <p className="courses__eyebrow">Nossos cursos</p>
          <h2 className="section-title">Cursos existentes como ponto de partida.<br />Soluções sob medida como resultado.</h2>
          <p className="section-subtitle">
            As temáticas a seguir representam experiências consolidadas que podem ser contratadas
            diretamente, combinadas ou personalizadas para atender às necessidades específicas de
            cada órgão ou empresa.
          </p>
        </div>

        <div className="courses__grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-card__header" style={{ background: course.color }}>
                <span className="course-card__tag">{course.tag}</span>
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__teacher">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {course.teacher}
                </p>
              </div>

              <div className="course-card__body">
                <p className="course-card__objective">{course.objective}</p>

                <button
                  className="course-card__toggle"
                  onClick={() => setExpanded(expanded === course.id ? null : course.id)}
                >
                  {expanded === course.id ? 'Ocultar conteúdo' : 'Ver conteúdo programático'}
                  <svg
                    width="16" height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: expanded === course.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {expanded === course.id && (
                  <ul className="course-card__topics">
                    {course.topics.map((t, i) => (
                      <li key={i}>
                        <span className="course-card__dot" />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="https://wa.me/5561984233683"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary course-card__cta"
                >
                  Tenho interesse
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="courses__custom">
          <p className="courses__custom-text">Seu desafio não está listado?</p>
          <h3 className="courses__custom-title">Ele pode, e deve, ser construído conosco.</h3>
          <a
            href="https://wa.me/5561984233683"
            target="_blank"
            rel="noreferrer"
            className="btn btn-white"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  )
}
