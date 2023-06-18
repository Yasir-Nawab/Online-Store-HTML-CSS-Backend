const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.urlencoded({ extended: false }))

app.use(express.static("./public"));
app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render("home");
// });
const recipeRouter = require("./server/routes/recipeRouter");
app.use("/",recipeRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})