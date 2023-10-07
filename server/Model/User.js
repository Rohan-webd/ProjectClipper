const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator  = require('validator');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide a Name'],
        maxlength:[40,'Name should be under 40 characters']
    },
    email:{
        type:String,
        required:[true,'Please Provide a Email'],
        validate:[validator.isEmail , 'Please Enter Email in Correct format'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Provide a Password'],
        minLength:[6,'Password should be of minimum Length of 6 characters'],
        select:false
    },
    role:{
        type:String,
        default:'user'
    },
    googleId:{
        type:String
    },
    Created_at:{
    type:Date,
    default:Date.now
    }
});
UserSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
})
//Validating Password
// UserSchema.methods.ValidatePass = async function(UserPassword){
//     return await bcrypt.compare(UserPassword,this.password);
// }

// //Jwt Token Generation
// UserSchema.methods.getjwtToken = function(){
//    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
//         expiresIn : process.env.JWT_EXPIRY,
//     });
// }


module.exports = mongoose.model('User',UserSchema);