"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoEquipo from "../../Images/fotoinicio.png";
import "../styles/_homewelcome.scss";

export default function HomeWelcome() {
  return (
    <section id="Inicio" className="home-container">
      <div className="home-content">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <h1>
            Salud mental con <span>perspectiva de género</span> y de derechos
          </h1>

          <p>
            Atención psicológica para todas las edades. Presencial en Buenos
            Aires, virtual en todo el mundo. Psicólogxs, psiquiatras y
            nutricionistas con distintas corrientes teóricas.
          </p>

          <div className="home-actions">
            <a
              className="home-button home-button-primary"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar terapia
            </a>

            <a className="home-button home-button-secondary" href="#equipo">
              Conocer el equipo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="home-image-frame">
            <Image
              src={FotoEquipo}
              alt="Red de profesionales de Contexto Psi"
              className="foto-equipo"
              sizes="(max-width: 980px) 100vw, 56vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
