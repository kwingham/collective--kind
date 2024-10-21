import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
