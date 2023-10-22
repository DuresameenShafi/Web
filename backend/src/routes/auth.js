const router=require('express').Router();
const {user}= require("../models/user");
const joi = require('joi');


router.post('/',async(req,res)=>{
try {
   const{error}= validate(req.body);
 if(error)
   return res.status(400).send({message : error.details[0].message});
 
 const user= await User.findOne({email: req.body.email});
 if(!user)
return res.status(401).send({message:" invalid email or password" });
 const validpassword = await bcrypt.compare(
res.body.password, user.password);
 
if (!validpassword)
return res.status(401).send({message:" invalid email or password" });

const token = user.generateAuthToken();
res.status(200).send({ data : token ,message :" logged in successfully"});


    
} catch (error) {
    res.status(500).send({message:"internal server error"})
}});

const validate= (data)=>{
const schema= joi.object({

email:Joi.string().email().required().label('email'),
password:passwordComplexity().required().label('password'),

});
return schema.validate(data)
};


module.exports= router;