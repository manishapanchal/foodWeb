const mongoose=require("mongoose");
const crypto=require("crypto")
const DB="mongodb+srv://manisha:9711965221@cluster0-p6jfb.mongodb.net/test?retryWrites=true&w=majority"

mongoose
.connect(DB ,{
    useNewUrlParser:true ,
    useCreateIndex:true,
    useUnifiedTopology:true})
.then(function(conn){
    // console.log(conn.connection);
    console.log("connected to db");
});

const userSchema=new mongoose.Schema({
    name:{type:String,required:[true,"Name is required field"],maxlength:40,},
    email:{type:String,unique:true},
    Mobile_number:{type:Number,required:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true,
    validate:function(){
        return this.password === this.confirmpassword;
    },
     message:"Password and confirm Password are not equal"},
     role:{type:String,enum:["admin","Restaurant Owner","user","Delivery Boy"],
    default:"user"},
    token:String
});

userSchema.pre("save",function(){
  this.confirmpassword==undefined;
})
userSchema.method("generateToken",function(){
    const token=crypto.randomBytes(32).toString("hex");
    this.token=token;
    return token;
})
const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;