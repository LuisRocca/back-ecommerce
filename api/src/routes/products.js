const { Router } = require('express');
const { conn } = require("../db");
const { Product, } = conn.models;

const router = Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    const appleProduct = await Product.findAll()
    try {
        if (name) {
            const appleName = appleProduct.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
            appleName.length ? res.status(200).json(appleName) : res.status(404).json({msg: "Product not found"})
        } else {
            res.json(appleProduct)
        }
    } catch (err) {
        res.json({msg: err})
    }
})

router.get('/:id', async (req, res) => {
    const appleId = req.params.id
    const appleProduct = await Product.findByPk(appleId)
    try {
        if (appleProduct) {
            res.status(200).json(appleProduct)
        }else {
            res.status(404).json({msg: "Product not found"})
        }

    } catch (err) {
        res.json({msg: err})
    }
})

module.exports = router