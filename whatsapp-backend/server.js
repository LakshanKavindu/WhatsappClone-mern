// importing

import express from "express";
import mongoose from "mongoose";
import Messages from "./dbmessages.js"; 
import Pusher from "pusher";
import cors from "cors";


//app config

const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1437906",
    key: "c22d042b41e219edd683",
    secret: "acc77d00d840c5206129",
    cluster: "eu",
    useTLS: true
});


// middleware

app.use(express.json());
app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     next();
// })

// db config
const con_url = "mongodb+srv://kavindu_whatsapp:2KSaNx43vAgYvrzJ@cluster0.qooha.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(con_url);


const db = mongoose.connection;
db.once("open",()=>{
    console.log("db connected");

    const msg_collection = db.collection("messagecontents");
   
    const change_stream = msg_collection.watch();

    change_stream.on("change",(change)=>{
        console.log(change);

        if(change.operationType=== 'insert'){
            const msg_details = change.fullDocument;
            pusher.trigger('messages','inserted',{
                    name : msg_details.name,
                    message : msg_details.message,
                    time_stamp : msg_details.time_stamp,
                    recieved : msg_details.recieved
            })
        }else{
            console.log('error triggering pusher')
        }
    })
});



// 


//api routes
app.get('/',(req,res)=>res.status(200).send("hello world"));

app.get('/messages/sync',(req,res)=>{

    

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.post('/messages/new',(req,res)=>{

    const dbmessage = req.body

    Messages.create(dbmessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//listen

app.listen(port,()=>console.log(`listening on localhost : ${port}`));