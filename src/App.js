import './App.css';
import Header from './componentes/Header/Header';
import SeccionMain from './componentes/SeccionMain/SeccionMain';
import FrontVideos from './componentes/FrontVideos/FrontVideos';
import BackVideos from './componentes/BackVideos/BackVideos';
import Innovacion from './componentes/Innovacion/Innovacion';
import Footer from './componentes/Footer/Footer';
import FormularioPost from './componentes/FormularioPost/FormularioPost';


function App() {
  return (
    <div>
      <FormularioPost />
      <Header />
      <SeccionMain />
      <FrontVideos />
      <BackVideos />
      <Innovacion />
      <Footer />
    </div>
  );
}

export default App;
