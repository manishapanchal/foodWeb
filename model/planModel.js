const mongoose=require("mongoose");

const DB= 
"mongodb+srv://manisha:9711965221@cluster0-p6jfb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(DB,{ 
    useNewUrlParser:true,
    useCreateIndex:true ,
    useUnifiedTopology:true 
})
.then(function(conn){
    // console.log(conn.connection);
    console.log("connected to db");
});

const planSchema=new mongoose.Schema({
    name:{type:String,required:[true,"Name is required field"]},
    price:{type:Number,min:20},
    description:{type:String,required:true},
    preference:{
        type:String,
        enum:["vegan","vegetarian","Organic","Non veg","Eggterian"]
    },
    averageratings:Number,
    duration:{type:Number}
})

const planModel=mongoose.model("planModel",planSchema);
module.exports=planModel;
