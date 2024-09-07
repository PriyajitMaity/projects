const jwt =require("jsonwebtoken");

const authentication =async ({_id, username, password}) =>{
    const token =await jwt.sign({_id, username, password}, process.env.KEY)
    return token;
}

module.exports.authentication = authentication;