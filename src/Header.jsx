import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <input type="checkbox" id="menu-toggle" className="header__checkbox" />
        <label htmlFor="menu-toggle" className="header__menu-button">
          <i className="bi bi-list"></i>
        </label>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#home" className="header__nav-link"> {/* Cambia a #home */}
                <i className="bi bi-house header__icon"></i>
                <span className="header__nav-text">Home</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#profile" className="header__nav-link">
                <i className="bi bi-person header__icon"></i>
                <span className="header__nav-text">Profile</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link">
                <i className="bi bi-briefcase header__icon"></i>
                <span className="header__nav-text">Proyectos</span>
              </a>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">
                <i className="bi bi-envelope header__icon"></i>
                <span className="header__nav-text">Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;