import React from "react";
import logo from "../assets/logo-kynfit.png";
import "./../styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h2 className="logo">
          <img src={logo} alt="Kynetic Fit" className="logo-img" />
          Kynetic Fit
        </h2>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto" className="ml-4 hover:text-purple-300 transition font-bold">
            Contacto
            </a>
        </nav>
      </div>
    </header>
  );
}
