const mongoose = require("mongoose");

const brst_haveSchema = new mongoose.Schema({
  br_id: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: [true, "id of branch is necessary"],
  },
  st_id: {
    type: mongoose.Types.ObjectId,
    ref: "Stock",
    required: [true, "id of stock is necessary"],
  },
});

const BrSt_Have = mongoose.Model("BrSt_Have", brst_haveSchema);

module.exports = BrSt_Have;
