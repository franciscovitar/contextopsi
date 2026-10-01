import { Poppins } from "next/font/google";
import Script from "next/script";
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
  title: "Terapia con perspectiva de género, virtual o presencial en Buenos Aires",
  description:
    "Salud mental con perspectiva de género y de derechos. Terapia presencial en Buenos Aires y virtual en todo el mundo, con equipo multidisciplinario de psicólogxs, psiquiatras y nutricionistas.",
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
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.contextopsi.com.ar/" />
        <meta
          name="google-site-verification"
          content="tXvxNaotVebTLTGxkRpbWFg9X2UG8QyQ7VTjIAtuVhk"
        />
        <meta
          name="google-site-verification"
          content="sogKM6F3fY7Uu74dMm2pov93awShuAMhX1BxEV0PFDQ"
        />
      </head>
      <body translate="no" className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X0PWPMDFLH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X0PWPMDFLH');
          `}
        </Script>

        <ToastProvider />
        {children}
      </body>
    </html>
  );
}