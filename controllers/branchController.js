const Branch = require("../models/branchModel");
const genericCrud = require("../controllers/genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllBranches = genericCrud.getAll(Branch);

exports.createBranch = genericCrud.createOne(Branch);
exports.deleteBranch = genericCrud.deleteOne(Branch);

exports.getBranchsByCity = catchAsync(async (req, res, next) => {
  const branchs = await Branch.find({ "br_address.city": req.params.city });

  res.status(200).json({
    status: "success",
    data: branchs,
  });
});
