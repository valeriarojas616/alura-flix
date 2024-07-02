import './Header.css';
import React, { useState } from "react";
import BotonNuevoVideo from '../BotonNuevoVideo/BotonNuevoVideo';
import FormularioPost from '../FormularioPost/FormularioPost';

//header va a recibir las props que le pasamos por medio de 'datos'
function Header(props){

    const[videos, setVideos]= useState([]);

    const registrarVideo = (video)=>{
        console.log(video);
        //Spread operator
        setVideos([...videos, video])
    }  

    const [mostrarFormulario, actualizarMostrar] = useState(false);
  
    const cambiarMostrar = ()=>{
      actualizarMostrar(!mostrarFormulario);
    }

    return <div><header className='header'>
        <img className='logo' src="/img/aluraflix-logo.png" alt='AluraFlix'/>
        <div className='seccion-buttons'>
            
            <BotonNuevoVideo mostrarFormulario={mostrarFormulario} cambiarMostrar={cambiarMostrar}/>

        </div>
    </header> 
    {
        //props.datos hace referencia al arreglo categorias por lo que hacemos map para tomar los datos del arreglo y capturar solo el titulo
    }
    {
    mostrarFormulario === true ? 
    <FormularioPost 
    categorias={props.datos.map((categoria) => categoria.titulo)}
    registrarVideo={registrarVideo}
    />: <div></div>
    }
    </div>
}

export default Header;