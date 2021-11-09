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
}, {
    discriminatorKey: 'pr_category',
});

// pr_category: {
//         type: String,
//         enum: {
//             values: ['foodstuff', 'home appliance', 'stationery', 'clothing'],
//             message: 'category is either: foodstuff, home appliance, stationery, clothing',
//         }
//     }

const Product = mongoose.model('Product', productSchema);

const FoodstuffSchema = new mongoose.Schema({
    fo_ep:{
        type: Date,
        required: [true, 'A foodstuff must have a expiration date']
    },
    fo_weight: {
        type: Number,
        required:[true, 'A foodstuff must have a weight in gram unit']
    },
    fo_packType: {
        type: String,
        enum: {
            values: ['plastic', 'pocket'],
            message: 'pack type either be plastic or pocket',
        }
    },
    fo_number: {
        type: Number,
        default: 0,
    }
});

const Foodstuff = Product.discriminators('Foodstuff', FoodstuffSchema, {
    discriminatorKey: 'pr_category',
});

const HomeApplianceSchema = new mongoose.Schema({
    ho_energyCh: {
        type: String,
        enum: {
            values: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            message: 'A energy chart either: A-G'
        },
        required:[true, 'a Home appliance must have energy chart']
    },
    ho_powerRange: {
        type: Number,
        required:[true, 'a Home appliance must have power range']
    },
    ho_cabelLengeth: {
        type: Number,
    },
    ho_soundVolume: {
        type: Number,
    },
    ho_height: {
        type: Number,
        required: [true, 'a Home appliance must have height']
    },
    ho_width: {
        type: Number,
        required: [true, 'a Home appliance must have width']
    },
    ho_capacity: {
        type: Number,
    },
    ho_cooling: {
        type: Boolean,
    },
    ho_heating: {
        type: Boolean,
    }

});

const HomeAppliance = Product.discriminators('HomeAppliance', HomeApplianceSchema, {
    discriminatorKey: 'pr_product'
});

exports.Product = Product;
exports.Foodstuff = Foodstuff;

