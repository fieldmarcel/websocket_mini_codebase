// import express from 'express';
// // import mongoose from 'mongoose';
// import cors from 'cors';
// import {Server} from 'socket.io';
// import {createServer} from 'http';


// const app= express();
// const server= createServer(app);
// const io = new Server(server,{
//     cors:{
//         origin:"http://localhost:5173",
//         methods:["GET","POST"],
//         credentials:true
//     }
// });

// const PORT= process.env.PORT || 5000;


// io.on("connection",(socket)=>{
//     console.log("New user connected");
//     console.log("Socket ID:", socket.id);
//           socket.emit("x",` heyy welcome to the shivanshu ${socket.id}`);
          
//           // Broadcast to all other clients
//           socket.broadcast.emit("x",` heyy welcome to the shivanshu ${socket.id}`);
// socket.on("disconnect", () => {
//     console.log(" User disconnected: ", socket.id);
//   });
// })
// app.get("/",(req,res)=>{
//     res.send("Hello World");


// })
// // app.get("/api",(req,res)=>{
// //     res.send("Hello from post");
// // })
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // app.listen(PORT,()=>{
// //     console.log(`app is running on port ${PORT}`);
// // })


import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',  // frontend
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

io.on("connection", (socket) => {
  console.log("✅ User connected: ", socket.id);

  socket.on("send_message", (data) => {
    console.log(" Message received:", data);
    // Broadcast to all other clients
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(" User disconnected: ", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
