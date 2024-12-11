"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/nosotros.jpg";
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

const imageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  viewport: { once: true },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nos-container">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
        <div className="texto">
          <motion.h2 {...tittleVariants}>¿Quiénes somos?</motion.h2>
          <motion.div {...lineVariants} className="line"></motion.div>
          <motion.p {...tittleVariants}>
            Somos un equipo de profesionales de la <strong>salud mental</strong>{" "}
            con perspectiva de género y de derechos. Brindamos{" "}
            <strong>atención psicoterapéutica</strong> para todas las edades.
            Hacemos contenidos y capacitaciones sobre salud mental.
            <br />
            Brindamos atención presencial en{" "}
            <strong>Buenos Aires, Argentina</strong>, y virtual en todo el
            mundo.
            <br />
            Hablamos y educamos sobre Salud Mental a través de distintos medios
            y plataformas. Construimos una{" "}
            <strong>red de atención psicológica integral</strong>, reivindicando
            el valor del trabajo en Salud Mental.
          </motion.p>

          <motion.a {...tittleVariants} target="blank" href="#contacto">
            Contáctanos
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
