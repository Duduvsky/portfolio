import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav nav-fixed">
      <div className="menu">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#habilidades" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#projetos" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
      <div className="dropdown">
        <button onClick={toggleMenu} className="hamburger-button">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="icon" />
        </button>
        <ul className="nav-list" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#habilidades" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#projetos" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Nav;
