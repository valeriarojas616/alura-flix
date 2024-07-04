import './App.css';
import React, { useEffect, useState } from "react";
import Header from './componentes/Header/Header';
import SeccionMain from './componentes/SeccionMain/SeccionMain';
import Footer from './componentes/Footer/Footer';
import CategoriasVideos from './componentes/CategoriasVideos/CategoriasVideos';
import {buscar, api} from './api/api';





function App() {

  const[videos, setVideos]= useState([]);

  useEffect(()=>{
    buscar('/videos', setVideos);
  }, []);

  const registrarVideo = async (video)=>{
    try{
      const response = await api.post('/videos', video);
      //Spread operator
      setVideos([...videos, response.data]);
      console.log('video registrado', response.data);
    } catch(error){
      console.error('error en el video', error);
    }  
  }; 

  const categorias = [
    { titulo: "Front End",
      color:"rgba(107, 209, 255)"
    },
    {
      titulo: "Back End",
      color: "#00c86f"
    },
    {
      titulo: "Innovacion y Gestión",
      color: "#ffba05"
    }
  ];
 

  return (
    <div>
      <Header datos={categorias} registrarVideo={registrarVideo}/>
      <SeccionMain />
        {//siempre que usamos map requerimos una key, ademas nuestra arrow function no requiere parentesis ni la palabra return, pues para retornar valores solo basta declararla de la siguiente manera
        categorias.map( (categoria) => 
        <CategoriasVideos 
          datos={categoria} 
          key={categoria.titulo}
          videos={videos.filter(video => video.categoria === categoria.titulo)}
        />
        )
        }
      
     
      <Footer />
    </div>
  );
}

export default App;
