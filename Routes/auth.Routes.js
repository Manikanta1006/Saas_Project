const express = require('express')
const router = express.Router()
const authController = require("../Controller/auth.controller")



router.post("/register",authController.Register)
router.post("/login",authController.Login)
router.get("/getallusers",authController.getAllUsersController)
router.put('/updateuser/:id',authController.updateUserController)
router.get("userbyid/:id",authController.getUserByIdController)
router.get("/users",authController.allusers)
module.exports = router
