const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/AuthorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors", AuthorController.authors)



router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;