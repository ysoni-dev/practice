const mongoose = require('mongoose')

const url = 'mongodb+srv://gamer:gamer123@cluster0.adrxe.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log('mongodb connected')
}).catch((e)=>{
    console.log(e)
})