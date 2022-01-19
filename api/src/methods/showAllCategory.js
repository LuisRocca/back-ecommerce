const {conn} = require('../db');
const { Category } = conn.models;
const {apple} = require('../../api.json');

module.exports = {
    
    showAllCategory: async () => {
        let appleCategory = apple;
        appleCategory = appleCategory.products.map(categor=>{
            return categor.category
            });
        appleCategory= appleCategory.reduce((a, e)=> {
            if (!a.find(d => d == e)) {
                a.push(e)
                }
            return a;
        }, []);
        for (let i = 0; i < appleCategory.length; i++) {
            await Category.findOrCreate(
                {
                    where: { name: appleCategory[i]}
                }
            )                
        }
    }
}