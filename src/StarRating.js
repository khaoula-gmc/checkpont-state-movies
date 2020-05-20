import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'


const StarRating=({rateNumber,edit,setRate,behavior,setSearchByRate})=>{
    const [rating,setRating]=useState(null)
    const [hover, setHover]=useState(null)
    console.log(behavior)
    
    return(
        edit?
        
        behavior==='input'?
        <div>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i + 1;
            return(
                <label>
                    <input
                    className='radio'
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    
                    onClick={()=>setRating(ratingValue)}
                    
                    onChange={()=>setRate(ratingValue)}
                    />
            <FaStar
                className='star'
                color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9"}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                />
                </label>
            )})
        }
       
        </div>:behavior==='search'?
        <div>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i + 1;
            return(
                <label>
                    <input
                    className='radio'
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    
                    onClick={()=>setRating(ratingValue)}
                    
                    onChange={()=>setSearchByRate(ratingValue)}
                    />
                <FaStar
                    className='star'
                    color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9"}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                />
                </label>
            )})
        }
       
        </div>:null

        :<div>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i + 1;
            return(
                <label>
                    
            <FaStar
                className='star'
                color={ratingValue<=(rateNumber)?"#ffc107":"#e4e5e9"}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                />
                </label>
            )})
        }
       
        </div>
    )
}


export default StarRating