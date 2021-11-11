const mongoose = require("mongoose");

const brpr_storeSchema = new mongoose.Schema({
  br_id: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: [true, "id of branch is necessary"],
  },
  pr_id: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: [true, "id of product is necessary"],
  },
  brpr_num: {
    type: Number,
    default: 1,
  },
});

const BrPr_Store = mongoose.Model("BrPr_Store", brpr_storeSchema);

module.exports = BrPr_Store;
