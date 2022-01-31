const { conn } = require("../../db");
const { Category } = conn.models;


const categoryCreate = async(req, res, next)=>{
    const {name} = req.body;
    try{
        const newCategory = await Category.findOrCreate(
            {
                where: {
                    name
                }
            }
        );
        return res.status(200).json(newCategory);
    }catch(err){
        next(err)
    }
}

module.exports = {
    categoryCreate
}