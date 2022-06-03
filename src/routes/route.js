const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/movies" , function(req, res) {
//     let movies = ["iron man", "thor", "hulk", "captain america"]
//     res.send(movies)
// })


router.get("/movies/:indexNumber" , function(req, res) {

    let movies = ["iron man", "thor", "hulk", "captain america"]
    let mov = req.params.indexNumber
        if (mov< movies.length){
            
                mono = movies[mov];
                res.send(mono)
        } 
})



// router.get("/movies/:indexNumber" , function(req, res) {

//     let movies = ["iron man", "thor", "hulk","captain america" ]
//     let mov = req.params.indexNumber
//         if (mov< movies.length){
//                 mono = movies[mov];      
//         } 
//         else{
//             mono = ("enter valid no.");
//         }
//         res.send(mono)
// })



// router.get("/films" , function(req, res){
//     let b = req.a
//     let a = [ {
//         id: 1,
//         name: "The Shining"
//        }, {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]
//        res.send(a)
// })



// router.get("/films/:filmId" , function(req, res){
//     let a = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        },]

//        let b= req.params.filmId-1
//        if(b<a.length){
//            mono = (a[b])
//        }
//        else{
//            res.send("enter valid no.")
//        }
//        res.send(mono)
// })




// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;