import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingDemoButton from "../components/FloatingDemoButton";

export const metadata = {
  title: "English Flight",
  description: "Practical English classes to help you speak with confidence",
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