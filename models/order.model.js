const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userInfo: {
        name: {
            type: String,
            required: [true, "user name required"],
            minlength: [5, "user name must be at least 5 characters long"],
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return /\S+@\S+\.\S+/.test(value);
                },
                message: "Email must be in valid format",
            },
        },
        address: {
            type: String,
            required: true
        }
    },
    items: [],
    totalAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
