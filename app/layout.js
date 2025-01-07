import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToastProvider from "@/providers/toast-provider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Contexto.Psi",
  description:
    "En nuestro consultorio psicológico, nos dedicamos a mejorar tu salud mental y bienestar emocional. Ofrecemos servicios personalizados para abordar tus desafíos emocionales, planificar tu bienestar y asegurar una vida emocional equilibrada. Descubre cómo podemos ayudarte hoy mismo.",
  keywords: [
    "psicología",
    "terapia",
    "bienestar emocional",
    "salud mental",
    "asesoramiento psicológico",
    "terapia de pareja",
    "planificación de bienestar",
    "optimización personal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.contextopsi.com.ar/" />
        <meta
          name="google-site-verification"
          content="tXvxNaotVebTLTGxkRpbWFg9X2UG8QyQ7VTjIAtuVhk"
        />
      </head>
      <body translate="no" className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
