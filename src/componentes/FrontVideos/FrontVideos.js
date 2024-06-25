import './FrontVideos.css';

function FrontVideos(){
    return <div className='front-videos'>
        <div className='front-seccion'>
            <h2 className='title-front'>FRONT END</h2>
            <section className='fichas-video-front'>
                <div className='front-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='front-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='front-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='front-image-video' src='./img/ejemplo-video.jpg'></img>
                    <p className='descripcion-video'>27 mil visualizaciones
                        <div className='borrar-editar'>
                            <input className='buttons delete-button' type='button' value='Borrar'></input>
                            <input className='buttons edit-button' type='button' value='Editar'></input>
                        </div>
                    </p>
                </div>
                <div className='front-vid-1'>
                    <h3 className='title-video'>titulo</h3>
                    <img className='front-image-video' src='./img/ejemplo-video.jpg'></img>
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

export default FrontVideos;