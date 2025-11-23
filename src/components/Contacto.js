import React from "react";
import "./../styles.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contact-section">
      <h2 className="section-title">Contacto</h2>
      <p className="section-subtitle">
        ¿Tienes dudas o sugerencias? ¡Escríbenos!
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje" rows="5" required></textarea>
        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </section>
  );
}
