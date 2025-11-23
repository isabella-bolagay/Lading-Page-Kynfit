import React from "react";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";
import "./../styles.css";

export default function DownloadSection() {
  return (
    <section id="descarga">
      <div className="download-container">
        <h2>Descarga la App</h2>
        <p>Disponible en App Store y Google Play</p>

        <button className="download-button">Descargar App</button>

        <div className="store-buttons">
          {/* APP STORE */}
          <img 
            src={appStore} 
            alt="App Store" 
            className="store-icon-apple"
          />

          {/* GOOGLE PLAY */}
          <img 
            src={playStore} 
            alt="Google Play" 
            className="store-icon-play"
          />
        </div>
      </div>
    </section>
  );
}
