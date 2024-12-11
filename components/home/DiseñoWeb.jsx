"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/c5n.jpg";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 60, transition: { duration: 0.5, delay: 0.5 } },
};

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0 },
  },
};

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
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

function DiseñoWeb() {
  return (
    <div id="desarrollo" className="nos-container">
      <div className="fila">
        <div className="texto">
          <motion.h2 {...tittleVariants}>C5N</motion.h2>
          <motion.div {...lineVariants} className="line"></motion.div>
          <motion.p {...textVariants}>
            Visita nuestros artículos posteados en C5N
          </motion.p>
          <motion.a
            {...textVariants}
            target="blank"
            href="https://www.youtube.com/watch?v=mkP1JsX6plA&list=PLmJk3GS1utEkZVr3aHRRUGAGQdfaVetEq"
          >
            Ver más
          </motion.a>
        </div>
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default DiseñoWeb;
