const express = require("express");
const viewsController = require("../controllers/viewsController");
const router = express.Router();

router.route("/").get(viewsController.getHomePage);
router.route("/employee").get(viewsController.showEmployees);

module.exports = router;
