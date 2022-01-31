const { conn } = require("../../db");
const { Order, User } = conn.models;

const getOrder = async (req, res) => {
   const orders = await Order.findAll({
        include: [{
            model: User
        }]
    })
    try {
        res.status(200).json(orders)

    } catch (err) {
        res.status(400).json({msg: err})
    }
}

module.exports = {
    getOrder
};