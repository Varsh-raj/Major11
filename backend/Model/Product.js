// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // Store image path here
    location: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Store the user ID
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
