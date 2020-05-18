import React from 'react'
import './App.css'


const SearchResult=(props)=>{

    return  props.stateResult ? (
            <React.Fragment>
              <div className="overlay" />
              
                  {props.children}
                
              
            </React.Fragment>
          ) : null;
            
    
    
}

export default SearchResult