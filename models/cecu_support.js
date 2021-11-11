const mongoose = require('mongoose');


const cecu_schema = new mongoose.Schema({
    ce_id: {
        type: mongoose.Types.ObjectId,
        ref: 'CentralEmployee',
        required: [true, 'the id of centeral empolyee is necessary']
    },
    cu_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'id of customer is necessary']
    },
    cecu_date: {
        type: Date,
        default: Date.now()
    },
    cecu_rank: {
        type: Number,
        required: [true, 'rank of customer is necessary'],
        min: [1, 'rank number must have more or equal 1'],
        max: [10, 'rank number must have less or equal 10']
    }
});

const CeCu_Support = mongoose.model('CeCu_Support', cecu_schema);

module.exports = CeCu_Support;