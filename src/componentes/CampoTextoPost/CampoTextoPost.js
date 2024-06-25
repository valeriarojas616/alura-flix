import "./CampoTextoPost.css"

const CampoTextoPost = (props)=>{
    console.log("Datos: ", props);
    return <div className="campo-texto-post">
        <label className="campo-texto-label">{props.label}</label>
        <input className="campo-texto-input" placeholder="Título del video"></input>
    </div>
}
export default CampoTextoPost;