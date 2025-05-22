import React from 'react';

const SobrePage: React.FC = () => {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1 className="hero-title">Sobre Nós</h1>
          <p className="hero-subtitle">Conheça o escritório Ágatha Morais Advocacia</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 className="section-title">Nossa História</h2>
              <p>
                O escritório Ágatha Morais Advocacia foi fundado com o compromisso de oferecer serviços jurídicos de excelência 
                para a população de Horizonte e região. Desde o início, nossa missão tem sido proporcionar atendimento personalizado 
                e soluções jurídicas eficientes para cada cliente.
              </p>
              <p>
                Com uma abordagem moderna e comprometida, buscamos sempre os melhores resultados, aliando conhecimento técnico 
                e experiência prática para defender os interesses de nossos clientes com ética e dedicação.
              </p>
            </div>

            <div>
              <h2 className="section-title">Missão</h2>
              <p>
                Oferecer serviços jurídicos de alta qualidade, com atendimento personalizado e soluções eficientes, 
                garantindo a defesa dos direitos e interesses de nossos clientes com ética, responsabilidade e excelência.
              </p>
            </div>

            <div>
              <h2 className="section-title">Visão</h2>
              <p>
                Ser reconhecido como um escritório de advocacia de referência em Horizonte e região, destacando-se pela 
                qualidade dos serviços prestados, pelo compromisso com os clientes e pela contribuição para o desenvolvimento 
                da justiça e da cidadania.
              </p>
            </div>

            <div>
              <h2 className="section-title">Valores</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div className="service-card">
                  <h3>Ética</h3>
                  <p>Atuamos com integridade e transparência em todas as nossas ações.</p>
                </div>
                <div className="service-card">
                  <h3>Excelência</h3>
                  <p>Buscamos a qualidade em todos os serviços prestados.</p>
                </div>
                <div className="service-card">
                  <h3>Compromisso</h3>
                  <p>Dedicação total aos interesses e necessidades de nossos clientes.</p>
                </div>
                <div className="service-card">
                  <h3>Responsabilidade</h3>
                  <p>Assumimos com seriedade cada caso e cada cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Conheça Nosso Escritório</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Estamos localizados em Horizonte, Ceará, prontos para atender suas necessidades jurídicas.
          </p>
          <div className="google-business">
            <h3>Veja Nosso Perfil no Google</h3>
            <p>Confira nossos depoimentos, fotos e mais informações no Google Meu Negócio.</p>
            <a 
              href="https://g.co/kgs/id6gXr1" 
              className="google-business-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver no Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;
