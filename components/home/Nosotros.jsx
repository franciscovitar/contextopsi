"use client";

import React from "react";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 60, transition: { duration: 0.5, delay: 0.5 } },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nos-container">
      <div className="fila">
        <div className="texto">
          <motion.h2 {...tittleVariants}>¿Quiénes somos?</motion.h2>
          <motion.div {...lineVariants} className="line"></motion.div>
          <motion.p {...tittleVariants}>
            Somos un equipo de profesionales de la <strong>salud mental</strong>{" "}
            con perspectiva de <strong>género</strong> y de derechos, conformado
            por psicólogxs de distintas corrientes teóricas, psiquiatras y
            nutricionistas.
            <br /> Construimos una red de atención psicológica integral que
            reivindica el trabajo interdisciplinario y la formación continua.
            <br />
            Brindamos atención psicoterapéutica para todas las edades:{" "}
            <strong>presencial</strong> en <strong>Bs. As., Argentina</strong>,
            y <strong>virtual</strong> en todo el mundo. <br />
            Hacemos contenidos a través de distintos medios y plataformas y
            dictamos <strong>capacitaciones</strong> sobre salud mental y género
            para profesionales de la salud y diversas instituciones.
          </motion.p>

          <motion.a
            {...tittleVariants}
            target="blank"
            href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
          >
            Contáctanos
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
