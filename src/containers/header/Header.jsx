import React , { useState }from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/gis.png"


const Header = () => {
  const [tramiteNumber, setTramiteNumber] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleTramiteNumberChange = (e) => {
    setTramiteNumber(e.target.value);
  };
  const handleSeguimientoClick = () => {
    // Construir la URL del servicio web con el número de trámite
    const apiUrl = `http://186.121.246.218:8833/STCService.svc/BUSQUEDATRAMITENRO/${tramiteNumber}`;

    // Realizar la solicitud al servicio web
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Al recibir la respuesta, actualiza el estado con la información del servicio web
        setResponseData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Aquí puedes manejar errores de solicitud si es necesario
      });
  };
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Dirección de Administración Geografica y Catastro</h1>
        <p>Portal instucional para informacion de diferentes actividades e informacion catastral del Gobierno Autonomo Municipal de Cochabamba.</p>

        <div className="gpt3__header-content__input">
          <input 
            type="text"
            placeholder="Tu Numero de Tramite"
            value={tramiteNumber}
            onChange={handleTramiteNumberChange}
             />
          <button type="button" onClick={handleSeguimientoClick}>
            Seguimiento
            </button>
            {responseData && (
        <div>
          <h2>Resultado del Seguimiento</h2>
          <ul>
            <li><strong>Comuna:</strong> {responseData.COMUNA}</li>
            <li><strong>Error:</strong> {responseData.ERROR}</li>
            <li><strong>Fecha de Ingreso:</strong> {responseData.FECHAINGRESO}</li>
            <li><strong>Fecha de Salida:</strong> {responseData.FECHASALIDA}</li>
            <li><strong>Gestión del Trámite:</strong> {responseData.GESTIONTRAMITE}</li>
            <li><strong>Mensaje:</strong> {responseData.MENSAJE}</li>
            <li><strong>Motivo:</strong> {responseData.MOTIVO}</li>
            <li><strong>Número de Trámite:</strong> {responseData.NROTRAMITE}</li>
            <li><strong>Unidad de Destino:</strong> {responseData.UNIDADDESTNO}</li>
            <li><strong>Unidad de Origen:</strong> {responseData.UNIDADORIGEN}</li>
          </ul>
        </div>
      )}
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