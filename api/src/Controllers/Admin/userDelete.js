const { conn } = require("../../db");
const { User } = conn.models;



const userDelete = async (req,res,next) => {
    const { id } = req.params;
    try{
        const user = await User.findOne({where:{id}});
        if (!user) {
            return res.status(409).json({msg:"El usuario no existe"});
        }else{
            const deleteUser = await User.destroy({where:{id}})
            res.status(200).json({msg:'El usuario fue eliminado con exito'})
        }
    }catch (err) {
        next(err)
    };
};

module.exports = {
    userDelete
};