import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={`header ${theme} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          Reformas y Electricidad
        </a>

        <div className="nav-wrapper">
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>

          <button 
            className={`menu-toggle ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <nav className={isOpen ? 'open' : ''} ref={navRef}>
            <ul>
              <li><a href="#services" onClick={closeMenu}>Servicios</a></li>
              <li><a href="#portfolio" onClick={closeMenu}>Proyectos</a></li>
              <li><a href="#testimonials" onClick={closeMenu}>Clientes</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
