const productModel = require('../models/productModel');
const genericCrud = require('./genericCrud');


exports.getAllProducts = genericCrud.getAll(productModel.Product);
exports.createStationery = genericCrud.createOne(productModel.Stationery);
exports.createClothing = genericCrud.createOne(productModel.Clothing);
exports.createFoodstuff = genericCrud.createOne(productModel.Foodstuff);
exports.createHomeAppliance = genericCrud.createOne(productModel.HomeAppliance);

