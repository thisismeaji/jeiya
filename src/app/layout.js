import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Darumadrop_One } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { SubscribeProvider } from "@/app/context/SubscribeContext";
import { Poppins } from "next/font/google";

const darumadropOne = Darumadrop_One({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400", "600", "700"], // Pilih bobot font yang diinginkan
  variable: "--font-poppins", // Gunakan variabel CSS untuk styling
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={darumadropOne.className}>
        <SubscribeProvider>
          <header>
            <Navigation />
          </header>
          {children}
          <Footer />
        </SubscribeProvider>
      </body>
    </html>
  );
}
