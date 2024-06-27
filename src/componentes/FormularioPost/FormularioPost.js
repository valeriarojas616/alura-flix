import "./FormularioPost.css";
import CampoTextoPost from '../CampoTextoPost/CampoTextoPost';
import ListaOpcionesPost from "../ListaOpcionesPost/ListaOpcionesPost";
import Textarea from "../Textarea/Textarea";
import BotonPost from "../BotonPost/BotonPost";
import Footer from "../Footer/Footer";

const FormularioPost = ()=>{

    const ManejarEnvio = (event)=>{
        event.preventDefault();
        console.log("envio");
    }

    return <div><seccion className="section-form-post">
        <form onSubmit={ManejarEnvio} className="form-body">
            <h2 className="form-title">Crear Tarjeta</h2>
            <CampoTextoPost label="Título" placeholderpost="Título del video" required/>
            <ListaOpcionesPost required/>
            <CampoTextoPost label="Imagen" placeholderpost="Ingresa el enlace a la imagen" required/>
            <CampoTextoPost label="Video" placeholderpost="Ingrese el enlace del video" required/>
            <Textarea/>
            <BotonPost/>
        </form>
    </seccion>
    <Footer/>
    </div>
}

export default FormularioPost;