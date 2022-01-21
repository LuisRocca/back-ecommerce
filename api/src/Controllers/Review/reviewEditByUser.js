const { conn } = require("../../db");
const { Review } = conn.models;

const reviewEditByUser = async (req , res) =>{
    const { idProduct, idUser } = req.params;
    const { commentary, calification } = req.body;
   try {
    const respose = await Review.update({calification, commentary},{
        where: {
            productId: idProduct , 
            userId: idUser
        }
    })
    res.status(200).json(respose)
    } catch (error) {
        res.status(400).json({msg: error})
    }
};

module.exports = {
    reviewEditByUser
};