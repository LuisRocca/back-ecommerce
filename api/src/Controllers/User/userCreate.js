const { conn } = require("../../db");
const { User } = conn.models;

const userCreate = async (req,res) => {
    try{
      let userCreated = await User.findAll({where: {username: req.body.username}})
      console.log(userCreated);
      if (userCreated[0]) {
        res.status(202).json(userCreated)
      } else {

        let user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastName: req.body.lastName,
            address: req.body.address,
            image: req.body.image,
            admin: req.body.admin,
            loginWithGoogle: req.body.loginWithGoogle ? req.body.loginWithGoogle : false,
        })
        
        // console.log(user, "estes es el user que jode ")
        
        res.status(200).json(user)
      }
    }catch(error){
      // console.log(error.parameters)
      // const user = await User.findAll({where:{username: req.body.username}})
      // const user202 = `${user[0].id}`
      // res.status(202).json(user202)
      res.status(404).json({msg: error})
    } 
};

module.exports = {
    userCreate
};