const {default: axios} = require("axios");
const {conn} = require('../db');
const { Product } = conn.models;

module.exports = {
    showAll: async () => {
        const {data} = await axios.get("http://localhost:4000/apple")
        let appleCat = []
        let appleProduct = []
        // console.log(data.products.category[0].iphone);
        data.products.category[0].iphone.map((e) => {
            appleProduct.push(e)
        })
        data.products.category[0].ipad.map((e) => {
            appleProduct.push(e)
        })
        data.products.category[0].watch.map((e) => {
            appleProduct.push(e)
        })
        data.products.category[0].airpods.map((e) => {
            appleProduct.push(e)
        })
        data.products.category[0].macbook.map((e) => {
            appleProduct.push(e)
        })
        data.products.category[0].tv.map((e) => {
            appleProduct.push(e)
        })
        appleProduct.map((e) => {
            return {
                name: e.name,
                price: 10.0,
                stock: 10,
                image: 'not found',
                color: e.color ? e.color : "color not found",
                storage: e.storage ? e.storage : "8gb",
                connectivity: e.connectivity,
                model: e.model,
                RAM: e.RAM,
            }
        })
        await Product.bulkCreate(appleProduct)
        }
}
