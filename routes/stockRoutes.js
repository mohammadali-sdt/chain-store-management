const express = require("express");
const stockController = require("../controllers/stockController");

const router = express.Router();

router
  .route("/")
  .get(stockController.getAllStock)
  .post(stockController.createStock);

router.route("/:id").delete(stockController.deleteStock);

router.route("/:city").get(stockController.getStocksByCity);

router.route("/max/capacity").get(stockController.getStockWithMaxCap);

module.exports = router;
