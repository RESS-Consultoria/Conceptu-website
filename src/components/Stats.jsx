import './Stats.css'

const stats = [
  { value: '+15', label: 'Anos de experiência' },
  { value: '+30', label: 'Professores parceiros' },
  { value: '+60', label: 'Cursos personalizados' },
  { value: '+10mil', label: 'Alunos formados' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
