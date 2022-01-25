const { conn } = require("../../db");
const { Product } = conn.models;

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.body;

    let searchIdProduct = await conn.models.Product.findAll({
      where: {
        id: id,
      },
    });

    if (!searchIdProduct[0]) {
      return res.status(409).send("El ID del Producto no existe");
    }

    let deleteProd = await conn.models.Product.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("Producto eliminado");
  } catch (err) {
    res.status(404).send("ha ocurrido un error en la db");
  }
}

module.exports = {
    deleteProduct,
};