const nodemailer = require('nodemailer');
const {USER, PASS} = process.env;

const sendMail = async(req, res, next)=>{
    const mmm = req;
  
    try{
        contentHTML = `
            <h1>ESTO ES UNA PRUEBA</h1>
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
            text: 'prueba'
        });
        return res.status(200).json(info)
    }catch(err){
        next(err)
      }
  };
    
    module.exports = {
        sendMail
    }