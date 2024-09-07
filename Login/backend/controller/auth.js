const User =require("../models/User");
const { encryptPassword } =require("../utils/hashing");
const { authentication } =require("../utils/passwordHelper");

const register =async(req, res) =>{
    const { username, password } =req.body;
    console.log(req.body);
    try{
        const hash_pass =await encryptPassword(password)
        const user = new User({username, password: hash_pass});
        await user.save();
        
        const  token =await authentication(user);
        res.status(200).json({status : "success", msg: 'Hello World!! from controller auth',
             user: {_id: user._id, username: user.username, password: user.password},
             token: token
            });
    }catch(err){
        console.error('error',err);
    }
}
module.exports.register =register;