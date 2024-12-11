import BotonFlotante from "@/components/home/BotonFlotante";
import Contactar from "@/components/home/Contacto";
import DiseñoWeb from "@/components/home/DiseñoWeb";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import Imagen from "@/components/home/Imagen";
import NavBar from "@/components/home/Navbar";
import Nosotros from "@/components/home/Nosotros";
import Servicios from "@/components/home/Servicios";
import Terapia from "@/components/home/Terapia";
import Trabajos from "@/components/home/Trabajos";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <HomeWelcome hola={"2"} />
      {/* <Nosotros /> */}
      <Terapia />
      {/* <DiseñoWeb /> */}
      {/* <Imagen /> */}
      {/* <Trabajos /> */}
      <Contactar />
      {/* <BotonFlotante /> */}
      <Footer />
    </main>
  );
}
