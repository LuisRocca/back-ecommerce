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
            // set(value) { this.setDataValue('name', value.toLowerCase()); },
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
<<<<<<< HEAD
            defaultValue: "aqui no va la lata de mierda que teniamos"
=======
            defaultValue: "Not foundhttps://d500.epimg.net/cincodias/imagenes/2022/01/11/companias/1641922124_752638_1641922274_noticia_normal_recorte1.jpg"
>>>>>>> 3e9fc2bc09754e816791f6f68a0e8845e2edc823
        },
        color: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        },
        storage: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        },
        connectivity: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        },
        model: {
            type:DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        },
        ram: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        }
    }, {timestamps: false} );
};