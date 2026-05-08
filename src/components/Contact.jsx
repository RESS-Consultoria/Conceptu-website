import { useState } from 'react'
import './Contact.css'

const areas = [
  'IA & Contratações de TIC',
  'ESG, Inovação e IA',
  'Licitações, Contratos e Convênios',
  'Finanças e Contabilidade',
  'Logística, Materiais e Patrimônio',
  'Gestão, Liderança e RH',
  'Assessoria, Comunicação, Dados e Eventos',
  'Outro',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', institution: '', area: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.name}, da instituição ${form.institution}.\n\nÁrea de interesse: ${form.area}\n\nMensagem: ${form.message}`
    )
    window.open(`https://wa.me/5561984233683?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__eyebrow">Contato</p>
            <h2 className="section-title section-title-white">
              Se o seu desafio é único, a capacitação também deve ser.
            </h2>
            <p className="section-subtitle section-subtitle-white" style={{ marginBottom: '40px' }}>
              Fale conosco e vamos desenhar a solução certa para o seu contexto.
            </p>

            <div className="contact__channels">
              <a href="https://wa.me/5561984233683" target="_blank" rel="noreferrer" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">WhatsApp</span>
                  <span className="contact__channel-value">(61) 98423-3683</span>
                </div>
              </a>

              <a href="mailto:negocios@conceptuconsultores.com.br" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">E-mail</span>
                  <span className="contact__channel-value">negocios@conceptuconsultores.com.br</span>
                </div>
              </a>

              <div className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <span className="contact__channel-label">Site</span>
                  <span className="contact__channel-value">institutoconceptu.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3>Mensagem enviada!</h3>
                <p>Você será redirecionado para o WhatsApp. Nossa equipe responderá em breve.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Fale com um especialista</h3>

                <div className="contact__field">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="institution">Instituição / Empresa</label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    placeholder="Nome da sua organização"
                    value={form.institution}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="area">Área de interesse</label>
                  <select
                    id="area"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione uma área</option>
                    {areas.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Descreva o seu desafio ou necessidade..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  Enviar via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
