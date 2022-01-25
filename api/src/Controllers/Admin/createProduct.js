const { conn } = require("../../db");
const { Product, Category, User } = conn.models;


const createProduct = async (req, res)=>{
    try{
        let {idUser, idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

        let searchIdUser= await User.findAll({
            where:{
                id: idUser
            }
        });

        if(!searchIdUser[0]){
            return res.status(409).send("El ID del Usuario no es Admin");
        }else{
            let searchIdCategory=await Category.findAll({
                where:{
                    idCategory:idCategory
                }
            });

            if(!searchIdCategory[0]){
                return res.status(409).send("El ID de la Categoria no existe");
            }

        }
    }
    catch(err){
        res.status(404).send("ha ocurrido un error en la db")
    }
}

module.exports = {
    createProduct
};