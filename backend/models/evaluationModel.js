const mongoose = require("mongoose");

const evaluationSchema = mongoose.Schema({
    satisfactionRating :{String},
	resolutionRating : {Boolean},
	resolutionTiming : {Boolean},
	comments : {String},
});

module.exports = mongoose.model("Evaluation", evaluationSchema);