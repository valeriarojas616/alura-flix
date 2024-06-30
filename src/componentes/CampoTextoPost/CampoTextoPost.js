import "./CampoTextoPost.css"

const CampoTextoPost = (props)=>{


        //event.target.value para retomar inputs

    const recibirValor = (event)=>{
        props.actualizarValor(event.target.value);
    }


    return <div className="campo-texto-post">
        <label className="campo-texto-label">{props.label}</label>
        <input 
        className="campo-texto-input" 
        placeholder={props.placeholderpost} 
        onChange={recibirValor}
        ></input>
    </div>
}
export default CampoTextoPost;