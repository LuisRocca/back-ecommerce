const { conn } = require("../../db");
const { Product, Category, User } = conn.models;


const createProduct = async (req, res, next)=>{
    try{
        let {idUser, idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

        if(idUser && idCategory){

            let searchIdUser= await User.findAll({
                where:{
                    id: idUser
                }
            });

            if(!searchIdUser[0]){
                return res.status(409).send("El ID del Usuario no existe");
            }else{
                if(searchIdUser[0].admin===true){
                    let searchIdCategory= await Category.findAll({
                        where:{
                            idCategory
                        }
                    });
                    if(!searchIdCategory[0]){
                        return res.status(409).send("El ID de la categoria no existe");
                    }else{
                        console.log("entra")
                        let newProduct= await Product.create({
                            name,
                            description,
                            image,
                            color,
                            price,
                            stock,
                            storage,
                            connectivity,
                            model,
                            ram
                        });
                        newProduct.setCategory(idCategory)
                        res.send(newProduct)
                    }
                }else{
                    return res.status(408).send("el Usuario no es Adminstrador")
                }
            }
        }else{
            return res.status(404).send("Ingrese idUser y idCategory")
        }
    }
    catch(err){
        next(err)
        //return res.status(404).send("ha ocurrido un error en la db")
    }
}

module.exports = {
    createProduct
};