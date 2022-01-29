const { conn } = require("../../db");
const { User, Review } = conn.models;

const reviewCreateByUser = async (req, res) => {  
    try {
     const {idProduct, idUser} = req.params;
     const {commentary, calification} = req.body;
     const user = await User.findByPk(idUser);
               await user?.addProduct(idProduct)
      console.log(user.dataValues.username)
      const response = await Review.update(
       { commentary, calification,  },
      //  { include: { user: user.dataValues.username} } ,
       {   where: { productId: idProduct, userId: idUser, },  },
      ) 
       response[0] === 1
       ? res.status(200).json({res: "se a creado una nueva Review"})
       : res.status(401).json({ msg: "id de usuario o producto invalido"})
     
       } 
     catch (error) {
       res.status(400).json({msg: "also a salido mal con la peticion" , error: error})
     } 
   };

module.exports = {
    reviewCreateByUser
};