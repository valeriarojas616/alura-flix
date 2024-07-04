import FichasVideo from '../FichasVideo/FichasVideo';
import './SectionVideos.css'

//importamos las propiedades que vienen de categoriasvideo.js que a su vez viene de app.js
function SectionVideos(props) {
  //capturamos la propiedad que le pasamos desde CategoriasVideos.js
  const { videos, color } = props;

  return (
      <div className='section'>
        <section className='fichas-video'>
          {
            //hacemos un nuevo arreglo con la prop videos para que cada que reciba un nuevo arreglo cree una ficha
            //index es la posicion del video
            videos.map((video, index)=> <FichasVideo color={color} key={index} datos={video}/>)
          }
        </section>
      </div>
  );
}

export default SectionVideos;