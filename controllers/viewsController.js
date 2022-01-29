const productModel = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const employeeModel = require("../models/employeeModel");

exports.getHomePage = catchAsync(async (req, res, next) => {
  const products = await productModel.Product.find();
  res.status(200).render("home", {
    title: "Home",
    products,
  });
});

exports.showEmployees = catchAsync(async (req, res, next) => {
  const employees = await employeeModel.Employee.find();
  res.status(200).render("employee", {
    title: "Employees",
    employees,
  });
});
