import React,{useState} from 'react';
import './App.css';
import Modal from './Modal'
import MovieCard from './MovieCard'

function App() {

  const [movies,setMovies]=useState([])
  const movie1={title:"L'appel de la forêt", Poster:'./img/foret.jpg', date:'2020', rate:5 }
  setMovies({...movies,movie1})
  const movie2={title:"L'appel de la forêt", Poster:'./img/foret.jpg', date:'2020', rate:5 }
  setMovies({...movies,movie2})
  const movie3={title:"L'appel de la forêt", Poster:'./img/foret.jpg', date:'2020', rate:5 }
  setMovies({...movies,movie3})
  const movie4={title:"L'appel de la forêt", Poster:'./img/foret.jpg', date:'2020', rate:5 }
  setMovies({...movies,movie4})
  const movie5={title:"L'appel de la forêt", Poster:'./img/foret.jpg', date:'2020', rate:5 }
  setMovies({...movies,movie5})
  

  const addMovie=(movie)=>movie!=={}?setMovies(...movies,movie):setMovies(...movies)
  
  const [stateModal,setStateModal]=useState(false)
  const toggle=()=>{setStateModal(!stateModal)}
  
  return (
    <div className="App">
      <button className='button' onClick={toggle}>Add Movie</button>
 
      {movies.map((movie)=><MovieCard movie={movie}></MovieCard>)}
      <Modal stateModal={stateModal}  cache={toggle} addMovie={addMovie}/>
      
    </div>
  );
}

export default App;
