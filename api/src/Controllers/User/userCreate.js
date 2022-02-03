const { conn } = require("../../db");
const { User } = conn.models;



const userCreate = async (req,res) => {
    try{
      let comprobante = await User.findOne({where:{email:req.body.email}})
      // console.log(compro, "triplegordocontigo")

      if ( comprobante === null ) {
        
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
    res.status(200).json(user)
      } else {
        // res.status(202).json({id:comprobante.dataValues.id, username: comprobante.dataValues.username, admin: comprobante.dataValues.admin})
          res.status(202).json(comprobante.dataValues)

      }    
    }catch(error){
      res.status(402).json(error)
    } 
};

module.exports = {
    userCreate
};