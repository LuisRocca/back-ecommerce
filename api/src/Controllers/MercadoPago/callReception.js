const {USER, PASS, PROD_ACCESS_TOKEN} = process.env;
const nodemailer = require('nodemailer');
const axios = require('axios');

const callReception = async(req, res, next)=>{
    const { data } = req.body;
    try{
        /* const datosCompra = await axios.get(`https://api.mercadopago.com/v1/payments/${data.id}?access_token=${PROD_ACCESS_TOKEN}`) */
        
        contentHTML = `
            <h1>GRACIAS POR COMPRAR EN IGROUP-6</h1>
            
        `;
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 25,
            auth: {
                user: USER,
                pass: PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: "'Igroup Ventas' <USER>",
            to: 'arielsoda14@gmail.com',
            subject: 'Prueba',
            text: contentHTML
        });
        return res.status(200).json(data)
    }catch(err){
        next(err)
    }
  };
    
  module.exports = {
    callReception
  }
