const express = require("express");
const {
  getOneEvaluation,
  getAllEvaluations,
  postEvaluation,
  updateOneEvaluation,
  deleteOneEvaluation,
} = require("../controllers/evaluationController");
const routes = express.Router;

routes.get("/:id", getOneEvaluation);
routes.get("/", getAllEvaluations);
routes.post("/", postEvaluation);
routes.put("/", updateOneEvaluation);
routes.delete("/", deleteOneEvaluation);

module.express = routes;
