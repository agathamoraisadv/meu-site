import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Ágatha Morais Advocacia</h1>
          <p className="hero-subtitle">Excelência e dedicação em serviços jurídicos</p>
          <a href="/contato" className="btn">Entre em Contato</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="contact-info-container">
            <div className="contact-item">
              <a href="https://wa.me/+5585999324821?text=Olá,%20gostaria%20de%20uma%20consultoria%20jurídica." target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366" className="contact-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="contact-text">Clique e envie uma mensagem no WhatsApp</span>
              </a>
            </div>
            
            <div className="contact-item">
              <a href="https://www.instagram.com/agathamorais.adv/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1306C" className="contact-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="contact-text">@agathamorais.adv</span>
              </a>
            </div>
            
            <div className="contact-item">
              <a href="mailto:agathamorais.adv@gmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="contact-text">agathamorais.adv@gmail.com</span>
              </a>
            </div>
            
            <div className="contact-item">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Ciro+Bilhar,+316,+Centro,+Horizonte,+Ceará,+Brasil" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4285F4" className="contact-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="contact-text">Como chegar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Business Section */}
      <section className="section google-business-section">
        <div className="container">
          <h2 className="section-title">Conheça Nosso Perfil no Google</h2>
          <p className="text-center">Veja nossos depoimentos, fotos e mais informações no Google Meu Negócio.</p>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a 
              href="https://g.co/kgs/id6gXr1" 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver no Google
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">Conheça Nossa História</h2>
          <p>
            O escritório Ágatha Morais Advocacia oferece serviços jurídicos de excelência em Horizonte, Ceará. 
            Nossa missão é proporcionar atendimento personalizado e soluções jurídicas eficientes para nossos clientes.
          </p>
          <p>
            Com uma abordagem moderna e comprometida, buscamos sempre os melhores resultados, 
            aliando conhecimento técnico e experiência prática para defender os interesses de nossos clientes.
          </p>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a href="/sobre" className="btn btn-outline">Saiba Mais</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Áreas de Atuação</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Direito Previdenciário</h3>
              <p>Assessoria completa em questões relacionadas à aposentadoria, pensões, benefícios por incapacidade e outros direitos previdenciários.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Direito de Família</h3>
              <p>Orientação jurídica em divórcios, pensão alimentícia, guarda de filhos, inventários e outros assuntos familiares.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Direito Cível</h3>
              <p>Representação em ações de indenização, contratos, direito do consumidor e outras questões civis.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Direito Trabalhista</h3>
              <p>Defesa de direitos trabalhistas, ações de rescisão contratual, horas extras, assédio moral e outros temas laborais.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Direito Criminal</h3>
              <p>Atuação na defesa em processos criminais, habeas corpus, liberdade provisória e acompanhamento em delegacias.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a href="/areas-atuacao" className="btn btn-outline">Ver Todas as Áreas</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
