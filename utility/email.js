const  nodemailer=require("nodemailer");
// we are using mailtrap for testing the email part of api with the help of package (nodemailer)
// 1.S create setting
module.exports=async function(options){
try{
var transport= nodemailer.createTransport({
    host: "smtp.mailtrap.io",
//   port: 2525,
service:"gmail",
host:"smtp.gmail.com",
  auth: {
    user: "panchal.manisha4@gmail.com",
    pass: "eillebjwkgdsaoyq"
  }
});
// 2. Email Options
const emailOptions={
    from:'"Origami"<admin@origami.com>',
    to:options.to,
    subject:options.subject,
    text:options.text,
    html:options.html
}
await transport.sendMail(emailOptions);
}
catch(err){
    throw new Error(err)
}
};