const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook)
router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)
router.get("/authorOfBook", BookController.authorOfBook)
router.get("/getBooksbyRs", BookController.getBooksbyRs)

module.exports = router;