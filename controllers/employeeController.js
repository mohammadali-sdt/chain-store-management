const employeeModel = require("../models/employeeModel");
const genericCrud = require("./genericCrud");
const catchAsync = require("../utils/catchAsync");

exports.getAllEmployee = genericCrud.getAll(employeeModel.Employee);

exports.createStockEmployee = genericCrud.createOne(
    employeeModel.StockEmployee
);

exports.createBranchEmployee = genericCrud.createOne(
    employeeModel.BranchEmployee
);

exports.createCentralEmployee = genericCrud.createOne(
    employeeModel.CentralEmployee
);

exports.getEmployeesWithAge = catchAsync(async (req, res, next) => {
    // const employees = await employeeModel.Employee.find({ em_age : {$lt : 30}});

    const employees = await employeeModel.Employee.aggregate([
        {$match: {em_age: {$lt: 30}}},
        {$group: {_id: null, count: {$sum: 1}}},
    ]);

    res.status(200).json({
        status: "success",
        data: {
            data: employees,
        },
    });
});

exports.getEmploeeysByCity = catchAsync(async (req, res, next) => {
    const employees = await employeeModel.Employee.find({
        "em_address.city": req.params.city,
    });

    res.status(200).json({
        status: "success",
        data: employees,
    });
});

exports.getNumOfBranchEm = catchAsync(async (req, res, next) => {
    const numOfEm = await employeeModel.BranchEmployee.aggregate([
        {
            $group: {
                _id: null,
                count: {$sum: 1}
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data: {
            data: numOfEm,
        }
    });
});

exports.getNumOfCentralEm = catchAsync(async (req, res, next) => {
    const numOfEm = await employeeModel.CentralEmployee.aggregate([
        {
            $group: {
                _id: null,
                count: {$sum: 1}
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data: {
            data: numOfEm,
        }
    });
});

exports.getNumOfStockEm = catchAsync(async (req, res, next) => {
    const numOfEm = await employeeModel.StockEmployee.aggregate([
        {
            $group: {
                _id: null,
                count: {$sum: 1}
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data: {
            data: numOfEm,
        }
    });
});

exports.getManagerOfStockByCity = catchAsync(async (req, res, next) => {
    console.log(req.params.city)
    const data = await employeeModel.StockEmployee.find({stem_manager: true}).populate({
        path: "stem_work",
        match: {'st_address.city': {$eq: req.params.city}}
    }).exec()

    const filterData = data.filter(em => em.stem_work !== null);

    res.status(200).json({
        status: "success",
        data: {
            data: filterData
        }
    });
});

exports.getStockWithMaxEmployee = catchAsync(async (req, res, next) => {
    const data = await employeeModel.StockEmployee.aggregate([
        {
            $group: {
                _id: '$stem_work',
                count: {$sum: 1}
            }
        },
        {
            $sort: {
                count: -1
            }
        },
        {
            $limit: 1
        },
        {
            $lookup: {
                from: 'stocks',
                localField: "_id",
                foreignField: "_id",
                as: 'stock'
            }

        },
    ])

    res.status(200).json({
        status: "success",
        data: {
            data
        }
    })
});

exports.getBranchWithMinEmployee = catchAsync(async (req, res, next) => {
        const data = await employeeModel.BranchEmployee.aggregate([{
            $group: {
                _id: '$brem_work',
                count: {$sum: 1}
            }
        },
            {
                $sort: {
                    count: -1
                }

            },
            {
                $limit: 1
            },
            {
                $lookup: {
                    from: 'branches',
                    localField: "_id",
                    foreignField: "_id",
                    as: 'branch'

                }
            }
        ])

        res.status(200).json({
            status: 'success',
            data: {
                data
            }
        })

    }
)