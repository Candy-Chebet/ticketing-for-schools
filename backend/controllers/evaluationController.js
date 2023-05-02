const EvaluationModel = require("../models/evaluationModel");

const getOneEvaluation = (req, res) => {
    EvaluationModel.findOne({_id: req.params.id})
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(err => {
        res.status(200).json({
            err
        })
    })
};
const getAllEvaluations = (req, res) => {
    EvaluationModel.find()
    .then(response => {
        res.status(200).json({response})
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
};
const postEvaluation = (req, res) => {
    const evaluation = new EvaluationModel({
      _id: req.params.id,
      satisfactionRating: req.body.satisfactionRating,
      resolutionRating: req.body.resolutionRating,
      resolutionTiming: req.body.resolutionTiming,
      comments: req.body.comments,
    });
    evaluation.save()
    .then(response => {
        res.status(201).json({response})
    })
    .catch(err => {
        res.status(400).json({err})
    })
};
const updateOneEvaluation = (req, res) => {
    const evaluation = new EvaluationModel({
      _id: req.params.id,
      satisfactionRating: req.body.satisfactionRating,
      resolutionRating: req.body.resolutionRating,
      resolutionTiming: req.body.resolutionTiming,
      comments: req.body.comments,
    });
    EvaluationModel.updateOne({
        _id:req.params.id
    },
    evaluation
    ).then(response =>{
        res.status(201).json({response})
    })
    .catch(err =>{
        res.status(400).json({err})
    })
};
const deleteOneEvaluation = (req, res) => {
    EvaluationModel.deleteOne({_id: req.params.id})
    .then(response => {
        res.status(200).json({response})
    })
    .catch(err => {
        res.status(400).json({err})
    })
};
module.exports = {
  getAllEvaluations,
  getOneEvaluation,
  postEvaluation,
  updateOneEvaluation,
  deleteOneEvaluation,
};
