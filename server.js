const port=process.env.PORT||3000;
const server=require("./api.js");
server.listen(port,function(){
    console.log("server is listening at port 3000")
})








