const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
    su_name: {
        type: String,
        minLength: [2, "A supplier name must have more or equal 2 characters"],
        maxLength: [255, "A supplier name must have less or equal 255 characters"],
        required: [true, "A supplier must have a name"],
    },
    pr_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "A supplier must have supply a product"]
    },
    supr_date: {
        type: Date,
        required: [true, "A supply must have a date"]
    },
    supr_num: {
        type: Number,
        required: [true, "A supply must have a number"]
    }
});

const SuPu_supply = mongoose.model('SuPu_supply', supplySchema);

module.exports = SuPu_supply;