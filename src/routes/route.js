const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.authenticate, auth.authorise, userController.getUserData)

router.put("/users/:userId",auth.authenticate, auth.authorise, userController.updateUser)
router.put('/users/:userId',auth.authenticate, auth.authorise, userController.deleteUser)
router.post("/users/:userId/posts",auth.authenticate, auth.authorise, userController.postMessage)

module.exports = router;



