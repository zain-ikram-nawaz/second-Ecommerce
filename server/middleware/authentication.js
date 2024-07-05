const jwtoken = require("jsonwebtoken")
const user = require("../model/user")
const secret_key = process.env.SECRECT_KEY


const Authentication =async (req, res, next)=>{
const token = req.cookies.jwtoken
if(!token){
return res.status(401).send({message:"token not available"})
}
try {
    const verifyToken = jwtoken.verify(token, secret_key);
    const userData =await user.findOne({email : verifyToken.email}).select({password:0})
  if(!userData){
  return res.status(401).send({message:"user not found"})
  }
    req.user = userData
    req.userId = userData._id;
    req.token = token
    // console.log(userData)
    next()
} catch (error) {
    console.log(error)
    return res.status(401).send({message:"invalid token request"})
}
}
module.exports = Authentication;