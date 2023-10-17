import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const featuresData = [
  {
    title: "Certificado Catastral.",
    text: "Documento mediante el cual el Gobierno Municipal certifica el registro catastral de un inmueble, al que se le tiene asignado un Código Catastral y en cuyo registro se tiene los datos técnicos, tributarios y legales del inmueble."
  },
  {
    title: "Actualizacion de datos Tecnicos",
    text: "Actualizacion de datos consignados en el registro catastral."
  },
  {
    title: "Certificaciones",
    text: "Documentos que acreditan los datos físicos, jurídicos y económicos de lo bienes inmuebles que constan en el Catastro Inmobiliario, o bien la inexistencia de tales datos."
  },
  {
    title: "Legalizaciones",
    text: "Copia o fotocopia legalizada expresa la obtención de una copia fiel de los documentos originales que cursan en los archivos."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Los tramites que realizamos en la Dirección de Admisnistración Geográfica y Catrastro son:</h1>
        {/* <p>Request Early Access to Get Started</p> */}
      </div>
      <div className="gpt3__features-container">
        <div>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Features