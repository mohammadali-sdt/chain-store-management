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
