const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/:id").delete(productController.deleteProduct);
router.route("/stationery").post(productController.createStationery);
router.route("/stationery/:id").patch(productController.updateStationery);
router.route("/clothing").post(productController.createClothing);
router.route("/clothing/:id").patch(productController.updateClothing);
router.route("/foodstuff").post(productController.createFoodstuff);
router.route("/foodstuff/:id").patch(productController.updateFoodstuff);
router.route("/foodstuff").get(productController.getAllFoods);
router.route("/homeappliance").post(productController.createHomeAppliance);
router.route("/homeappliance/:id").patch(productController.updateHomeAppliance);
router.route("/foodstuff/outdate").get(productController.getOutdateFoods);
router
  .route("/homeappliance/maxpower")
  .get(productController.getfiveMaxPowerRangeProduct);
router
  .route("/homeappliance/heaviest")
  .get(productController.getHeaviestHomeAppliance);

router
  .route("/homeappliance/lightest")
  .get(productController.getLightestHomeAppliance);

module.exports = router;
