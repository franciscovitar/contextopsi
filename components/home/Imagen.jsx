"use client";

import "../styles/_imagen.scss";
import React from "react";
import { motion } from "framer-motion";

// Constantes de animación
const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Imagen() {
  return (
    <section id="desarrollo" className="contenedor-principal-demo2">
      <div className="contenedor-secundario">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          Mira nuestros videos psicoeducativos de C5N
        </motion.h2>
        <motion.a
          href="https://www.youtube.com/watch?v=mkP1JsX6plA&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
          target="_blank"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
          transition={{ delay: 0.2 }}
        >
          <button>Ver Playlist</button>
        </motion.a>
      </div>
    </section>
  );
}

export default Imagen;
