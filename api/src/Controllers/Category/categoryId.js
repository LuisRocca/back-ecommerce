const { conn } = require("../../db");
const { Category } = conn.models;


const categoryId = async(req, res, next)=>{
    const { idCategory } = req.params;
    try{
      const appleCategory = await Category.findOne({where:{idCategory}})
    
      return res.status(200).json(appleCategory.name)
  }catch(err){
    next(err)
  }
}

module.exports = {
    categoryId
}



