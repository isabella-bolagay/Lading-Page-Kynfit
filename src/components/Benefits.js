import React from "react";
import BenefitCard from "./BenefitCard";
import iconRutina from "../assets/icon-rutina.png";
import iconComida from "../assets/icon-comida.png";
import iconVideo from "../assets/icon-video.png";
import iconProgreso from "../assets/icon-progreso.png";
import "./../styles.css";

export default function Benefits() {
  return (
    <section id="beneficios">
      <h2>Beneficios de Kynetic Fit</h2>
      <div className="benefits-container">
        <BenefitCard
          icon={iconRutina}
          title="Rutinas Personalizadas"
          text="Crea rutinas adaptadas a tu nivel, objetivos y horarios."
        />
        <BenefitCard
          icon={iconComida}
          title="Registro de Comidas"
          text="Lleva el control de tus comidas y calorías fácilmente."
        />
        <BenefitCard
          icon={iconVideo}
          title="Videos Guía"
          text="Aprende con videos explicativos y ejercicios correctos."
        />
        <BenefitCard
          icon={iconProgreso}
          title="Progreso Visual"
          text="Revisa tus avances y motivación día a día."
        />
      </div>
    </section>
  );
}
