import { useState } from "react";
import "./Portfolio.css";
import { FaPlay, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Reforma de Cocina",
      category: "reformas",
      description:
        "Transformación completa de cocina con materiales de alta calidad y diseño moderno.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Cocina antes de la reforma",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Cocina después de la reforma",
        },
        {
          type: "video",
          src: "/videos/kitchen.mp4",
          alt: "Proceso de reforma de cocina",
        },
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Cocina antes de la reforma",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Cocina después de la reforma",
        },
        {
          type: "video",
          src: "/videos/kitchen.mp4",
          alt: "Proceso de reforma de cocina",
        },
      ],
    },
    {
      id: 2,
      title: "Instalación Eléctrica Comercial",
      category: "electricidad",
      description:
        "Actualización del sistema eléctrico para cumplir con normativas de seguridad.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Instalación eléctrica antes (imagen de cocina)",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Instalación eléctrica renovada (imagen de cocina)",
        },
      ],
    },
    {
      id: 3,
      title: "Reforma de Baño",
      category: "reformas",
      description:
        "Renovación completa de baño con nuevos sanitarios y azulejos premium.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Baño antes de la reforma (imagen de cocina)",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Baño renovado (imagen de cocina)",
        },
      ],
    },
    {
      id: 4,
      title: "Sistema de Iluminación LED",
      category: "electricidad",
      description:
        "Instalación de iluminación LED inteligente con control remoto.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Iluminación anterior (imagen de cocina)",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Nuevo sistema LED (imagen de cocina)",
        },
        {
          type: "video",
          src: "/videos/kitchen.mp4",
          alt: "Funcionamiento del sistema LED (video de cocina)",
        },
      ],
    },
    {
      id: 5,
      title: "Reforma Integral de Vivienda",
      category: "reformas",
      description: "Transformación completa de vivienda unifamiliar.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Vivienda antes de la reforma (imagen de cocina)",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Vivienda renovada (imagen de cocina)",
        },
      ],
    },
    {
      id: 6,
      title: "Actualización de Cuadro Eléctrico",
      category: "electricidad",
      description:
        "Modernización del cuadro eléctrico con protecciones actualizadas.",
      media: [
        {
          type: "image",
          src: "/images/kitchen-before.jpg",
          alt: "Cuadro eléctrico antiguo (imagen de cocina)",
        },
        {
          type: "image",
          src: "/images/kitchen-after.jpg",
          alt: "Cuadro eléctrico nuevo (imagen de cocina)",
        },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openLightbox = (project, initialIndex = 0) => {
    setCurrentProject(project);
    setCurrentMediaIndex(initialIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const navigateMedia = (direction) => {
    if (!currentProject) return;
    const newIndex =
      (currentMediaIndex + direction + currentProject.media.length) %
      currentProject.media.length;
    setCurrentMediaIndex(newIndex);
  };

  const currentMedia = currentProject?.media[currentMediaIndex];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container-portafolio">
        <h2 className="section-title">Nuestros Trabajos</h2>

        <div className="portfolio-filters">
          <button
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => setActiveFilter("all")}
          >
            Todos
          </button>
          <button
            className={activeFilter === "reformas" ? "active" : ""}
            onClick={() => setActiveFilter("reformas")}
          >
            Reformas
          </button>
          <button
            className={activeFilter === "electricidad" ? "active" : ""}
            onClick={() => setActiveFilter("electricidad")}
          >
            Electricidad
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img
                src={project.media[1].src}
                alt={project.media[1].alt}
                onError={(e) => {
                  e.target.src = "/images/placeholder.jpg";
                  e.target.alt = "Imagen no disponible";
                }}
              />

              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="portfolio-buttons">
                    <button
                      className="button-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(project);
                      }}
                    >
                      Ver Galería
                    </button>

                    {project.media.some((m) => m.type === "video") && (
                      <button
                        className="button-error"
                        onClick={(e) => {
                          e.stopPropagation();
                          const videoIndex = project.media.findIndex(
                            (m) => m.type === "video"
                          );
                          openLightbox(project, videoIndex);
                        }}
                      >
                        <FaPlay className="btn-icon" /> Ver Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && currentProject && (
        <div
          className={`lightbox-overlay ${lightboxOpen ? "open" : ""}`}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>

            <div className="lightbox-media-container">
              {currentMedia?.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  className="lightbox-media"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg";
                    e.target.alt = "Imagen no disponible";
                  }}
                />
              ) : (
                <video
                  src={currentMedia?.src}
                  controls
                  autoPlay
                  className="lightbox-media"
                  onError={(e) => {
                    e.target.src = "/videos/placeholder.mp4";
                    e.target.alt = "Video no disponible";
                  }}
                />
              )}
            </div>

            <div className="lightbox-nav">
              <button
                className="lightbox-arrow prev"
                onClick={() => navigateMedia(-1)}
              >
                <FaChevronLeft />
              </button>
              <span className="lightbox-counter">
                {currentMediaIndex + 1} / {currentProject.media.length}
              </span>
              <button
                className="lightbox-arrow next"
                onClick={() => navigateMedia(1)}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="lightbox-info">
              <h4 className="lightbox-title">{currentProject.title}</h4>
              <p className="lightbox-description">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
