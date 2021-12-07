const employeeModel = require("../models/EmployeeModel");
const genericCrud = require("./genericCrud");

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
