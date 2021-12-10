const Stock = require("../models/stockModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllStock = genericCrud.getAll(Stock);

exports.createStock = genericCrud.createOne(Stock);

exports.getStocksByCity = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const stocks = await Stock.find({ "st_address.city": req.params.city });

  res.status(200).json({
    status: "success",
    data: {
      data: stocks,
    },
  });
});

exports.getStockWithMaxCap = catchAsync(async (req, res, next) => {
  const stock = await Stock.aggregate([
    {
      $group: {
        _id: null,
        maxCapacity: { $max: "$st_capacity" },
        name: { $first: "$st_name" },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: stock,
  });
});
