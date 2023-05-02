const express = require("express");
const router = express.Router();
const {getAllStudentTckets, 
    getOneStudentTicket, 
    postStudentTicket,
    updateStudentTicket,
    deleteOneStudentTicket
} = require("../controllers/studentTicketController")

router.get("/:id", getOneStudentTicket);
router.get("/",getAllStudentTckets)
router.post("/",postStudentTicket);
router.put("/:id",updateStudentTicket);
router.delete("/:id", deleteOneStudentTicket);

// Add API URL to all routes
router.get("http://localhost:3001/api/student-tickets/:id", getOneStudentTicket);
router.get("http://localhost:3001/api/student-tickets", getAllStudentTckets);
router.post("http://localhost:3001/api/student-tickets", postStudentTicket);
router.put("http://localhost:3001/api/student-tickets/:id", updateStudentTicket);
router.delete("http://localhost:3001/api/student-tickets/:id", deleteOneStudentTicket);

module.exports = router;
