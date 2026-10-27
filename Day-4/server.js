import express from "express"
import watcher from "./src/middlewares/reqCounterMiddleWare.js"
import loggerMiddleWare from "./src/middlewares/loggerMiddleWare.js"
import cors from 'cors'
let app = express()
app.use(express.json())
app.use(cors())




app.use(watcher)
app.use(loggerMiddleWare)




app.get('/menu',(req,res)=>{
    console.log("the get request ")
    const {a,b} = req.query

    let result = parseInt(a) + parseInt(b) 

    res.json({
        msg : "the GET",
        result : result
    })
})
app.post('/menu',(req,res)=>{
    console.log("the POST request ")

    res.json({
        msg : "the POST"
    })
})
app.put('/menu',(req,res)=>{
    console.log("the PUT request ")

    res.json({
        msg : "the PUT"
    })
})
app.delete('/menu',(req,res)=>{
    console.log("the DELETE request ")

    res.json({
        msg : "the DELETE"
    })
})




app.listen(8080,()=>{
    console.log("the server is running at PORT 8080");
})