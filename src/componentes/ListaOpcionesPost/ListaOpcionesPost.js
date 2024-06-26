import './ListaOpcionesPost.css';

const ListaOpcionesPost = ()=>{

    const categoriasVideosPost = [
        "Front End",
        "Back End",
        "Innovacion y gestión"
    ]

    return <div className="lista-opciones-post">
        <label className="lista-opciones-label">Categorías</label>
        <select className="lista-opciones-select">
            {/*Version visual para el uso de la arrow function y el map para leer el arreglo:

             {categoriasVideosPost.map((categoriasVideosPost, index) => {
                return <option key={index}>{categoriasVideosPost}</option>
            })}
            */}
            {/**Simplificacion del map*/}
            {categoriasVideosPost.map((categoriasVideosPost, index) => <option key={index}>{categoriasVideosPost}</option>
            )}
        </select>
    </div>
}

export default ListaOpcionesPost;