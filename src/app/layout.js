import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Movieplex",
  description: "Online movie ticket booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
