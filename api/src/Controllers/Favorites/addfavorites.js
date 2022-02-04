const { conn } = require("../../db");
const { User, Product } = conn.models;

const addfavorites = async(req, res, next)=>{
    const { userId, productId } = req.body;
    try{
        const newuser = await User.findOne({where:{id:userId}});
        const product = await Product.findOne({where:{id:productId}})
        const newR = await newuser.addProducts(product)
            return res.status(200).json(newR);
    }catch(err){
      next(err)
    }
};
  
module.exports = {
  addfavorites
};