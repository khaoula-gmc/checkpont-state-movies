import React,{useState} from 'react';
import './App.css';
import Modal from './Modal'
import MovieCard from './MovieCard'
import foret from './img/foret.jpg'
import croods from './croods.jpg'
import Dune from './img/Dune.jpg'
import Mulan from './img/Mulan.jpg'
import soul from './img/soul.jpg'
// import Search from './Search'



function App() {
const movieList=[{title:"L'appel de la forêt", Poster:{foret}, date:2020, rate:5 },
{title:'croods', Poster:{croods}, date:2020, rate:5 },
{title:'Dune', Poster:{Dune}, date:2020, rate:5 },
{title:'Mulan', Poster:{Mulan}, date:2020, rate:5 },
{title:'soul', Poster:{soul}, date:2020, rate:5 }
]


const [movies,setMovies]=useState(movieList)
  
const addMovie=(movie)=>setMovies(movie,...movies)
  
const [stateModal,setStateModal]=useState(false)
const toggle=()=>{setStateModal(!stateModal)}
  
return (
    <div className="App">
      <div className="topnav">
          <button className='button' onClick={toggle}>Add Movie</button>
          <input id='search' type="text" placeholder="Search by title or rate.."/>
      </div>
   
      <div className='movieList'>
          {movies.map((movie, i) => (<MovieCard movie={movie} key={i} />))}
      </div>
      <Modal stateModal={stateModal}  cache={toggle} addMovie={addMovie}/>
    </div>
  );
}

export default App;
