import React from 'react'
import { useState, useRef } from 'react';

export default function NewComp() {
  const inputRef = useRef(null);
  const [data,setData]=useState([]);


  const handleClick =  () => fetch(`https://restcountries.com/v3.1/name/${inputRef.current.value}`)
      .then((res)=> {
        if (res.ok) {
          console.log(data)
          return res.json()
        }
        throw new Error("Server bad response");
      })
      .then((res)=>{setData(res);console.log(res);
       })
       
  return (
    <div>
      Text input: <input ref={inputRef}/> 
      <div>  <button type="button" onClick={handleClick} >Click Me</button> </div> 
      <div> {data?.[0]?.capital} </div>
      <img src={data?.[0]?.flags?.png}/>
      <img src={data?.[0]?.maps?.openStreetMaps}/>
       </div>
      

  )
}

