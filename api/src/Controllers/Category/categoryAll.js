const { conn } = require("../../db");
const { Category } = conn.models;


const categoryAll = async(req, res, next)=>{
  try{
    const appleCategories = await Category.findAll()
    
      return res.status(200).json(appleCategories)
  }catch(err){
    next(err)
  }
}

module.exports = {
  categoryAll
}