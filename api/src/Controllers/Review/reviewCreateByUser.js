const { conn } = require("../../db");
const { User, Review } = conn.models;

const reviewCreateByUser = async (req, res) => {  
    try {
     const {idProduct, idUser} = req.params;
     const {commentary, calification} = req.body;
     const user = await User.findByPk(idUser);
               await user?.addProduct(idProduct)
      
      const response = await Review.update(
       { commentary, calification },
       {   where: { productId: idProduct, userId: idUser }, },
      )
       response === 1
       ? res.status(200).json({res: "se a creado una nueva Review"})
       : res.status(401).json({ msg: "id de usuario o producto invalido"})
       } 
     catch (error) {
       res.status(400).json({msg: "este error no esta controlado"})
     } 
   };

module.exports = {
    reviewCreateByUser
};