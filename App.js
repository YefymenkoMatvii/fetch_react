import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import NewComp from './NewComp.js';

function App() {
  return (
    <div ><NewComp/></div>
 );
}


// function Req() {
//   const [data,setData]=useState([]);
  
//   useEffect(()=> {
//     fetch ("https://restcountries.com/v3.1/all")
//     .then((res)=> {
//       if (res.ok) {
//         console.log(data,"helo")
//         return res.json()
//       }
//       throw new Error("Server bad response");
//     })
//     .then((res)=>{setData(res);console.log(res,"helo1");
//      })
//     .catch((err)=>console.log(err));
    
//   },[]);
//   if (data.length=== 0 ) {
//     return 'loading'
//   }
// return <div> country : {data[0].name.common} </div>
// }

export default App;
















