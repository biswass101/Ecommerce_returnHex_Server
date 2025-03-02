const createHttpError = require('http-errors')
const Product = require('../models/product.model')

//All Products
const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        next(error)
    }
}

//Single Products
const getProduct = async (req, res, next) => {
    try {
        const findProduct = await Product.findById(req.params.id)
        if (!findProduct) {
            const error = createHttpError(400, "Product Not Found")
            return next(error)
        }
        res.status(200).json({
            success: true,
            data: findProduct
        })
    } catch (error) {
        next(error)
    }
}

//extra controllers

//add single product
const addProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body)
        if (!newProduct) {
            const error = createHttpError(400, "Product Not Created")
            return next(error)
        }

        const savedProduct = await newProduct.save()
        if (!savedProduct) {
            const error = createHttpError(400, "Product Not Saved")
            return next(error)
        }

        res.status(201).json({
            success: true,
            message: "Product created Successfully",
            data: newProduct
        })

    } catch (error) {
        next(error)
    }

}

//add multiple product
const addMultipleProducts = async (req, res, next) => {
    try {
        // Expecting an array of products
        const products = req.body; 
        if (!Array.isArray(products) || products.length === 0) {
            const error = createHttpError(400, "Invalid products data")
            return next(error)
        }

        const savedProducts = await Product.insertMany(products);

        res.status(201).json({
            success: true, 
            message: "Products added successfully", 
            data: savedProducts 
        });

    } catch (error) {
        next(error)
    }
}

module.exports = { getAllProducts, getProduct, addProduct, addMultipleProducts }