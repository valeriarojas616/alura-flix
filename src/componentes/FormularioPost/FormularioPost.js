import "./FormularioPost.css";
import CampoTextoPost from "../CampoTextoPost/CampoTextoPost";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormularioPost = ()=>{
    return <seccion className="section-form-post">
        <form className="form-body">
            <h2 className="form-title">Crear Tarjeta</h2>
            <CampoTextoPost label="Título" placeholder="Título del video"/>
            <CampoTextoPost label="Imagen" placeholder="Ingresa el enlace a la imagen"/>
            <CampoTextoPost label="Video" placeholder="Ingrese el enlace del video"/>
        </form>
    </seccion>
}

export default FormularioPost;