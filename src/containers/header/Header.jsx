import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/gis.png"

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Dirección de Administración Geografica y Catastro</h1>
        <p>Portal instucional para informacion de diferentes actividades e informacion catastral del Gobierno Autonomo Municipal de Cochabamba.</p>

        <div className="gpt3__header-content__input">
          <input type="number" placeholder="Tu Numero de Tramite" />
          <button type="button">Seguimiento</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 personas realizaron consulta las ultimas 24 horas</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header