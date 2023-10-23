const express = require('express')
const app = express()
const model = require('./schemas/schema.js')
const db = require('./server/db.js')
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('hello ')
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

app.get('/all',async(req,res)=>{
    try {
        const data = await model.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
       
})

app.get('/all/:id',async(req,res)=>{
    try {
        const id = req.params.id
    const data = await model.findById(id)
    res.send(data)
    } catch (error) {
        console.log(error)
    }
    
})

// app.get('/all/r/:name',async(req,res)=>{
//     try {
//         const name = req.params.name
//         console.log('name=====', req.params['name'])
//     const getdata = await model.findOne({name:name})
//     res.send(getdata)
//     } catch (error) {
//         console.log(error)
//     }
    
// })

app.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id
    const data = await model.findByIdAndDelete(id)
    res.send(data)
        
    } catch (error) {
        console.log(error)
    }
    
})

app.patch('/update/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const data = await model.findByIdAndUpdate(id, req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
  
})
app.listen(5000,()=>{
    console.log('server is running at port 5000')
})