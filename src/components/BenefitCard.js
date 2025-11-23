import React from "react";
import "./../styles.css";

export default function BenefitCard({ icon, title, text }) {
  return (
    <div className="benefit-card">
      <img src={icon} alt={title} className="icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
