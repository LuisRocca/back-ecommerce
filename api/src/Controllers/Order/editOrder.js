const { conn } = require("../../db");
const { Order, User} = conn.models;

const editOrder = async (req, res) => {
    const {carrito, status} = req.body;
    const idUser = req.params.idUser
    // const user = await User.findByPk(idUser)
    const order = await Order.findAll({where: {userId: idUser, status: 'open'}})
    try {
        const ordenModificar = await Order.findByPk(order[0].dataValues.id).then((order) => {
           
            
            order.update({carrito: carrito, status: status})
            
            res.status(200).json(order)
        })
    } catch (err) {
        console.log(err)
    }  
}

module.exports = {editOrder}