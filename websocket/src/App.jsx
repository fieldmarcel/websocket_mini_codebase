import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useState } from 'react';


const socket = io('http://localhost:5000', {
      withCredentials: true,
    });
const App = () => {
   
  const [msg, setmsg] = useState("");
  const [chat, setchat] = useState([]);
  const [user, setuser] = useState("");
const handlesubmit=(e)=>{

  e.preventDefault( );
socket.emit("message",msg);
setmsg("");
setchat(prev=>[...prev,msg]);
}

  useEffect(() => {
   

    // socket.on('connect', () => {
    //   console.log('Connected to server');
    //   console.log('My socket ID:', socket.id);
    // });

    socket.on("rec-data", (data)=>{
      console.log("msg received",data);
      setchat(prev=>[...prev,data]);
    })

  
  }, []);

  return <div>
<div>{chat.map((msg,index)=>{
  return <div key={index} style={{textAlign:"left"}}><h1>{msg}</h1></div>
})}</div>

<form action="" onSubmit={handlesubmit}>

<input type="text" value={msg} onChange={(e)=>setmsg(e.target.value)} ></input>

<button type='submit' value={msg} onChange={(e)=>setchat(e.target.value)}>send</button>
</form>

  </div>;
};

export default App;

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000", {
//   withCredentials: true,
// });

// const App = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to server with ID:", socket.id);
//     });

//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, { message: data, from: "others" }]);
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, []);

//   const handleSend = () => {
//     if (message.trim()) {
//       socket.emit("send_message", message);
//       setChat((prev) => [...prev, { message, from: "me" }]);
//       setMessage("");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🧑‍💻 Real-Time Chat</h2>
//       <div style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "scroll" }}>
//         {chat.map((msg, index) => (
//           <div key={index} style={{ textAlign: msg.from === "me" ? "right" : "left" }}>
//             <p><strong>{msg.from === "me" ? "You" : "friend"}:</strong> {msg.message}</p>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         style={{ marginRight: "10px" }}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default App;
