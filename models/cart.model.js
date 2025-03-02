const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    items: [], //name, price, subtotal
    totalAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
