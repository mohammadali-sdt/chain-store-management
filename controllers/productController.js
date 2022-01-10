const productModel = require("../models/productModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = genericCrud.getAll(productModel.Product);
exports.createStationery = genericCrud.createOne(productModel.Stationery);
exports.createClothing = genericCrud.createOne(productModel.Clothing);
exports.createFoodstuff = genericCrud.createOne(productModel.Foodstuff);
exports.createHomeAppliance = genericCrud.createOne(productModel.HomeAppliance);

exports.getAllFoods = genericCrud.getAll(productModel.Foodstuff);

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

exports.getHeaviestHomeAppliance = catchAsync(async (req, res, next) => {
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
    data: {
      data: products,
    },
  });
});

exports.getLightestHomeAppliance = catchAsync(async (req, res, next) => {
  const products = await productModel.HomeAppliance.aggregate([
    {
      $group: {
        _id: "$ho_weight",
        minWeight: { $min: "$ho_weight" },
        name: { $push: { name: "$pr_name" } },
      },
    },
    {
      $sort: {
        minWeight: 1,
      },
    },
    {
      $limit: 1,
    },
  ]);
  c;
  res.status(200).json({
    status: "success",
    data: {
      data: products,
    },
  });
});

exports.getfiveMaxPowerRangeProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.HomeAppliance.aggregate([
    {
      $group: {
        _id: "$ho_powerRange",
        maxPower: { $max: "$ho_powerRange" },
        name: { $push: { name: "$pr_name" } },
      },
    },
    {
      $sort: {
        maxPower: -1,
      },
    },
    {
      $limit: 5,
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data,
    },
  });
});
