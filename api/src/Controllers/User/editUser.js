const { conn } = require("../../db");
const { User } = conn.models;

const editUser = async (req,res) => {
    try {
        const idUser = req.params.idUser
        const user = await User.findByPk(idUser)
        if (user) {
            await user.update({
                username: req.body.username,
                email: req.body.email,
                name: req.body.name,
                lastName: req.body.lastName,
                address: req.body.address,
                image: req.body.image,
                admin: req.body.admin,
                password: req.body.password,
            })
            res.status(200).json(user)
        } else {
            res.status(400).json({msg: 'User not found'})
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = {editUser}