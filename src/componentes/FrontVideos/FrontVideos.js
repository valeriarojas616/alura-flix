import './FrontVideos.css';

function FrontVideos(){
    return <div className='front-videos'>
        <h2>FRONT END</h2>
        <div className='front-vid-1'>
            <div className='borrar-editar'>
                <input className='delete-button' type='button' value='Borrar'></input>
                <input className='edit-button' type='button' value='Editar'></input>
            </div>
        </div>
    </div>
}

export default FrontVideos;