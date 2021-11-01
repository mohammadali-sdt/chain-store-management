const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  br_name: {
    type: String,
    minLength: [5, "A branch name must have more or equal 5 characters"],
    maxLength: [255, "A branch name must have less or equal 255 characters"],
    require: [true, "A branch must have a name"],
  },
  br_owner: {
    type: String,
    minLength: [5, "A branch owner must have more or equal 5 characters"],
    maxLength: [40, "A branch owner must have less or equal 40 characters"],
    require: [true, "A branch must have a owner"],
  },
  br_phone: {
    type: String,
    minLength: [11, "A phone must have 11 digit"],
    maxLength: [11, "A phone must have 11 digit"],
    require: [true, "A branch must have a phone"],
  },
});
