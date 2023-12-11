import React from "react";
import { useState } from "react";


const Busqueda = () => {
  const [search, setSearch] = useState('');

    return ( 
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Digite la ciudad</h1>
            <input className="form-control me-8"
            type = 'text' name = 'search' placeholder="Ingrese la ciudad"></input>
            <button
              className= "btn btn-success" 
              type = "button"> 
              Buscar
            </button>
            <i className="fas fa-search me-1"></i>
        </div>  
      </nav>

    );
}
 
export default Busqueda;