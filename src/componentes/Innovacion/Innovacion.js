import './Innovacion.css';

function Innovacion(){
    return <div className='innovacion-videos'>
        <div className='innovacion-seccion'>
            <h2 className='title-innovacion'>INNOVACION Y GESTIÓN</h2>
            <section className='fichas-video-innovacion'>
                <div className='innovacion-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='inn-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='innovacion-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='inn-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='innovacion-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='inn-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
            </section>
        </div>
    </div>
}

export default Innovacion;
