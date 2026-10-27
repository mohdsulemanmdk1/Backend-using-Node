import React, { useState } from "react"
import ReactDOM from "react-dom/client"


let App = ()=>{

const [input,setInput] = useState("")
const [showTask,setShowTask] = useState([])



async function getTask(){
    let response = await fetch("http://localhost:8080/menu")
    let data = await response.json()
    setShowTask(data.task)
    console.log(data.task)
}
async function addTask(){
    let response = await fetch("http://localhost:8080/menu",{
        method : "POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify({
          newTask : input 
        })
    })
    let data = await response.json()
    setShowTask(data.task)
    
}
async function deleteTask(){
    let response = await fetch("http://localhost:8080/menu",{
        method : "DELETE",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify({
          existTask : input 
        })
    })
    let data = await response.json()
    setShowTask(data.task)
    
}
async function editTask(){
    let response = await fetch("http://localhost:8080/menu",{
        method : "PUT",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify({
          existTask : input ,
          newText : input
        })
    })
    let data = await response.json()
    setShowTask(data.task)
    
}



    return(
        <div>
            <input placeholder="enter tasks..." onChange={(e)=>{
                    setInput(e.target.value)
            }} />
            <button  onClick={()=>{
                addTask() 
            }} > addtasks</button>
            <button  onClick={()=>{
                getTask() 
            }} > print task</button>
            <button  onClick={()=>{
                deleteTask() 
            }} > delete task</button>
            <button  onClick={()=>{
               return <div>

                <input placeholder />
                </div>
            }} > edit task</button>
        </div>
    );
}


let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)