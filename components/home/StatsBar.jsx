"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_statsbar.scss";

const stats = [
  { number: "+40", label: "Profesionales de la salud mental" },
  { number: "+1.000", label: "Consultas atendidas" },
  { number: "+50", label: "Psicólogxs formadxs" },
  { number: "+5", label: "Años acompañando y formando" },
];

export default function StatsBar() {
  return (
    <section
      className="stats-section"
      aria-label="Estadísticas de Contexto Psi"
    >
      <div className="stats-wrapper">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
