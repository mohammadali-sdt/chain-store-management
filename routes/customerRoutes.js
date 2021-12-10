const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router.route("/young").get(customerController.getCustomersByAge);
router.route('/:city').get(customerController.getCustomersByCity);
module.exports = router;
