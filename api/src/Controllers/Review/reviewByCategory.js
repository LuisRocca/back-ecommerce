const { conn } = require("../../db");
const { User, Review } = conn.models;

const reviewByCategory = async(req, res) => {
    const { idProduct } = req.params

    Review.findAll({ where: { productId: idProduct, },})

    .then(async (review) =>{
      const resul = review.map(async i => { 
        // console.log("linea 68", i.userId )
         const user = await User.findByPk(i.userId)
        //  console.log(user)  
          return {
          //  review: i.dataValues,
           calification: i.dataValues.calification,
           commentary: i.dataValues.commentary,
           username: user.username,
           image : user.image
          }    
       }) 
       const data = await Promise.all(resul)
      //  console.log("77 linea", data)
        res.status(200).json(data) 
    }) .catch((err)=>{
        // console.log(err)
          res.status(400).json(err)
        })
  
  //   try{
  //   const response = await Review.findAll({ where: { productId: idProduct, },})
  //      let prn = response.map(async  i => {
  //     const user = await User.findByPk(i.userId)
  //     //  console.log(await prn, "este es el user que esta 34")  
  //     // console.log('esto es la i', i)
  //       return {
  //         review: i.dataValues, 
  //         user: user.dataValues.username 
  //       }
  //   })
  //   prn.then((resp)=> {
  //     res.status(200).json(response , resp)
  //   })
    
  // } catch (error) {
  //   res.status(400).json(error)
  // }
  };

module.exports = {
    reviewByCategory
};