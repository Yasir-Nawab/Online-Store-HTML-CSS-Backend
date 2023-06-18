require("../models/connection");
const propModel = require("../models/propertyModel");
const findModel = require("../models/findModel");

exports.homepage = async(req,res)=>{
    try {
        const show = await findModel.find({});
        res.render("home",{show});
    } catch (error) {
        console.log("There is somthing wrong")
    }
}

exports.signUp = async(req,res)=>{
    res.render("sign")
}

exports.signUpPost = async (req,res)=>{
    try {
        const propObject = await new propModel({
            name:req.body.name,
            email:req.body.email,
            number:req.body.phone,
            password:req.body.password
        });
        await propObject.save();
        res.send("submitted successfully");
    } catch (error) {
        console.log("There is some error in model"+error);
    }
}

















// function delet() {
//     findModel.deleteOne({
//         name:"Woman"
//     })
// }
// delet();