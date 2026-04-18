import "./globals.css";

// A @ helyett próbáld meg relatív útvonallal (két pont visszalépést jelent):
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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