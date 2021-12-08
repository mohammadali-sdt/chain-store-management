const express = require("express");
const stockController = require("../controllers/stockController");

const router = express.Router();

router
  .route("/")
  .get(stockController.getAllStock)
  .post(stockController.createStock);

router.route("/:city").get(stockController.getStocksByCity);

module.exports = router;
