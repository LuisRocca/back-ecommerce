const { Router } = require('express');
const { conn } = require("../db");
const { User, Review } = conn.models;

const router = Router();

// ------------------ esta ruta es para CREAR REVIEW 

router.post('/products/:idProduct/user/:idUser', async (req, res) => {  
 try {
  const {idProduct, idUser} = req.params;
  const {commentary, calification} = req.body;
   const user = await User.findByPk(idUser);
            await user?.addProduct(idProduct)
   
   const response = await Review.update(
    { commentary, calification },
    {   where: { productId: idProduct, userId: idUser }, },
   )
    response === [1]
    ? res.status(200).json({res: "se a creado una nueva Review"})
    : res.status(401).json({ msg: "id de usuario o producto invalido"})
    } 
  catch (error) {
    res.status(400).json({msg: "este error no esta controlado"})
  } 
})

// -------------------- Ryta PUT para modificar las review del usuario ya que solo hay uno por usuario

router.put( '/products/:idProduct/user/:idUser', async (req , res) =>{
  const { idProduct, idUser } = req.params;
  const { commentary, calification } = req.body;
 try {
  const respose = await Review.update({calification, commentary},{
      where: {
          productId: idProduct , 
          userId: idUser
      }
  }) 
   res.status(200).json(respose)
} catch (error) {
  res.status(400).json({msg: error})
}
});

// ------------------ Ruta get para tarer todas las review del usurio

router.get('/products/:idProduct', async(req, res) => {
  const { idProduct } = req.params

  try{
  const response = await Review.findAll({ where: { productId: idProduct, },})
   response.map(async  i => {
    const user = await User.findByPk(i.userId)
    //  console.log(user, "este es el user que esta 34")  
      return {
        review: i.dataValues,
        user
      }
  })
  res.status(200).json(response)
} catch (error) {
  res.status(400).json(error)
}
})

module.exports = router; 