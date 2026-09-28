"use client";

import React, { useCallback, useMemo, useState } from "react";
import "../styles/_profes.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { CustomNextArrow } from "./CustomNextArrow";
import { CustomPrevArrow } from "./CustomPrevArrow";
import ProfessionalModal from "./ProfessionalModal";
import ProfessionalPhoto from "./ProfessionalPhoto";
import { professionals } from "./teamData";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 900,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 4 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
  ],
};

function ProfessionalCard({ professional, onSeeMore }) {
  return (
    <div className="profesional">
      <div className="card">
        <div className="professional-image-wrapper">
          <ProfessionalPhoto
            professional={professional}
            className="professional-image"
          />
        </div>

        <p className="name">{professional.name}</p>
        <p className={"number" + (professional.number ? "" : " number-empty")}>
          {professional.number || "\u00A0"}
        </p>

        <button
          type="button"
          className="see-more"
          onClick={() => onSeeMore(professional)}
          aria-label={"Ver más sobre " + professional.name}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

function Profesionales() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const [firstRow, secondRow] = useMemo(
    () => [professionals.slice(0, 17), professionals.slice(17)],
    []
  );

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
        {firstRow.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            onSeeMore={setSelected}
          />
        ))}
      </Slider>

      <Slider className="elSlider" {...settings}>
        {secondRow.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            onSeeMore={setSelected}
          />
        ))}
      </Slider>

      <ProfessionalModal professional={selected} onClose={closeModal} />
    </div>
  );
}

export default Profesionales;
