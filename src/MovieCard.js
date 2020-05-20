import React from 'react'
import StarRating from './StarRating'



const MovieCard=({movie})=>{
    return(
        <div className='movieCard'>
            <img src={movie.poster} alt={movie.title} className='poster'/>
            <cite className='movieTitle'>{movie.title}</cite>
            <span className='MovieDate'>{movie.date}</span>
            <StarRating rateNumber={movie.rate} edit={false} />

        </div>
    )
}

export default MovieCard