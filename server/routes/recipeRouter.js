const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/",recipeController.homepage);
router.get("/signIn",recipeController.signUp);
router.post("/signIn",recipeController.signUpPost);

module.exports = router;