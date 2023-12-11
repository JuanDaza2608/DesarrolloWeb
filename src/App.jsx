import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CiudadPrincipal from './components/CiudadPrincipal.jsx'
import Titulo from './components/Titulo.jsx'
import Busqueda from './components/Busqueda.jsx'

function App() {

  return (
    <div className='App'>
        <div className='App-header'>
          <Titulo />
        
        </div>
        <div className='App-body'>
          <CiudadPrincipal
            nombreCiudad = 'Tunja'
            temperatura = '20'
            descripcion = 'Parcialmente nublado'
            imagen = 'https://acortar.link/eJ66kM'
          />
          <CiudadPrincipal
            nombreCiudad = 'Cali'
            temperatura = '20'
            descripcion = 'Parcialmente nublado'
            imagen = 'https://acortar.link/AqBDxm'
          />
          <CiudadPrincipal
            nombreCiudad = 'Bogota'
            temperatura = '20'
              descripcion = 'Parcialmente nublado'
              imagen = 'https://acortar.link/bezOf8'
            />
            <CiudadPrincipal
              nombreCiudad = 'Medellin'
              temperatura = '20'
              descripcion = 'Parcialmente nublado'
              imagen = 'https://acortar.link/DEkT84'
            />
          </div> 
          <div className= "App-busqueda" >
            <Busqueda />
          </div>
    
    </div>  
  )
}

export default App
