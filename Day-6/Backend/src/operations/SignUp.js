import fs from "fs"
import path from 'path'





let finalPath = path.join(import.meta.dirname,"../../data/text.json")

let data = JSON.parse(fs.readFileSync(finalPath,"utf8"))

export const SignUp = (req,res)=>{


    let {username,password,email} = req.body

        let obj = {
            username : username,
            password : password,
            email : email
        }


    data.push(obj)
    
    fs.writeFileSync(finalPath,JSON.stringify(data),"utf8")

    res.json({
        msg : "the get request is sent"
    })

}