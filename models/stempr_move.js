const mongoose = require('mongoose');


const stempr_moveSchema = new mongoose.Schema({
    em_id: {
        type: mongoose.Types.ObjectId,
        ref: 'StockEmployee',
        required: [true, 'the id of stock empolyee is necessary']
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
    st_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Stock',
        required: [true, 'the id of stock is necessary']
    },
    stempr_date: {
        type: Date,
        default: Date.now(),
    },
});

const StEmPr_Move = mongoose.model('StEmPr_Move', stempr_moveSchema);

module.exports = StEmPr_Move;