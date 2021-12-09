const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(employeeController.getAllEmployee);
router.route("/stock").post(employeeController.createStockEmployee);
router.route("/branch").post(employeeController.createBranchEmployee);
router.route("/central").post(employeeController.createCentralEmployee);
router.route('/young').get(employeeController.getEmployeesWithAge);

module.exports = router;
