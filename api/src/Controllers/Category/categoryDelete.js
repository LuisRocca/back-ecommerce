const { conn } = require("../../db");
const { Category } = conn.models;


const categoryDelete = async(req, res, next)=>{
    const {name} = req.query;
    try{
        let deleteProd = await Category.destroy({
            where: { name:name }
        });
        return res.status(200).json({msg:'se elimino la categoria'});
    }catch(err){
        next(err)
    }
}

module.exports = {
    categoryDelete
};