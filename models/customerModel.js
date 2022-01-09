const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");
const validator = require("validator");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema(
  {
    cu_name: {
      type: String,
      required: [true, "A customer must have a name!"],
      minLength: [3, "A customer name must have more or equal 3 characters"],
      maxlength: [40, "A customer name must have less or equal 40 characters"],
    },
    cu_lastname: {
      type: String,
      required: [true, "A customer must have a last name!"],
      minLength: [
        3,
        "A customer last name must have more or equal 3 characters",
      ],
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
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, "Please provie a valid email"],
    },
    cu_address: {
      type: addressSchema,
      required: [true, "A customer must have address"],
    },
    cu_age: { type: Number },
    cu_password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    cu_passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (field) {
          return field === this.cu_password;
        },
        message: "Passwords are not the same!",
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// customerSchema.virtual("age").get(function () {
//   const current_year = new Date().getFullYear();
//   const age = current_year - this.cu_birthDate.getFullYear();
//   return age;
// });

customerSchema.pre("save", function (next) {
  const current_year = new Date().getFullYear();
  this.cu_age = current_year - this.cu_birthDate.getFullYear();
  next();
});

customerSchema.pre("save", async function (next) {
  if (!this.isModified("cu_password")) {
    return next();
  }
  this.cu_password = await bcrypt.hash(this.cu_password, 12);
  this.cu_passwordConfirm = undefined;

  next();
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
