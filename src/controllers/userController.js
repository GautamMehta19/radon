const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)

    let date = new Date();
    let datetime = date.getDate()+" "
                   +(date.getMonth()+1) + " "
                   +date.getFullYear()+" "
                   +date.getHours()+" "
                   +date.getMinutes()+" "
                   +date.getSeconds()+" "
    console.log(datetime);


let ip2 = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(
        list.reduce(
           (rr, i) => rr.concat
           (i.family==='IPv4' && !i.internal && i.address || []),
        [])
    ),
[])
console.log(ip2)

    let  ip = req.ip
    console.log(ip )

     
    res.send({ msg: "This is coming from controller (handler)"})
}




const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode