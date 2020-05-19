import React from "react";
import "./App.css";

const Modal = props => {
  const handleSubmit = e => {
    props.addMovie(e);
  };
  return props.stateModal ? (
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
                onChange={e => props.setTitle(e.target.value)}
                required
              />
            
              
              <input
                className="poster"
                type="text"
                placeholder="Poster"
                onChange={e => props.setPoster(e.target.value)}
                required
              />
            
              
              <input
                type="text"
                placeholder="date"
                onChange={e => props.setDate(e.target.value)}
                required
                
              />
           
              
              <select
                id="rate"
                onChange={e => props.setRate(e.target.value)}
                required
              >
                <option placeholder='0'></option>  
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            </div>
            <div className='modal-footer'>
            <input type="submit" value="Add movie" className="modal-button, button1" />
            <input type='button' className="modal-button, button2" value='Cancel' onClick={props.cache}/>
              
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : null;
};
export default Modal;
