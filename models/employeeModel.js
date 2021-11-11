const mongoose = require("mongoose");
const addressSchema = require('./addressSchema');

const employeeSchema = new mongoose.Schema({
    em_name: {
        type: String,
        minLength: [3, 'A employee name must have more or equal 3 characters'],
        maxLength: [40, 'A employee name must have less or equal 40 characters'],
        required: [true, "A employee must have name"],
    },
    em_lastname: {
        type: String,
        minLength: [3, 'A employee lastname must have more or equal 3 characters'],
        maxLength: [40, 'A employee lastname must have less or equal 40 characters'],
        required: [true, "A employee must have lastname"],
    },
    em_fatherName: {
        type: String,
        minLength: [3, 'A name must have more or equal 3 characters'],
        maxLength: [40, 'A name must have less or equal 40 characters'],
        required: [true, "A employee must have father's Name"],
    },
    em_phone: {
        type: String,
        minLength: [11, "A phone must have 11 digits"],
        maxLength: [11, "A phone must have 11 digits"],
        required: [true, "A employee must have a phone"],
    },
    em_id: {
        type: String,
        minLength: [1, "A id must have 1 digits"],
        maxLength: [10, "A phone must have 10 digits"],
        required: [true, "A employee must have a id"],
        unique: true,
    },
    em_naid: {
        type: String,
        minLength: [1, "A id must have 1 digits"],
        maxLength: [10, "A phone must have 10 digits"],
        required: [true, "A employee must have a id"],
        unique: true,
    },
    em_brithDate: {
        type: Date,
        required: [true, 'A employee must have brith date']
    },
    em_personnelCode: {
        type: String,
        minLength: [9, "A personnel code must have 9 digits"],
        maxLength: [9, "A personnel code must have 9 digits"],
        unique: true,
        required: [true, "A employee must have a personnel code"],
    },
    em_password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    em_passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (field) {
                return field === this.em_password;
            },
            message: "Passwords are not the same!"
        }
    },
    em_address: {
        type: addressSchema,
        required: [true, 'A employee must have address']
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
    discriminatorKey: 'em_role'
});

employeeSchema.virtual('age').get(function () {
    const current_year = new Date().getFullYear();
    return current_year - this.em_brithDate.getFullYear();
});


// em_role: {
//     type: String,
//     enum: {
//       values: ['branch', 'stock', 'centeral'],
//       message: 'role is either: branch, stock, centeral',
//     },
//     required: [true, 'A employee must have a role'],
//   },

const Employee = mongoose.model('Employee', employeeSchema);

const branchEmployeeSchema = new mongoose.Schema({
    brem_work: {
        type: mongoose.Types.ObjectId,
        ref: 'Branch',
        required: [true, 'A branch employee must have id of branch']
    },
    brem_employmentDate: {
        type: Date,
        default: Date.now(),
    }
})

const BranchEmployee = Employee.discriminator('BranchEmployee', branchEmployeeSchema, "branch");

const stockEmployeeSchema = new mongoose.Schema({
    stem_work: {
        type: mongoose.Types.ObjectId,
        ref: "Stock",
        required: [true, 'A stock employee must have id of stock']
    },
    stem_employmentDate: {
        type: Date,
        default: Date.now(),
    },
    stem_section: {
        type: String,
        enum: ['storage', 'publish'],
        required: [true, 'stock employee must have a section']
    },
    stem_manager: {
        type: Boolean,
        default: false
    }
});

const StockEmployee = Employee.discriminator('StockEmployee', stockEmployeeSchema, 'stock');
const centralEmployeeSchema = new mongoose.Schema({});
const CentralEmployee = Employee.discriminator('CentralEmployee', centralEmployeeSchema, 'central');

exports.Employee = Employee;
exports.BranchEmployee = BranchEmployee;
exports.StockEmployee = StockEmployee;
exports.CentralEmployee = CentralEmployee;
