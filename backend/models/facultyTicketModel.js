const mongoose = require("mongoose");

const facultyTicketSchema = mongoose.Schema({
    name: {String},
	problem :{String},
	description :{String},
	priorityLevel :{String},
	departmentAssigned :{String},
});

module.exports = mongoose.model('FacultyTicket', facultyTicketSchema)