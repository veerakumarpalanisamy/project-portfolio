const bcrypt = require("bcrypt")
const User = require("../../models/user.model")
const jwt = require("jsonwebtoken")

const test = (req,res) => {
    res.send(" user route")
};

const signupController = async (req,res) => {
    try{
    const hassedPassword = bcrypt.hashSync(req.body.password, 8)
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hassedPassword
    })
    return res.json({msg: " user created", success: true, user})
    }
    catch(err){
    return res.json({msg: err.message, success: false})
    }
};


const signinController = async (req,res) => {
    try{
        const { email,password } = req.body
        const ValidUser = await User.findOne({email})
        if (!ValidUser){
            return res.json({msg: "user not found", success: false})
        } 
        const ValidPassword = bcrypt.compareSync(password, ValidUser.password)
        if (!ValidPassword){
            return res.json({msg: "wrong password", success: false})
        }
        const token = jwt.sign({id: ValidUser.id}, process.env.JWT_TOKEN)
            return res
            .cookie ("access_token", token, {httponly: true})
            .json({msg: "login successfully", success:true, ValidUser})
    }
    catch(err){
        return res.json({msg: err.message, success: false})
    }
};

const updateUser = async (req,res) => {
    try{
       const hassedPassword = bcrypt.hashSync(req.body.password, 8)
       const updateUser = await User.findByIdAndUpdate(req.params.id,{
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: hassedPassword
        }
       }, {new: true})
       return res.json(updateUser)
    }
    catch(err){
       return res.json({msg: err.message, success: false})
    }
};


const deleteUser = async (req,res) => {
    try{
      const user = User.findById(req.params.id)
      if (!user){
        return res.json({msg: "user not found", success: false})
    }
      await User.findByIdAndDelete(req.params.id)
      return res.json({msg: "user dleted successfully", success: true})
    }
    catch(err){
      return res.json({msg: err.message, success: false})
    }
}


module.exports = {
    test,signupController,signinController,updateUser,deleteUser
}