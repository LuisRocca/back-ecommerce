const { conn } = require("../../db");
const { User } = conn.models;



const userEdit = async (req,res,next) => {
    const { id } = req.params;
    const admin = req.body;
    try{
        const user = await User.findOne({where:{id}});
        if (!user) {
            return res.status(409).json({msg:"El usuario no existe"});
        }else{
            if (!admin) {
                return res.status(409).json({msg:'Faltan parametros por ingresar'});
            }else{
                newUser = await User.update({admin:admin.admin},{where:{id}});
                res.status(200).json({msg:'El usuario fue editado con exito'});
            }
        }
    }catch (err) {
        next(err)
    };
};

module.exports = {
    userEdit
};