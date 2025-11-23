import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonios from "./components/Testimonios";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonios />
        <DownloadSection />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
