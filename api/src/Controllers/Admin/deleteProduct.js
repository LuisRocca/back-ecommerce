const { conn } = require("../../db");
const { Product } = conn.models;

const deleteProduct = async (req, res, next) => {
  try {
    let { id } = req.body;

    let searchIdProduct = await Product.findAll({
      where: {
        id,
      },
    });

    if (!searchIdProduct[0]) {
      return res.status(409).send("El ID del Producto no existe");
    }

    let deleteProd = await Product.destroy({
      where: {
        id,
      },
    });

    res.status(200).send("Producto eliminado");
  } catch (err) {
      next(err)
    //res.status(404).send("ha ocurrido un error en la db");
  }
}

module.exports = {
    deleteProduct,
};