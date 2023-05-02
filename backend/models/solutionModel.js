const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({
  problem: {String},
  solution: {String},
  prevention: {String}
});

module.exports = mongoose.model("Solution", solutionSchema);
