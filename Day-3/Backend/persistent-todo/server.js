import express from 'express'
import path from "path"
import fs from "fs"
import cors from 'cors'
let app = express()
app.use(cors())
app.use(express.json());


let filePath = path.join(import.meta.dirname,"data","text.json")
let data = JSON.parse(fs.readFileSync(filePath,"utf8"))


app.get("/menu",(request,response)=>{
        console.log("the GET request recieved")

    response.json({
        "msg" : "the GET request recieved ",
         task : data
    })

})
app.post("/menu",(request,response)=>{
        console.log("the POST request recieved")


        let newTask = request.body.newTask

        data.push(newTask)
        fs.writeFileSync(filePath,JSON.stringify(data),"utf8")

    response.json({
        "msg" : "the POST request recieved ",
        task : data
    })

})
app.put("/menu",(request,response)=>{
        console.log("the PUT request recieved")


let existTask = request.body.existTask
let newTask = request.body.newTask

let indexOfExistTask = data.indexOf(existTask)

data.splice(indexOfExistTask,1,newTask)
fs.writeFileSync(filePath,JSON.stringify(data),"utf8")


response.json({
        "msg" : "the PUT request recieved ",
        task : data
    })

})
app.delete("/menu",(request,response)=>{
        console.log("the DELETE request recieved")

let existTask = request.body.existTask        
let indexOfExistTask = data.indexOf(existTask)

{indexOfExistTask === -1 ? 

data.splice(indexOfExistTask,0) : data.splice(indexOfExistTask,1)}
fs.writeFileSync(filePath,JSON.stringify(data),"utf8")

    response.json({
        "msg" : "the GET DELETE recieved ",
        task : data
    })

})

app.listen("8080",()=>{
    console.log("the persistent server is listening at 8080 port ")
})