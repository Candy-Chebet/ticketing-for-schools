const express = require('express');
const router = express.Router();
const {
  getAllStudentTckets, 
  getOneStudentTicket, 
  postStudentTicket,
  updateStudentTicket,
  deleteOneStudentTicket
} = require("../controllers/studentTicketController");

router.get("/:id", getOneStudentTicket);
router.get("/",getAllStudentTckets)
router.post("/",postStudentTicket);
router.put("/:id",updateStudentTicket);
router.delete("/:id", deleteOneStudentTicket);

module.exports = router;
