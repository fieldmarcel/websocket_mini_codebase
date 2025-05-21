import express from "express";
// import mongoose from 'mongoose';
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("New user connected");
  console.log("Socket ID:", socket.id);
  socket.emit("x", ` heyy welcome to the shivanshu ${socket.id}`);

  // Broadcast to all other clients
  socket.broadcast.emit("x", ` heyy welcome to the shivanshu ${socket.id}`);

socket.on("message",(data)=>{ //used  as listner here when client triggers thenmsg sen to server
  console.log("Message received:", data);
   socket.broadcast.emit("rec-data",data);
  
  
  io.emit("x", data);
  // socket.emit("x",data);
  // socket.broadcast.emit
})

  socket.on("disconnect", () => {
    console.log(" User disconnected: ", socket.id);
  });
});
app.get("/", (req, res) => {
  res.send("Hello babes");
});
// app.get("/api",(req,res)=>{
//     res.send("Hello from post");
// })
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(PORT,()=>{
//     console.log(`app is running on port ${PORT}`);
// })

