"use client";

import Image from "next/image";

function ProfessionalPhoto({ professional, className = "" }) {
  if (professional.photo) {
    return (
      <Image
        src={professional.photo}
        alt={"Foto de " + professional.name}
        width={400}
        height={400}
        className={className}
        style={{ objectPosition: professional.photoObjectPosition || "center 35%" }}
      />
    );
  }

  if (professional.img) {
    return (
      <Image
        src={professional.img}
        alt={"Foto de " + professional.name}
        className={className}
      />
    );
  }

  return null;
}

export default ProfessionalPhoto;