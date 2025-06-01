import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="footer-about" variants={itemVariants}>
            <h3>Reformas<span>Pro</span></h3>
            <p>Expertos en reformas y trabajos de electricidad con más de 15 años de experiencia en el sector.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Proyectos</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-contact" variants={itemVariants}>
            <h3>Contacto</h3>
            <p><FaPhoneAlt /> +34 123 456 789</p>
            <p><FaEnvelope /> info@reformaspro.com</p>
            <p><FaMapMarkerAlt /> Champ de Mars, 5 Av. Anatole France, 75007 Paris</p>
          </motion.div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ReformasPro. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Política de Privacidad</a>
            <span>|</span>
            <a href="#">Términos de Servicio</a>
            <span>|</span>
            <a href="#">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;