import React from "react";
import "./../styles.css";

export default function Testimonios() {
  return (
    <section id="testimonios">
      <h2>Testimonios</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <span>Laura M.</span>
          <p>"Kynetic Fit me ayudó a organizar mis rutinas y mantenerme motivada."</p>
        </div>
        <div className="testimonial">
          <span>Carlos R.</span>
          <p>"Registrar mis comidas y calorías nunca fue tan fácil y visual."</p>
        </div>
        <div className="testimonial">
          <span>Ana P.</span>
          <p>"Los videos guía son perfectos, siento que tengo un entrenador personal."</p>
        </div>
        <div className="testimonial">
          <span>Julián H.</span>
          <p>"La app es intuitiva y visualmente atractiva. Mis rutinas y progresos nunca habían sido tan claros."</p>
          </div>
      </div>
    </section>
  );
}
