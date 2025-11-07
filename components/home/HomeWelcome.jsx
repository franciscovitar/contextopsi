"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoEquipo from "../../Images/image.jpeg";
import "../styles/_homewelcome.scss";

export default function HomeWelcome() {
  return (
    <section id="inicio" className="home-container">
      {/* Texto */}
      <motion.div
        className="home-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Contexto.Psi</h1>
        <p>
          Equipo de Salud Mental con perspectiva de género y de derechos.
          Atención psicológica para todas las edades. Presencial en Buenos Aires
          y virtual en todo el mundo. Conformado por psicólogxs, psiquiatras y
          nutricionistas con distintas corrientes teóricas.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="home-image"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={FotoEquipo}
          alt="Equipo de Contexto Psi"
          className="foto-equipo"
          priority
        />
      </motion.div>
    </section>
  );
}
