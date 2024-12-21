"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_homewelcome.scss";

// Variantes de animación para Framer Motion
const textVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true },
};

const linkVariants = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 },
  },
  viewport: { once: true },
};

function HomeWelcome({ className }) {
  return (
    <section id="inicio" className={`HomeWelcome-container ${className}`}>
      <div className="texto">
        <motion.h1 {...textVariants}>Contexto.Psi</motion.h1>
        <motion.h4 {...textVariants}>
          Equipo de Salud Mental con perspectiva de género y de derechos.
          <br />
          Atención psicológica para todas las edades. <br /> Presencial en Bs.
          As., Argentina, y virtual en todo el mundo.
        </motion.h4>

        <div className="boton">
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
    </section>
  );
}

export default HomeWelcome;
