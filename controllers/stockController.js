const Stock = require("../models/stockModel");
const genericCrud = require("./genericCrud");

exports.getAllStock = genericCrud.getAll(Stock);

exports.createStock = genericCrud.createOne(Stock);
