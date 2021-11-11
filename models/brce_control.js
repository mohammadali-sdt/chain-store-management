const mongoose = require('mongoose');

const brce_controlSchema = new mongoose.Schema({
    ce_id: {
        type: mongoose.Types.ObjectId,
        ref: 'CentralEmployee',
        required: [true, 'the id of centeral empolyee is necessary']
    },
    br_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Branch',
        required: [true, 'id of branch is necessary']
    },
    brce_date: {
        type: Date,
        default: Date.now()
    },
});

const BrCe_Control = mongoose.model('BrCe_Control', brce_controlSchema);

module.exports = BrCe_Control;