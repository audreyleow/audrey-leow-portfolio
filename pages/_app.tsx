import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}
