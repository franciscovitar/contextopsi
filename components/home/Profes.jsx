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
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 1 },
    },
  ],
};

const professionals = [
  { name: "Lic. Florencia Alvarez", number: "M.N. 76412" },
  { name: "Lic. Melina Alvite", number: "M.N. 68498" },
  { name: "Lic. Luciana Arcastti", number: "M.N. 70106" },
  { name: "Lic. Malén Arinovich", number: "M.N. 68399" },
  { name: "Lic. Julieta Arriola", number: "M.N. 65610" },
  { name: "Lic. Magalí Bergera", number: "M.N. 63302" },
  { name: "Lic. Stefanía Carancini", number: "M.N. 71160" },
  { name: "Lic. Lucía Couchet", number: "M.N. 68135" },
  { name: "Lic. Rocío Díaz", number: "M.P. 14758" },
  { name: "Lic. Mariana Fanello", number: "M.N. 68349" },
  { name: "Lic. Ayelén Figueroa", number: "M.N. 78373" },
  { name: "Lic. Jesuana Flores", number: "M.N. 44466" },
  { name: "Lic. Silvia Ferreyra", number: "M.N. 55280" },
  { name: "Lic. Romina Fontanella", number: "M.N. 66563" },
  { name: "Lic. Daiana Gherscovici", number: "M.N. 70180" },
  { name: "Lic. Jazmín Groszmann", number: "M.N. 76435" },
  { name: "Lic. Jimena Guerrero", number: "M.N. 62708" },
  { name: "Lic. Gisel Hansen", number: "M.N. 64816" },
  { name: "Lic. Vanesa Hernández", number: "M.N. 70059" },
  { name: "Lic. Francisco Herzberg", number: "M.N. 64321" },
  { name: "Lic. Facundo Lezzi", number: "M.N. 76480" },
  { name: "Lic. Noemí Iglesias", number: "M.N. 67901" },
  { name: "Lic. Florencia Inchauspe", number: "M.N. 66484" },
];

const professionals2 = [
  { name: "Lic. Bárbara Ini", number: "M.N. 70215" },
  { name: "Lic. Camila Larocca", number: "M.N. 72753" },
  { name: "Lic. Lucila Lavagnino", number: "M.N. 78314" },
  { name: "Lic. Florencia Lera", number: "M.N. 70161" },
  { name: "Lic. Natalí Lipski", number: "M.N. 72467" },
  { name: "Lic. Brenda Lopatka", number: "M.N. 71964" },
  { name: "Lic. Daniela Lopez", number: "M.N. 53724" },
  { name: "Lic. Lucía Moavro", number: "M.N. 68467" },
  { name: "Lic. Victoria Nuñez", number: "M.N. 59247" },
  { name: "Lic. Verónica Percara", number: "M.N. 67069" },
  { name: "Lic. Micaela Prandi", number: "M.N. 72139" },
  { name: "Lic. Julieta Rosenzvit", number: "M.N. 69903" },
  { name: "Lic. Josefina Rueda", number: "M.N. 74790" },
  { name: "Lic. Sofía Segal", number: "M.N. 82002" },
  { name: "Lic. Florencia Sosa", number: "M.N. 68380" },
  { name: "Lic. Patricia Sosa", number: "M.N. 70123" },
  { name: "Lic. Marcos Speranza", number: "M.N. 70123" },
  { name: "Lic. Vico Tela", number: "M.N. 75564" },
  { name: "Dra. Mariana Cabanillas", number: "M.N. 149494" },
  { name: "Dra. Alicia de Marchi", number: "M.N. 179772" },
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
