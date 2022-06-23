const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/AuthorController")

const BlogController=require("../controllers/blogsController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//1]-----------Create Authors APi----------//
   router.post("/authors", AuthorController.authors)

//2]------------Create blogs APIS---------//
   router.post("/blogs",BlogController.createBlog )


//-----------Create Authors APi----------//
router.post("/authors", AuthorController.authors)
//------------Create blogs APIS---------//
router.post("/blogs",BlogController.createBlog )


// -----------Display Blogs API---------//
router.get("/displayBlog",BlogController.displayBlog )

//-----------Update Blog API----------//
   router.put("/updateBlog/:blogId", BlogController.updateBlog)

//---------Delete Blogs Using Blog Id----------//
   router.delete("/deleteBlogs/:blogId", BlogController.deleteBlogs) 

//================Delete by Query========================//
   router.delete("/deleteByQuery",BlogController.deleteByQuery)

//=====================LOGIN USER========================//
router.post("/login",AuthorController.loginUser)



module.exports = router;