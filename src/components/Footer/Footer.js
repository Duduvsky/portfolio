import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-content">
        <h2>My Contact</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:matheus.eduardofc@hotmail.com" className="contact-link">  matheus.eduardofc@hotmail.com</a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-info">  +55 21 97431-7033</span>
          </li>
        </ul>
        <div style={socialIconsStyle}>
            <a href="https://www.linkedin.com/in/matheus-de-azevedo-ads/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Duduvsky" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
      </div>
    </footer>
  );
};

const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
};

const iconStyle = {
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
};

export default Footer;
