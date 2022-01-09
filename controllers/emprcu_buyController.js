const EmPrCu_Buy = require("../models/emprcu_buy");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllSales = genericCrud.getAll(EmPrCu_Buy);

exports.getOneSales = genericCrud.getOne(EmPrCu_Buy);

exports.createSale = genericCrud.createOne(EmPrCu_Buy);

exports.getFiveBestSellingProduct = catchAsync(async (req, res, next) => {
  const data = await EmPrCu_Buy.aggregate([
    {
      $unwind: "$pr_list",
    },
    {
      $group: {
        _id: "$pr_list.pr_id",
        numOfSelling: { $sum: "$pr_list.number" },
      },
    },
    {
      $sort: {
        numOfSelling: -1,
      },
    },
    {
      $limit: 5,
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "product",
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data,
    },
  });
});
