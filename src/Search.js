import React from 'react'


const Search=()=>{

    return(
        <div className="topnav">
            {/* <label>Search by:</label>
            <input type="radio" id="title" name="search" value="title"/>
            <label for="title">title</label>
            <input type="radio" id="rate" name="search" value="rate"/>
            <label for="rate">rate</label> */}
            
                <input id='search' type="text" placeholder="Search by title or rate.."/>
            
        </div>


    )
}

export default Search