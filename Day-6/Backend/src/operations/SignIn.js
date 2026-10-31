import fs from "fs"
import path from 'path'
import jwt from 'jsonwebtoken'


const JWT_SECRET = " i am "

let finalPath = path.join(import.meta.dirname,"../../data/text.json")

let data = JSON.parse(fs.readFileSync(finalPath,"utf8"))

export const SignIn = (req,res)=>{


    let {username,password} = req.body

        let obj = {
            username : username,
            password : password,
        }


    let verification =  data.find((user)=>{
            if(user.username === obj.username && user.password === obj.password){
                return true
            } else{
                return false
            }
    })


if(verification){
    
       console.log( verification.username)
    
}else{
    console.log("no access")
}

const token = jwt.sign({
    username : verification.username,
    msg : "creating token.."
},JWT_SECRET)

 res.json({
        msg : "sign in uccessfully",
        token
    })
 
}

export let courses = (req,res)=>{

    const {username} = req.payload;

    res.json({
         data: {
      courseId: "77",
      courseName: "Data Analysis",
      material: "PYTHON, SQL", 
        }
    })

}