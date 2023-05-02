const StudentTicketModel = require("../models/studentTicketModel");

// Getting specific  student ticket
const getOneStudentTicket = (req, res) => {
  StudentTicketModel.findOne({
    _id: req.params.id,
  })
    .then((ticket) => {
      res.status(200).json(ticket);
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
};

// Getting all details about the student tickets
const getAllStudentTckets = (req, res) => {
  StudentTicketModel.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
};

// posting student tickets
const postStudentTicket = (req, res) => {
  const ticket = new StudentTicketModel({
    name: req.body.name,
    problem: req.body.problem,
    description: req.body.description,
    priorityLevel: req.body.priorityLevel,
    onOffCampus: req.body.onOffCampus,
  });

  ticket
    .save()
    .then((savedTicket) => {
      res.status(201).json({
        data: savedTicket,
        message: "Ticket created successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        err,
      });
    });
};

//updating student ticket
const updateStudentTicket = (req, res) => {
  const ticket = new StudentTicketModel({
    _id: req.params.id,
    name: req.body.name,
    problem: req.body.problem,
    description: req.body.description,
    priorityLevel: req.body.priorityLevel,
    onOffCampus: req.body.onOffCampus,
  });

  StudentTicketModel.updateOne(
    {
      _id: req.params.id,
    },
    ticket
  )
    .then((response) => {
      res.status(201).json({
        message: "successfully created",
        data: response,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
};

//deleting student ticket
const deleteOneStudentTicket = (req, res, next) => {
  StudentTicketModel.deleteOne({
    _id: req.params.id,
  })
    .then((response) => {
      res.status(200).json({
        message: "Ticket Successfully deleted",
        data: response,
      });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  getOneStudentTicket,
  getAllStudentTckets,
  postStudentTicket,
  updateStudentTicket,
  deleteOneStudentTicket,
};
