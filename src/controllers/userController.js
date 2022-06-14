const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let user= req.body
    let userCreate = await UserModel.create(user)
    res.send({msg:userCreate})
}

module.exports.createUser= createUser
