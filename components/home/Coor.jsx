import React from "react";
import "../styles/_coord.scss";
import Cara1 from "../../Images/cara1.png";
import Image from "next/image";

function Coor() {
  const coordinadores = [
    {
      name: "Lic. Luciana Conti",
      mn: "M.N. 69515",
      img: "/path/to/image1.jpg",
    },
    {
      name: "Lic. Tatiana Galinsky",
      mn: "M.N. 69655",
      img: "/path/to/image2.jpg",
    },
    {
      name: "Lic. Sol Leibgorin",
      mn: "M.N. 69481",
      img: "/path/to/image3.jpg",
    },
    {
      name: "Lic. Liza MurLender",
      mn: "M.N. 70026",
      img: "/path/to/image4.jpg",
    },
    { name: "Lic. Julieta Pera", mn: "M.N. 68973", img: "/path/to/image5.jpg" },
  ];

  const admisores = [
    {
      name: "Lic. Jesuana Flores",
      mn: "M.N. 44466",
      img: "/path/to/image6.jpg",
    },
    {
      name: "Lic. Francisco Herzberg",
      mn: "M.N. 64321",
      img: "/path/to/image7.jpg",
    },
    {
      name: "Lic. Facundo Lezzi",
      mn: "M.N. 76480",
      img: "/path/to/image8.jpg",
    },
    {
      name: "Lic. Flor Inchauspe",
      mn: "M.N. 66484",
      img: "/path/to/image9.jpg",
    },
    {
      name: "Lic. Camila Larocca",
      mn: "M.N. 72753",
      img: "/path/to/image10.jpg",
    },
    {
      name: "Lic. Brenda Lopatka",
      mn: "M.N. 71964",
      img: "/path/to/image11.jpg",
    },
    {
      name: "Lic. Victoria Núñez",
      mn: "M.N. 59247",
      img: "/path/to/image12.jpg",
    },
    {
      name: "Lic. Verónica Percara",
      mn: "M.N. 67069",
      img: "/path/to/image13.jpg",
    },
    {
      name: "Lic. Micaela Prandi",
      mn: "M.N. 72139",
      img: "/path/to/image14.jpg",
    },
    {
      name: "Lic. Josefina Rueda",
      mn: "M.N. 74790",
      img: "/path/to/image15.jpg",
    },
  ];

  return (
    <section className="coordination">
      <h2 className="coordination-title">
        EQUIPO DE <span>COORDINACIÓN</span>
      </h2>
      <div className="coordination-list horizontal-list">
        {coordinadores.map((member, index) => (
          <div key={index} className="coordination-item">
            <div className="coordination-image-wrapper">
              <img
                src={Cara1}
                alt={`Foto de ${member.name}`}
                className="coordination-image"
              />
            </div>
            <div className="coordination-info">
              <p className="coordination-name">{member.name}</p>
              <p className="coordination-mn">{member.mn}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="coordination-title">
        EQUIPO DE <span>ADMISIONES</span>
      </h2>
      <div className="coordination-list horizontal-list">
        {admisores.map((member, index) => (
          <div key={index} className="coordination-item">
            <div className="coordination-image-wrapper">
              <img
                src={Cara1}
                alt={`Foto de ${member.name}`}
                className="coordination-image"
              />
            </div>
            <div className="coordination-info">
              <p className="coordination-name">{member.name}</p>
              <p className="coordination-mn">{member.mn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coor;
