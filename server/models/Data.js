const mongoose = require("mongoose");
const validate = require("mongoose-validator");

//set validator
const AirSpaceClassValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "AirSpaceClass must not exceed {ARGS[1]} characters."
  })
];

const From_CityValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "From_City must not exceed {ARGS[1]} characters."
  })
];

const To_CityValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "To_City must not exceed {ARGS[1]} characters."
  })
];

const PriceValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "Price must not exceed {ARGS[1]} characters."
  })
];

const AircraftModelValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "AircraftModel must not exceed {ARGS[1]} characters."
  })
];

const EngineModelValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "EngineModel must not exceed {ARGS[1]} characters."
  })
];

//Define the database model
//build mongoose schema
const DataSchema = new mongoose.Schema({
  AirSpaceClass: {
    type: String,
    required: [true, "AirSpaceClass is required."],
    validate: AirSpaceClassValidator
  },
  From_City: {
    type: String,
    required: [true, "From_City is required."],
    // unique: true,
    validate: From_CityValidator
  },
  To_City: {
    type: String,
    required: [true, "To_City is required."],
    validate: To_CityValidator
  },
  Price: {
    type: String,
    required: [true, "Price is required."],
    validate: PriceValidator
  },
  AircraftModel: {
    type: String,
    required: [true, "AircraftModel is required."],
    validate: AircraftModelValidator
  },
  EngineModel: {
    type: String,
    required: [true, "EngineModel is required."],
    validate: EngineModelValidator
  }
});

module.exports = mongoose.model("Data", DataSchema);
