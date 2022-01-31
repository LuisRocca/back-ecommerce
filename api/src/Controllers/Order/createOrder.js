const { conn } = require("../../db");
const { Order, User} = conn.models;

const createOrder = async (req, res) => {
    try {
    const {carrito, status} = req.body
    const user = await User.findByPk(req.params.idUser)
    const order = await Order.findAll({where: {userId: req.params.idUser, status: 'open'}})

        if (order.length > 0) {
            const ordenModificar = await Order.findByPk(order[0].dataValues.id).then((order) => {
                order.update({carrito: carrito})
            })
            res.status(200).json(ordenModificar)
        } else {
            const orderCreated = await Order.create({
                    carrito: carrito,
                    status: status,
                    userId: user.id,
                    // address: user.address,
                    // email: user.email,
                    // title: `producto ${user.username}`
            })
            res.status(200).json(orderCreated)
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createOrder
};