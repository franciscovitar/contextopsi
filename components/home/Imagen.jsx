"use client";

import "../styles/_imagen.scss";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Constantes para efectos de Framer Motion
const headingVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0 } },
};

const subheadingVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4 },
  },
};

function Imagen() {
  return (
    <div id="desarrollo" className="contenedor-principal-demo2">
      <div className="contenedor-secundario">
        <motion.h2 viewport={{ once: true }} {...headingVariants}>
          Mira nuestros videos psicoeducativos de C5N
        </motion.h2>

        <a
          target="blank"
          href="https://www.youtube.com/watch?v=mkP1JsX6plA&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
        >
          <motion.button {...buttonVariants} viewport={{ once: true }}>
            Ver Playlist
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default Imagen;
