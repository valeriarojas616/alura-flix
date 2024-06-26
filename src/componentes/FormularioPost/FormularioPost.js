import "./FormularioPost.css";
import CampoTextoPost from '../CampoTextoPost/CampoTextoPost';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ListaOpcionesPost from "../ListaOpcionesPost/ListaOpcionesPost";
import Textarea from "../Textarea/Textarea";

const FormularioPost = ()=>{
    return <seccion className="section-form-post">
        <form className="form-body">
            <h2 className="form-title">Crear Tarjeta</h2>
            <CampoTextoPost label="Título" placeholderpost="Título del video"/>
            <ListaOpcionesPost />
            <CampoTextoPost label="Imagen" placeholderpost="Ingresa el enlace a la imagen"/>
            <CampoTextoPost label="Video" placeholderpost="Ingrese el enlace del video"/>
            <Textarea/>
        </form>
    </seccion>
}

export default FormularioPost;