import React from 'react'



const MovieCard=({movie})=>{
    return(
        <div className='movieCard'>
            <img src={movie.poster} alt={movie.title} className='poster'/>
            <cite className='movieTitle'>{movie.title}</cite>
            <span className='MovieDate'>{movie.date}</span>
            <span className='movieRate'>Rate:{movie.rate}</span>

        </div>
    )
}

export default MovieCard