const SuPr_Supply = require("../models/supr_supply");
const genericCRUD = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllSupplies = genericCRUD.getAll(SuPr_Supply);
exports.createSupply = genericCRUD.createOne(SuPr_Supply);

exports.getSupplierProducts = catchAsync(async (req, res, next) => {
  console.log(req.params.supplier);
  const supplierProducts = await SuPr_Supply.find({
    su_name: req.params.supplier.toLowerCase(),
  }).populate({
    path: "pr_id",
    select: "pr_name pr_price",
  });

  res.status(200).json({
    status: "success",
    data: {
      data: supplierProducts,
    },
  });
});
exports.getAllSupplierName = catchAsync(async (req, res, nex) => {
  const suppliersName = await SuPr_Supply.aggregate([
    {
      $group: {
        _id: "$su_name",
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data: suppliersName,
    },
  });
});
