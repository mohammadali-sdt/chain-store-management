const productModel = require("../models/productModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = genericCrud.getAll(productModel.Product);
exports.createStationery = genericCrud.createOne(productModel.Stationery);
exports.createClothing = genericCrud.createOne(productModel.Clothing);
exports.createFoodstuff = genericCrud.createOne(productModel.Foodstuff);
exports.createHomeAppliance = genericCrud.createOne(productModel.HomeAppliance);

exports.getOutdateFoods = catchAsync(async (req, res, next) => {
  const outdatedFoods = await productModel.Foodstuff.find({
    fo_ep: { $lt: Date.now() },
  });

  res.status(200).json({
    status: "success",
    data: {
      data: outdatedFoods,
    },
  });
});

exports.gettheTheHeaviestHomeAppliance = catchAsync(async (req, res, next) => {
  const products = await productModel.HomeAppliance.aggregate([
    {
      $group: {
        _id: "$ho_weight",
        maxWeight: { $max: "$ho_weight" },
        name: { $push: { name: "$pr_name" } },
      },
    },
    {
      $sort: {
        maxWeight: -1,
      },
    },
    {
      $limit: 1,
    },
  ]);

  res.status(200).json({
    status: "success",
    data: products,
  });
});
