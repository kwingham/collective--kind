import { ReactNode } from "react";
import "../styles/globals.css";

interface PageProps {
  children: ReactNode;
}

const Page = () => {
  return <h1>Howzit home</h1>;
};

export default Page;
