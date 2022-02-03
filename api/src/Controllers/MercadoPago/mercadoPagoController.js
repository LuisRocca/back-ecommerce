const { PROD_ACCESS_TOKEN } = process.env;
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN
});


const mercadoPagoController = async(req, res, next)=>{
  
  // Crea un objeto de preferencia
  const preference = req.body
  //console.log('AQUI',preference)
  mercadopago.preferences
  .create(preference)
  .then(response=> {
    console.log('RESPUESTA',response)
    return res.redirect('https://www.google.com');
  })
  .catch(error=> {
    next(error);
  });
};
  
  module.exports = {
    mercadoPagoController
  }