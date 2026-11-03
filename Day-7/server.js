import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { userModel ,todoModel} from './db/db.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();


let authMiddleWare = async (req,res,next)=>{
    let tokenHeader = req.headers["token"]

    let payload = jwt.verify(tokenHeader,process.env.JWT_SECRET)



    if(!payload){
        res.json({
            msg : "invalid token"
        })
    }


    req.userId = payload.userId
next()

}

mongoose 
    .connect(process.env.DB_URL)
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((error)=>{
        console.log("error while connecting to db",error)
    })

let app = express()

app.use(cors())
app.use(express.json())


app.post("/signUp", async (req,res)=>{
    let {username,password , email }= req.body
console.log("the Sign UP req is sent")
    const feedBack = await userModel.create({username , email,password})


res.json({
    msg : "sign up successfully",
    feedBack
})


})

app.post("/signIn",async (req,res)=>{
    let {username,password } = req.body
console.log("SIGN IN request is sent")


let founder = await userModel.findOne({
    username,password
})


if(founder === null){
    res.json({
        msg : "invalid username and password"
    })
}


let token = jwt.sign({
    userId : founder._id,
},process.env.JWT_SECRET)

res.json({
    msg : "sign in successfully ",
    token
})

})
app.use(authMiddleWare)
app.get("/todo",async (req,res)=>{
    let userId = req.userId
    let feedback = await todoModel.find({userId})


    res.json({
        feedback
    })
  
})

app.post("/todo",async (req,res)=>{
    let {newTodo,isDone} = req.body

    let userId = req.userId
    let feedback = await todoModel.create({userId ,newTodo , isDone})

res.json({
    feedback
})

})


app.put("/todo1",async (req,res)=>{



    let {oldTodo,newTodo,oldIsDone,newIsDone} = req.body
    let userId = req.userId
console.log("the PUT")
    const feedBack = await todoModel.findOneAndUpdate({userId,newTodo : oldTodo,isDone : oldIsDone},{
                userId : userId,
                newTodo : newTodo,
                isDone : newIsDone
    })



    res.json({
        msg : "the UPDATE requset is receved",
        feedBack

    })





})


app.delete("/todo/:id",async (req,res)=>{
    let userId  = req.userId

console.log("DELETE")
    const {id } = req.params;


    const feedback = await todoModel.deleteOne({
        _id : id,
        userId : userId
    })


   res.json({
        msg: "Todo deleted successfully",
        feedback
    });


})



app.listen(8080,()=>{
    console.log("server running at PORT 8080 ")
})