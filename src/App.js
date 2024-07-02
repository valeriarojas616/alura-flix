import './App.css';
import Header from './componentes/Header/Header';
import SeccionMain from './componentes/SeccionMain/SeccionMain';
import Footer from './componentes/Footer/Footer';
import CategoriasVideos from './componentes/CategoriasVideos/CategoriasVideos';



function App() {

  const categorias = [
    { titulo: "FrontEnd",
      color:"rgba(107, 209, 255)"
    },
    {
      titulo: "BackEnd",
      color: "#00c86f"
    },
    {
      titulo: "Innovacion y Gestion",
      color: "#ffba05"
    }
  ]
 

  return (
    <div>
      <Header datos={categorias}/>
      <SeccionMain />
    {//siempre que usamos map requerimos una key, ademas nuestra arrow function no requiere parentesis ni la palabra return, pues para retornar valores solo basta declararla de la siguiente manera
    categorias.map( (categoria) => <CategoriasVideos datos={categoria} key={categoria.titulo}/>
     )
    }
      
     
      <Footer />
    </div>
  );
}

export default App;
