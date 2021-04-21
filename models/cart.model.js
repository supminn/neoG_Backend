const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: Number
},{_id: false, timestamps: true});

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "User"
        },
    products: [cartItemSchema]
});

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;