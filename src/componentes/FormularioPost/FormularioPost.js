import React, { useState } from 'react';
import "./FormularioPost.css";
import CampoTextoPost from '../CampoTextoPost/CampoTextoPost';
import ListaOpcionesPost from "../ListaOpcionesPost/ListaOpcionesPost";
import Textarea from "../Textarea/Textarea";
import BotonPost from "../BotonPost/BotonPost";
import Footer from "../Footer/Footer";

const FormularioPost = ()=>{

    const[titulo, setTitulo] = useState('');
    const[categoriaVid, setCategoriaVid] =useState('');
    const[imgVideo, setImgVideo] = useState('');
    const[urlVideo, setUrlVideo] = useState('');
    const[descripcionVideo, setDescripcionVideo] = useState('');
    

    const ManejarEnvio = (event)=>{
        event.preventDefault();
        let datosEnviar = {
            titulo: titulo,
            cateroria: categoriaVid,
            imagen: imgVideo,
            video: urlVideo
        }
        console.log(datosEnviar)
    }

    return <div><seccion className="section-form-post">
        <form onSubmit={ManejarEnvio} className="form-body">
            <h2 className="form-title">Crear Tarjeta</h2>
            <CampoTextoPost 
            label="Título" 
            placeholderpost="Título del video" 
            required valor={titulo} 
            actualizarValor={setTitulo}/>

            <ListaOpcionesPost 
            required 
            valor={categoriaVid} 
            actualizarValor={setCategoriaVid}
            />

            <CampoTextoPost 
            label="Imagen" 
            placeholderpost="Ingresa el enlace a la imagen" 
            required valor={imgVideo} 
            actualizarValor={setImgVideo}/>

            <CampoTextoPost 
            label="Video" 
            placeholderpost="Ingrese el enlace del video" 
            required valor={urlVideo} 
            actualizarValor={setUrlVideo}/>

            <Textarea 
            valor={descripcionVideo}
            actualizarValor={setDescripcionVideo}
            />
            <BotonPost/>
        </form>
    </seccion>
    <Footer/>
    </div>
}

export default FormularioPost;