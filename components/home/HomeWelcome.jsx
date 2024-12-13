"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_homewelcome.scss";

// Constantes para efectos de Framer Motion

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const linkVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

function HomeWelcome({ hola }) {
  return (
    <div id="inicio" className={`HomeWelcome-container${hola}`}>
      <div className="container">
        <motion.h1 {...textVariants}>
          Equipo Contexto.Psi - Salud Mental
        </motion.h1>
        <motion.h4 {...textVariants}>
          Atención psicológica presencial en AMBA🇦🇷 y virtual🌎 para todas las
          edades
        </motion.h4>

        <div className="botones">
          <motion.a title="quienes somos" href="#nosotros" {...linkVariants}>
            ¿Quiénes somos?
          </motion.a>
          <motion.a
            href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
            {...linkVariants}
          >
            Solicitar consulta
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome;
