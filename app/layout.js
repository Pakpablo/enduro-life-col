import { Barlow } from "next/font/google";
import localFont from "next/font/local";
import { StoreProvider } from "@/components/StoreProvider";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const trackdrift = localFont({
  src: "../public/assets/fonts/trackdrift-regular.ttf",
  variable: "--font-trackdrift",
  display: "swap",
});

export const metadata = {
  title: "Enduro Life Colombia | Marketplace y Comunidad de Enduro",
  description:
    "Marketplace y comunidad de enduro, motocross y offroad en Colombia. Equipamiento, repuestos y motos de las mejores marcas, eventos y grupo de WhatsApp.",
  openGraph: {
    title: "Enduro Life Colombia",
    description: "La mejor vida se vive sobre dos ruedas. Marketplace y comunidad de enduro en Colombia.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${barlow.variable} ${trackdrift.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
