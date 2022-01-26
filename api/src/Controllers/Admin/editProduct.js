const { conn } = require("../../db");
const { Product, Category, User } = conn.models;


const editProduct = async (req, res, next)=>{
    try{
        let {id}=req.params;
        let {idUser, idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

            let searchId= await Product.findAll({ // buscar el id del producto en el modelo producto
                where:{
                    id
                }
            });
            if(!searchId[0]){// validamos si nos trae un arreglo vacio 
                return res.status(409).send("El ID del producto no existe");
            }else{
                let searchIdUser= await User.findAll({
                    where:{
                        id:idUser
                    }
                })
                if(!searchIdUser[0]){
                    return res.status(409).send("El ID del Usuario no exite");
                }else{
                    if(searchIdUser[0].admin===true){//validamos si el usuario es admin
                        let searchIdCategory= await Category.findAll({ // buscamos el id de categoria en el modelo category
                            where:{
                                idCategory
                            }
                        });
                        if(!searchIdCategory[0]){ // validamos si nos trae un arreglo vacio
                            return res.status(409).send("El ID de la categoria no existe, por favor ingrese una categoria existente");
                        }else{
                            let editProduct= await Product.update({ // editamos el producto
                                name,
                                description,
                                image,
                                color,
                                price,
                                stock,
                                storage,
                                connectivity,
                                model,
                                ram,
                                idCategory
                            },{where:{id}});
                            return res.send(editProduct) // mostramos en  pantalla el producto editado
                        }
                    }else{
                        return res.status(408).send("el Usuario no es Adminstrador")
                    }
                }
            }
    }
    catch(err){
        next(err)
        //return res.status(404).send("ha ocurrido un error en la db")
    }
}

module.exports = {
    editProduct
};