let counter = 0
let watcher = (req,res,next)=>{
    counter++;
    if(counter <= 5){
        console.log(`you have ${5 - counter} attempts left`)
        next()
    }
    else{
        res.json({
            msg : "limit has reached"
        })
    }

}

  export default watcher;

