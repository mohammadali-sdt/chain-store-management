const productModel = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getHomePage = catchAsync(async (req, res, next) => {
  const products = await productModel.Product.find();
  res.render("home", {
    title: "Home",
    products,
  });
});
