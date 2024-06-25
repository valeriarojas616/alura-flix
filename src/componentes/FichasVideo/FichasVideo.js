function FichasVideo({ classNamePrefix }) {
    return (
      <div className={`${classNamePrefix}-vid-1`}>
        <h3 className='title-video'>titulo</h3>
        <img className={`${classNamePrefix}-image-video`} src='./img/ejemplo-video.jpg' alt="Video thumbnail" />
        <p className='descripcion-video'>
          27 mil visualizaciones
          <div className='borrar-editar'>
            <input className='buttons delete-button' type='button' value='Borrar' />
            <input className='buttons edit-button' type='button' value='Editar' />
          </div>
        </p>
      </div>
    );
  }
  
  export default FichasVideo;