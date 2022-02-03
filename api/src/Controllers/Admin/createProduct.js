const { conn } = require("../../db");
const { Product, Category, User } = conn.models;


const createProduct = async (req, res, next)=>{
    try{
        const { idCategory, name, description, image, color, price, stock, storage, connectivity, model, ram }=req.body;

        if ( idCategory && name && description && image && price && stock ) {
            const newProduct = await Product.create(
                {
                    name,
                    price,
                    stock,
                    image,
                    color,
                    storage,
                    connectivity,
                    description,
                    model,
                    ram
                }
            );
            await newProduct.setCategory(idCategory.idCategory);
            return res.status(200).json({msg:'El producto fue creado exitosamente'});
        }else{
            return res.status(409).json({msg:'Faltan argumentos requeridos'});
        }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    createProduct
};