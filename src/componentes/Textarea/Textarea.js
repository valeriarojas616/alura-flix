import './Textarea.css'



const Textarea = (props)=>{

    const recibirDescripcion = (event)=>{
        props.actualizarValor(event.target.value)
    }

    return <div className="textarea-video">
        <label className="textarea-label">Descripción</label>
        <textarea className="textarea-textarea" placeholder='Descripción del Video' onChange={recibirDescripcion}></textarea>
    </div>
}

export default Textarea;