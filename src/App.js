import './App.css';
import Header from './componentes/Header/Header';
import SeccionMain from './componentes/SeccionMain/SeccionMain';
import FrontVideos from './componentes/FrontVideos/FrontVideos';
import BackVideos from './componentes/BackVideos/BackVideos';
import Innovacion from './componentes/Innovacion/Innovacion';
import Footer from './componentes/Footer/Footer';

const categorias = [
  { categoria: "FrontEnd",
    color:"rgba(107, 209, 255)"
  },
  {
    categoria: "BackEnd",
    color: "#00c86f"
  },
  {
    categoria: "Innovacion y Gestion",
    color: "#ffba05"
  }
]

function App() {
 

  return (
    <div>
      <Header />
      <SeccionMain />
    {//
     // categorias.map( (categoria)=>{
     //   console.log(categoria)
     //   return <FrontVideos/>
     // } )
    }
      
      <FrontVideos />
      <BackVideos />
      <Innovacion />
      <Footer />
    </div>
  );
}

export default App;
