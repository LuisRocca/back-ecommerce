const { conn } = require("../../db");
const { Category } = conn.models;

const categoryById = async (req, res) => {

    const {id} = req.params;

    const categoryId = await Category.findByPk(id)
    try {
        if (categoryId) {
            res.status(200).json(categoryId)
        }else {
            res.status(404).json({msg: "Category not found"})
        }

    } catch (err) {
        res.json({msg: err})
    }
};

module.exports = {
    categoryById
};