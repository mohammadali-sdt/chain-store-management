const mongoose = require("mongoose");

// Add Special Schema and attributes for different products. => one solution is use the mongoose discriminators. a way that we inhrit from a parent schema.

// Generic attributes for products
const productSchema = new mongoose.Schema(
  {
    pr_name: {
      type: String,
      minLength: [2, "A product name must have more or equal 2 characters"],
      maxLength: [255, "A product name must have less or equal 255 characters"],
      required: [true, "A product must have a name"],
    },
    pr_brand: {
      type: String,
      minLength: [2, "A brand name must have more or equal 2 characters"],
      maxLength: [255, "A brand name must have less or equal 255 characters"],
      required: [true, "A brand must have a name"],
      lowercase: true,
    },
    pr_barcode: {
      type: String,
      minLength: [12, "A barcode must have 12 digits"],
      maxLength: [12, "A barcode must have 12 digits"],
      unique: true,
      required: [true, "A product must have a brand"],
    },
    pr_pd: {
      type: Date,
      required: [true, "A product must have production date"],
    },
    pr_price: {
      type: Number,
      required: [true, "A product must have price"],
    },
  },
  {
    discriminatorKey: "pr_category",
  }
);

productSchema.pre(/^find/, function (next) {
  this.find({
    $or: [{ fo_ep: { $exists: false } }, { fo_ep: { $gt: new Date() } }],
  });
  next();
});

const Product = mongoose.model("Product", productSchema);

const foodstuffSchema = new mongoose.Schema({
  fo_ep: {
    type: Date,
    required: [true, "A foodstuff must have a expiration date"],
  },
  fo_weight: {
    type: Number,
    required: [true, "A foodstuff must have a weight in gram unit"],
  },
  fo_packType: {
    type: String,
    enum: {
      values: ["plastic", "pocket"],
      message: "pack type either be plastic or pocket",
    },
    required: [true, "a foodstuff must have pack type"],
  },
  fo_number: {
    type: Number,
    default: 1,
  },
});

// foodstuffSchema.pre(/^find/, function (next) {
//   this.find({ fo_ep: { $gt: new Date() } });
//   next();
// });

const Foodstuff = Product.discriminator(
  "Foodstuff",
  foodstuffSchema,
  "Foodstuff"
);

const homeApplianceSchema = new mongoose.Schema({
  ho_energyCh: {
    type: String,
    enum: {
      values: ["A", "B", "C", "D", "E", "F", "G"],
      message: "A energy chart either: A-G",
    },
    required: [true, "a Home appliance must have energy chart"],
  },
  ho_powerRange: {
    type: Number,
    required: [true, "a Home appliance must have power range"],
  },
  ho_cabelLengeth: {
    type: Number,
  },
  ho_soundVolume: {
    type: Number,
  },
  ho_height: {
    type: Number,
    required: [true, "a Home appliance must have height"],
  },
  ho_width: {
    type: Number,
    required: [true, "a Home appliance must have width"],
  },
  ho_capacity: {
    type: Number,
  },
  ho_weight: {
    type: Number,
    required: [true, "a Home appliance must have weight"],
  },
  ho_cooling: {
    type: Boolean,
  },
  ho_heating: {
    type: Boolean,
  },
});

const HomeAppliance = Product.discriminator(
  "HomeAppliance",
  homeApplianceSchema,
  "HomeAppliance"
);

const stationerySchema = new mongoose.Schema({
  sta_material: {
    type: String,
    maxLength: 255,
  },
  sta_color: {
    type: String,
    maxLength: 255,
    required: [true, "the stationery must have color"],
  },
});

const Stationery = Product.discriminator(
  "Stationery",
  stationerySchema,
  "Stationery"
);

const clothingSchema = new mongoose.Schema({
  cl_design: {
    type: String,
    maxLength: 255,
  },
  cl_material: {
    type: String,
    maxLength: 255,
  },
  cl_size: {
    type: String,
    enum: {
      values: ["sm", "md", "l", "xl", "xxl", "xxxl"],
      message: "Size either: sm, md, l, xl, xxl, xxxl",
    },
    required: [true, "a clothing must have size"],
  },
});

const Clothing = Product.discriminator("Clothing", clothingSchema, "Clothing");

// Create Views

// Product.db.createCollection("Foods", {
//   viewOn: "products",
//   pipeline: [
//     {
//       $match: {
//         pr_category: "Foodstuff",
//       },
//     },
//   ],
// });

const FoodsView = mongoose.model("Foods", {}, "Foods");

//

// Product.db.createCollection("OutdatedFoods", {
//   viewOn: "Foods",
//   pipeline: [
//     {
//       $match: {
//         fo_ep: { $lt: new Date() },
//       },
//     },
//   ],
// });

const OutdatedFoodsView = mongoose.model("OutdatedFoods", {}, "OutdatedFoods");

exports.Product = Product;
exports.Foodstuff = Foodstuff;
exports.HomeAppliance = HomeAppliance;
exports.Clothing = Clothing;
exports.Stationery = Stationery;
