import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId



const userSchema = new Schema({
    username : String,
    password : String,
    email : String

})



const todoSchema = new Schema({
    userId : ObjectId,
    newTodo : String,
    isDone : Boolean,
})

export const userModel = mongoose.model("user",userSchema)
export const todoModel = mongoose.model("todo",todoSchema)


