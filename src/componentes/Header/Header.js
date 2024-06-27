import './Header.css';
import React, { useState } from "react";
import BotonNuevoVideo from '../BotonNuevoVideo/BotonNuevoVideo';
import FormularioPost from '../FormularioPost/FormularioPost';


function Header(){

    const [mostrarFormulario, actualizarMostrar] = useState(false);
  
    const cambiarMostrar = ()=>{
      actualizarMostrar(!mostrarFormulario);
    }

    return <div><header className='header'>
        <img className='logo' src="/img/aluraflix-logo.png" alt='AluraFlix'/>
        <div className='seccion-buttons'>
            <a className='home-href' href='./App.js'><button className='home-button' action='App.js'>HOME</button></a>
            
            <BotonNuevoVideo cambiarMostrar={cambiarMostrar}/>

        </div>
    </header> 
    {mostrarFormulario === true ? <FormularioPost/>: <div></div>}
    </div>
}

export default Header;