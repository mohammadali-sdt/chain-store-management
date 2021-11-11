const productModel = require('../models/productModel');
const genericCrud = require('./genericCrud');


exports.getAllProducts = genericCrud.getAll(productModel.Product);
exports.createStationery = genericCrud.createOne(productModel.Stationery);
exports.createClothing = genericCrud.createOne(productModel.Clothing);
