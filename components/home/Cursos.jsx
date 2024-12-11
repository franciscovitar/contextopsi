"use client";

import React from "react";
import Image from "next/image";

import Nos2 from "../../Images/curso-transformed.png";
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

function Cursos() {
  return (
    <div id="nosotros" className="nos-container3">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Cursos" title="Cursos" src={Nos2} />
          <div className="texto">
            <motion.h2 className="h2c" {...tittleVariants}>
              Inscripción al Curso "Inicios en la Clínica"
            </motion.h2>
            <motion.p {...tittleVariants}>
              Curso organizado por <strong>Contexto.Psi</strong>, dirigido a
              <strong> psicólogxs</strong> y{" "}
              <strong>estudiantes avanzadxs</strong> de Psicología interesados
              en introducirse a la <strong>práctica clínica de adultxs</strong>.
              <br />
              <br />
              <strong>Cursada virtual y sincrónica</strong>, con encuentros
              semanales. El curso inicia a mediados de agosto 2024.
            </motion.p>

            <motion.a
              className="ac"
              {...tittleVariants}
              target="blank"
              href="https://docs.google.com/forms/d/1jUShRaffa0ukAjgHzvyS-llKJVqCGot5_8rwij8tZw8/viewform?edit_requested=true"
            >
              Quiero inscribirme
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cursos;
