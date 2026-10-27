const loggerMiddleWare = (req,res,next)=>{
let now = new Date()
let time = now.toLocaleTimeString()


console.log("---------------new req----------")
console.log("time",time)
console.log("URL",req.url)
console.log("Method",req.method)



next();


}

export default loggerMiddleWare