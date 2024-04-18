import "./globals.css";
import Navbar from "@/components/Navbar/page";
import { Footer } from "@/components/Footer/page";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Enzo Joves",
  description: "Puedes contratar mis servicios u comprar algún producto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`bg-BG-1 ${roboto.className}`}>
        <div className="mt-16">
          <header>
            <Navbar />
          </header>
          <main className="bg-BG-1">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
