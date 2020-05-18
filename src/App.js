import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import SearchResult from './SearchResult'



function App() {
  const movieList = [
    {
      title: "L'appel de la forêt",
      poster: "https://img8.cdn.cinoche.com/images/5db065e6f984fd53e78d1d705dc56375.jpg",
      date: 2020,
      rate: 5
    },
    { title: "croods",
      poster:"https://imgr.cineserie.com/2017/06/417868.jpg?imgeng=/f_jpg/cmpr_0/w_1000/h_1500/m_cropbox&ver=1",
      date: 2020,
      rate: 5 
    },
    { title: "Dune",
      poster: "https://i.pinimg.com/originals/0b/ea/af/0beaafb37a0181a6d0237e67a799c06f.png",
      date: 2020,
      rate: 5
    },
    { title: "Mulan",
      poster:" https://fr.web.img3.acsta.net/pictures/19/12/05/17/24/2034927.jpg" ,
      date: 2020,
      rate: 5 
    },
    { title: "soul",
      poster: "https://fr.web.img3.acsta.net/pictures/20/04/15/10/07/3174930.jpg",
      date: 2020, 
      rate: 5 }
  ];

  const [movies, setMovies] = useState(movieList);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
  const [date, setDate] = useState("");

  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      title: title,
      poster: poster,
      date: date,
      rate: rate
    };
    return setMovies([...movies, newMovie]);
  };

  const [stateModal, setStateModal] = useState(false);
  const toggle = () =>setStateModal(!stateModal);

  

  const [stateResult,setStateResult]=useState(false)
  
  const [search,setSearch]=useState('')
  const [result, setResult] = useState([]);
  const toggleResult=()=>setStateResult(!stateResult);
  
    
    
  
  console.log(`search ${search}`)
  
  console.log(`result ${result}`)
  

  return (
    <div className="App">
      <div className="topnav">
        <button className="button" onClick={toggle}>
          Add Movie
        </button>
        
        <input 
          id="search"
          type="text"
          placeholder="Search by title or rate.."
          onSubmit={(e)=>{setSearch(...search,e.target.value)
            setResult(...result,movies.filter(movie=>movie.rate===search||movie.title===search));
            result!==[]?toggleResult():alert('not found')}}
        />
        
      </div>

      <div className="movieList">
        {movies.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
      <Modal
        stateModal={stateModal}
        cache={toggle}
        setTitle={setTitle}
        setRate={setRate}
        setPoster={setPoster}
        setDate={setDate}
        addMovie={addMovie}
      />
      <SearchResult
      stateResult={stateResult}
      cache={toggleResult}>
      
        <div className="movieList">
        {result.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
        </SearchResult>
      
    </div>
  );
}

export default App;
