const { conn } = require("../../db");
const { User } = conn.models;

const userCreate = async (req,res) => {
    try{
      let user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
        address: req.body.address,
        image: req.body.image,
        admin: req.body.admin,
    })
    res.json(user)
    }catch(error){
      console.log(error)
    }
};

module.exports = {
    userCreate
};