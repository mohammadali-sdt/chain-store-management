const mongoose = require("mongoose");

const stce_checkSchema = new mongoose.Schema({
  st_id: {
    type: mongoose.Types.ObjectId,
    ref: "Stock",
    required: [true, "id of stock is necessary"],
  },
  ce_id: {
    type: mongoose.Types.ObjectId,
    ref: "CentralEmployee",
    required: [true, "the id of centeral empolyee is necessary"],
  },
  stce_date: {
    type: Date,
    default: Date.now(),
  },
});

const StCe_Check = mongoose.model("StCe_Check", stce_checkSchema);

module.exports = StCe_Check;
