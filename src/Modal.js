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
          <div>
            <h3>Add New Movie</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Add title:</label>
              <input
                type="text"
                placeholder="Title"
                // value={props.movie.title}
                onChange={e => props.setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Add Poster:</label>
              <input
                className="file"
                type="file"
                placeholder="Poster"
                // value={props.movie.poster}
                onChange={e => props.setPoster(e.target.value)}
                // required
              />
            </div>
            <div>
              <label>Add Date:</label>
              <input
                type="text"
                placeholder="date"
                // value={movie.date}
                onChange={e => props.setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Choose rate</label>
              <select
                id="rate"
                // value={props.movie.rate}
                onChange={e => props.setRate(e.target.value)}
              >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select>
            </div>
            <input type="submit" value="Add movie" className="buttons" />
            <button className="buttons" onClick={props.cache}>
              cancel
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : null;
};
export default Modal;
