import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import BannerNav from "@/components/banner/BannerNav";
import Navbar from "@/components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IFIAG Vocational School",
  description: "IFIAG est l’école privée leader de la formation professionnelle supérieure au Maroc depuis 1986",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header>
          <BannerNav />
        </header>
        <Navbar />
        {/* <Navigation/> */}

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
