import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Que es el Catastro Municipal?" text="El catastro es un registro administrativo cuya gestión depende de la Direccion de Administración Geográfica y Catastro. Funciona como un inventario de inmuebles urbanos, características tecnicas, juridicas y economicas." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Catastro Municipal.</h1>
      <p>Documentación</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Caracteristicas Tecnicas" text="Es necesaria para definir ubicación y dimensiones de cada predio" />
      <Feature title="Caracteristicas Legales" text="Permite relacionarla con el titular de derecho de propiedad o poseedor ." />
      <Feature title="Caracteristicas Economicas" text="Se da a través del valor, determinado o asignado, pero único." />
    </div>
  </div>
);

export default WhatGPT3;