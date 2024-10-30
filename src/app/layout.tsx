import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
