const employeeModel = require("../models/EmployeeModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllEmployee = genericCrud.getAll(employeeModel.Employee);

exports.createStockEmployee = genericCrud.createOne(
  employeeModel.StockEmployee
);

exports.createBranchEmployee = genericCrud.createOne(
  employeeModel.BranchEmployee
);

exports.createCentralEmployee = genericCrud.createOne(
  employeeModel.CentralEmployee
);

exports.getEmployeesWithAge = catchAsync(async (req, res, next) => {
  // const employees = await employeeModel.Employee.find({ em_age : {$lt : 30}});

  const employees = await employeeModel.Employee.aggregate([
    { $match: { em_age: { $lt: 30 } } },
    { $group: { _id: null, count: { $sum: 1 } } },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data: employees,
    },
  });
});

exports.getEmploeeysByCity = catchAsync(async (req, res, next) => {
  const employees = await employeeModel.Employee.find({
    "em_address.city": req.params.city,
  });

  res.status(200).json({
    status: "success",
    data: employees,
  });
});

exports.getNumOfBranchEm = catchAsync(async (req, res, next) => {
  const numOfEm = await employeeModel.BranchEmployee.aggregate([
    {
      $group: {
        _id:null,
        count: { $sum : 1 }
      }
    }
  ]);

  res.status(200).json({
    status: "success",
    data : {
      data: numOfEm,
    }
  });
});

exports.getNumOfCentralEm = catchAsync(async (req, res, next) => {
  const numOfEm = await employeeModel.CentralEmployee.aggregate([
    {
      $group: {
        _id:null,
        count: { $sum : 1 }
      }
    }
  ]);

  res.status(200).json({
    status: "success",
    data : {
      data: numOfEm,
    }
  });
});

exports.getNumOfStockEm = catchAsync(async (req, res, next) => {
  const numOfEm = await employeeModel.StockEmployee.aggregate([
    {
      $group: {
        _id:null,
        count: { $sum : 1 }
      }
    }
  ]);

  res.status(200).json({
    status: "success",
    data : {
      data: numOfEm,
    }
  });
});