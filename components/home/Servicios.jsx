"use client";

import React from "react";
import "../styles/_servicios.scss";

import { motion } from "framer-motion";
import Img1 from "../../Images/img1.jpg";
import Img2 from "../../Images/img2.jpg";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileHover: { scale: 1.03, transition: { duration: 0.3 } },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const titleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 60, transition: { duration: 0.5, delay: 0.5 } },
};

function Servicios() {
  return (
    <div id="servicios" className="servicios-container">
      <div className="titulo">
        <motion.h2 {...titleVariants}>Capacitación</motion.h2>
        <motion.div {...lineVariants} className="line m-auto mt-3"></motion.div>
        {/* <motion.p {...titleVariants}>
          En nuestro consultorio, nos dedicamos a mejorar tu salud mental y
          bienestar emocional. Utilizamos técnicas especializadas para ayudarte
          a optimizar tus recursos internos, mejorar tu organización personal y
          promover una vida emocional estable y satisfactoria.
        </motion.p> */}
      </div>
      <div className="servicios">
        <motion.div {...textVariants} className="servicio">
          <Link
            target="blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTeZZIqc7Lvx21O75PuFhveEZCqkYF0HAomGdKznaLKlYSOg/viewform?usp=send_form"
          >
            <Image src={Img1} />
          </Link>
        </motion.div>
        <motion.div {...textVariants} className="servicio">
          <Link
            target="blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQA1HQSMSjSe5YM05OB-Ei6bhT1TLSTiY_hgkmcVpfOYhy_g/viewform"
          >
            <Image src={Img2} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Servicios;
