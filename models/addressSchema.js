const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "A address must have city name"],
  },
  street: {
    type: String,
    required: [true, "A address must have street name"],
  },
  alley: {
    type: String,
    required: [true, "A address must have alley name"],
  },
  pelaque: {
    type: Number,
    required: [true, "A address must have pelaque number"],
  },
  postalCode: {
    type: String,
    required: [true, "A address must have postal Code"],
    minLength: [10, "A postal code must be have 10 digits"],
    maxLength: [10, "A postal code must be have 10 digits"],
  },
});
