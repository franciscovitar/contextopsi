"use client";

import Image from "next/image";

const SPRITE_COLUMNS = 7;

function getSpriteStyle(photoPosition) {
  const x = photoPosition?.x ?? 0;
  const y = photoPosition?.y ?? 0;

  return {
    backgroundImage: "url(/professionals/row-" + y + ".svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: SPRITE_COLUMNS * 100 + "% 100%",
    backgroundPosition:
      (SPRITE_COLUMNS === 1 ? 0 : (x / (SPRITE_COLUMNS - 1)) * 100) +
      "% center",
  };
}

function ProfessionalPhoto({ professional, className = "" }) {
  if (professional.img) {
    return (
      <Image
        src={professional.img}
        alt={"Foto de " + professional.name}
        className={className}
      />
    );
  }

  return (
    <div
      className={className}
      style={getSpriteStyle(professional.photoPosition)}
      role="img"
      aria-label={"Foto de " + professional.name}
    />
  );
}

export default ProfessionalPhoto;
