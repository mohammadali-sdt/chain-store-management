const express = require("express");
const viewsController = require("../controllers/viewsController");
const router = express.Router();

router.route("/").get(viewsController.getHomePage);
router.route("/employee").get(viewsController.showEmployees);
router.route("/branch").get(viewsController.showBranchs);
router.route("/stock").get(viewsController.showStocks);
router.route("/stock/add").get(viewsController.addStock);
router.route("/branch/add").get(viewsController.addBranch);
router.route("/employee/add").get(viewsController.addEmployee);
router.route("/product/add").get(viewsController.addProduct);

module.exports = router;
