const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('products', {
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
            defaultValue: "aqui no va la lata de mierda que teniamos"
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
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
            tipe: DataTypes.STRING,
            allowNull: true,
        }
    }, {timestamps: false} );
};