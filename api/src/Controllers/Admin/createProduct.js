const { conn } = require("../../db");
const { Product} = conn.models;


const createProduct = async (req, res, next)=>{
    try{
        let {idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram}=req.body;

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
    catch(err){
        next(err)
    }
}

module.exports = {
    createProduct
};