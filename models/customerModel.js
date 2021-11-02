const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");

const customerSchema = new mongoose.Schema({
  cu_name: {
    type: String,
    required: [true, "A customer must have a name!"],
    minLength: [3, "A customer name must have more or equal 3 characters"],
    maxlength: [40, "A customer name must have less or equal 40 characters"],
  },
  cu_lastname: {
    type: String,
    required: [true, "A customer must have a last name!"],
    minLength: [3, "A customer last name must have more or equal 3 characters"],
    maxlength: [
      40,
      "A customer last name must have less or equal 40 characters",
    ],
  },
  cu_phone: {
    type: String,
    required: [true, "A customer must have a phone number!"],
    minLength: [11, "A customer phone number must have equal 11 numbers"],
    maxlength: [11, "A customer phone number must have equal 11 numbers"],
  },
  cu_birthDate: {
    type: Date,
    required: [true, "A customer must have a birth date!"],
  },
  cu_email: {
    type: String,
    required: [true, "A customer must have a email!"],
  },
  cu_password: {
    type: String,
    required: [true, "A customer must have set a password!"],
  },
  cu_address: {
    type: addressSchema,
    required: [true, "A customer must have address"],
  },
});
