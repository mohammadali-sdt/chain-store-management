const mongoose = require('mongoose');

const stpr_storeSchema = new mongoose.Schema({
    pr_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required:[true, 'id of product is necessary']
    },
    st_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Stock',
        required: [true, 'the id of stock is necessary']
    },
    stpr_num: {
        type: Number,
        default: 1
    }
})

const StPr_Store = mongoose.model('StPr_Store', stpr_storeSchema);

module.exports = StPr_Store;