"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/charla2.png";
import "../styles/cursos.scss";
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

function Charlas() {
  return (
    <div id="nosotros" className="nos-container2">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Charlas" title="Charlas" src={Nos} />
          <div className="texto">
            <motion.h2 {...tittleVariants}>
              Contexto.Psi: Ciclo de Charlas
            </motion.h2>
            <motion.p {...tittleVariants}>
              Hola! Este es el formulario de inscripción para el{" "}
              <strong>Ciclo de Charlas</strong> de la segunda mitad del 2024 de
              Contexto.Psi. Por favor, llená todos los datos y te contactaremos
              para poder realizar el pago y confirmar tu vacante.
              <br />
              <br />
              Las clases son sincrónicas por Google Meet los{" "}
              <strong>segundos jueves del mes a las 20hs</strong> y{" "}
              <strong>NO</strong> quedan grabadas.
              <br />
              <br />
              El valor por charla es de{" "}
              <strong>$12.000 pesos argentinos</strong>.
            </motion.p>
            <motion.a
              {...tittleVariants}
              target="blank"
              href="https://docs.google.com/forms/d/1hhP1XALn1kpbQyZnzURhAFM0rAEPmKCqlgaNFcQxHBw/viewform?edit_requested=true"
            >
              Inscribirme
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Charlas;
