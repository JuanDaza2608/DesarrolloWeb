import React from 'react';
import '../hojas-de-estilo/CiudadPrincipal.css'

const CiudadPrincipal = (props) => {
    return ( 
      <div className="contenedor-ciudad-principal">
        <img className="imagen-ciudad"
          src = {props.imagen}
          />
        <div className="contenedor-texto-ciudad">
          <p className="nombre-ciudad">
            <strong>{props.nombreCiudad}</strong>
          </p>
          <p className="temperatura-ciudad">
            <strong>{props.temperatura}ºC</strong>
          </p>
          <p className="descripcion-clima">
            <strong>{props.descripcion}</strong>
          </p>
         

        </div>    

      </div>            

     );
}

export default CiudadPrincipal;

