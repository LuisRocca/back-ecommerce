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
            defaultValue: "aqui no va la lata de mierda que teniamos"
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