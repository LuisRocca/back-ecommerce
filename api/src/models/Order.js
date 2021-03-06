const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

   sequelize.define('order',{
    carrito: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('open', 'created', 'processing', 'cancelled', 'approved'),
        allowNull: false
    },
    payment_id:{
         type: DataTypes.BIGINT,
         defaultValue: 0
     },
    // payment_status:{
    //     type: DataTypes.STRING,
    //     defaultValue: ""
    // },
    // merchant_order_id: {
    //     type: DataTypes.BIGINT,
    //     defaultValue: 0
    // },

  });
};