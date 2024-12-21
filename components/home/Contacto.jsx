"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_contacto.scss";
import Image from "next/image";
import Logo from "../../Images/logo.jpeg";

function Contacto() {
  return (
    <div id="contacto" className="contacto-container">
      <div className="contacto">
        <div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            <Image alt="logo" className="logo" src={Logo} />
          </motion.div>
        </div>

        <div>
          <div className="iconos">
            {/* Ícono de Email */}
            <a
              href="mailto:equipo.contextopsi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                className="bi bi-envelope"
              ></motion.i>
            </a>

            {/* Ícono de Instagram */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/contexto.psi"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
                className="bi bi-instagram"
              ></motion.i>
            </a>

            {/* Ícono de Facebook */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100063685473728"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className="bi bi-facebook"
              ></motion.i>
            </a>

            {/* Ícono de LinkedIn */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/contexto-psi/?viewAsMember=true"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="bi bi-linkedin"
              ></motion.i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
