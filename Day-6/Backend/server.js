import express from 'express'
import { SignUp } from './src/operations/SignUp.js'
import { SignIn } from './src/operations/SignIn.js'

import cors from "cors"



let app = express()
app.use(express.json())
app.use(cors())

app.post("/signUp",SignUp)
app.post("/signIn",SignIn)
// app.post("/courses",courses)

app.listen(8080,()=>{
    console.log("the server is running at 8080 PORT ")
})