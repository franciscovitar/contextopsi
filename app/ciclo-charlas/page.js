import Capacitaciones from "@/components/home/Capacitaciones";
import Charlas from "@/components/home/Charlas";
import Contactar from "@/components/home/Contacto";
import Cursos from "@/components/home/Cursos";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import NavBar from "@/components/home/Navbar";
import CicloCharlas from "@/components/home/CicloCharlas";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <CicloCharlas />
      <Contactar />
      <Footer />
    </main>
  );
}
