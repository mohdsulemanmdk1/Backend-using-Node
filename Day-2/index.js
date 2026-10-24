import express from "express"

const app = express()



app.get("/menu",(request,response)=>{

    console.log("the get request is sending....")
response.send("yeah i got ur GET request")
})


app.put("/menu",(request,response)=>{
    console.log("the put request is sending..... ")
    response.send("yeah i got ur PUT request")
})


app.post("/menu",(request,response)=>{
    console.log("the post request is sending....")

    response.send("yeah i got ur POST request")
})


app.delete("/menu",(request,response)=>{
    console.log("the delete request is sending")
    response.send("yeah i got ur DELETE request")
})


app.listen(8080,()=>{
    console.log("the server is running on PORT 8080")
})