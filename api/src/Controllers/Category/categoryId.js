const { conn } = require("../../db");
const { Category } = conn.models;


const categoryId = async(req, res, next)=>{

  const {id} = req.params;
  const categoryId = await Category.findByPk(id)
  try {
      if (categoryId) {
          res.status(200).json(categoryId)
      }else {
          res.status(404).json({msg: "Category not found"})
      }
  }catch(err){
    next(err)
  }
}

module.exports = {
    categoryId
}



