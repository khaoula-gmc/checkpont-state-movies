//                    Title: Checkpoint Movie List
//                    author: Khaoula TOUATI
//                    Date:20/05/2020
import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import StarRatingSearch from './StarRatingSearch'




function App() {
  /***************************************Movie List initialisation***************************** */
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
      rate: 4
    },
    { title: "Dune",
      poster: "https://i.pinimg.com/originals/0b/ea/af/0beaafb37a0181a6d0237e67a799c06f.png",
      date: 2020,
      rate: 3
    },
    { title: "Mulan",
      poster:" https://fr.web.img3.acsta.net/pictures/19/12/05/17/24/2034927.jpg" ,
      date: 2020,
      rate: '4' 
    },
    { title: "soul",
      poster: "https://fr.web.img3.acsta.net/pictures/20/04/15/10/07/3174930.jpg",
      date: 2020, 
      rate: 5 }
  ];

  
  /*********************************Movie states********************************* */
  const [movies, setMovies] = useState(movieList);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
  const [date, setDate] = useState("");

 
/*****************************Add new movie in the movie list************************* */
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
/***************************Modal display*************************************** */
  const [stateModal, setStateModal] = useState(false);
  const toggle = () =>setStateModal(!stateModal);
/********************Search declarations**************************************** */
  const [searchByTitle,setSearchByTitle]=useState('')
  const [searchByRate,setSearchByRate]=useState(0)
  const[display,setDisplay]=useState('')
  
  
  return (
    <div className="App">
      <div className="topnav">
        
        <button 
          className="button" 
          onClick={toggle}>
          Add Movie
        </button>
        {/* *****************Search inputs********************************* */}
        <div className='search-div'>
            <label className='search-lbl'>Search by:</label>
            <select className='search-slct' 
                    onChange={(e)=>{setDisplay(e.target.value)
                                    setSearchByRate(0)
                                    setSearchByTitle('')
                                    }}>
                  <option value='all'>all</option>
                  <option value='title'>title</option>
                  <option value='rate'>rate</option>
              </select>
      
            {display==='rate'?
            <StarRatingSearch
            setSearchByRate={setSearchByRate}/>
            :display==='title'?
            <input 
              id="search"
              type="text"
              placeholder="Search by title or rate.."
              onChange={(e)=>setSearchByTitle(e.target.value)}
            />
            :null
            }
        
        </div>
      </div>
  {/******************Search result***************************/}
      <div className="movieList">
        {display==='title'?movies.filter(movie=>movie.title.toLowerCase().indexOf(searchByTitle.toLowerCase())!==-1).map((movie, i) => (
              <MovieCard movie={movie} key={i} />
              ))
              :display==='rate'?
                  searchByRate===0?movies.map((movie, i) => (<MovieCard movie={movie} key={i} />))
                  :movies.filter(movie=>movie.rate.toString().indexOf(searchByRate)!==-1).map((movie, i) => (
                    <MovieCard movie={movie} key={i} />))
               :movies.map((movie, i) => (
                  <MovieCard movie={movie} key={i} />))
        }
      </div>
{/*************************Modal to add new movie**************************************** */}
      <Modal
        stateModal={stateModal}
        cache={toggle}
        setTitle={setTitle}
        setRate={setRate}
        setPoster={setPoster}
        setDate={setDate}
        addMovie={addMovie}
      />
      
      
    </div>
  );
}

export default App;