import React from 'react';
import styles from './Servicos.module.css'; // Usaremos o novo arquivo de CSS

// Seção 1 - Capa
import fotoServicos from '../../assets/images/kcarrasco/foto-servicos.png'; 


// Seção 2 - Serviços
import fotoMentoria from '../../assets/images/kcarrasco/foto-mentoria.jpg'; 
import fotoAula from '../../assets/images/kcarrasco/foto-aula.JPG'; 
import fotoPalestra from '../../assets/images/kcarrasco/foto-palestra.jpg'; 
import fotoCode from '../../assets/images/kcarrasco/foto-code.webp'; 

const Servicos = () => {
  return (
    <main className={styles.container}>
      {/* Seção 1 - Capa */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Serviços</h2>
          {/* O texto é o mesmo da outra página, conforme o design */}
          <p>
            Eu não escolhi esse caminho por acaso. Ele nasceu da necessidade de transformar, de mostrar que é possível ocupar espaços que historicamente nos foram negados.
          </p>
          <p>
            Carrego em mim a força dos meus ancestrais e o compromisso com quem vem depois. Meu trabalho é sobre abrir portas, conectar saberes e mostrar que a tecnologia, quando aliada à ancestralidade, pode ser uma ferramenta potente de resistência e reconstrução.
          </p>
          <p>
            Faço o que faço pelos jovens que, como eu, já foram desacreditados. Pelos parentes indígenas que ainda lutam por visibilidade. Pelas comunidades que seguem resistindo nas periferias e nos territórios. Quero que cada projeto, cada código, cada fala minha seja um sopro de futuro – onde ser indígena, periférico e sonhador não seja exceção, mas potência.
          </p>
          <p className={styles.fraseImpacto}>
            Quero mudar o mundo ao meu redor. E vou!
          </p>
          {/* Poderíamos adicionar botões aqui no futuro, como "Solicitar Orçamento" */}
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoServicos} alt="Notebook com código de programação" />
        </div>
      </section>
      
      {/* Seção 2 - Serviços*/}
    <section className={styles.listaServicosSection}>
        <div className={styles.sectionHeader}>
          <h2>Serviços</h2>
          <h3>Mudando o mundo</h3>
        </div>

        <div className={styles.servicosList}>
          {/* Item de Serviço 1 */}
          <div className={styles.servicoCard}>
            <div className={styles.servicoImagem}>
              <img src={fotoMentoria} alt="Aula individual ou em grupo" />
            </div>
            <div className={styles.servicoConteudo}>
              <h4>Mentorias</h4>
              <p>Através das mentorias, ofereço acompanhamento personalizado em empreendedorismo, inovação, gestão e cultura indígena, ajudando pessoas e negócios a estruturarem ideias, estratégias e projetos com propósito e impacto social.</p>
              <button className={styles.ctaButton}><a href="/#contato">Entrar em contato</a></button>
            </div>
          </div>
          
          {/* Item de Serviço 2 */}
          <div className={styles.servicoCard}>
            <div className={styles.servicoImagem}>
              <img src={fotoAula} alt="Aula individual ou em grupo" />
            </div>
            <div className={styles.servicoConteudo}>
              <h4>Aulas individuais e em grupo</h4>
              <p>Ofereço formações dinâmicas sobre empreendedorismo, inovação, tecnologia, gestão e cultura indígena, unindo teoria e prática para desenvolver habilidades e despertar uma visão crítica e transformadora.</p>
              <button className={styles.ctaButton}><a href="/#contato">Entrar em contato</a></button>
            </div>
          </div>
          
          {/* Item de Serviço 3 */}
          <div className={styles.servicoCard}>
            <div className={styles.servicoImagem}>
              <img src={fotoPalestra} alt="Aula individual ou em grupo" />
            </div>
            <div className={styles.servicoConteudo}>
              <h4>Palestras</h4>
              <p>Minhas palestras unem tecnologia, ancestralidade e empreendedorismo, trazendo reflexões reais sobre inovação, identidade e inclusão, inspirando jovens, educadores e profissionais a repensarem o futuro com propósito.</p>
              <button className={styles.ctaButton}><a href="/#contato">Entrar em contato</a></button>
            </div>
          </div>
          
          {/* Item de Serviço 4 */}
          <div className={styles.servicoCard}>
            <div className={styles.servicoImagem}>
              <img src={fotoCode} alt="Aula individual ou em grupo" />
            </div>
            <div className={styles.servicoConteudo}>
              <h4>Desenvolvimento</h4>
              <p>Realizo o desenvolvimento de sites, sistemas e interfaces modernas com foco em acessibilidade, design funcional e experiência do usuário, conectando estética, tecnologia e impacto social.</p>
              <button className={styles.ctaButton}><a href="/#contato">Entrar em contato</a></button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Servicos;