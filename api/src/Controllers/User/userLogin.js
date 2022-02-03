const { conn } = require("../../db");
const { User } = conn.models;
let bcrypt = require('bcryptjs');

const userLogin = async (req,res) => {
    try {
        const comparePassword=(passwordEncripted,passwordReceived)=>{
            return bcrypt.compareSync(passwordReceived,passwordEncripted)
        }
        const { email , password } = req.body
        const userAuth = await User.findAll({where: { email:email },})
        const response = comparePassword( userAuth[0].dataValues.password , password ) 
        //  console.log(userAuth[0].dataValues.password , "este es el recorrido")
        response ?
        res.status(200).json({
             username:userAuth[0].dataValues.username ,
             admin: userAuth[0].dataValues.admin,
             id: userAuth[0].dataValues.id 
             }) :
        res.status(400).json({msg: "contraseña incorrecta"})
    } catch (error) {
      res.status(404).json({msg: "usuario invalido"})
    }
};

module.exports = {
    userLogin
};

