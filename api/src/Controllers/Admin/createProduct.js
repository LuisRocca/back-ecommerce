const { conn } = require("../../db");
const { Product, Category, User } = conn.models;


const createProduct = async (req, res, next)=>{
    try{
        let {idUser, idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

        if(idUser && idCategory){ // validar si existe

            let searchIdUser= await User.findAll({ // buscar el id del usuario en el modelo user
                where:{
                    id: idUser
                }
            });

            if(!searchIdUser[0]){// validamos si nos trae un arreglo vacio 
                return res.status(409).send("El ID del Usuario no existe");
            }else{
                if(searchIdUser[0].admin===true){//validamos si el usuario es admin
                    let searchIdCategory= await Category.findAll({ // buscamos el id de categoria en el modelo category
                        where:{
                            idCategory
                        }
                    });
                    if(!searchIdCategory[0]){ // validamos si nos trae un arreglo vacio
                        return res.status(409).send("El ID de la categoria no existe");
                    }else{
                        let newProduct= await Product.create({ // creamos el producto
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
                        newProduct.setCategory(idCategory) // le seteamos el id de la categoria
                        res.send(newProduct) // mostramos en  pantalla el producto creado
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