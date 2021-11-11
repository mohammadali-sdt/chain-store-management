import mongoose from "mongoose";

const brempr_distributionSchema = new mongoose.Schema({
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
    br_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Branch',
        required: [true, 'the id of branch is necessary']
    },
    brempr_date: {
        type: Date,
        default: Date.now(),
    },
  //    stempr_num => virtual.
});

const BrEmPr_Distribution = mongoose.model('BrEmPr_Distribution', brempr_distributionSchema);

module.exports = BrEmPr_Distribution;