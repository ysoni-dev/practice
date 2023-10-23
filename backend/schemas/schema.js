const mongoose = require('mongoose')

const gamefleet = mongoose.Schema({
    name:{
        type:String
    },
    release:{
        type:Number
    },
    downloads:{
        type:Number
    }
})

const Cluster0 = new mongoose.model('Cluster0', gamefleet)

module.exports = Cluster0