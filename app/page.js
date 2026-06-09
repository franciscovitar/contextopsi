import Contactar from "@/components/home/Contacto";
import Coor from "@/components/home/Coor";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import NavBar from "@/components/home/Navbar";
import StatsBar from "@/components/home/StatsBar";
import Testimonios from "@/components/home/Testimonios";
import FAQHome from "@/components/home/FAQHome";
import Profes from "@/components/home/Profes";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <HomeWelcome />
      <StatsBar />
      <Coor />
      <Profes />
      <Testimonios />
      <FAQHome />
      <Contactar />
      <Footer />
    </main>
  );
}
