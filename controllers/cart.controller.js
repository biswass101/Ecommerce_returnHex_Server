const createHttpError = require("http-errors")
const Cart = require("../models/cart.model")

//add cart
const addToCart = async (req, res, next) => {
    try {
        const prodInfo = req.body //array of products Info
        const newProdCart = new Cart(prodInfo)
        if(!newProdCart) {
            const error = createHttpError(400, "Cart Not Created")
            return next(error)
        }

        const savedProdCart = await newProdCart.save()
        if(!savedProdCart) {
            const error = createHttpError(400, "Cart Not Saved")
            return next(error)
        }

        res.status(201).json({
            success: true,
            message: "Added to cart",
            data: newProdCart
        })
    } catch (error) {
        next(error)
    }
}

//delet cart
const deleteCart = async (req, res, next) => {
    try {
        const getCart = await Cart.findByIdAndDelete(req.params.id)
        if(!getCart) {
            const error = createHttpError(404, "Cart Not Found")
            return next(error)
        }

        res.status(200).json({
            success: true,
            message: "Cart Deleted",
            data: getCart
        })
    } catch (error) {
        next(error)
    }
}

//get carts
const getCarts = async (req, res, next) => {
    try {
        const getCart = await Cart.findById(req.params.id)
        if(!getCart) {
            const error = createHttpError(404, "Cart Not Found!")
            return next(error)
        }

        res.status(200).json({
            success: true,
            messagge: 'Cart Found',
            data: getCart
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { addToCart, deleteCart }