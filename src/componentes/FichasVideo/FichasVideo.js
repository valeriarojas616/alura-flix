import React, { useState } from "react";
import BotonBorrar from "../BotonBorrar/BotonBorrar";
import './FichasVideo.css'
import BotonEditar from "../BotonEditar/BotonEditar";
import EditarForm from "../EditarForm/EditarForm";

function FichasVideo(props) {

  const {color} = props;

  const [fichaVisible, borrarFicha] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [datos, setDatos] = useState(props.datos);

  const mostrarEditar = ()=>{
    setEditMode(!editMode);
  }

  const guardarCambios = (nuevosDatos)=>{
    setDatos(nuevosDatos);
    setEditMode(false);
  }

    const borrarVideo = ()=>{
      borrarFicha(false);
    }
    if(!fichaVisible){
      return null
    }


    return (
      <div className='vid-1' style={{borderColor: color}}>
        {editMode? (
          <EditarForm
          datos={datos}
          save={guardarCambios}
          cancel={mostrarEditar}
          />
        ) : (
          <>
          <h3 className='title-video'>{datos.titulo}</h3>
          <img className='image-video' src={datos.imagen} alt="Video thumbnail" style={{borderColor: color}}/>
          <p className='descripcion-video'>
            {datos.descripcion}
            <div className='borrar-editar'>
              <BotonBorrar borrarVideo={borrarVideo}/>
              <BotonEditar 
              mostrarEditar={mostrarEditar}
              />    
            </div>
          </p>
          </>
        )}
      </div>
    );
  }
  
  export default FichasVideo;