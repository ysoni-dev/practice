const express = require('express')
const db = require('./database/db.js')
const app = express()
const model= require('./models/model.js')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello this is home page')
})

app.post('/add',async(req,res)=>{
    try {
        const data = new model(req.body)
        const mydata = await data.save()
        res.send(mydata)
    } catch (error) {
        res.send(error)
    }
})

app.get('/show',async(req,res)=>{
    try {
        const data =  await model.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


app.delete('/delete/:id',async(req,res)=>{
    try {
        const data = req.params.id
    const deldata = await model.findByIdAndDelete(data)
    res.send(deldata)
    } catch (error) {
        res.send(error)
    }
    
})

app.listen(5005,()=>{
    console.log('server is running at port 5005')
})

