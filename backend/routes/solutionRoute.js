const express = require("express");
const router = express.Router();
const {
  getAllSolutions,
  getOneSolution,
  postSolution,
  updateOneSolution,
  deleteOneSolution,
} = require("../controllers/solutionController");

router.get("/:id", getOneSolution);
router.get("/", getAllSolutions);
router.post("/", postSolution);
router.put("/:id", updateOneSolution);
router.delete("/:id", deleteOneSolution);

module.exports = router;
