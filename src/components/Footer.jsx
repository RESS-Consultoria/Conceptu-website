import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/Logo-Conceptu-horizontal-branco.png" alt="Conceptu" className="footer__logo-img" />
            </div>
            <p>Transformando capacitação em resultado: tecnologia, curadoria e personalização a serviço da gestão pública e corporativa.</p>
          </div>

          <div className="footer__nav">
            <div className="footer__col">
              <h4>Navegação</h4>
              <a href="#sobre">Sobre</a>
              <a href="#metodologia">Metodologia</a>
              <a href="#cursos">Cursos</a>
              <a href="#professores">Professores</a>
              <a href="#clientes">Clientes</a>
              <a href="#contato">Contato</a>
            </div>

            <div className="footer__col">
              <h4>Áreas</h4>
              <a href="#tematicas">IA & Contratações de TIC</a>
              <a href="#tematicas">Licitações e Contratos</a>
              <a href="#tematicas">Gestão e Liderança</a>
              <a href="#tematicas">Saúde & IA</a>
              <a href="#tematicas">ESG e Inovação</a>
            </div>

            <div className="footer__col">
              <h4>Contato</h4>
              <a href="https://wa.me/5561984233683" target="_blank" rel="noreferrer">(61) 98423-3683</a>
              <a href="mailto:negocios@conceptuconsultores.com.br">negocios@conceptuconsultores.com.br</a>
              <a href="https://institutoconceptu.com.br" target="_blank" rel="noreferrer">institutoconceptu.com.br</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Conceptu. Todos os direitos reservados.</p>
          <p>Mais de 15 anos transformando equipes em resultados.</p>
        </div>
      </div>
    </footer>
  )
}
