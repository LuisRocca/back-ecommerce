const { conn } = require("../../db");
const { User } = conn.models;

const editUserbane = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id)
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
                banned:req.body.banned
            })
            res.status(200).json(user)
        } else {
            res.status(400).json({msg: 'User not found'})
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = {editUserbane}