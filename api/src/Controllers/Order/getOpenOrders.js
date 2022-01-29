const { conn } = require("../../db");
const { Order, User } = conn.models;

const getOpenOrders = async (req, res) => {
    const {idUser} = req.params

    try {
        const orderUser = await Order.findAll({
            where: {userId: idUser, status: 'open' },
            include: [{
                model: User
            }]
        })
        res.status(200).json(orderUser)

    } catch (err) {
        res.status(404).json({msg: err})
    }
}

module.exports = {
    getOpenOrders
};