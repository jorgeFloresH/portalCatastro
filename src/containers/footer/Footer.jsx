import React from 'react'
import "./footer.css"
import logoUrl from "../../assets/logoGamc.png"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      {/* <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div> */}
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
          <p>Gobierno Autónomo Municipal de Cochabamba, Derechos Reservados</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Portal Cochabamba</p>
          <p>Simat</p>
          <p>Innova</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contactanos</h4>
          <p>CALLE SUCRE Nº451 EDF. EX CÁMARA DE COMERCIO</p>
          <p>591-4444444</p>
          <p>catastro@cochabamba.bo</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        ©2023 Gobierno Autónomo Municipal de Cochabamba. Derechos Reservados.
      </div>
    </div>
  )
}

export default Footer