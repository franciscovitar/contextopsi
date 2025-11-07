"use client";

import React from "react";
import "../styles/_profes.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { CustomNextArrow } from "./CustomNextArrow";
import { CustomPrevArrow } from "./CustomPrevArrow";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 2 },
    },
  ],
};

const professionals = [
  { name: "Lic. Flor Alvarez", number: "M.N. 76412" },
  { name: "Lic. Luciana Arcastti", number: "M.N. 70106" },
  { name: "Lic. Julieta Arriola", number: "M.N. 65610" },
  { name: "Lic. Magalí Bergera", number: "M.N. 63302" },
  { name: "Lic. Stefanía Carancini", number: "M.N. 71160" },
  { name: "Lic. Rocío Díaz", number: "M.P. 14758" },
  { name: "Lic. Mariana Fanello", number: "M.N. 68349" },
  { name: "Lic. Ayelén Figueroa", number: "M.N. 78373" },
  { name: "Lic. Silvia Ferreyra", number: "M.N. 55280" },
  { name: "Lic. Jazmín Groszmann", number: "M.N. 76435" },
  { name: "Lic. Francisco Herzberg", number: "M.N. 64321" },
  { name: "Lic. Facundo Lezzi", number: "M.N. 76480" },
  { name: "Lic. Flor Inchauspe", number: "M.N. 66484" },
  { name: "Lic. Luciana Zalazar", number: "M.N. 68763" },
  { name: "Lic. Alejandra Teplitzchi", number: "M.N. 65227" },
  { name: "Lic. Antonella Fernandez", number: "M.N. 78322" },
  { name: "Lic. Agustina Zgaib", number: "M.N. 4791" },
  { name: "Lic. Nicolás Parera", number: "M.N. 69818" },
  { name: "Lic. Silvina Acosta", number: "M.N. 69755" },
  { name: "Lic. Camila Gonzalez", number: "M.P. 77405" },
];

const professionals2 = [
  { name: "Lic. Bárbara Ini", number: "M.N. 70215" },
  { name: "Lic. Camila Larocca", number: "M.N. 72753" },
  { name: "Lic. Lucila Lavagnino", number: "M.N. 78314" },
  { name: "Lic. Natalí Lipski", number: "M.N. 72467" },
  { name: "Lic. Brenda Lopatka", number: "M.N. 71964" },
  { name: "Lic. Daniela Ledesma", number: "M.P. 77331" },
  { name: "Lic. Lucía Moavro", number: "M.N. 68467" },
  { name: "Lic. Victoria Nuñez", number: "M.N. 59247" },
  { name: "Lic. Verónica Percara", number: "M.N. 67069" },
  { name: "Lic. Julieta Rosenzvit", number: "M.N. 69903" },
  { name: "Lic. Josefina Rueda", number: "M.N. 74790" },
  { name: "Lic. Sofía Segal", number: "M.N. 82002" },
  { name: "Lic. Patricia Sosa", number: "M.N. 70123" },
  { name: "Dra. Alicia DeMarchi", number: "M.N. 179772" },
  { name: "Dra. Lucía Nosiglia", number: "M.N. 163217" },
  { name: "Dra. Lucía Vendrell", number: "M.N. 172936" },
  { name: "Lic. Magalí Jurnet", number: "M.N. 8250" },
];

function Profesionales() {
  return (
    <div className="contenedor-principal-Profesionales">
      <div className="titulo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          Conocé nuestra red de profesionales
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
      </div>

      <Slider className="elSlider" {...settings}>
        {professionals.map((professional, index) => (
          <div key={index} className="profesional">
            <div className="card">
              <p className="name">{professional.name}</p>
              <p className="number">{professional.number}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Slider className="elSlider" {...settings}>
        {professionals2.map((professional, index) => (
          <div key={index} className="profesional">
            <div className="card">
              <p className="name">{professional.name}</p>
              <p className="number">{professional.number}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Profesionales;
