// importing 
import mongoose from "mongoose";


const whatsappschema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    recieved:Boolean
});

export default mongoose.model('messageContent',whatsappschema);