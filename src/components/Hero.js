import React from "react";
import heroImg from "../assets/fitness-hero.jpg";
import "./../styles.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Entrena, controla y mejora tu cuerpo con Kynetic Fit</h1>
        <p className="hero-subtitle">
          La app que te ayuda a organizar rutinas, registrar comidas y ver tu progreso.
        </p>

        <button className="btn-download">Descargar</button>
      </div>
    </section>
  );
}

