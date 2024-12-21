import BotonFlotante from "@/components/home/BotonFlotante";
import Contactar from "@/components/home/Contacto";
import Coor from "@/components/home/Coor";
import DiseñoWeb from "@/components/home/DiseñoWeb";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import Imagen from "@/components/home/Imagen";
import NavBar from "@/components/home/Navbar";
import Nosotros from "@/components/home/Nosotros";
import Profes from "@/components/home/Profes";
import Servicios from "@/components/home/Servicios";
import Trabajos from "@/components/home/Trabajos";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <HomeWelcome hola={""} />
      <Nosotros />
      <Coor />
      <Profes />
      <Imagen />
      {/* <Trabajos /> */}
      <Contactar />
      {/* <BotonFlotante /> */}
      <Footer />
    </main>
  );
}
