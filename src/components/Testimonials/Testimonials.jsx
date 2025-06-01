import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const baseTestimonials = [
    {
      name: "María González",
      role: "Propietaria de Vivienda",
      content: "Quedé impresionada con la calidad del trabajo y la profesionalidad del equipo. Mi cocina quedó exactamente como la soñé.",
      rating: 5,
      avatar: "/images/avatar1.png"
    },
    {
      name: "Carlos Martínez",
      role: "Gerente de Restaurante",
      content: "Necesitábamos una reforma urgente y cumplieron con los plazos sin comprometer la calidad. Totalmente recomendables.",
      rating: 5,
      avatar: "/images/avatar1.png"
    },
    {
      name: "Ana López",
      role: "Arquitecta",
      content: "Como profesional del sector, valoro mucho su atención al detalle y su capacidad para resolver problemas complejos.",
      rating: 4,
      avatar: "/images/avatar1.png"
    }
  ];

  const [testimonials, setTestimonials] = useState([...baseTestimonials]);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollState = useRef({
    position: 0,
    animationId: null,
    cloneAdded: false
  });

  useEffect(() => {
    setTestimonials([...baseTestimonials, ...baseTestimonials]);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;
    
    if (!scrollContainer || !scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth / 2;
    const scroll = () => {
      if (!isHovered) {
        scrollState.current.position += 1;
        
        if (scrollState.current.position >= scrollWidth) {
          scrollState.current.position = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollState.current.position;
        }
      }
      scrollState.current.animationId = requestAnimationFrame(scroll);
    };

    scrollState.current.animationId = requestAnimationFrame(scroll);

    return () => {
      if (scrollState.current.animationId) {
        cancelAnimationFrame(scrollState.current.animationId);
      }
    };
  }, [isHovered]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container-testimonials">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        
        <div 
          className="testimonials-scroll-container" 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="testimonials-scroll" 
            ref={scrollContentRef}
            style={{
              display: 'inline-flex',
              gap: '2rem',
              padding: '1rem 0',
              width: 'max-content'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      onError={(e) => {
                        e.target.src = '/images/avatar1.png';
                        e.target.alt = 'Avatar del cliente';
                      }} 
                    />
                  </div>
                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-content">"{testimonial.content}"</p>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "star-filled" : "star-empty"}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;