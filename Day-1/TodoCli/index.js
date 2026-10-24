import fs from "fs"
import {program } from "commander"
import path from "path"

let filePath = path.join(import.meta.dirname,"data","todos.json" )
let data = fs.readFileSync(filePath,"utf8")
let todoArr = JSON.parse(data)
program
        .name("todoCli")
        .description("CLI based task tracker app")
        .version("1.0.0")



        program 
                .command("add")
                .description("adds a new habit ")
                .argument("<newTask>","new task")
                .action((newTask)=>{
                    todoArr.push(newTask)
                    fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8")
                    console.log("the new task added successfully")
                })

program
        .command("print")
        .description("displays all the tasks")
        .action(()=>{
            todoArr.forEach((element,index)=>{
                console.log(`${index + 1} : ${element}`)

            })
        })


program
       .command("update") 
       .description("replaces the existing task with the new element")
       .argument("<oldTask>","old task")
       .argument("<newTask>" , "new task",)
       .action((oldTask,newTask)=>{
        let oldTaskIndex = todoArr.indexOf(oldTask)
        todoArr.splice(oldTaskIndex,1,newTask)

        fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8")


       })

program
       .command("delete")
       .description("deletes the given task")
       .argument("<givenTask>","given task")
       .action((givenTask)=>{
        let indexOfGivenTask = todoArr.indexOf(givenTask)
        todoArr.splice(indexOfGivenTask,1)

        fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8")

       })




program.parse()




