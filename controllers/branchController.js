const Branch = require('../models/branchModel');

exports.getAllBranches = async (req, res, next) => {
    const branches = await Branch.find();

    res.status(200).json({
        status: 'success',
        data: {
            data: branches,
        }
    });
};

exports.createBranch = async (req, res, next) => {
    console.log(req.body);
    const branch = await Branch.create(req.body);

    res.status(200).json({
        status: 'success',
        data : {
            data: branch
        },
    });
};