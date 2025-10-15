// src/components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

// Importe sua logo e os ícones
import logoKcarrasco from '../../assets/images/logos/logokcarrasco.png'; 
import iconInstagram from '../../assets/images/icons/instagram.png';
import iconYoutube from '../../assets/images/icons/youtube.png';
import iconGithub from '../../assets/images/icons/github.png';
import iconLinkedin from '../../assets/images/icons/linkedin.png';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <img src={logoKcarrasco} alt="Logo K Carrasco" className={styles.footerLogo} />
          <p>Chegou até aqui? Me siga nas redes socias</p>
        </div>
        <div className={styles.footerRight}>
          <h4>Social</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/_kcarrasco" target="_blank" rel="noopener noreferrer">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@kcarrasco" target="_blank" rel="noopener noreferrer">
              <img src={iconYoutube} alt="YouTube" />
            </a>
            <a href="https://github.com/kcarrasc0" target="_blank" rel="noopener noreferrer">
              <img src={iconGithub} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/-kcarrasco" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.footerBottom}>
        {/* Corrigindo o pequeno erro de digitação de "Copyrigth" para "Copyright" */}
        <p>@Copyright 2025. Made By <strong>KCARRASCO</strong></p>
      </div>
    </footer>
  );
};

export default Footer;