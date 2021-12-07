const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router()

router.route('/').get(productController.getAllProducts);
router.route('/stationery').post(productController.createStationery);
router.route('/clothing').post(productController.createClothing);
router.route('/foodstuff').post(productController.createFoodstuff);
router.route('/homeappliance').post(productController.createHomeAppliance);

module.exports = router;