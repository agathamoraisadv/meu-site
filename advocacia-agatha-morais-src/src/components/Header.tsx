import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/LOGO-NOVA-TRANSPARENTE.png" alt="Ágatha Morais Advocacia" className="logo" />
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link to="/areas-atuacao" className="nav-link">Áreas de Atuação</Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
