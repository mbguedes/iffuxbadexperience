import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Background Elements */}
      <div className="bg-glow top-right"></div>
      <div className="bg-glow bottom-left"></div>

      {/* Hero Section */}
      <header className="hero-section animate-fade-in">
        <div className="container">
          <div className="ux-badge">UX</div>
          <h1 className="hero-title">
            Além do Bug: <br />
            <span className="text-gradient">Como a Qualidade de Software Impacta a Experiência do Usuário | UX</span>
          </h1>
          <div className="author-tag glass-panel">
            <p>Marcio Bodini Guedes | Mobile QA na BRQ | FIAP | Instituto JogaJunto</p>
          </div>
        </div>
      </header>

      {/* Section 1: A Quebra da Promessa */}
      <section className="promise-section">
        <div className="section-header">
          <h2 className="section-title">A Quebra da <span className="text-gradient">Promessa</span></h2>
          <p className="section-subtitle">
            Uma falha técnica pode destruir em segundos toda a confiança que o design UX levou meses para construir.
          </p>
        </div>
        
        <div className="promise-grid">
          <div className="promise-visual glass-panel">
            <div className="error-icon-wrapper">
              <div className="error-icon">!</div>
              <p>Erro inesperado</p>
            </div>
          </div>
          <div className="promise-cards">
            {[
              { id: '01', title: 'Perda de Credibilidade Instantânea', desc: 'Um único bug crítico pode fazer o usuário questionar toda a qualidade do produto e da empresa por trás dele.' },
              { id: '02', title: 'Abandono do Aplicativo', desc: '88% dos usuários não retornam a um app após uma experiência ruim. Bugs são a principal causa de desinstalações.' },
              { id: '03', title: 'Danos à Reputação da Marca', desc: 'Avaliações negativas se espalham rapidamente. Um bug viral pode causar danos irreparáveis à imagem da empresa.' }
            ].map((item) => (
              <div key={item.id} className="promise-card glass-panel hover-lift">
                <span className="card-number">{item.id}</span>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Performance é UX */}
      <section className="performance-section">
        <div className="section-header center">
          <h2 className="section-title">Performance é <span className="text-gradient">UX</span> e UX é Qualidade.</h2>
          <p className="section-subtitle max-w">
            A fluidez e o tempo de resposta são pilares fundamentais da experiência do usuário. Em dispositivos móveis, a performance pode ser o diferencial.
          </p>
        </div>

        <div className="performance-grid">
          {[
            { title: 'Fluidez e Tempo de Resposta', desc: 'Cada milissegundo conta. Usuários esperam respostas instantâneas e transições suaves. Atrasos geram frustração.' },
            { title: 'Testes em Dispositivos Móveis', desc: 'Mobile QA valida performance em condições reais: diferentes redes, dispositivos variados e cenários de uso intenso.' },
            { title: 'Diferencial Competitivo', desc: 'Apps performáticos retêm usuários. A performance não é apenas técnico, é estratégia de negócio e fidelização.', highlight: true }
          ].map((item, idx) => (
            <div key={idx} className={`performance-card glass-panel hover-lift ${item.highlight ? 'highlight' : ''}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Shift-Left */}
      <section className="shift-left-section">
        <div className="shift-left-container glass-panel">
          <div className="shift-left-visual">
            <h2 className="section-title">Shift-Left e <br /><span className="text-gradient">Colaboração</span></h2>
          </div>
          <div className="shift-left-content">
            <p className="side-text glass-panel">
              A integração entre QA e UX desde o início do processo é fundamental para entregar produtos de qualidade.
            </p>
            <div className="shift-left-items">
              {[
                { title: 'O que é Shift-Left', desc: 'Antecipar as atividades de QA para as fases iniciais do desenvolvimento, identificando problemas antes que se tornem caros.' },
                { title: 'Colaboração Precoce', desc: 'QA e UX trabalham juntos desde o início, garantindo que a experiência do usuário seja prioridade.' },
                { title: 'Menos Retrabalho', desc: 'Evita retrabalho significativo, reduz custos de correção e melhora a qualidade final entregue ao usuário.' }
              ].map((item, idx) => (
                <div key={idx} className="shift-item hover-lift">
                  <div className="shift-icon-box">
                    {/* SVG Icons would go here */}
                    <div className="dot"></div>
                  </div>
                  <div className="shift-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Acessibilidade */}
      <section className="a11y-section">
        <div className="section-header">
          <h2 className="section-title">Acessibilidade como <span className="text-gradient">Qualidade</span></h2>
          <p className="section-subtitle">QA como Ferramenta de Inclusão Digital.</p>
        </div>

        <div className="performance-grid">
           {[
            { title: 'Inclusão Digital', desc: 'QA valida compatibilidade com leitores de tela, contraste de cores e navegação por teclado, garantindo acesso universal.' },
            { title: 'Testes de Acessibilidade', desc: 'Verificação de padrões WCAG, testes com tecnologias assistivas e validação de experiência para usuários com deficiências.' },
            { title: 'Impacto Social', desc: 'Produtos acessíveis ampliam o alcance de mercado e demonstram responsabilidade social da empresa.', highlight: true }
          ].map((item, idx) => (
            <div key={idx} className={`performance-card glass-panel hover-lift ${item.highlight ? 'highlight' : ''}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Marcio Bodini Guedes | Instituto Joga Junto</p>
      </footer>
    </div>
  );
}

export default App;
