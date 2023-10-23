const mongoose = require('mongoose')

const myform = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    }
})

const Cluster0 = new mongoose.model('Cluster0', myform)

module.exports = Cluster0;