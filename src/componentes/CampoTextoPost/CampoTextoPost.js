import "./CampoTextoPost.css"

const CampoTextoPost = (props)=>{
    return <div className="campo-texto-post">
        <label className="campo-texto-label">{props.label}</label>
        <input className="campo-texto-input" placeholder={props.placeholderpost}></input>
    </div>
}
export default CampoTextoPost;