const Customer = require('../models/customerModel');
const genericCrud = require('./genericCrud');

exports.getAllCustomers = genericCrud.getAll(Customer);
exports.createCustomer = genericCrud.createOne(Customer);
