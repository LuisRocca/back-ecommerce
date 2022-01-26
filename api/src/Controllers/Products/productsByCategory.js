const { conn } = require("../../db");
const { Product, Category } = conn.models;

const productsByCategory = async (req, res) => {
    try {
        const { name } = req.params;       
        const newCategory = await Category.findAll({where:{name:name}});
        const allProductByCategory = await Product.findAll({where:{idCategory:newCategory[0].dataValues.idCategory}});
        return res.json(allProductByCategory);
    } catch (err) {
        console-log(err)
        res.json({msg: err})
    };
};

module.exports = {
    productsByCategory
};