const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

const Event = mongoose.model("Event",eventSchema)
module.exports = Event