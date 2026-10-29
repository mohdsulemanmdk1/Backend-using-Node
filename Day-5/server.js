import express from 'express'
import path from 'path'
import fs from 'fs'

let finalPath = path.join(import.meta.dirname, 'data', 'text.json')

let data = JSON.parse(fs.readFileSync(finalPath, "utf8"))


let app = express()
app.use(express.json())



let getToken = () => {
    let token = ""


    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    ];




    for (let i = 0; i <= 32; i++) {
        token = token + options[Math.floor(Math.random() * options.length)]
    }
    return token

}



let authMiddleWare = (req, res, next) => {

    let userToken = req.headers["token"]


    const verifiedUser = data.find((obj) => {
        if (userToken === obj.token) {
            return true
        } else {
            return false
        }
    })
    if (verifiedUser) {
        req.verifiedUser = verifiedUser
        next()

    } else {
        res.json({
            msg: "invalid user"
        })
    }





};



app.post("/signUp", (req, res) => {


    let { name, password } = req.body
    let obj = {
        name: name,
        password: password
    }
    data.push(obj)

    fs.writeFileSync(finalPath, JSON.stringify(data), "utf8")

    res.json({
        "msg": "the POST request is sent"
    })
})
app.post("/signIn", (req, res) => {


    console.log("signIn")


    let { name, password } = req.body


    let finder = data.find((user) => {
        if (user.name === name && user.password === password) {
            return true
        }
        else {
            return false
        }
    })

    let addToken = getToken()

    finder.token = addToken

    console.log(data)


    fs.writeFileSync(finalPath, JSON.stringify(data), "utf8")
    if (!finder) {
        console.log("invalid user")
    } else {
        res.json({
            tasks: data
        })
    }


 })
 app.use(authMiddleWare)
app.get("/premium", (req, res, next) => {



    res.json({
        secret: "i am haaakkkkaaarrrr",
       
    })

 })
app.get("/me", authMiddleWare, (req, res, next) => {

let {verifiedUser} = req

    res.json({
        msg : "i got ur data",
        data : verifiedUser

       
    })

 })


app.listen(8080, (req, res) => {

    console.log("the server is running at PORT 8080")

 })