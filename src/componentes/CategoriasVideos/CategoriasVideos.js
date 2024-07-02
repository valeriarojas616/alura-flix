import './CategoriasVideos.css'
import SectionVideos from '../SectionVideos/SectionVideos';

const CategoriasVideos = (props)=>{
    //almacenamos los valores del objeto 'categoria' que hemos creado como parametro que recibe la funcion categorias.map
    const {color, titulo} = props.datos;


    return <section className="categorias-videos">
        {//hacemos uso de nuestras variables color y titulo
        }
        <h3 className='titulo-categoria' style={{backgroundColor: color}}>{titulo}</h3>
        <div className="linea-videos-seccion">
            <SectionVideos/>
        </div>
    </section>
}

export default CategoriasVideos;