import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';


const app= express();
const server= createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
    }
});

const PORT= process.env.PORT || 5000;


io.on("connection",(socket)=>{
    console.log("New user connected");
    console.log("Socket ID:", socket.id);
})
app.get("/",(req,res)=>{
    res.send("Hello World");

})
// app.get("/api",(req,res)=>{
//     res.send("Hello from post");
// })
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// app.listen(PORT,()=>{
//     console.log(`app is running on port ${PORT}`);
// })