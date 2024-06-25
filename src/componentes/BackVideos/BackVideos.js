import './BackVideos.css';

function BackVideos(){
    return <div className='back-videos'>
        <div className='back-seccion'>
            <h2 className='title-back'>BACK END</h2>
            <section className='fichas-video-back'>
                <div className='back-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='back-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='back-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='back-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='back-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='back-image-video' src='./img/ejemplo-video.jpg'></img>
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

export default BackVideos;