import './CategoriasVideos.css'
import SectionVideos from '../SectionVideos/SectionVideos';

const CategoriasVideos = (props)=>{
    //almacenamos los valores del objeto 'categoria' que hemos creado como parametro que recibe la funcion categorias.map declarado en app.js
    const {color, titulo} = props.datos;

    // retornamos una etiqueta vacia 
    
    return <>
        {   //si hay mas de 0 videos en el arreglo se mostrara la categoria
            props.videos.length > 0 && 
            <section className="categorias-videos">
                {//hacemos uso de nuestras variables color y titulo
                }
                <h3 className='titulo-categoria' style={{backgroundColor: color}}>{titulo}</h3>
                <div className="linea-videos-seccion">
                    {//le mandamos la propiedad del arreglo videos a SectionVideo.js
                    }
                    <SectionVideos color={color} videos={props.videos}/>
                </div>
            </section>
        }
    </>
}

export default CategoriasVideos;