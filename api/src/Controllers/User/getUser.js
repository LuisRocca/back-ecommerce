const { conn } = require("../../db");
const { User } = conn.models;

const getUser = async (req,res) => {
    try {
        const idUser = req.params.idUser
        const user = await User.findByPk(idUser)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({msg: 'User not found'})
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = {getUser}