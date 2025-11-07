import Contactar from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/Navbar";
import CursoInicios from "@/components/home/CursoInicios";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      {/* <HomeWelcome hola={"3"} />s */}
      <CursoInicios />
      <Contactar />
      <Footer />
    </main>
  );
}
