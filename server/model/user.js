const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


const Schema = mongoose.Schema;

const UserSchema = new Schema({
firstname:{
    type:String,
    require:true
},
lastname :{
    type:String,
    require:true
},
phonenumber:{
    type:Number,
    require:true
},
gender:{
    type:String,
    require:true
},

email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
}
}) ;
UserSchema.pre("save",async function(next){
    const hash =await bcrypt.hash(this.password,12)
    this.password = hash
    next()
})

const user = mongoose.model("users",UserSchema);
module.exports = user;