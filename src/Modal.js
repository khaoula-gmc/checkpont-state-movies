import React from "react";
import "./App.css";
import StarRating from './StarRating'


const Modal = ({stateModal,setTitle,setPoster,setDate,setBehavior,behavior,setRate,addMovie,cache}) => {
  const handleSubmit = e => {
    addMovie(e);
    cache()
  };

  
 
  return stateModal ? (
    <React.Fragment>
      <div className="overlay" />
      <div className="wrapper">
        <div className="Modal">
        <div className='modal-header'>
            <h3>Add New Movie</h3>
          </div>
          <form  onSubmit={handleSubmit}>
          <div className='modal-form'>
            <div className='labels'>
              <label className='label'>Add title:</label>
              <label className='label'>Add Poster:</label>
              <label className='label'>Add Date:</label>
              <label className='label'>Choose rate</label>
            </div>
            <div className='inputs'>
              <input
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
                required
              />
            
              
              <input
                className="poster"
                type="url"
                placeholder="Valid url..."
                onChange={e => setPoster(e.target.value)}
                required
              />
            
              
              <input
                type="number"
                placeholder="Year"
                min={1950}
                onChange={(e) => setDate(e.target.value)}
                required
                
              />
            <div className='stars'>
              <StarRating 
              
              behavior='input'
              edit={true}
              setRate={setRate}
              
            
            />
            </div>  
            </div>
            </div>
            <div className='modal-footer'>
            <input type="submit" value="Add movie" className="modal-button, button1" />
            <input type='button' className="modal-button, button2" value='Cancel' onClick={cache}/>
              
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : null;
};
export default Modal;
