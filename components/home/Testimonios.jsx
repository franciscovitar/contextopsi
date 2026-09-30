"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/_testimonios.scss";

const testimonios = [
  {
    role: "Psicóloga en formación",
    text: "Disfruté mucho la experiencia. Al iniciar en la clínica unx está muy solx y perdidx sin saber por dónde arrancar, con Contexto me sentí acompañada y pude comenzar a pensar desde otro lugar mi posicionamiento. Las coordinadoras siempre fueron muy cálidas y generosas con la información y eso hizo que la clase fluyera muy linda y con mucha participación. ¡Gracias!",
    featured: true,
  },
  {
    role: "Consultante",
    text: "Estoy muy contento de haber contactado a Contexto, la profesional a la que me derivaron es una profesional excelente, se nota que hay mucha pasión y amor detrás de todxs lxs que componen el equipo. Les agradezco mucho.",
  },
  {
    role: "Psicóloga en supervisión",
    text: "Las supervisiones son una propuesta valiosa. El hecho de que se desarrolle en un clima de respeto, escucha y cuidado entre quienes participan, permite que cada unx de nosotrxs pueda compartir sus preguntas/inquietudes más allá de la apertura teórica que se tenga. Es un espacio que favorece el intercambio, enriqueciendo el trabajo clínico.",
  },
  {
    role: "Psicólogx en formación",
    text: "Me anoté al curso con la expectativa de volver a conectarme con la clínica y seguir actualizándome en las teorías y retomarlas desde una mirada actual. Encontré una red de apoyo que me motivó a pensar la psicología desde un lugar menos solemne y más acompañada. Recomiendo mucho este espacio para iniciar con los primeros pacientes o en caso de necesitar un grupo de supervisión.",
  },
  {
    role: "Psicólogx de la red",
    text: "Me parece excelente el funcionamiento de Contexto.Psi. Luego de haber pasado por otras experiencias y equipos, la profesionalidad con la que realizan las derivaciones me deja muy satisfecha, y sobre todo acompañada.",
  },
  {
    role: "Consultante",
    text: "Estoy muy contenta con mi terapeuta, es un 10. Muy recomendable, gracias!",
  },
  {
    role: "Curso asincrónico Psicoeducación",
    text: "Me re sirvió para abordar el contacto con las emociones con mis pacientes. Les expliqué los componentes de la experiencia emocional y estamos trabajando con eso",
  },
];

const chunkArray = (array, size) => {
  return array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(item);

    return chunks;
  }, []);
};

const getCardsPerSlide = () => {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 1050) return 2;

  return 3;
};

export default function Testimonios() {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
      setHoveredCard(null);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = useMemo(() => {
    return chunkArray(testimonios, cardsPerSlide);
  }, [cardsPerSlide]);

  useEffect(() => {
    setActiveSlide((prev) => {
      if (prev > slides.length - 1) return slides.length - 1;
      return prev;
    });
  }, [slides.length]);

  const currentSlide = slides[activeSlide] || [];

  const defaultFeaturedIndex = useMemo(() => {
    const featuredIndex = currentSlide.findIndex((item) => item.featured);

    if (featuredIndex !== -1) {
      return featuredIndex;
    }

    if (cardsPerSlide === 3 && currentSlide.length === 3) {
      return 1;
    }

    return 0;
  }, [currentSlide, cardsPerSlide]);

  const nextSlide = () => {
    setHoveredCard(null);
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setHoveredCard(null);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDragEnd = (_, info) => {
    const dragDistance = info.offset.x;
    const dragVelocity = info.velocity.x;

    if (dragDistance < -70 || dragVelocity < -500) {
      nextSlide();
      return;
    }

    if (dragDistance > 70 || dragVelocity > 500) {
      prevSlide();
    }
  };

  return (
    <section className="testimonios-section">
      <div className="testimonios-wrapper">
        <motion.div
          className="testimonios-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Lo que dicen quienes ya pasaron por Contexto.Psi</h2>

          <p>
            Testimonios de consultantes, profesionales de la red y psicólogxs en
            formación.
          </p>
        </motion.div>

        <div className="testimonios-carousel">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Ver testimonios anteriores"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="testimonios-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSlide}-${cardsPerSlide}`}
                className={`testimonios-grid testimonios-grid-${cardsPerSlide}`}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                style={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                {currentSlide.map((testimonio, index) => {
                  const realIndex = activeSlide * cardsPerSlide + index;

                  const isFeatured =
                    hoveredCard === index ||
                    (hoveredCard === null && index === defaultFeaturedIndex);

                  return (
                    <motion.article
                      key={`${testimonio.role}-${realIndex}`}
                      className={`testimonio-card ${
                        isFeatured ? "featured" : ""
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.42, delay: index * 0.06 }}
                      viewport={{ once: true }}
                    >
                      <div className="testimonio-top">
                        <div
                          className="testimonio-stars"
                          aria-label="5 estrellas"
                        >
                          ★★★★★
                        </div>

                        <span className="testimonio-number">
                          {String(realIndex + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="testimonio-role">{testimonio.role}</p>

                      <p className="testimonio-text">“{testimonio.text}”</p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Ver más testimonios"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="testimonios-controls" aria-label="Selector de slide">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`testimonios-dot ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => {
                setHoveredCard(null);
                setActiveSlide(index);
              }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
