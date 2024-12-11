"use client";

import React from "react";
import "../styles/_botonFlotante.scss";
import { motion } from "framer-motion";
import Image from "next/image";

// Constantes para efectos de Framer Motion
const buttonVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  whileHover: { scale: 1.1 },
};

function BotonFlotante() {
  return (
    <div className="btn-flotante">
      <motion.a
        {...buttonVariants}
        // href="https://wa.me/5493517554192"
        target="blank"
        className="boton-wsp"
        title="whatsapp"
      >
        <i className="bi bi-whatsapp"></i>
      </motion.a>
    </div>
  );
}

export default BotonFlotante;
