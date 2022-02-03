const { conn } = require("../../db");
const { User } = conn.models;



const userAll = async (req,res,next) => {
    try{
        const allUser = await User.findAll();
        if (allUser.length>0) {
            return res.status(200).json(allUser);            
        }else{
            return res.status(404).json({msg:'La base de datos no tiene usuarios registrados'})
        }
    }catch (err) {
        next(err)
    };
};

module.exports = {
    userAll
};