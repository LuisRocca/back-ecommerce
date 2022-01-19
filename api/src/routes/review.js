const { Router } = require('express');
const { conn } = require("../db");
const { User, Product, Review } = conn.models;

const router = Router();

// ------------------ esta ruta es para CREAR REVIEW 

router.post('/products/:idProduct/user/:idUser', async (req, res) => {
    const {idProduct, idUser} = req.params;
    const {commentary, calification} = req.body;

   const product = await Product.findByPk(idProduct);
    product.addUsers(idUser)
   const response = Review.update(
    { commentary, calification },
    {   where: { userId: idUser, productId: idProduct }, },
   )
     res.status(200).json({res:response})
     
//   Products.findByPk(idProdut).then((product) => {
//     //  console.log(product, "linea 13 <-----")
//     product
//       .addUsers(idUser)

//       .then((newReview) => {
//         // console.log("linea 38 <--->" , newReview)
//         Review.update(
//           { commentary, calification },
//           {   where: { userId: idUser, productId: idProduct }, },
       
//         ).then((respose) => {
//           res.status(201).json(respose);
//         });
//       }).catch((err) => {
//               // console.log(err , "este es el segundo then --> error")  
//               res.status(400).send(err)
//               })
//              }) .catch((err) => {
//                 // console.log(err, "este es el primer then")
//                 res.status(400).send(err)
//                  })
})

module.exports = router; 