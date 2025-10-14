import React from 'react';
import styles from './ProjetosExperiencia.module.css';

// Seção 1 - Capa
import fotoExperiencia from '../../assets/images/kcarrasco/foto-experiencia.jpg';

// Seção 2 - Projetos
import projeto1 from '../../assets/images/projetos/nook.jpg';
import projeto2 from '../../assets/images/projetos/comunicacaoambiental.png';
import projeto3 from '../../assets/images/projetos/yara.png';
import projeto4 from '../../assets/images/projetos/obi.png';
import projeto5 from '../../assets/images/projetos/coletivo.jpg';
import projeto6 from '../../assets/images/projetos/periferiatech.JPG';
import projeto7 from '../../assets/images/projetos/nookschool.png';
import projeto8 from '../../assets/images/projetos/ecovision.png';
import projeto9 from '../../assets/images/projetos/beacon.png';

// Seção 3 - Experiência
import fotoExperienciaLogos from '../../assets/images/kcarrasco/kcarrasco-experiencia.png'; 


import logoMediotecc from '../../assets/images/logos/mediotec.png';
import logoSenac from '../../assets/images/logos/senac.png';
import logoNook from '../../assets/images/logos/nook.png';
import logoSecJustica from '../../assets/images/logos/sec-justica.png';
import logoCiee from '../../assets/images/logos/ciee.png';
import logoJovensClima from '../../assets/images/logos/jovens-clima.png';
import logoIdeias from '../../assets/images/logos/ideias.png';
import logoUnifg from '../../assets/images/logos/unifg.png';
import logoConectaRecife from '../../assets/images/logos/conecta-recife.png';
import logoCampusParty from '../../assets/images/logos/campus-party.png';
import logoCapitalEmpreendedor from '../../assets/images/logos/capital-empreendedor.png';
import logoCongressoInternacional from '../../assets/images/logos/congresso-internacional.png';
import logoRecnPlay from '../../assets/images/logos/recnplay.png';
import logoCampusMobile from '../../assets/images/logos/campus-mobile.png';
import logoArteFavela from '../../assets/images/logos/arte-favela.png';

