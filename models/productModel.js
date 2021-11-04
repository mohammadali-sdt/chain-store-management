const mongoose = require('mongoose');


// Add Special Schema and attributes for different products. => one solution is use the mongoose discriminators. a way that we inhrit from a parent schema.

// Generic attributes for products
const productSchema = new mongoose.Schema({
    pr_name: {
        type: String,
        minLength: [2, "A product name must have more or equal 2 characters"],
        maxLength: [255, "A product name must have less or equal 255 characters"],
        required: [true, "A product must have a name"],
    },
    pr_brand: {
        type: String,
        minLength: [2, "A brand name must have more or equal 2 characters"],
        maxLength: [255, "A brand name must have less or equal 255 characters"],
        required: [true, "A brand must have a name"],
    },
    pr_barcode: {
        type: String,
        minLength: [12, "A barcode must have 12 digits"],
        maxLength: [12, "A barcode must have 12 digits"],
        unique: true,
        required: [true, "A product must have a brand"],
    },
    pr_pd:{
        type: Date,
        required: [true, 'A product must have production date']
    },
    pr_price: {
        type: Number,
        required: [true, 'A product must have price']
    },
    pr_category: {
        type: String,
        enum: {
            values: ['foodstuff', 'home appliance', 'stationery', 'clothing'],
            message: 'category is either: foodstuff, home appliance, stationery, clothing',
        }
    }
});

const Product = mongoose.model('Product', productSchema);

exports.Product = Product;

