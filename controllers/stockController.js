const Stock = require("../models/stockModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllStock = genericCrud.getAll(Stock);

exports.createStock = genericCrud.createOne(Stock);

exports.deleteStock = genericCrud.deleteOne(Stock);

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
        _id: "$st_capacity",
        maxCapacity: { $max: "$st_capacity" },
        name: { $push: { name: "$st_name" } },
      },
    },
    {
      $sort: {
        maxCapacity: -1,
      },
    },
    {
      $limit: 1,
    },
  ]);

  // const stock = await Stock.find().sort({st_capacity: -1}).limit(1);

  res.status(200).json({
    status: "success",
    data: stock,
  });
});
