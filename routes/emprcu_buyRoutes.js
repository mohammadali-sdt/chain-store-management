const express = require("express");
const emprcu_buyController = require("../controllers/emprcu_buyController");

const router = express.Router();

router
  .route("/")
  .get(emprcu_buyController.getAllSales)
  .post(emprcu_buyController.createSale);
router
  .route("/best-selling")
  .get(emprcu_buyController.getFiveBestSellingProduct);

module.exports = router;
