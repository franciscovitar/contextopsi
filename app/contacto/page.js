import Footer from "@/components/home/Footer";
import FormContacto from "@/components/home/FormContacto";
import NavBar from "@/components/home/Navbar";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <FormContacto />
      <Footer />
    </main>
  );
}
