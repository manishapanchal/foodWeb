const express=require("express");
const app=express();
const cookieparser=require("cookie-parser");

const userRouter=require("./router/userRouter")
const planRouter=require("./router/planRouter")
const viewRouter=require("./router/viewRouter")
const bookingRouter=require("./router/bookingRouter")
app.use(express.json());

app.use(express.static("public"));
app.use(cookieparser());
//template engine
app.set("view engine","pug");
//template folder
app.set("views","view");

// cont li

app.use("/api/user",userRouter)
app.use("/api/plan",planRouter)
app.use("/",viewRouter)
app.use("/api/booking",bookingRouter)

app.use("",function(req,res){
    res.status(201).json({
    Result:"response from Api"
})
})

module.exports=app;

