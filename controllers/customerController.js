const Customer = require("../models/customerModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllCustomers = genericCrud.getAll(Customer);
exports.createCustomer = genericCrud.createOne(Customer);

exports.getCustomersByAge = catchAsync(async (req, res, next) => {
  const customers = await Customer.aggregate([
    {
      $match: { cu_age: { $lt: 20 } },
    },
    {
      $group: { _id: null, count: { $sum: 1 } },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data: customers,
    },
  });
});
