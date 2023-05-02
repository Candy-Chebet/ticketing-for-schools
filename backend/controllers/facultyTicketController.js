const { response } = require("express");
const FacultyTicketModel = require("../models/facultyTicketModel");

const getOneFacultyTicket = (req, res) => {
    FacultyTicketModel.findOne({_id:req.params.id})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
}

const getAllFacultyTickets = (req, res) => {
    FacultyTicketModel.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
}

const postFacultyTickets = (req, res) => {
    const facultyTicket = new FacultyTicketModel({
      name: req.body.name,
      problem: req.body.problem,
      description: req.body.description,
      priorityLevel: req.body.priorityLevel,
      departmentAssigned: req.body.departmentAssigned,
    });

    facultyTicket.save()
    .then(response => {
        res.status(201).json({
            response
        })
    })
    .catch(err => {
        res.status(400).json({err})
    })
}

const updateOneFacultyTicket = (req, res) => {
    const facultyTicket = new FacultyTicketModel({
      _id: req.params.id, 
      name: req.body.name,
      problem: req.body.problem,
      description: req.body.description,
      priorityLevel: req.body.priorityLevel,
      departmentAssigned: req.body.departmentAssigned,
    });
    FacultyTicketModel.findOne({_id: req.params.id}, facultyTicket)
    .then(response => {
        res.status(201).json({
            response
        })
    })
    .catch(err => {
        res.status(400).json({
            err
        });
    })
}

const deleteOneFacultyTicket = (req, res) => {
    FacultyTicketModel.deleteOne({_id:req.params.id})
    .then(response => {
        res.status(200).json({response});
    })
    .catch(err => {
        res.status(400).json({err});
    })
}

module.exports = {
    getOneFacultyTicket,
    getAllFacultyTickets,
    postFacultyTickets,
    updateOneFacultyTicket,
    deleteOneFacultyTicket,
}