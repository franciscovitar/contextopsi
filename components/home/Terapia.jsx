"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/terapia.png";
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

function Terapia() {
  return (
    <div id="nosotros" className="nos-container2">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Terapia" title="Terapia" src={Nos} />
          <div className="texto">
            <motion.h2 className="h2t" {...tittleVariants}>
              CONTEXTO.PSI
            </motion.h2>
            <motion.p {...tittleVariants}>
              El siguiente formulario sirve para poder hacer la admisión y
              derivación correspondiente. Una vez completado, nos contactaremos
              en el transcurso de diez días hábiles.
              <br />
              <br />
              La llamada de admisión tiene un costo de{" "}
              <strong>$10.000 pesos argentinos</strong>, como contribución para
              la institución. El valor de las sesiones de terapia se informará
              en el llamado.
              <br />
              <br />
              En caso de no poder abonarlo y necesitar alguna orientación de
              otras instituciones con bono comunitario o gratuitas, enviá un
              mail a <strong>equipo.contextopsi@gmail.com</strong>.
            </motion.p>

            <motion.a
              className="at"
              {...tittleVariants}
              target="blank"
              href="https://docs.google.com/forms/d/1qcimoFm4im0JsrUKTY_E1dnXbSjEQOuBYScO_H-x_JY/viewform?pli=1&pli=1&edit_requested=true"
            >
              ¡Empezar!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Terapia;
