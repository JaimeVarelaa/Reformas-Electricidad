import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Reformas Integrales",
      description: "Transformamos completamente tus espacios con diseños modernos y funcionales.",
      icon: "🛠️"
    },
    {
      title: "Instalaciones Eléctricas",
      description: "Soluciones eléctricas seguras y eficientes para hogares y negocios.",
      icon: "⚡"
    },
    {
      title: "Iluminación",
      description: "Diseño e instalación de sistemas de iluminación para crear ambientes únicos.",
      icon: "💡"
    },
    {
      title: "Mantenimiento",
      description: "Servicios de mantenimiento preventivo y correctivo para todas tus instalaciones.",
      icon: "🔧"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container-services">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;