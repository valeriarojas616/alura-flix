import './BackVideos.css';

function BackVideos(){
    return <div className='back-videos'>
        <h2>BACK END</h2>
        <div className='back-vid-1'>
            <div className='borrar-editar'>
                <input className='delete-button' type='button' value='Borrar'></input>
                <input className='edit-button' type='button' value='Editar'></input>
            </div>
        </div>
    </div>
}

export default BackVideos;