export let authMiddleWare = (req,res,next)=>{

        let verifiedToken = req.headers["token"]
        const verifyPayload = jwt.verify(verifiedToken,JWT_SECRET)

if(!verifyPayload){
    res.status(401).json({
      msg: "invalid token!",
    });
}


req.payload = verifyPayload
next()

}