const { conn } = require("../../db");
const { Category } = conn.models;


const editCategory = async (req, res, next)=>{
    try{
        let {id}=req.params;
        let {name}=req.body;

            let searchId= await Category.findAll({ // buscar el id de la categoria en el modelo categoria
                where:{
                    idCategory:id
                }
            });

            if(!searchId[0]){// validamos si nos trae un arreglo vacio 
                return res.status(409).send("El ID de la categoria no existe");
            }else{
                let editCategory= await Category.update({ // editamos la categoria
                    name,
                    },{where:{
                        idCategory:id
                    }
                });
                return res.send(editCategory) // mostramos en  pantalla la categoria editada
            }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    editCategory
};