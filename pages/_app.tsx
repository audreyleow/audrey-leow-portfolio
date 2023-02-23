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
      <div className="root-container">
        <Navbar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
