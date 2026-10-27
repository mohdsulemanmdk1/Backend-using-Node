import express from "express"

const app = express() //instance 
app.use(express.text());
app.use(express.json());
let todos = ["hi"]



app.get("/menu",(request,response)=>{
    console.log("the GET response is sending....")


    response.json({
        tasks : todos,
    })
})


app.post("/menu",(request,response)=>{


     console.log("the POST response is sending....")
let newTask = request.body.newTask

todos.push(newTask)

     response.json({
        msg : "adding the new task ",
        tasks : todos,
     })
})



app.put('/menu',(request,response)=>{

    let existTask = request.body.existTask
    let newTask = request.body.newTask

    let indexOfExistTask = todos.indexOf(existTask)
  console.log("the PUT response is sending....")
    todos.splice(indexOfExistTask,1,newTask)

    response.json({
        "msg": "ur PUT request is recieved",
        tasks : todos 
    })

})


app.listen(8080,()=>{
    console.log("listen")
})

