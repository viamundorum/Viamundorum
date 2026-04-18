import "./globals.css";

// A @ helyett próbáld meg relatív útvonallal (két pont visszalépést jelent):
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Via Mundorum",
  description: "Tanulás világokon keresztül",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}