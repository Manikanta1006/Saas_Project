const jwt = require("jsonwebtoken")

const authmiddleware = async(req,res,next)=>{

    const token = req.header.authorization.split("")[1]
      if(!token){
        return res.status(401).json({message:'no token provided'})
    }
    try{
        const decode = jwt.verify(token,"mani123")
        req.user = decode
        next()
    }
    catch(err){
        res.status(401).json({message:"Invalid token"})
    }
}

module.exports = authmiddleware;