const { conn } = require("../../db");
const { Product} = conn.models;


const editProduct = async (req, res, next)=>{
    try{
        let {id}=req.params;
        let {idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

            let searchId= await Product.findAll({ // buscar el id del producto en el modelo producto
                where:{
                    id
                }
            });
            if(!searchId[0]){// validamos si nos trae un arreglo vacio 
                return res.status(409).send("El ID del producto no existe");
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
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    editProduct
};