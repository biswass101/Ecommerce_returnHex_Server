const createHttpError = require("http-errors")
const Order = require("../models/order.model")

const placeOrder = async (req, res, next) => {
    try {
        const getOrder = req.body
        const newOrder = new Order(getOrder)
        if(!newOrder) {
            const error = createHttpError(400, "Order Not Placed")
            return next(error)
        }

        const savedOrder = await newOrder.save()
        if(!savedOrder) {
            const error = createHttpError(400, "Order Not Placed")
            return next(error)
        }

        res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            data: newOrder
        })
    } catch (error) {
        next(error)
    }
}

module.exports  = {placeOrder}