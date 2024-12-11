import BotonFlotante from "@/components/home/BotonFlotante";
import Charlas from "@/components/home/Charlas";
import Contactar from "@/components/home/Contacto";
import Cursos from "@/components/home/Cursos";
import DiseñoWeb from "@/components/home/DiseñoWeb";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import Imagen from "@/components/home/Imagen";
import NavBar from "@/components/home/Navbar";
import Nosotros from "@/components/home/Nosotros";
import Servicios from "@/components/home/Servicios";
import Trabajos from "@/components/home/Trabajos";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <HomeWelcome hola={"3"} />
      {/* <Nosotros /> */}
      <Cursos />
      <Charlas />
      <Contactar />
      {/* <BotonFlotante /> */}
      <Footer />
    </main>
  );
}