const ProjetosExperiencia = () => {
  return (
    <main className={styles.container}>
      {/* Seção 1 - Capa */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Projetos e Experiências</h2>
          <p className={styles.intro}>
            KCarrasco possui experiência em diversos eventos, em serviços prestados e projetos criados
          </p>
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
          <div className={styles.buttonGroup}>
            <button className={styles.outlineButton}><a href="https://www.canva.com/design/DAGP8PJVE8s/c_mCy7rVKnebRTANPM3Oaw/edit?utm_content=DAGP8PJVE8s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Currículo</a></button>
            <button className={styles.outlineButton}><a href="http://lattes.cnpq.br/0429997546128392">Lattes</a></button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoExperiencia} alt="Erick Carrasco em evento" />
        </div>
      </section>

      {/* Seção 2 - Projetos */}
    <section className={styles.projetosSection}>
        <div className={styles.sectionHeader}>
          <h2>Projetos</h2>
          <h3>Conheça mais meus projetos</h3>
        </div>

        <div className={styles.projetosGrid}>
          {/* Repetimos o padrão de 3 cards, 3 vezes, para um total de 9 */}
          
          {/* Linha 1 */}
          <div className={styles.projetoCard}>
            <img src={projeto1} alt="Projeto Comunicação Ambiental" />
            <div className={styles.cardContent}>
              <h4>NOOK Corporation</h4>
              <p>Startup de soluções tecnológicas educacionais inclusivas, conectando inovação, impacto social e sustentabilidade.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto2} alt="Projeto NOOK Corporation" />
            <div className={styles.cardContent}>
              <h4>Comunicação Ambiental</h4>
              <p>Projeto voltado à conscientização ecológica e práticas sustentáveis por meio de campanhas e tecnologias sociais..</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto3} alt="Projeto Beacon Navigator" />
            <div className={styles.cardContent}>
              <h4>Yara</h4>
              <p>Plataforma que integra docentes e discentes, promovendo inclusão e suporte a alunos com neurodivergencia e individualidades</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>

          {/* Linha 2 */}
          <div className={styles.projetoCard}>
            <img src={projeto4} alt="Projeto Comunicação Ambiental" />
            <div className={styles.cardContent}>
              <h4>Obi</h4>
              <p>Ferramenta pedagógica que auxilia o acompanhamento e o desenvolvimento de alunos neurodivergentes em instituições de ensino.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto5} alt="Projeto NOOK Corporation" />
            <div className={styles.cardContent}>
              <h4>Coletivo Arte na Favela</h4>
              <p>Iniciativa cultural e educacional que une arte, tecnologia e resistência nos territórios periféricos do Ibura.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto6} alt="Projeto Beacon Navigator" />
            <div className={styles.cardContent}>
              <h4>Periferia Tech</h4>
              <p>Programa gratuito de formação em tecnologia para jovens de comunidades periféricas, estimulando inclusão digital e profissionalização..</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>

          {/* Linha 3 */}
          <div className={styles.projetoCard}>
            <img src={projeto7} alt="Projeto Comunicação Ambiental" />
            <div className={styles.cardContent}>
              <h4>NOOK School</h4>
              <p>Plataforma educacional da NOOK com cursos de tecnologia do nível introdutório ao avançado, promovendo aprendizado acessível.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto8} alt="Projeto NOOK Corporation" />
            <div className={styles.cardContent}>
              <h4>EcoVision</h4>
              <p>Projeto de monitoramento e educação ambiental que utiliza tecnologia para incentivar práticas sustentáveis e preservação local.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projetoCard}>
            <img src={projeto9} alt="Projeto Beacon Navigator" />
            <div className={styles.cardContent}>
              <h4>Beacon Navigator</h4>
              <p>Sistema de navegação inteligente e acessível, desenvolvido para facilitar o deslocamento e inclusão em espaços urbanos e institucionais.</p>
              <button className={styles.outlineButton}><link rel="stylesheet" href="" />Ver Projeto</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Experiência */}

    <section className={styles.experienciaSection}>
        <div className={styles.sectionHeader}>
          <h2>Experiência</h2>
          <h3>Veja por onde eu passei</h3>
        </div>

        <div className={styles.logosContainer}>
          {/* Sua imagem central */}
          <img src={fotoExperienciaLogos} alt="Erick Carrasco apontando" className={styles.experienciaFotoCentral} />

          {/* Logos posicionadas absolutamente */}
          <img src={logoMediotecc} alt="Mediotecc Senac" className={styles.logoMediotecc} />
          <img src={logoSenac} alt="Senac" className={styles.logoSenac} />
          <img src={logoNook} alt="Nook" className={styles.logoNook} />
          <img src={logoSecJustica} alt="Secretaria de Justiça" className={styles.logoSecJustica} />
          <img src={logoCiee} alt="CIEE" className={styles.logoCiee} />
          <img src={logoJovensClima} alt="Jovens pelo Clima" className={styles.logoJovensClima} />
          <img src={logoIdeias} alt="i.de.ia.S" className={styles.logoIdeias} />
          <img src={logoUnifg} alt="UNIFG" className={styles.logoUnifg} />
          <img src={logoConectaRecife} alt="Conecta Recife" className={styles.logoConectaRecife} />
          <img src={logoCampusParty} alt="Campus Party" className={styles.logoCampusParty} />
          <img src={logoArteFavela} alt="Coletivo Arte na Favela" className={styles.logoArteFavela} /> {/* Adicionado */}
          <img src={logoCapitalEmpreendedor} alt="Capital Empreendedor" className={styles.logoCapitalEmpreendedor} />
          <img src={logoCongressoInternacional} alt="XX Congresso Internacional" className={styles.logoCongressoInternacional} />
          <img src={logoRecnPlay} alt="Rec'n'Play" className={styles.logoRecnPlay} />
          <img src={logoCampusMobile} alt="Campus Mobile" className={styles.logoCampusMobile} />
        </div>
      </section>
      
    </main>
  );
};

export default ProjetosExperiencia;