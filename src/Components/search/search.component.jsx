import React from 'react'
import './search.styles.css'


export const Search = ({placeholder, handleChange}) => {


  

closestNumbers([4,5,6,2,1])

    return(
      <>
    
    <div className="div-search">
      <input 
      className="search" 
      type="search" 
      placeholder={placeholder} 
      onChange={handleChange}/>
    </div>
    </>
    )
}