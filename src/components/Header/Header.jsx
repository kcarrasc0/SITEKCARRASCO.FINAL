import React, { useState } from 'react';
import styles from './header.module.css';
import logoKcarrasco from '../../assets/images/logos/logokcarrasco.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <img src={logoKcarrasco} alt="Logo KCarrasco" />
        </Link>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <Link to="/" onClick={closeMenu}>Início</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
        <Link to="/projetos-e-experiencias" onClick={closeMenu}>Projetos e Experiência</Link>
        <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
      </nav>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
};

export default Header;