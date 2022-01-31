const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(employeeController.getAllEmployee);
router.route("/:id").delete(employeeController.deleteEmployee);
router.route("/stock").post(employeeController.createStockEmployee);
router.route("/stock/:id").patch(employeeController.updateStockEmployee);
router.route("/branch").post(employeeController.createBranchEmployee);
router.route("/branch/:id").patch(employeeController.updateBranchEmployee);
router.route("/central").post(employeeController.createCentralEmployee);
router.route("/central/:id").patch(employeeController.updateCentralEmployee);
router.route("/young").get(employeeController.getEmployeesWithAge);
router.route("/:city").get(employeeController.getEmploeeysByCity);
router.route("/branch/num").get(employeeController.getNumOfBranchEm);
router.route("/central/num").get(employeeController.getNumOfCentralEm);
router.route("/stock/num").get(employeeController.getNumOfStockEm);
router
  .route("/stock/managers/:city")
  .get(employeeController.getManagerOfStockByCity);
router.route("/stock/max").get(employeeController.getStockWithMaxEmployee);
router.route("/branch/min").get(employeeController.getBranchWithMinEmployee);
module.exports = router;
