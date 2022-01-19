const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: { min: 0.1 },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: { min: 0 },
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "Not foundhttps://d500.epimg.net/cincodias/imagenes/2022/01/11/companias/1641922124_752638_1641922274_noticia_normal_recorte1.jpg"
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        storage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        connectivity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        model: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        RAM: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {timestamps: false} );
};