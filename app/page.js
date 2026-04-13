import Contactar from "@/components/home/Contacto";
import Coor from "@/components/home/Coor";
import CoursesCTA from "@/components/home/CoursesCTA";
import Footer from "@/components/home/Footer";
import HomeWelcome from "@/components/home/HomeWelcome";
import NavBar from "@/components/home/Navbar";

import Profes from "@/components/home/Profes";
export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <HomeWelcome hola={""} />
      <Coor />
      <Profes />
      {/* <CoursesCTA /> */}
      <Contactar />
      <Footer />
    </main>
  );
}
