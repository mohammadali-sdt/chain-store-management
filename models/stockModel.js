const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");

const stockSchema = new mongoose.Schema({
  st_name: {
    type: String,
    required: [true, "A stock must have a name!"],
    minLength: [5, "A stock name must have less or equal 5 characters"],
    maxlength: [255, "A stock name must have more or equal 255 characters"],
  },
  st_phone: {
    type: String,
    required: [true, "A stock must have a phone number!"],
    minLength: [11, "A stock phone number must have equal 11 numbers"],
    maxlength: [11, "A stock phone number must have equal 11 numbers"],
  },
  st_capacity: {
    type: Number,
    required: [true, "A stock must have a capacity!"],
  },
  st_address: {
    type: addressSchema,
    required: [true, "A stock must have address"],
  },
});
