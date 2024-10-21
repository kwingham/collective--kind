import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "../styles/globals.css";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header></Header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
