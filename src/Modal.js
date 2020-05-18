import React,{useState} from 'react'
import './App.css'




const Modal=(props)=>{
    const [movie,setMovie]=useState({title:'',poster:'',date:'',rate:''})
    
    const handleSubmit=(e)=>{
            e.prevenDefault()
            props.addMovie(movie)
            setMovie({})

    }
    return(props.stateModal?(
        <React.Fragment>
            <div className='overlay'/>
                <div className="wrapper">
                    <div className='Modal'>
                        
                        <div><h3>Add New Movie</h3></div>
                        <form onSubmit={handleSubmit}>
                            
                            <div>
                                <label>Add title:</label>   
                                <input type='text' 
                                       placeholder='Title' 
                                       value={movie.title} 
                                       onChange={(e)=>setMovie({...movie,title:e.target.value})} required/>
                            </div>
                            <div>
                                <label>Add Poster:</label>   
                                <input className='file'
                                       type='file' 
                                       placeholder='Poster' 
                                       value={movie.poster} 
                                       onChange={(e)=>setMovie({...movie,poster:e.target.value})} required/>
                            </div>
                            <div>
                                <label>Add Date:</label>   
                                <input type='text' 
                                       placeholder='date' 
                                       value={movie.date} 
                                       onChange={(e)=>setMovie({...movie,date:e.target.value})} required/>
                            </div>
                            <div>
                                <label>Choose rate</label>   
                                <select id='rate' 
                                        value={movie.rate} 
                                        onChange={(e)=>setMovie({...movie,rate:e.target.value})}>
                                    <option value='one'>1</option>
                                    <option value='two'>2</option>
                                    <option value='three'>3</option>
                                    <option value='four'>4</option>
                                    <option value='five'>5</option>
                                </select>
                            </div>
                            <input type='submit' value='Add movie' className='buttons' />
                            <button className='buttons' onClick={props.cache}>cancel</button>
                         </form>
                         
                                
                    </div>
                </div>
            
        </React.Fragment>
    ):null)
}
export default Modal