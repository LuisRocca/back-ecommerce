const { conn } = require("../../db");
const { Product } = conn.models;

const productdById = async (req, res) => {
    const appleId = req.params.id
    const appleProduct = await Product.findByPk(appleId)
    try {
        if (appleProduct) {
            res.status(200).json(appleProduct)
        }else {
            res.status(404).json({msg: "Product not found"})
        }

    } catch (err) {
        res.json({msg: err})
    }
};

module.exports = {
    productdById
};