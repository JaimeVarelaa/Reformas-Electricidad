import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Expertos en Reformas y Electricidad</h1>
        <p>Transformamos tus espacios con profesionalismo y calidad</p>
        <div className="hero-buttons">
          <button href="#contact" className="button-primary">Solicitar Presupuesto</button>
          <button href="#portfolio" className="button-secondary ">Ver Proyectos</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;