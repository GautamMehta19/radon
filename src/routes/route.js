const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/AuthorController")

const BlogController=require("../controllers/blogsController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-----------Create Authors APi----------//
router.post("/authors", AuthorController.authors)


//------------Create blogs APIS---------//
router.post("/blogs",BlogController.createBlog )

//-----------Display Blogs API---------//
router.get("/blogs",BlogController.displayBlog )
// router.get("/getAllBlogs",BlogController.getBlog)

//---------Delete Blogs Using Blog Id----------//
router.delete("/blogs/:blogId", BlogController.deleteBlogs) 
router.delete("/blogs",BlogController.deleteBlog)



module.exports = router;