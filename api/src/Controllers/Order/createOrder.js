const { conn } = require("../../db");
const { Order, User} = conn.models;

const createOrder = async (req, res) => {
    try {
    const {carrito, status} = req.body
    const user = await User.findByPk(req.params.idUser)
    const order = await Order.findAll({where: {userId: req.params.idUser, status: 'open'}})
    // console.log(order[0].dataValues.carrito, 'esta es la otra orden');
        if (order.length > 0) {
            const ordenModificar = await Order.findByPk(order[0].dataValues.id).then((order) => {
            let carritoMod = []
                if (order.carrito.length === 0) {
                    order.update({carrito: carrito})
                // } else if (carrito.length === 0) {
                //     order.update({carrito: carrito})
                } else {
                    // const carritoMod = carrito.filter((e) => e.id !== order.carrito)
                    for (let i = 0; i < carrito.length; i++) {  // carrito uso cuando no estoy logueado
                        for (let j = 0; j < order.carrito.length; j++) {
                            if (carrito[i].id === order.carrito[j].id) {
                                break;
                            } else if (j === order.carrito.length - 1) {
                                carritoMod.push(carrito[i])
                            }
                        }
                    }
                    order.update({carrito: [...order.carrito, ...carritoMod]})
                }
            })
            res.status(200).json(ordenModificar)
        } else {
            const orderCreated = await Order.create({
                    carrito: req.body.carrito,
                    status: 'open',
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