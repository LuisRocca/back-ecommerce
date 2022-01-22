const {conn} = require('../db');
const {Category,Product} = require('../db');
const {apple} = require('../../api.json');
//const { Product, Category } = conn.models;

module.exports = {
    showAll: async () => {
        let appleProduct = apple;
        appleProduct = appleProduct.products.map(e=>{
            return {
                name: e.name,
                price: e.price,
                stock: e.stock,
                image: e.image ? e.image : 'not found',
                color: e.color,
                storage: e.storage,
                connectivity: e.connectivity,
                description: e.description,
                model: e.model,
                ram: e.ram,
                category: e.category
            }
        });
        for (let i = 0; i < appleProduct.length; i++) {
            const newProduct = await Product.create(
                {
                    name: appleProduct[i].name,
                    price: appleProduct[i].price,
                    stock: appleProduct[i].stock,
                    image: appleProduct[i].image,
                    color: appleProduct[i].color,
                    storage: appleProduct[i].storage,
                    connectivity: appleProduct[i].connectivity,
                    description: appleProduct[i].description,
                    model: appleProduct[i].model,
                    ram: appleProduct[i].ram
                }
            )
            const newCategory = await Category.findAll();
            let j = newCategory.findIndex(e=>e.dataValues.name === appleProduct[i].category)
            await newProduct.setCategory(newCategory[j].dataValues.idCategory)
        }
    },
}