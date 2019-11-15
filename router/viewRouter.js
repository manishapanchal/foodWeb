const express=require("express");
const viewRouter=express.Router();

const{
    getPlansPage,
    getHomePage,
    getProfilePage,
    // getLoginPage
     }=require("../controller/viewController");
const{
 protectRoute
} =require("../controller/authcontroller");



viewRouter.route("").get(getHomePage);

viewRouter.route("/plan").get(getPlansPage);

// viewRouter.route("/login").get(getLoginPage);

viewRouter.route("/me").get(getProfilePage);
                                                                                                                                                                                                                                               
 module.exports=viewRouter;