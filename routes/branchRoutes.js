const express = require("express");
const branchController = require("../controllers/branchController");

const router = express.Router();

router
  .route("/")
  .get(branchController.getAllBranches)
  .post(branchController.createBranch);

router.route("/:id").delete(branchController.deleteBranch);

router.route("/:city").get(branchController.getBranchsByCity);

module.exports = router;
