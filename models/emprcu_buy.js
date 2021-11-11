const mongoose = require('mongoose');

const emPrCuBuySchema = new mongoose.Schema({
    em_id: {
        type: mongoose.Types.ObjectId,
        ref: 'BranchEmployee',
        required: [true, 'the id of branch empolyee is necessary']
    },
    pr_list: [{
        number: {
            type: Number,
            default: 1,
        },
        pr_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
            required: [true, 'the id of product is necessary']
        }
    }],
    cu_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'the id of customer is necessary']
    },
    emprcu_date: {
        type: Date,
        default: Date.now(),
    }
});

const EmPrCu_Buy = mongoose.model('EmPrCu_Buy', emPrCuBuySchema);

module.exports = EmPrCu_Buy;