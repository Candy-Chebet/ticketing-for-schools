const SolutionModel = require("../models/solutionModel");

const getOneSolution = (req, res) => {
  SolutionModel
    .findOne({ _id: req.params.id })
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) =>
      res.status(200).json({
        err,
      })
    );
};
const getAllSolutions = (req, res) => {
  SolutionModel
    .find({ _id: req.params.id })
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) =>
      res.status(200).json({
        err,
      })
    );
};
const postSolution = (req, res) => {
  const solution = new SolutionModel({
    _id: req.params.id,
    satisfactionRating: req.body.satisfactionRating,
    resolutionRating: req.body.resolutionRating,
    resolutionTiming: req.body.resolutionTiming,
    comments: req.body.comments,
  });
  solution
    .save()
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
const updateOneSolution = (req, res) => {
  const solution = new SolutionModel({
    _id: req.params.id,
    satisfactionRating: req.body.satisfactionRating,
    resolutionRating: req.body.resolutionRating,
    resolutionTiming: req.body.resolutionTiming,
    comments: req.body.comments,
  });
  SolutionModel
    .updateOne(
      {
        _id: req.params.id,
      },
      solution
    )
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
const deleteOneSolution = (req, res) => {
  SolutionModel.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
module.exports = {
  getOneSolution,
  getAllSolutions,
  postSolution,
  updateOneSolution,
  deleteOneSolution,
};
