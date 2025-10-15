import React from 'react';
import styles from './Sobre.module.css'; // Usando o novo arquivo de CSS

// Seção 1 - Capa
import fotoSobre from '../../assets/images/kcarrasco/foto-sobre.jpg'; 
// Seção 2 Causa e Skills
import iconReact from '../../assets/images/icons/iconreact.png';
import iconJs from '../../assets/images/icons/iconjs.png';
import iconHtml from '../../assets/images/icons/iconhtml.png';
import iconCss from '../../assets/images/icons/iconcss.png';
import iconCanva from '../../assets/images/icons/iconcanva.png';
import iconSheets from '../../assets/images/icons/iconsheets.png';
import iconTrello from '../../assets/images/icons/icontrello.png';
import iconDocs from '../../assets/images/icons/icondoc.png';
import iconFigma from '../../assets/images/icons/iconfigma.png';
import iconForms from '../../assets/images/icons/iconforms.png';
import iconLooker from '../../assets/images/icons/iconlooker.png';
import iconWordpress from '../../assets/images/icons/iconwordpress.png';


const Sobre = () => {
  return (
    <main className={styles.container}>
      {/* Seção 1 - Capa da Página Sobre */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h2>Sobre</h2>
          {/* O texto é o mesmo das outras páginas, conforme o design */}
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
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoSobre} alt="Erick Carrasco olhando para um cocar" />
        </div>
      </section>
      
      {/* Seção 2 - Skills */}
    <section className={styles.skillsSection}>
        {/* Coluna da Esquerda: Causa e Propósito */}
        <div className={styles.causaContainer}>
          <h2>Qual a minha Causa?</h2>
          <h3>Qual o propósito?</h3>
          <p>Sinceramente nunca pensei que seguiria esse caminho profissional.</p>
          <p>
            Nessa vida tive 3 sonhos, quando criança queria ser um super-herói, já na adolescência queria seguir como atleta de MMA, e agora tenho uma sonho de mudar a vida de outras pessoas, assim como mudaram a minha. Cada educador que passou pela minha vida me ajudou de formas inimagináveis, a instituição que devo tudo o Mediotec não formou apenas um profissional, mas um cidadão, hoje sou:
          </p>
          <ul>
            <li>Palestrante</li>
            <li>Professor</li>
            <li>Empreendedor</li>
            <li>Desenvolvedor</li>
          </ul>
        </div>

        {/* Coluna da Direita: Skills */}
        <div className={styles.skillsContainer}>
          <div className={styles.hardSkills}>
            <h4>Hard Skills</h4>
            <div className={styles.iconGrid}>
              <img src={iconReact} alt="React" />
              <img src={iconJs} alt="JavaScript" />
              <img src={iconHtml} alt="HTML5" />
              <img src={iconCss} alt="CSS3" />
              <img src={iconWordpress} alt="Wordpress" />
              <img src={iconFigma} alt="Figma" />
              <img src={iconCanva} alt="Canva" />
              <img src={iconTrello} alt="Trello" />
              <img src={iconSheets} alt="Sheets" />
              <img src={iconDocs} alt="Docs" />
              <img src={iconLooker} alt="Looker" />
              <img src={iconForms} alt="Google Forms" />
            </div>
          </div>

          <div className={styles.softSkills}>
            <h4>Soft Skills</h4>
            <div className={styles.tagGrid}>
              <span>Liderança</span>
              <span>Comunicação</span>
              <span>Versatilidade</span>
              <span>Colaboração</span>
              <span>Criatividade</span>
              <span>Prestativo</span>
              <span>Empreendedorismo</span>
              <span>Pensamento Crítico</span>
              <span>Gestão</span>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Sobre;