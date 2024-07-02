import React, { useState } from "react";
import BotonBorrar from "../BotonBorrar/BotonBorrar";
import './FichasVideo.css'

function FichasVideo() {

  const [fichaVisible, borrarFicha] = useState(true);

    const borrarVideo = ()=>{
      borrarFicha(false);
    }
    if(!fichaVisible){
      return null
    }


    return (
      <div className='vid-1'>
        <h3 className='title-video'>titulo</h3>
        <img className='image-video' src='./img/ejemplo-video.jpg' alt="Video thumbnail" />
        <p className='descripcion-video'>
          27 mil visualizaciones
          <div className='borrar-editar'>
            <BotonBorrar borrarVideo={borrarVideo}/>
            <input className='buttons edit-button' type='button' value='Editar' />
          </div>
        </p>
      </div>
    );
  }
  
  export default FichasVideo;