const Branch = require('../models/branchModel');
const genericCrud = require('../controllers/genericCrud');

exports.getAllBranches = genericCrud.getAll(Branch);

exports.createBranch = genericCrud.createOne(Branch);