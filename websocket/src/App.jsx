// import React, { useEffect } from 'react';
// import { io } from 'socket.io-client';
// import { useState } from 'react';


// const socket = io('http://localhost:5000', {
//       withCredentials: true,
//     });
// const App = () => {
   
//   const [msg, setmsg] = useState("");
//   const [chat, setchat] = useState([]);
//   const [user, setuser] = useState("");
// const handlesubmit=(e)=>{

//   e.preventDefault( );
// socket.emit("message",msg);
// setmsg("");
// setchat(prev=>[...prev,msg]);
// }

//   useEffect(() => {
   

//     // socket.on('connect', () => {
//     //   console.log('Connected to server');
//     //   console.log('My socket ID:', socket.id);
//     // });

//     socket.on("rec-data", (data)=>{
//       console.log("msg received",data);
//       setchat(prev=>[...prev,data]);
//     })

  
//   }, []);

//   return <div>
// <div>{[...chat].reverse().map((msg,index)=>{
//   return <div key={index} style={{textAlign:"left"}}><h1>{msg}</h1></div>
// })}</div>

// <form action="" onSubmit={handlesubmit}>

// <input type="text" value={msg} onChange={(e)=>setmsg(e.target.value)} ></input>

// <button type='submit' value={msg} onChange={(e)=>setchat(e.target.value)}>send</button>
// </form>

//   </div>;
// };

// export default App;



import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import Cards from '../pagination/Cards';
const App = () => {
  return (
    <div>

<Pagination/>


    </div>
  )
}

export default App