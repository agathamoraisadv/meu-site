import React from 'react';

const AreasAtuacaoPage: React.FC = () => {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1 className="hero-title">Áreas de Atuação</h1>
          <p className="hero-subtitle">Conheça nossos serviços jurídicos especializados</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <h2 className="section-title">Direito Previdenciário</h2>
              <p>
                Nossa equipe possui ampla experiência em questões previdenciárias, oferecendo assessoria completa 
                para garantir seus direitos junto ao INSS.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Aposentadorias (por idade, tempo de contribuição, especial)</li>
                <li>Pensão por morte</li>
                <li>Auxílio-doença e aposentadoria por invalidez</li>
                <li>Benefício assistencial (LOAS/BPC)</li>
                <li>Revisão de benefícios</li>
                <li>Recursos administrativos</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Direito de Família</h2>
              <p>
                Oferecemos orientação jurídica especializada em questões familiares, com sensibilidade 
                e compreensão para momentos delicados.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Divórcio consensual e litigioso</li>
                <li>Pensão alimentícia</li>
                <li>Guarda de filhos</li>
                <li>Regulamentação de visitas</li>
                <li>Inventário e partilha de bens</li>
                <li>Reconhecimento e dissolução de união estável</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Direito Cível</h2>
              <p>
                Atuamos na defesa de seus interesses em questões civis, buscando soluções eficientes 
                e satisfatórias para cada caso.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Ações de indenização</li>
                <li>Contratos</li>
                <li>Responsabilidade civil</li>
                <li>Cobranças e execuções</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Direito Trabalhista</h2>
              <p>
                Defendemos seus direitos trabalhistas com dedicação e conhecimento técnico, 
                buscando o reconhecimento de todos os seus direitos.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Rescisões contratuais</li>
                <li>Horas extras e adicional noturno</li>
                <li>Assédio moral e sexual</li>
                <li>Acidentes de trabalho</li>
                <li>Verbas rescisórias</li>
                <li>Danos morais trabalhistas</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Direito Criminal</h2>
              <p>
                Oferecemos defesa técnica qualificada em processos criminais, garantindo o respeito 
                aos direitos e garantias fundamentais.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Defesa em processos criminais</li>
                <li>Habeas corpus</li>
                <li>Liberdade provisória</li>
                <li>Acompanhamento em delegacias</li>
                <li>Recursos criminais</li>
                <li>Execução penal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Precisa de Assistência Jurídica?</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Entre em contato conosco para uma consulta e saiba como podemos ajudar no seu caso.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/contato" className="btn">Entre em Contato</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreasAtuacaoPage;
