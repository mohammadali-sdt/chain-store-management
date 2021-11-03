const express = require('express');
const branchController = require('../controllers/branchController');



const router = express.Router();

router.route('/').get(branchController.getAllBranches).post(branchController.createBranch)

module.exports = router;