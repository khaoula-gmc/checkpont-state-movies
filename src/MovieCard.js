import React from 'react'



const MovieCard=({movie})=>{
    return(
        <div>
            <h3>props.title</h3>
            <img src={movie.poster} alt={movie.title}/>
            <span>Date:{movie.date}</span>
            <span>Rate:{movie.rate}</span>

        </div>
    )
}

export default MovieCard