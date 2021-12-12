const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(employeeController.getAllEmployee);
router.route("/stock").post(employeeController.createStockEmployee);
router.route("/branch").post(employeeController.createBranchEmployee);
router.route("/central").post(employeeController.createCentralEmployee);
router.route("/young").get(employeeController.getEmployeesWithAge);
router.route("/:city").get(employeeController.getEmploeeysByCity);
router.route('/branch/num').get(employeeController.getNumOfBranchEm);
router.route('/central/num').get(employeeController.getNumOfCentralEm);
router.route('/stock/num').get(employeeController.getNumOfStockEm);
router.route('/stock/managers/:city').get(employeeController.getManagerOfStockByCity);
router.route('/stock/max').get(employeeController.getStockWithMaxEmployee);
module.exports = router;
