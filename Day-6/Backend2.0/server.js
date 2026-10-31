import express from 'express'
import jwt from 'jsonwebtoken'
let app = express()

app.use(express.json())

let SECRET_KEY = "i am iron man "
let arr = []



let authMiddleWare = (req,res,next)=>{
    let headerToken = req.headers["token"] 
    
    let verifiedPayload = jwt.verify(headerToken,SECRET_KEY)
    
    req.payLoad = verifiedPayload
    next()
    
}
app.get("/courses",authMiddleWare,(req,res)=>{

if(authMiddleWare){

    res.json({
        data: {
            courseId: "77",
            courseName: "Data Analysis",
            material: "PYTHON, SQL",
        },
    });
} else{
    console.log("token not defined ")
}

})

app.post("/SignUp",(req,res)=>{

console.log("the GET request")


let {username,password } = req.body


let obj ={
    username ,password
}


arr.push(obj)
console.log(arr)

res.json({
    msg : " the get request"
})

})


app.post("/SignIn",(req,res)=>{

   let {username,password } = req.body

 let verifiedUser =    arr.find((e)=>{
        if(e.username === username && e.password === password){
            return true
        }else{
            return false
        }
    })

    if(!verifiedUser){
       return  res.json({
            details : "in valid user"
        })
    }


let token = jwt.sign({
    username : verifiedUser.username,
    message: "this token is for authentication...",

},SECRET_KEY)



res.json({
    msg : "sign in successfully",
    token
})



})






app.listen(8080,(req,res)=>{
    console.log("the server is running at PORT 8080")

})