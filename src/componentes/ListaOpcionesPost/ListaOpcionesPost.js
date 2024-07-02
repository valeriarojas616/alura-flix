import './ListaOpcionesPost.css';

const ListaOpcionesPost = (props)=>{

    const categoriasVideosPost = [
        "Front End",
        "Back End",
        "Innovacion y gestión"
    ]

    const cambioCategoria = (event)=>{
        props.actualizarValor(event.target.value);
    }

    return <div className="lista-opciones-post">
        <label className="lista-opciones-label">Categorías</label>
        <select className="lista-opciones-select" value={props.valor} onChange={cambioCategoria}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
            {/*Version visual para el uso de la arrow function y el map para leer el arreglo:

             {categoriasVideosPost.map((categoriasVideosPost, index) => {
                return <option key={index}>{categoriasVideosPost}</option>
            })}
            */}
            {/**Simplificacion del map*/}
            {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{
            categoria}</option>
            )
            }
        </select>
    </div>
}

export default ListaOpcionesPost;