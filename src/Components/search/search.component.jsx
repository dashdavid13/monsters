import React from 'react'
import './search.styles.css'


export const Search = ({placeholder, handleChange}) => {


  function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
  
    const arrayMapped = arr.map((e, i) => {
      debugger
        let object = {};
        object.values = [e, arr[i + 1]];
        object.dif = Math.abs(e - arr[i + 1]);
        return object;
        debugger
    });
    return arrayMapped.sort((a, b) => a.dif - b.dif )
        .filter((v) => v.dif == arrayMapped[0].dif)
        .map((v1) => v1.values)
        .flat();
        debugger
}

closestNumbers([4,5,6,2,1])

    return(
      <>
      <button onClick={closestNumbers}>click me</button>
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