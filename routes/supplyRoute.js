const express = require('express');
const supplyController = require('../controllers/supplyController');

const router = express.Router();

router.route('/').get(supplyController.getAllSupplies).post(supplyController.createSupply);
router.route('/:supplier').get(supplyController.getSupplierProducts);
router.route('/supplier/all').get(supplyController.getAllSupplierName);
module.exports = router;