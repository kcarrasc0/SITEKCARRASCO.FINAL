import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Inicio.module.css';

// Seção 1 - Capa
import fotoCapa from '../../assets/images/kcarrasco/kcarrasco.png';
// seção 2 - Sobre mim
import sobrePerfil from '../../assets/images/kcarrasco/sobre-perfil.png';
//

// Seção 3 - Projetos
import projeto1 from '../../assets/images/projetos/nook.jpg';
import projeto2 from '../../assets/images/projetos/comunicacaoambiental.png';
import projeto3 from '../../assets/images/projetos/yara.png';

// Seção 4 - Impacto
import fotoImpacto from '../../assets/images/kcarrasco/kcarrasco-impacto.png'

// Seção 5 - Depoimentos
import depoimento1 from '../../assets/images/depoimentos/depoimento1.png'
import depoimento2 from '../../assets/images/depoimentos/depoimento2.jpg'
import depoimento3 from '../../assets/images/depoimentos/depoimento3.jpg'

const Inicio = () => {
  // ================================================
  // 3. LÓGICA DO FORMULÁRIO (AGORA DENTRO DO COMPONENTE)
  // ================================================
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Enviando sua mensagem...');

    // !!! IMPORTANTE: SUBSTITUA COM SUAS CHAVES DO EMAILJS !!!
    emailjs.sendForm(
      'service_drc76l4', 
      'template_e0ho44s', 
      form.current, 
      'hV_cAquI4XGf9d2s2'
    )
      .then((result) => {
          // Bloco de SUCESSO
          console.log('E-MAIL ENVIADO COM SUCESSO:', result.text); // Para depuração
          setStatusMessage('Mensagem enviada com sucesso!');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
          form.current.reset();
      })
      .catch((error) => {
          // Bloco de ERRO
          console.log('FALHA NO ENVIO DO E-MAIL:', error.text); // Para depuração
          setStatusMessage('Ocorreu um erro. Verifique suas chaves ou tente novamente.');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div className={styles.container}>
      {/* Seção 1 - Home-Capa do Site ATUALIZADA */}
      <section id="inicio" className={`${styles.section} ${styles.homeCapa}`}>
        <div className={styles.textContainer}>
          <h3>Salve! Eu sou</h3>
          <h1>Erick Carrasco</h1>
          <h2 className={styles.subtituloAncestral}>TECNOLOGIAS ANCESTRAIS</h2>
          <p className={styles.descricao}>
            Conecto ancestralidade e tecnologia para transformar realidades. Neste espaço,
            compartilho minhas ideias, projetos e experiências que unem tradição e
            inovação com propósito.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.ctaButton}><a href="/projetos-e-experiencias">Conheça meus projetos</a></button>
            <button className={styles.secondaryButton}><a href="#contato">Fale comigo</a></button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={fotoCapa} alt="Erick Carrasco" />
        </div>
      </section>

       {/*Seção 2 - Sobre mim*/}
       <section id="sobre" className={`${styles.section} ${styles.sobreMim}`}>
        {/* Bloco 1: Títulos centralizados */}
        <div className={styles.sectionHeader}>
          <h2>Sobre Mim</h2>
          <h3>Ancestralidade e Caminhada</h3>
          <p className={styles.subtituloSobre}>
            Mostrando um pouco da minha história, conexão com
            <br/>o território, ancestralidade e visão de mundo.
          </p>
        </div>
        

        {/* Bloco 2: Conteúdo em duas colunas */}
        <div className={styles.sectionContent}>
          <div className={styles.textContainerSobre}>
            <h4>De onde venho e pra onde vou?</h4>
            <p>
              Sou Erick Carrasco Oliveira, mais conhecido como Carrasco. Sou um indígena em retomada, desenvolvedor front-end, designer UI/UX, criador de conteúdo digital, professor nas horas vagas e CEO da startup <strong><a href="https://www.instagram.com/nook.corp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">NOOK</a></strong> – uma iniciativa que conecta inovação e impacto social.
            </p>
            <p>
              Também integro o <strong><a href="https://www.instagram.com/coletivoartenafavela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Coletivo Arte na Favela</a></strong>, como coordenador, levando arte, cultura e resistência para os territórios periféricos.
            </p>
            <p>
              Minha caminhada une ancestralidade, tecnologia, educação e comunicação. Através das redes sociais, palestras e projetos, levo a mensagem de que é possível hackear o sistema com nossas raízes firmes no chão e os olhos no futuro.
            </p>
            <button className={styles.outlineButton}><a href="/sobre">Ver mais</a></button>
          </div>
          <div className={styles.imageContainerSobre}>
            <img src={sobrePerfil} alt="Erick Carrasco perfil" />
          </div>
        </div>
      </section>
      
      {/*Seção 3 - Projetos */}
     <section id="projetos" className={`${styles.section} ${styles.projetosSection}`}>
        {/* Usamos a mesma estrutura de cabeçalho da seção anterior */}
        <div className={styles.sectionHeader}>
          <h2>Destaques de Projetos</h2>
          <h3>Conheça mais meus projetos</h3>
        </div>

        <div className={styles.sectionTag}>
          Tecnologia com Propósito
        </div>

        <div className={styles.projetosGrid}>
          {/* Card de Projeto 1 */}
          <div className={styles.projetoCard}>
            <img src={projeto1} alt="" />
            <div className={styles.cardContent}>
              <h4>NOOK Corporation</h4>
              <p>Startup de soluções tecnológicas educacionais inclusivas, conectando inovação, impacto social e sustentabilidade.</p>
              <button className={styles.outlineButton}><a href="/projetos-e-experiencias">Ver Projeto</a></button>
            </div>
          </div>

          {/* Card de Projeto 2 */}
          <div className={styles.projetoCard}>
            <img src={projeto2} alt="" />
            <div className={styles.cardContent}>
              <h4>Comunicação Ambiental</h4>
              <p>Projeto voltado à conscientização ecológica e práticas sustentáveis por meio de campanhas e tecnologias sociais.</p>
              <button className={styles.outlineButton}><a href="/projetos-e-experiencias">Ver Projeto</a></button>
            </div>
          </div>

          {/* Card de Projeto 3 */}
          <div className={styles.projetoCard}>
            <img src={projeto3} alt="" />
            <div className={styles.cardContent}>
              <h4>YARA</h4>
              <p>Plataforma que integra docentes e discentes, promovendo inclusão e suporte a alunos com neurodivergencia e individualidades</p>
              <button className={styles.outlineButton}><a href="/projetos-e-experiencias">Ver Projeto</a></button>
            </div>
          </div>
        </div>
      </section>

      {/*Seção 4 - Impacto e Causa*/}
      <section id="impacto" className={`${styles.section} ${styles.impactoSection}`}>
        {/* Bloco 1: Títulos centralizados (AGORA CORRETO) */}
        <div className={styles.sectionHeader}>
          <h2>Impacto e Causa</h2>
          <h3>Qual o propósito?</h3>
        </div>

        {/* Bloco 2: Conteúdo em duas colunas */}
        <div className={styles.sectionContent}>
          <div className={styles.textContainerImpacto}>
            <h4>Por que faço o que faço?</h4>
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
          <div className={styles.imageContainerImpacto}>
            <img src={fotoImpacto} alt="Erick Carrasco - Impacto e Causa" />
          </div>
        </div>
      </section>
      
      {/*Seção 5 - Depoimentos*/}
       <section id="depoimentos" className={`${styles.section} ${styles.depoimentosSection}`}>
        {/* Bloco de títulos centralizados */}
        <div className={styles.sectionHeader}>
          <h2>Depoimentos</h2>
          <h3>Parceiros e clientes</h3>
        </div>

        {/* Tag "Quem caminha junto" */}
        <div className={styles.sectionTag}>
          Quem caminha junto
        </div>

        {/* Grid para os cards de depoimentos */}
        <div className={styles.depoimentosGrid}>
          {/* Card de Depoimento 1 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento1} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Lourdes Burity</h4>
              <h5>Educadora</h5>
              <p>"Conheci Carrasco em 2021 e logo percebi seu comprometimento, maturidade e engajamento em causas sociais. Ao longo do ensino médio, ele se destacou ainda mais, conquistando seu espaço com dedicação. Hoje, é uma alegria tê-lo como parceiro de sala de aula, compartilhando conhecimento e inspirando jovens com suas reflexões."</p>
            </div>
          </div>

          {/* Card de Depoimento 2 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento2} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Ruan Guedes</h4>
              <h5>COO - Desenvolvedor</h5>
              <p>"Trabalhar com o Carrasco é incrível. A honestidade e a pró-atividade dele sempre me chamaram atenção desde o início. Hoje, não o vejo apenas como um sócio, mas como um irmão pra vida."</p>
            </div>
          </div>

          {/* Card de Depoimento 3 */}
          <div className={styles.depoimentoCard}>
            <img src={depoimento3} alt="Depoimento de Lourdes Burity" className={styles.depoimentoAvatar} />
            <div className={styles.depoimentoContent}>
              <h4>Ivo Leonardo</h4>
              <h5>Coordenador de TI - SECTI</h5>
              <p>"Erick Carrasco é um profissional assíduo, pró-ativo com muito espírito de liderança. Tem muita criatividade  e facilidade de comunicação. Sempre em busca da resolução de problemas com excelência. Sem dúvidas, é um profissional enriquecedor, de extremo valor para qualquer equipe, grupo ou organização."</p>
            </div>
          </div>
        </div>
      </section>
      
     {/* Seção 6 - Contato */}
      <section id="contato" className={`${styles.section} ${styles.contatoSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Contato</h2>
          <h3>Vamos construir juntos?</h3>
          <p className={styles.subtituloSobre}>Escolha a melhor opção para você</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="https://api.whatsapp.com/send?phone=81973066822" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>WhatsApp</a>
          <a href="https://www.instagram.com/_kcarrasco" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>Instagram</a>
          <a href="mailto:erick.carrasco.oliver@gmail.com" className={styles.outlineButton}>E-mail</a>
          <a href="https://www.linkedin.com/in/-kcarrasco/" target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>LinkedIn</a>
        </div>

        {/* ================================================ */}
        {/* 3. FORMULÁRIO ATUALIZADO AQUI */}
        {/* ================================================ */}
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="from_name" placeholder="Insira seu nome" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="from_email" placeholder="Insira seu melhor E-mail" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="message" rows="6" placeholder="Insira sua mensagem aqui" required></textarea>
          </div>
          <button type="submit" className={styles.ctaButton} disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        </form>
      </section>
    </div>
  );
};

export default Inicio;