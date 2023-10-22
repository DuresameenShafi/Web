const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity= require('joi-password-complexity');
const Joi = require('joi');



const UserSchema = new mongoose.Schema({
firstName : {type: String , required :true},
secondName : {type: String , required :true},
email : {type: String , required :true},
password: {type: String , required :true},


});

UserSchema.methods.generateAuthToken= function(){
const token= jwt.sign({_id: this_id},process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
return token

}
const user= mongoose.model('user', UserSchema);


const validate= (data)=>{
const schema= joi.object({

firstName:Joi.string().required().label('firstname'),
secondName:Joi.string().required().label('secondname'),
email:Joi.string().email().required().label('email'),
password:passwordComplexity().required().label('password'),

});
return schema.validate(data)
};

module.exports ={ user, validate};