const { conn } = require("../../db");
const { Order, User} = conn.models;

const updateOrder = async (req, res) => {
    const {payment_id, status} = req.body;
    const idUser = req.params.idUser
    console.log('PAY', payment_id)
    console.log('status',status)
    console.log('ID',idUser)
    // const user = await User.findByPk(idUser)
    const order = await Order.findAll({where: {userId: idUser, status: 'open'}})
    try {
        const ordenModificar = await Order.findByPk(order[0].dataValues.id).then((order) => {
            order.update(
                {
                    payment_id:payment_id ? payment_id: 0,
                    status:status ? status: 'open'
                }
            );
            res.status(200).json(order);
        })
    } catch (err) {
        console.log(err);
    }  
}

module.exports = {
    updateOrder
};