import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container-contact">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <p className="info-label">Teléfono</p>
                <p className="info-value">+34 123 456 789</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">info@reformaspro.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <p className="info-label">Dirección</p>
                <p className="info-value">Champ de Mars, 5 Av. Anatole France, 75007 Paris</p>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Horario de Atención</h4>
              <div className="hours-item">
                <span>Lunes a Viernes:</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="hours-item">
                <span>Sábados:</span>
                <span>10:00 - 14:00</span>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626693345!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación Torre Eiffel"
              ></iframe>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Envíanos un mensaje</h3>
            
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Teléfono (opcional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                placeholder="Tu mensaje..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Enviar Mensaje</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;