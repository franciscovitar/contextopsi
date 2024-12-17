"use client";

import "../styles/_trabajo.scss";
import React from "react";
import { motion } from "framer-motion";

import Slider from "react-slick";
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
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const trabajos = [
  {
    img: "",
    link: "https://www.rdnutricion.com.ar/",
  },

  {
    img: "",
    link: "https://wandacuadrado.genovasite.com/",
  },

  {
    img: "",
    link: "https://www.esteticabelgranocm.com/",
  },
  {
    img: "",
    link: "https://www.nomadecircular.com/",
  },
  {
    img: "",
    link: "https://clinicadelalma.genovasite.com/",
  },
  {
    img: "",
    link: "https://madibienestar.com/",
  },
  {
    img: "",
    link: "https://pelos-house.vercel.app/",
  },
];
function Trabajos() {
  return (
    <div id="opiniones" className="contenedor-principal-Trabajos">
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
          Opiniones
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
      </div>
      <Slider className="elSlider" {...settings}>
        {trabajos.map((trabajo, index) => (
          <div key={index} className="trabajos">
            <div className="trabajo">
              {" "}
              <p>
                - &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. &quot;
              </p>
              <div className="npmyest">
                <div className="estrellas">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h4> &quot;Nombre&quot;</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Trabajos;
