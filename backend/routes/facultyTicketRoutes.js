const express = require("express");
const router = express.Router()
const {
    getOneFacultyTicket,
    getAllFacultyTickets,
    postFacultyTickets,
    updateOneFacultyTicket,
    deleteOneFacultyTicket
} = require("../controllers/facultyTicketController");

router.get("/:id",getOneFacultyTicket);
router.get("/", getAllFacultyTickets);
router.put("/:id",updateOneFacultyTicket);
router.post("/",postFacultyTickets);
router.delete("/:id", deleteOneFacultyTicket);

module.exports = router;