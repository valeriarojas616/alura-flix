

const BotonNuevoVideo = (props)=>{
    
    //const [mostrarForm, actualizamostrarForm] = useState(true)
    //const manejarClick = () =>{
    //    actualizamostrarForm(!mostrarForm);
    //}
    

    return <section className='new-button-section'>
        <button className='new-video-button' onClick={props.cambiarMostrar}>{props.mostrarFormulario?'HOME' : 'NUEVO VIDEO'}</button>
        </section>
}

export default BotonNuevoVideo;