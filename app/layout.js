import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingDemoButton from "../components/FloatingDemoButton";

export const metadata = {
  title: "English Flight (Online Academy)",
  description: "Your flight plan for confident English speaking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FloatingDemoButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}